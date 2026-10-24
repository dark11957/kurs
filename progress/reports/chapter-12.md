# Kapitel 12 — Abschlussbericht

## Kapitel und Status

- **Titel:** Reflexive Verben und persönliche Beziehungen
- **Niveau:** A2
- **Status:** Abgeschlossen
- **Curriculum-Eintrag:** `chapter-12`, als A2-Kapitel beim bestehenden Loader registriert.

## Grammatikthemen

- Reflexivpronomen im Akkusativ und Dativ mit vollständiger Personentabelle.
- Echte und fakultativ reflexive Verben sowie reflexive/nicht reflexive Bedeutungen.
- Reflexive Verben mit festen Präpositionen und Akkusativ: **sich interessieren für, sich freuen auf/über, sich erinnern an, sich kümmern um**.
- Reflexive Verben im Präsens und Perfekt, einschließlich Partizipbildung und **haben**.
- Reflexive Verben mit Modalverben, Infinitivstellung und Perfekt mit Ersatzinfinitiv.
- Stellung des Reflexivpronomens im Hauptsatz, Perfekt, Modalverbsatz und Nebensatz.
- Gegenseitige Handlungen mit **einander** und **sich gegenseitig**, unterschieden von Handlungen auf sich selbst.

**Originale Grammatikreferenzen:** 66–68, 76, 109–112 und 600–609.

Sieben ausgearbeitete Regeln enthalten Erklärungen, Satzmuster, Beispiele, Besonderheiten, typische Fehler, Merktipps und jeweils drei Mini-Übungen. Tabellen und Vergleiche behandeln Pronomen, Kasus, feste Präpositionen, Zeitformen und gegenseitige Bedeutung.

## Lernmaterial und Prüfung

- Einstiegstext mit **102 Wörtern** und zwei vollständige A2-Lerntexte (167 und 150 Wörter): ein gemeinsamer Samstag von Houssem und Tassnim sowie eine Nachricht von Tassnim.
- Zehn Leseverständnisfragen und vier Sprachbeobachtungsaufgaben. Grammatikmarkierungen sind an die vollständige Lesetextpassage gebunden und verwenden überprüfte Textspannen.
- **25** thematische Vokabeleinträge mit englischer Übersetzung, Wortart, Artikeln und Pluralen bei Nomen, relevanten Verbformen und Beispielsätzen.
- Wortfamilien, Synonyme und Gegenteile, Redemittel, Kontextbeispiele und fünf Wortschatzübungen.
- Dialog, Alltagssituation, geführtes Schreiben, Sprechimpulse und ein praktisches Mini-Projekt.
- **67** Lern- und Übungsaufgaben sowie **19** Prüfungsfragen (**86** eindeutige IDs insgesamt) mit vollständigem Lösungsschlüssel. Offene Aufgaben besitzen Musterantworten und Bewertungshinweise.
- Kapitelprüfung mit **100 Punkten**: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10 und Schreiben 20.
- Zwei neue Prüfungstexte sowie drei A2-Schreibaufgaben mit Musterantworten und manuellen Bewertungskriterien.

Die Texte, Erklärungen, Übungen, Prüfung und Lernkontrolle sind deutschsprachig. Englisch erscheint in Vokabelübersetzungen und ausdrücklich gekennzeichneten Übersetzungsübungen.

## Geänderte Dateien

- `content/a2/chapter-12.js` — vollständiges Kapitel im bestehenden Inhaltsschema.
- `content/curriculum.js` — deutscher Titel und Registrierung beim vorhandenen Loader.
- `tests/smoke.py` — Struktur-, Sprach-, Referenz-, Lösungsschlüssel-, Wortzahl-, Annotations- und Prüfungstests für Kapitel 12; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 12 als abgeschlossen markiert; Assessments bleiben ausstehend.
- `progress/reports/chapter-12.md` — dieser Bericht.

## Validierung

- Neun Abschnitte in der richtigen Reihenfolge, A2-Metadaten und Originalreferenzen geprüft.
- 25 Vokabeleinträge, sieben vollständige Regeln und 86 eindeutige Übungs- und Prüfungs-IDs geprüft.
- Antwortschlüssel enthält **86 von 86** Lösungen; Auswahlindizes, offene Musterantworten und einfeldige Lückentextfragen geprüft.
- Beide neuen Prüfungstexte unterscheiden sich von den Lerntexten. Die Punkte summieren sich exakt auf 100 und stimmen mit der vorgeschriebenen Verteilung überein.
- Deutsche Aufgabenformulierungen, A2-Leselängen und Grammatikannotationsspannen geprüft.
- GJS-Lauf mit dem Produktionsrenderer: alle neun Abschnitte gerendert; `StudyExams.validateExam` meldet keine Fehler.
- Projektrauchtestsuite: **17 Tests bestanden**.
- Kasusbeispiele und Modalverb-Perfekt anhand von IDS Grammis gegengeprüft: [Reflexivpronomen und reflexive Lesart](https://grammis.ids-mannheim.de/progr%40mm/5205), [Akkusativ- und Dativbeispiele](https://grammis.ids-mannheim.de/progr%40mm/6736), [Ersatzinfinitiv bei Modalverben](https://grammis.ids-mannheim.de/fragen/99).

## Offene Punkte

Keine bekannten inhaltlichen oder technischen Probleme in Kapitel 12.

## Nächste ausstehende Einheit

Der früheste offene Assessment-Eintrag im Manifest ist weiterhin **Cumulative Test A1.1**; auch A1.2, A1.3 und die A1-Abschlussprüfung sind ausstehend. Im A2-Plan folgt nach Kapitel 12 **Cumulative Test A2.1**. Der Assessment-Auftrag wurde in dieser Ausführung nicht erstellt.
