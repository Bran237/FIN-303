# Migration validation

The supplied Study Companion and Notebook were examined before migration. Their educational data was extracted without rewriting textbook prose, original quotations, notes, questions, or worked solutions. `data/provenance.json` records source fingerprints and collection counts; data tests compare the migrated objects against independently extracted fingerprints.

The central registry contains six chapters, 42 original learning objectives plus two explicitly identified supplemental notebook topics, 36 notebook sections, 74 homework records, 205 quiz questions, and 391 flashcards across both source collections. Formula records retain their source context rather than deduplicating away explanations.

## Executed checks

- `npm ci` installed the exact development lockfile successfully.
- `npm test`: 21 tests passed for content preservation, shared identifiers, homework relationships, source-number crosswalks, progress migration, backup validation, reference stability, cross-tab storage, reading annotations, flashcard filters, matching rounds, and exam matching answers.
- `npm run test:browser`: 12 integration groups passed using a real Chromium browser and a simulated `/FIN-303/` GitHub Pages project path. These cover chapter navigation, textbook reading, all 36 notebook sections and adjacent homework, worked solutions and completion, flashcards, complete companion and notebook quizzes, reload persistence, backup download/import, invalid-backup rejection, safe progress display, cross-tab refresh, themes, and mobile layout.
- `npm run test:advanced`: nine additional Chromium groups passed for all ten practice tabs, all ten mini-games, empty-filter recovery, multiple matching rounds, crossword/recall/concept/session actions, a complete timed exam including matching, timer expiry and pause, live highlight restoration, and guided-study gates.
- The browser integration run reported zero JavaScript page errors, missing application assets, or external backend requests.
- Relative module imports resolve; `index.html` is the only application HTML entry point.

## Preserved source limitations

The source Notebook contains Chapters 3–6. The Studio clearly indicates that Chapters 1–2 have no supplied notebook notes or homework, while their textbook and study tools remain available. Existing notices about unavailable source problems and textbook material are retained.

Progress is browser-local, with portable backups. Automatic shared Firebase synchronization is replaced to meet the requirement for GitHub Pages without a backend. Same-origin legacy browser data migrates automatically; an uploaded HTML file cannot include another origin's separately stored browser progress.

External video links need connectivity. Notifications depend on browser support and permission and do not run as scheduled background alarms while the application is closed. GitHub Pages publication follows merging the project into `main` and selecting `main` with `/ (root)` in repository Pages settings.
