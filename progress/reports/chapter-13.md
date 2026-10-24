# Kapitel 13 — Abschlussbericht

## Kapitel und Status

- **Titel:** Adjektive, Deklination und Vergleiche
- **Niveau:** A2
- **Status:** Abgeschlossen
- **Curriculum:** Als `chapter-13` mit dem bestehenden `content/a2/chapter-13.js`-Loader registriert.

## Grammatikthemen

- Attributive, prädikative und adverbiale Verwendung von Adjektiven.
- Schwache, gemischte und starke Adjektivdeklination; Kasusendungen in Nominativ, Akkusativ, Dativ und Genitiv.
- Adjektive nach bestimmten/unbestimmten Artikeln, Possessivartikeln, **kein** und häufigen Mengenwörtern.
- Adjektivendungen im Komparativ und Superlativ.
- Regelmäßige Steigerung, Umlautformen und wichtige unregelmäßige Reihen (**gut, viel, gern, hoch, nah**).
- Ungleiche Vergleiche mit **als**, Gleichheit mit **so/genauso … wie**, attributive Vergleichsformen und beide Superlativkonstruktionen.
- Häufige Adjektiv-Präposition-Verbindungen mit Dativ oder Akkusativ, Adjektivergänzungen mit **dass** und **zu** sowie zusammengesetzte Adjektive und **je … desto/umso**.

**Originale Grammatikreferenzen:** 483–506 und 510–528 (43 Referenzen).

Elf vollständige Regelblöcke enthalten Erklärungen, Satzmuster, Beispiele, Besonderheiten, typische Fehler, Merktipps und unmittelbare Übungen. Tabellen zeigen alle drei Deklinationsmuster in vier Fällen sowie Steigerungsformen und Endungen im Komparativ/Superlativ.

## Lernmaterial

- Deutscher Einstiegstext mit 112 Wörtern und drei Entdeckungs-/Vorwissensfragen.
- Zwei vollständige A2-Lerntexte (170 und 165 Wörter): eine Wohnungsbesichtigung mit Houssem und Tassnim sowie ein Informationstext zu Fahrkarten.
- Zwölf Leseverständnis-, Sprachbeobachtungs- und Textvergleichsaufgaben.
- **26** thematische Vokabeleinträge mit englischer Übersetzung, Wortart, Artikeln und Pluralen bei Nomen, Verbformen und Beispielsätzen.
- Redemittel, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz.
- Alltagsdialog, praktische Vergleichssituation, geführte Schreibaufgabe, vier Sprechimpulse und Mini-Projekt.
- **92** Übungsaufgaben außerhalb der Prüfung und **19** Prüfungsfragen; insgesamt **111 eindeutige IDs**. Der Lösungsschlüssel enthält 111 passende Einträge. Offene Antworten haben Musterlösungen.

## Kapitelprüfung

- 100 Punkte: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (120 und 136 Wörter), jeweils mit Verständnisaufgaben.
- Drei A2-Schreibaufgaben (40–60, 60–80 und 60–100 Wörter) mit Musterantworten und manuellen Bewertungskriterien.
- Prüfungspunkte und Kategorien stimmen mit der vorgeschriebenen Verteilung überein; offene Schreibaufgaben werden nicht automatisch bewertet.

Die Lerntexte, Erklärungen, Fragen, Übungsanweisungen und Prüfungsaufgaben sind deutschsprachig. Englisch erscheint in Vokabelübersetzungen und ausdrücklich gekennzeichneten Übersetzungsübungen.

## Geänderte Dateien

- `content/a2/chapter-13.js` — vollständiger Inhalt im bestehenden Kapitelschema.
- `content/curriculum.js` — deutscher Titel und Registrierung des Kapitelmoduls.
- `tests/smoke.py` — Struktur-, Referenz-, Wortschatz-, Antwortschlüssel-, Annotations- und Prüfungstests für Kapitel 13.
- `progress/chapters.json` — Kapitel 13 nach Validierung als abgeschlossen markiert.
- `progress/reports/chapter-13.md` — dieser Bericht.

## Validierung

- Neun Abschnitte in der korrekten Reihenfolge, A2-Metadaten und alle 43 Originalreferenzen geprüft.
- 26 Vokabeleinträge, elf Grammatikregeln, 111 eindeutige Aufgaben-IDs und 111 Lösungseinträge geprüft.
- Alle objektiven Antworttypen, Auswahlindizes, offenen Musterantworten und die 100-Punkte-Verteilung geprüft.
- Zwei Prüfungstexte sind neu und unterscheiden sich von beiden Lerntexten.
- Grammatikannotationsspannen sind gültige UTF-16-Textspannen und werden vom vorhandenen Renderer markiert.
- Alle neun Abschnitte mit dem Produktionsrenderer gerendert; `StudyExams.validateExam` meldet keine Fehler.
- Kapitel-13-Inhaltstest bestanden. Vollständige Projektrauchtestsuite nach Manifestintegration ausgeführt.
- `git diff --check` ohne Whitespace-Fehler.

## Offene Punkte

Keine bekannten inhaltlichen oder technischen Probleme in Kapitel 13. Die im Manifest noch ausstehenden kumulativen Prüfungen bleiben eigenständige Einheiten und wurden in diesem Kapitelauftrag nicht erstellt.

## Nächste Einheit

Die kumulativen Prüfungen A1.1–A1.3 und die A1-Abschlussprüfung sind im Manifest weiterhin offen. Die nächste kumulative Prüfung im A2-Ablauf nach Kapitel 12 ist **Cumulative Test A2.1**. Keine weitere Einheit wurde in diesem Auftrag begonnen.
