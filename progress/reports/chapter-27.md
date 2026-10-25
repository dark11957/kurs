# Kapitel 27 — Abschlussbericht

## Kapitel und Status

- **Titel:** Wortbildung, Nominalisierung und Partizipien
- **Niveau:** B1
- **Status:** Nach Inhalts-, Schema- und Renderprüfung abgeschlossen
- **Inhaltsmodul:** `content/b1/chapter-27.js`

## Grammatikthemen

Zwölf vollständige Regelblöcke behandeln Nomenbildung und häufige Nomensuffixe, Personenbezeichnungen und Verkleinerungsformen, Adjektivbildung und Adjektivsuffixe, Verb- und Adjektivnominalisierung, Partizip I und II als Adjektive, zusammengesetzte Adjektive, Wortfamilien und Wortbildung, Adjektive mit Präpositionen und Ergänzungen sowie formelle und alltägliche Ausdrucksweisen. Die Regeln enthalten Erklärungen, Strukturen, Beispiele, Besonderheiten, typische Fehler, Merktipps und jeweils drei Miniübungen. Vergleiche und Tabellen unterstützen die Wahl der passenden Form.

Die Originalreferenzen **13–15, 501–509 und 664–692** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg umfasst 192 Wörter und führt Houssem und Tassnim bei der Vorbereitung einer Präsentation über einen Lernworkshop ein.
- Zwei eigenständige B1-Lerntexte: eine Geschichte zur gemeinsamen Präsentationsvorbereitung (290 Wörter) und eine E-Mail an Frau Berger (250 Wörter). Verständnisfragen, Sprachbeobachtung und fünf präzise Grammatikmarkierungen sind enthalten.
- **30 Vokabeleinträge** zu beruflicher Kommunikation, Beschreibungen, abstrakten Begriffen und Bildung. Nomen enthalten Artikel und Plural; Verben enthalten relevante Formen und alle Einträge Beispielsätze.
- Redemittel, Wortfamilien, Synonyme und Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Sammlung.
- Übungen decken Erkennen, Ergänzen, Umformen, Satzbau, Übersetzen, Fehlerkorrektur, Dialog, kreative Anwendung und gemischte Grammatik ab.
- Alltagsteil mit vollständigem Dialog, Redemitteln, Situationsaufgabe, Schreibtraining, Sprechtraining und Mini-Projekt.
- **92 eindeutig identifizierte Aufgaben insgesamt**. Jede Aufgabe hat eine Lösung, Musterantwort oder passende Bewertungsanleitung.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (207 und 179 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen:** Lesen, Wortschatz, Grammatik, Satzbau sowie drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 66, 83 und 101 Wörter und erfüllen die Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Freie Schreibaufgaben werden nicht automatisch bewertet; sie enthalten Mustertexte und Bewertungshinweise.

## Integration und Validierung

- Kapitel 27 ist in `content/curriculum.js` registriert und wird über `content/b1/chapter-27.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Alle fünf Annotationen wurden gerendert; `StudyExams.validateExam` meldete keine Fehler.
- Die Kapitelprüfungen validieren Referenzen, Textlängen, Vokabeleinträge, zwölf vollständige Regelblöcke, eindeutige Aufgaben-IDs, vollständige Lösungsschlüssel, Prüfungstexte, Schreibwortzahlen und Punktverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **35 Tests**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-27.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-27-Inhalts-, Schema-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 27 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-27.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 27.

## Nächste offene geplante Einheit

**Cumulative Test B1.1 — Chapters 21–23** bleibt im Manifest offen. Auch **Cumulative Test B1.2 — Chapters 24–26** ist laut Curriculum fällig. Diese Ausführung erstellt ausschließlich Kapitel 27 und ändert keine Prüfung.
