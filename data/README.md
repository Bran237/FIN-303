# Shared course database

`course.js` contains the exact `SEED_CONTENT` object from the uploaded Financial Management Study Companion. `notebook-source.js` retains every original notebook chapter, summary, problem, solution, quotation, note, slide, video reference, card, quiz, and data-enrichment pass. The only helper change is making `st1QBox(want, chapter)` receive its chapter explicitly.

`database.js` is the single registry that connects these source objects. Chapters use `ch1`–`ch6`; original objectives use `lo1.1` style identifiers. Notes, homework, cards, quizzes, formulas, and summaries all carry `chapterId` and `learningObjectiveIds`. Source objects remain unmodified.

Notebook numbers remain original source labels. Several Chapter 5 and Chapter 6 labels differ from the companion objectives, so `NOTEBOOK_OBJECTIVE_MAP` records the topic crosswalk. Notebook topics 6.7 and 6.8 have explicit supplemental objective IDs and provenance; they are not presented as supplied textbook objectives. Where the source does not identify an exact objective for a card or question, the registry records a chapter-level association instead of inventing an exact link.

Normalized records use namespaced IDs such as `note:ch3:3.1a`, `homework:ch3:p31`, `quiz:notebook:ch3:0`, and `card:notebook:ch3:0`. `homeworkIds` connects each note to its immediately related work; homework records link back through `notebookSectionIds`.

`provenance.json` records upload hashes, source-content hashes, and source counts. Intentional content edits require reviewing and updating the relevant fingerprint. Feature-only changes should leave source hashes unchanged. Formulas are indexed from concept fields, textbook formula blocks, notebook formulas, worked steps, exam reviews, and formula cards; repeated formulas in distinct source contexts retain their provenance.
