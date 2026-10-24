# DEUTSCH A1–B1 — OFFICIAL DESIGN SYSTEM

## 1. PURPOSE

This document defines the permanent visual identity and UI/UX requirements for the German A1–B1 learning website.

You MUST read and follow this file:

- When creating the website.
- When creating a chapter.
- When adding an educational component.
- When modifying navigation.
- When designing exercises.
- When implementing examinations.
- When modifying CSS.

All new components must follow the existing design system.

Do not introduce inconsistent styles when adding new chapters.

---

# 2. VISUAL IDENTITY

## Inspiration

The visual design should be inspired by the provided dark software-company reference image.

Important characteristics:

- Near-black backgrounds.
- Deep green accents.
- Bold, confident typography.
- High contrast.
- Spacious arrangements.
- Strong visual hierarchy.
- Minimal decorative elements.
- Refined, modern appearance.

However, this is an EDUCATIONAL APPLICATION, not a marketing website.

Do not reproduce the landing-page layout.

Do not create promotional sections, statistics panels, or decorative feature grids.

Instead, adapt the reference's visual language to a serious, beautiful, comfortable reading experience.

The result should feel like a premium German learning application.

## Design personality

Modern, clean, sophisticated, comfortable, focused, distinctive.

Avoid:

- Generic dashboards.
- GitHub copies.
- Cheap-looking educational websites.
- Overdecorated interfaces.
- Excessive rounded cards.
- Unnecessary animations.
- Tiny typography.
- Large empty areas.
- Excessive borders.
- Glow effects.

---

# 3. COLOR SYSTEM

Use a near-black theme as the default.

Suggested colors:

```css
:root {
  --bg-app: #080B09;
  --bg-sidebar: #0D120F;
  --bg-content: #101612;
  --bg-elevated: #172019;
  --bg-hover: #1C2920;

  --text-primary: #F5F7F5;
  --text-secondary: #BCC8BE;
  --text-muted: #89978D;

  --accent-primary: #38B765;
  --accent-hover: #4BCD79;
  --accent-dark: #174C2A;

  --border-color: #263329;
  --border-subtle: #1B261E;

  --success: #38B765;
  --warning: #E5AD52;
  --error: #E16B6B;
  --info: #75A9E8;
}
```

These values are starting points.

You may refine them to improve contrast and visual quality.

## Color rules

Green is the primary brand accent.

Use green for:

- Active navigation.
- Important actions.
- Learning progress.
- Selected items.
- Positive feedback.

Do not make everything green.

Main reading text should be near-white.

Secondary information should use softer gray tones.

Use colors to communicate hierarchy, not decoration.

Never place low-contrast green text on a similar green background.

---

# 4. TYPOGRAPHY — CRITICAL

The primary font MUST be Ubuntu.

Load Ubuntu properly.

Use:

```css
font-family: "Ubuntu", sans-serif;
```

Prefer local font files or a reliable font CDN with appropriate fallbacks.

## Typography scale

| Component | Preferred size |
|---|---|
| Main reading text | 20px |
| Grammar explanations | 19px |
| General content | 18px |
| Exercise questions | 19px |
| Exercise answers | 18px |
| Vocabulary tables | 17–18px |
| Sidebar chapter names | 16px |
| Sidebar section names | 15px |
| Small secondary labels | 14px |
| Section headings | 28px |
| Chapter headings | 38px |
| Main page title | 40px |

## Reading comfort

Use generous line height:

- Reading texts: 1.8.
- Grammar explanations: 1.7.
- General content: 1.6.

Maintain comfortable paragraph spacing.

Do not compress text.

Do not use small fonts to fit more information on the screen.

**The student must be able to study comfortably for long sessions.**

Never reduce reading text below 18px on desktop.

---

# 5. APPLICATION LAYOUT — EXACTLY TWO COLUMNS

The desktop application must have only TWO main layout columns:

1. Left sidebar.
2. Main content area.

Absolutely no permanent third column.

No right-side documentation navigation panel.

No three-column dashboard structure.

