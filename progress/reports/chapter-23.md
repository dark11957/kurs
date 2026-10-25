# Kapitel 23 — Abschlussbericht

## Kapitel und Status

- **Titel:** Konjunktiv II: Wünsche, Ratschläge und Möglichkeiten
- **Niveau:** B1
- **Status:** Abgeschlossen nach Inhalts-, Schema- und Renderprüfung
- **Inhaltsmodul:** `content/b1/chapter-23.js`

## Grammatikthemen

Elf vollständige Regelblöcke behandeln die Funktion des Konjunktiv II, **würde + Infinitiv**, **hätte/wäre**, die Modalformen **könnte, müsste, dürfte, sollte, wollte, möchte**, häufige starke Formen, höfliche Bitten und Fragen, Wünsche, irreale Situationen und Bedingungen, Satzstellung mit und ohne **wenn**, Ratschläge sowie **als ob**. Übersichts- und Konjugationstabellen zeigen Personalformen, Modalformen und häufige starke Verben. Jeder Regelblock enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei direkte Übungen.

Die Originalreferenzen **183–203, 713 und 716–723** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg umfasst 161 Wörter und knüpft an die gemeinsame Arbeit von Houssem und Tassnim an. Sie sprechen über Weiterbildung, eine Lernwerkstatt und realistische nächste Schritte.
- Zwei unterschiedliche B1-Lerntexte: ein Gespräch über persönliche und berufliche Pläne (302 Wörter) sowie eine formelle E-Mail zur Weiterbildung (250 Wörter). Beide enthalten Verständnisfragen, Sprachbeobachtung und Textvergleich.
- Fünf Grammatikmarkierungen im ersten Lesetext heben Wunsch-, Modal-, Bedingungs- und **als-ob**-Formen hervor.
- **30 Vokabeleinträge** zu Wünschen, Beruf, Finanzierung und Zukunft. Nomen haben Artikel und Pluralangaben; Verben haben relevante Formen; alle Einträge enthalten Übersetzung und Beispielsatz.
- Wortfamilien, Redemittel, Synonyme/Gegenteile, Kontextbeispiele und Wiederholungswortschatz ergänzen die Vokabelliste.
- Alltagsteil mit Dialog, höflichen Redemitteln, Beratungsszenario, 80–100-Wörter-Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **97 eindeutig identifizierte Aufgaben** einschließlich Prüfung; der Lösungsteil enthält Antworten, Mustertexte oder Bewertungshinweise.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (187 und 167 Wörter), nicht aus den Lerntexten übernommen.
- **27 Prüfungsfragen:** zehn Lesen, fünf Wortschatz, sieben Grammatik, zwei Satzbau und drei manuell bewertete Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 74, 83 und 107 Wörter und erfüllen die B1-Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Schreibaufgaben werden nicht automatisch bewertet und enthalten Kriterien.

## Integration und Validierung

- Kapitel 23 ist im bestehenden Schema als `chapter-23` registriert und wird über `content/b1/chapter-23.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Alle fünf Markierungen wurden verarbeitet; `StudyExams.validateExam` meldete keine Fehler.
- Inhaltsprüfungen verifizieren Referenzen, Textlängen, Vokabelangaben, elf vollständige Regelblöcke, eindeutige Aufgaben-IDs, vollständigen Lösungsschlüssel, neue Prüfungstexte, B1-Schreibwortzahlen und exakte Punkteverteilung.
- Die vollständige Projektrauchtestsuite bestand mit **31 Prüfungen**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-23.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-23-Inhalts-, Sprach-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 23 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-23.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 23.

## Nächste offene geplante Einheit

Nach Kapitel 23 ist **Cumulative Test B1.1 — Chapters 21–23** eingeplant und weiterhin offen. Auch frühere geplante Prüfungen (**Cumulative Test A1.1**, **Cumulative Test A2.3** und die **A2-Finalprüfung**) sind im Manifest noch ausstehend. Diese Ausführung erstellt ausschließlich Kapitel 23; keine Prüfung wurde verändert.
