# Kapitel 17 — Abschlussbericht

## Kapitel und Status

- **Titel:** Bedingungen, Gegensätze und logische Verbindungen
- **Niveau:** A2
- **Status:** Abgeschlossen nach abschließender Prüfung
- **Inhaltsmodul:** `content/a2/chapter-17.js`

## Grammatikthemen

Die zehn Regelblöcke behandeln *wenn/falls* und reale Bedingungssätze, *obwohl*, *trotzdem/dennoch*, *aber/sondern*, *sonst/andernfalls*, Gründe und Folgen, *indem*, häufige logische Konnektoren sowie die Verbposition mit Konjunktionaladverbien. Wiedererkennungsnotizen erklären außerdem *ohne dass* und *als ob*; *damit*, *ohne … zu* und *statt … zu* werden als bekannte Formen aus Kapitel 16 eingeordnet.

Die Originalreferenzen bleiben in den Metadaten vollständig erhalten: **377, 379, 387–391, 404–410, 419–426, 430, 439, 442–445 und 695–701**. Jeder Regelblock enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und mindestens drei unmittelbare Übungen.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge enthalten.
- Der Einstiegstext umfasst 101 Wörter.
- Zwei neue A2-Lerntexte: „Ein neuer Treffpunkt“ (236 Wörter) und „Nachricht an die Gruppe“ (164 Wörter), mit Verständnisfragen, Sprachbeobachtung und zugänglichen Textvergleichsaufgaben.
- **27 Vokabeleinträge** zu Problemen, Lösungen, Entscheidungen und Folgen, mit Übersetzungen, Wortarten, Artikeln und Pluralen bei Nomen, Verbformen sowie Beispielsätzen. Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungsübungen ergänzen den Wortschatz.
- Drei Grammatikübersichten und vier Vergleiche machen Verbposition und Bedeutungsunterschiede sichtbar.
- Alltagsteil mit Dialog von Houssem und Tassnim, Redemitteln, Situationsaufgabe, geführtem Schreiben, Sprechimpulsen und Mini-Projekt.
- **108 eindeutige Aufgaben insgesamt:** 81 Lern- und Wiederholungsaufgaben sowie 27 Prüfungsfragen. Jede Aufgabe hat einen Lösungseintrag oder eine Musterantwort mit Bewertungshinweis.

## Kapitelprüfung

- **100 Punkte:** Leseverstehen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (193 und 182 Wörter), die nicht in den Lerntexten vorkommen.
- Drei A2-Schreibaufgaben mit Musterantworten und Bewertungskriterien. Freie Antworten und Schreibaufgaben werden manuell bewertet; geschlossene Aufgaben sind für die automatische Auswertung strukturiert.

## Integration und Validierung

- Kapitel 17 ist mit seinem deutschen Titel in `content/curriculum.js` registriert und über `content/a2/chapter-17.js` mit dem vorhandenen Loader verbunden.
- Die Inhaltsprüfung kontrolliert Abschnittsfolge, Textlängen, Wortschatzfelder, Regelreferenzen, eindeutige Aufgaben-IDs, vollständige Lösungen, Antwortoptionen, deutsche Aufgabenformulierungen, neue Prüfungstexte und Punkteverteilung.
- Alle neun Abschnitte wurden mit dem Produktionsrenderer gerendert. `StudyExams.validateExam` meldete keine Fehler.
- Die Annotationsspannen im ersten Lesetext wurden mit dem bestehenden Markierungssystem geprüft.
- Die vollständige Projektrauchtestsuite bestand mit **24 Prüfungen**; `git diff --check` war fehlerfrei.

## Geänderte Dateien

- `content/a2/chapter-17.js` — vollständiges Kapitel im bestehenden Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Struktur-, Inhalts-, Sprach- und Prüfungsvalidierung für Kapitel 17; aktualisierte Kapitelzählung.
- `progress/chapters.json` — Kapitelstatus nach erfolgreicher Validierung.
- `progress/reports/chapter-17.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Navigations- oder Prüfungsfehler in Kapitel 17. Die kumulativen Prüfungen bleiben gemäß Fortschrittsmanifest offen.

## Nächste offene Einheit

Die erste im Manifest noch offene geplante Einheit ist **Cumulative Test A1.1 — Chapters 01–03**. Innerhalb des A2-Kapitelfortschritts folgt nach Kapitel 18 **Cumulative Test A2.3**. Diese Ausführung erstellt ausschließlich Kapitel 17.