Suggested layout:

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO   DEUTSCH A1–B1           Search      Theme     Progress│
├──────────────────┬───────────────────────────────────────────┤
│                  │                                           │
│  SIDEBAR         │ MAIN CONTENT                              │
│                  │                                           │
│  A1              │ Chapter Title                             │
│   Chapter 01     │                                           │
│    Introduction  │ Reading Text                              │
│    Reading       │                                           │
│    Vocabulary    │ Grammar                                   │
│    Grammar       │                                           │
│    Exercises     │ Exercises                                 │
│    Examination   │                                           │
│                  │                                           │
│  A2              │                                           │
│                  │                                           │
│  B1              │                                           │
│                  │                                           │
├──────────────────┴───────────────────────────────────────────┤
│                  Previous              Next                  │
└──────────────────────────────────────────────────────────────┘
```

The header spans the interface.

Below the header, only the sidebar and content area exist.

## Sidebar dimensions

Suggested desktop width:

260–290px.

The sidebar must be collapsible.

When collapsed:

- Hide it completely.
- Let the content area expand.
- Keep the sidebar-toggle button visible.
- Do not leave an empty sidebar column.
- Remember the collapsed state.

When expanded:

- Restore its previous width.
- Restore chapter navigation.
- Preserve the active section.

## Sidebar behavior

Required:

- Level groups: A1, A2, B1.
- Chapter lists.
- Section lists.
- Expand/collapse chapters.
- Active-section highlighting.
- Progress indicators.
- Smooth scrolling.
- Independent sidebar scrolling.
- Persistent collapse state.

The sidebar should feel carefully designed, not like a standard HTML list.

Use subtle indentation and clear hierarchy.

Avoid excessively large vertical gaps.

## Main content

The content area should use the available width.

However, very long paragraphs should remain comfortable to read.

Use a readable inner content container, approximately 900–1050px, centered within the available space.

When the sidebar collapses, the main layout expands, while text maintains a comfortable reading width.

Tables and exercise components may use additional available width when useful.

---

# 6. TOP HEADER

Create a compact professional header.

Include:

- Small logo.
- Website title: Deutsch A1–B1.
- Sidebar toggle.
- Current chapter or breadcrumb.
- Search control.
- Theme toggle.
- Progress access.

Use consistent alignment.

Suggested height: 64–72px.

Avoid excessive header height.

Do not use marketing-style navigation such as HOME, SERVICES, ABOUT, CONTACT.

This is a learning application.

---

# 7. CHAPTER PRESENTATION

Each chapter should start with an attractive but restrained introduction.

Include:

- Chapter number.
- German chapter title.
- English subtitle.
- Level badge.
- Main learning objectives.
- Grammar subjects.

The chapter introduction should feel like opening a beautifully designed educational book.

Do not use a massive homepage-style hero.

A compact, elegant chapter header is sufficient.

---

# 8. SECTION PRESENTATION

Every major chapter section should have:

- Clear section number.
- German section title.
- Short English description.
- Visually distinct heading.
- Comfortable spacing.

Example:

**04 — GRAMMATIK**

Large heading:

**Der Akkusativ**

Supporting subtitle:

*Understanding direct objects in German.*

Use subtle green details or small decorative accents.

Do not overdecorate.

---

# 9. READING TEXT DESIGN

Reading is a primary activity.

The reading area must be exceptionally comfortable.

Requirements:

- Ubuntu font, approximately 20px.
- Generous line height.
- Clear paragraphs.
- Comfortable text width.
- Strong contrast.
- Minimal visual distractions.

Reading passages may use a slightly different surface from the surrounding interface.

Example:

Dark charcoal background with subtle border.

## Dialogues

Clearly distinguish speakers.

Speaker names may use a muted green accent.

Example:

**Houssem:** Guten Morgen, Tassnim. Hast du heute Zeit?

**Tassnim:** Ja, nach der Arbeit habe ich Zeit.

Do not put every dialogue line inside a separate card.

Keep dialogues natural and easy to follow.

---

# 10. GRAMMAR HIGHLIGHTING

Use carefully chosen colors to identify grammatical structures.

Suggested categories:

| Grammar | Color |
|---|---|
| Nominativ | `#77B7FA` |
| Akkusativ | `#F0A56B` |
| Dativ | `#C5A0F5` |
| Genitiv | `#7CD6A0` |
| Verbs | `#79CBD1` |
| Modal verbs | `#E9C86A` |
| Conjunctions | `#E999BC` |
| Prepositions | `#8ED8B6` |

Use a combination of text color, subtle underlines, and accessible explanations.

Do not use large bright background blocks behind every word.

Highlight only meaningful grammatical structures.

## Interaction

Allow the student to:

- Turn highlighting on or off.
- Select grammatical categories.
- Click highlighted phrases.
- Read short explanations.

Tooltips must work on desktop and mobile.

Do not rely exclusively on color to communicate meaning.

