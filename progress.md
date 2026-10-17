# German Tech Stories — Production Progress

Repository: `inzeratmichal/German-Tech-Stories`  
Series: **Die Nachrichten von morgen**  
Tracker prepared: **2026-10-17**

## Read first

- Read the current repository versions of this file and `books.md` before starting work.
- `books.md` governs the book order, plots, and canon. This file records actual production state.
- Initial statuses are **unverified**: existing manuscripts, assets, commits, and published books have not been audited. Do not interpret this as evidence that nothing has been created.
- Titles below follow the agreed series roadmap. Reconcile them with the current `books.md` before production; preserve book numbers and any approved revisions.
- Unless the user selects a book, resume the earliest unfinished book before starting the next one. A request for the next book means one complete book.
- Re-read this file before saving updates. Preserve previous entries and other contributors' changes.

## Next action

**Resume Book 01 — Die Nachricht um 03:17. Resolve exact ElevenLabs MP3 format control; finish artwork/audio and final checks before publication.**

If the audit confirms there is no existing work, begin **Book 01 — Die Nachricht um 03:17**. Reuse existing text, illustrations, and audio wherever suitable. Do not restart completed work or duplicate paid generations.

## Status values

| Status | Meaning |
|---|---|
| unverified | Existing work has not yet been checked. |
| not_started | Checked; production has not begun. |
| in_progress | Work is underway; the current checkpoint gives the exact stage. |
| blocked | A required step cannot proceed; record the blocker and next action. |
| ready_to_publish | All required content and prepublication checks pass. |
| published_unverified | Deployed, but live checks are pending or have failed. |
| completed | Required checks pass, the live book and assets are verified, and completion is saved here. |

## Book register

Use the Evidence column to link to an existing checkpoint, supporting repository files, or a completion record below. Use ISO dates (`YYYY-MM-DD`). Leave unknown dates and URLs unset.

| No. | Book | Status | Evidence | Completed date | Verified live URL |
|---|---|---|---|---|---|
| 01 | Die Nachricht um 03:17 | in_progress | 2026-10-17 draft checkpoint | — | — |
| 02 | Elf Minuten zu früh | unverified | — | — | — |
| 03 | Der Schlüssel im Regen | unverified | — | — | — |
| 04 | Das Haus ohne Verbindung | unverified | — | — | — |
| 05 | Eine Stimme im Archiv | unverified | — | — | — |
| 06 | Der leere Platz | unverified | — | — | — |
| 07 | Das Paket aus dem Norden | unverified | — | — | — |
| 08 | Die Frau auf der Fähre | unverified | — | — | — |
| 09 | Miras Unterschrift | unverified | — | — | — |
| 10 | Die Tür am Ende des Flurs | unverified | — | — | — |
| 11 | Drei verschiedene Morgen | unverified | — | — | — |
| 12 | Der Fehler im Schnee | unverified | — | — | — |
| 13 | Ein Fenster bleibt dunkel | unverified | — | — | — |
| 14 | Der Tag, der anders kam | unverified | — | — | — |
| 15 | Hinter der nächsten Minute | unverified | — | — | — |
| 16 | Der bestellte Stillstand | unverified | — | — | — |
| 17 | Die falsche Umleitung | unverified | — | — | — |
| 18 | Was die Stadt nicht sah | unverified | — | — | — |
| 19 | Ein sicherer Fehler | unverified | — | — | — |
| 20 | Die Stadt als Versuch | unverified | — | — | — |
| 21 | Das verschwundene Protokoll | unverified | — | — | — |
| 22 | Zwei Kopien der Wahrheit | unverified | — | — | — |
| 23 | Der Zeuge am Fluss | unverified | — | — | — |
| 24 | Die Nacht der offenen Fragen | unverified | — | — | — |
| 25 | Was wir verschwiegen haben | unverified | — | — | — |
| 26 | Am Morgen danach | unverified | — | — | — |
| 27 | Die letzte Vorhersage | unverified | — | — | — |
| 28 | Ohne geheime Wege | unverified | — | — | — |
| 29 | Eine Entscheidung für alle | unverified | — | — | — |
| 30 | Morgen gehört niemandem | unverified | — | — | — |

