# Kapitel 28 — Abschlussbericht

## Kapitel und Status

- **Titel:** Indirekte Rede, Modalpartikeln und sprachlicher Ausdruck
- **Niveau:** B1
- **Status:** Nach Inhalts-, Schema- und Renderprüfung abgeschlossen
- **Inhaltsmodul:** `content/b1/chapter-28.js`

## Grammatikthemen

Fünfzehn vollständige Regelblöcke behandeln direkte Rede und Zeichensetzung; indirekte Aussagen mit **dass**; Ja-/Nein-Fragen mit **ob**; W-Fragen; das Wiedergeben von Aussagen, Fragen und Bitten; Formen des Konjunktivs I; Indikativ und Konjunktiv I in der indirekten Rede; Modalpartikeln **doch, ja, mal, denn, eigentlich, eben, halt** und **wohl**; Fokus- und Gradpartikeln; natürliche Gesprächsausdrücke; Partikeln in berichteter Rede; Rückfragen und Klärung von Missverständnissen; Registerwahl; Antwortpartikeln **ja, nein, doch**; sowie höfliche Bitten mit **bitte**, **mal** und **doch**. Jeder Regelblock enthält Erklärung, Struktur, Beispiele, Besonderheiten, häufige Fehler, Merktipp und drei Miniübungen.

Die Originalreferenzen **731–757** sind in den Kapitelmetadaten erhalten.

## Lernmaterial

- Alle neun Pflichtabschnitte stehen in der festgelegten Reihenfolge.
- Der Einstieg umfasst 161 Wörter und führt Houssem und Tassnim bei der Klärung einer unklaren Aussage und einer missverstandenen Uhrzeit ein.
- Zwei eigenständige B1-Lerntexte: ein Bürogespräch (319 Wörter) und eine E-Mail (256 Wörter). Sie enthalten passende Verständnisfragen, Textvergleich und drei präzise Grammatikmarkierungen.
- **30 Vokabeleinträge** zu Gesprächen, Aussagen, Missverständnissen und Kommunikation; Nomen enthalten Artikel und Plural, Verben wichtige Formen und alle Einträge Beispielsätze.
- Redemittel, Wortfamilien, Synonyme und Gegenteile, Kontextbeispiele sowie Wiederholungswortschatz ergänzen die Sammlung.
- Übungen umfassen Erkennen, Ergänzen, Umformen, Satzbau, Übersetzen, Fehlerkorrektur, Dialogergänzung, kreative Fortsetzung, Rückfragen und gemischte Anwendung.
- Alltagsteil mit vollständigem Dialog, Redemitteln, Situationsaufgabe, Schreibtraining, Sprechimpulsen und Mini-Projekt.
- **117 eindeutig identifizierte Aufgaben insgesamt**, einschließlich Prüfung. Alle haben einen Lösungsschlüssel, eine Musterantwort oder passende Bewertungshinweise.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (187 und 224 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen** mit Lesetexten, Wortschatz, Grammatik, Satzbau und drei manuell bewerteten Schreibaufgaben (5/7/8 Punkte).
- Die Schreibmuster umfassen 61, 92 und 112 Wörter und erfüllen die B1-Zielbereiche 60–80, 80–100 und 100–140 Wörter.
- Freie Schreib- und Satzbauaufgaben werden nicht automatisch bewertet; Musterlösungen und Bewertungskriterien sind enthalten.

## Integration und Validierung

- Kapitel 28 ist in `content/curriculum.js` mit deutschem Titel registriert und wird über `content/b1/chapter-28.js` geladen.
- Der Produktionsrenderer gab alle neun Abschnitte aus. Die drei Grammatikmarkierungen wurden erzeugt; `StudyExams.validateExam` meldete keine Fehler.
- Der Inhaltsaudit bestätigte 117 eindeutige Aufgaben, vollständige Lösungsschlüssel, 15 Regelblöcke mit jeweils drei Miniübungen, gültige Multiple-Choice-Indizes und die vollständige 100-Punkte-Verteilung.
- Die Projektrauchtestsuite bestand mit **36 Tests**. `git diff --check` bestand.

## Geänderte Dateien

- `content/b1/chapter-28.js` — vollständiger Kapitelinhalt im etablierten Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Kapitel-28-Inhalts-, Schema-, Lösungs- und Prüfungsprüfungen; Manifestprüfung erweitert.
- `progress/chapters.json` — Kapitel 28 nach erfolgreicher Validierung auf `completed` gesetzt.
- `progress/reports/chapter-28.md` — dieser Bericht.

## Offene Punkte

Keine bekannten kritischen Inhalts-, Schema-, Integrations- oder Prüfungsfehler für Kapitel 28.

## Weitere geplante Einheiten

Die kumulativen Prüfungen **B1.1 — Kapitel 21–23** und **B1.2 — Kapitel 24–26** stehen noch auf `pending`. **B1.3 — Kapitel 27–29** ist nach Kapitel 29 eingeplant. Diese Ausführung erstellt ausschließlich Kapitel 28 und ändert keine Prüfung.
