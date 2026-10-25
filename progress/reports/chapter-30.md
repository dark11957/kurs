# Kapitel 30 — Selbstständige Kommunikation und schriftlicher Ausdruck

## Kapitel und Status

- **Niveau:** B1
- **Status:** Nach Inhalts-, Schema- und Renderprüfung abgeschlossen
- **Inhaltsmodul:** `content/b1/chapter-30.js`
- **Lernziel:** Vertraute Grammatik selbstständig in zusammenhängenden Texten und realistischen Kommunikationssituationen verbinden.

## Grammatikthemen

Fünfzehn vollständige Integrationsblöcke behandeln:

1. Alle vier Fälle und Verb-/Präpositionsrektion.
2. Zeitformen und zeitliche Reihenfolge.
3. Satzumformungen ohne Bedeutungsänderung.
4. Relativsätze in längeren Texten.
5. Vorgangs- und Zustandspassiv in mehreren Zeiten sowie mit Modalverben.
6. Konjunktiv II für höfliche Bitten, Ratschläge und Bedingungen.
7. Nebenordnende und unterordnende Konnektoren sowie Konjunktionaladverbien.
8. Zu-Infinitiv, um … zu, damit, ohne … zu und statt … zu.
9. Komplexe Wortstellung, Satzklammer und TEKAMOLO.
10. Funktionale Sprache für Rückfragen, Vorschläge, Zustimmung und Widerspruch.
11. Aufbau und Register formeller und informeller Nachrichten.
12. Meinungen begründen und Argumente ordnen.
13. Vor- und Nachteile sachlich abwägen.
14. Häufige Grammatikfehler erkennen und korrigieren.
15. Großschreibung, ss/ß, Kommasetzung und Zeichensetzung bei direkter Rede.

Jeder Block enthält eine Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei Miniübungen. Tabellen fassen Fälle, Pronomen, Zeitformen, Relativpronomen, Passivformen, Satzarten und Zeichensetzung zusammen.

Die Kapiteldefinition sieht eine integrierte Wiederholung der Referenzen **1–776** vor, mit besonderem Fokus auf **708–730** und **758–776**. Die 42 fokussierten Originalreferenzen sind im Metadatenfeld erhalten; die vollständigen Bezugsbereiche stehen ebenfalls im Modul.

## Lernmaterial

- Alle neun Pflichtabschnitte sind in der festgelegten Reihenfolge vorhanden.
- Der Einstieg umfasst **163 Wörter**.
- Zwei neue B1-Lerntexte: eine persönliche Erzählung über eine berufliche und gemeinsame Zukunftsentscheidung (**289 Wörter**) und eine formelle E-Mail (**252 Wörter**). Der Erzähltext enthält drei überprüfte, interaktive Grammatikmarkierungen.
- **30 Vokabeleinträge** mit Übersetzungen, Kategorien, Beispielen und relevanten Formen; Nomen enthalten Artikel und Pluralangabe.
- Wortfamilien, Synonyme und Gegenteile, nützliche Ausdrücke, Kontextbeispiele und Wortschatzwiederholung sind enthalten.
- **102 Lern- und Wiederholungsaufgaben:** 45 Miniübungen, 30 gemischte Aktivitäten, 14 Lese-/Sprachbeobachtungsfragen, 5 Wortschatzübungen, 5 Grammatikchecks und 3 Abschluss-Wiederholungsaufgaben.
- Alltagsteil mit vollständig ausgearbeitetem Dialog, Redemitteln, Entscheidungsszenario, formeller Schreibaufgabe, vier Sprechimpulsen und Mini-Projekt.

## Kapitelprüfung

- **100 Punkte:** Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei neue Prüfungstexte (253 und 258 Wörter), unabhängig von den Lerntexten.
- **27 Prüfungsfragen** mit eindeutigen Lösungen oder Musterantworten.
- Drei manuell zu bewertende Schreibaufgaben mit 5/7/8 Punkten. Mustertexte umfassen **67, 83 und 111 Wörter** und liegen in den B1-Zielbereichen.
- Lösungen und Bewertungshinweise decken alle **129** Lern-, Wiederholungs- und Prüfungsfragen ab.

## Integration und Validierung

- Kapitel 30 wurde unter `content/b1/chapter-30.js` angelegt und in `content/curriculum.js` beim Titel **Selbstständige Kommunikation und schriftlicher Ausdruck** registriert.
- Geprüft wurden neun Abschnitts-IDs, 15 Regelblöcke, 30 Vokabeleinträge, 129 eindeutige Frage-IDs und vollständige Lösungsschlüssel.
- Beide Lerntexte und beide Prüfungstexte erfüllen die B1-Längenvorgabe. Schreibmuster und Punktverteilung wurden geprüft.
- Der bestehende GJS-Renderer hat alle neun Abschnitte dargestellt; `StudyExams.validateExam` meldete keine Fehler; drei Grammatikmarkierungen wurden gerendert.
- `PYTHONDONTWRITEBYTECODE=1 python3 tests/smoke.py`: **38 Tests bestanden**.
- `git diff --check`: bestanden.

## Geänderte Dateien

- `content/b1/chapter-30.js` — vollständiger Inhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Titel und Loader-Registrierung.
- `tests/smoke.py` — Inhalts-, Sprach-, Lösungs-, Referenz- und Prüfungsprüfungen für Kapitel 30.
- `progress/chapters.json` — Status und Berichtsverweis.
- `progress/reports/chapter-30.md` — dieser Bericht.

## Offene Punkte und nächste geplante Einheit

Keine bekannten kritischen Inhalts-, Integrations- oder Prüfungsfehler für Kapitel 30. Die kumulativen Prüfungen **B1.1**, **B1.2** und **B1.3** sowie die **B1-Abschlussprüfung** stehen weiterhin auf `pending`; sie wurden in dieser Ausführung nicht verändert. Die nächste offene Einheit in der bisherigen Manifestreihenfolge ist **B1.1 — cumulative assessment (`test-b1-1`)**.
