# Kapitel 07 — Abschlussbericht

## Kapitel und Status

- **Titel:** Zeit, Zahlen und Tagesabläufe
- **Niveau:** A1
- **Status:** Abgeschlossen

## Grammatikthemen

- Kardinalzahlen bis 100, Zahlbildung von 21 bis 99 sowie einfache Brüche, Dezimalzahlen, Prozentangaben und Rechnungen.
- Ordinalzahlen, Datumsformen und das Lesen geschriebener Datumsangaben.
- Offizielle und alltägliche Uhrzeiten.
- Wochentage, Tageszeiten, Monate und Jahreszeiten.
- Temporale Präpositionen: am, um, im, seit, vor, nach, ab, bis, von … bis, in, während und für.
- Temporal- und Häufigkeitsadverbien sowie die Stellung des Verbs bei einer Zeitangabe am Satzanfang.
- Mengen und Zählbarkeit: viel/viele, wenig/wenige, etwas/einige, ein bisschen/ein paar, jeder/alle/beide, genug und zu viel/zu viele.
- Häufige Maßangaben mit Stunden und Minuten.

Acht ausführliche Regelblöcke enthalten Erklärungen, Strukturen, Beispiele, Besonderheiten, typische Fehler, Merktipps und je drei Mini-Übungen. Tabellen zeigen Zahlen, Ordinalformen, Kalenderangaben, Zeitpräpositionen, Brüche und Mengenformen.

**Originale Grammatikreferenzen:** 551–570, 581–599, 529–530, 545–548.

## Lernmaterial

- Ein eigenständiger Einstiegstext und zwei vollständige Lesetexte: ein Wochenplan und eine Nachricht mit Besprechungszeiten.
- Zwei neue Prüfungstexte, die nicht aus den Lerntexten übernommen wurden.
- 20 thematische Vokabeleinträge mit Übersetzung, Wortart, Artikel und Plural bei Nomen sowie Beispielsatz.
- 78 Übungsfragen und 21 Prüfungsfragen: **99 eindeutige Aufgaben-IDs**, alle mit Lösung oder Musterantwort.
- Eine Kapitelprüfung mit genau 100 Punkten: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10 und Schreiben 20.
- Alltagsdialog, Redemittel, Terminplanungssituation, geführtes Schreiben, Sprechimpulse und Wochenplan-Projekt.
- Drei Prüfungs-Schreibaufgaben mit Musterantworten und Bewertungskriterien.
- Fünf überprüfte Grammatikmarkierungen zu Zeitangaben im Lesetext A.

## Geänderte Dateien

- `content/a1/chapter-07.js` — vollständiger Kapitelinhalt im bestehenden Schema.
- `content/curriculum.js` — deutscher Kapiteltitel und Registrierung beim bestehenden Loader.
- `tests/smoke.py` — Prüfungen für Inhalt, Antworten, Sprachniveau, Annotationen und Prüfungspunkte.
- `progress/chapters.json` — Kapitel 07 als abgeschlossen markiert.
- `progress/reports/chapter-07.md` — dieser Bericht.

## Validierung

- Der fokussierte Python-Inhaltstest bestätigt neun Abschnitte in der richtigen Reihenfolge, alle Referenzen, 20 Vokabeleinträge, acht vollständige Grammatikregeln, 99 eindeutige Aufgaben und den vollständigen Lösungsschlüssel.
- Prüfungspunktzahl und Verteilung stimmen exakt; die zwei Prüfungslesetexte unterscheiden sich von den Lerntexten.
- Datums- und Textlängenprüfungen sowie deutsche Aufgabenformulierungen und Markierungsbereiche wurden kontrolliert.
- Der GJS-Test mit dem Produktionsrenderer hat alle neun Abschnitte gerendert; der Produktions-Prüfungsvalidator meldet keine Fehler.
- Die vollständige Projektrauchtest-Suite wurde nach der Integration ausgeführt.

## Offene Punkte

Keine bekannten Probleme in Kapitel 07.

Die geplanten kumulativen Prüfungen bleiben offen und wurden in diesem Kapitelauftrag nicht erstellt.

## Nächste ausstehende Einheit

Die früheste noch offene Einheit im Manifest ist **Cumulative Test A1.1** (nach Kapitel 03). Auch **Cumulative Test A1.2** nach Kapitel 06 ist weiterhin ausstehend.
