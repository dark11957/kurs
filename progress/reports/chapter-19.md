# Kapitel 19 — Abschlussbericht

## Kapitel und Status

- **Titel:** Genitiv, Besitz und Wortbildung
- **Niveau:** A2
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/a2/chapter-19.js`

## Grammatikthemen

Elf ausführliche Regelblöcke lehren Genitivartikel, Genitivendungen, Besitzfragen mit *wessen*, possessive Beziehungen, Eigennamen im Genitiv, Genitiv gegenüber *von* + Dativ, die n-Deklination, häufige Genitivpräpositionen, zusammengesetzte Nomen, Nominalisierung von Verben und Adjektiven, häufige Nomen-Suffixe und Diminutive. Jeder Regelblock enthält Erklärung, Struktur, mindestens drei Beispiele, Besonderheiten, typische Fehler, Merktipp und drei direkt zugehörige Übungen.

Die Originalreferenzen **10–17, 36–41, 263–269, 664–678, 688–689 und 692** sind vollständig in den Metadaten erhalten und in den Erklärungen, Beispielen oder Übungsblöcken abgedeckt.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge enthalten.
- Der Einstieg umfasst 109 Wörter.
- Zwei neue Lerntexte: „Ein Nachmittag bei Houssems Familie“ (192 Wörter) und eine Nachricht vor dem Fest (157 Wörter), beide mit Verständnisfragen; zusätzlich gibt es Sprachbeobachtung und präzise Genitivmarkierungen.
- **24 Vokabeleinträge** zu Familie, Besitz, persönlichen Dingen und Materialien; Nomen enthalten Artikel und Plural, Verben relevante Formen und alle Einträge Beispielsätze.
- Ausdrücke, Wortfamilien, Synonyme/Gegenteile, Kontexte, Wortschatzübungen, Tabellen und Vergleiche ergänzen die Wortliste.
- Alltagsteil mit Houssem und Tassnim, Kommunikationsmustern, Situation, 40–60-Wörter-Schreibauftrag, Sprechimpulsen und Mini-Projekt.
- **98 eindeutige Übungen und Prüfungsfragen** mit stabilen IDs; der Lösungsteil enthält für jede Aufgabe eine Lösung oder passende Musterantwort und Bewertungshinweise für offene Texte.

## Kapitelprüfung

- **100 Punkte:** Leseverstehen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (199 und 178 Wörter), nicht aus den Lerntexten übernommen.
- **27 Prüfungsfragen**: zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell zu bewertende Schreibaufgaben (5/7/8 Punkte).
- Alle Schreibaufgaben haben Mustertexte und Beurteilungskriterien. Die Prüfungsvalidierung meldet keine Fehler.

## Integration und Validierung

- Das Modul verwendet das bestehende Kapitel-Schema und ist unter `content/a2/chapter-19.js` im Curriculum-Loader registriert.
- Das Kapitel wurde mit dem vorhandenen Produktionsrenderer ausgeführt; alle neun Abschnitte ließen sich rendern. `StudyExams.validateExam` meldete keine Fehler. Die vorhandenen Grammatikmarkierungen wurden vom Annotationsrenderer verarbeitet.
- Die Inhaltsrauchtests prüfen Abschnittsreihenfolge, Lerntextlängen, Vokabelangaben, eindeutige IDs, passende Lösungen, Prüfungstexte, Punkteverteilung, Annotationen und Curriculumeintrag.
- Die vollständige Projektrauchtestsuite bestand mit **27 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/a2/chapter-19.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-19-Inhaltsprüfungen und aktualisierte Manifest-/Modulzählung.
- `progress/chapters.json` — Status nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-19.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 19.

## Nächste offene Einheit

Die erste noch offene geplante Einheit im Fortschrittsmanifest ist **Cumulative Test A1.1 — Chapters 01–03**. In der A2-Sequenz ist außerdem **Cumulative Test A2.3 — Chapters 11–18** nach Kapitel 18 weiterhin fällig. Diese Ausführung erstellt ausschließlich Kapitel 19; beide Prüfungen bleiben offen.
