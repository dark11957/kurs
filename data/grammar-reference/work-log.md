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


## 2026-10-25 — Selected content batch

- **State before authoring:** T025 `plusquamperfekt-grundmuster` (G11, B1), T026 `futur-i-verwendung` (G12, B1), T027 `zweiteilige-konjunktionen` (G20, B1), and T028 `partizipien-adjektivisch` (G07, B1) were the next four TODO records; each was marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 25 covers Plusquamperfekt and Futur I; Chapter 26 covers paired conjunctions; Chapter 27 covers participles as adjectives. Chapter 13 provides the adjective-declension prerequisite for T028.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** Four German-first grammar records with short English glosses and translated examples. T025 covers auxiliary choice and event order; T026 distinguishes future plans, forecasts, and assumptions from future-present usage; T027 explains the major paired connectors and their word order, including the `je … desto` exception; T028 contrasts active/concurrent Partizip I with result-oriented Partizip II and explains adjective endings.
- **Lesson destinations verified:** T025 and T026 Chapter 25 grammar; T027 Chapter 26 grammar; T028 Chapters 27 and 13 grammar. Routes and section IDs exist in the registered modules, and lesson content was checked for the assigned subjects.
- **Validation:** Grammar manifest syntax/data schema; unique IDs; required fields; bilingual examples; related-topic references; table widths; manifest/checklist statuses; coverage records; curriculum file and section targets; German auxiliary selection, sentence order, connector pairing, and participle/adjective forms; `git diff --check`; project smoke suite.
- **Verification limits:** No live browser or mobile visual inspection was performed. Chapter content and application infrastructure were not changed.
- **Uncovered:** none for this batch.
- **Next batch:** T029 `hauptsatz-verbzweitstellung` (G01, A1); T030 `w-fragen-ja-nein-fragen` (G01, A1); T031 `nicht-kein-negation` (G31, A1); T032 `imperativ-aufforderungen` (G33, A1). These uncovered structures are explicitly assigned in Chapters 2, 3, and 8 and have been added to the TODO manifest for the next run.


## 2026-10-25 — Selected content batch

- **State before authoring:** T029 `hauptsatz-verbzweitstellung` (G01, A1), T030 `w-fragen-ja-nein-fragen` (G01, A1), T031 `nicht-kein-negation` (G31, A1), and T032 `imperativ-aufforderungen` (G33, A1) were the next four TODO records; all were marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 2 teaches declarative V2 and question word order; Chapter 3 teaches `nicht` and `kein`; Chapter 8 teaches imperative forms for du, ihr, Sie, and wir.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** Four German-first reference cards with English glosses and translated examples. T029 explains V2 with alternate first constituents; T030 contrasts W- and yes/no questions, including the subject-question exception; T031 distinguishes noun negation with declined `kein` from `nicht` and its focus/position; T032 covers all four imperative addressees, irregular forms, separable verbs, and polite use.
- **Lesson destinations verified:** Chapter 2 grammar (T029–T030), Chapter 3 grammar (T031), and Chapter 8 grammar (T032). Each registered chapter module contains the linked `grammar` section and the assigned rule.
- **Validation:** Grammar data parse/schema, 36 unique roadmap IDs and 32 content IDs, required fields, bilingual examples, related-topic references, table dimensions, search aliases, progress/checklist consistency, coverage entries, source files and section targets, German word order/negation/imperative forms, `git diff --check`, and the project smoke suite.
- **Verification limits:** No live browser or mobile visual inspection was performed. No chapter or application infrastructure files were edited.
- **Uncovered:** none for this batch.
- **Next batch:** T033 `satzklammer-modalverben-trennbar` (G01, A1); T034 `modalverben-grundbedeutungen` (G10, A1); T035 `personalpronomen-akkusativ-dativ` (G06, A1); T036 `bestimmte-unbestimmte-nullartikel` (G03, A1). Their lesson sources are Chapters 5, 4, and 1 and are listed as TODO in the manifest.


## 2026-10-25 — Selected content batch

- **State before authoring:** T029 `hauptsatz-verbzweitstellung` (G01, A1), T030 `w-fragen-ja-nein-fragen` (G01, A1), T031 `nicht-kein-negation` (G31, A1), and T032 `imperativ-aufforderungen` (G33, A1) were the next four TODO records; all were marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 2 assigns declarative V2 and W-/yes-no question patterns; Chapter 3 assigns `nicht` and `kein`; Chapter 8 assigns imperatives for du, ihr, Sie, and wir.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** Four German-first reference cards with concise explanations, short English glosses, translated examples, searchable aliases, and reusable tables. T029 explains V2 and the Vorfeld; T030 contrasts W- and yes/no questions, including a W-word subject; T031 contrasts declined `kein` with `nicht` and its scope/position; T032 covers du, ihr, Sie, and wir, common irregular forms, separable verbs, and politeness.
- **Lesson destinations verified:** Chapter 2 grammar for T029–T030; Chapter 3 grammar for T031; Chapter 8 grammar for T032. The files are registered curriculum modules and each contains the linked section and assigned rule.
- **Validation:** GJS data parse and schema; 32 unique content IDs; 40 roadmap records and completion states; bilingual examples; search aliases; related-topic references; table widths; coverage records; chapter file/section/route links; `python3 tests/smoke.py` (38 checks passed); `git diff --check`. German word order, negation scope and `kein` inflection, imperative forms, and punctuation were reviewed.
- **Verification limits:** No live browser or mobile visual inspection was performed. Existing chapter content and application infrastructure were not modified.
- **Uncovered:** none for this batch.
- **Next batch:** T033 `satzklammer-modalverben-trennbar` (G01, A1); T034 `modalverben-grundbedeutungen` (G10, A1); T035 `personalpronomen-akkusativ-dativ` (G06, A1); T036 `bestimmte-unbestimmte-nullartikel` (G03, A1). Lesson sources are Chapters 5, 5, 4, and 1 respectively, all with registered grammar sections.


## 2026-10-25 — Selected content batch

