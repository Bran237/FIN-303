import test from 'node:test';
import assert from 'node:assert/strict';
import { createStore, STORAGE_KEY, BACKUP_FORMAT, defaultState } from '../js/core/store.js';

function memory(values = {}) {
  const map = new Map(Object.entries(values));
  return { getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, value), map };
}
const backup = state => JSON.stringify({ format: BACKUP_FORMAT, version: 1, state });

test('migrates both original applications while retaining all original keys', () => {
  const storage = memory({ finmgmt_progress: JSON.stringify({ xp: 24, flashcardStatus: { c1: 'known' } }), fin303_nb_done: '{"ch3:3.1a":true}', fin303_hw_done: '{"ch3:p31":true}', fin303_review: '{"sec:ch3:3.1a":true}', fin303_exam_check: '{"ex:ch3:0":true}', fin303_theme: 'dark' });
  const store = createStore({ storage });
  assert.equal(store.state.companion.xp, 24); assert.equal(store.state.companion.flashcardStatus.c1, 'know');
  assert.equal(store.state.notebook.done['ch3:3.1a'], true); assert.equal(store.state.notebook.homeworkDone['ch3:p31'], true);
  assert.equal(store.state.settings.theme, 'dark'); store.save();
  assert.ok(storage.getItem(STORAGE_KEY)); assert.ok(storage.getItem('finmgmt_progress')); assert.ok(storage.getItem('fin303_nb_done'));
});
test('round trips progress without replacing cached object and array references', () => {
  const store = createStore({ storage: memory() });
  const companion = store.state.companion, done = store.state.notebook.done, attempts = companion.quizAttempts;
  companion.xp = 18; attempts.push({ ts: 1, correct: true, conceptId: 'c' }); done['ch3:3.1a'] = true;
  const original = store.exportBackup(); store.reset(); store.importBackup(original);
  assert.equal(store.state.companion, companion); assert.equal(store.state.notebook.done, done); assert.equal(companion.quizAttempts, attempts);
  assert.equal(companion.xp, 18); assert.equal(attempts.length, 1); assert.equal(done['ch3:3.1a'], true);
});
test('invalid and unsafe backups reject atomically', () => {
  const store = createStore({ storage: memory() }); store.state.companion.xp = 30;
  const before = store.exportBackup();
  for (const value of ['{', '{}', '{"format":"other","version":1,"state":{}}', '{"format":"fin303-course-mastery-studio","version":2,"state":{}}', '{"xp":1,"__proto__":{"polluted":true}}', '{"progress":{"quizAttempts":"bad"}}']) {
    assert.throws(() => store.importBackup(value)); assert.deepEqual(JSON.parse(store.exportBackup()).state, JSON.parse(before).state);
  }
  assert.equal({}.polluted, undefined);
});
test('legacy companion exports preserve notebook progress and educational data is not imported', () => {
  const store = createStore({ storage: memory() }); store.state.notebook.done.n = true;
  store.importBackup(JSON.stringify({ content: { bad: true }, progress: { xp: 9, flashcardStatus: { c: 'known' } } }));
  assert.equal(store.state.companion.xp, 9); assert.equal(store.state.companion.flashcardStatus.c, 'know'); assert.equal(store.state.notebook.done.n, true); assert.equal(store.state.content, undefined);
});
test('storage errors leave memory and backups usable', () => {
  const storage = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('full'); } };
  const store = createStore({ storage }); store.state.companion.xp = 7; store.save();
  assert.equal(store.status.persistent, false); assert.ok(store.status.message.includes('export'));
  assert.equal(JSON.parse(store.exportBackup()).state.companion.xp, 7);
});
test('subscribers and valid cross-tab updates refresh stable references', () => {
  const target = new EventTarget(), storage = memory(), store = createStore({ storage, eventTarget: target });
  const seen = [], companion = store.state.companion; store.subscribe((state, detail) => seen.push(detail.reason)); store.save('manual');
  const state = defaultState(); state.companion.xp = 42;
  const event = new Event('storage'); Object.assign(event, { key: STORAGE_KEY, storageArea: storage, newValue: JSON.stringify(state) }); target.dispatchEvent(event);
  assert.equal(store.state.companion, companion); assert.equal(companion.xp, 42); assert.deepEqual(seen, ['manual', 'external']);
  const bad = new Event('storage'); Object.assign(bad, { key: STORAGE_KEY, newValue: '{"companion":{"xp":-1}}' }); target.dispatchEvent(bad); assert.equal(companion.xp, 42);
});
test('new shared storage wins over old legacy values on subsequent visits', () => {
  const storage = memory({ finmgmt_progress: '{"xp":8}' });
  const first = createStore({ storage }); first.state.companion.xp = 99; first.save();
  assert.equal(createStore({ storage }).state.companion.xp, 99);
});
test('original guided study, recall, highlights and notebook activity survive backup import', () => {
  const state = defaultState();
  state.companion.srs.c = { interval: 3, dueDate: '2026-10-25', lastRating: 'knew', streak: 2 };
  state.companion.highlights.push({ id: 'h', text: '<b>literal text</b>', category: 'definition', source: { id: 'lo3.1', label: 'Annual report' }, anchor: { start: 2, end: 9 } });
  state.companion.chapterFlow.ch3 = { termsOpened: ['c'], sectionsViewed: ['3.1::0'], flashcardsReviewed: ['c'], quiz: { pool: ['q'], attempted: ['q'], missedEver: [], missQueue: [], round: 1, completed: true, topicMisses: { '3.1': 1 } } };
  state.notebook.flashcards.ch3 = { known: [1, 2], seen: [0, 1, 2] }; state.notebook.quizHistory.push({ id: 'q', correct: true, answer: 1, ts: 1, chapterId: 'ch3', learningObjectiveIds: ['lo3.1'] });
  const store = createStore({ storage: memory() }); store.importBackup(backup(state)); assert.deepEqual(store.state, state);
});
test('sparse historical guided study is normalized and invalid nested data rejects', () => {
  const store = createStore({ storage: memory() }); store.importBackup('{"progress":{"chapterFlow":{"ch3":{"termsOpened":["c"]}}}}');
  assert.deepEqual(store.state.companion.chapterFlow.ch3.quiz.missQueue, []);
  const before = cloneState(store);
  for (const payload of [{ chapterFlow: { ch3: { quiz: { attempted: 'wrong' } } } }, { highlights: [{ source: 'bad' }] }, { srs: { c: [] } }]) {
    assert.throws(() => store.importBackup(JSON.stringify({ progress: payload }))); assert.deepEqual(store.state, before);
  }
});
test('corrupt primary falls back to legacy without silently overwriting unreadable bytes', () => {
  const storage = memory({ [STORAGE_KEY]: '{broken', finmgmt_progress: '{"xp":13}' });
  const store = createStore({ storage }); assert.equal(store.state.companion.xp, 13); assert.equal(storage.getItem(STORAGE_KEY), '{broken');
  store.save(); assert.equal(JSON.parse(storage.getItem(STORAGE_KEY)).companion.xp, 13);
});
test('legacy known status is normalized during both load and direct progress import', () => {
  const store = createStore({ storage: memory() }); store.importBackup('{"flashcardStatus":{"c":"known"}}'); assert.equal(store.state.companion.flashcardStatus.c, 'know');
});
test('Chapters 7 and 8 navigation and notebook activity survive storage and backup restoration', () => {
  const storage = memory(), store = createStore({ storage });
  store.state.notebook.done['ch7:7.1'] = true;
  store.state.notebook.homeworkDone['ch8:p81'] = true;
  store.state.notebook.flashcards.ch8 = { known: [0], seen: [0, 1] };
  for (const id of ['ch7', 'ch8']) {
    store.setNavigation(id, 'notebook');
    assert.equal(createStore({ storage }).state.navigation.chapterId, id);
    const restored = createStore({ storage: memory() });
    restored.importBackup(store.exportBackup());
    assert.deepEqual(restored.state, store.state);
  }
  const before = cloneState(store);
  assert.throws(() => store.setNavigation('ch9', 'notebook'));
  assert.deepEqual(store.state, before);
});
test('old studio maps migrate corrected section labels once without moving companion progress', () => {
  const state = defaultState();
  delete state.notebook.sectionNumberingVersion;
  state.notebook.done = { 'ch5:5.9': true, 'ch5:5.10': false, 'ch5:5.11': true, 'ch5:5.12': true, 'ch6:6.2': true, 'ch6:6.3': false, 'ch6:6.4': true, 'ch6:6.5': false, 'ch6:6.6': true, 'ch6:6.7': false, 'ch6:6.8': true, 'ch3:3.1a': true };
  state.notebook.homeworkDone = { 'ch5:st1@5.9': true, 'ch6:st1@6.8': true, 'ch6:p62': true };
  state.notebook.review = { 'sec:ch5:5.10': true, 'sec:ch6:6.6': true, 'hw:ch6:st1@6.7': true, 'hw:ch6:p62': true };
  state.notebook.examCheck = { 'ex:ch6:0': true };
  state.notebook.flashcards.ch6 = { known: [1, 3], seen: [0, 1, 3] };
  state.notebook.quizHistory = [{ id: 'quiz:notebook:ch6:0', chapterId: 'ch6', correct: true }];
  state.companion.chapterFlow.ch6 = { termsOpened: [], sectionsViewed: ['6.2::0'] };
  const storage = memory({ [STORAGE_KEY]: JSON.stringify(state), fin303_mig_sections_v2: '1' });
  const store = createStore({ storage });
  assert.deepEqual(store.state.notebook.done, { 'ch5:5.10': true, 'ch5:5.11': false, 'ch5:5.13': true, 'ch5:5.16': true, 'ch6:6.3': true, 'ch6:6.4': false, 'ch6:6.5': true, 'ch6:6.6': false, 'ch6:6.7': true, 'ch6:6.8': false, 'ch6:6.9': true, 'ch3:3.1a': true });
  assert.deepEqual(store.state.notebook.homeworkDone, { 'ch5:st1@5.10': true, 'ch6:st1@6.9': true, 'ch6:p62': true });
  assert.deepEqual(store.state.notebook.review, { 'sec:ch5:5.11': true, 'sec:ch6:6.7': true, 'hw:ch6:st1@6.8': true, 'hw:ch6:p62': true });
  assert.deepEqual(store.state.companion.chapterFlow.ch6.sectionsViewed, ['6.2::0']);
  for (const name of ['examCheck', 'flashcards', 'quizHistory']) assert.deepEqual(store.state.notebook[name], state.notebook[name]);
  assert.equal(store.state.notebook.sectionNumberingVersion, 2);
  store.save();
  assert.deepEqual(createStore({ storage }).state, store.state);
  const restored = createStore({ storage: memory() });
  restored.importBackup(backup(state));
  assert.deepEqual(restored.state, store.state);
  restored.importBackup(restored.exportBackup());
  assert.deepEqual(restored.state, store.state);
});
test('original Notebook migration marker distinguishes corrected legacy maps and leaves originals intact', () => {
  for (const corrected of [false, true]) {
    const storage = memory({
      fin303_nb_done: '{"ch5:5.10":true,"ch6:6.7":true}',
      fin303_hw_done: '{"ch6:st1@6.7":true}',
      fin303_review: '{"sec:ch6:6.7":true}',
      ...(corrected ? { fin303_mig_sections_v2: '1' } : {}),
    });
    const store = createStore({ storage });
    assert.deepEqual(store.state.notebook.done, corrected ? { 'ch5:5.10': true, 'ch6:6.7': true } : { 'ch5:5.11': true, 'ch6:6.8': true });
    assert.equal(store.state.notebook.homeworkDone[corrected ? 'ch6:st1@6.7' : 'ch6:st1@6.8'], true);
    assert.equal(store.state.notebook.review[corrected ? 'sec:ch6:6.7' : 'sec:ch6:6.8'], true);
    assert.equal(storage.getItem('fin303_nb_done'), '{"ch5:5.10":true,"ch6:6.7":true}');
    store.save();
    assert.deepEqual(createStore({ storage }).state, store.state);
  }
});
test('renumbering validates old backups before mutation and rejects unsupported numbering atomically', () => {
  const store = createStore({ storage: memory() });
  store.state.notebook.done['ch6:6.3'] = true;
  const before = cloneState(store);
  for (const notebook of [{ done: { 'ch6:6.2': 'invalid' } }, { sectionNumberingVersion: 3 }, { sectionNumberingVersion: '2' }]) {
    assert.throws(() => store.importBackup(backup({ notebook })));
    assert.deepEqual(store.state, before);
  }
});
function cloneState(store) { return JSON.parse(JSON.stringify(store.state)); }
