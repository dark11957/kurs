# Chapter 14 Completion Report

- **Title:** Nebensätze I: Gründe, Aussagen und Fragen
- **Level:** A2
- **Status:** Completed
- **Content module:** `content/a2/chapter-14.js`

## Coverage

The chapter teaches main and subordinate clause structure, verb-final position and comma placement; causal clauses with *weil* and *da*; *denn* versus *weil*; reported statements with *dass*; indirect yes/no questions with *ob*; indirect W-questions and polite questions; consequence adverbs (*deshalb, deswegen, darum, daher*); word order after connectors; and subordinate clauses containing modal verbs, Perfekt, separable verbs, and multiple verbs.

Original grammar references preserved in chapter metadata: **292, 305–311, 341–344, 373–376, 399–403, 427–429, 448–451**.

## Learning material

- Nine ordered sections are complete, from introduction through solutions and learning control.
- Two original A2 reading texts: “Ein Problem mit dem Projektformular” (186 words) and “Nachricht an das Team” (171 words), each with comprehension and grammar-observation practice.
- **28 vocabulary entries**, with translations, categories, noun articles/plurals, verb forms where relevant, and example sentences; practical expressions, word families, synonyms/contrasts, contextual examples, and practice are included.
- **Nine detailed grammar rules**, each with explanations, structures, examples, exceptions, common mistakes, memory tips, and at least three immediate practice questions. Grammar tables and comparisons are also included.
- Practical workplace dialogue, communication phrases, a scenario, guided writing, speaking prompts, and a mini-project are provided.
- **100 total questions** across learning practice and the exam; all question IDs are unique and each has a corresponding solution or model answer.
- The complete exam has **19 questions worth exactly 100 points**: reading 20, vocabulary 15, grammar 35, sentence construction 10, writing 20. It uses two new texts (119 and 133 words) and includes three writing tasks with model responses and assessment guidance.
- Reading annotations identify selected target structures with the existing annotation schema.

## Integration and validation

- Registered Chapter 14 in `content/curriculum.js` and localized its curriculum title.
- Verified the nine-section order, curriculum grammar references, vocabulary fields, rule coverage, exercise ID uniqueness, solution coverage, exam categories and point totals, new exam texts, and annotation ranges with the focused Chapter 14 smoke check.
- Loaded the chapter through the existing renderer and rendered all nine sections; `StudyExams.validateExam` returned no errors.
- Full project smoke suite: **21 checks passed**. `git diff --check` passed.

## Files modified

- `content/a2/chapter-14.js`
- `content/curriculum.js`
- `progress/chapters.json`
- `progress/reports/chapter-14.md`
- `tests/smoke.py` (Chapter 14 content and assessment checks)

## Remaining issues

No known Chapter 14 content, schema, renderer, or assessment issues. The existing cumulative assessments remain pending and are not part of this chapter unit.

## Next pending unit

Chapter 15 — **Temporal Clauses & Chronological Events**. The curriculum's scheduled cumulative assessments remain pending in the manifest.
