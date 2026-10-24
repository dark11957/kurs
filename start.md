# DEUTSCH A1–B1 — WEBSITE INITIALIZATION
## Execute This File Only Once

# 1. YOUR MISSION

You are a senior frontend developer and UI/UX designer.

Your task is to create the complete technical foundation of an interactive German-learning website.

This execution is dedicated to:

- Website infrastructure.
- Visual design.
- Layout.
- Navigation.
- Reusable educational components.
- Exercise functionality.
- Examination functionality.
- Learning progress storage.
- Chapter content loading.

**Do not generate Chapter 01 during this execution.**

Chapter generation is handled separately by `chapterwork.md`.

Your job is to prepare a beautiful, functional website capable of displaying the complete educational content that will be generated later.

---

# 2. READ THE PROJECT DOCUMENTS

The workspace initially contains:

```text
B1Study/
├── chapters.md
├── chapterstructure.md
├── studycontent.md
├── styling.md
├── start.md
└── chapterwork.md
```

Before implementing anything, read:

1. `styling.md`
2. `chapters.md`
3. `chapterstructure.md`
4. `studycontent.md`
5. `chapterwork.md`

Understand the curriculum, chapter structure, educational components, and content requirements.

If the workspace contains no website implementation, this is expected.

Create it from scratch.

Do not modify the six instruction/reference files.

---

# 3. DESIGN AUTHORITY

`styling.md` is the authoritative design specification.

Follow it completely.

In particular:

- Ubuntu font.
- Dark charcoal/black appearance.
- Refined green accents.
- Large, comfortable reading typography.
- Exactly two main layout columns.
- Collapsible sidebar.
- Elegant educational components.
- No permanent right sidebar.
- No GitHub-inspired interface.
- No generic dashboard styling.
- No marketing-style homepage.

Create an original, polished interface.

---

# 4. TECHNOLOGY

Use:

- HTML5.
- CSS3.
- Vanilla JavaScript.
- Plain JavaScript files loaded with regular `<script>` tags so both `index.html` and `learn.html` work when opened directly.
- Structured JavaScript or JSON chapter data.
- LocalStorage for learning progress.

Avoid unnecessary dependencies.

Do not require a local development server for normal use. Double-clicking `index.html` opens the learning journal; `learn.html` opens the chapter learning interface.

Keep the implementation clean and maintainable.

---

# 5. BUILD THE APPLICATION SHELL

Create a functional website with:

## Header

- Project identity.
- Sidebar toggle.
- Current chapter indicator.
- Search.
- Theme toggle.
- Learning progress.

## Sidebar

Display the full curriculum from `chapters.md`.

Requirements:

- A1/A2/B1 grouping.
- Chapter names.
- Expand/collapse behavior.
- Nested chapter sections.
- Active-state highlighting.
- Available/unavailable chapter indicators.
- Independent scrolling.
- Persistent collapsed state.

Do not hardcode fabricated chapter names.

Use the actual curriculum.

## Main content

Create a flexible learning-content area.

When no chapter exists, display a beautiful but simple empty state:

**Deutsch A1–B1**

*Your German learning journey begins here.*

Show the available curriculum and indicate that study material has not yet been generated.

This is the only place where temporary empty-state content is appropriate.

Do not create fake lessons or pretend Chapter 01 is already available.

## Navigation

Implement:

- Chapter selection.
- Section selection.
- Previous/Next section navigation.
- Browser Back/Forward support.
- Persistent current location.
- Active navigation highlighting.
- Direct links to chapter sections.

Use a stable URL strategy such as hash-based routing.

---

# 6. REUSABLE EDUCATIONAL COMPONENTS

The website must be ready to display the nine mandatory chapter sections.

Implement reusable rendering components for:

## Introduction

- Chapter header.
- Learning objectives.
- Prerequisites.
- Opening text.
- Discovery questions.

## Reading

- Story text.
- Dialogue.
- Email.
- Article.
- Comprehension questions.
- Grammar annotations.

## Vocabulary

- Vocabulary table.
- Useful expressions.
- Word families.
- Synonyms and antonyms.
- Vocabulary exercises.

