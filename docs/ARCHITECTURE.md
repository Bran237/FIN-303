# Architecture

`index.html` loads `js/app.js` as a browser ES module. The application is served as ordinary static files, including from a GitHub Pages project subpath. Relative imports and hash routes avoid backend and bundler requirements.

## Shared shell

`js/app.js` owns the six main sections, selected chapter, theme, search, progress backups, and browser history. It mounts the Companion and Notebook tools into scoped hosts within that shell. Those hosts are implementation boundaries; they share the same course data, chapter selector, progress store, and origin.

The module hosts keep event delegation and queries local. Feature controls must not add document-wide click handlers that respond to another module’s buttons. Timers and observers should pause or disconnect when their feature becomes inactive and clean up when the host is destroyed.

## Content registry

`data/course.js` preserves the original Companion `SEED_CONTENT` value. `data/notebook-source.js` preserves the fully enriched original Notebook chapter data, including question text, solutions, notes, summaries, slides, video references, cards, and quizzes. Source strings remain unchanged so quotations and calculations can be checked against the uploads.

`data/database.js` derives a central registry for chapters, learning objectives, readings, Notebook sections, financial formulas, homework, flashcards, and quizzes. It exports compatibility-shaped original objects for migrated renderers and canonical records for cross-module links.

Chapter identifiers are `ch1` through `ch6`. Canonical objective identifiers use forms such as `lo5.10`. Notebook subsection numbers are source labels, not assumed objective IDs: several Chapter 5 and 6 topics have different numbering between the supplied apps. The explicit crosswalk maps them by subject while preserving printed labels. Source-only supplemental Notebook topics carry provenance and separate objective IDs.

A feature should look up records in this shared layer and attach canonical chapter/objective metadata to rendered content. It should not fork a new content database. Related homework retains backreferences to the corresponding Notebook notes so it appears immediately after those notes.

`data/provenance.json` records source fingerprints and content totals. Preservation tests compare the extracted values with those fingerprints; schema tests check every identifier and cross-reference.

## Progress store

`js/core/store.js` owns the versioned browser state under `fin303_mastery_studio_v1`:

- `companion`: study time, streaks, XP, quizzes, cards, recall scheduling, highlights, badges, and guided chapter flow.
- `notebook`: note completion, solved homework, review flags, exam checks, Notebook cards, and quiz history.
- `settings` and `navigation`: common theme and selected section/chapter.

The store migrates original local-storage keys without removing them. Versioned exports contain all shared progress and settings. Imports validate before mutation and never replace course content. Stable object references let mounted modules keep their state bindings across imports. Storage errors leave in-memory progress and backup export usable. Cross-tab changes notify mounted views.

The old Firebase integration is intentionally absent: a static course needs no shared remote account or backend. Cross-device transfer uses backup files.

## Feature boundaries

- `js/modules/dashboard.js`: Companion overview and mastery UI; the shell adds shared Notebook/homework totals.
- `js/modules/textbook.js`: readings, glossary, concept links, highlighting, and source tracing.
- `js/modules/study.js`: guided reading, complete term review, gated cards, quizzes, and missed-answer review.
- `js/modules/practice.js` and `js/practice/`: independent Companion practice activities.
- `js/companion/`: instance-local services, navigation adapters, modals, progress views, action dispatch, and lifecycle.
- `js/notebook/notebook.js`: Write This Down and adjacent homework.
- `js/notebook/homework.js`: shared problem, answer, and solution rendering.
- `js/notebook/resources.js`: summaries, slides, videos, and printing resources.
- `js/notebook/exam.js`, `practice.js`, and `dashboard.js`: preserved Notebook drills, review, and completion metrics.

Each suite receives the shared store and outer navigation callbacks. Neither suite creates another website, iframe, origin, or copy of the course state. Internal context objects preserve the original feature functions while making their dependencies explicit.

## Safe changes

For a UI-only change, leave source data and provenance untouched. Keep new styles scoped to the appropriate host. Add or extend the meaningful functional check for the behavior being changed, then run relevant source/store tests and browser regression checks. For a new chapter, update the shared content and identifier mapping first, then verify its routes and references across all six modules.

Browser-local progress and imported backup text are user data: render text through text nodes or escape it before inserting into HTML. Keep educational source markup separate from user-entered progress strings.
