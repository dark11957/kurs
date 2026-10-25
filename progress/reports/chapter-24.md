# Kapitel 24 — Abschlussbericht

## Kapitel und Status

- **Titel:** Komplexer Satzbau und Wortstellung
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-24.js`

## Grammatikthemen

Elf ausführliche Regelblöcke behandeln Satzklammer, Vorfeld/Mittelfeld/Nachfeld, Verbposition in Haupt- und Nebensätzen, Pronomen- und Objektfolge, Position von **nicht/auch/nur**, Angabenreihenfolge und TEKAMOLO, Infinitivgruppen, mehrere Verben sowie Umstellung und Informationsfokus. Jeder Block enthält Erklärung, Struktur, mehrere Beispiele, Besonderheiten, Fehlerkorrektur, Merktipp und drei Miniübungen. Übersichtstabellen und Vergleiche stützen die Regeln.

Die Originalreferenzen **289–323 und 448–451** sind in den Metadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg führt über einen komplexen Vorfall im Arbeitsalltag in die Satzstruktur ein.
- Zwei eigenständige B1-Lerntexte: eine Erzählung über fehlende Testberichte (300 Wörter) und eine formelle E-Mail zu Supportübergaben (254 Wörter). Verständnisfragen, Grammatikmarkierungen und Textvergleich sind enthalten.
- Fünf Grammatikmarkierungen weisen auf passende Verb- und Satzstrukturen im ersten Lesetext hin.
- **30 Vokabeleinträge** zu Erklärungen, Support und formeller Kommunikation; Nomen enthalten Artikel und Plural, Verben ihre relevanten Formen und alle Einträge Beispielsätze.
- Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Sammlung.
- Übungen decken Erkennen, Ergänzen, Umformen, Satzbau, Übersetzen, Fehlerkorrektur, Dialog, kreative Formulierung und gemischte Anwendung ab.
- Alltagsteil mit vollständigem Dialog, Redemitteln, Übergabeszenario, Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **88 eindeutig identifizierte Aufgaben insgesamt**, einschließlich Prüfung; jede Aufgabe hat einen Lösungseintrag oder eine passende Musterantwort/Bewertungsanleitung.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (205 und 216 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 69, 93 und 116 Wörter und liegen in den Zielbereichen 60–80, 80–100 und 100–140 Wörter.
- Freie Schreibaufgaben werden nicht automatisch bewertet und enthalten Bewertungskriterien.

## Integration und Validierung

- Kapitel 24 ist in `content/curriculum.js` registriert und wird aus `content/b1/chapter-24.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Alle fünf Annotationen wurden gerendert; `StudyExams.validateExam` meldete keine Fehler.
- Inhaltsprüfungen validierten Referenzen, Textlängen, Vokabelangaben, Regelblöcke, eindeutige Aufgaben-IDs, vollständige Lösungsschlüssel, neue Prüfungstexte, Schreibwortzahlen und Punktverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **32 Prüfungen**. `node --check` war nicht verfügbar (Node.js ist in der Umgebung nicht installiert); das Kapitelmodul wurde stattdessen im GJS-Loader- und Renderer-Test ausgeführt. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-24.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Inhalts-, Schema-, Lösungs-, Integrations- und Prüfungsvalidierung für Kapitel 24.
- `progress/chapters.json` — Kapitel 24 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-24.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 24.

## Nächste offene geplante Einheit

Nach Kapitel 23 ist **Cumulative Test B1.1 — Chapters 21–23** eingeplant und weiterhin offen. Auch frühere geplante Prüfungen (**Cumulative Test A1.1**, **Cumulative Test A2.3** und die **A2-Finalprüfung**) sind im Manifest noch ausstehend. Diese Ausführung erstellt ausschließlich Kapitel 24; keine Prüfung wurde verändert.