## Current checkpoint

Production started after reading the live roadmap and tracker and the attached guide.

- **Book number/title:** 01 — Die Nachricht um 03:17.
- **Status:** in_progress
- **Stage:** All artwork and full Lola narration generated; targeted image corrections reviewed. Assembling audio and completing browser/print checks; final listening review unavailable to agent.
- **Last updated:** 2026-10-17
- **Working branch/commit:** main; source checkpoint 61be14629368d02234ea6217413dc19683568aad.
- **Book directory and manuscript:** production/01-die-nachricht-um-0317/manuscript.json (single bilingual source); manuscript.de.md; learning.json; narration.txt. Local preview: .preview/site/books/01-die-nachricht-um-0317/index.html.
- **Illustration paths and generation identifiers:** artwork/cover-source.png: saved/visually inspected 1280×720 source; final 2:3 adaptation pending. ElevenLabs gpt-image-2 flow TRZ0PRZjlFUzTOcoeH9A, node EXnUpAhGpus0KGZnp2o6, session gUPE3Ci7Jv5nEBKY0Jya, generation tstTKemwJJfejGafFCsk; one variation. All 20 vocabulary scene briefs/alt texts ready in learning.json; illustrations not generated.
- **Audio passages/final asset and generation identifiers:** audio/story.mp3 assembled (1294.81 seconds, 20,716,979 bytes); five source passages preserved locally. Lola - Immersive Storytelling voice Ny7r2ffG0v2p3DYyFvhb, eleven_v4, mp3_44100_128. IDs/settings in audio-jobs.json, audio-run.json and audio/manifest.json. All five returned transcripts match complete passage scripts; objective decoding shows no clipping and less than 0.8dB active RMS spread. Not listened to by agent.
- **Deployment URL/run:** None. No publication attempted; draft preview ignored by Git. Main had no site files or workflow at audit; expected Pages URL inaccessible through web tool, so current hosting state remains unverified.
- **Completed work:** 2,926 German story words, five chapters, 46 paragraph translation pairs; standalone cooling fault/local maintenance path resolved without later-series revelations. Exactly 20 vocabulary entries, three multiple-choice and two written questions/model answers. Shared Falkenbrück Reader static template and build, spoiler-free library draft, narration source, production plan, continuity.md, and review records saved.
- **Pending work:** 20 finished vocabulary illustrations; final portrait cover adaptation; exact-format narration test and complete reviewed audiobook; final whole-page/media, true 200% zoom, keyboard traversal and A4 pagination checks; inspect/configure Pages workflow, publish and verify live.
- **Checks actually performed and evidence:** checks.json, browser-checks.json and build-report.json: story/translation self-edit; vocabulary/chapter and question review; 320/390/768/1280px library and nested reader have no horizontal overflow, present images load, 46 translations start closed and toggle independently by keyboard, hidden answers reveal, Escape closes contents, anchors/IDs valid, no-JS reading works. Print CSS hides English/answers/toolbar; actual pagination pending. 390/1280px hero screenshots and cover source visually inspected. Release build correctly refuses missing illustrations. No audio-speed/listening or live verification claimed.
- **Blocker:** Output-format concern resolved: official API default confirmed and actual test/all five passages verified MP3 44100 Hz / 128 kbps. Agent runtime cannot accept audio input for listening; human review of complete assembled recording remains required before publication.
- **Exact next action:** Obtain a supported ElevenLabs plugin control or documented guarantee for mp3_44100_128 with eleven_v4 and voice Ny7r2ffG0v2p3DYyFvhb; then create/review the representative audio test. Reuse saved cover source/job, finish portrait adaptation and 20 4:3 cards using model schema settings. Follow production README resume order. Never regenerate existing work merely to resume.

### Required audio configuration

```ini
provider="ElevenLabs ChatGPT plugin"
voice_id="Ny7r2ffG0v2p3DYyFvhb"
model_id="eleven_v4"
output_format="mp3_44100_128"
```

