# Chapter 05 Completion Report

## Chapter and status

- **Title:** Modalverben und Kommunikation im Alltag
- **Level:** A1
- **Status:** Completed

## Grammar coverage

The chapter covers the seven assigned modal verbs and their present-tense forms; ability and possibility; obligation and the contrast between *müssen* and *sollen*; permission, prohibition, and the contrast between *nicht müssen* and *nicht dürfen*; intention, preference, and polite wishes; *mögen* versus *gern*; infinitives without *zu*; main-clause sentence brackets and questions; an introductory recognition example of modal position in a subordinate clause; contextually omitted infinitives; and polite requests and suggestions.

Original grammar references: **105, 130, 163–170, 173–182, 298, 716–723**.

The modal paradigms, infinitive construction, and contextual uses were checked against the Leibniz Institute for German Language’s [grammis entry on modal verbs](https://grammis.ids-mannheim.de/systematische-grammatik/380) and its [entry on modal verbs without an infinitive](https://grammis.ids-mannheim.de/systematische-grammatik/1550).

## Learning material

- All nine required sections are present in the established order.
- Two original learning texts: a weekend plan and a workplace message.
- Two new examination texts, distinct from both learning texts.
- 20 vocabulary entries with English glosses, word categories, noun articles/plurals, useful forms, and examples.
- 8 detailed grammar rules, each with tables or examples, exceptions, common errors, tips, references, and at least three immediate exercises.
- Practical dialogue, useful expressions, real-life scenario, guided writing, speaking prompts, and a mini-project.
- 67 practice questions and 21 examination questions: **88 unique question IDs** with corresponding answer-key entries. Open questions include model responses or assessment guidance.
- Three examination writing tasks with model answers and scoring criteria.

## Integration and files

- `content/a1/chapter-05.js` — complete chapter module using the existing schema.
- `content/curriculum.js` — German chapter title and loader registration.
- `tests/smoke.py` — Chapter 05 content, answer, language, annotation, scoring, and integration checks.
- `progress/chapters.json` — Chapter 05 completion status and file paths.
- `progress/reports/chapter-05.md` — this report.

No infrastructure or chapter-specific CSS changes were needed.

## Validation performed

- Confirmed nine sections, 20 vocabulary entries, eight grammar rules, and coverage of the assigned topics and references.
- Checked all 88 IDs, objective answers, multiple-choice options, open-response models, and answer-key coverage.
- Checked that grammar annotation offsets point to the intended phrases in the reading text.
- Confirmed both examination texts are new and that the point totals equal exactly 100: reading 20, vocabulary 15, grammar 35, sentence construction 10, writing 20.
- Rendered all nine sections using the production renderer in a GJS runtime harness; the production examination validator returned no errors.
- Focused Chapter 05 content smoke test passed. The full project smoke suite passed: **10 tests** (`python3 -m unittest tests.smoke -v`).

## Remaining issues

No known content or integration blockers. A full manual browser click-through was not performed; rendering and examination configuration were checked with the production JavaScript runtime.

## Next pending unit

**Cumulative Test A1.1 — Chapters 01–03** remains pending in the curriculum schedule. Chapter 05 was completed as explicitly requested; no cumulative assessment or later chapter was generated in this task.
