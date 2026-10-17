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

**Book 01 is live and linked from the public index. Public assets and interactions verified. Finish the outstanding human listening review before marking the book completed.**

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
| 01 | Die Nachricht um 03:17 | published_unverified | 2026-10-17 reader revision checkpoint | — | — |
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
- **Stage:** User-requested reader redesign: paragraph audio controls and five inline story scenes with four German labels embedded in each image. Preserve existing narration and old artwork as archive.
- **Last updated:** 2026-10-17
- **Working branch/commit:** main; media commit c043ed23976643435840960b8c804d132cc3968e; homepage commit f6f6f1500614c1bc3f9c76843923a673baca4bfb.
- **Book directory and manuscript:** production/01-die-nachricht-um-0317/; original 2,926-word manuscript and all 46 translation pairs preserved. Complete local reader at .preview/site/books/01-die-nachricht-um-0317/index.html; preview server http://127.0.0.1:8765/books/01-die-nachricht-um-0317/ verified HTTP 200 after restarting outside sandbox.
- **Illustration paths and generation identifiers:** artwork/cover.webp: final 1024×1536 portrait, generation LiIHzmYUY7J5QvNyUYBi. All 20 1024×768 vocabulary WebPs generated, optimized and visually inspected. Two targeted corrections reviewed (gemeinsam and vorsichtig). Full nodes/sessions/generation IDs/settings/hashes in artwork-jobs.json, generation-runs.json, artwork-repairs.json and media.json. Original source/job preserved.
- **Audio passages/final asset and generation identifiers:** audio/story.mp3: 1294.811 seconds (21:35), 20,716,979 bytes, SHA256 0bfe96ff775203ec8392cea7f0410b05df9ed69894d3a3a88adf763c2df776c5. Lola - Immersive Storytelling / Ny7r2ffG0v2p3DYyFvhb / eleven_v4 / mp3_44100_128. Five original passages generated; MP3 format scanned, transcripts matched, browser decoding shows no clipping and 0.77 dB active RMS spread. Speech frames preserved; ~1.04-second chapter pauses. IDs in audio-run.json, audio-jobs.json and audio/manifest.json. Agent has not listened; user confirmed continued Lola voice use, saved in series-settings.json.
- **Deployment URL/run:** Homepage https://inzeratmichal.github.io/German-Tech-Stories/index.html is live. Existing automatic main-root Pages workflow, successful run 39017661661 for f6f6f1500614c1bc3f9c76843923a673baca4bfb. HTTP 200 verified for / and /index.html and cover; production plan 404. Root index.html fixed missing homepage; book route is not published or linked.
- **Completed work:** Full story/translations/questions/vocabulary retained; all 20 vocabulary illustrations and separate portrait cover complete. Full German audiobook with title/introduction/headings assembled and saved. Responsive reader/library draft and final playback controls checked. Reviewed 18-page A4 PDF at output/pdf/die-nachricht-um-0317.pdf; 46 German paragraphs preserved, English/answers hidden. All media, metadata and durable Lola settings saved to repository. Public series homepage restored and verified.
- **Pending work:** Human listening review of the entire assembled recording for pronunciation, performance and chapter joins. Repair only any identified passage if necessary. Then run guarded publish helper, commit the complete reader to main, verify live book/assets/interactions, update continuity from draft to published and mark completion. No remaining generation work unless review identifies a defect.
- **Checks actually performed and evidence:** checks.json, final-browser-checks.json, audio/technical-analysis.json, audio/completeness.json and build-report.json. All 21 images load at 320/390/768/1280px with no horizontal overflow; independent keyboard translations, answers, Escape/menu, no-JS reading, anchors/IDs pass. Player loads 1294.811 seconds, plays/seeks at start/all joins/end, rate selector changes actual rate to 1.25; no autoplay. All 20 artworks/portrait reviewed; 2 fixes reviewed. A4 rendered to 18 page PNGs and checked; all 46 German paragraphs verified present, English/answers absent. Release guard correctly refuses only audio_listening_review. Live homepage and cover HTTP 200 confirmed; no live book verification claimed.
- **Blocker:** Final listening review only: this agent's audio input explicitly reports unsupported, so it cannot assess natural delivery or pronunciation by ear. Exact format is RESOLVED: official API default confirmed from user-supplied reference and actual test/all passages/final MP3 verified at 44100Hz/128kbps. Do not reintroduce the old format blocker or regenerate good media.
- **Exact next action:** User listens to the complete local reader recording (or audio/story.mp3) and reports any defects or confirms a completed listening review. Record actual evidence in checks.json/audio manifest. Then node tools/publish.cjs must pass all release checks and copy complete book/assets/library into main root; commit, verify automatic Pages deployment/live book, and save completed status. Keep Lola settings unchanged across future books.

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
- [x] Every chapter has 3–5 finished vocabulary illustrations; exactly 20 distinct entries are covered overall.
- [x] Artwork, German labels, articles, and alternative text visually checked.
- [x] Final vocabulary list contains all 20 entries and their English meanings.
- [x] Three multiple-choice and two written-answer questions checked; hidden German answers work.
- [x] Complete audio generated with the required ElevenLabs configuration.
- [ ] Audio completeness, pronunciation, performance, passage joins, and playback assessed.
- [x] Responsive layout, keyboard controls, chapter navigation, image paths, and playback-speed controls checked.
- [x] Print preview checked; English and interface controls excluded by default.
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