## Grammar

- Rule explanations.
- Grammar formulas.
- Conjugation tables.
- Declension tables.
- Examples.
- Comparisons.
- Important notes.
- Common mistakes.
- Memory tips.
- Mini-exercises.

## Exercises

- Multiple choice.
- True/false.
- Fill-in-the-blank.
- Matching.
- Sentence ordering.
- Sentence transformation.
- Translation.
- Dialogue completion.
- Free writing.

## Practical communication

- Dialogues.
- Communication expressions.
- Scenario activities.
- Guided writing.
- Speaking prompts.

## Summary

- Grammar review.
- Vocabulary summary.
- Important mistakes.
- Self-assessment checklist.

## Examination

- Reading comprehension.
- Vocabulary.
- Grammar.
- Sentence construction.
- Writing.
- Submission.
- Results.

## Solutions

- Answer keys.
- Explanations.
- Model answers.
- Mistake review.

---

# 7. CONTENT DATA CONTRACT

Before writing rendering components, define a clear, reusable chapter data schema.

The schema must support:

- Chapter metadata.
- The nine chapter sections.
- Nested educational content.
- Reading texts.
- Grammar annotations.
- Vocabulary entries.
- Exercise questions.
- Answer validation.
- Point allocation.
- Examination questions.
- Solutions.
- Original grammar reference numbers.

Create a small schema specification in:

`docs/content-schema.md`

Do not create a complicated database-like architecture.

Prefer one structured content module per chapter.

Example future location:

`content/a1/chapter-01.js`

The website must dynamically load the selected chapter.

It must not load all 30 chapters at once.

---

# 8. IMPORTANT: TEST THE WEBSITE WITH A SEPARATE FIXTURE

You need representative educational content to verify that the UI works.

Create a small development-only test fixture containing:

- A short sample paragraph.
- A dialogue.
- A vocabulary table.
- A grammar table.
- One grammar rule.
- A multiple-choice question.
- A fill-in-the-blank exercise.
- A small example examination.

Place this under a clearly named development directory such as:

`tests/fixtures/demo-chapter.js`

This fixture is for testing components only.

It must NOT:

- Be identified as Chapter 01.
- Appear as a completed curriculum chapter.
- Be included in production progress.
- Contain the final learning content.
- Be treated as evidence that Chapter 01 is finished.

Use it to validate layout and functionality.

The real Chapter 01 will be generated during the first execution of `chapterwork.md`.

---

# 9. EXERCISE ENGINE

Implement working exercise interactions.

Objective questions must support:

- User input.
- Answer checking.
- Correct/incorrect feedback.
- Retrying.
- Answer revealing.
- Explanations.
- Progress tracking.

For written responses:

- Provide a comfortable editor.
- Save drafts locally.
- Allow comparison with model answers.
- Do not fabricate automatic grammar evaluation.

Use stable question IDs.

Do not identify exercises only by their position on the page.

---

# 10. EXAMINATION ENGINE

Implement a reusable examination system supporting 100-point chapter examinations.

Required distribution:

- Reading: 20.
- Vocabulary: 15.
- Grammar: 35.
- Sentence construction: 10.
- Writing: 20.

The engine must support:

- Objective questions.
- Written responses.
- Saved answers.
- Submission.
- Results.
- Review.
- Manual writing assessment.

Do not reveal examination answers before submission.

Do not falsely grade unrestricted writing.

Only calculate a final 100-point score after manually assessed components have scores.

---

# 11. GRAMMAR HIGHLIGHTING

Implement grammar highlighting according to `styling.md`.

Requirements:

- Semantic annotations.
- Category-based coloring.
- Enable/disable controls.
- Clickable explanations.
- Keyboard accessibility.
- Mobile compatibility.

Do not attempt to analyze arbitrary German sentences with unreliable regular expressions.

Chapter authors will provide verified annotations in the content data.

The renderer must support those annotations.

---

# 12. STUDENT PROGRESS

Use LocalStorage to track:

- Current chapter.
- Current section.
- Completed activities.
- Completed chapters.
- Exercise attempts.
- Examination progress.
- Examination scores.
- Writing drafts.
- Last visited location.

