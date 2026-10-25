# Kapitel 16 — Abschlussbericht

## Kapitel und Status

- **Titel:** Infinitivkonstruktionen: Pläne, Ziele und Absichten
- **Niveau:** A2
- **Status:** Abgeschlossen nach abschließender Prüfung
- **Inhaltsmodul:** `content/a2/chapter-16.js`

## Grammatikthemen

Das Kapitel behandelt Infinitive mit und ohne *zu*, häufige Verben mit Infinitivergänzung, Adjektive und Nomen mit zu-Infinitiv, Zwecke mit *um … zu* und *damit*, *ohne … zu* und *statt … zu*, den Unterschied zwischen dass-Satz und Infinitivgruppe, trennbare Verben mit *zu* sowie die gebräuchlichen Muster mit *lassen* und *nicht brauchen … zu*. *Haben … zu* und *sein … zu* werden zum Wiedererkennen erklärt. Die Beispielsammlung deckt außerdem die häufigen Verbindungen mit Modal-, Wahrnehmungs- und Bewegungsverben sowie *bleiben* ab.

Die Originalreferenzen stehen vollständig in den Metadaten: **120–124, 440–445 und 464–482**. Die Regelblöcke behandeln die in der Kapiteldefinition zugeordneten Grammatikthemen; nicht zugeordnete Nachbarformen werden nicht als Lernziel ausgeweitet.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge vorhanden.
- Der Einstiegstext umfasst 104 Wörter.
- Zwei neue A2-Lerntexte: „Zwei nächste Schritte“ (234 Wörter) und „Nachricht von Tassnim“ (180 Wörter), jeweils mit passenden Verständnisaufgaben, Sprachbeobachtung und Textvergleich.
- **27 Vokabeleinträge** zu Zielen, Plänen, Lernen und Arbeit, mit Übersetzungen, Wortarten, Artikeln und Pluralen bei Nomen, Verbformen sowie Beispielsätzen. Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungsaufgaben sind enthalten.
- **12 vollständige Grammatikblöcke** mit Erklärung, Struktur, Beispielen, Besonderheiten, häufigen Fehlern, Merktipp und mindestens drei unmittelbaren Übungen je Block. Drei Tabellen und mehrere Regelvergleiche unterstützen die Wiederholung.
- Alltagsteil mit fortlaufendem Dialog von Houssem und Tassnim, Redemitteln, Situationsaufgabe, geführtem Schreiben, Sprechimpulsen und Mini-Projekt.
- **109 eindeutige Aufgaben insgesamt:** 82 Lern- und Wiederholungsaufgaben sowie 27 Prüfungsfragen. Alle Aufgaben haben eine Lösung oder eine Musterantwort mit passendem Bewertungshinweis.

## Kapitelprüfung

- **100 Punkte:** Leseverstehen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (178 und 170 Wörter), die nicht in den Lerntexten vorkommen.
- Drei A2-Schreibaufgaben mit Musterantworten und Bewertungskriterien. Freie Antworten und Schreibaufgaben werden manuell bewertet; geschlossene Aufgaben sind für die automatische Auswertung strukturiert.

## Integration und Validierung

- Kapitel 16 ist unter seinem deutschen Titel in `content/curriculum.js` eingetragen und über `content/a2/chapter-16.js` mit dem bestehenden Loader registriert.
- Die Inhaltsprüfung kontrolliert Abschnittsfolge, Textlängen, Wortschatzfelder, Regelblöcke, Originalreferenzen, Aufgaben-IDs, Lösungsschlüssel, Antwortoptionen, neue Prüfungstexte, deutsche Aufgabenformulierungen und Punktverteilung.
- Alle neun Abschnitte wurden mit dem Produktionsrenderer gerendert. `StudyExams.validateExam` meldete keine Fehler.
- Die Annotationsspannen im ersten Lesetext wurden mit dem bestehenden Markierungssystem geprüft.
- Die vollständige Projektrauchtestsuite bestand mit **23 Prüfungen**; `git diff --check` war fehlerfrei.

## Geänderte Dateien

- `content/a2/chapter-16.js` — vollständiges Kapitel im bestehenden Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Struktur-, Inhalts-, Sprach- und Prüfungsvalidierung für Kapitel 16; aktualisierte Kapitelzählung.
- `progress/chapters.json` — Kapitelstatus nach erfolgreicher Validierung.
- `progress/reports/chapter-16.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Navigations- oder Prüfungsfehler in Kapitel 16. Die separat geplanten kumulativen Prüfungen bleiben gemäß Manifest offen.

## Nächste offene Einheit

Die erste im Manifest noch offene geplante Einheit ist **Cumulative Test A1.1 — Chapters 01–03**. Innerhalb des A2-Kapitelfortschritts folgt nach den Kapiteln 16–18 **Cumulative Test A2.3**. Diese Ausführung erstellt ausschließlich Kapitel 16.
