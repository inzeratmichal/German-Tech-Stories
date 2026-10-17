# Book 01 production checkpoint

Read the repository `books.md`, `progress.md`, and the attached `GERMAN_TECH_STORIES_GUIDE.md` before resuming.

- `manuscript.json`: single editable source; German and English paragraph pairs.
- `manuscript.de.md`: generated German reading copy.
- `learning.json`: 20 vocabulary entries and scene briefs/alt text, three multiple-choice and two written questions with answers.
- `narration.txt`: generated full German-only script, introduction/title/chapter headings included.
- `plan.md`: private outline and knowledge boundaries; contains spoilers.
- `media.json`: exact settings, existing generation identifiers and blockers. Reuse the cover job; do not submit another as a retry.
- `build-report.json`: observed counts and missing media from the last build.
- `checks.json`: actual review record. A true flag is evidence of a performed review, never an assumption.
- `artwork/cover-source.png`: preserved first landscape cover source.
- `artwork/cover.webp`: visually reviewed 2:3 cover adaptation.
- `artwork/chNN-wordNN.webp`: all 20 finished and reviewed vocabulary cards. Two reviewed corrections are documented in `artwork-repairs.json`.
- `audio/story.mp3`: complete assembled 21:35 narration, verified 44.1kHz/128kbps.
- `audio/manifest.json`, `technical-analysis.json`, `transcriptions.json`, `completeness.json`: actual assembly, decoding and transcript evidence. These do not establish a listening review.
- `../../output/pdf/die-nachricht-um-0317.pdf`: reviewed 18-page A4 print edition, German only, answers hidden.
- `../../series-settings.json`: user's durable instruction to keep Lola - Immersive Storytelling / Ny7r2ffG0v2p3DYyFvhb / eleven_v4 / mp3_44100_128 for future books.

From the repository directory, run `npm run preview:build`. The complete unpublished reading preview is `.preview/site/books/01-die-nachricht-um-0317/index.html`; `.preview` is ignored by Git. All 21 images and the full MP3 are now present. The book is awaiting the final listening check and publication.

`npm run release:build` refuses publication output until all 20 illustrations, the final cover, the full recording and required review flags are present. Existing GitHub Pages publishing automatically deploys the `main` branch root. The live root `index.html` now shows the series and the upcoming book. `_config.yml` excludes production sources and intermediate outputs. After the final listening review, `node tools/publish.cjs` runs the release guard, then copies only complete public output into the repository root while preserving unrelated files and older books. Commit and verify the automatic deployment.

## Resume order

1. Obtain a human listening review of `audio/story.mp3`: natural German delivery, names, times, technical terms, clean endings and chapter joins. The agent's audio-input tool explicitly reported unsupported input. No listening review has been claimed. User confirmed the Lola voice and required its future reuse.
2. Repair only any specifically identified weak passage; preserve all good generations. Update `checks.json` and the manifest only with actual review evidence. Required settings remain fixed in `series-settings.json`.
3. Rebuild only as needed after a change. Current final-browser checks cover four widths, loaded images, no-JavaScript reading, independent translations, hidden answers, actual speed changes, play/seeking at all boundaries, and print. The 18-page A4 PDF is rendered and checked; all 46 German paragraphs remain present.
4. Run `node tools/publish.cjs`, publish only the complete reviewed book, verify live page/assets/controls, then update repository progress to completed. The homepage is already published and verified at https://inzeratmichal.github.io/German-Tech-Stories/index.html; the book itself remains unpublished.

## Resolved format concern

The user supplied the official convert endpoint reference, which documents `mp3_44100_128` as the default. The short test, all five complete passages and the assembled MP3 were independently scanned and confirmed at 44100 Hz and 128 kbps. Do not reopen this resolved blocker solely because the plugin lacks an explicit output-format field. Verify actual outputs when generating new audio.

Original generation PNGs and individual narration passages are preserved locally and identified by cloud job/generation IDs. Optimized final artwork and the assembled recording are the canonical saved artifacts. Do not regenerate them merely to resume.
