# Kapitel 10 — Abschlussbericht

## Kapitel und Status

- **Titel:** Einfache Gespräche und Satzverbindungen
- **Niveau:** A1
- **Status:** Abgeschlossen
- **Curriculum-Eintrag:** `chapter-10`; registriert beim vorhandenen dynamischen Kapitel-Loader.

## Grammatikthemen

- Nebenordnende Konjunktionen **und, oder, aber, denn, sondern** sowie der Zusatz **doch**.
- Zeitliche Reihenfolge mit **zuerst, dann, danach**; weitere Orientierung mit anschließend, schließlich, vorher, inzwischen und währenddessen.
- Prädikative, attributive und adverbiale Adjektive; einfache Gleichheitsvergleiche mit **so … wie** und **genauso … wie**.
- Orts- und Häufigkeitsadverbien sowie einfache Grad- und Zeitangaben.
- Verbposition im Hauptsatz und in Ja/Nein-Fragen.
- A1-gerechte Großschreibung und Zeichensetzung: Satzanfänge, Nomen, Höflichkeitsform **Sie**, Listen, Satzschlusszeichen, wörtliche Rede und Kommas bei passenden Hauptsatzverbindungen.
- Anwendung bekannter A1-Grammatik in kurzen, verbundenen Texten.

**Originale Grammatikreferenzen:** 367–372, 411–418, 483–485, 517–518, 529–550 und 758–776.

Acht ausgearbeitete Regeln enthalten Erklärungen, Satzmuster, Beispiele, Besonderheiten, typische Fehler, Merktipps und je drei Mini-Übungen. Tabellen und Vergleiche fassen Konjunktionen, Adverbien, Adjektivverwendungen und Gleichheitsvergleiche zusammen.

## Lernmaterial und Prüfung

- Ein Einstiegstext und zwei vollständige Lerntexte (126 und 101 Wörter): Houssem und Tassnim verbringen einen Tag in der Stadt; Nadia schreibt über einen freien Tag.
- Zehn Leseverständnisfragen und vier Sprachbeobachtungsaufgaben; relevante Konnektoren, Subjekte und Verben sind mit überprüften Textspannen annotiert.
- **20** Vokabeleinträge mit Übersetzungen, Wortarten, Artikeln und Pluralformen für Nomen sowie Beispielsätzen.
- Praktische Dialog- und Schreibübungen, Sprechimpulse, eine Alltagssituation und ein Schreibprojekt.
- **81** eindeutige Lern- und Prüfungsaufgaben insgesamt; alle Multiple-Choice-Schlüssel verwenden gültige Auswahlindizes. Offene Aufgaben haben Musterantworten und/oder Bewertungshinweise.
- Vollständige Kapitelprüfung mit **100 Punkten**: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10 und Schreiben 20.
- Zwei neue Prüfungstexte (jeweils außerhalb der Lerntexte) und drei manuell zu bewertende Schreibaufgaben mit Mustertexten und Kriterien.
- Lösungsschlüssel wird aus den registrierten Aufgaben erzeugt und enthält die Prüfungsantworten und Schreibmodelle.

Die Lerntexte, Aufgaben, Prüfungsanweisungen und Schreibaufträge sind auf Deutsch. Englisch erscheint in den Vokabelübersetzungen und ausdrücklich gekennzeichneten Übersetzungsaufgaben.

## Geänderte Dateien

- `content/a1/chapter-10.js` — vollständiger Kapitelinhalt im bestehenden Produktionsschema.
- `content/curriculum.js` — deutscher Kapiteltitel und Registrierung beim vorhandenen Loader.
- `tests/smoke.py` — Struktur-, Referenz-, Antwort-, Sprach-, Annotations- und Prüfungsprüfungen für Kapitel 10; Manifestprüfung auf den aktuellen Stand erweitert.
- `progress/chapters.json` — Kapitel 10 als abgeschlossen markiert; Assessments und spätere Kapitel bleiben unverändert ausstehend.
- `progress/reports/chapter-10.md` — dieser Abschlussbericht.

## Validierung

- Alle neun Abschnitte und ihre Reihenfolge, 20 Vokabeleinträge, acht vollständige Grammatikregeln, Referenznummern und 81 eindeutige Aufgaben-IDs geprüft.
- Für jede objektive Übung wurde ein Lösungsschlüssel geprüft; Multiple-Choice-Indizes und offene Musterantworten sind vorhanden.
- Prüfungsfragen ergeben exakt 100 Punkte und erfüllen die vorgeschriebene Verteilung. Zwei neue Lesetexte, drei Schreibaufgaben und manuelle Bewertungskriterien sind vorhanden.
- Deutsche Aufgabenformulierungen, Textlängen und Grammatikannotationsspannen geprüft.
- GJS-Lauf mit dem Produktionsrenderer: alle neun Abschnitte gerendert; `StudyExams.validateExam` meldet keine Fehler.
- Vollständige Projektrauchtestsuite: **15 Tests bestanden**.

## Offene Punkte

Keine bekannten inhaltlichen oder technischen Probleme in Kapitel 10.

## Nächste ausstehende Einheiten

Der manifestweit früheste noch offene Eintrag ist **Cumulative Test A1.1**; auch **A1.2** und **A1.3** sind noch ausstehend. Im Curriculum folgt nach Kapitel 10 die separate **A1-Abschlussprüfung**. Diese Einheiten wurden in diesem Kapitelauftrag nicht erstellt.
