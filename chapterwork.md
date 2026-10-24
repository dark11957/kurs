# DEUTSCH A1–B1 — CHAPTER GENERATION WORKFLOW
## Execute Once for Each New Chapter or Scheduled Assessment

# 1. YOUR MISSION

You are a professional German language educator, curriculum designer, educational content author, and frontend developer.

Your primary responsibility is to create complete, academically accurate, engaging German study material and integrate it into the existing interactive learning website.

**This is a CONTENT PRODUCTION task, not a website redesign task.**

The website infrastructure already exists.

You must reuse it.

Generate exactly ONE complete learning chapter or scheduled assessment per execution.

After successfully finishing the current unit, stop.

---

# 2. MANDATORY SOURCE FILES

Before creating content, read:

1. `chapterwork.md`
2. `chapters.md`
3. `chapterstructure.md`
4. `studycontent.md`
5. `styling.md`
6. `docs/content-schema.md`
7. `progress/chapters.json`

Also inspect:

- Existing chapter content files.
- Previous chapter reports.
- Relevant application components.
- The established curriculum order.

Do not rely exclusively on memory or previous conversation context.

The Markdown source files are authoritative.

---

# 3. DETERMINE THE NEXT UNIT

Read `progress/chapters.json`.

Find the first unfinished unit in the curriculum's actual order.

A unit may be:

- A learning chapter.
- A cumulative examination.
- An A1 final examination.
- An A2 final examination.
- A B1 final examination.

Use the assessment schedule defined in `chapters.md`.

Do not skip scheduled assessments.

## Resume behavior

If a unit is marked `in_progress`, resume and finish it.

If the manifest says a unit is completed but its content is missing or incomplete, investigate and correct the inconsistency before proceeding.

Do not create a duplicate chapter.

Never mark a chapter complete merely because a file exists.

---

# 4. CONTENT IS THE PRIMARY DELIVERABLE

The most important output is the actual educational material.

Not a plan.

Not a summary.

Not a progress report.

Not an empty JSON structure.

Not a collection of section headings.

You must write substantial, complete educational content that a student can immediately study.

**Every chapter must include all nine mandatory sections.**

If a section is missing or contains placeholder text, the chapter is unfinished.

---

# 5. CHAPTER METADATA

Read the current chapter definition in `chapters.md`.

Extract:

- Chapter number.
- German title.
- Level.
- Grammar subjects.
- Original grammar reference numbers.
- Vocabulary themes.
- Learning objectives.
- Relevant storyline.
- Prerequisites.

Preserve the curriculum's intended learning progression.

Do not arbitrarily introduce advanced grammar that has not yet been taught.

Do not change chapter assignments.

---

# 6. SECTION 01 — EINSTIEG

Generate complete content for:

## 1.1 Lernziele
Clear learning objectives.

## 1.2 Vorwissen
Brief review of relevant previous material.

## 1.3 Schlüsselwörter
Approximately 5–8 essential words with meanings and examples.

## 1.4 Einstiegstext
A complete, engaging German opening text.

## 1.5 Entdeckungsfragen
Three to five questions encouraging grammar discovery.

The opening text should naturally introduce the chapter's grammar.

Do not explain all rules before the student encounters them.

---

# 7. SECTION 02 — LESEN & VERSTEHEN

Generate:

## 2.1 Lesetext A

A complete original German story or dialogue.

## 2.2 Textverständnis A

Multiple comprehension questions.

Include appropriate combinations of:

- True/false.
- Multiple choice.
- Short answers.
- Information extraction.
- Interpretation.

## 2.3 Lesetext B

A second complete text with a different format.

For example:

- Email.
- Announcement.
- Interview.
- Article.
- Message.
- Workplace conversation.

## 2.4 Textverständnis B

Comprehension exercises specifically based on Text B.

## 2.5 Sprachbeobachtung

Exercises identifying grammar structures in the reading texts.

