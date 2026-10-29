import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { CONTENT, NOTEBOOK_CHAPTERS, DB, learningObjectiveIds, getChapter, getNotebookChapter } from '../data/database.js';
import { st1QBox } from '../data/notebook-source.js';

const fingerprint = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');

test('all source educational values match independently extracted upload fingerprints', () => {
  assert.equal(fingerprint(CONTENT), 'f975565c6f0a1d92b7901e4d4ec47091c1f284977d12dfd1e57e814823887c2c');
  assert.equal(fingerprint(NOTEBOOK_CHAPTERS), '79c8441b3eb0ac9fbc4d0ab35f15ab5e0df42d2d2acb54672ae8c02b37d09524');
});

test('all supplied chapters and source collections are preserved', () => {
  assert.equal(CONTENT.course.chapters.length, 6);
  assert.equal(CONTENT.learningObjectives.length, 42);
  assert.equal(CONTENT.concepts.length, 229);
  assert.equal(CONTENT.quiz.length, 151);
  assert.equal(CONTENT.caseStudies.length, 15);
  assert.deepEqual(NOTEBOOK_CHAPTERS.map(chapter => [chapter.id, chapter.notebook.length, chapter.homework.length, chapter.homeworkConcept.length, chapter.cards.length, chapter.quiz.length, chapter.slides.length]), [
    ['ch3', 8, 6, 3, 41, 10, 18], ['ch4', 8, 13, 5, 43, 14, 31], ['ch5', 12, 25, 4, 41, 15, 30], ['ch6', 9, 7, 8, 37, 15, 16],
    ['ch7', 13, 12, 14, 57, 16, 26], ['ch8', 7, 8, 5, 33, 16, 29],
  ]);
  assert.equal(DB.notebooks.length, 57);
  assert.equal(DB.homework.length, 114);
  assert.equal(DB.quizzes.length, 237);
  assert.equal(DB.flashcards.length, 481);
  assert.equal(DB.formulas.length, 510);
});

test('all normalized records resolve to canonical chapter and objective identifiers', () => {
  const objectives = new Map(DB.learningObjectives.map(objective => [objective.id, objective]));
  assert.equal(objectives.size, 64);
  for (const collection of ['notebooks', 'homework', 'quizzes', 'flashcards', 'formulas', 'summaries']) {
    assert.equal(new Set(DB[collection].map(record => record.id)).size, DB[collection].length, `${collection} IDs are unique`);
    for (const record of DB[collection]) {
      assert.ok(getChapter(record.chapterId), `${collection}: ${record.id} has a chapter`);
      assert.ok(record.learningObjectiveIds.length, `${collection}: ${record.id} is linked`);
      for (const id of record.learningObjectiveIds) assert.equal(objectives.get(id)?.chapterId, record.chapterId, `${record.id} -> ${id}`);
    }
  }
});

test('every notebook homework reference points to preserved solutions and back to its notes', () => {
  const homework = new Map(DB.homework.map(record => [record.id, record]));
  for (const note of DB.notebooks) {
    for (const id of note.homeworkIds) {
      const problem = homework.get(id);
      assert.ok(problem, `${note.id} -> ${id}`);
      assert.equal(problem.chapterId, note.chapterId);
      assert.ok(problem.notebookSectionIds.includes(note.id));
      assert.ok(problem.kind === 'key-terms' || problem.q || problem.given || problem.body);
    }
  }
});

test('topic crosswalks preserve different source numbering and identify supplemental topics honestly', () => {
  assert.deepEqual(learningObjectiveIds('ch3', '3.1a'), ['lo3.1']);
  assert.deepEqual(learningObjectiveIds('ch5', '5.10'), ['lo5.10']);
  assert.deepEqual(learningObjectiveIds('ch5', '5.13'), ['lo5.13', 'lo5.14']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.2'), ['lo6.2']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.3'), ['lo6.3']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.8'), ['lo6.7-notebook']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.9'), ['lo6.8-notebook']);
  assert.deepEqual(learningObjectiveIds('ch5', '5.9', 'companion'), ['lo5.9']);
  assert.deepEqual(learningObjectiveIds('ch5', 'lo5.10'), ['lo5.10']);
  assert.deepEqual(learningObjectiveIds('ch1', '6.7'), []);
  assert.equal(DB.learningObjectives.find(record => record.id === 'lo6.7-notebook').supplemental, true);
  assert.equal(getNotebookChapter('ch1'), null);
});

test('missing-source notices and original question statements are not silently replaced', () => {
  for (const id of ['ch3', 'ch4', 'ch6']) assert.ok(getNotebookChapter(id).missingHw.length);
  assert.match(getNotebookChapter('ch6').missingHw.join(' '), /not provided/);
  assert.equal(NOTEBOOK_CHAPTERS.flatMap(chapter => chapter.homework).filter(problem => typeof problem.q === 'string' && problem.q.length > 0).length, 71);
});

test('the shared registry includes both new chapters without inventing Companion content', () => {
  assert.deepEqual(DB.course.chapters, ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8']);
  assert.deepEqual(CONTENT.course.chapters, ['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']);
  assert.equal(CONTENT.chapters.ch7, undefined);
  for (const id of ['ch7', 'ch8']) {
    assert.equal(getChapter(id).notebookChapterId, id);
    for (const note of getNotebookChapter(id).notebook) {
      assert.deepEqual(learningObjectiveIds(id, note.num), [`lo${note.num}-notebook`]);
      assert.ok(DB.learningObjectives.find(objective => objective.id === `lo${note.num}-notebook`).supplemental);
    }
  }
  assert.match(getNotebookChapter('ch6').notebook.find(note => note.num === '6.2').notes.join(' '), /Flight to quality/);
});

test('new bond key-term questions include the complete a–l assignment', () => {
  const chapter = getNotebookChapter('ch7');
  const html = st1QBox(null, chapter);
  assert.match(html, /<b>k\.<\/b>/);
  assert.match(html, /<b>l\.<\/b>/);
  assert.ok(html.includes(chapter.st1q.l));
});
