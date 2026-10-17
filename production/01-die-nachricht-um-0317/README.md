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
- `artwork/cover-source.png`: first generated landscape cover source. Preserve it. Final portrait adaptation is still required.

From the repository directory, run `npm run preview:build`. The unpublished reading preview is `.preview/site/books/01-die-nachricht-um-0317/index.html`; `.preview` is ignored by Git. It intentionally lacks unfinished media rather than using fake illustrations or an empty audio player. It is not the finished book.

`npm run release:build` refuses publication output until all 20 illustrations, the final cover, the full recording and required review flags are present. No hosting workflow is configured yet. When ready, inspect the actual GitHub Pages settings and deploy only `dist`, never `production` or the draft preview. Preserve any existing live deployment discovered then.

## Resume order

1. Resolve the ElevenLabs exact `mp3_44100_128` output-control limitation before the short audio test. Use voice `Ny7r2ffG0v2p3DYyFvhb` and model `eleven_v4`; no fallback or duplicate paid generation.
2. Complete portrait cover adaptation and generate the 20 illustrations from `learning.json`, checking the actual model schema for 4:3 before generation. Keep labels in HTML and save generation IDs immediately. Visually review every image.
3. Generate/review the representative narration test, then full coherent passages, assemble one MP3 and assess actual audio.
4. Rebuild; review desktop/mobile, keyboard, no-JavaScript, speed controls and A4 print with the real media. Recheck German, translations and continuity after any text change; old reviews must not survive a changed manuscript unnoticed.
5. Configure the repository's publishing workflow, publish only the complete book, verify live assets and controls, then update repository progress to completed.