## 2.6 Textvergleich

Include when relevant to the chapter and level.

Do not create comprehension questions whose answers cannot be found or reasonably inferred from the text.

---

# 8. SECTION 03 — WORTSCHATZ

Generate meaningful vocabulary content.

Required:

## 3.1 Neue Wörter

A complete vocabulary collection appropriate to the chapter.

Every entry should contain:

- German word.
- English translation.
- Word category.
- Article and plural for nouns.
- Relevant verb forms where useful.
- Example sentence.

## 3.2 Nützliche Ausdrücke

Common, practical expressions.

## 3.3 Wortfamilien

Related word forms.

## 3.4 Synonyme & Gegenteile

Include when appropriate to the student's level.

## 3.5 Wortschatz im Kontext

Examples of vocabulary used naturally.

## 3.6 Wortschatzübungen

Several useful exercises.

## 3.7 Wiederholungswortschatz

Previously studied vocabulary for reinforcement.

At Chapter 01, previous-vocabulary review can be replaced with additional foundational practice.

### Vocabulary targets

A1: Approximately 12–20 new active words.

A2: Approximately 20–30.

B1: Approximately 25–40.

Do not fill vocabulary collections with unrelated words merely to meet the target.

---

# 9. SECTION 04 — GRAMMATIK

This is the central educational section.

Read every grammar subject assigned to the chapter.

**Explain every assigned subject clearly and completely at the chapter's intended level.**

For each substantial grammar rule, create:

### A. Regelname
German name and English meaning.

### B. Erklärung
Clear explanation.

### C. Struktur
Grammatical formula or sentence pattern.

### D. Beispiele
Several natural German examples.

### E. Besonderheiten
Relevant exceptions and irregular forms.

### F. Häufige Fehler
Common mistakes, corrections, and explanations.

### G. Merktipp
Helpful memory reminder where appropriate.

### H. Mini-Übung
Three to five exercises immediately following the rule.

Also include:

- Grammar overview.
- Relevant declension or conjugation tables.
- Comparisons between commonly confused rules.
- Examples extracted from the reading texts.
- Final grammar understanding check.

## Critical completeness requirement

Do not replace detailed grammar explanations with short summaries.

For example, if a chapter teaches Akkusativ, cover the assigned article forms, pronouns, common verbs, sentence usage, examples, and relevant exceptions.

If a chapter teaches Perfekt, cover the assigned auxiliary selection, participle formation, irregular patterns, sentence structure, and relevant special cases.

**The student should not need another textbook to understand the chapter's assigned grammar.**

---

# 10. SECTION 05 — ÜBUNGEN & AKTIVITÄTEN

Generate diverse, progressive exercises.

Required categories:

1. Recognition.
2. Completion.
3. Transformation.
4. Sentence construction.
5. Translation.
6. Error correction.
7. Dialogue completion.
8. Creative activities.
9. Mixed grammar exercises.

Use the categories that are appropriate to the current level and grammar.

Each exercise must have:

- A stable unique ID.
- Clear instructions.
- Appropriate question text.
- Correct answer or assessment method.
- Helpful feedback.
- Relevant grammar reference when useful.

Avoid repeating almost identical questions.

Use varied vocabulary and realistic contexts.

Every objectively gradable question must have a verified solution.

For open-ended exercises, provide model answers and assessment guidance.

---

# 11. SECTION 06 — SPRACHE IM ALLTAG

Generate practical language activities.

Required:

## 6.1 Alltagsdialog
A complete natural dialogue.

## 6.2 Redemittel
Useful communication patterns.

## 6.3 Situationsaufgabe
A practical everyday scenario.

## 6.4 Schreibtraining
Guided writing activity.

## 6.5 Sprechtraining
Speaking prompts.

## 6.6 Mini-Projekt
Include when pedagogically useful.

The goal is to use grammar naturally rather than memorize isolated rules.

---

