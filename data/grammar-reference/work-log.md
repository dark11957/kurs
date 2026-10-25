# Grammar reference work log

## 2026-10-25 — Initial setup and starter batch

- **Mode:** INITIALIZE (reference infrastructure was absent).
- **Added:** T001 `deshalb-deswegen-darum` (G19, A2); T002 `dafuer-dagegen` (G29, A2); T003 `damit-um-zu` (G19, A2); T004 `weil-denn-da` (G18, A1).
- **Lesson destinations verified:** Chapter 17 grammar; Chapter 18 grammar; Chapter 16 grammar; Chapter 20 and Chapter 24 grammar. Each destination uses the existing `learn.html#/chapter-NN/grammar` route and an actual `grammar` section ID. Chapter 16 explicitly contrasts `damit` and `um … zu`; Chapter 20 explains `weil`/`denn` word order; Chapter 24 supplies a real `da` subordinate-clause example.
- **Validation:** parsed both JSON progress files; checked four unique content IDs, required record fields, related-topic IDs, all five lesson hrefs, and actual grammar section IDs; reviewed the German examples, punctuation, cases and verb placement; verified page asset paths and the chapter router. `gjs` syntax checks passed for both JavaScript files. Static checks confirm search/filter controls, responsive CSS, reduced-motion handling, and the reference nav links on index/learn.
- **Verification limits:** Firefox and geckodriver could not launch because the Snap runtime refuses to run in this environment. An HTTP smoke test could not bind a local socket (`PermissionError` in the sandbox). Therefore no live DOM interaction, browser-history, console, or visual screenshot checks are claimed.
- **Uncovered:** none for the four added topics. The remaining roadmap is not yet mapped and must not be treated as having no gaps.
- **Next batch:** T005 `obwohl-trotzdem`; T006 `dass-das`; T007 `wenn-als`; T008 `konjunktiv-ii-wuerde`.

## 2026-10-25 — Selected content batch

- **State before authoring:** T005 `obwohl-trotzdem` (G18, A2), T006 `dass-das` (G22, A2), T007 `wenn-als` (G21, A2), and T008 `konjunktiv-ii-wuerde` (G13, B1) were the first four `TODO` entries, with no matching content records. Marked `IN PROGRESS` before drafting.
- **Level check:** T006 is A2 because the contrast includes the `dass` subordinate-clause construction introduced in Chapter 14; `das` article knowledge is reviewed from A1.

## 2026-10-25 — Notebook visual maintenance

- **Mode:** MAINTENANCE.
- **Changed:** Reworked the reference renderer and scoped stylesheet into a dark lined notebook presentation; added reusable definition, rule, example, optional forms/table, comparison, note, and lesson-link components; added word-order and connector visuals; documented the visual system for future topics in the workflow and master reference. Existing topic records, explanations, chapter references, and navigation logic were preserved.
- **Validation:** JavaScript syntax checks; mocked DOM rendering of all four existing topics; optional conjugation/summary/comparison table rendering; topic deep-link focus/scroll; English search and level filter; JSON parsing; palette, responsive breakpoint, reduced-motion, and whitespace checks.
- **Limitations:** No actual browser screenshot or mobile visual inspection was possible in this environment, and local HTTP serving remained blocked by sandbox socket permissions. The earlier work-log note about Snap Firefox launch failure still applies.
- **Next batch:** T005 `obwohl-trotzdem`; T006 `dass-das`; T007 `wenn-als`; T008 `konjunktiv-ii-wuerde`.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** T005 `obwohl-trotzdem` (G18, A2); T006 `dass-das` (G22, A2); T007 `wenn-als` (G21, A2); T008 `konjunktiv-ii-wuerde` (G13, B1). Each includes German explanations, English glosses and translated examples, a common-error note, and a notebook visual or comparison/forms table.
- **Lesson destinations verified:** T005 Chapter 17; T006 Chapters 14, 1, and 21; T007 Chapter 15; T008 Chapter 23. All use existing `learn.html#/chapter-NN/grammar` routes and actual `grammar` section anchors.
- **Validation:** JavaScript syntax checks passed; checked unique topic IDs and required record fields, English example translations, matching topic/group IDs, and lesson targets in the actual curriculum modules; updated coverage map, checklist, and manifest to DONE only after validation. Mocked-DOM renderer validation covers all eight topics, the new visuals/tables, deep linking, English search, and level filtering. `git diff --check` passed.
- **Verification limits:** No live browser screenshot/visual inspection was possible in this environment; the prior work-log notes document Firefox/Snap launch failure and local HTTP socket restrictions. The DOM test is a mocked renderer smoke test, not a browser test.
- **Uncovered:** none for this batch.
- **Next batch:** T009 `Konjunktiv II: wäre / hätte`; T010 `Konjunktiv II: modal verbs`; T011 `Perfekt: haben vs. sein`; T012 `Partizip II: formation and exceptions`.

## 2026-10-25 — Selected content batch