- **State before authoring:** T033 `satzklammer-modalverben-trennbar` (G01, A1), T034 `modalverben-grundbedeutungen` (G10, A1), T035 `personalpronomen-akkusativ-dativ` (G06, A1), and T036 `bestimmte-unbestimmte-nullartikel` (G03, A1) were the next four TODO records; each was marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapters 5/8 teach the modal and separable-verb sentence bracket; Chapter 5 assigns modal meanings and forms; Chapters 3/4 teach accusative/dative personal pronouns; Chapter 1 teaches nominative gender and definite, indefinite, and zero articles.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** Four German-first cards with English glosses, translated examples, searchable terms, and reusable tables. T033 contrasts modal and separable-verb brackets; T034 details core modal meanings/forms and the `nicht müssen` / `nicht dürfen` contrast; T035 provides pronoun forms across nominative, accusative, and dative plus object order; T036 explains nominative article choice and common zero-article contexts.
- **Lesson destinations verified:** Chapters 5 and 8 grammar (T033), Chapter 5 grammar (T034), Chapters 3 and 4 grammar (T035), and Chapter 1 grammar (T036). Each route maps to a registered chapter module and a real `grammar` section.
- **Validation:** Grammar data parse/schema; unique IDs; required fields; bilingual examples; related-topic references; table dimensions; manifest/checklist completion states; coverage map and chapter targets; modal conjugations/meanings, pronoun case forms, article gender/number forms, word order, search aliases, project smoke suite, and `git diff --check`.
- **Verification limits:** No live browser or mobile visual inspection was performed. Chapter files and unrelated application infrastructure were not modified.
- **Uncovered:** none for this batch.
- **Next batch:** T037 `possessivartikel-akkusativ` (G05, A1); T038 `dativartikel-plural-n` (G05, A1); T039 `verben-dativ-akkusativ` (G16, A1); T040 `wortstellung-zwei-objekte` (G01, A1). These syllabus items are assigned to Chapters 3 and 4 and remain TODO.


## 2026-10-25 — Selected content batch

- **State before authoring:** T037 `possessivartikel-akkusativ` (G05, A1), T038 `dativartikel-plural-n` (G05, A1), T039 `verben-dativ-akkusativ` (G16, A1), and T040 `wortstellung-zwei-objekte` (G01, A1) were the next four TODO records; each was marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 3 assigns possessive articles in the Akkusativ; Chapter 4 assigns dative articles and plural endings, verbs with dative and accusative objects, and the neutral order of noun/pronoun objects.

## 2026-10-25 — Content batch completed

- **Mode:** CONTENT BATCH.
- **Added:** Four German-first cards with English glosses, translated examples, searchable terms, and structured tables. T037 explains possessive stems versus endings in the accusative; T038 teaches dative articles and the plural -n exceptions; T039 explains recipient and thing complements with common two-object verbs; T040 contrasts noun and pronoun order and notes the role of emphasis.
- **Lesson destinations verified:** Chapter 3 grammar (T037); Chapter 4 grammar (T038–T040). Each is a registered module with a real grammar section and matching assigned rule.
- **Validation:** Grammar manifest parsing/schema; unique IDs; bilingual examples; related-topic references; table widths; progress and roadmap consistency; verified lesson targets and section IDs; German case forms and object order; `python3 tests/smoke.py` (38 checks passed); `git diff --check`.
- **Verification limits:** No live browser or mobile visual inspection was performed. No chapter files or application infrastructure were changed.
- **Uncovered:** none for this batch.
- **Next batch:** T041 `akkusativpraepositionen` (G25, A1); T042 `dativpraepositionen` (G26, A1); T043 `praeposition-artikel-kurzformen` (G26, A1); T044 `temporale-praepositionen` (G28, A1). The curriculum assigns them to Chapters 6 and 7; their grammar sections and source rules are identified in the coverage map.


## 2026-10-25 — Selected content batch

- **State before authoring:** T041 `akkusativpraepositionen` (G25, A1), T042 `dativpraepositionen` (G26, A1), T043 `praeposition-artikel-kurzformen` (G26, A1), and T044 `temporale-praepositionen` (G28, A1) were the next four TODO records; all were marked IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 6 assigns fixed accusative and dative prepositions and preposition–article contractions. Chapter 7 assigns temporal prepositions and time expressions. The corresponding lesson rules and registered `grammar` sections were inspected.
- **Added:** Four German-first cards with short English glosses, translated natural examples, common pitfalls, search terms, and structured case/comparison tables. T041 distinguishes `bis` bare endpoints from `bis zu + Dativ` and documents postposed `entlang`; T042 covers fixed dative government; T043 maps common contractions to their unchanged case; T044 contrasts temporal start, endpoint, duration, and future distance with case notes.
- **Lesson destinations verified:** T041–T043 `learn.html#/chapter-06/grammar`; T044 `learn.html#/chapter-07/grammar`. Both modules are registered, contain the linked section, and the cited source rules were checked.
- **Validation:** GJS parsed the shared manifest; checked 44 unique topic IDs, required fields, group and related-topic IDs, bilingual examples, table dimensions, and linked route/section existence. `python3 tests/smoke.py` passed all 38 checks. `git diff --check` passed.
- **Limitations:** `node` is unavailable, and no live browser/mobile visual inspection was performed. Chapter files, chapter content, and application functionality were not modified.
- **Next batch:** T045 `ordinalzahlen-reihenfolge`; T046 `datum-schreiben-sagen`; T047 `uhrzeit-offiziell-alltag`; T048 `wochentage-tageszeiten-monate` (all G08, A1, Chapter 7 grammar).


## 2026-10-28 — Selected content batch

- **State before authoring:** T045 `ordinalzahlen-reihenfolge` (G08, A1), T046 `datum-schreiben-sagen` (G08, A1), T047 `uhrzeit-offiziell-alltag` (G08, A1), and T048 `wochentage-tageszeiten-monate` (G08, A1) were the next four TODO topics; all were recorded IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 7 assigns ordinal numbers, dates, clock times, days/months/seasons, and time expressions. I inspected the corresponding rules `c07-rule-ordinal`, `c07-rule-date`, `c07-rule-clock`, and `c07-rule-calendar`, plus the curriculum route and chapter section.
- **Added:** Four German-first cards with concise rules, English glosses, translated examples, search aliases, and shared comparison/reference tables. The cards distinguish ordinal formation from date spelling/speech, official from everyday clock readings, and `am` / `im` / `in der Nacht` calendar patterns.
- **Completion records:** T045 — Ordinalzahlen: Reihenfolge und Endungen (G08, A1); T046 — Das Datum schreiben und sagen (G08, A1); T047 — Die Uhrzeit: offiziell und im Alltag (G08, A1); T048 — Wochentage, Tageszeiten, Monate und Jahreszeiten (G08, A1). Each is in `data/grammar-reference/manifest.js`, linked to `learn.html#/chapter-07/grammar`, and marked DONE on 2026-10-28 in the topic manifest.
- **Lesson destinations verified:** Each links to `learn.html#/chapter-07/grammar`; the chapter is registered and the grammar section and cited rules exist.
- **Validation:** Candidate manifest parsed with GJS; checked unique topic IDs, required schema, group/level, related references, bilingual examples, table dimensions, lesson URLs and source rule IDs. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No live browser or mobile visual inspection was performed. Chapter files and application code were not modified.
- **Next batch:** T049 `kardinalzahlen-grundformen`; T050 `haeufigkeitsadverbien`; T051 `mengenangaben-viel-wenig`; T052 `zeitangaben-wortstellung` (Chapter 7 grammar).