# 12. SECTION 07 — ZUSAMMENFASSUNG

Generate a concise but useful review.

Include:

- Grammar summary.
- Essential vocabulary.
- Common mistakes.
- Memory tips.
- Self-assessment checklist.
- Short cumulative revision.

Do not reproduce the entire grammar section.

Use compact tables where appropriate.

---

# 13. SECTION 08 — KAPITELPRÜFUNG

Generate a COMPLETE examination worth 100 points.

Required distribution:

| Section | Points |
|---|---:|
| Reading comprehension | 20 |
| Vocabulary | 15 |
| Grammar | 35 |
| Sentence construction | 10 |
| Writing | 20 |
| Total | 100 |

## Part I — Reading comprehension

Create two NEW reading texts.

They must be different from the chapter's learning texts.

Add multiple comprehension questions.

## Part II — Vocabulary

Create exercises testing new and selected previous vocabulary.

## Part III — Grammar

Create several exercise groups.

Cover every major grammar subject from the current chapter.

## Part IV — Sentence construction

Require independent construction or transformation of German sentences.

## Part V — Writing

Create two or three writing tasks, following `chapterstructure.md`.

Include:

- Guided writing.
- Practical communication.
- Independent writing appropriate to the level.

At early A1, keep tasks short and guided.

At B1, require structured arguments and connected writing.

## Examination rules

- Do not reuse learning texts.
- Do not reveal solutions before submission.
- Do not create ambiguous questions.
- Verify every objective answer.
- Ensure points total exactly 100.
- Do not automatically grade unrestricted writing.
- Provide appropriate manual-assessment guidance.

---

# 14. SECTION 09 — LÖSUNGEN & LERNKONTROLLE

Generate:

- Complete practice exercise solutions.
- Complete examination solutions.
- Short explanations for difficult answers.
- Model writing responses.
- Writing evaluation criteria.
- Mistake-review guidance.
- Progress recommendations.

Ensure all exercise IDs and examination question IDs have corresponding answers or appropriate assessment instructions.

No missing solutions.

---

# 15. STORYTELLING — HOUSSEM AND TASSNIM

Houssem is the recurring male character.

Tassnim is the recurring female character.

Houssem works in software development.

Tassnim works in IT support and security.

Their stories can include:

- Workplace experiences.
- Daily life.
- Friendship.
- Shared activities.
- Travel.
- Personal conversations.
- Emotions.
- Gradually developing romantic feelings.

## Story development

A1: They meet and develop a friendship.

A2: They grow closer through shared experiences.

B1: They discuss more meaningful emotions, decisions, and future possibilities.

Maintain continuity with previous chapters.

Avoid unrealistic situations.

Avoid childish dialogue.

Avoid forced romance.

Include independent reading texts when useful.

---

# 16. GERMAN LANGUAGE QUALITY

Educational correctness is mandatory.

Verify:

- Articles.
- Noun plurals.
- Verb conjugation.
- Verb tense.
- Case selection.
- Pronoun usage.
- Adjective endings.
- Word order.
- Prepositions.
- Sentence structure.
- Vocabulary meanings.
- Naturalness of German expressions.

Do not invent grammar rules.

If uncertain about a grammatical point, consult a reliable grammar reference when available.

Do not silently guess.

Use level-appropriate language.

Explanations should be in clear English, with German grammar terminology.

Reading texts and examples should primarily be in German.

---

# 17. GRAMMAR ANNOTATIONS

Add grammar annotations to relevant reading texts and examples.

Use the existing annotation system.

Highlight grammatical categories relevant to the chapter.

Provide short explanations for annotated phrases.

Do not highlight entire paragraphs.

Do not highlight every word.

Do not create inaccurate annotations.

Follow the colors and interaction rules in `styling.md`.

---

# 18. WEBSITE INTEGRATION

Use the established content schema.

Do not create a new incompatible schema for each chapter.

