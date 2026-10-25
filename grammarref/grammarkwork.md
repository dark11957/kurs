# GRAMMARWORK — REPEATABLE AGENT EXECUTION INSTRUCTIONS

**Purpose:** Read this file on **every** grammar-reference work session. `grammarreference.md` is the authoritative scope and content roadmap. This file tells you **how to execute one safe, verifiable batch**. Do not treat either file as permission to rewrite the existing learning website.

## 0. Mandatory reading order (every run)
1. Read `grammarwork.md` in full.
2. Read `grammarreference.md` in full. If its actual filename differs, locate the master grammar-reference plan and report the discrepancy; do not invent its contents.
3. Inspect the existing curriculum / chapter plan, chapterwork instructions, chapter index/manifest, relevant lessons, and the current grammar-reference implementation.
4. Read existing progress records: the checklist in the master plan, topic manifest, coverage map, and previous batch log (if present). **Files and data are the source of truth, not your memory.**
5. Check `git status` before editing. If another agent has uncommitted work (especially Export/Import, index, learn, progress management), **do not discard, reset, overwrite, or mix its changes**.

## 1. Decide which mode applies
**INITIALIZE:** If `grammatik.html`, its styles/scripts, topic manifest, and content storage are not implemented yet, perform the one-time setup specified in `grammarreference.md` Section 6. Create the reference infrastructure plus **at most four complete starter topic cards**. Do not claim the entire reference is complete.

**CONTENT BATCH (normal):** If the reference is already initialized, produce **exactly 3–4 new, unfinished topics** per run. Never regenerate completed topics or entire groups just to fill a batch. A user-requested correction or bug fix is a separate **MAINTENANCE** mode and should not silently create new topics.

**MAINTENANCE:** Fix only the specifically requested bugs/content corrections. Test the fix and record it; do not mark unrelated topic work done.

## 2. Select the next 3–4 topics
- Follow the starter queue T001–T024 and then the extended inventory built from groups G01–G40, **in order unless the user requests other priorities**.
- The 40 groups are organizational categories, **not 40 cards**. Each group may have many independently searchable entries.
- Cross-check the queue against the original A1–B1 curriculum so no important topic is missed.
- Check for topic duplicates/overlaps before adding. Use **stable IDs** and preserve existing URLs/data contracts.
- Record the chosen IDs, titles, group, level, and current implementation state **before** editing.
- If fewer than three valid unfinished topics remain, add only what remains and explain why.

## 3. Content specification — each new grammar card
Produce **concise, useful German-first reference content**, not a full lesson:
- Clear German title; `A1`, `A2`, or `B1`; category and discoverable search keywords, including alternate spellings and short English equivalents.
- `summaryDe`: plain German meaning; `glossEn`: brief English gloss **when useful**, not a complete English translation.
- `whenToUseDe`: when the form is used, with practical context.
- `ruleDe`: the exact relevant rule, including **word order, finite verb position, and required case/preposition** wherever applicable.
- **1–3 natural, correct German examples**, with short English gloss only for difficult meaning.
- `pitfallDe`: common error or key contrast when relevant (e.g., **weil**: verb-final vs **deshalb**: V2).
- Relevant `relatedTopicIds`; never point to nonexistent reference records.
- `sourceRefs`: actual inspected curriculum/lesson sources.
- `lessonLinks`: **only verified live chapter URLs**, ideally with real subsection anchors. If unavailable, use `[]`, `coverageStatus: "missing-lesson"` and the visible text **„Noch keine passende Lektion“**. Never invent chapter numbers, routes, or anchors.

**For verbs**, additionally verify:
- Infinitive, short English meaning, separable/inseparable/reflexive properties (where applicable).
- Präsens (including irregular `du` / `er-sie-es` changes), Präteritum, Perfekt **with haben/sein + Partizip II**; add Konjunktiv II when important.
- Governed case and preposition, plus one idiomatic usage example.
- Distinguish **Hilfsverb** from **tense**; ensure spelling and conjugation are accurate.

Maintain the exact existing structured-data schema defined in `grammarreference.md` or the implemented schema. Do not introduce one-off HTML cards with duplicated content.

