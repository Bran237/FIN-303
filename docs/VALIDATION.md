# Migration validation

The supplied Study Companion and Notebook were examined before migration. Their educational data was extracted without rewriting textbook prose, original quotations, notes, questions, or worked solutions. `data/provenance.json` records source fingerprints and collection counts; data tests compare the migrated objects against independently extracted fingerprints.

The updated central registry contains eight chapters, 42 original learning objectives plus 22 explicitly identified supplemental Notebook topics, 57 Notebook sections, 114 homework records, 237 quiz questions, 481 flashcards, 510 formula records, and 126 summaries across both source collections. Formula records retain their source context rather than deduplicating away explanations.

## Checks for the Chapters 3–8 Notebook update

- `npm test`: 27 tests passed, including exact uploaded-content fingerprints, all new chapter references, the complete Chapter 7 a–l key-term assignment, corrected numbering, and one-time progress migration from storage and backups.
- `npm run test:browser`: 15 integration groups passed under a simulated `/FIN-303/` project path. They cover all 57 Notebook sections, new chapter summaries and routes, worked homework, reviews, 55 new lecture slides, video-coverage notices, cards, all 32 added quiz questions, search, dashboard totals, mobile layout, reloads, and backup restoration.
- `npm run test:advanced`: all nine existing advanced Chromium groups passed, preserving Companion games, exams, highlighting, and guided study.
- The browser suites reported no JavaScript page errors. The main integration run also reported no missing assets or external backend requests.

These checks ran against the working checkout with system Chromium. Publication to GitHub Pages is separate from local validation. The earlier results below describe the baseline before this upload update.

## Baseline checks before this update

- `npm ci` installed the exact development lockfile successfully.
- `npm test`: 21 tests passed for content preservation, shared identifiers, homework relationships, source-number crosswalks, progress migration, backup validation, reference stability, cross-tab storage, reading annotations, flashcard filters, matching rounds, and exam matching answers.
- `npm run test:browser`: 12 integration groups passed using a real Chromium browser and a simulated `/FIN-303/` GitHub Pages project path. These cover chapter navigation, textbook reading, all 36 notebook sections and adjacent homework, worked solutions and completion, flashcards, complete companion and notebook quizzes, reload persistence, backup download/import, invalid-backup rejection, safe progress display, cross-tab refresh, themes, and mobile layout.
- `npm run test:advanced`: nine additional Chromium groups passed for all ten practice tabs, all ten mini-games, empty-filter recovery, multiple matching rounds, crossword/recall/concept/session actions, a complete timed exam including matching, timer expiry and pause, live highlight restoration, and guided-study gates.
- The browser integration run reported zero JavaScript page errors, missing application assets, or external backend requests.
- Relative module imports resolve; `index.html` is the only application HTML entry point.

## Preserved source limitations

The updated source Notebook contains Chapters 3–8; the Companion remains unchanged with Chapters 1–6. The Studio indicates that Chapters 1–2 have no supplied Notebook notes or homework. Chapters 7–8 use the supplied Notebook summaries, exam review, cards, and quizzes rather than invented Companion prose or tools. Existing notices about unavailable source problems and textbook material are retained. The supplied video transcript has no Chapter 7–8 coverage, and those chapters retain that notice.

Progress is browser-local, with portable backups. Automatic shared Firebase synchronization is replaced to meet the requirement for GitHub Pages without a backend. Same-origin legacy browser data migrates automatically, including corrected Chapter 5–6 section keys and already-migrated Notebook records; an uploaded HTML file cannot include another origin's separately stored browser progress.

External video links need connectivity. Notifications depend on browser support and permission and do not run as scheduled background alarms while the application is closed. GitHub Pages publication follows merging the project into `main` and selecting `main` with `/ (root)` in repository Pages settings.
