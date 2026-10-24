# Kapitel 08 — Abschlussbericht

## Kapitel und Status

- **Titel:** Trennbare Verben und der Imperativ
- **Niveau:** A1
- **Status:** Abgeschlossen

## Grammatikthemen

- Trennbare und untrennbare Verben sowie häufige Vorsilben.
- Bedeutungsänderungen durch Vorsilben; betonte und unbetonte Verbteile, einschließlich `übersetzen` / `über|setzen`.
- Satzklammer und Verbposition in Aussagen sowie Ja/Nein- und W-Fragen mit trennbaren Verben.
- Imperativ mit **du**, **ihr**, **Sie** und **wir**, einschließlich reflexiver Imperative.
- Häufige unregelmäßige Formen: **Gib, Lies, Nimm, Fahr, Sei** und passende Plural-/Höflichkeitsformen.
- Negative Aufforderungen mit **nicht** und **kein** sowie direkte und höfliche beziehungsweise indirekte Bitten.

Acht ausführliche Regelblöcke enthalten deutsche Erklärungen, Strukturen, Beispiele, Besonderheiten, typische Fehler, Merktipps und mindestens drei unmittelbare Übungsfragen. Vier Tabellen behandeln Vorsilben, Imperativbildung, unregelmäßige Formen und reflexive Imperative.

**Originale Grammatikreferenzen:** 106–108, 126, 204–213, 299, 667–669, 713–715.

## Lernmaterial

- Ein eigener Einstiegstext und zwei vollständige Lesetexte: eine Geschichte zur Organisation eines Nachbarschaftsfests und eine Nachricht mit praktischen Hinweisen.
- Zwei neue Prüfungstexte, getrennt von den Lerntexten.
- **20** thematische Vokabeleinträge mit Übersetzung, Wortart, Nomenartikel und Plural sowie Verbformen und Beispielsätzen.
- **76** Lern- und Übungsfragen sowie **25** Prüfungsfragen: insgesamt **101 eindeutige Aufgaben-IDs**, alle mit Lösung, Musterantwort oder Bewertungshinweis.
- Acht Grammatikregeln mit 25 Mini-Übungen, ein Alltagsdialog, Redemittel, Situationsaufgabe, Schreib- und Sprechtraining sowie Mini-Projekt.
- Eine Kapitelprüfung mit genau **100 Punkten**: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10 und Schreiben 20.
- Drei Prüfungs-Schreibaufgaben mit Musterantworten und Bewertungskriterien.
- Vier gezielte Grammatikmarkierungen im Lesetext A.

Die Lerninhalte und Aufgabenformulierungen sind deutschsprachig. Englisch erscheint in den Wortschatzübersetzungen und ausdrücklich gekennzeichneten Übersetzungsaufgaben.

## Geänderte Dateien

- `content/a1/chapter-08.js` — Kapitelinhalt im bestehenden Produktionsschema.
- `content/curriculum.js` — deutscher Titel und Registrierung beim bestehenden Loader.
- `tests/smoke.py` — Kapitelprüfungen für Inhalt, Antwortschlüssel, Sprachvorgaben, Annotationen und Prüfungspunkte.
- `progress/chapters.json` — Kapitel 08 als abgeschlossen markiert.
- `progress/reports/chapter-08.md` — dieser Bericht.

## Validierung

- Der fokussierte Inhaltstest bestätigt neun Abschnitte in der festgelegten Reihenfolge, alle Grammatikreferenzen, 20 Vokabeleinträge, acht vollständige Grammatikregeln sowie 101 eindeutige Aufgaben mit passendem Lösungsschlüssel.
- Die Prüfung hat zwei neue Lesetexte; ihre Punkteverteilung und Summe stimmen exakt mit dem 100-Punkte-Schema überein.
- Deutsche Aufgabenformulierungen, Textlängen und Annotation-Spannen wurden kontrolliert.
- Der GJS-Lauf mit dem Produktionsrenderer hat alle neun Abschnitte gerendert; der Prüfungsvalidator meldet keine Fehler.
- Die vollständige Projektrauchtest-Suite wurde nach der Manifest-Aktualisierung ausgeführt.

## Offene Punkte

Keine bekannten inhaltlichen oder technischen Probleme in Kapitel 08.

Die geplanten kumulativen Prüfungen wurden nicht verändert.

## Nächste ausstehende Einheit

Laut Prüfungsplan ist die früheste noch ausstehende Einheit **Cumulative Test A1.1** (nach Kapitel 03). Danach bleibt **Cumulative Test A1.2** (nach Kapitel 06) ausstehend.
