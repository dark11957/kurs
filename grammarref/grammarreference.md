# GRAMMAR REFERENCE — MASTER PLAN & AGENT WORK FILE

Status: PLANNED. This file is the authoritative roadmap for the new reference, but the existing chapter plans and chapter data remain the authoritative source for lesson content and mappings.

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
- A narrow left navigation for groups with search/filter and a wide main notebook area; responsive single-column mode on mobile. Large fonts (body ~19–22px, headings 28–42px), good contrast, lined-paper effect and colored pencil/ink cues, accessible focus and reduced motion. Handwriting font must support ä ö ü ß and remain legible; fall back gracefully.

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
- Handwritten notebook style: lined paper, subtle margin, ink titles, yellow highlights, sketchy callout borders, clean responsive tables. No rasterization of content, no huge repetitive decorations.
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
- [ ] T001 — deshalb / deswegen / darum (consequence; V2)
- [ ] T002 — dafür / dagegen (pronominal adverbs; meanings)
- [ ] T003 — damit vs um ... zu (purpose)
- [ ] T004 — weil vs denn vs da (reason and word order)
- [ ] T005 — obwohl vs trotzdem (concession; word order)
- [ ] T006 — dass vs das (clause and spelling)
- [ ] T007 — wenn vs als (time and conditions)
- [ ] T008 — Konjunktiv II: würde + Infinitiv
- [ ] T009 — Konjunktiv II: wäre / hätte
- [ ] T010 — Konjunktiv II: modal verbs
- [ ] T011 — Perfekt: haben vs sein
- [ ] T012 — Partizip II: formation and exceptions
- [ ] T013 — Präteritum: sein / haben / modal verbs
- [ ] T014 — Trennbare und untrennbare Verben
- [ ] T015 — Reflexive Verben + case
- [ ] T016 — Akkusativ vs Dativ
- [ ] T017 — Wechselpräpositionen: Wo? / Wohin?
- [ ] T018 — Adjektivdeklination: overview
- [ ] T019 — Relativsätze: basics
- [ ] T020 — Infinitiv mit zu / ohne zu / statt zu
- [ ] T021 — Passive voice: basic patterns
- [ ] T022 — Verb card: abschließen
- [ ] T023 — Verb card: werden
- [ ] T024 — Verb card: helfen

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