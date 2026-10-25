# Kapitel 20 — Abschlussbericht

## Kapitel und Status

- **Titel:** Zusammenhängend sprechen und schreiben
- **Niveau:** A2
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/a2/chapter-20.js`

## Grammatikthemen

Zwölf ausführliche Regelblöcke behandeln neben- und unterordnende Konjunktionen, Verbendstellung im Nebensatz, Konjunktionaladverbien mit Verbzweitstellung, parallele zweiteilige Verbindungen, *entweder … oder*, *weder … noch*, *sowohl … als auch*, *nicht nur … sondern auch*, *zwar … aber*, *einerseits … andererseits*, verbundene Präsens- und Vergangenheitsformen, TEKAMOLO und Informationsreihenfolge, integrierte Grammatik sowie private und formelle E-Mails. Die Erklärungen, Beispiele und Tabellen führen außerdem Vergleiche, Gründe, Folgen, Ziele und Bedingungen zusammen. Jeder Regelblock enthält eine Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei direkte Übungen.

Die Originalreferenzen **297–323, 367–426, 392–398, 529–550 und 693–707** sind in den Kapitelmetadaten erhalten. Die ergänzenden Referenzen 392–398 sind absichtlich ebenfalls aufgeführt, wie in der Kapiteldefinition.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge vorhanden.
- Der Einstieg umfasst 115 Wörter.
- Zwei neue Lerntexte: „Ein Abend mit Plan B“ (243 Wörter) und eine E-Mail an die Gäste (152 Wörter). Verständnis-, Vergleichs- und Sprachbeobachtungsaufgaben begleiten die Texte.
- Fünf gezielte Grammatikmarkierungen beziehen sich auf den vollständigen Datensatz des Lesetextes und funktionieren mit dem bestehenden Renderer.
- **28 Vokabeleinträge** zu Reisen, sozialen Aktivitäten, Meinungen, Einladungen, Problemen und Korrespondenz; Nomen haben Artikel und Pluralangaben, Verben relevante Formen und alle Einträge Beispielsätze.
- Ausdrücke und Wiederholungswortschatz, Wortfamilien, Synonyme/Gegenteile, Kontextbeispiele, Übersichts- und Vergleichstabellen ergänzen die Wortliste.
- Alltagsteil mit Houssem und Tassnim, Dialog, realistischem Planszenario, 40–60-Wörter-Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **109 eindeutig identifizierte Aufgaben** einschließlich Prüfung; der Lösungsteil enthält für jede Aufgabe die Lösung oder Musterantwort sowie manuelle Bewertungshinweise für Schreibaufgaben.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (185 und 160 Wörter), nicht aus den Lerntexten übernommen.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell zu bewertende Schreibaufgaben (5/7/8 Punkte).
- Die Mustertexte umfassen 47, 63 und 82 Wörter und entsprechen den A2-Vorgaben. Die Prüfungsvalidierung meldet keine Fehler.

## Integration und Validierung

- Das Kapitel verwendet das etablierte Schema und ist mit deutschem Titel in `content/curriculum.js` registriert.
- Der Produktionsrenderer hat alle neun Abschnitte ausgegeben. Die fünf Annotationsmarkierungen wurden vom vorhandenen Annotationsrenderer verarbeitet; `StudyExams.validateExam` meldete keine Fehler.
- Inhaltsprüfungen kontrollieren Wortzahlen, Vokabelangaben, alle zwölf Regelblöcke, eindeutige IDs, vollständige Lösungsschlüssel, Prüfungstexte, Punktverteilung, Schreibwortzahlen, Annotationen und Loader-Registrierung.
- Die vollständige Projektrauchtestsuite bestand mit **28 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/a2/chapter-20.js` — vollständiger Kapitelinhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Loader-Registrierung.
- `tests/smoke.py` — Inhalts-, Struktur-, Sprach-, Lösungs- und Prüfungsprüfungen für Kapitel 20; aktualisierte Kapitelzählung.
- `progress/chapters.json` — Status nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-20.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 20.

## Nächste offene Einheit

Die erste noch offene geplante Einheit im Fortschrittsmanifest ist **Cumulative Test A1.1 — Chapters 01–03**. Die nach Kapitel 18 fällige **Cumulative Test A2.3 — Chapters 16–18** und die **A2-Finalprüfung nach Kapitel 20** sind ebenfalls noch nicht erstellt. Diese Ausführung erstellt ausschließlich Kapitel 20; alle Prüfungen bleiben offen.
