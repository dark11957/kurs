# GRAMMAR REFERENCE — MASTER PLAN & AGENT WORK FILE

Status: IN PROGRESS. The reference UI and first four starter topics are implemented; the roadmap and remaining topic inventory are still being built. This file is the authoritative roadmap for the new reference, but the existing chapter plans and chapter data remain the authoritative source for lesson content and mappings.

## 0. Mission
Build a **separate** German A1–B1 quick-reference encyclopedia for refreshing forgotten grammar, common expressions, and high-frequency verbs. Do not replace or redesign `index.html` or `learn.html`. The reference should look like readable, colorful handwritten notebook pages, inspired by the supplied notebook image, while remaining searchable/selectable HTML text.

Each card provides concise German-first guidance: meaning/short English gloss where useful, when to use it, the essential word-order or conjugation rule, 1–3 natural German examples, common pitfalls, and a verified link to the relevant existing chapter **and specific subsection when possible**. The reference complements lessons, not duplicates their long explanations.

## 1. Boundaries and architecture
- **Vanilla HTML, CSS, JavaScript only.** GitHub Pages-compatible, no backend or build step required.
- **New entry point:** `grammatik.html` (or `reference.html` if naming conflicts); link to it from navigation in `index.html` and `learn.html` with minimal changes.
- Recommended assets: `css/grammar-reference.css`, `js/grammar-reference.js`, `data/grammar-reference/manifest.json`, `data/grammar-reference/groups/*.json` (adapt to existing layout). Avoid fragile file:// assumptions; test under HTTP/GitHub Pages.
- Namespace all styling under `.grammar-reference` / reference root. **Never mutate existing chapter HTML, chapter renderer, progress store, Export/Import keys, or unrelated CSS.** Do not touch Supabase.
- Data-driven rendering from structured topic records; no giant hardcoded HTML file and no duplicated chapter copy.
- Initially one notebook theme only on `grammatik.html`; do not implement a global theme switcher.
- A narrow left navigation for groups with search/filter and a wide main notebook area; responsive single-column mode on mobile. Use a dark charcoal background (`#151719`) and lined dark paper (`#202327`), with subtle texture and a visible notebook margin. Use large handwritten text, restrained yellow highlights, and blue/green/purple/red ink cues. Preserve accessible focus, contrast, and reduced motion. Handwriting fonts must support ä ö ü ß and remain legible; fall back gracefully.

## 2. Content contract (one record per topic)
Each topic must have:
- `id` (stable slug), `groupId`, `title`, `level` (A1/A2/B1), `tags`, `searchTerms` (including common English/gloss variants).
- `summaryDe`: one-sentence German explanation, `glossEn`: **very short** English meaning where useful, `whenToUseDe`.
- `ruleDe`: compact grammar or placement rule; `examples`: 1–3 German examples with optional short English gloss for difficult cases; `pitfallDe` when relevant.
- `relatedTopicIds` for contrasts/related structures.
- `lessonLinks`: verified link(s) to actual existing lesson route and, if present, real subsection id. Format: `{label, href, verified}`. Never fabricate chapter numbers, lesson titles, or anchor IDs. If no matching lesson exists, set `lessonLinks: []`, `coverageStatus: "missing-lesson"`, and visibly show “Noch keine passende Lektion”; report the gap in coverage audit.
- Optional `forms` / `miniTable` for declension or tense data. All verbs must explicitly distinguish **Präsens**, **Präteritum**, **Perfekt** (auxiliary + Partizip II), and for select verbs **Konjunktiv II**; don't use vague labels like “auxiliary” without context. For a verb, include meaning, separability, reflexivity if applicable, case/preposition pattern, and at least one natural sentence.
- `sourceRefs`: existing curriculum file names / chapters used to verify topic coverage. Do not claim a topic is covered before inspecting the file.

Example record (illustrative only; lesson link deliberately empty until verified):
```json
{
  "id":"deshalb-deswegen-darum",
  "groupId":"G19",
  "title":"deshalb / deswegen / darum",
  "level":"A2",
  "tags":["Konnektoren","Folge","Satzstellung"],
  "searchTerms":["therefore","that's why","consequently"],
  "summaryDe":"Diese Wörter nennen eine Folge oder Konsequenz.",
  "glossEn":"therefore; that's why",
  "whenToUseDe":"Wenn du eine Konsequenz ausdrücken möchtest.",
  "ruleDe":"Sie stehen oft im Vorfeld; das finite Verb folgt direkt: Deshalb gehe ich ...",
  "examples":[{"de":"Ich bin krank. Deshalb bleibe ich zu Hause.","en":"I'm ill. That's why I'm staying home."}],
  "pitfallDe":"Nicht mit 'weil' verwechseln: weil leitet einen Nebensatz mit Verb am Ende ein.",
  "relatedTopicIds":["weil-denn-da"],
  "lessonLinks":[],
  "coverageStatus":"missing-lesson",
  "sourceRefs":[]
}
```

## 3. Coverage roadmap: 40 groups (work through 3–4 *topics*, not groups, per batch)
A 'topic' is one searchable reference card. Each group contains multiple topics. Enumerate topics in the manifest before production; no artificial cap of 20 or 100 cards. Aim for broad coverage of **all A1–B1 structures in the existing curriculum**, then audit against an external A1–B1 checklist if useful.

