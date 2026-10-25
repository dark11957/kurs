# Kapitel 29 — Besondere Verbkonstruktionen und Bedeutungsunterschiede

## Completion status

**Completed.** The chapter contains all nine ordered sections and is registered in the curriculum loader.

## Grammar topics covered

The chapter teaches 17 detailed rule blocks, each with an explanation, formula, examples, exceptions, common mistakes, a memory tip, and immediate practice:

- *lassen* + infinitive and *sich lassen* + infinitive
- *brauchen* + *zu*, *haben* + *zu*, and *sein* + *zu*
- Common Funktionsverbgefüge
- *es geht um* + accusative, *es handelt sich um* + accusative, and *es kommt auf* + accusative + *an*
- Position and movement pairs: *liegen/legen*, *stehen/stellen*, *sitzen/setzen*, and *hängen*
- *wissen/kennen*, *bringen/holen*, and *lernen/studieren*
- *hören/zuhören*, *sehen/ansehen*, and *fragen/bitten*
- *sagen/erzählen* and *machen/tun*
- *werden/bekommen* and *bekommen/erhalten*
- *gefallen/mögen*, *fehlen/vermissen*, and *gehören/besitzen*
- Meaning and separability contrasts with *umfahren* and *übersetzen*
- Infinitives with and without *zu*, *dass* and indirect question clauses, perception and motion verbs, *bleiben* + infinitive, separable *zu*-infinitives, and *um … zu* versus *damit*

Original grammar references are preserved in metadata: **120–126, 473–482, 639–663** (42 references).

## Content produced

- Two original learning texts (314 and 265 words); Text A includes interactive grammar annotations.
- 30 vocabulary entries with translations, categories, noun articles and plurals, useful verb forms, and examples.
- 17 grammar rule blocks with 53 mini-exercises.
- 23 progressive mixed-practice activities, 15 reading and language-observation questions, and 5 vocabulary exercises.
- Practical dialogue, Redemittel, a situational task, guided writing, speaking prompts, and a mini-project.
- Complete summary and self-assessment checklist.
- One 100-point examination with two new reading texts and **27 questions**: reading 20, vocabulary 15, grammar 35, sentence construction 10, and writing 20 points.
- Model answers and assessment criteria for all three examination writing tasks.
- Solutions for all **123** practice, reading, grammar, vocabulary, and examination questions.

## Files modified

- `content/b1/chapter-29.js` — complete chapter module.
- `content/curriculum.js` — German title and chapter loader registration.
- `tests/smoke.py` — Chapter 29 content, answer, and exam validation.
- `progress/chapters.json` — completion status and report path.
- `progress/reports/chapter-29.md` — this report.

## Validation performed

- All nine sections and all 42 assigned grammar references checked.
- Verified 30 vocabulary entries, 17 complete rules, 53 mini-exercises, 123 unique question IDs, and a solution for every question.
- Confirmed both learning texts meet the B1 target length and exam texts are separate from learning texts.
- Confirmed examination categories sum to exactly 100 points with the required distribution.
- Rendered all nine sections through the existing renderer with GJS; validated exam structure and grammar annotation rendering with no reported errors.
- Ran `PYTHONDONTWRITEBYTECODE=1 python3 tests/smoke.py`: **37 tests passed**.
- Ran `git diff --check`: passed.

## Remaining issues and next pending unit

No Chapter 29 content or integration issues remain. The earlier cumulative assessments `test-b1-1` and `test-b1-2` are still pending in the project manifest. Chapter 29 is complete; the curriculum schedules `test-b1-3` after it. The next unfinished item in the manifest's earlier assessment order remains **B1.1 cumulative assessment (`test-b1-1`)**.
