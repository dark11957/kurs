# Kapitel 21 — Abschlussbericht

## Kapitel und Status

- **Titel:** Relativsätze und Relativpronomen
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-21.js`

## Grammatikthemen

Zwölf ausführliche Regelblöcke behandeln die Funktion des Relativsatzes, Bezugswort und Pronomenformen, Nominativ, Akkusativ, Dativ, Genitiv, Präpositionen, **wo** und **was**, Kommas und Satzstellung, Perfekt, Modalverben sowie die Erkennungsformen **wer/wen/wem**. Die Pronomenübersicht enthält alle vier Fälle und Singular/Plural. Jeder Regelblock bietet Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei direkte Übungen.

Die im Curriculum verlangten Originalreferenzen **78–83, 446 und 452–463** sind in den Metadaten enthalten.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge vorhanden.
- Der Einstieg führt Houssem, Tassnim und ihr Team ein.
- Zwei unterschiedliche Lerntexte: eine Erzählung über die Teamarbeit (302 Wörter) und eine E-Mail zur Teamvorstellung (170 Wörter). Dazu gibt es Verständnisfragen, Sprachbeobachtung und einen Textvergleich.
- Fünf präzise Grammatikmarkierungen im vollständigen Datensatz des ersten Lesetextes.
- **29 Vokabeleinträge** zu Eigenschaften, Zusammenarbeit, Rollen und Arbeitsplätzen. Nomen enthalten Artikel und Plural; Verben enthalten Formen; alle Einträge haben Übersetzung und Beispielsatz.
- Ausdrücke, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Wortliste.
- Alltagsteil mit Dialog, Redemitteln, praktischer Teamvorstellung, 80–100-Wörter-Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **102 eindeutig identifizierte Aufgaben** über Leseverständnis, Wortschatz, Grammatik-Miniübungen, integrierte Übungen und Prüfung. Der Lösungsteil enthält für jede Aufgabe eine Lösung, Musterantwort oder Bewertungshinweise.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (172 und 174 Wörter), verschieden von den Lerntexten.
- **28 Fragen:** 10 Lesen, 6 Wortschatz, 7 Grammatik, 2 Satzbau und 3 manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Mustertexte für die drei B1-Schreibaufgaben umfassen 74, 90 und 113 Wörter und erfüllen die Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Die geschlossenen Aufgaben sind automatisch auswertbar; offene Schreibaufgaben werden nicht automatisch bewertet und enthalten Kriterien.

## Integration und Validierung

- Das Kapitel verwendet das bestehende Schema und ist als `chapter-21` unter `content/b1/chapter-21.js` registriert.
- Der Produktionsrenderer hat alle neun Abschnitte erfolgreich ausgegeben. Alle fünf Annotationsmarkierungen wurden verarbeitet; `StudyExams.validateExam` meldet keine Fehler.
- Inhaltsprüfungen kontrollieren die Grammatikreferenzen, B1-Wortschatzfelder, 12 Regelblöcke, eindeutige Aufgaben-IDs, vollständigen Lösungsschlüssel, neue Prüfungstexte, Schreibwortzahlen und die exakte Punkteverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **29 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-21.js` — Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Struktur-, Inhalts-, Lösungs-, B1-Schreib- und Prüfungsprüfungen für Kapitel 21; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 21 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-21.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 21.

## Nächste offene geplante Einheit

Die erste im Manifest noch offene geplante Einheit ist **Cumulative Test A1.1 — Chapters 01–03**. Ebenfalls offen sind **Cumulative Test A2.3 — Chapters 16–18** und die **A2-Finalprüfung nach Kapitel 20**. Diese Ausführung erstellt ausschließlich Kapitel 21; die ausstehenden kumulativen Prüfungen bleiben unverändert.