### Foundations and sentence construction
- **G01 — Satzbau und Satzarten:** Hauptsatz V2, questions (W-/Ja-Nein), negation position, imperative, inversion, sentence brackets, sentences with multiple verbs.
- **G02 — Wortarten und Satzglieder:** noun/verb/adjective/adverb/pronoun, subject/object, finite vs infinitive, clause roles.
- **G03 — Artikel und Genus:** definite/indefinite/null articles, der/die/das, gender cues, plurals, possessive articles.
- **G04 — Vier Fälle im Überblick:** Nominativ, Akkusativ, Dativ, Genitiv; overview tables, question words, case diagnostics.
- **G05 — Deklination der Artikel:** articles and possessives across cases, kein-, demonstratives, dies-/jed-/welch-.
- **G06 — Pronomen:** personal, reflexive, possessive, demonstrative, indefinite, man, jemand/niemand, es.
- **G07 — Adjektive:** adjective endings (strong/weak/mixed), predicative/adverbial usage, comparison/superlative, participles used adjectivally (B1).
- **G08 — Zahlen, Zeit, Mengen:** cardinal/ordinal, dates, time, frequency, quantities, fractions where relevant.

### Verbs and tense reference
- **G09 — Verbformen und Präsens:** regular/irregular conjugation, stem vowel changes, separable/inseparable verbs, reflexive verbs, imperative.
- **G10 — Hilfsverben und Modalverben:** sein/haben/werden; können, müssen, dürfen, sollen, wollen, mögen/möchten; modal meaning and word order.
- **G11 — Vergangenheit:** Perfekt construction and Partizip II, haben vs sein, Präteritum and common everyday forms, Plusquamperfekt (B1).
- **G12 — Zukunft und Absichten:** Präsens for future, Futur I, werden + infinitive, intentions/plans.
- **G13 — Konjunktiv II:** würde + infinitive, wäre/hätte, modal forms, wishes, polite requests, unreal conditions, comparisons.
- **G14 — Passiv:** Vorgangspassiv Präsens/Präteritum/Perfekt at B1 where covered, passive with modals, Zustandspassiv if curriculum includes it.
- **G15 — Infinitiv und Verbkomplexe:** zu + Infinitiv, um ... zu, ohne ... zu, statt ... zu, brauchen nicht zu, lassen, verbs with infinitives.
- **G16 — Verbvalenz:** accusative/dative verbs, two-object verbs, verbs with prepositions (warten auf, denken an, sich interessieren für), reflexive verb patterns.

### Connectors and advanced sentence structures
- **G17 — Neben- und Hauptsätze:** coordinating vs subordinating, verb-last rules, punctuation, position of subordinate clause.
- **G18 — Grund und Gegensatz:** weil, denn, da, obwohl, trotzdem, aber, sondern, während (contrast), jedoch.
- **G19 — Folge, Zweck und Bedingung:** deshalb, deswegen, darum, daher, sodass/so ... dass, damit, um ... zu, wenn, falls, sonst.
- **G20 — Ergänzung, Auswahl und Vergleich:** und, oder, entweder ... oder, weder ... noch, sowohl ... als auch, nicht nur ... sondern auch, als/wie, je ... desto.
- **G21 — Zeitverbindungen:** als vs wenn, bevor, nachdem, während, seitdem, bis, sobald, solange, zunächst/dann/anschließend.
- **G22 — dass, ob und indirekte Fragen:** dass clauses, ob clauses, indirect W questions, reported content basics.
- **G23 — Relativsätze:** relative pronouns in nominative/accusative/dative/genitive (B1), relative clauses with prepositions, wo/was when appropriate.
- **G24 — Temporale, kausale und modale Adverbien:** trotzdem, außerdem, allerdings, schließlich, jedenfalls, nämlich, vielleicht, bereits, noch, erst; sentence position and nuance.

### Prepositions, reference words and typical confusion
- **G25 — Präpositionen mit Akkusativ:** durch, für, gegen, ohne, um, bis (contexts) etc.
- **G26 — Präpositionen mit Dativ:** aus, außer, bei, mit, nach, seit, von, zu, gegenüber etc.
- **G27 — Wechselpräpositionen:** an, auf, hinter, in, neben, über, unter, vor, zwischen; Wo? vs Wohin?.
- **G28 — Präpositionen mit Genitiv und Zeitangaben:** wegen, trotz, während, statt, innerhalb/außerhalb; usage/register notes.
- **G29 — Pronominaladverbien:** dafür, damit, davon, daran, darauf, darüber, worauf/womit/woran; differences from da + person; frequent question–answer pairs.
- **G30 — Lokale und richtungsbezogene Wörter:** hier/dort, hinein/heraus, hin/her, nach/zu/in/auf, destination/origin distinctions.

### Expression, communication and meaning
- **G31 — Negation und Einschränkungen:** nicht/kein, niemand/nichts/nie, noch nicht/nicht mehr, nur/erst/schon, kaum.
- **G32 — Vergleich, Grad und Partikeln:** sehr/zu/genug, ziemlich, besonders, eigentlich, doch, mal, ja as modal particle (context and caution).
- **G33 — Aufforderung, Rat, Erlaubnis:** imperative, sollte, dürfte/könnte, man sollte, polite variants.
- **G34 — Wünsche, Meinungen, Argumentation:** ich denke/glaube/finde, meiner Meinung nach, Vor-/Nachteile, Zustimmung/Widerspruch, formal vs informal.
- **G35 — Textverknüpfung und Schreiben:** ordering, adding, exemplifying, concluding, email/letter phrases, paragraph cohesion.
- **G36 — Verwechslungen und Bedeutungsunterschiede:** als/wenn, seit/vor, kennen/wissen, ob/wenn, obwohl/trotzdem, denn/weil, fertig/fertigstellen/abschließen, etc. Include systematic contrast cards.

