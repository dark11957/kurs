# Deutsch A1–B1

A lightweight German learning website built with HTML, CSS, and plain JavaScript. It runs directly from the folder; no server, Python, npm install, or build step is needed.

## Open the website

Double-click `index.html`, or choose **Open with Firefox**. Chapter 01 and its exercises are available from the curriculum sidebar. The app uses classic JavaScript scripts so the browser can load it from a `file://` address.

If the browser already has the old page open, close it and open `index.html` again after updating the files.

## Structure

- `index.html`, `css/`: application shell, responsive navigation, dark/light themes, and educational component styling.
- `js/`: plain JavaScript for navigation, rendering, storage, exercise/exam interactions, and grammar annotations.
- `content/curriculum.js`: curriculum names and sequence sourced from `chapters.md`.
- `content/a1/chapter-01.js`: Chapter 01 content, loaded as a classic script when selected.
- `docs/content-schema.md`: chapter content contract.
- `tests/fixtures/demo-chapter.js`: isolated component preview fixture.
- `progress/chapters.json`: content-production manifest.

## Checks

Run `python3 tests/smoke.py` if you want to check the files. Python is only needed for this optional check, not to open or use the website.
