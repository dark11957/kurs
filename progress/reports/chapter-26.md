# Kapitel 26 — Abschlussbericht

## Kapitel und Status

- **Titel:** Komplexe Konjunktionen und Argumentation
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-26.js`

## Grammatikthemen

Zwölf vollständige Regelblöcke behandeln zweiteilige Konjunktionen, **einerseits … andererseits**, **je … desto/umso**, **zwar … aber**, **nicht nur … sondern auch**, **weder … noch**, **sowohl … als auch**, Gegensatz und Einräumung, Ursache und Folge, argumentative Konnektoren, respektvollen Meinungsvergleich und logischen Aufbau von Argumenten. Jeder Block enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei thematisch passende Miniübungen. Tabellen und Vergleiche zeigen insbesondere die Verbposition nach **obwohl**, **trotzdem**, **weil**, **denn** und **deshalb**.

Die Originalreferenzen **392–426, 693–707 und 724–730** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg umfasst 171 Wörter und führt Houssem und Tassnim in eine respektvolle Diskussion über digitale und persönliche Lernangebote. Sie suchen eine Lösung, die verschiedene Bedürfnisse berücksichtigt.
- Zwei eigenständige B1-Lerntexte: eine Erzählung über ihre Entscheidung (296 Wörter) und ein Interview im Stadtteilmagazin (254 Wörter). Verständnisfragen, Textvergleich und fünf Grammatikmarkierungen sind enthalten.
- **30 Vokabeleinträge** zu Meinungen, Vor- und Nachteilen, Debatten und sozialen Fragen; Nomen enthalten Artikel und Plural, Verben relevante Formen und alle Einträge Beispielsätze.
- Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Sammlung.
- Übungen decken Erkennen, Ergänzen, Umformen, Satzbau, Übersetzen, Fehlerkorrektur, Dialog, eigene Argumente und gemischte Konnektoren ab.
- Alltagsteil mit vollständigem Dialog, Redemitteln, Diskussionsszenario, Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **92 eindeutig identifizierte Aufgaben insgesamt**, einschließlich Prüfung. Jede Aufgabe hat eine Lösung, Musterantwort oder passende Bewertungsanleitung.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (233 und 212 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 65, 85 und 110 Wörter und erfüllen die Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Freie Satzbau- und Schreibaufgaben werden nicht automatisch bewertet; sie enthalten Kriterien und Musterlösungen.

## Integration und Validierung

- Kapitel 26 ist in `content/curriculum.js` registriert und wird über `content/b1/chapter-26.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Alle fünf Annotationen wurden gerendert; `StudyExams.validateExam` meldete keine Fehler.
- Die Inhaltsprüfungen validieren Referenzen, Textlängen, Vokabelangaben, zwölf vollständige Regelblöcke, eindeutige Aufgaben-IDs, vollständige Lösungsschlüssel, neue Prüfungstexte, Schreibwortzahlen und Punktverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **34 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-26.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-26-Inhalts-, Schema-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 26 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-26.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 26.

## Nächste offene geplante Einheit

**Cumulative Test B1.1 — Chapters 21–23** ist weiterhin offen. Nach Kapitel 26 ist außerdem **Cumulative Test B1.2 — Chapters 24–26** laut Curriculum fällig. Beide Prüfungen bleiben im Manifest pending; diese Ausführung erstellt ausschließlich Kapitel 26 und ändert keine Prüfung.