## 2026-10-28 — Selected content batch

- **State before authoring:** T049 `kardinalzahlen-grundformen` (G08, A1), T050 `haeufigkeitsadverbien` (G08, A1), T051 `mengenangaben-viel-wenig` (G08, A1), and T052 `zeitangaben-wortstellung` (G01, A1) were the next four TODO topics; all were set IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 7 assigns cardinal numbers, frequency/time adverbs, quantity expressions, and sentence ordering with time information. I inspected grammar rules `c07-rule-cardinal`, `c07-rule-frequency`, and `c07-rule-quantity`, the grammar overview, route, and exercises for time-fronting.
- **Added:** Four German-first cards with short English glosses, translated examples, search terms, and comparison tables. They cover cardinal-number formation and `eins/ein/eine`, frequency versus time words (including `morgen` / `der Morgen`), countability and quantifiers, and time phrases with main-clause V2.
- **Completion records:** T049 — Kardinalzahlen: Grundformen und Zusammensetzung (G08, A1); T050 — Häufigkeitsadverbien und Zeitwörter (G08, A1); T051 — Mengen: viel, viele, wenig und genug (G08, A1); T052 — Zeitangaben im Hauptsatz: Position und Verbzweitstellung (G01, A1). All are in `data/grammar-reference/manifest.js`, linked to `learn.html#/chapter-07/grammar`, and marked DONE on 2026-10-28.
- **Lesson destinations verified:** All four routes resolve to the registered Chapter 7 content module and its grammar section; each source rule or exercise is cited in the coverage map.
- **Validation:** GJS data parse; unique IDs; required fields; German/English examples; search terms; related IDs; table widths; Chapter 7 route, section, and rule checks; progress-manifest/checklist/coverage synchronization; `python3 tests/smoke.py` (38 checks passed); `git diff --check` passed.
- **Limitations:** No live browser, responsive visual, or interactive filtering test was performed. Chapter files and application code were not modified.
- **Next batch:** T053 `nebenordnende-konjunktionen`; T054 `zuerst-dann-danach`; T055 `adjektive-praedikativ-adverbial`; T056 `gleichheitsvergleich-so-wie` (Chapter 10 grammar).


## 2026-10-28 — Selected content batch

