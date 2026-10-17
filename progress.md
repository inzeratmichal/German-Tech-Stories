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

**Audit existing repository work and deployments, then identify the earliest unfinished book.**

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
| 01 | Die Nachricht um 03:17 | unverified | — | — | — |
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

No active production checkpoint has been verified. Fill the fields below when work starts. Before switching books, preserve the previous checkpoint in the History and completion records section.

- **Book number/title:** Not yet selected; repository audit pending.
- **Status:** unverified
- **Stage:** Repository and deployment audit.
- **Last updated:** 2026-10-17
- **Working branch/commit:** Not recorded.
- **Book directory and manuscript:** Not recorded.
- **Illustration paths and generation identifiers:** Not recorded.
- **Audio passages/final asset and generation identifiers:** Not recorded.
- **Deployment URL/run:** Not recorded.
- **Completed work:** This tracker has been prepared; no book production is claimed.
- **Pending work:** Audit existing work, read `books.md`, and select the earliest unfinished book.
- **Checks actually performed and evidence:** None recorded for book content or deployment.
- **Blocker:** No production blocker established; repository state remains unverified.
- **Exact next action:** Read live `books.md`, inspect existing book files and deployments, and reconcile this register.

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

- [ ] Current `books.md`, preceding story context, and continuity reviewed.
- [ ] Complete German story edited for plot, continuity, grammar, and mostly B1 language with selected B2 vocabulary.
- [ ] Every story paragraph has a matching hidden English translation; individual toggles work.
- [ ] Every chapter has 3–5 finished vocabulary illustrations; exactly 20 distinct entries are covered overall.
- [ ] Artwork, German labels, articles, and alternative text visually checked.
- [ ] Final vocabulary list contains all 20 entries and their English meanings.
- [ ] Three multiple-choice and two written-answer questions checked; hidden German answers work.
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

## Update rules

1. Update at the start of work, after meaningful checkpoints, and before stopping.
2. For interruptions, save recoverable work and enough detail to resume without regeneration.
3. A manuscript, generated asset, commit, or successful build alone does not establish completion.
4. If deployment is pending or live checks fail, use `published_unverified` or `blocked` as appropriate and state why.
5. If a required capability or asset is unavailable, preserve good work and record the specific blocker. Do not publish an incomplete book.
6. After completing a book, update Next action to the next unfinished book in `books.md`. Start it only within the user's requested scope.
7. When all 30 books are verified completed, set Next action to “Planned series complete.” Do not create Book 31 without direction.