- **State before authoring:** T009 `konjunktiv-ii-waere-haette` (G13, B1), T010 `konjunktiv-ii-modalverben` (G13, B1), T011 `perfekt-haben-sein` (G11, A2), and T012 `partizip-ii-bildung` (G11, A2) are the next four TODO entries and have no matching content records. Marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 23 assigns `hätte/wäre` and the Konjunktiv II modal forms; Chapter 9 assigns Perfekt auxiliary choice and participle formation, including regular, irregular, separable/inseparable, mixed, and `-ieren` forms.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** T009 `konjunktiv-ii-waere-haette` (G13, B1); T010 `konjunktiv-ii-modalverben` (G13, B1); T011 `perfekt-haben-sein` (G11, A2); T012 `partizip-ii-bildung` (G11, A2). Each entry includes concise German-first rules, English glosses for its examples, common pitfalls, structured forms/comparison tables, and a reusable notebook visual.
- **Lesson destinations verified:** T009 and T010 link to Chapter 23 grammar; T011 and T012 link to Chapter 09 grammar. Both routes resolve to existing curriculum modules with real `grammar` section IDs; the linked rule subjects were checked in the lesson source.
- **Validation:** JavaScript syntax passed; checked unique topic IDs, required schema fields, examples and translations, related topic IDs, group IDs, JSON progress records, coverage records, and all chapter file/section destinations. Mocked-DOM renderer smoke test passes with all twelve topics, new visuals/tables, deep link focus/scroll, English search, and level filter. `git diff --check` passed.
- **Verification limits:** No live browser screenshot or narrow-screen visual inspection was performed; the prior work-log notes record Firefox/Snap and local HTTP socket restrictions. The renderer check is mocked DOM, not a browser test.
- **Uncovered:** none for this batch.
- **Next batch:** T013 `Präteritum: sein / haben / modal verbs`; T014 `Trennbare und untrennbare Verben`; T015 `Reflexive Verben + case`; T016 `Akkusativ vs. Dativ`.


## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T013 `praeteritum-sein-haben-modal`, T014 `trennbare-untrennbare-verben`, T015 `reflexive-verben-kasus`, and T016 `akkusativ-dativ` were the next four TODO entries; each was marked IN PROGRESS before drafting.
- **Added:** Four German-first grammar cards with explanations, short English translations, realistic examples, common-error notes, and tables for conjugations, separability, reflexive pronoun case, and Akkusativ/Dativ forms.
- **Lesson destinations verified:** T013 Chapters 09 and 23; T014 Chapters 08 and 09; T015 Chapter 09; T016 Chapters 03 and 04. The destinations resolve to existing modules and `grammar` section IDs. Coverage notes distinguish material taught directly from related material the reference card extends (especially reflexive dative).
- **Validation:** JavaScript syntax check and data-schema checks; unique IDs, required fields, nonempty German/English examples, group and related-topic references, progress JSON consistency, topic coverage entries, actual chapter paths and grammar section IDs, and `git diff --check`. German case forms, verb forms, word order, and example translations were reviewed.
- **Uncovered:** none for this batch; no new chapter content was changed.
- **Next batch:** T017 `Wechselpräpositionen: Wo? / Wohin?`; T018 `Adjektivdeklination: overview`; T019 `Relativsätze: basics`; T020 `Infinitiv mit zu / ohne zu / statt zu`.


## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T017 `wechselpraepositionen-wo-wohin` (G27, A2), T018 `adjektivdeklination-ueberblick` (G07, A2), T019 `relativsaetze-grundlagen` (G23, B1), and T020 `infinitiv-zu-ohne-statt` (G15, B1) were the next four TODO records; all were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with short English glosses and translated examples. T018 includes weak, mixed, and strong declension tables across four cases; T019 includes case forms and sentence-function comparisons; T017 contrasts location and destination; T020 contrasts zu/no-zu and purpose, omission, and alternative constructions.
- **Lesson destinations verified:** T017 Chapter 06; T018 Chapter 13; T019 Chapter 21; T020 Chapter 16. Each link resolves to an existing chapter module with a `grammar` section and explicit curriculum coverage.
- **Validation:** GJS syntax/schema checks; unique stable IDs, required fields, bilingual examples, group/related-topic references, table row widths, topic-manifest states, coverage records, and chapter route/section existence; German case, adjective endings, relative pronoun forms, comma and verb placement were reviewed; `git diff --check` passed.
- **Uncovered:** none for this batch. Chapter files, chapter navigation, and unrelated functionality were not modified. No live browser/mobile rendering test was performed.
- **Next batch:** T021 `passiv-grundmuster`; T022 `verb-abschliessen`; T023 `verb-werden`; T024 `verb-helfen`.


## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T021 `passiv-grundmuster` (G14, B1), T022 `verb-abschliessen` (G39, B1), T023 `verb-werden` (G40, A1), and T024 `verb-helfen` (G37, A1) were the next four TODO items; their status was set to IN PROGRESS before drafting.
- **Added:** A passive reference with active/passive and process/state contrasts; three verb cards with usage, case or prefix behavior, examples, and verified form tables. `werden` distinguishes the lexical verb, Futur I, and passive uses; `helfen` includes its dative pattern and stem-vowel change.
- **Lesson destinations verified:** T021 Chapter 22 grammar; T022 Chapter 30 reading context; T023 Chapters 11, 22, and 25 grammar; T024 Chapter 04 grammar. Each route maps to the registered module and real target section. T022 is explicitly labeled as a contextual reading link because the curriculum has no dedicated lesson for this verb.
- **Validation:** GJS syntax/schema checks; unique IDs, required fields, related-topic IDs, bilingual examples, table dimensions, verb forms, progress records, coverage map, curriculum registry paths, and target section IDs; reviewed passive tense patterns, case government, comma/word order, and separable-verb forms; `git diff --check` passed.
- **Uncovered:** no missing link for the batch; T022 has contextual coverage only, documented above. No live browser/mobile layout testing was performed. Chapter files and unrelated functionality were not changed.
- **Next batch:** T025 `plusquamperfekt-grundmuster`; T026 `futur-i-verwendung`; T027 `zweiteilige-konjunktionen`; T028 `partizipien-adjektivisch`. The planned topics follow Chapters 25–27 and are listed as TODO in the manifest.