- **State before authoring:** T053 `nebenordnende-konjunktionen` (G20, A1), T054 `zuerst-dann-danach` (G21, A1), T055 `adjektive-praedikativ-adverbial` (G07, A1), and T056 `gleichheitsvergleich-so-wie` (G07, A1) were the next four TODO topics; all were set IN PROGRESS before drafting.
- **Curriculum evidence:** Chapter 10 assigns coordinating conjunctions, sequence adverbs, adjective functions, and equality comparisons. I inspected grammar rules r1–r4, the chapter plan, registered module, and grammar sections. Chapter 13 also reinforces adjective functions and equality comparison.
- **Added:** Four German-first cards with English glosses, translated examples, searchable terms, related topics, and comparison tables. T053 distinguishes coordination from subordination and records comma guidance; that punctuation note was checked against [Duden's guidance for commas between complete main clauses](https://www.duden.de/sprachwissen/sprachratgeber/Kommasetzung-zwischen-vollst%C3%A4ndigen-Haupts%C3%A4tzen). T054 distinguishes sequence from simultaneity; T055 separates predicative/adverbial from attributive use; T056 contrasts equality with Komparativ + als.
- **Completion records:** T053 — Nebenordnende Konjunktionen: und, oder, aber, denn, sondern (G20, A1); T054 — Zeitliche Satzverbindungen: zuerst, dann und danach (G21, A1); T055 — Adjektive: prädikativ und adverbial (G07, A1); T056 — Gleichheit vergleichen: so … wie und genauso … wie (G07, A1). All are in `data/grammar-reference/manifest.js`, linked to Chapter 10 grammar, and marked DONE on 2026-10-28 in the topic manifest.
- **Lesson destinations verified:** All four link to `learn.html#/chapter-10/grammar`; T055 and T056 also link to the matching Chapter 13 grammar section. The cited rules and modules exist.
- **Validation:** GJS candidate parse; checked unique IDs, required fields, group/type/level, bilingual examples, related IDs, table dimensions, route/section and cited rule IDs. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No live browser, responsive visual, or interactive filtering test was performed. Chapter files and application code were not modified.
- **Next batch:** T057 `ortsadverbien-hier-dort`; T058 `schon-noch-erst`; T059 `gradadverbien-sehr-zu`; T060 `grossschreibung-satzzeichen` (Chapter 10 grammar).


## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T057 `ortsadverbien-hier-dort` (G30, A1), T058 `schon-noch-erst` (G31, A1), T059 `gradadverbien-sehr-zu` (G32, A1), and T060 `grossschreibung-satzzeichen` (G35, A1) were the next four uncovered Chapter 10 topics; each was marked IN PROGRESS before drafting.
- **Added:** Four German-first searchable cards with English glosses, translated examples, comparison tables, and links to local learning topics. The cards cover place adverbs and V2, already/still/not-yet/not-until, degree and excess, and basic capitalization/punctuation.
- **Lesson destinations verified:** T057–T060 link to `learn.html#/chapter-10/grammar`; the registered `content/a1/chapter-10.js` module contains the grammar section and source rules r5/r7.
- **Validation:** Candidate JavaScript parsed with GJS; full data checks, route/source coverage, stable unique IDs, related IDs, bilingual examples, and table dimensions were checked; German adverb meanings, V2, regular punctuation and comma distinctions were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed. A GJS parse and custom schema, ID, bilingual-example, table, cross-reference, manifest-state, coverage, source-rule, module-registration, and lesson-section validation also passed.
- **Uncovered:** No lesson gaps for this batch. No browser/mobile visual or live navigation inspection was performed. No chapter or application files were modified.
- **Next batch:** T061 `praeteritum-regelmaessige-verben`; T062 `praeteritum-starke-gemischte-verben`; T063 `perfekt-oder-praeteritum`; T064 `vergangenheit-chronologisch-erzaehlen`. Chapter 11 rules r1, r3, r5, and r7 were checked against the curriculum and source module.


## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before validation:** T061 `praeteritum-regelmaessige-verben`, T062 `praeteritum-starke-gemischte-verben`, T063 `perfekt-oder-praeteritum`, and T064 `vergangenheit-chronologisch-erzaehlen` were the next four Chapter 11 entries, marked IN PROGRESS. Draft records already existed in the topic data from the prior planning pass; this run checked and finalized those records rather than creating duplicate IDs.
- **Completed:** The cards cover regular Präteritum endings and the -t/-d vowel, strong and mixed verb patterns, context-sensitive Perfekt/Präteritum choice, and chronological versus simultaneous event markers with V2 word order. All include English glosses, three translated examples, and reusable tables where useful.
- **Lesson destinations verified:** T061–T064 link to the registered Chapter 11 grammar section and source rules r1, r3, r5, r7. T063 additionally links to Chapter 09 grammar for Perfekt formation; T064 links to Chapter 10 grammar for sequence-adverb word order.
- **Validation:** GJS parsed the manifest; checked required schema, stable and unique IDs, group and related-topic references, examples, tables, search terms, checklist/topic-manifest state, coverage records, registered module paths, lesson sections and cited rule IDs. German endings, common strong/mixed forms, modal replacement infinitive, tense-use caveats, and V2 were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser/mobile visual or interactive filtering test was performed. No chapter or application files were changed.
- **Next batch:** T065 `echte-fakultativ-reflexive-verben`; T066 `reflexive-verben-feste-praepositionen`; T067 `reflexivpronomen-wortstellung`; T068 `einander-gegenseitige-handlungen`. These are Chapter 12 rules r2, r3, r6, and r7; each has been checked against the chapter plan and source module.


## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T065 `echte-fakultativ-reflexive-verben` (G16, A2), T066 `reflexive-verben-feste-praepositionen` (G16, A2), T067 `reflexivpronomen-wortstellung` (G06, A2), and T068 `einander-gegenseitige-handlungen` (G06, A2) were the next four Chapter 12 TODO entries; they were marked IN PROGRESS before drafting.
- **Added:** Four searchable German-first cards with short English glosses, translated examples, contrast tables, and stable IDs. They explain obligatory versus optional reflexivity; reflexive verbs with fixed prepositions and case; pronoun position in main, modal, perfect, and subordinate clauses; and reciprocal `einander` / `sich gegenseitig` forms.
- **Lesson destinations verified:** T065–T068 link to the registered Chapter 12 grammar section and source rules r2, r3, r6, r7.
- **Validation:** GJS parsed the manifest; custom checks cover required fields, unique IDs, group and related-topic references, bilingual examples, comparison/table dimensions, German and English search terms, progress/checklist/coverage synchronization, registered lesson module, section, and cited rule IDs. Verb valency/case, reflexive pronoun order, and reciprocal meanings were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser/mobile visual or interactive filter test was performed. No chapter or application files were changed.
- **Next batch:** T069 `komparativ-superlativ-bilden`; T070 `komparativ-als-ungleichheit`; T071 `superlativ-am-attributiv`; T072 `adjektive-feste-praepositionen`. Chapter 13 rules c13-r7–c13-r10 and the Chapter 10 equality-comparison rule were checked against the curriculum and source files.


## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T069 `komparativ-superlativ-bilden` (G07, A2), T070 `komparativ-als-ungleichheit` (G07, A2), T071 `superlativ-am-attributiv` (G07, A2), and T072 `adjektive-feste-praepositionen` (G07, A2) were the next four Chapter 13 topics; all were marked IN PROGRESS before drafting.
- **Added:** Four searchable German-first cards with translated examples and reusable comparison/form tables. They cover regular and irregular adjective degrees; unequal comparisons with Komparativ + `als` versus equality with `wie`; predicative/adverbial and declined attributive superlative forms; and adjective-preposition combinations with Dativ/Akkusativ, with a short distinction from dass/zu complements.
- **Lesson destinations verified:** T069–T072 link to the registered Chapter 13 grammar section and source rules c13-r7, c13-r8, c13-r9, and c13-r10. T070 also links to Chapter 10 grammar rule r4 for the equality contrast.
- **Validation:** GJS parsed the manifest; custom checks verify required fields, stable unique IDs, groups and related IDs, bilingual examples, table dimensions, German/English search terms, progress/checklist/coverage synchronization, curriculum registration, source section/rules, and verified lesson routes. Adjective gradation, irregular forms, attributive endings, comparison particles, preposition case, and V2 were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed. Headless Firefox screenshot testing could not run because the Snap runtime refused to start in this environment, so no visual/mobile browser test is claimed.
- **Limitations:** No browser/mobile visual or interactive filter test was performed. No chapter or application files were changed.
- **Next batch:** T073 `indirekte-ja-nein-fragen-ob`; T074 `indirekte-w-fragen`; T075 `verbendstellung-mehrteilige-verben`; T076 `nebensatz-vorfeld-inversion`. Chapter 14 rules c14-r5, c14-r6, c14-r10, and c14-r1 were checked against the source module.

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T073 `indirekte-ja-nein-fragen-ob` (G22, A2), T074 `indirekte-w-fragen` (G22, A2), T075 `verbendstellung-mehrteilige-verben` (G17, A2), and T076 `nebensatz-vorfeld-inversion` (G17, A2) were the next four TODO topics; all were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with short English glosses, translated examples, comparison tables, searchable English/German terms, stable IDs, and existing-topic relations. T073 covers `ob` and final finite verbs in embedded yes/no questions; T074 preserves W-words and uses final verb placement; T075 distinguishes simple Perfekt, modal infinitive groups, and the Ersatzinfinitiv order in Perfekt with a modal; T076 explains comma placement and V2 inversion after a fronted subordinate clause.
- **Source correction:** The prior queue incorrectly cited a Chapter 14 rule `c14-r10`. The actual Chapter 14 source has `c14-r8` (modal/multiple verb groups) and `c14-r9` (Perfekt and separable verbs); T075 now cites both. No Chapter 14 content was changed.
- **Lesson destinations verified:** T073–T076 link to `learn.html#/chapter-14/grammar`. The Chapter 14 module is registered in `content/curriculum.js`, the grammar section exists, and cited rules c14-r1, r5, r6, r8, and r9 are present.
- **Validation:** GJS parsed/evaluated the grammar manifest. A custom check confirmed all 4 records' required fields, unique stable IDs, valid groups and related IDs, bilingual examples, comparison-table dimensions, matching DONE states in the checklist/topic manifest, verified route/source records, and four queued TODOs in coverage. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed. German word order, comma placement, indirect-question punctuation, modal Ersatzinfinitiv usage, and example glosses were reviewed.
- **Limitations:** No browser-based visual, mobile-width, live search/filter, or clicked-navigation test was performed in this run. Existing chapter and application files were not modified.
- **Next batch:** T077 `wenn-wann-zeitfrage`; T078 `bevor-zeitliche-reihenfolge`; T079 `nachdem-vorzeitigkeit`; T080 `waehrend-gleichzeitigkeit` (Chapter 15 rules c15-r2–r5; destinations `learn.html#/chapter-15/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T077 `wenn-wann-zeitfrage` (G36, A2), T078 `bevor-zeitliche-reihenfolge` (G21, A2), T079 `nachdem-vorzeitigkeit` (G21, A2), and T080 `waehrend-gleichzeitigkeit` (G21, A2) were the next four planned topics; all were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with compact English glosses, three translated examples apiece, stable IDs, searchable terms, related-topic references, and comparison tables. T077 distinguishes temporal `wenn` from direct and indirect question `wann`; T078 explains event order and verb-final `bevor` clauses; T079 covers event order and common tense sequencing with `nachdem`; T080 explains temporal `während`, verb-final order, and its distinction from prepositional `während + noun`.
- **Lesson destinations verified:** T077–T080 link to `learn.html#/chapter-15/grammar`, with rules c15-r2 through c15-r5 verified in the registered Chapter 15 module. T080 also links to `learn.html#/chapter-07/grammar` for the temporal preposition pattern in rule c07-rule-temporal-preps. No chapter files were edited.
- **Validation:** GJS parsed/evaluated the grammar manifest. Custom checks confirmed required fields, stable unique IDs, valid groups and relations, bilingual examples, comparison-table dimensions, search terms, checklist/topic-manifest synchronization, verified route/source records, and the next four TODO entries. German clause order, comma placement, the before/after event sequence, tense examples with `nachdem`, and `während` + genitive usage were reviewed against the source lessons. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser-based visual/mobile layout, live search/filter interaction, or clicked navigation test was performed. No learning chapters or unrelated application files were modified.
- **Next batch:** T081 `seitdem-anfang-bis-heute`; T082 `bis-zeitgrenze`; T083 `sobald-solange-zeitbezug`; T084 `temporalverbindungen-zeitformen` (Chapter 15 rules c15-r5/r10, r6, r7, and r9; destination `learn.html#/chapter-15/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T081 `seitdem-anfang-bis-heute` (G21, A2), T082 `bis-zeitgrenze` (G21, A2), T083 `sobald-solange-zeitbezug` (G21, A2), and T084 `temporalverbindungen-zeitformen` (G21, A2) were the next four planned topics; all were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with short English glosses, translated examples, searchable variants, stable IDs, related-topic links, and comparison tables. T081 distinguishes `seitdem` clauses/adverbs from `seit + Dativ` and `seit dem + noun`; T082 distinguishes a `bis` subordinate clause from prepositional endpoints; T083 contrasts immediate succession (`sobald`) with duration (`solange`); T084 compares temporal adverbs and subordinate conjunctions, including the common Plusquamperfekt sequence for earlier past events.
- **Lesson destinations verified:** T081–T084 link to `learn.html#/chapter-15/grammar`, with source rules c15-r5 through c15-r10 checked as applicable. T081 and T082 additionally link to Chapter 7 grammar rule c07-rule-temporal-preps. T084 additionally links to Chapter 25 grammar rules rule-25-01 through rule-25-04 for Plusquamperfekt. All modules are registered in `content/curriculum.js`; chapter files were not modified.
- **Validation:** GJS parsed/evaluated the manifest. Custom checks confirmed the four records' required fields, unique IDs, valid groups/relations, bilingual examples, table dimensions, checklist/topic-manifest synchronization, verified routes and source rules, and the next four TODO entries. Temporal conjunction/adverb distinctions, verb position, commas, future Präsens in subordinate clauses, tense sequence, and case in prepositional contrasts were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser-based visual/mobile layout, live search/filter interaction, or clicked navigation test was performed. Existing lessons and unrelated application files were not modified.
- **Next batch:** T085 `verben-mit-zu-infinitiv`; T086 `dass-satz-oder-infinitivsatz`; T087 `lassen-infinitiv-ohne-zu`; T088 `brauchen-nicht-zu` (Chapter 16 rules c16-rule-03, c16-rule-09, and c16-rule-11; destination `learn.html#/chapter-16/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T085 `verben-mit-zu-infinitiv` (G15, A2), T086 `dass-satz-oder-infinitivsatz` (G22, A2), T087 `lassen-infinitiv-ohne-zu` (G15, A2), and T088 `brauchen-nicht-zu` (G15, A2) were the next four TODO topics; all were marked IN PROGRESS before drafting.
- **Added:** Four German-first reference cards with English glosses and translated examples, stable IDs, search terms, related topics, and comparison tables. They cover common verb + zu patterns (including zu placement in separable verbs), choosing a dass-clause or infinitive group, lassen for allowing/arranging an action and for suggestions, and brauchen + nicht/kein/nur + zu for absence of necessity.
- **Lesson destinations verified:** T085–T088 link to `learn.html#/chapter-16/grammar`; the Chapter 16 module is registered and rules c16-rule-03, c16-rule-09, and c16-rule-11 exist in its grammar section. No chapter file was edited.
- **Progress synchronization:** Marked T085–T088 DONE in the topic manifest, coverage map, and checklist. The checklist did not previously contain T085–T088 or a following queue, so this run added those completed rows plus TODO entries T089–T092 to keep all progress records aligned.
- **Validation:** GJS parsed/evaluated the topic manifest. Custom checks verified required fields, unique IDs, valid groups/relations, bilingual examples, comparison-table dimensions, search terms, checklist/topic-manifest/coverage synchronization, registered route, and cited rules. German zu-placement, clause-subject selection, the lassen Ersatzinfinitiv, and the distinction between lack of necessity and prohibition were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser-based visual/mobile layout, live search/filter interaction, or clicked navigation test was performed. No learning chapter or unrelated application file was changed.
- **Next batch:** T089 `adjektive-nomen-zu-infinitiv`; T090 `wenn-falls-bedingung`; T091 `sonst-andernfalls`; T092 `indem-methode` (Chapter 16 rule c16-rule-04 and Chapter 17 rules c17-rule-01/rule-02, rule-06, and rule-08; destinations `learn.html#/chapter-16/grammar` and `learn.html#/chapter-17/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T089 `adjektive-nomen-zu-infinitiv` (G15, A2), T090 `wenn-falls-bedingung` (G19, A2), T091 `sonst-andernfalls` (G19, A2), and T092 `indem-methode` (G19, A2) were the next four unfinished topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first grammar-reference cards with stable IDs, English glosses, three translated examples each, search terms, related-topic links, and comparison tables. T089 explains adjective/noun + zu-infinitive complements and the comma distinction; T090 covers real wenn/falls conditions and clause order; T091 covers sonst/andernfalls consequences with V2; T092 explains indem method clauses and distinguishes method, purpose, and reason.
- **Lesson destinations verified:** T089 links to `learn.html#/chapter-16/grammar`, source rule c16-rule-04. T090 links to `learn.html#/chapter-17/grammar`, source rules c17-rule-01 and c17-rule-02. T091 links to Chapter 17 source rules c17-rule-06 and c17-rule-10. T092 links to Chapter 17 source rule c17-rule-08. Registered chapter IDs, grammar sections, rule IDs, and routes were checked in the curriculum and chapter modules. No chapter files were edited.
- **Progress synchronization:** Marked T089–T092 DONE in the topic manifest, checklist, and coverage map. Added the next planned queue T093–T096 for Chapter 18 verb-preposition patterns; those remain TODO/planned.
- **Validation:** GJS parsed and evaluated the data module. Custom assertions checked unique topic IDs, required fields, three English-glossed examples per topic, valid related-topic links, search metadata, comparison table dimensions, DONE/checklist/coverage synchronization, and the registered chapter routes/source rule IDs. Chapter module registrations and rules were confirmed statically; German clause order, commas, verb placement, distinction of meaning, and sample glosses were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** No browser visual, mobile-width, live filter/search interaction, or clicked navigation test was performed. Chapter links were verified against the project curriculum registry and source module/rules, but not opened in a browser.
- **Next batch:** T093 `verb-praeposition-feste-verbindungen`; T094 `verb-praeposition-kasus`; T095 `reflexive-verben-praeposition`; T096 `praepositionalobjekt-freie-angabe` (Chapter 18 rules c18-rule-01 through c18-rule-05 as applicable; `learn.html#/chapter-18/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T093 `verb-praeposition-feste-verbindungen` (G16, A2), T094 `verb-praeposition-kasus` (G16, A2), T096 `praepositionalobjekt-freie-angabe` (G16, A2), and T097 `praeposition-personenfragen` (G29, A2) were marked IN PROGRESS before drafting. The previously planned T095 `reflexive-verben-praeposition` was removed from the unfinished queue because the completed card `reflexive-verben-feste-praepositionen` already covers that exact subject, with examples, case guidance, and a verified Chapter 12 lesson link.
- **Added:** Four German-first cards with short English glosses, translated examples, searchable keywords, stable IDs, related topics, and comparison or form tables. They cover verb-governed prepositions and case, contrasting accusative/dative patterns, complements versus optional adverbials, and person questions with preposition + wen/wem.
- **Lesson destinations verified:** All four cards link to `learn.html#/chapter-18/grammar`. The Chapter 18 module is registered in the curriculum, contains a grammar section, and the source rules were checked: c18-rule-01/09 for T093, c18-rule-02/03 for T094, c18-rule-01/05 for T096, and c18-rule-06 for T097. No chapter file was changed. Static verification only; routes were not opened in a browser.
- **Progress synchronization:** Marked T093, T094, T096, and T097 DONE in the topic manifest, coverage map, and checklist. Removed the duplicate T095 queue item and its planned coverage record. Added T098–T101 as the next TODO topics.
- **Validation:** GJS parsed/evaluated the complete manifest. Custom assertions checked required fields, unique IDs, all internal topic relations, groups and levels, bilingual examples, search terms, table dimensions, source IDs and registered lesson routes, plus synchronized DONE/TODO progress. `python3 tests/smoke.py` passed all 38 checks and `git diff --check` passed. Case selection, verb forms in tables, question forms, example punctuation, and object-versus-adverbial distinctions were reviewed.
- **Limitations:** Browser visual/mobile layout, search/filter interactions, and clicked lesson navigation were not tested; lesson route and source checks were static.
- **Next batch:** T098 `praepositionenfragen-wo-r`; T099 `praepositionen-rueckbezug-dar`; T100 `verb-praeposition-bedeutungspaare`; T101 `genitivpraepositionen-auswahl` (Chapter 18 grammar rules c18-rule-07 through c18-rule-10; `learn.html#/chapter-18/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T098 `praepositionenfragen-wo-r` (G29, A2), T099 `praepositionen-rueckbezug-dar` (G29, A2), T100 `verb-praeposition-bedeutungspaare` (G16, A2), and T101 `genitivpraepositionen-auswahl` (G28, A2) were the next four planned topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with short English glosses, translated examples, search terms, stable IDs, related topics, and a comparison table where useful. They explain wo(r)- questions for things, da(r)- reference to things and ideas, case and meaning contrasts in common verb-preposition pairs, and formal genitive prepositions with article and noun endings.
- **Lesson destinations verified:** All four use `learn.html#/chapter-18/grammar`. The Chapter 18 curriculum entry and registered content module exist, and c18-rule-07 through c18-rule-10 were checked against each card. No chapter file was modified. Route verification was static; browser navigation was not run.
- **Progress synchronization:** Marked T098–T101 DONE in the topic manifest, coverage map, and checklist. Added T102–T105 as the next planned Chapter 19 batch.
- **Validation:** GJS parsed and evaluated the manifest with 100 topic records. Custom assertions checked required fields, unique IDs, valid groups and all related-topic references, translated examples, comparison/form table dimensions, synchronized DONE checklist/manifest/coverage records, the registered Chapter 18 route, and cited source-rule IDs. German question forms and da(r)-forms, preposition/case patterns, verb principal forms, genitive article and noun endings, and example glosses were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser visual/mobile layout, live search/filter behavior, and clicked lesson navigation were not tested; chapter link validation was static.
- **Next batch:** T102 `genitivartikel-des-der`; T103 `genitiv-nomen-endungen`; T104 `besitz-genitiv-wessen`; T105 `eigennamen-genitiv` (Chapter 19 rules c19-rule-01 through c19-rule-04; `learn.html#/chapter-19/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T102 `genitivartikel-des-der` (G05, A2), T103 `genitiv-nomen-endungen` (G05, A2), T104 `besitz-genitiv-wessen` (G28, A2), and T105 `eigennamen-genitiv` (G28, A2) were the next four unfinished topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first reference cards with concise English glosses, translated German examples, stable searchable IDs, related-topic links, and comparison tables. They cover article forms by gender/number, noun endings including the weak masculine distinction, possession and wessen? with a spoken von + dative alternative, and German genitive spelling for proper names.
- **Lesson destinations verified:** All link to `learn.html#/chapter-19/grammar`. Chapter 19 is in the curriculum and has a registered content module; source rules c19-rule-01 through c19-rule-04 were checked. No lesson files were changed. Verification was static; routes were not opened in a browser.
- **Progress synchronization:** Marked T102–T105 DONE in the topic manifest, coverage map, and checklist. Added T106–T109 as the next planned Chapter 19 topics.
- **Validation:** GJS parsed and evaluated all 104 topic records. Custom assertions checked required fields, unique IDs, valid groups and related-topic links, translated examples, comparison-table dimensions, checklist/manifest/coverage synchronization, the registered Chapter 19 route, and source rule IDs. Genitive article forms, noun endings including weak masculines, possessive forms, proper-name apostrophe spelling, and example glosses were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser visual/mobile layout, live search/filter behavior, and clicked lesson navigation were not tested; chapter route checks were static.
- **Next batch:** T106 `genitiv-oder-von-dativ`; T107 `n-deklination-schwache-maskulina`; T108 `zusammengesetzte-nomen`; T109 `nominalisierung-grundlagen` (Chapter 19 rules c19-rule-05, c19-rule-06, c19-rule-08, and c19-rule-09; `learn.html#/chapter-19/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T106 `genitiv-oder-von-dativ` (G28, A2), T107 `n-deklination-schwache-maskulina` (G05, A2), T108 `zusammengesetzte-nomen` (G02, A2), and T109 `nominalisierung-grundlagen` (G02, A2) were the next four unfinished topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first grammar-reference cards with concise English glosses, translated examples, stable searchable IDs, related-topic references, and tables. They cover genitive vs. von + dative, weak masculine n-declension, compound noun structure and head-word agreement, and capitalization of nominalized infinitives and adjectives.
- **Lesson destinations verified:** All four link to `learn.html#/chapter-19/grammar`. Chapter 19 is registered in the curriculum and has a grammar section; c19-rule-05, -06, -08, and -09 were checked as the matching source rules. No chapter file was modified. Verification was static, not browser navigation.
- **Progress synchronization:** Marked T106–T109 DONE in the topic manifest, coverage map, and checklist. Added T110–T113 as the next queue, covering the remaining Chapter 19 suffix and diminutive rules followed by Chapter 20 tense-in-connected-text and TEKAMOLO topics.
- **Validation:** GJS parsed and evaluated all 108 topic records. Custom checks verified required fields, unique IDs, valid groups and related-topic links, English-glossed examples, comparison/form table dimensions, DONE/TODO checklist and coverage synchronization, the registered Chapter 19 route, and source-rule IDs. Genitive-vs-dative usage, weak noun forms, compound head gender/plural patterns, nominalization spelling, and example glosses were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser visual/mobile layout, live search/filter behavior, and clicked lesson navigation were not tested; route validation was static.
- **Next batch:** T110 `nomen-suffixe-grundformen`; T111 `diminutive-chen-lein`; T112 `tempuswahl-zusammenhaengender-text`; T113 `tekamolo-informationsreihenfolge` (Chapter 19 rules c19-rule-10/-11 and Chapter 20 rules c20-rule-08/-09; `learn.html#/chapter-19/grammar` and `learn.html#/chapter-20/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T110 `nomen-suffixe-grundformen` (G02, A2), T111 `diminutive-chen-lein` (G02, A2), T112 `tempuswahl-zusammenhaengender-text` (G35, A2), and T113 `tekamolo-informationsreihenfolge` (G01, A2) were the next four unfinished topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first topic cards with brief English glosses, translated examples, stable IDs, search terms, related topics, and comparison tables. They cover noun suffix/gender tendencies, diminutive forms and agreement, tense choice across a connected narrative, and TEKAMOLO with V2 and flexible information order.
- **Lesson destinations verified:** T110–T111 link to `learn.html#/chapter-19/grammar` and source rules c19-rule-10/-11. T112 links to Chapter 20 rule c20-rule-08 and Chapter 9 rule c09-g1. T113 links to Chapter 20 rule c20-rule-09. Modules are registered and cited rules exist. No lesson files were edited; route checks were static.
- **Progress synchronization:** Marked T110–T113 DONE in the topic manifest, coverage map, and checklist. Added T114–T117 as the next planned topics: Chapter 20 email conventions, followed by three Chapter 21 relative-clause uses not treated as dedicated cards yet.
- **Validation:** GJS parsed and evaluated all 112 topic records. Custom checks verified required fields, unique IDs, valid groups and related-topic links, translated examples, table dimensions, synchronized progress, registered Chapter 19/20/09 routes, and the cited source rules. Suffix gender/plural tendencies, diminutive gender and plural, tense choices by time/text type, V2 and TEKAMOLO flexibility were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser visual/mobile layout, live search/filter interaction, and clicked lesson navigation were not tested; route validation was static.
- **Next batch:** T114 `private-formelle-email`; T115 `relativsaetze-perfekt`; T116 `relativsaetze-modalverben`; T117 `freie-relativsaetze-wer-wen-wem` (Chapter 20 c20-rule-12 and Chapter 21 c21-g09-01, c21-g10-01, c21-g11-01; `learn.html#/chapter-20/grammar` and `learn.html#/chapter-21/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T114 `private-formelle-email` (G35, A2), T115 `relativsaetze-perfekt` (G23, B1), T116 `relativsaetze-modalverben` (G23, B1), and T117 `freie-relativsaetze-wer-wen-wem` (G23, B1) were the next four unfinished topics and were marked IN PROGRESS before drafting.
- **Added:** Four German-first cards with short English glosses, translated examples, stable searchable IDs, related topics, and comparison tables. They cover private/formal email conventions; Perfekt auxiliary and word order in relative clauses; infinitive + modal verb order in relative clauses; and free relative clauses with wer/wen/wem and separate case selection in the main clause.
- **Lesson destinations verified:** T114 links to `learn.html#/chapter-20/grammar`, source c20-rule-12. T115–T117 link to `learn.html#/chapter-21/grammar`, sources r10, r11, and r12 respectively. The earlier queue incorrectly listed exercise IDs for these three Chapter 21 rules; the source IDs were checked and corrected before authoring. T115 also links to the registered Chapter 9 Perfekt lesson, c09-g1. No lesson file was changed; route verification was static.
- **Progress synchronization:** Marked T114–T117 DONE in the topic manifest, coverage map, and checklist. Added T118–T120 as the next distinct Chapter 23 topics. No new card was queued for polite requests, wishes, or general modal advice because existing Konjunktiv-II cards already cover those areas.
- **Validation:** GJS parsed and evaluated all 116 topic records. Custom assertions checked required fields, unique IDs, valid groups/related links, translated examples, comparison-table dimensions, synchronized progress, registered Chapter 20/21/09 routes, and actual source rule IDs (c20-rule-12, r10, r11, r12, c09-g1). Email conventions, Perfekt auxiliary and relative-clause word order, modal verb placement, and case in free relative clauses were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser visual/mobile layout, live search/filter behavior, and clicked lesson navigation were not tested; route checks were static.
- **Next batch:** T118 `konjunktiv-ii-starke-verben`; T119 `konjunktiv-ii-irrealer-wenn-satz`; T120 `als-ob-konjunktiv` (Chapter 23 rules c23-r05, c23-r08/r09, and c23-r11; `learn.html#/chapter-23/grammar`).

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T121 `satzfelder-vorfeld-mittelfeld-nachfeld` (G01, B1), T122 `pronomen-und-objektstellung` (G06, B1), T123 `nicht-auch-nur-fokusstellung` (G31, B1), and T124 `nachfeld-ausklammerung` (G01, B1) were selected from the uncovered Chapter 24 material. Earlier cards already cover TEKAMOLO, clause linking, and multi-verb subordinate clauses, so those topics were not duplicated.
- **Added:** Four German-first cards explaining the clause-field model, neutral ordering of two noun/pronoun objects, focus and scope with nicht/auch/nur, and postfield extraposition. Each has short English glosses, natural German examples, common-error guidance, stable IDs, related-topic references, and a comparison table.
- **Lesson destinations verified:** All four link to `learn.html#/chapter-24/grammar`; the route is registered and Chapter 24 grammar rules 02, 04, 05, and 11 were checked in `content/b1/chapter-24.js`. No lesson file was modified. Verification was static; route clicks were not tested in a browser.
- **Progress synchronization:** Marked T121–T124 DONE in the topic manifest, master checklist, and coverage map. The next distinct items are T125 `satzklammer-hauptsatz` (Chapter 24 rule 01), then T126–T128: Chapter 25 Plusquamperfekt with haben, Plusquamperfekt with sein, and Plusquamperfekt vs. Präteritum (rules 01–03). These are not yet authored.
- **Validation:** GJS parsed the full manifest and custom schema checks passed for 123 unique topics, including required fields, bilingual examples, and resolved related-topic IDs. Static progress/source validation passed for T121–T124. German object order, focus contrasts, and comma placement were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser layout, mobile rendering, live filters/search, and clicked lesson navigation were not tested in this environment. Lesson routes and chapter source links were statically inspected.

## 2026-10-28 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T125 `satzklammer-hauptsatz` (G01, B1), T126 `plusquamperfekt-haben` (G11, B1), T127 `plusquamperfekt-sein` (G11, B1), and T128 `plusquamperfekt-praeteritum-unterscheiden` (G11, B1) were selected from Chapter 24 rule 01 and Chapter 25 rules 01–03. Existing cards cover general past-tense choice and event chronology but do not teach the Plusquamperfekt formation and contrast as these dedicated entries do.
- **Added:** Four German-first cards covering the main-clause sentence bracket; Plusquamperfekt with haben and sein, including full auxiliary paradigms; and the contrast between narrative Präteritum and earlier completed events. Each includes short English glosses, idiomatic examples, common pitfalls, stable IDs, related topics, and a reusable table.
- **Lesson destinations verified:** T125 links to `learn.html#/chapter-24/grammar` and source rule 01. T126–T128 link to `learn.html#/chapter-25/grammar` and source rules 01–03. Both chapters are registered in `content/curriculum.js`; source rules were inspected. No chapter content was modified. Browser route clicks were not tested.
- **Progress synchronization:** Marked T125–T128 DONE in the topic manifest, checklist, and coverage map. Chapter 25 rule 04 is not separately queued because the existing `nachdem-vorzeitigkeit` and `temporalverbindungen-zeitformen` cards already cover chronology and past-tense sequencing. Next distinct topics are T129 `futur-i-werden` (rule 05), T130 `praesens-oder-futur-i` (rule 06), T131 `futur-i-vermutungen` (rule 07), and T132 `modalverben-zeitformen` (rule 08).
- **Validation:** Manifest parsing, unique IDs, required schema fields, bilingual examples, related-topic references, table shapes, progress synchronization, chapter route registration, and cited source IDs were checked. Auxiliary paradigms and sentence word order were reviewed. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser layout, mobile rendering, live search/filter interaction, and clicked lesson navigation were not tested. Routes were statically checked.

## 2026-10-31 — Content batch completed

- **Mode:** CONTENT BATCH.
- **State before authoring:** T129 `futur-i-werden` (G12, B1), T130 `praesens-oder-futur-i` (G12, B1), T131 `futur-i-vermutungen` (G12, B1), and T132 `modalverben-zeitformen` (G10, B1) were the next four unfinished, distinct topics. No existing Futur I or cross-tense modal card was found.
- **Added:** Four German-first cards on Futur I formation, present-tense references to planned future events, Futur I predictions and present assumptions, and modal verbs across Präsens, Präteritum, Perfekt, and Futur I. Added a full werden paradigm and a compact tense comparison for müssen, with translated examples and common-error guidance.
- **Lesson destinations verified:** All four link to `learn.html#/chapter-25/grammar`; the Chapter 25 route is registered and rules 05–08 were inspected. T132’s Ersatzinfinitiv and subordinate-clause order were checked against the Leibniz Institute for the German Language’s grammis Modalverb entry and sentence-bracket reference. No chapter files were changed.
- **Progress synchronization:** Marked T129–T132 DONE in the topic manifest, master checklist, and coverage map. Chapter 25 rule 10 is represented by T132 and was not queued again. Next distinct items: T133 `perfekt-ersatzinfinitiv-erweitert` (Chapter 25 rule 09), T134 `zweiteilige-konjunktionen-ueberblick`, T135 `einerseits-andererseits`, and T136 `je-desto-umso` (Chapter 26 rules 01–03).
- **Validation:** GJS parsed the complete manifest. Custom checks verified 131 unique topics, required fields, bilingual examples, valid related-topic IDs, table dimensions, source rule IDs, registered routes, and synchronized status records. `python3 tests/smoke.py` passed all 38 checks; `git diff --check` passed.
- **Limitations:** Browser rendering, mobile layout, live search/filter interaction, and clicked lesson navigation were not tested; routes and source references were checked statically.
