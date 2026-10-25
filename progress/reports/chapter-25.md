# Kapitel 25 — Abschlussbericht

## Kapitel und Status

- **Titel:** Plusquamperfekt, Futur I und komplexe Zeitformen
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-25.js`

## Grammatikthemen

Elf vollständige Regelblöcke behandeln Plusquamperfekt mit **hatte** und **war**, den Unterschied zwischen Plusquamperfekt und Präteritum, zeitliche Reihenfolge, Futur I mit **werden**, Zukunftspräsens, Vermutungen und Vorhersagen, Modalverben in mehreren Zeiten, Ersatzinfinitiv und erweiterte Perfektkonstruktionen sowie den gezielten Zeitformenwechsel in Erzählungen. Jeder Regelblock enthält eine Erklärung, Struktur, mehrere Beispiele, Besonderheiten, typische Fehler, Merktipp und drei thematisch passende Miniübungen. Übersichtstabellen und Vergleiche unterstützen die Zeitformenwahl.

Die Originalreferenzen **131, 143–162 und 171–172** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg umfasst 150 Wörter und knüpft an Houssem und Tassnims erste offene Lernwerkstatt an. Sie erinnern sich an den Stromausfall, ziehen daraus Schlüsse und planen die nächste Veranstaltung.
- Zwei unterschiedliche B1-Lerntexte: ein erzählender Rückblick (301 Wörter) und eine Planungs-E-Mail (250 Wörter). Verständnisfragen, Textvergleich und fünf Grammatikmarkierungen sind enthalten.
- **30 Vokabeleinträge** zu Erinnerungen, Entscheidungen, Vorhersagen und Erfahrungen; Nomen enthalten Artikel und Plural, Verben relevante Formen und alle Einträge Beispielsätze.
- Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Sammlung.
- Übungen decken Erkennen, Ergänzen, Umformen, Satzbau, Übersetzen, Fehlerkorrektur, Dialog, kreative Rückblicke und gemischte Zeitformen ab.
- Alltagsteil mit Dialog, Redemitteln, Rückblick-Szenario, Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **89 eindeutig identifizierte Aufgaben insgesamt**, einschließlich Prüfung. Alle objektiven Antworten sind hinterlegt; freie Antworten enthalten Musterlösungen und Bewertungshinweise.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (220 und 228 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 64, 85 und 118 Wörter und erfüllen die Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Freie Schreibaufgaben werden nicht automatisch bewertet; sie enthalten Kriterien und Musterantworten.

## Integration und Validierung

- Kapitel 25 ist in `content/curriculum.js` registriert und wird über `content/b1/chapter-25.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Alle fünf Annotationen wurden dargestellt; `StudyExams.validateExam` meldete keine Fehler.
- Die Inhaltsprüfungen validieren Referenzen, Textlängen, Vokabelangaben, elf vollständige Regelblöcke, Aufgaben-IDs, Lösungsschlüssel, neue Prüfungstexte, Schreibwortzahlen und Punktverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **33 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-25.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-25-Inhalts-, Schema-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 25 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-25.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 25.

## Nächste offene geplante Einheit

**Cumulative Test B1.1 — Chapters 21–23** ist laut Curriculum weiterhin fällig und im Manifest noch offen. Die nächste planmäßige B1-Prüfung nach dem aktuellen Kapitel ist **Cumulative Test B1.2 — Chapters 24–26**, die nach Kapitel 26 folgt. Diese Ausführung erstellt ausschließlich Kapitel 25; keine Prüfung wurde verändert.
