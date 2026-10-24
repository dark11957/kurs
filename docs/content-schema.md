# Chapter content schema

Production chapter files are plain JavaScript scripts under `content/{a1,a2,b1}/chapter-NN.js`. Each script registers its chapter object as `window.CHAPTERS[chapterId]`. To make one available, add its ID and project-relative script path to `window.CHAPTER_CONTENT` in `content/curriculum.js` (for example, `'chapter-01': 'content/a1/chapter-01.js'`). The loader adds that script only when the student selects the chapter. This keeps direct `file://` use working without a server. The development fixture is intentionally not in that registry.

## Shape

```js
window.CHAPTERS['chapter-01'] = {
  id: 'chapter-01',
  metadata: {
    number: '01', level: 'A1', title: 'German title', subtitle: 'English subtitle',
    objectives: [], prerequisites: [], grammarReferences: [1, 2]
  },
  sections: [
    { id: 'introduction', title: 'Introduction', objectives: [], prerequisites: [], openingText: '', discoveryQuestions: [] },
    { id: 'reading', title: 'Reading', texts: [], comprehension: [], annotations: [] },
    { id: 'vocabulary', title: 'Vocabulary', vocabulary: [], expressions: [], wordFamilies: [], exercises: [] },
    { id: 'grammar', title: 'Grammar', rules: [], tables: [], comparisons: [], exercises: [] },
    { id: 'exercises', title: 'Exercises', exercises: [] },
    { id: 'practical-communication', title: 'Practical communication', dialogue: [], prompts: [], guidedWriting: '' },
    { id: 'summary', title: 'Summary', summary: [], checklist: [] },
    { id: 'examination', title: 'Examination', exam: {} },
    { id: 'solutions', title: 'Solutions', answers: [], modelAnswers: [] }
  ]
};
```

## Reusable content records

- Reading text: `{ id, title, format: 'paragraph'|'dialogue'|'email'|'article', text?, lines?, comprehension? }`. A dialogue line is `{ speaker, text }`.
- Grammar annotation: `{ text, marks: [{ start, end, category, explanation }] }`. Offsets are zero-based UTF-16 string offsets; categories include `nominative`, `accusative`, `dative`, and `verb`. Authors provide verified spans; the renderer does not infer grammar.
- Vocabulary: `{ id, word, translation, category, article?, plural?, forms?, example, notes? }`.
- Grammar rule: `{ id, title, explanation, formula?, examples: [], exceptions?, mistakes?, tip? }`.
- Table: `{ caption, columns: string[], rows: string[][] }`.
- Exercise: `{ id, type, prompt, options?, answer, points, explanation?, reference?, modelAnswer? }`. Supported types: `multiple-choice`, `true-false`, `fill-blank`, `written`. Stable IDs are required. Objective `answer` is the option index for multiple choice, a boolean-like string for true/false, and normalized text for fill-in.
- Examination: `{ id, title, totalPoints: 100, distribution: { reading: 20, vocabulary: 15, grammar: 35, sentenceConstruction: 10, writing: 20 }, questions: Exercise[] }`. Written questions require `modelAnswer` and are manually assessed. Do not include solutions in student-facing UI before submission.
- Solution records: `{ exerciseId, answer, explanation?, modelAnswer?, assessmentCriteria? }`.

The renderer accepts nested text, tables, rules, exercises, communication prompts, summaries, and an exam on each section. Extend this shared contract rather than inventing chapter-specific structures. Content should stay self-contained per chapter; the runtime loads only the selected chapter script.

## Student progress

Progress is stored separately in browser LocalStorage under `deutsch-a1-b1:student-progress`, with `current`, `completedActivities`, `exercises`, `exams`, `drafts`, and `lastVisited`. Content-production status belongs only in `progress/chapters.json`.