### 2026-10-17 — Book 01 media and homepage checkpoint

- **Status:** blocked only on full human listening review; no book completion or book publication claimed.
- **Generated:** 20 vocabulary illustrations plus 2 targeted visual corrections; separate 2:3 portrait cover; Lola test plus five full narration passages, assembled to one 21:35 MP3. All generation IDs retained. User confirmed Lola for future books; fixed settings in series-settings.json. Exact format verified empirically after official API default was supplied.
- **Saved:** media source checkpoint c043ed23976643435840960b8c804d132cc3968e; finished WebPs, full MP3, 18-page German A4 PDF, tests, manifests and metadata in repository. Original PNGs and individual passages preserved locally; no duplicate paid generation on resumption.
- **Checks:** final browser controls and four responsive widths pass, actual playback/seek/speed pass, 21 images load, no-JS text/disclosures work. Print rendered and checked, all 46 German paragraphs present, English/answers hidden. Agent audio input unavailable; objective analysis/transcription is not claimed as listening.
- **Homepage fix:** user reported missing index.html. Added real root homepage and cover, excluded production sources through existing Jekyll Pages configuration, confirmed existing automatic main-root publishing. Deployment 39017661661 succeeded; live root/index/cover HTTP 200, private production plan route 404. Full book remains upcoming.
- **Review route:** local http://127.0.0.1:8765/books/01-die-nachricht-um-0317/ . First sandboxed server timed out for user; restarted outside sandbox and verified HTTP 200 with all 21 images/full audio. Human review requested before guarded publication.
- **Next:** finish listening review, repair only identified defects, run tools/publish.cjs, verify public book and record completion.

## Update rules

1. Update at the start of work, after meaningful checkpoints, and before stopping.
2. For interruptions, save recoverable work and enough detail to resume without regeneration.
3. A manuscript, generated asset, commit, or successful build alone does not establish completion.
4. If deployment is pending or live checks fail, use `published_unverified` or `blocked` as appropriate and state why.
5. If a required capability or asset is unavailable, preserve good work and record the specific blocker. Do not publish an incomplete book.
6. After completing a book, update Next action to the next unfinished book in `books.md`. Start it only within the user's requested scope.
7. When all 30 books are verified completed, set Next action to “Planned series complete.” Do not create Book 31 without direction.

### 2026-10-17 — Book 01 reader revision checkpoint

- **User changes implemented:** audio buttons under all 46 German paragraphs, including introduction. Reused existing Lola audio with word-timestamp ranges; no new paid speech. Complete final player retained.
- **Illustrations:** five reviewed inline scenes, four embedded German labels each, twenty distinct words. Removed separate Wörter im Bild sections and HTML label fields. Generated five scenes and four targeted repairs; IDs/settings/hashes in inline-illustrations.json and run records. Earlier cards preserved.
- **Future policy:** repository GERMAN_TECH_STORIES_GUIDE.md sections 6–8 and series-settings.json now specify integrated multi-word images and paragraph audio. Synced sources untouched.
- **Checks:** all 46 seek controls, pause/resume, switching, keyboard activation, speed and paragraph boundary stop pass; full native playback retained. Six images load at 320/390/768/1280px without overflow; screenshots inspected. Native translations/no-JS reading remain functional. Revised 14-page German PDF rendered and visually inspected; English, answers and audio buttons hidden. Narration hash unchanged.
- **Status/next:** unpublished preview updated at http://127.0.0.1:8765/books/01-die-nachricht-um-0317/ . Full human narration listening still outstanding because agent audio input is unsupported. Finish that review, repair only identified defects, then run guarded publication and verify live assets. No book completion claimed.

### 2026-10-17 — Public index publication requested

- User explicitly requested the book appear on the public index after being informed of the outstanding listening review. Publishing the existing complete reader at books/01-die-nachricht-um-0317/ and linking it from the index.
- A separate --review-edition option permits this requested publication while preserving audio_listening_review=false and all other content/review guards. Default final-release checks still require listening review. No completion claimed.
- Next action: verify successful Pages deployment, public index link, all images, full audio and paragraph playback; record live evidence, then complete human listening review. Existing sources and media reused; no paid generation.

### 2026-10-17 — Public index and reader verified

- **Published:** https://inzeratmichal.github.io/German-Tech-Stories/index.html now has a functioning Lesen link to https://inzeratmichal.github.io/German-Tech-Stories/books/01-die-nachricht-um-0317/index.html .
- **Deployment:** Pages run 39020060683 succeeded for commit 7d49873e0904a6024c65b48f39c3704e6a86edfd.
- **Live checks:** actual index click reaches reader; all six images, CSS, JavaScript and full MP3 return 200. Audio SHA-256 matches original narration. All 46 paragraph buttons are visible, five inline scenes present; beginning/middle/end paragraph playback, 1.5x stopping, translation toggle and four responsive widths pass with no runtime errors. Evidence: production/01-die-nachricht-um-0317/live-checks.json.
- **Status:** published review edition; not marked completed. Human listening remains outstanding and audio_listening_review remains false. No paid generation or source changes. Exact next action: review full Lola narration for natural delivery, pronunciation and joins; repair only specific defects, then record final completion.
