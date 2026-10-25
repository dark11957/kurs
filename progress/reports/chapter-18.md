# Kapitel 18 — Abschlussbericht

## Kapitel und Status

- **Titel:** Verben mit Präpositionen und Pronominaladverbien
- **Niveau:** A2
- **Status:** Abgeschlossen nach Inhalts- und Funktionsprüfung
- **Inhaltsmodul:** `content/a2/chapter-18.js`

## Grammatikthemen

Zehn ausführliche Regelblöcke behandeln feste Verb-Präposition-Verbindungen, Akkusativ- und Dativobjekte, reflexive Verben mit Präpositionalobjekt, Präpositionalobjekte und freie Angaben, Fragen nach Personen mit *wen/wem*, Fragen nach Sachen mit *wo(r)+Präposition*, Rückbezüge mit *da(r)+Präposition*, wichtige Alltagsverbindungen und ausgewählte Genitivpräpositionen. Die Vergleiche erklären unter anderem *sich freuen auf/über*, *sprechen mit/über* und Personen- gegenüber Sachbezügen. Jede Regel enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und mindestens drei direkte Übungen.

Die Originalreferenzen **115, 119, 263–269, 286–288 und 610–638** sind vollständig in den Kapitelmetadaten erhalten und in den Regelblöcken abgedeckt.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge vorhanden.
- Der Einstiegstext umfasst 114 Wörter.
- Zwei neue Lerntexte: „Eine Lernwerkstatt planen“ (227 Wörter) und eine Einladung per E-Mail (151 Wörter), jeweils mit gezielten Verständnis- und Sprachbeobachtungsaufgaben.
- **27 Vokabeleinträge** zu Interessen, Kommunikation, Beziehungen, Arbeit und Hobbys. Nomen enthalten Artikel und Pluralangaben; Verben enthalten Formen und Beispielsätze. Ausdrücke, Wortfamilien, Synonyme/Gegenteile, Kontexte und Wiederholungswortschatz ergänzen die Liste.
- Drei Übersichtstabellen und drei Kontrastblöcke behandeln Verbverbindungen, Kasus, Personen-/Sachfragen und ausgewählte Genitivpräpositionen.
- Alltagsteil mit Houssem und Tassnim, Redemitteln, Planungsszenario, geführtem Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **105 eindeutige bewertbare Aufgaben:** 78 Lern- und Wiederholungsaufgaben sowie 27 Prüfungsfragen. Der Lösungsteil enthält einen Eintrag für jede Aufgabe, Musterantworten und manuelle Bewertungshinweise für offene Antworten.

## Kapitelprüfung

- **100 Punkte:** Leseverstehen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (197 und 180 Wörter), die nicht aus den Lerntexten übernommen wurden.
- **27 Prüfungsfragen**, darunter drei manuell zu bewertende Schreibaufgaben mit Musterantworten und Kriterien.
- Die automatische Prüfungsvalidierung meldet keine Fehler; die Punkte stimmen mit der vorgeschriebenen Verteilung überein.

## Integration und Validierung

- Kapitel 18 ist mit seinem deutschen Titel in `content/curriculum.js` eingetragen und der Loader verweist auf `content/a2/chapter-18.js`.
- Die Inhaltsprüfung kontrolliert alle neun Abschnitte, Lesetextlängen, Wortschatzfelder, zehn Regelblöcke und Referenzen, eindeutige Aufgaben-IDs, vollständige Lösungen, Prüfungsfragen, Textneuheit, Annotationen und Punktverteilung.
- Alle neun Abschnitte wurden mit dem vorhandenen Produktionsrenderer ausgegeben. `StudyExams.validateExam` meldete keine Fehler; drei Markierungen des Lesetextes wurden mit dem vorhandenen Annotationsrenderer ausgegeben.
- Die vollständige Projektrauchtestsuite bestand mit **25 Prüfungen**.
- `git diff --check` wurde nach der Integration ausgeführt.

## Geänderte Dateien

- `content/a2/chapter-18.js` — vollständiger Kapitelinhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Inhalts-, Struktur-, Lösungs- und Prüfungsvalidierung für Kapitel 18 sowie aktualisierte Kapitelzählung.
- `progress/chapters.json` — Kapitelstatus nach erfolgreicher Validierung.
- `progress/reports/chapter-18.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Navigations- oder Prüfungsfehler in Kapitel 18.

## Nächste offene Einheit

Die erste noch offene geplante Einheit im Fortschrittsmanifest ist **Cumulative Test A1.1 — Chapters 01–03**. In der A2-Sequenz folgt auf Kapitel 18 **Cumulative Test A2.3 — Chapters 11–18**. Diese Ausführung erstellt ausschließlich Kapitel 18.