Keep all learning progress under the `deutsch-a1-b1:student-progress` key. Progress backups may export and restore that learning record only; theme, sidebar, and unrelated browser settings remain separate.

This is student learning progress.

It must remain separate from the content-generation progress used by Codex.

---

# 13. PROJECT ORGANIZATION

Create a simple maintainable structure.

Suggested:

```text
B1Study/
│
├── index.html
├── learn.html
├── package.json
│
├── css/
│   ├── tokens.css
│   ├── layout.css
│   ├── components.css
│   └── learning.css
│
├── js/
│   ├── app.js
│   ├── router.js
│   ├── navigation.js
│   ├── renderer.js
│   ├── exercises.js
│   ├── exams.js
│   ├── highlighting.js
│   └── storage.js
│
├── content/
│   ├── curriculum.js
│   ├── a1/
│   ├── a2/
│   └── b1/
│
├── docs/
│   └── content-schema.md
│
├── tests/
│   └── fixtures/
│       └── demo-chapter.js
│
├── progress/
│   ├── chapters.json
│   └── reports/
│
└── README.md
```

You may adjust the structure if it improves maintainability.

Do not create 30 empty chapter files.

Do not create empty grammar content and mark it complete.

---

# 14. CONTENT PRODUCTION MANIFEST

Create:

`progress/chapters.json`

This tracks the progress of chapter generation.

Initialize all curriculum units as pending.

Example:

```json
{
  "schemaVersion": 1,
  "chapters": {
    "01": {
      "status": "pending",
      "contentFile": null,
      "report": null
    },
    "02": {
      "status": "pending",
      "contentFile": null,
      "report": null
    }
  },
  "assessments": {}
}
```

Use the actual curriculum to populate all scheduled chapters and assessments.

Do not mark any chapter complete during infrastructure initialization.

---

# 15. SEARCH

Implement a simple search interface.

Initially, search should support:

- Chapter titles.
- Level names.
- Available chapter sections.

When study content is added, extend the search index to include grammar titles and vocabulary entries.

Do not implement a backend search service.

Search must not return nonexistent content as if it were available.

---

# 16. STYLING VALIDATION

Before finishing, check the application against `styling.md`.

Verify:

- Ubuntu typography.
- Near-black visual identity.
- Green accents.
- Large reading text.
- Exactly two main columns.
- Working sidebar toggle.
- No right-side table-of-contents column.
- Clean educational components.
- Responsive layout.
- Comfortable inputs.
- Proper table styling.

Test the components using the development fixture.

Inspect the rendered application if browser testing is available.

Do not claim visual testing if it was not performed.

---

# 17. FUNCTIONAL VALIDATION

Verify:

- Application loads.
- Sidebar opens and closes.
- Sidebar state persists.
- Navigation works.
- Theme selection persists.
- Sample reading content renders.
- Grammar highlighting works.
- Vocabulary tables render.
- Exercise answer checking works.
- Examination submission works.
- Student progress persists.
- Mobile navigation functions.

Fix errors before finishing.

---

# 18. INITIALIZATION COMPLETION

This execution is complete when:

1. The website launches successfully.
2. The design follows `styling.md`.
3. Navigation works.
4. The full curriculum appears in the sidebar.
5. Educational components exist.
6. The exercise engine works.
7. The examination engine works.
8. Grammar highlighting works.
9. Student progress can be saved.
10. The content schema is documented.
11. The production manifest exists.
12. Every real chapter is marked pending.
13. The application is ready to receive Chapter 01.

Do not generate Chapter 01.

Do not start Chapter 02.

Do not create chapter completion reports.

---

# 19. FINAL ACTION

When initialization is complete:

- Document how to start the website in `README.md`.
- Report the main files created.
- Report the functionality tested.
- Identify any unresolved limitations.
- State that Chapter 01 is the next content unit.

Then STOP.

The user will invoke `chapterwork.md` separately to generate the educational material.

**Your responsibility in this execution is to build the complete, beautiful, working application infrastructure—not the study content.**
