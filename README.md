# FIN 303 Course Mastery Studio

One static website combines the Financial Management Study Companion and FIN Notebook. It uses one entry point, shared chapter identifiers, and one browser-local progress record. Publish this directory directly to GitHub Pages: no backend, API key, or build step is needed.

## Run locally

From this directory:

```sh
python3 -m http.server 8000
```

Open the server in your browser. Serve the files over HTTP rather than double-clicking `index.html`; JavaScript modules require an HTTP origin. The same files work over HTTPS on GitHub Pages.

## Publish on GitHub Pages

1. Commit this complete directory, keeping `index.html` at the repository root.
2. Push it to `main`.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then save.
5. Open the published address GitHub shows after deployment.

Keep `assets`, `css`, `js`, and `data` beside `index.html`. All application asset paths and module imports are relative, including when the site is published at a repository subpath. Hash navigation needs no server routing configuration. `.nojekyll` tells Pages to serve the static project directly.

## Sections

| Section | Features |
| --- | --- |
| Dashboard | Course progress, chapter mastery, learning objectives, weekly goals, and shared notebook/homework totals |
| Textbook | Full chapter readings, original quotations, worked examples, glossary, concept popups, and saved highlighting |
| Notebook | “Write This Down,” optional explanations, completion checks, review flags, and each section’s related homework immediately afterward |
| Homework | Original problem statements, worked solutions, calculator instructions, assignment labels, and solved-state tracking |
| Study | Guided reading, complete term review, flashcards, chapter quizzes, and correction of missed questions |
| Practice | Flashcards, quizzes, matching, crossword, active recall, concept cards, mini games, exam preparation, weak areas, and study sessions |

Supplied summaries, lecture slides, homework cross-links, timestamped video links, exam-review checklists, printable notes, and the Notebook’s own card/quiz decks remain available through the section tools.

The studio covers Chapters 1–8. The Companion supplies textbook prose and its study tools for Chapters 1–6; the uploaded Notebook supplies Chapters 3–8. Chapters 7–8 include bond valuation, risk and return, notes, worked homework, flashcards, quizzes, lecture slides, and exam reviews. For those chapters, Textbook opens the supplied chapter summary, Study opens the Notebook review, and Practice opens the Notebook cards. Chapters 1–2 retain a clear notice that no Notebook material was supplied.

Search includes Companion concepts and Notebook topics, terms, and formulas. Notebook section labels follow the updated upload, including corrected Chapter 5–6 numbering. Notices about missing homework, textbook material, and video coverage are retained.

## Progress and backups

Study time, XP, streaks, quizzes, flashcards, spaced review, highlights, Notebook completion, homework completion, review flags, exam checklists, theme, and navigation are saved together in this browser.

Use **Export backup** to download the shared progress as JSON. Use **Import backup** to restore that file on another device or browser. Export your current progress first if you want to retain it before importing another backup. Imports validate before replacing state and do not replace the educational database.

Progress belongs to the browser profile and site origin. Clearing site data or using another origin creates a different record. If storage is unavailable, the app keeps progress in memory for the session and can still export it. Export before leaving that session.

The application has no account or automatic cloud sync. The original hardcoded shared Firebase document is replaced by local progress and portable backups so the whole site works without a backend.

### Original application progress

On its first run on the same browser origin, the Studio migrates these original keys without deleting them:

- `finmgmt_progress`
- `fin303_nb_done`
- `fin303_hw_done`
- `fin303_review`
- `fin303_exam_check`
- `fin303_theme`

The shared key is `fin303_mastery_studio_v1`. The update migrates older Studio storage and backups to the corrected Chapter 5–6 section numbering, keeping completion, solved key-term groups, and review flags attached to their original topics. Progress already migrated by the uploaded Notebook is recognized through its `fin303_mig_sections_v2` marker. Original Companion `{content, progress}` JSON exports can restore their progress while preserving the new Notebook state and content. An HTML upload carries course content, not the browser’s separately saved completion data. Different domains and `file://` documents cannot automatically share browser storage. The original Notebook has no backup export, so its prior completion migrates automatically only on the same origin.

## Project structure

```text
index.html                  Single main entry
assets/                     Local visual assets
css/                        Shared shell and scoped feature styles
data/
  course.js                 Exact Companion course content
  notebook-source.js        Exact enriched Notebook content
  database.js               Central registry and canonical identifier crosswalk
  provenance.json           Source fingerprints and preservation counts
js/
  app.js                    Shared routing, chapter navigation, backups, and theme
  core/                     Browser progress and reading helpers
  modules/                  Dashboard, Textbook, Study, and Practice
  companion/                Companion services and scoped lifecycle
  practice/                 Individual study activities
  notebook/                 Notebook, Homework, resources, review, and practice
tests/                      Data, storage, and browser regression checks
docs/ARCHITECTURE.md         Extension and maintenance guidance
```

## Development checks

Node.js and Playwright are development tools only; published pages do not need them.

```sh
npm ci
npx playwright install chromium
npm test
npm run test:browser
npm run test:advanced
```

On a machine with system Chromium, the browser runner can use `CHROMIUM_PATH` or `PLAYWRIGHT_CHROMIUM_EXECUTABLE` where supported; see the runners for their exact setup. Both browser runners start their own temporary static servers; no manually running server is required. Tests cover source preservation, shared identifiers, storage migration, backups, navigation, reading, Notebook completion, homework solutions, cards, quizzes, and responsive behavior. No production build is required.

## Maintain the project

Edit educational content in `data/course.js` or `data/notebook-source.js`. Keep identifier relationships and topic-numbering differences in `data/database.js`. For example, Notebook section `5.10` covers perpetuities and maps to canonical `lo5.10`; section `5.8` covers both `lo5.8` and `lo5.9`. Supplemental Notebook topics explicitly identify their origin rather than pretending missing textbook objectives exist.

Feature modules should use the shared database and store instead of creating separate chapter datasets or storage keys. Scoped DOM listeners and styles prevent controls in one section from handling another section’s events. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the module contracts and lifecycle.

The provenance manifest fingerprints supplied educational values. Intentional content edits need a deliberate manifest update and review; feature-only changes should leave those fingerprints unchanged.

## Browser limits

Core learning tools do not require external services. External lecture videos require a network connection. Daily reminders depend on browser notification support and permission; they run while the app is open and do not schedule background notifications after it closes. The notification worker does not cache the course for offline use.