Do not rewrite the website infrastructure.

Do not redesign the sidebar.

Do not introduce unrelated new CSS styles.

Create the current chapter's content module.

Register it with the curriculum loader.

Ensure every chapter section is accessible.

Implement any missing reusable component only if genuinely necessary.

Preserve previously completed chapters.

---

# 19. DESIGN CONSISTENCY

**Read `styling.md` before implementing every chapter.**

Verify:

- Ubuntu typography.
- Large, readable text.
- Dark charcoal background.
- Green accent color.
- Exactly two main layout columns.
- Collapsible sidebar.
- No third column.
- Consistent educational components.
- Clean grammar tables.
- Attractive reading presentation.
- Proper exercise spacing.
- Responsive design.

Do not create chapter-specific visual styles that conflict with the permanent design system.

---

# 20. CONTENT COVERAGE VALIDATION

Before completion, compare the generated chapter against its definition in `chapters.md`.

Create an internal checklist of its assigned grammar subjects.

Verify that each subject has been taught.

A subject is not considered covered simply because its name appears in a heading or summary.

It must have appropriate explanations, examples, and practice.

Preserve original grammar reference numbers in chapter metadata.

Avoid unnecessary duplication of already taught grammar.

When previous knowledge is required, use short reminders and cross-references.

---

# 21. EXERCISE & EXAM VALIDATION

Before completion, verify:

1. Every objective exercise has an answer.
2. Every answer matches its question.
3. Multiple-choice options are valid.
4. Correct answers are accepted.
5. Incorrect answers are rejected appropriately.
6. Writing tasks have model answers.
7. Examination point totals equal 100.
8. Examination texts are new.
9. Every major grammar subject is assessed.
10. Exercise IDs are unique.
11. Student progress can be saved.
12. Examination submission works.

Do not mark the chapter complete if any critical requirement fails.

---

# 22. COMPLETION REPORT

Only after writing and validating the chapter, create:

`progress/reports/chapter-XX.md`

Include:

- Chapter title and level.
- Completion status.
- Grammar topics covered.
- Original grammar references.
- Reading texts created.
- Vocabulary count.
- Exercises created.
- Examination questions created.
- Writing activities.
- Solutions.
- Files modified.
- Validation performed.
- Remaining issues.
- Next pending unit.

The report must describe actual completed work.

Do not create reports instead of content.

---

# 23. PROGRESS MANIFEST

Update:

`progress/chapters.json`

Only after validation.

The chapter can have these statuses:

- `pending`
- `in_progress`
- `completed`
- `blocked`

## Completion requirements

Do not mark completed unless:

- All nine sections exist.
- All sections contain real educational content.
- All assigned grammar subjects are covered.
- Reading texts are complete.
- Vocabulary is populated.
- Exercises are usable.
- Examination is complete.
- Solutions exist.
- Navigation works.
- Content renders correctly.
- No critical issues remain.

If content is incomplete, leave the unit marked `in_progress`.

---

# 24. CUMULATIVE ASSESSMENTS

The curriculum includes cumulative tests and final level examinations.

Respect their exact placement.

When the next pending unit is a cumulative assessment:

1. Read the relevant completed chapters.
2. Identify the grammar and vocabulary to assess.
3. Generate new reading texts.
4. Create integrated grammar exercises.
5. Include vocabulary revision.
6. Include sentence transformation.
7. Include writing tasks.
8. Provide solutions.
9. Integrate the assessment into navigation.
10. Validate.
11. Document completion.
12. Stop.

Do not generate a new learning chapter during the same execution.

---

# 25. STRICT ONE-UNIT WORKFLOW

Each execution follows these steps:

### Step 1 — Read

Read all required project files.

### Step 2 — Inspect

Inspect production progress and existing chapters.

### Step 3 — Select

Identify the next unfinished curriculum unit.

### Step 4 — Prepare