---

# 11. GRAMMAR EXPLANATION DESIGN

Create distinctive reusable educational components.

## Rule blocks

A rule block should contain:

- Rule title.
- Explanation.
- Structure.
- Examples.
- Exceptions.
- Common mistakes.
- Mini-exercises.

Use clear hierarchy.

Do not place every sentence in a separate card.

## Tables

Tables should be:

- Clean.
- Readable.
- Spacious.
- Responsive.
- Correctly aligned.

Use subtle row separators.

Avoid thick borders around every cell.

## Examples

Differentiate examples from explanations.

Use subtle accents or a thin vertical marker.

## Important notes

Use restrained callout styles.

Suggested types:

- Important.
- Tip.
- Warning.
- Common mistake.
- Remember.

Keep the design consistent.

---

# 12. VOCABULARY PRESENTATION

Vocabulary tables should be highly readable.

Use:

- Clear column headings.
- Spacious rows.
- Consistent text alignment.
- Appropriate highlighting.
- Responsive layout.

Allow students to hide/show translations.

Avoid overly compact spreadsheet-like tables.

Vocabulary flashcards, when present, should use the same design language.

---

# 13. EXERCISE DESIGN

Exercise questions must be easy to identify and complete.

Use:

- Clear question numbering.
- Readable answer options.
- Large enough input fields.
- Comfortable button sizes.
- Clear feedback.
- Consistent spacing.

Use soft backgrounds to distinguish exercises from explanations.

Correct answers may use green feedback.

Incorrect answers should use muted red feedback.

Do not use aggressive full-screen color changes.

---

# 14. EXAMINATION DESIGN

The examination page should be focused and distraction-free.

Include:

- Examination title.
- Total points.
- Instructions.
- Question groups.
- Progress indication.
- Submit button.
- Results and corrections.

Maintain the same general application layout.

Do not create a separate unrelated exam interface.

The sidebar may be hidden during focused examination mode, but the user must be able to restore it.

---

# 15. BUTTONS & INTERACTIVE COMPONENTS

Use a small set of consistent button styles.

## Primary

Green background with dark readable text.

## Secondary

Dark elevated background with subtle border.

## Text buttons

Minimal background with clear hover feedback.

## Destructive actions

Muted red styling.

Button text must never be cropped.

Use adequate horizontal and vertical padding.

Avoid oversized pill-shaped buttons.

Use moderate corner radii.

---

# 16. LIGHT THEME

Implement an optional light theme.

Suggested direction:

- Soft off-white background.
- Near-white reading surface.
- Deep charcoal text.
- Deep green accents.
- Subtle neutral borders.

Preserve the same layout and typography.

Store the selected theme locally.

The default theme remains dark.

---

# 17. RESPONSIVE DESIGN

On desktop:

- Two-column layout.
- Sidebar visible by default.
- Main content fills the remaining space.

On tablet:

- Sidebar can collapse.
- Content remains comfortable.

On mobile:

- Sidebar opens as a drawer.
- Main content uses available width.
- Reading text remains large.
- Tables scroll horizontally when needed.
- Navigation controls remain accessible.

Never create horizontal page overflow.

---

# 18. ACCESSIBILITY

Implement:

- Semantic HTML.
- Keyboard navigation.
- Visible focus indicators.
- Accessible button labels.
- Proper text contrast.
- Responsive text.
- Reduced-motion support.
- Accessible form controls.

Avoid animations that distract from studying.

---

# 19. DESIGN VALIDATION

After adding or modifying a chapter, verify:

1. Ubuntu font is loaded.
2. Reading text is sufficiently large.
3. Sidebar navigation remains usable.
4. The layout contains exactly two main columns.
5. Sidebar collapse and expansion work.
6. No permanent right-side navigation exists.
7. Grammar tables are readable.
8. Grammar highlighting is visually clear.
9. Exercises are comfortable to use.
10. Buttons are not cropped.
11. No unwanted horizontal overflow exists.
12. Mobile layout remains functional.
13. Existing chapter styling remains consistent.

If a new component looks inconsistent, fix it before declaring the chapter complete.

---

# 20. FINAL DESIGN PRINCIPLE

The website must feel like a beautifully designed interactive German textbook with the visual confidence of a modern premium software product.

It must be comfortable, sophisticated, distinctive, and practical.

**Dark charcoal + refined green + Ubuntu + excellent readability + two-column navigation.**

Never sacrifice reading comfort for decoration.