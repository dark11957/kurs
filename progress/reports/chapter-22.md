# Kapitel 22 — Abschlussbericht

## Kapitel und Status

- **Titel:** Das Passiv und die Beschreibung von Vorgängen
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-22.js`

## Grammatikthemen

Elf Regelblöcke decken alle Themen aus der Kapiteldefinition ab: Aktiv und Passiv; Bildung des Vorgangspassivs; Präsens, Präteritum und Perfekt; Passiv mit Modalverben; **von** und **durch**; Passiv ohne Täterangabe einschließlich unpersönlichem Passiv und Platzhalter-*es*; Zustandspassiv; Vorgang gegenüber Zustand; sowie die Alternativen **man**, **sich lassen + Infinitiv** und **sein + zu + Infinitiv**. Tabellen vergleichen Hilfsverbformen und Zeitstufen. Jeder Regelblock enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei direkte Übungen.

Die Originalreferenzen **214–227** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der etablierten Reihenfolge.
- Der Einstieg umfasst 153 Wörter und führt Houssem und Tassnim bei der Untersuchung einer Plattformstörung ein.
- Zwei unterschiedliche Lerntexte: ein Störungsbericht (254 Wörter) und eine Wartungsmitteilung (259 Wörter). Verständnisfragen, Sprachbeobachtung und Textvergleich begleiten sie.
- Fünf geprüfte Grammatikmarkierungen heben Passivformen im ersten Lesetext hervor.
- **30 Vokabeleinträge** zu Technik, Abläufen, Produktion und Meldungen; Nomen enthalten Artikel und Plural, Verben relevante Formen und alle Einträge Übersetzung und Beispielsatz.
- Wortfamilien, Redewendungen, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Vokabelliste.
- Alltagsteil mit Dialog, Redemitteln, Statusmeldungsszenario, 80–100-Wörter-Schreibtraining, Sprechimpulsen und Prozessprojekt.
- **99 eindeutig identifizierte Aufgaben** einschließlich Prüfung; alle haben eine Lösung, Musterantwort oder Bewertungshinweise.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (161 und 154 Wörter), die nicht aus den Lerntexten stammen.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Mustertexte umfassen 72, 86 und 110 Wörter und erfüllen die B1-Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Schreibaufgaben werden nicht automatisch bewertet und enthalten Kriterien.

## Integration und Validierung

- Kapitel 22 ist im bestehenden Schema als `chapter-22` registriert und wird aus `content/b1/chapter-22.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus; alle fünf Markierungen wurden verarbeitet und `StudyExams.validateExam` meldete keine Fehler.
- Inhaltsprüfungen verifizieren Grammatikreferenzen, Vokabelangaben, elf vollständige Regelblöcke, eindeutige Aufgaben-IDs, vollständigen Lösungsschlüssel, B1-Wortlängen, neue Prüfungstexte, Schreibwortzahlen und Punkteverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **30 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-22.js` — vollständiger Inhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-22-Inhalts-, B1-Längen-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 22 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-22.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 22.

## Nächste offene geplante Einheiten

Im Manifest sind weiterhin **Cumulative Test A1.1 — Chapters 01–03**, **Cumulative Test A2.3 — Chapters 16–18** und die **A2-Finalprüfung nach Kapitel 20** offen. Die nächste B1-Kumulativprüfung ist nach Kapitel 23 eingeplant. Diese Ausführung erstellt ausschließlich Kapitel 22; alle Prüfungen bleiben unverändert.
