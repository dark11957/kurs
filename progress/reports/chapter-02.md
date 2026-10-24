# Kapitel 02 — Abschlussbericht

**Titel:** *Präsens: Verben, Konjugation und Fragen*  
**Niveau:** A1  
**Status:** Abgeschlossen und im Lehrplan registriert

## Lerninhalte

Alle neun Kapitelabschnitte sind mit Lernmaterial gefüllt. Die Lernenden-Texte, Aufgaben, Rückmeldungen und Prüfung sind auf Deutsch; englische Bedeutungen erscheinen in Wortschatzhilfen und einzelnen Grammatikbezeichnungen.

**Grammatikthemen:**

- Infinitiv, Verbstamm und Personalendungen
- Regelmäßige und unregelmäßige Verben im Präsens
- Häufige Stammwechsel, darunter e → i, e → ie und a → ä
- Präsenskonjugation und Übereinstimmung von Subjekt und Verb
- Verbzweitstellung im Aussagesatz und Inversion nach einer Zeitangabe
- Ja-/Nein-Fragen mit Verb an erster Stelle
- W-Fragen mit Fragewort und Verb
- Satzstellung in Aussagen und Fragen im Vergleich

**Originalreferenzen:** 88–104, 127–129, 290–296, 324–339 und 708–711.

## Texte und Wortschatz

- Einstiegstext sowie zwei neue Lesetexte: „Eine Pause im Büro“ und „Eine Nachricht von Tassnim“.
- Zwei neue Prüfungstexte: „Ein Morgen im Stadtpark“ und „Nachricht von Karim“.
- 18 neue aktive Wortschatzeinträge mit Übersetzung, Wortart, nötigen Verbformen beziehungsweise Artikel und Plural sowie Beispielsatz.
- Nützliche Redemittel, Wortfamilien, Synonyme und Gegenteile sowie Wortschatzübungen.
- Grammatikmarkierungen für ausgewählte Verbformen im Lesetext; die geprüften Zeichenbereiche stimmen mit dem Text überein.

## Übungen und Prüfung

- 80 eindeutige Lern- und Prüfungsaufgaben mit stabilen IDs und Antwortschlüsseln beziehungsweise Musterantworten.
- Acht ausführliche Grammatikregeln; jede enthält Erklärung, Struktur, Beispiele, Besonderheiten, typische Fehler, Merktipp und drei Mini-Übungen.
- Übungen zu Erkennen, Ergänzen, Umformen, Satzbau, Übersetzung, Fehlerkorrektur, Dialog, kreativem Schreiben und gemischter Anwendung.
- Kapitelprüfung mit 21 Fragen und genau 100 Punkten: Lesen 20, Wortschatz 15, Grammatik 35, Satzbau 10, Schreiben 20.
- Zwei Satzbauaufgaben und drei Schreibaufgaben werden manuell bewertet. Musterantworten und aufgabenspezifische Kriterien sind enthalten.
- Alle 80 Aufgaben sind im Lösungsteil verzeichnet; offene Aufgaben enthalten Musterantworten und Bewertungshinweise.

## Integration und Validierung

- Das Kapitelmodul ist unter `content/a1/chapter-02.js` registriert und wird vom vorhandenen Loader über die neun bestehenden Abschnitts-IDs geladen.
- Der Lehrplaneintrag verwendet den deutschen Kapiteltitel. Layout und Gestaltungssystem wurden nicht geändert.
- `python3 tests/smoke.py`: alle sieben Prüfungen bestanden.
- Inhaltsprüfung: Abschnittsreihenfolge, Referenznummern, 18 Wörter, 80 eindeutige IDs, Antworten, Annotationen, neue Prüfungstexte und Punkteverteilung geprüft.
- GJS: zwölf JavaScript-Dateien syntaktisch geprüft; das Kapitelskript wurde außerdem ausgeführt und registrierte neun Abschnitte sowie 80 Lösungseinträge.
- Kein vollständiger Browser-Interaktionstest in dieser Umgebung.

## Geänderte Dateien

- `content/a1/chapter-02.js`
- `content/curriculum.js`
- `progress/chapters.json`
- `progress/reports/chapter-02.md`
- `tests/smoke.py`

**Verbleibende Probleme:** Keine bekannten Inhalts- oder Integrationsfehler.  
**Nächste ausstehende Einheit:** Kapitel 03 — *Akkusativ, Negation und Possessivartikel*.