Review grammar topics, vocabulary themes, prerequisites, and previous story developments.

### Step 5 — Generate

Create the COMPLETE educational content.

### Step 6 — Integrate

Make all nine sections accessible through the website.

### Step 7 — Validate content

Check completeness, German accuracy, exercises, and examination.

### Step 8 — Validate interface

Check navigation, highlighting, typography, layout, and interactions.

### Step 9 — Document

Create the completion report.

### Step 10 — Update progress

Mark the unit complete only if validation succeeds.

### Step 11 — Stop

Do not continue to the next unit.

---

# 26. SPECIAL RULE FOR INTERRUPTED WORK

If you encounter a previously unfinished chapter:

- Preserve valid existing content.
- Identify missing sections.
- Finish those sections.
- Correct broken exercises.
- Complete the examination.
- Add missing solutions.
- Validate.
- Update progress.
- Stop.

Never skip to the next chapter while the current one is unfinished.

Never delete valid content merely to restart generation.

---

# 27. DEFINITION OF DONE

A learning chapter is complete only when the student can:

1. Open the chapter.
2. Navigate all nine sections.
3. Read complete German texts.
4. Answer comprehension questions.
5. Study useful vocabulary.
6. Understand all assigned grammar rules.
7. Review examples and tables.
8. Complete interactive practice exercises.
9. Perform practical activities.
10. Review the summary.
11. Take the complete examination.
12. Review corrections.
13. Read model writing answers.
14. Save learning progress.

All functionality must work within the established website.

---

# 28. FINAL INSTRUCTION

Start immediately when this file is invoked.

Do not ask for confirmation.

Do not regenerate the infrastructure.

Do not redesign the application.

Do not create placeholder educational content.

**Generate one complete, substantial, academically accurate chapter or scheduled assessment.**

Make the content interesting and enjoyable to study.

Follow the existing design system.

Validate the actual educational material.

Write the completion report only after finishing the content.

Update the progress manifest only after successful validation.

Then STOP.

The user will invoke `chapterwork.md` again to continue with the next unit.


# MANDATORY LANGUAGE POLICY — GERMAN-FIRST LEARNING

## CRITICAL REQUIREMENT

This is a German-language learning platform.

**German must be the primary language of every generated chapter, exercise, reading activity, examination, and student-facing interaction.**

English is a supporting language, not the main teaching language.

This requirement overrides any older instruction in this document that suggests writing all explanations in English or using English for ordinary learning activities.

## 1. Content that MUST be in German

Always write the following in German:

- Chapter titles.
- Section headings.
- Learning objectives.
- Reading texts.
- Stories and dialogues.
- Reading comprehension questions.
- Multiple-choice questions and options.
- True/false statements.
- Exercise instructions.
- Grammar practice questions.
- Vocabulary practice questions.
- Sentence construction tasks.
- Translation exercise instructions.
- Dialogue completion tasks.
- Writing assignments.
- Speaking prompts.
- Practical activities.
- Examination questions and instructions.
- Self-assessment checklists.
- Correct/incorrect feedback.
- Navigation and student-facing interface labels.

Never generate English reading comprehension questions.

Never generate English examination questions except when English is explicitly the source language of a translation exercise.

Never write instructions such as "Choose the correct answer" or "Complete the sentence".

Use natural German equivalents.

## 2. Allowed English

English may appear only for a clear educational purpose.

### Grammar explanations

Use German grammar terminology.

Explain rules primarily with clear, accessible language.

At A1, brief English explanations are permitted when they help beginners understand difficult grammatical concepts.

At A2, increase the proportion of German explanations while retaining occasional English clarification.

At B1, prefer German explanations, with English reserved for genuinely difficult distinctions.

### Vocabulary translations

English translations are allowed in vocabulary tables and glossaries.

### Translation exercises

English source sentences are allowed when the student is explicitly asked to translate them into German.

For example:

**Übersetze die folgenden Sätze ins Deutsche.**

1. I work in Berlin.
2. She has a brother.
3. We are learning German.

The instructions remain in German.

### Difficult concepts

A short English clarification may be provided when necessary.

However, avoid unnecessary bilingual repetition.

## 3. German difficulty must match the student's level

### A1

Use simple, short German instructions.

Examples:

- Lies den Text.
- Beantworte die Fragen.
- Was ist richtig?
- Wähle die richtige Antwort.
- Ergänze die Sätze.
- Schreibe drei Sätze.
- Ordne die Wörter.
- Finde den Fehler.

### A2

Use natural German instructions with slightly greater complexity.

Examples:

- Lies den Text und beantworte die Fragen.
- Ergänze die Sätze mit der richtigen Verbform.
- Verbinde die Sätze mit der passenden Konjunktion.
- Schreibe eine kurze E-Mail.
- Begründe deine Antwort.

### B1

Use more detailed German instructions.

Examples:

- Lies den Text aufmerksam und beantworte die folgenden Fragen.
- Formuliere die Sätze um, ohne ihre Bedeutung zu verändern.
- Erkläre deine Meinung und begründe sie mit passenden Beispielen.
- Vergleiche die beiden Situationen.
- Schreibe einen zusammenhängenden Text.

Do not use grammar or vocabulary in instructions that is unnecessarily advanced for the student's level.

When a new instructional word is important, explain it briefly in German or add a small optional English translation.

## 4. German-first chapter structure

Every chapter must follow this rule:

### 01. Einstieg
German objectives, German introduction, German discovery questions.

### 02. Lesen & Verstehen
German texts and German comprehension questions.

### 03. Wortschatz
German vocabulary, German examples, English translations where useful.

### 04. Grammatik
German grammar names, German examples, clear explanations with limited English support when necessary.

### 05. Übungen & Aktivitäten
German exercise instructions and questions.

### 06. Sprache im Alltag
German dialogues, German scenarios, German writing and speaking activities.

### 07. Zusammenfassung
German summaries and learning checklists, with English clarification only when helpful.

### 08. Kapitelprüfung
German examination instructions, texts, questions, and writing tasks.

### 09. Lösungen & Lernkontrolle
German answers and feedback. English may clarify particularly difficult grammatical reasoning.

## 5. No unnecessary language mixing

Avoid paragraphs that constantly alternate between German and English.

Do not write an English sentence immediately after every German sentence.

Do not include English headings next to every German heading.

Prefer one consistent German learning experience.

Use English strategically, not automatically.

## 6. Interface consistency

When generating new chapters, verify the shared interface uses German labels.

Examples:

- Weiter
- Zurück
- Antwort prüfen
- Lösung anzeigen
- Erneut versuchen
- Richtig
- Falsch
- Prüfung abgeben
- Lernfortschritt
- Abgeschlossen

Do not add new English UI strings.

Do not modify existing styling unnecessarily.

## 7. Mandatory language validation

Before marking any chapter complete:

1. Inspect all nine chapter sections.
2. Check that all reading texts are in German.
3. Check that all comprehension questions are in German.
4. Check that all exercise instructions are in German.
5. Check that all examination questions are in German.
6. Check that writing assignments are in German.
7. Confirm English appears only where educationally justified.
8. Confirm German instructions match the student's level.
9. Verify answer keys remain correct.
10. Verify interactive exercises still function.

Search generated content for accidental English instructions.

Do not blindly remove legitimate English vocabulary translations or English source sentences in translation exercises.

## 8. Completion requirement

**A chapter containing unnecessary English questions, exercise instructions, or examination content MUST NOT be marked completed.**

Correct the language before writing the completion report or updating the progress manifest.

This language policy applies to:

- Chapter 01.
- All future chapters.
- Cumulative examinations.
- A1, A2, and B1 final examinations.

**German first. English only when genuinely useful for understanding.**