Record actual supported delivery settings, pronunciation guidance, job identifiers, and saved outputs in the active book's checkpoint. A listed configuration does not mean generation has succeeded. Check existing jobs before submitting another generation.

### Completion checklist for the active book

Tick a box only after the corresponding work and verification are complete. Record paths or concise evidence in the checkpoint. Reset this checklist only after preserving the finished book's record below.

- [x] Current `books.md`, preceding story context, and continuity reviewed.
- [x] Complete German story edited for plot, continuity, grammar, and mostly B1 language with selected B2 vocabulary.
- [x] Every story paragraph has a matching hidden English translation; individual toggles work.
- [ ] Every chapter has 3–5 finished vocabulary illustrations; exactly 20 distinct entries are covered overall.
- [ ] Artwork, German labels, articles, and alternative text visually checked.
- [x] Final vocabulary list contains all 20 entries and their English meanings.
- [x] Three multiple-choice and two written-answer questions checked; hidden German answers work.
- [ ] Complete audio generated with the required ElevenLabs configuration.
- [ ] Audio completeness, pronunciation, performance, passage joins, and playback assessed.
- [ ] Responsive layout, keyboard controls, chapter navigation, image paths, and playback-speed controls checked.
- [ ] Print preview checked; English and interface controls excluded by default.
- [ ] Deployment succeeded; live page, images, audio, and interactions verified.
- [ ] Existing books remain accessible after shared-site changes.
- [ ] Continuity updated and completion evidence prepared.

After these checks pass, update the register to `completed` with the date, verified live URL, and evidence reference. Save this file to the repository and confirm the update persisted. If saving fails, report that completion tracking is unsaved rather than claiming the workflow is finished.

## History and completion records

### 2026-10-17 — Tracker prepared

Created the 30-book register from the agreed roadmap. Repository production state has not been verified. No book is marked completed.

For each later checkpoint or completion, append a concise record containing the book number/title, date, status/stage, artifact paths, checks and evidence, relevant commit/deployment, remaining issues, and exact next action. Keep completed records available to future agents.

### 2026-10-17 — Book 01 draft checkpoint

- **Book/status:** 01 — Die Nachricht um 03:17; blocked at media production, not published or completed.
- **Source commit:** 61be14629368d02234ea6217413dc19683568aad; production/01-die-nachricht-um-0317/ contains manuscript, translations, learning material, narration script, plan, media IDs and actual review records. template/ and tools/build.cjs build an unpublished local preview; release mode refuses incomplete media.
- **Evidence:** 2,926 German words, five chapters, 46 translation pairs, 20 entries, five questions. Edge draft checks at four widths, native disclosures/no-JS, anchors and print hiding pass; final illustration/audio/A4 checks remain open. One cover source generated and visually reviewed; landscape-to-portrait adaptation pending. Twenty vocabulary illustrations not generated.
- **Blocker/next:** Exact ElevenLabs output-format control unavailable. Resolve mp3_44100_128 before the narration test; preserve required voice/model. Follow production README for remaining media and publication. No paid audio or duplicate cover generation.
- **Access note:** Command-line push lacked credentials; saved all 18 source/artwork files through the connected GitHub plugin instead. No credentials or signed media links committed. Local Der letzte Ping and synced sources remain untouched.

## Update rules

1. Update at the start of work, after meaningful checkpoints, and before stopping.
2. For interruptions, save recoverable work and enough detail to resume without regeneration.
3. A manuscript, generated asset, commit, or successful build alone does not establish completion.
4. If deployment is pending or live checks fail, use `published_unverified` or `blocked` as appropriate and state why.
5. If a required capability or asset is unavailable, preserve good work and record the specific blocker. Do not publish an incomplete book.
6. After completing a book, update Next action to the next unfinished book in `books.md`. Start it only within the user's requested scope.
7. When all 30 books are verified completed, set Next action to “Planned series complete.” Do not create Book 31 without direction.
