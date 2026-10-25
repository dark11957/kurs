# Kapitel 15 — Abschlussbericht

## Kapitel und Status

- **Titel:** Temporale Nebensätze und zeitliche Abläufe
- **Niveau:** A2
- **Status:** Abgeschlossen
- **Inhaltsmodul:** `content/a2/chapter-15.js`

## Grammatikthemen

Die elf Regelblöcke behandeln einmalige und wiederholte Ereignisse mit *als/wenn*, *wenn/wann* in zeitlichen Aussagen und Fragen, *bevor*, *nachdem* mit Perfekt und Plusquamperfekt, Gleichzeitigkeit mit *während*, Beginn und Fortdauer mit *seit/seitdem*, Endpunkte mit *bis*, unmittelbare Folge mit *sobald*, Dauer mit *solange*, die Zeitadverbien *schon/noch/erst* einschließlich *noch nicht/nicht mehr*, chronologische Verknüpfungen und Kommas sowie Verbendstellung in temporalen Nebensätzen.

Die im Curriculum zugeordneten Originalreferenzen sind erhalten: **378, 380–386, 431–438, 571–580**.

## Lernmaterial

- Alle neun Abschnitte sind in der vorgeschriebenen Reihenfolge enthalten.
- Der Einstiegstext umfasst 116 Wörter.
- Zwei neue A2-Lerntexte: „Ein Wochenende in Dresden“ (209 Wörter) und „Nachricht an Nora“ (186 Wörter), mit Verständnisfragen, Sprachbeobachtung und Textvergleich.
- **29 Vokabeleinträge** mit englischen Bedeutungen, Wortart, Artikeln und Pluralen bei Nomen, Verbformen bei Verben sowie Beispielsätzen. Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Sammlung.
- **11 vollständige Grammatikregeln**, jeweils mit Erklärung, Struktur, Beispielen, Besonderheiten, typischen Fehlern, Merktipp und drei unmittelbaren Übungen. Drei übersichtliche Tabellen und vier Vergleiche unterstützen die Wiederholung.
- Reiseplanung, Alltagsdialog, praktische Verspätungssituation, geführtes Schreiben, Sprechimpulse und Mini-Projekt wenden die Grammatik kommunikativ an.
- **111 Aufgaben insgesamt:** 92 Lern- und Wiederholungsaufgaben sowie 19 Prüfungsfragen. Jede Aufgabe hat eine eindeutige ID und einen passenden Lösungseintrag beziehungsweise eine Musterantwort mit Bewertungshinweis.

## Kapitelprüfung

- Insgesamt **100 Punkte**: Leseverstehen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (154 und 160 Wörter), die nicht in den Lerntexten vorkommen.
- Drei A2-Schreibaufgaben mit Mustertexten von 45, 60 und 73 Wörtern sowie Bewertungskriterien. Kurze offene Antworten und Schreibaufgaben werden manuell bewertet; geschlossene Aufgaben sind für die automatische Auswertung strukturiert.
- Die Wortschatzprüfung enthält Kapitelwortschatz und Wiederholung, darunter *einen Termin vereinbaren*.

## Integration und Validierung

- Kapitel 15 ist in `content/curriculum.js` unter dem deutschen Titel registriert.
- Geprüft wurden Abschnittsfolge, A2-Wortlängen, Referenzabdeckung, Wortschatzfelder, eindeutige Aufgaben-IDs, vollständiger Lösungsschlüssel, Multiple-Choice-Indizes, deutsche Aufgabenformulierungen, neue Prüfungstexte und die 100-Punkte-Verteilung.
- Alle neun Abschnitte wurden mit dem Produktionsrenderer gerendert; `StudyExams.validateExam` meldete keine Fehler.
- Das bestehende Annotationsschema markiert ausgewählte Konnektoren und Verbformen im ersten Lesetext; die Text- und Markierungsspalten wurden geprüft.
- Die vollständige Projektrauchtestsuite nach der Manifestintegration bestand mit **22 Prüfungen**; `git diff --check` war fehlerfrei.

## Geänderte Dateien

- `content/a2/chapter-15.js` — vollständiger Kapitelinhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-15-Struktur-, Inhalts-, Sprach- und Prüfungsvalidierung.
- `progress/chapters.json` — Status nach erfolgreicher Validierung.
- `progress/reports/chapter-15.md` — dieser Bericht.

## Offene Punkte

Keine bekannten Inhalts-, Schema-, Navigations- oder Prüfungsfehler in Kapitel 15. Die kumulativen Prüfungen bleiben gemäß Fortschrittsmanifest eigenständige, noch offene Einheiten.

## Nächste offene Einheit

Die erste im Manifest noch offene geplante Einheit ist **Cumulative Test A1.1 — Chapters 01–03**. Die nach Kapitel 15 im Curriculum platzierte Prüfung ist **Cumulative Test A2.2 — Chapters 13–15**. Diese Ausführung erstellt ausschließlich Kapitel 15.