## 4. Implementation rules
- Use **plain HTML/CSS/JavaScript** compatible with static GitHub Pages; no server, build tool, or framework.
- Reference UI lives in `grammatik.html`, with its own **scoped handwritten-notebook stylesheet** and data-driven renderer.
- Keep `index.html`, `learn.html`, chapter rendering, chapter files, student progress, and Export/Import behavior unchanged except for the **minimal verified navigation link** where originally authorized.
- Notebook look: lined off-white paper, modest pencil/ink highlights, readable handwriting, large text, clear examples and tables; no text-as-images.
- Keep topic search, A1/A2/B1/type filters, group navigation, direct links, and chapter links working as batches grow.
- GitHub Pages uses repository subpaths; **avoid root-absolute `/...` URLs** unless existing route architecture explicitly requires them. Test under an HTTP server, not only `file://`.
- Loading failures must show a human-readable error state, **never a blank content area**.
- Do not modify localStorage progress keys for reference-content generation. Grammar-topic authoring status is not student completion status.

## 5. Verify before recording DONE
For **every** topic in the batch:
1. Validate its structured data: required fields, stable ID, group ID, level, examples, array structure, and no duplicates.
2. Check German usage: morphology, auxiliaries, spelling, capitalization, punctuation, cases, and word order. Verify uncertain forms rather than guessing.
3. Search by German title/synonym and by English gloss; confirm it appears in the correct group/filter.
4. Follow **each lesson link** and confirm the destination and anchor exist. If impossible, mark `missing-lesson` honestly.
5. Test the card's layout for wide and narrow screens and accessible text contrast.
6. Ensure previously completed entries still load; test switching groups, direct reference links, browser back/forward if supported, and chapter navigation.
7. Confirm no regressions to original `index.html`, `learn.html`, or Export/Import.

Run existing scripts/tests when available. **Never claim browser/visual testing occurred if you could not run it.** Report limitations and errors explicitly.

## 6. Update progress — REQUIRED at the end of every batch
Keep the master roadmap and actual data synchronized:
- Mark only **validated, implemented** topic IDs `DONE` in the checklist/manifest.
- Record topic ID, group, title, level, real content file, verified lesson href **or `NO LESSON`**, and completion date.
- Update `data/grammar-reference/coverage-map.json` when present; record verified sources and uncovered chapter gaps.
- Maintain `data/grammar-reference/work-log.md` (create if absent) with one dated entry per run, noting added/fixed IDs, validations performed, skipped topics and reasons, and the **next 3–4 IDs**.
- Ensure the manifest/group counters reflect actual topic entries; **never mark an entire group complete until every enumerated required topic has passed QA**.
- If you could not finish or verify an item, keep it `TODO` or `IN PROGRESS` and describe the blocker. Do not misrepresent progress.

## 7. Output format after each run (brief and exact)
Report:
- **Mode:** INITIALIZE / CONTENT BATCH / MAINTENANCE.
- **Completed:** `T### — title (group)` for every verified topic.
- **Lesson links:** real linked chapters/anchors, or `NO LESSON`.
- **Files changed:** list filenames.
- **Checks:** what actually ran and passed; what could not be verified.
- **Next batch:** 3–4 unfinished topic IDs/titles, selected from the roadmap.

## 8. Hard stop rules
- Do **not** rewrite existing 11+ lessons or the original grammar curriculum.
- Do **not** replace the existing landing page or classic learning interface.
- Do **not** remove, overwrite, or refactor another agent's concurrent uncommitted work.
- Do **not** generate more than four new topics per ordinary run.
- Do **not** invent grammar forms, English meanings, chapter links, or completed QA claims.
- Do **not** begin an unrequested Supabase integration or rebuild Export/Import.
- Do **not** conclude the A1–B1 encyclopedia is complete after finishing only the 24 starter cards. Audit the entire G01–G40 inventory and original syllabus first.

**Default next action:** If initialization has been completed, implement the **next 3–4 uncompleted topics**, verify them, update roadmap/coverage/work log, and stop.