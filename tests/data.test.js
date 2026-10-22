import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { CONTENT, NOTEBOOK_CHAPTERS, DB, learningObjectiveIds, getChapter, getNotebookChapter } from '../data/database.js';

const fingerprint = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');

test('all source educational values match independently extracted upload fingerprints', () => {
  assert.equal(fingerprint(CONTENT), 'f975565c6f0a1d92b7901e4d4ec47091c1f284977d12dfd1e57e814823887c2c');
  assert.equal(fingerprint(NOTEBOOK_CHAPTERS), '594a5599db41712fcee7c4e7004963513f17e5438f8fb1cfd89a8b69e55ebe9c');
});

test('all supplied chapters and source collections are preserved', () => {
  assert.equal(CONTENT.course.chapters.length, 6);
  assert.equal(CONTENT.learningObjectives.length, 42);
  assert.equal(CONTENT.concepts.length, 229);
  assert.equal(CONTENT.quiz.length, 151);
  assert.equal(CONTENT.caseStudies.length, 15);
  assert.deepEqual(NOTEBOOK_CHAPTERS.map(chapter => [chapter.id, chapter.notebook.length, chapter.homework.length, chapter.homeworkConcept.length, chapter.cards.length, chapter.quiz.length, chapter.slides.length]), [
    ['ch3', 8, 6, 3, 41, 10, 18], ['ch4', 8, 13, 5, 43, 14, 31], ['ch5', 12, 25, 4, 41, 15, 30], ['ch6', 8, 7, 8, 37, 15, 16],
  ]);
  assert.equal(DB.notebooks.length, 36);
  assert.equal(DB.homework.length, 74);
  assert.equal(DB.quizzes.length, 205);
  assert.equal(DB.flashcards.length, 391);
  assert.equal(DB.formulas.length, 414);
});

test('all normalized records resolve to canonical chapter and objective identifiers', () => {
  const objectives = new Map(DB.learningObjectives.map(objective => [objective.id, objective]));
  assert.equal(objectives.size, 44);
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
  assert.deepEqual(learningObjectiveIds('ch5', '5.9'), ['lo5.10']);
  assert.deepEqual(learningObjectiveIds('ch5', '5.11'), ['lo5.13', 'lo5.14']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.3'), ['lo6.3', 'lo6.4']);
  assert.deepEqual(learningObjectiveIds('ch6', '6.7'), ['lo6.7-notebook']);
  assert.deepEqual(learningObjectiveIds('ch5', '5.9', 'companion'), ['lo5.9']);
  assert.deepEqual(learningObjectiveIds('ch5', 'lo5.10'), ['lo5.10']);
  assert.deepEqual(learningObjectiveIds('ch1', '6.7'), []);
  assert.equal(DB.learningObjectives.find(record => record.id === 'lo6.7-notebook').supplemental, true);
  assert.equal(getNotebookChapter('ch1'), null);
});

test('missing-source notices and original question statements are not silently replaced', () => {
  for (const id of ['ch3', 'ch4', 'ch6']) assert.ok(getNotebookChapter(id).missingHw.length);
  assert.match(getNotebookChapter('ch6').missingHw.join(' '), /not provided/);
  assert.equal(NOTEBOOK_CHAPTERS.flatMap(chapter => chapter.homework).filter(problem => typeof problem.q === 'string' && problem.q.length > 0).length, 51);
});