### High-value verb banks and review
- **G37 — Verbkartei A1 (high frequency):** core movement, daily routines, perception, speech, work, common objects.
- **G38 — Verbkartei A2 (high frequency):** separable/reflexive verbs, common prepositional verbs, modal nuance, routine work situations.
- **G39 — Verbkartei B1 (high frequency):** abstract/process/opinion verbs, common written and workplace forms, common verb + preposition patterns.
- **G40 — Unregelmäßige Verben & Schnelltabellen:** consolidated searchable alphabetic verb index; Präsens (ich/du/er when irregular), Präteritum, Perfekt with auxiliary and Partizip II, core K II forms; cross-link to G37–G39 rather than duplicate records. Include sein/haben/werden and modal verbs.

### Scope rule for verb banks
Do **not** invent a definitive count of “all German verbs.” Start with a curated high-frequency A1–B1 list aligned to the provided curriculum, expand via coverage gaps, and document inclusion criteria. Store verbs as structured entries and render searchable tables/cards. Important: `Präteritum` is a simple past form; `Perfekt` combines haben/sein + Partizip II; `Hilfsverb` is a grammatical role, not a tense. Validate actual conjugations and auxiliary choices.

## 4. UX requirements
- Big visible search input: matches German headwords, English short glosses, tags, and alternate spellings; examples `deshalb`, `deswegen`, `dafür`, `Konjunktiv II`, `schließen`, `abgeschlossen`.
- Left-hand collapsible group navigation with group completion/coverage counters (content authoring coverage, **not** student's learning progress).
- Jump navigation, filter by A1/A2/B1 and type (grammar, connector, verb, phrase).
- Cards provide a **“Mehr lernen / Zur Lektion”** link; deep-link to real existing chapter subsection when anchor exists; fallback to verified chapter start and highlight topic name if subsection anchors absent. Never link to guessed ids.
- Related-topic links for comparisons (`deshalb` ↔ `weil`, `dafür` ↔ `für`/`damit`).
- Handwritten notebook style: continuous dark lined paper, subtle margin, ink titles, yellow highlights, colored grammar emphasis, pencil-note callouts, and clean responsive tables. Use word-order diagrams where they clarify a rule. Avoid generic dashboard cards and repetitive decoration. No rasterization of content.
- Clear empty state for search, loading/error states for JSON loading. Handle failed fetch without blank page. Include accessibility labels and keyboard use.
- No need for per-topic progress tracking in V1; do not add new localStorage keys unless necessary (e.g. sidebar state).

## 5. Linking existing curriculum (mandatory audit)
Before writing data:
1. Inspect existing chapter plan, `chapterwork`/work instruction files, manifest(s), routes, and rendered HTML/markdown. List discovered filenames; do not assume names or structures.
2. Generate a **coverage map** `data/grammar-reference/coverage-map.json` mapping `topicId -> existing chapter path -> subsection id -> status`.
3. Verify actual target routes/anchors in the repo; test navigation (including GitHub Pages subpath). If only a chapter has a valid target, link chapter start. If nothing matches, show “Noch keine passende Lektion”.
4. Each batch re-checks links and adds newly created chapter targets. Never auto-generate or rewrite chapter content as part of reference creation.
5. Place an easy-to-find nav link “Grammatik-Übersicht” on index and learn pages. Avoid disrupting chapter load / export/import.

## 6. Agent workflow — INITIAL SETUP (run only once)
1. Create a git commit / safe restore point if changes are clean. If concurrent agent edits are uncommitted, avoid editing same files and do not overwrite them.
2. Inventory curriculum, current chapter content, route patterns, any anchor IDs, styling. Report findings.
3. Implement `grammatik.html`, scoped notebook stylesheet, small JS renderer/search/router, group manifest and empty data structure. Add minimal nav links after checking concurrent edits.
4. Implement stable schema, input validation, and graceful error UI. Load at least 4 **verified** demonstration topics (e.g., `deshalb / deswegen`, `dafür`, `Konjunktiv II`, one irregular verb) IF curriculum/source material supports them; otherwise choose available topics and report uncovered examples.
5. Build coverage map for existing chapters, without pretending every topic has a chapter.
6. Verify GitHub Pages paths, responsive behavior, search, language display, working links, missing-link notices, no regressions to existing pages.

## 7. Agent workflow — EACH CONTENT BATCH (repeat, ONLY 3–4 topics per run)
1. Read this master file **and** original curriculum/chapterwork files first.
2. Choose exactly 3–4 **uncompleted topics** in roadmap priority order (unless requested otherwise); prioritize common connectors and core reference needs, then fill curriculum gaps systematically. Do not skip topics silently.
3. Research/check German grammar, examples, verb forms, case, preposition and word order; write precise German-first summaries and limited English glosses. Never add uncertain facts as certain.
4. Create/update structured topic records and search terms. Verify all reference links against existing chapter routes/anchors; update the coverage map.
5. Run schema/data validation and UI tests for those topics (search, filtering, cards, examples, links, mobile text width).
6. Update the progress checklist below: mark each finished topic `DONE`, record actual `topicId`, verified lesson destination or `NO LESSON`, and date. Do not mark a whole group done until all listed topics are completed and audited.
7. Summarize **exactly**: 3–4 topics added, files changed, lesson links verified, uncovered topics, next 3–4 proposed. Do not claim fully tested when browser testing unavailable.

## 8. Starter topic queue (first 24 individual cards; agent may reorder based on curriculum coverage)
- [x] T001 — deshalb / deswegen / darum (consequence; V2) — DONE 2026-10-25; `deshalb-deswegen-darum`; `learn.html#/chapter-17/grammar`
- [x] T002 — dafür / dagegen (pronominal adverbs; meanings) — DONE 2026-10-25; `dafuer-dagegen`; `learn.html#/chapter-18/grammar`
- [x] T003 — damit vs um ... zu (purpose) — DONE 2026-10-25; `damit-um-zu`; `learn.html#/chapter-16/grammar`
- [x] T004 — weil vs denn vs da (reason and word order) — DONE 2026-10-25; `weil-denn-da`; `learn.html#/chapter-20/grammar`
- [x] T005 — obwohl vs trotzdem (concession; word order) — DONE 2026-10-25; `obwohl-trotzdem`; `learn.html#/chapter-17/grammar`
- [x] T006 — dass vs das (clause and spelling) — DONE 2026-10-25; `dass-das`; `learn.html#/chapter-14/grammar`, `learn.html#/chapter-01/grammar`, `learn.html#/chapter-21/grammar`
- [x] T007 — wenn vs als (time and conditions) — DONE 2026-10-25; `wenn-als`; `learn.html#/chapter-15/grammar`
- [x] T008 — Konjunktiv II: würde + Infinitiv — DONE 2026-10-25; `konjunktiv-ii-wuerde`; `learn.html#/chapter-23/grammar`
- [x] T009 — Konjunktiv II: wäre / hätte — DONE 2026-10-25; `konjunktiv-ii-waere-haette`; `learn.html#/chapter-23/grammar`
- [x] T010 — Konjunktiv II: Modalverben — DONE 2026-10-25; `konjunktiv-ii-modalverben`; `learn.html#/chapter-23/grammar`
- [x] T011 — Perfekt: haben vs sein — DONE 2026-10-25; `perfekt-haben-sein`; `learn.html#/chapter-09/grammar`
- [x] T012 — Partizip II: formation and exceptions — DONE 2026-10-25; `partizip-ii-bildung`; `learn.html#/chapter-09/grammar`
- [x] T013 — Präteritum: sein / haben / modal verbs — DONE 2026-10-25; `praeteritum-sein-haben-modal`; `learn.html#/chapter-09/grammar`, `learn.html#/chapter-23/grammar`
- [x] T014 — Trennbare und untrennbare Verben — DONE 2026-10-25; `trennbare-untrennbare-verben`; `learn.html#/chapter-08/grammar`, `learn.html#/chapter-09/grammar`
- [x] T015 — Reflexive Verben + case — DONE 2026-10-25; `reflexive-verben-kasus`; `learn.html#/chapter-09/grammar`
- [x] T016 — Akkusativ vs Dativ — DONE 2026-10-25; `akkusativ-dativ`; `learn.html#/chapter-03/grammar`, `learn.html#/chapter-04/grammar`
- [x] T017 — Wechselpräpositionen: Wo? / Wohin? — DONE 2026-10-25; `wechselpraepositionen-wo-wohin`; `learn.html#/chapter-06/grammar`
- [x] T018 — Adjektivdeklination: overview — DONE 2026-10-25; `adjektivdeklination-ueberblick`; `learn.html#/chapter-13/grammar`
- [x] T019 — Relativsätze: basics — DONE 2026-10-25; `relativsaetze-grundlagen`; `learn.html#/chapter-21/grammar`
- [x] T020 — Infinitiv mit zu / ohne zu / statt zu — DONE 2026-10-25; `infinitiv-zu-ohne-statt`; `learn.html#/chapter-16/grammar`
- [x] T021 — Passive voice: basic patterns — DONE 2026-10-25; `passiv-grundmuster`; `learn.html#/chapter-22/grammar`
- [x] T022 — Verb card: abschließen — DONE 2026-10-25; `verb-abschliessen`; `learn.html#/chapter-30/reading`
- [x] T023 — Verb card: werden — DONE 2026-10-25; `verb-werden`; `learn.html#/chapter-11/grammar`, `learn.html#/chapter-22/grammar`, `learn.html#/chapter-25/grammar`
- [x] T024 — Verb card: helfen — DONE 2026-10-25; `verb-helfen`; `learn.html#/chapter-04/grammar`

### Extended inventory — next selected topics
- [x] T025 — Plusquamperfekt: Vorzeitigkeit mit haben und sein — DONE 2026-10-25; `plusquamperfekt-grundmuster`; `learn.html#/chapter-25/grammar`
- [x] T026 — Futur I: Zukunft, Annahmen und Vorhersagen — DONE 2026-10-25; `futur-i-verwendung`; `learn.html#/chapter-25/grammar`
- [x] T027 — Zweiteilige Konjunktionen und Argumentation — DONE 2026-10-25; `zweiteilige-konjunktionen`; `learn.html#/chapter-26/grammar`
- [x] T028 — Partizip I und II als Adjektive — DONE 2026-10-25; `partizipien-adjektivisch`; `learn.html#/chapter-27/grammar`, `learn.html#/chapter-13/grammar`
- [x] T029 — Hauptsatz: Verbzweitstellung und Vorfeld — DONE 2026-10-25; `hauptsatz-verbzweitstellung`; `learn.html#/chapter-02/grammar`
- [x] T030 — W-Fragen und Ja-/Nein-Fragen — DONE 2026-10-25; `w-fragen-ja-nein-fragen`; `learn.html#/chapter-02/grammar`
- [x] T031 — nicht oder kein? Grundnegation — DONE 2026-10-25; `nicht-kein-negation`; `learn.html#/chapter-03/grammar`
- [x] T032 — Imperativ: du, ihr, Sie und wir — DONE 2026-10-25; `imperativ-aufforderungen`; `learn.html#/chapter-08/grammar`
- [x] T033 — Satzklammer: Modalverben und trennbare Verben — DONE 2026-10-25; `satzklammer-modalverben-trennbar`; `learn.html#/chapter-05/grammar`, `learn.html#/chapter-08/grammar`
- [x] T034 — Modalverben: Bedeutung und Satzbau — DONE 2026-10-25; `modalverben-grundbedeutungen`; `learn.html#/chapter-05/grammar`
- [x] T035 — Personalpronomen im Akkusativ und Dativ — DONE 2026-10-25; `personalpronomen-akkusativ-dativ`; `learn.html#/chapter-03/grammar`, `learn.html#/chapter-04/grammar`
- [x] T036 — Artikel im Nominativ: bestimmt, unbestimmt, null — DONE 2026-10-25; `bestimmte-unbestimmte-nullartikel`; `learn.html#/chapter-01/grammar`
- [x] T037 — Possessivartikel im Akkusativ — DONE 2026-10-25; `possessivartikel-akkusativ`; `learn.html#/chapter-03/grammar`
- [x] T038 — Dativartikel und Dativ-Plural-n — DONE 2026-10-25; `dativartikel-plural-n`; `learn.html#/chapter-04/grammar`
- [x] T039 — Verben mit Dativ und Akkusativ — DONE 2026-10-25; `verben-dativ-akkusativ`; `learn.html#/chapter-04/grammar`
- [x] T040 — Wortstellung mit zwei Objekten — DONE 2026-10-25; `wortstellung-zwei-objekte`; `learn.html#/chapter-04/grammar`
- [x] T041 — Häufige Präpositionen mit Akkusativ — DONE 2026-10-25; `akkusativpraepositionen`; `learn.html#/chapter-06/grammar`
- [x] T042 — Häufige Präpositionen mit Dativ — DONE 2026-10-25; `dativpraepositionen`; `learn.html#/chapter-06/grammar`
- [x] T043 — Präposition-Artikel-Kurzformen — DONE 2026-10-25; `praeposition-artikel-kurzformen`; `learn.html#/chapter-06/grammar`
- [x] T044 — Temporale Präpositionen und Zeitangaben — DONE 2026-10-25; `temporale-praepositionen`; `learn.html#/chapter-07/grammar`
- [x] T045 — Ordinalzahlen: Reihenfolge und Endungen (G08, A1) — DONE 2026-10-28; `ordinalzahlen-reihenfolge`; `learn.html#/chapter-07/grammar`
- [x] T046 — Das Datum schreiben und sagen (G08, A1) — DONE 2026-10-28; `datum-schreiben-sagen`; `learn.html#/chapter-07/grammar`
- [x] T047 — Die Uhrzeit: offiziell und im Alltag (G08, A1) — DONE 2026-10-28; `uhrzeit-offiziell-alltag`; `learn.html#/chapter-07/grammar`
- [x] T048 — Wochentage, Tageszeiten, Monate und Jahreszeiten (G08, A1) — DONE 2026-10-28; `wochentage-tageszeiten-monate`; `learn.html#/chapter-07/grammar`
- [x] T049 — Kardinalzahlen: Grundformen und Zusammensetzung (G08, A1) — DONE 2026-10-28; `kardinalzahlen-grundformen`; `learn.html#/chapter-07/grammar`
- [x] T050 — Häufigkeitsadverbien und Zeitwörter (G08, A1) — DONE 2026-10-28; `haeufigkeitsadverbien`; `learn.html#/chapter-07/grammar`
- [x] T051 — Mengen: viel, viele, wenig und genug (G08, A1) — DONE 2026-10-28; `mengenangaben-viel-wenig`; `learn.html#/chapter-07/grammar`
- [x] T052 — Zeitangaben im Hauptsatz: Position und Verbzweitstellung (G01, A1) — DONE 2026-10-28; `zeitangaben-wortstellung`; `learn.html#/chapter-07/grammar`
- [x] T053 — Nebenordnende Konjunktionen: und, oder, aber, denn, sondern (G20, A1) — DONE 2026-10-28; `nebenordnende-konjunktionen`; `learn.html#/chapter-10/grammar`
- [x] T054 — Zeitliche Satzverbindungen: zuerst, dann und danach (G21, A1) — DONE 2026-10-28; `zuerst-dann-danach`; `learn.html#/chapter-10/grammar`
- [x] T055 — Adjektive: prädikativ und adverbial (G07, A1) — DONE 2026-10-28; `adjektive-praedikativ-adverbial`; `learn.html#/chapter-10/grammar`
- [x] T056 — Gleichheit vergleichen: so … wie und genauso … wie (G07, A1) — DONE 2026-10-28; `gleichheitsvergleich-so-wie`; `learn.html#/chapter-10/grammar`
- [x] T057 — Ortsadverbien: hier, dort, drinnen und draußen — DONE 2026-10-28; `ortsadverbien-hier-dort`; `learn.html#/chapter-10/grammar`
- [x] T058 — schon, noch und erst: zeitliche Bedeutung — DONE 2026-10-28; `schon-noch-erst`; `learn.html#/chapter-10/grammar`
- [x] T059 — Gradangaben: sehr, ziemlich, besonders und zu — DONE 2026-10-28; `gradadverbien-sehr-zu`; `learn.html#/chapter-10/grammar`
- [x] T060 — Großschreibung und Satzzeichen im Alltag — DONE 2026-10-28; `grossschreibung-satzzeichen`; `learn.html#/chapter-10/grammar`
- [x] T061 — Präteritum regelmäßiger Verben (G11, A2) — DONE 2026-10-28; `praeteritum-regelmaessige-verben`; `learn.html#/chapter-11/grammar`
- [x] T062 — Präteritum starker und gemischter Verben (G11, A2) — DONE 2026-10-28; `praeteritum-starke-gemischte-verben`; `learn.html#/chapter-11/grammar`
- [x] T063 — Perfekt oder Präteritum? (G11, A2) — DONE 2026-10-28; `perfekt-oder-praeteritum`; `learn.html#/chapter-11/grammar`
- [x] T064 — Vergangene Ereignisse chronologisch erzählen (G21, A2) — DONE 2026-10-28; `vergangenheit-chronologisch-erzaehlen`; `learn.html#/chapter-11/grammar`
- [x] T065 — Echte und fakultativ reflexive Verben (G16, A2) — DONE 2026-10-28; `echte-fakultativ-reflexive-verben`; `learn.html#/chapter-12/grammar`
- [x] T066 — Reflexive Verben mit festen Präpositionen (G16, A2) — DONE 2026-10-28; `reflexive-verben-feste-praepositionen`; `learn.html#/chapter-12/grammar`
- [x] T067 — Stellung des Reflexivpronomens (G06, A2) — DONE 2026-10-28; `reflexivpronomen-wortstellung`; `learn.html#/chapter-12/grammar`
- [x] T068 — Gegenseitige Handlungen: einander und sich (G06, A2) — DONE 2026-10-28; `einander-gegenseitige-handlungen`; `learn.html#/chapter-12/grammar`
- [x] T069 — Komparativ und Superlativ bilden (G07, A2) — DONE 2026-10-28; `komparativ-superlativ-bilden`; `learn.html#/chapter-13/grammar`
- [x] T070 — Ungleichheit vergleichen: Komparativ + als (G07, A2) — DONE 2026-10-28; `komparativ-als-ungleichheit`; `learn.html#/chapter-13/grammar`
- [x] T071 — Superlativ: am … -sten oder der/die/das … -ste (G07, A2) — DONE 2026-10-28; `superlativ-am-attributiv`; `learn.html#/chapter-13/grammar`
- [x] T072 — Adjektive mit festen Präpositionen und Kasus (G07, A2) — DONE 2026-10-28; `adjektive-feste-praepositionen`; `learn.html#/chapter-13/grammar`
- [x] T073 — Indirekte Ja-/Nein-Fragen mit ob (G22, A2) — DONE 2026-10-28; `indirekte-ja-nein-fragen-ob`; `learn.html#/chapter-14/grammar`
- [x] T074 — Indirekte W-Fragen (G22, A2) — DONE 2026-10-28; `indirekte-w-fragen`; `learn.html#/chapter-14/grammar`
- [x] T075 — Mehrteilige Verbgruppen im Nebensatz (G17, A2) — DONE 2026-10-28; `verbendstellung-mehrteilige-verben`; `learn.html#/chapter-14/grammar`
- [x] T076 — Nebensatz im Vorfeld: Komma und Verbzweitstellung (G17, A2) — DONE 2026-10-28; `nebensatz-vorfeld-inversion`; `learn.html#/chapter-14/grammar`


- [x] T077 — wenn oder wann? Zeitangabe und Frage (G36, A2) — DONE 2026-10-28; `wenn-wann-zeitfrage`; `learn.html#/chapter-15/grammar`
- [x] T078 — Bevor: vor einem späteren Ereignis (G21, A2) — DONE 2026-10-28; `bevor-zeitliche-reihenfolge`; `learn.html#/chapter-15/grammar`
- [x] T079 — Nachdem: Reihenfolge und Vorzeitigkeit (G21, A2) — DONE 2026-10-28; `nachdem-vorzeitigkeit`; `learn.html#/chapter-15/grammar`
- [x] T080 — Während: gleichzeitige Handlungen (G21, A2) — DONE 2026-10-28; `waehrend-gleichzeitigkeit`; `learn.html#/chapter-15/grammar`, `learn.html#/chapter-07/grammar`


- [x] T081 — Seitdem: Beginn in der Vergangenheit bis heute (G21, A2) — DONE 2026-10-28; `seitdem-anfang-bis-heute`; `learn.html#/chapter-15/grammar`, `learn.html#/chapter-07/grammar`
- [x] T082 — Bis: zeitlicher Endpunkt (G21, A2) — DONE 2026-10-28; `bis-zeitgrenze`; `learn.html#/chapter-15/grammar`, `learn.html#/chapter-07/grammar`
- [x] T083 — Sobald und solange: Anschluss und Dauer (G21, A2) — DONE 2026-10-28; `sobald-solange-zeitbezug`; `learn.html#/chapter-15/grammar`
- [x] T084 — Zeitverbindungen und Zeitformen kombinieren (G21, A2) — DONE 2026-10-28; `temporalverbindungen-zeitformen`; `learn.html#/chapter-15/grammar`, `learn.html#/chapter-25/grammar`


- [x] T085 — Verben mit zu-Infinitiv (G15, A2) — DONE 2026-10-28; `verben-mit-zu-infinitiv`; `learn.html#/chapter-16/grammar`
- [x] T086 — Dass-Satz oder Infinitivsatz? (G22, A2) — DONE 2026-10-28; `dass-satz-oder-infinitivsatz`; `learn.html#/chapter-16/grammar`
- [x] T087 — Lassen + Infinitiv ohne zu (G15, A2) — DONE 2026-10-28; `lassen-infinitiv-ohne-zu`; `learn.html#/chapter-16/grammar`
- [x] T088 — Brauchen + nicht/kein + zu-Infinitiv (G15, A2) — DONE 2026-10-28; `brauchen-nicht-zu`; `learn.html#/chapter-16/grammar`
- [x] T089 — Adjektive und Nomen mit zu-Infinitiv (G15, A2) — DONE 2026-10-28; `adjektive-nomen-zu-infinitiv`; `learn.html#/chapter-16/grammar`
- [x] T090 — Wenn und falls: Bedingung (G19, A2) — DONE 2026-10-28; `wenn-falls-bedingung`; `learn.html#/chapter-17/grammar`
- [x] T091 — Sonst und andernfalls: mögliche Folge (G19, A2) — DONE 2026-10-28; `sonst-andernfalls`; `learn.html#/chapter-17/grammar`
- [x] T092 — Indem: Mittel und Art der Handlung (G19, A2) — DONE 2026-10-28; `indem-methode`; `learn.html#/chapter-17/grammar`
- [x] T093 — Verben mit festen Präpositionen (G16, A2) — DONE 2026-10-28; `verb-praeposition-feste-verbindungen`; `learn.html#/chapter-18/grammar`
- [x] T094 — Verb-Präposition-Verbindungen: Akkusativ oder Dativ? (G16, A2) — DONE 2026-10-28; `verb-praeposition-kasus`; `learn.html#/chapter-18/grammar`
- [x] T096 — Präpositionalobjekt oder freie Angabe? (G16, A2) — DONE 2026-10-28; `praepositionalobjekt-freie-angabe`; `learn.html#/chapter-18/grammar`
- [x] T097 — Nach Personen fragen: Präposition + wen/wem (G29, A2) — DONE 2026-10-28; `praeposition-personenfragen`; `learn.html#/chapter-18/grammar`
- [x] T098 — Nach Sachen fragen: wo(r) + Präposition (G29, A2) — DONE 2026-10-28; `praepositionenfragen-wo-r`; `learn.html#/chapter-18/grammar`
- [x] T099 — Sachen wiederaufnehmen: da(r) + Präposition (G29, A2) — DONE 2026-10-28; `praepositionen-rueckbezug-dar`; `learn.html#/chapter-18/grammar`
- [x] T100 — Verb-Präposition-Paare mit Bedeutungsunterschied (G16, A2) — DONE 2026-10-28; `verb-praeposition-bedeutungspaare`; `learn.html#/chapter-18/grammar`
- [x] T101 — Häufige Präpositionen mit Genitiv (G28, A2) — DONE 2026-10-28; `genitivpraepositionen-auswahl`; `learn.html#/chapter-18/grammar`
- [x] T102 — Genitivartikel: des/eines und der/einer (G05, A2) — DONE 2026-10-28; `genitivartikel-des-der`; `learn.html#/chapter-19/grammar`
- [x] T103 — Endungen der Nomen im Genitiv (G05, A2) — DONE 2026-10-28; `genitiv-nomen-endungen`; `learn.html#/chapter-19/grammar`
- [x] T104 — Besitz ausdrücken und mit wessen? fragen (G28, A2) — DONE 2026-10-28; `besitz-genitiv-wessen`; `learn.html#/chapter-19/grammar`
- [x] T105 — Eigennamen im Genitiv (G28, A2) — DONE 2026-10-28; `eigennamen-genitiv`; `learn.html#/chapter-19/grammar`
- [x] T106 — Genitiv oder von + Dativ? (G28, A2) — DONE 2026-10-28; `genitiv-oder-von-dativ`; `learn.html#/chapter-19/grammar`
- [x] T107 — n-Deklination: schwache maskuline Nomen (G05, A2) — DONE 2026-10-28; `n-deklination-schwache-maskulina`; `learn.html#/chapter-19/grammar`
- [x] T108 — Zusammengesetzte Nomen (G02, A2) — DONE 2026-10-28; `zusammengesetzte-nomen`; `learn.html#/chapter-19/grammar`
- [x] T109 — Nominalisierung: Verben und Adjektive als Nomen (G02, A2) — DONE 2026-10-28; `nominalisierung-grundlagen`; `learn.html#/chapter-19/grammar`
- [x] T110 — Häufige Nomen-Suffixe erkennen (G02, A2) — DONE 2026-10-28; `nomen-suffixe-grundformen`; `learn.html#/chapter-19/grammar`
- [x] T111 — Diminutive mit -chen und -lein (G02, A2) — DONE 2026-10-28; `diminutive-chen-lein`; `learn.html#/chapter-19/grammar`
- [x] T112 — Präsens und Vergangenheit im zusammenhängenden Text (G35, A2) — DONE 2026-10-28; `tempuswahl-zusammenhaengender-text`; `learn.html#/chapter-20/grammar`
- [x] T113 — Wortstellung, TEKAMOLO und Informationsreihenfolge (G01, A2) — DONE 2026-10-28; `tekamolo-informationsreihenfolge`; `learn.html#/chapter-20/grammar`
- [x] T114 — Private und formelle Briefe und E-Mails (G35, A2) — DONE 2026-10-28; `private-formelle-email`; `learn.html#/chapter-20/grammar`
- [x] T115 — Relativsätze im Perfekt (G23, B1) — DONE 2026-10-28; `relativsaetze-perfekt`; `learn.html#/chapter-21/grammar`
- [x] T116 — Relativsätze mit Modalverben (G23, B1) — DONE 2026-10-28; `relativsaetze-modalverben`; `learn.html#/chapter-21/grammar`
- [x] T117 — Freie Relativsätze mit wer, wen und wem (G23, B1) — DONE 2026-10-28; `freie-relativsaetze-wer-wen-wem`; `learn.html#/chapter-21/grammar`
- [x] T118 — Starke Verben im Konjunktiv II (G13, B1) — DONE 2026-10-28; `konjunktiv-ii-starke-verben`; `learn.html#/chapter-23/grammar`
- [x] T119 — Irreale Bedingungen und wenn-Sätze (G13, B1) — DONE 2026-10-28; `konjunktiv-ii-irrealer-wenn-satz`; `learn.html#/chapter-23/grammar`
- [x] T120 — Als ob: unwirklicher Eindruck (G13, B1) — DONE 2026-10-28; `als-ob-konjunktiv`; `learn.html#/chapter-23/grammar`
- [x] T121 — Vorfeld, Mittelfeld und Nachfeld (G01, B1) — DONE 2026-10-28; `satzfelder-vorfeld-mittelfeld-nachfeld`; `learn.html#/chapter-24/grammar`
- [x] T122 — Pronomen und mehrere Objekte im Mittelfeld (G06, B1) — DONE 2026-10-28; `pronomen-und-objektstellung`; `learn.html#/chapter-24/grammar`
- [x] T123 — Stellung von nicht, auch und nur (G31, B1) — DONE 2026-10-28; `nicht-auch-nur-fokusstellung`; `learn.html#/chapter-24/grammar`
- [x] T124 — Nachfeld und Ausklammerung (G01, B1) — DONE 2026-10-28; `nachfeld-ausklammerung`; `learn.html#/chapter-24/grammar`

Extend with all topic cards derived from G01–G40 and actual curriculum. The above list is a **starter queue, not complete coverage**. Before claiming scope complete, enumerate every topic in groups and reconcile with original chapter plan.

## 9. Content QA checklist (for every topic)
- [ ] Correct German grammar and punctuation; consistent formal/informal context.
- [ ] Correct verb position and constituent order; explain V2/verb-final for connectors.
- [ ] English gloss is short and accurate; all teaching text predominantly German.
- [ ] Real, idiomatic examples and at least one contrast where confusing.
- [ ] Cross-link to related topic where relevant.
- [ ] `lessonLinks` verified and reachable, or missing lesson explicitly marked.
- [ ] Search finds topic by German term and English gloss.
- [ ] Works on mobile and desktop; visually aligns with notebook theme.
- [ ] Doesn't overwrite learning progress, chapter files, classic CSS, landing page design, or export/import.

## 10. Definition of done
The reference is complete only after all required A1–B1 topics from the **existing** learning syllabus have entries, all scheduled common verb entries have validated tense forms, every topic has a verified chapter deep-link or an honest missing-lesson label, and the UI/search work on GitHub Pages. Do not equate completion of the 24 starter cards with completion of the reference.
- [x] T125 — Satzklammer im Hauptsatz (G01, B1) — DONE 2026-10-28; `satzklammer-hauptsatz`; `learn.html#/chapter-24/grammar`
- [x] T126 — Plusquamperfekt mit haben (G11, B1) — DONE 2026-10-28; `plusquamperfekt-haben`; `learn.html#/chapter-25/grammar`
- [x] T127 — Plusquamperfekt mit sein (G11, B1) — DONE 2026-10-28; `plusquamperfekt-sein`; `learn.html#/chapter-25/grammar`
- [x] T128 — Plusquamperfekt und Präteritum unterscheiden (G11, B1) — DONE 2026-10-28; `plusquamperfekt-praeteritum-unterscheiden`; `learn.html#/chapter-25/grammar`
- [x] T129 — Futur I mit werden bilden (G12, B1) — DONE 2026-10-31; `futur-i-werden`; `learn.html#/chapter-25/grammar`
- [x] T130 — Präsens und Futur I vergleichen (G12, B1) — DONE 2026-10-31; `praesens-oder-futur-i`; `learn.html#/chapter-25/grammar`
- [x] T131 — Futur I für Annahmen und Vorhersagen (G12, B1) — DONE 2026-10-31; `futur-i-vermutungen`; `learn.html#/chapter-25/grammar`
- [x] T132 — Modalverben in verschiedenen Zeiten (G10, B1) — DONE 2026-10-31; `modalverben-zeitformen`; `learn.html#/chapter-25/grammar`
