(()=>{
const chapter = {
  "id": "chapter-02",
  "metadata": {
    "number": "02",
    "level": "A1",
    "title": "Präsens: Verben, Konjugation und Fragen",
    "subtitle": "Tagesabläufe beschreiben und einfache Fragen stellen",
    "vocabularyTheme": "Tagesabläufe, Aktivitäten, Hobbys und häufige Verben",
    "prerequisites": [
      "Kapitel 01: Nomen, Personalpronomen im Nominativ, einfache Aussagesätze sowie Präsensformen von sein und haben."
    ],
    "objectives": [
      "Du bildest Präsensformen regelmäßiger Verben mit dem passenden Stamm und der passenden Endung.",
      "Du verwendest häufige unregelmäßige und stammverändernde Verben im Präsens.",
      "Du stimmst das Verb mit dem Subjekt ab.",
      "Du bildest Aussagesätze mit dem Verb auf Position zwei und stellst das Subjekt nach einer vorangestellten Zeitangabe um.",
      "Du stellst Ja-/Nein-Fragen und W-Fragen mit der richtigen Verbposition.",
      "Du beschreibst einfache Tagesabläufe und fragst nach Aktivitäten und Hobbys."
    ],
    "grammarSubjects": [
      "Infinitive, Verbstämme und Endungen",
      "Regelmäßige und unregelmäßige Verben",
      "Stammverändernde Verben",
      "Präsenskonjugation",
      "Subjekt-Verb-Kongruenz",
      "Verbzweit- und Verberststellung",
      "W-Fragen und Ja-/Nein-Fragen",
      "Einfache Inversion"
    ],
    "grammarReferences": [
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      127,
      128,
      129,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      708,
      709,
      710,
      711
    ]
  },
  "sections": [
    {
      "id": "introduction",
      "title": "Einstieg",
      "description": "Entdecke, wie Verben deinen Tagesablauf ausdrücken und wie du nach Aktivitäten fragst.",
      "objectives": [
        "Regelmäßige Verben im Präsens bilden.",
        "Häufige Stammwechsel erkennen.",
        "Aussagen und Fragen unterscheiden.",
        "Über Routinen und Hobbys sprechen."
      ],
      "prerequisites": [
        "Du kennst ich, du, er/sie/es, wir, ihr und sie/Sie aus Kapitel 01.",
        "Du kennst einfache Aussagesätze und die Präsensformen von sein und haben."
      ],
      "reviewQuestions": [
        "Wie lautet die Verbform von sein bei ich?",
        "Ergänze: Houssem ____ Entwickler. (sein)",
        "Welches Wort steht im Satz „Heute arbeite ich“ an Position zwei?"
      ],
      "keywords": [
        {
          "word": "der Tagesablauf",
          "translation": "daily routine",
          "example": "Mein Tagesablauf beginnt um sieben Uhr."
        },
        {
          "word": "aufstehen",
          "translation": "to get up",
          "example": "Ich stehe früh auf."
        },
        {
          "word": "die Freizeit",
          "translation": "free time",
          "example": "In meiner Freizeit lese ich gern."
        },
        {
          "word": "das Verb",
          "translation": "verb",
          "example": "„Lernen“ ist ein Verb."
        },
        {
          "word": "die Frage",
          "translation": "question",
          "example": "Wie lautet deine Frage?"
        },
        {
          "word": "regelmäßig",
          "translation": "regular",
          "example": "„Lernen“ ist ein regelmäßiges Verb."
        }
      ],
      "openingText": "Houssem arbeitet am Vormittag am Computer. Um zwölf Uhr macht er eine Pause. Am Nachmittag spricht er mit Tassnim. Sie erzählt von ihrem Deutschkurs und ihren Hobbys. „Was machst du nach der Arbeit?“, fragt sie. Houssem antwortet: „Ich fahre nach Hause und lese gern.“ Tassnim geht gern zu Fuß. Houssem fährt mit dem Bus. Dann fragt er: „Spielst du auch ein Instrument?“",
      "discoveryQuestions": [
        "Welche Wörter im Text zeigen Tätigkeiten?",
        "Wie verändert sich „arbeiten“ bei ich und er?",
        "Was steht direkt nach „Was“ und „Spielst“?",
        "Warum heißt es „Am Nachmittag spricht er“?"
      ],
      "exercises": [
        {
          "id": "c02-intro-r1",
          "label": "Vorwissen · 1",
          "type": "fill-blank",
          "prompt": "Ergänze: Ich ____ heute zu Hause. (sein)",
          "answer": "bin",
          "points": 1,
          "explanation": "Die Präsensform von sein bei ich lautet bin."
        },
        {
          "id": "c02-intro-r2",
          "label": "Vorwissen · 2",
          "type": "fill-blank",
          "prompt": "Ergänze: Houssem ____ Entwickler. (sein)",
          "answer": "ist",
          "points": 1,
          "explanation": "Houssem steht für er; die Form lautet ist."
        },
        {
          "id": "c02-intro-r3",
          "label": "Vorwissen · 3",
          "type": "multiple-choice",
          "prompt": "Welches Satzglied steht im Satz „Heute arbeite ich“ an Position zwei?",
          "options": [
            "Heute",
            "arbeite",
            "ich"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Heute steht am Anfang; danach folgt das Verb arbeite."
        }
      ]
    },
    {
      "id": "reading",
      "title": "Lesen & Verstehen",
      "description": "Lies zwei Texte über Routinen, Interessen und Fragen im Alltag.",
      "texts": [
        {
          "id": "c02-reading-a",
          "title": "Lesetext A: Eine Pause im Büro",
          "format": "paragraph",
          "text": "Houssem beginnt um acht Uhr mit der Arbeit. Am Morgen prüft er neue Programme und schreibt Nachrichten an sein Team. Gegen zwölf Uhr macht er eine Pause. Er isst ein Sandwich und trinkt Wasser. Am Nachmittag arbeitet Tassnim oft mit ihm. Sie hilft Kolleginnen und Kollegen am Computer. Nach der Arbeit fährt Houssem mit dem Bus nach Hause. Tassnim geht gern zu Fuß. Am Abend liest Houssem manchmal ein Buch. Tassnim hört gern Musik und spielt Gitarre. Am Freitag sprechen sie über ihre Hobbys."
        },
        {
          "id": "c02-reading-b",
          "title": "Lesetext B: Eine Nachricht von Tassnim",
          "format": "email",
          "text": "Hallo Houssem,\n\nwie sieht dein Tag heute aus? Ich stehe um sieben Uhr auf und frühstücke zu Hause. Um halb neun fängt mein Kurs an. Wir lernen heute neue Wörter und sprechen viel Deutsch. Nach dem Kurs gehe ich mit meiner Schwester spazieren. Am Abend sehe ich einen Film oder telefoniere mit einer Freundin. Am Samstag besuche ich meine Eltern. Wir essen zusammen und sprechen über die Woche. Zu Hause lese ich noch ein Buch und schlafe gut. Was machst du nach der Arbeit? Schreib mir!\n\nViele Grüße\nTassnim"
        }
      ],
      "comprehension": [
        {
          "id": "c02-rd-a1",
          "label": "Text A · 1",
          "type": "multiple-choice",
          "prompt": "Wann beginnt Houssem mit der Arbeit?",
          "options": [
            "Um sieben Uhr.",
            "Um acht Uhr.",
            "Um neun Uhr."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Im Text steht: Houssem beginnt um acht Uhr mit der Arbeit."
        },
        {
          "id": "c02-rd-a2",
          "label": "Text A · 2",
          "type": "true-false",
          "prompt": "Tassnim fährt nach der Arbeit mit dem Bus nach Hause.",
          "answer": "false",
          "points": 1,
          "explanation": "Houssem fährt mit dem Bus. Tassnim geht gern zu Fuß."
        },
        {
          "id": "c02-rd-a3",
          "label": "Text A · 3",
          "type": "multiple-choice",
          "prompt": "Was macht Houssem manchmal am Abend?",
          "options": [
            "Er spielt Gitarre.",
            "Er liest ein Buch.",
            "Er geht spazieren."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Houssem liest manchmal ein Buch."
        },
        {
          "id": "c02-rd-a4",
          "label": "Text A · 4",
          "type": "fill-blank",
          "prompt": "Was machen Houssem und Tassnim am Freitag? Sie sprechen über ihre ____.",
          "answer": "Hobbys",
          "points": 1,
          "explanation": "Das letzte Satz nennt ihre Hobbys."
        },
        {
          "id": "c02-rd-b1",
          "label": "Text B · 1",
          "type": "multiple-choice",
          "prompt": "Wann steht Tassnim auf?",
          "options": [
            "Um sechs Uhr.",
            "Um sieben Uhr.",
            "Um halb neun."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Tassnim steht um sieben Uhr auf."
        },
        {
          "id": "c02-rd-b2",
          "label": "Text B · 2",
          "type": "true-false",
          "prompt": "Tassnims Kurs fängt um halb neun an.",
          "answer": "true",
          "points": 1,
          "explanation": "Das steht im Text."
        },
        {
          "id": "c02-rd-b3",
          "label": "Text B · 3",
          "type": "multiple-choice",
          "prompt": "Was macht Tassnim nach dem Kurs?",
          "options": [
            "Sie geht mit ihrer Schwester spazieren.",
            "Sie fährt zur Arbeit.",
            "Sie spielt Gitarre."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Nach dem Kurs geht sie mit ihrer Schwester spazieren."
        },
        {
          "id": "c02-rd-b4",
          "label": "Text B · 4",
          "type": "fill-blank",
          "prompt": "Was möchte Tassnim von Houssem wissen? Was er nach der ____ macht.",
          "answer": "Arbeit",
          "points": 1,
          "explanation": "Tassnim fragt: „Was machst du nach der Arbeit?“"
        }
      ],
      "annotations": [
        {
          "text": "Houssem beginnt um acht Uhr mit der Arbeit. Am Morgen prüft er neue Programme und schreibt Nachrichten an sein Team. Gegen zwölf Uhr macht er eine Pause. Er isst ein Sandwich und trinkt Wasser. Am Nachmittag arbeitet Tassnim oft mit ihm. Sie hilft Kolleginnen und Kollegen am Computer. Nach der Arbeit fährt Houssem mit dem Bus nach Hause. Tassnim geht gern zu Fuß. Am Abend liest Houssem manchmal ein Buch. Tassnim hört gern Musik und spielt Gitarre. Am Freitag sprechen sie über ihre Hobbys.",
          "marks": [
            {
              "start": 8,
              "end": 15,
              "category": "verb",
              "explanation": "beginnen: 3. Person Singular, er beginnt."
            },
            {
              "start": 54,
              "end": 59,
              "category": "verb",
              "explanation": "prüfen: 3. Person Singular, er prüft."
            },
            {
              "start": 133,
              "end": 138,
              "category": "verb",
              "explanation": "machen: 3. Person Singular, er macht."
            },
            {
              "start": 208,
              "end": 216,
              "category": "verb",
              "explanation": "arbeiten: 3. Person Singular mit zusätzlichem e."
            },
            {
              "start": 302,
              "end": 307,
              "category": "verb",
              "explanation": "fahren: Stammwechsel a → ä bei er."
            },
            {
              "start": 375,
              "end": 380,
              "category": "verb",
              "explanation": "lesen: Stammwechsel e → ie bei er."
            },
            {
              "start": 463,
              "end": 471,
              "category": "verb",
              "explanation": "sprechen: Infinitiv nach dem Subjekt sie im Plural."
            }
          ]
        }
      ]
    },
    {
      "id": "vocabulary",
      "title": "Wortschatz",
      "description": "Lerne wichtige Verben, Freizeitwörter und Angaben zur Häufigkeit.",
      "vocabulary": [
        {
          "id": "c02-v01",
          "word": "aufstehen",
          "translation": "to get up",
          "category": "Verb",
          "example": "Ich stehe um sieben Uhr auf.",
          "forms": "steht auf; stand auf"
        },
        {
          "id": "c02-v02",
          "word": "frühstücken",
          "translation": "to have breakfast",
          "category": "Verb",
          "example": "Wir frühstücken zu Hause.",
          "forms": "frühstückt; hat gefrühstückt"
        },
        {
          "id": "c02-v03",
          "word": "beginnen",
          "translation": "to begin",
          "category": "Verb",
          "example": "Der Kurs beginnt um neun Uhr.",
          "forms": "beginnt; begann"
        },
        {
          "id": "c02-v04",
          "word": "arbeiten",
          "translation": "to work",
          "category": "Verb",
          "example": "Houssem arbeitet am Computer.",
          "forms": "arbeitet; hat gearbeitet"
        },
        {
          "id": "c02-v05",
          "word": "lernen",
          "translation": "to learn, study",
          "category": "Verb",
          "example": "Tassnim lernt heute neue Wörter.",
          "forms": "lernt; hat gelernt"
        },
        {
          "id": "c02-v06",
          "word": "spielen",
          "translation": "to play",
          "category": "Verb",
          "example": "Am Abend spielt sie Gitarre.",
          "forms": "spielt; hat gespielt"
        },
        {
          "id": "c02-v07",
          "word": "lesen",
          "translation": "to read",
          "category": "Verb",
          "example": "Er liest ein Buch.",
          "forms": "liest; hat gelesen"
        },
        {
          "id": "c02-v08",
          "word": "hören",
          "translation": "to listen, hear",
          "category": "Verb",
          "example": "Ich höre gern Musik.",
          "forms": "hört; hat gehört"
        },
        {
          "id": "c02-v09",
          "word": "fahren",
          "translation": "to travel, go by vehicle",
          "category": "Verb",
          "example": "Houssem fährt mit dem Bus.",
          "forms": "fährt; fuhr"
        },
        {
          "id": "c02-v10",
          "word": "laufen",
          "translation": "to walk, run",
          "category": "Verb",
          "example": "Tassnim läuft im Park.",
          "forms": "läuft; lief"
        },
        {
          "id": "c02-v11",
          "word": "sprechen",
          "translation": "to speak",
          "category": "Verb",
          "example": "Wir sprechen Deutsch.",
          "forms": "spricht; sprach"
        },
        {
          "id": "c02-v12",
          "word": "schlafen",
          "translation": "to sleep",
          "category": "Verb",
          "example": "Am Wochenende schlafe ich lange.",
          "forms": "schläft; schlief"
        },
        {
          "id": "c02-v13",
          "word": "die Pause",
          "translation": "break",
          "category": "noun",
          "example": "In der Pause trinken wir Wasser.",
          "article": "die",
          "plural": "die Pausen"
        },
        {
          "id": "c02-v14",
          "word": "der Feierabend",
          "translation": "end of the workday",
          "category": "noun",
          "example": "Nach dem Feierabend gehe ich nach Hause.",
          "article": "der",
          "plural": "die Feierabende"
        },
        {
          "id": "c02-v15",
          "word": "das Hobby",
          "translation": "hobby",
          "category": "noun",
          "example": "Lesen ist mein Hobby.",
          "article": "das",
          "plural": "die Hobbys"
        },
        {
          "id": "c02-v16",
          "word": "oft",
          "translation": "often",
          "category": "adverb",
          "example": "Ich spiele oft Gitarre."
        },
        {
          "id": "c02-v17",
          "word": "manchmal",
          "translation": "sometimes",
          "category": "adverb",
          "example": "Manchmal fahre ich mit dem Bus."
        },
        {
          "id": "c02-v18",
          "word": "gern",
          "translation": "gladly, like to",
          "category": "adverb",
          "example": "Ich lese gern am Abend."
        }
      ],
      "expressions": [
        "Wann stehst du auf? — Um sieben Uhr.",
        "Was machst du nach der Arbeit? — Ich fahre nach Hause.",
        "Wie oft spielst du Gitarre? — Oft. / Manchmal.",
        "Was machst du gern? — Ich lese gern.",
        "Sprichst du Deutsch? — Ja, ein bisschen.",
        "Wann fängt der Kurs an? — Um halb neun.",
        "Ich höre gern Musik.",
        "Am Wochenende schlafe ich länger."
      ],
      "wordFamilies": [
        {
          "root": "arbeiten",
          "words": [
            "die Arbeit",
            "der Arbeitsplatz",
            "arbeiten"
          ]
        },
        {
          "root": "lernen",
          "words": [
            "lernen",
            "der Lernende",
            "die Lerngruppe"
          ]
        },
        {
          "root": "spielen",
          "words": [
            "spielen",
            "das Spiel",
            "der Spieler / die Spielerin"
          ]
        },
        {
          "root": "der Tag",
          "words": [
            "der Alltag",
            "täglich",
            "der Tagesablauf"
          ]
        }
      ],
      "synonyms": [
        {
          "word": "beginnen",
          "synonym": "starten",
          "antonym": "aufhören"
        },
        {
          "word": "oft",
          "synonym": "häufig",
          "antonym": "selten"
        },
        {
          "word": "gern",
          "synonym": "mit Freude",
          "antonym": "ungern"
        }
      ],
      "contextExamples": [
        "Ich stehe früh auf und frühstücke zu Hause.",
        "Der Deutschkurs fängt um halb neun an.",
        "Nach der Arbeit fahre ich nach Hause.",
        "Am Abend lese ich manchmal ein Buch.",
        "Tassnim spricht gern mit ihren Kolleginnen."
      ],
      "exercises": [
        {
          "id": "c02-voc-1",
          "label": "Wortschatz · 1",
          "type": "multiple-choice",
          "prompt": "Was bedeutet „frühstücken“?",
          "options": [
            "zu Abend essen",
            "am Morgen essen",
            "schlafen"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "„Frühstücken“ bedeutet: am Morgen essen."
        },
        {
          "id": "c02-voc-2",
          "label": "Wortschatz · 2",
          "type": "fill-blank",
          "prompt": "Er ____ um sieben Uhr auf. (aufstehen)",
          "answer": "steht",
          "points": 1,
          "explanation": "Das trennbare Verb steht hier im Hauptsatz: steht … auf."
        },
        {
          "id": "c02-voc-3",
          "label": "Wortschatz · 3",
          "type": "multiple-choice",
          "prompt": "Welches Wort passt? „Nach der Arbeit beginnt der …“",
          "options": [
            "Feierabend",
            "Hobby",
            "Pause"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Der Feierabend ist die Zeit nach der Arbeit."
        },
        {
          "id": "c02-voc-4",
          "label": "Wortschatz · 4",
          "type": "fill-blank",
          "prompt": "„Ich höre ____ Musik.“ (I like listening to music.)",
          "answer": "gern",
          "points": 1,
          "explanation": "„Gern“ zeigt, dass man etwas mag."
        }
      ]
    },
    {
      "id": "grammar",
      "title": "Grammatik",
      "description": "Lerne Präsensformen und die Wortstellung in einfachen Aussagen und Fragen.",
      "overview": "Im Präsens zeigt die Verbendung, wer handelt. Bei manchen Verben verändert sich zusätzlich der Stammvokal. In Aussagen steht das konjugierte Verb auf Position zwei. In Fragen hängt die Verbposition vom Fragetyp ab: Ja-/Nein-Frage mit Verb zuerst, W-Frage mit Fragewort zuerst und Verb danach.",
      "rules": [
        {
          "id": "c02-g1",
          "title": "Infinitiv, Verbstamm und Personalendung (infinitive, verb stem and personal ending)",
          "explanation": "Die Grundform eines Verbs heißt Infinitiv: lernen, machen, spielen. Für die meisten Präsensformen nimmst du die Endung -en weg. Der Rest heißt Verbstamm: lern-, mach-, spiel-. An den Stamm kommt eine Endung. Die Endung zeigt, wer etwas tut.",
          "formula": "Infinitiv: lern-en → Stamm lern- → ich lern-e",
          "examples": [
            "Ich lerne Deutsch.",
            "Du machst heute eine Pause.",
            "Wir spielen am Abend Karten."
          ],
          "exceptions": "Bei Verben auf -eln fällt bei ich oft das e im Stamm weg: sammeln → ich sammle. Das ist eine kleine Sonderform. Das Verb sein ist unregelmäßig und wurde in Kapitel 01 gelernt.",
          "mistakes": "Falsch: „Ich lernen Deutsch.“ Richtig: „Ich lerne Deutsch.“ Das Subjekt ich braucht die Endung -e.",
          "tip": "Markiere zuerst das Subjekt. Dann wähle die passende Endung.",
          "exercises": [
            {
              "id": "c02-g1-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Wie lautet der Stamm von „spielen“?",
              "options": [
                "spiel-",
                "spiele-",
                "spielen-"
              ],
              "answer": 0,
              "points": 1,
              "explanation": "Die Endung -en wird entfernt: spiel-."
            },
            {
              "id": "c02-g1-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Ich ____ (machen) heute Sport.",
              "answer": "mache",
              "points": 1,
              "explanation": "Zu ich gehört bei regelmäßigen Verben die Endung -e."
            },
            {
              "id": "c02-g1-3",
              "label": "Mini-Übung 3",
              "type": "fill-blank",
              "prompt": "Ergänze: Wir ____ (lernen) Deutsch.",
              "answer": "lernen",
              "points": 1,
              "explanation": "Der Infinitiv und die wir-Form enden beide auf -en."
            }
          ]
        },
        {
          "id": "c02-g2",
          "title": "Regelmäßige Verben im Präsens (regular present-tense conjugation)",
          "explanation": "Bei regelmäßigen Verben bleibt der Verbstamm gleich. Du setzt die Personalendung an den Stamm. In der Tabelle siehst du die Endungen für lernen.",
          "formula": "Stamm + -e / -st / -t / -en / -t / -en",
          "examples": [
            "Ich arbeite heute.",
            "Du lernst Deutsch.",
            "Tassnim hört Musik.",
            "Wir spielen zusammen."
          ],
          "exceptions": "Endet der Stamm auf -d oder -t, kommt vor manchen Endungen ein e dazu: arbeiten → du arbeitest, er arbeitet, ihr arbeitet. Bei Stämmen auf s, ß, z oder x hat du meist nur -t: du tanzt, du heißt.",
          "mistakes": "Falsch: „Du arbeittest.“ Richtig: „Du arbeitest.“ Das zusätzliche e steht nur vor der Endung; es verdoppelt nicht das t.",
          "tip": "Sprich die Form laut: arbeit-est ist leichter auszusprechen als arbeit-st.",
          "exercises": [
            {
              "id": "c02-g2-1",
              "label": "Mini-Übung 1",
              "type": "fill-blank",
              "prompt": "Ergänze: Du ____ (spielen) gern Fußball.",
              "answer": "spielst",
              "points": 1,
              "explanation": "Du bekommt bei spielen die Endung -st."
            },
            {
              "id": "c02-g2-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Ihr ____ (arbeiten) heute im Büro.",
              "answer": "arbeitet",
              "points": 1,
              "explanation": "Bei ihr lautet die Endung -t; nach dem Stamm auf -t steht ein zusätzliches e."
            },
            {
              "id": "c02-g2-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Form ist richtig?",
              "options": [
                "Du heißst Houssem.",
                "Du heißt Houssem.",
                "Du heißen Houssem."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Der Stamm heißt auf ß. Bei du kommt nur -t dazu: heißt."
            }
          ]
        },
        {
          "id": "c02-g3",
          "title": "Subjekt und Verb: die passende Endung (subject–verb agreement)",
          "explanation": "Das Verb richtet sich nach dem Subjekt. Ein Name wie Houssem steht für er. Zwei Namen oder wir stehen für die Mehrzahl. Das Verb muss in Person und Zahl passen.",
          "formula": "ich → -e | du → -st | er/sie/es → -t | wir → -en | ihr → -t | sie/Sie → -en",
          "examples": [
            "Tassnim arbeitet. (sie)",
            "Houssem und Tassnim arbeiten. (sie)",
            "Du und ich lernen. (wir)"
          ],
          "exceptions": "Sie als höfliche Anrede steht immer mit der Verbform auf -en: Arbeiten Sie heute? Das kleingeschriebene sie für mehrere Personen hat dieselbe Verbform.",
          "mistakes": "Falsch: „Houssem und Tassnim arbeitet.“ Richtig: „Houssem und Tassnim arbeiten.“ Zwei Personen brauchen die Pluralform.",
          "tip": "Ersetze Namen gedanklich durch ich, du, er/sie/es, wir, ihr oder sie. Dann findest du die Endung.",
          "exercises": [
            {
              "id": "c02-g3-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Welche Form passt? „Houssem und ich ____ Deutsch.“",
              "options": [
                "lerne",
                "lernt",
                "lernen"
              ],
              "answer": 2,
              "points": 1,
              "explanation": "Houssem und ich bedeutet wir: Wir lernen."
            },
            {
              "id": "c02-g3-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Tassnim ____ (arbeiten) heute.",
              "answer": "arbeitet",
              "points": 1,
              "explanation": "Tassnim ist sie; bei arbeiten heißt die Form arbeitet."
            },
            {
              "id": "c02-g3-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche höfliche Frage ist richtig?",
              "options": [
                "Arbeitest Sie heute?",
                "Arbeitet Sie heute?",
                "Arbeiten Sie heute?"
              ],
              "answer": 2,
              "points": 1,
              "explanation": "Die höfliche Anrede Sie steht mit der Endung -en."
            }
          ]
        },
        {
          "id": "c02-g4",
          "title": "Unregelmäßige und stammverändernde Verben (irregular and stem-changing verbs)",
          "explanation": "Bei manchen häufigen Verben ändert sich im Präsens der Stammvokal. Die Änderung steht meistens nur bei du und er/sie/es. Die Endung bleibt trotzdem wichtig.",
          "formula": "e → i: sprechen → du sprichst, er spricht | e → ie: lesen → du liest, sie liest | a → ä: fahren → du fährst, er fährt",
          "examples": [
            "Ich spreche Deutsch. Du sprichst Deutsch.",
            "Wir lesen. Houssem liest.",
            "Ich fahre mit dem Bus. Tassnim fährt mit dem Bus.",
            "Du nimmst eine Pause. Er nimmt eine Pause."
          ],
          "exceptions": "Nicht jedes Verb mit e oder a verändert den Stamm. Lerne die Veränderung mit dem Infinitiv. Bei wir, ihr und sie/Sie bleibt der Stammvokal normalerweise wie im Infinitiv: wir sprechen, ihr lest, sie fahren.",
          "mistakes": "Falsch: „Du lesst ein Buch.“ Richtig: „Du liest ein Buch.“ Lesen hat bei du und er/sie/es den Wechsel e → ie.",
          "tip": "Lerne ein Verb in drei Formen: sprechen – du sprichst – er spricht.",
          "exercises": [
            {
              "id": "c02-g4-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ergänze: Er ____ ein Buch. (lesen)",
              "options": [
                "leset",
                "liest",
                "lest"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Bei er/sie/es wird e zu ie: er liest."
            },
            {
              "id": "c02-g4-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Du ____ mit dem Bus. (fahren)",
              "answer": "fährst",
              "points": 1,
              "explanation": "Bei du wechselt a zu ä; die Endung ist -st."
            },
            {
              "id": "c02-g4-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Form passt? „Tassnim ____ Deutsch.“ (sprechen)",
              "options": [
                "sprechen",
                "spricht",
                "sprichst"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Tassnim steht für sie; sprechen wechselt zu spricht."
            }
          ]
        },
        {
          "id": "c02-g5",
          "title": "Aussagesatz: das Verb auf Position zwei (verb-second order in statements)",
          "explanation": "Im deutschen Aussagesatz steht das konjugierte Verb normalerweise an zweiter Stelle. Vor dem Verb kann das Subjekt stehen. Du kannst auch eine Zeit- oder Ortsangabe an den Anfang setzen. Dann kommt das Subjekt nach dem Verb. So bleibt das Verb auf Position zwei.",
          "formula": "Subjekt + Verb + … | Zeit/Ort + Verb + Subjekt + …",
          "examples": [
            "Houssem arbeitet heute.",
            "Heute arbeitet Houssem.",
            "Am Abend liest Tassnim ein Buch."
          ],
          "exceptions": "„Position zwei“ bedeutet zweites Satzglied, nicht immer zweites Wort. Eine Zeitangabe wie „Am frühen Morgen“ ist ein Satzglied aus mehreren Wörtern.",
          "mistakes": "Falsch: „Heute Houssem arbeitet.“ Richtig: „Heute arbeitet Houssem.“ Nach der Zeitangabe steht sofort das Verb.",
          "tip": "Suche zuerst das konjugierte Verb. In einem einfachen Aussagesatz steht es auf Platz zwei.",
          "exercises": [
            {
              "id": "c02-g5-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Welcher Satz ist richtig?",
              "options": [
                "Heute Tassnim arbeitet.",
                "Heute arbeitet Tassnim.",
                "Heute arbeitet sie Tassnim."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Heute steht am Anfang; das konjugierte Verb arbeitet folgt direkt."
            },
            {
              "id": "c02-g5-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Was steht an zweiter Stelle? „Am Morgen fährt Houssem mit dem Bus.“",
              "options": [
                "Am Morgen",
                "fährt",
                "Houssem"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "„Am Morgen“ ist das erste Satzglied. Fährt ist das zweite Satzglied."
            },
            {
              "id": "c02-g5-3",
              "label": "Mini-Übung 3",
              "type": "written",
              "prompt": "Bilde einen Satz: heute / ich / Deutsch / lernen",
              "answer": "Heute lerne ich Deutsch.",
              "points": 1,
              "explanation": "Ein Satzglied heute steht vorn; danach kommt das Verb lerne.",
              "modelAnswer": "Heute lerne ich Deutsch."
            }
          ]
        },
        {
          "id": "c02-g6",
          "title": "Ja-/Nein-Fragen: das Verb auf Position eins (verb-first yes/no questions)",
          "explanation": "Bei einer Frage, auf die man mit ja oder nein antworten kann, steht das konjugierte Verb am Anfang. Das Subjekt kommt direkt danach.",
          "formula": "Verb + Subjekt + …?",
          "examples": [
            "Arbeitest du heute? – Ja, ich arbeite heute.",
            "Fährt Houssem mit dem Bus? – Nein, er geht zu Fuß.",
            "Lernt ihr Deutsch? – Ja, wir lernen Deutsch."
          ],
          "exceptions": "Das Verb muss zur Person passen: Arbeitest du? aber Arbeiten Sie? Die höfliche Anrede Sie bekommt -en.",
          "mistakes": "Falsch: „Du arbeitest heute?“ Als neutrale Ja-/Nein-Frage: „Arbeitest du heute?“",
          "tip": "Für eine Ja-/Nein-Frage stell das Verb vor das Subjekt.",
          "exercises": [
            {
              "id": "c02-g6-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Welche Frage ist richtig?",
              "options": [
                "Du hörst gern Musik?",
                "Hörst du gern Musik?",
                "Hörst gern du Musik?"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Das Verb hörst steht vor dem Subjekt du."
            },
            {
              "id": "c02-g6-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze die Frage: ____ ihr am Abend? (spielen)",
              "answer": "Spielt",
              "points": 1,
              "explanation": "Bei ihr heißt die Verbform spielt; das Verb steht zuerst."
            },
            {
              "id": "c02-g6-3",
              "label": "Mini-Übung 3",
              "type": "true-false",
              "prompt": "In der Ja-/Nein-Frage „Fährt sie heute?“ steht das Verb an erster Stelle.",
              "answer": "true",
              "points": 1,
              "explanation": "Fährt ist das erste Satzglied."
            }
          ]
        },
        {
          "id": "c02-g7",
          "title": "W-Fragen: Fragewort und Verb (W-questions: question word and verb)",
          "explanation": "Eine W-Frage beginnt mit einem Fragewort. Danach steht das konjugierte Verb auf Position zwei. Das Subjekt kommt normalerweise direkt hinter dem Verb.",
          "formula": "W-Fragewort + Verb + Subjekt + …?",
          "examples": [
            "Was machst du am Abend?",
            "Wann beginnt der Kurs?",
            "Wo arbeitet Tassnim?",
            "Wie fährst du zur Arbeit?"
          ],
          "exceptions": "Wer fragt nach einer Person und steht selbst als Subjekt: „Wer arbeitet heute?“ Danach kommt das Verb. Wohin fragt nach einem Ziel; wo fragt nach einem Ort.",
          "mistakes": "Falsch: „Wann du arbeitest?“ Richtig: „Wann arbeitest du?“ Nach dem Fragewort steht das Verb.",
          "tip": "W-Frage: Fragewort zuerst, Verb danach, Subjekt anschließend.",
          "exercises": [
            {
              "id": "c02-g7-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ergänze: ____ beginnt dein Kurs? – Um neun Uhr.",
              "options": [
                "Was",
                "Wann",
                "Wo"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Um neun Uhr ist eine Zeitangabe. Die Frage lautet Wann?"
            },
            {
              "id": "c02-g7-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Welche Frage ist richtig?",
              "options": [
                "Wo du arbeitest?",
                "Wo arbeitest du?",
                "Arbeitest wo du?"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Nach dem Fragewort wo steht das Verb arbeitest."
            },
            {
              "id": "c02-g7-3",
              "label": "Mini-Übung 3",
              "type": "fill-blank",
              "prompt": "Ergänze: ____ arbeitet heute? – Tassnim. (Frage nach einer Person)",
              "answer": "Wer",
              "points": 1,
              "explanation": "Wer ist hier das Subjekt der Frage."
            }
          ]
        },
        {
          "id": "c02-g8",
          "title": "Satzstellung im Vergleich: Aussage und Frage (sentence order in statements and questions)",
          "explanation": "Aussage und Frage unterscheiden sich durch die Stellung des konjugierten Verbs. Im Aussagesatz steht es an Position zwei. In der Ja-/Nein-Frage steht es an Position eins. In der W-Frage folgt es auf das Fragewort.",
          "formula": "Aussage: Heute arbeitet Houssem. | Ja-/Nein-Frage: Arbeitet Houssem heute? | W-Frage: Wann arbeitet Houssem?",
          "examples": [
            "Du liest gern. → Liest du gern?",
            "Tassnim spielt Gitarre. → Was spielt Tassnim?",
            "Heute lernen wir. → Wann lernen wir?"
          ],
          "exceptions": "Bei einer W-Frage mit wer als Subjekt lautet das Muster Fragewort + Verb: „Wer liest gern?“ Das Subjekt ist bereits das Fragewort.",
          "mistakes": "Falsch: „Was du machst?“ Richtig: „Was machst du?“ In der W-Frage kommt das Verb direkt nach dem Fragewort.",
          "tip": "Prüfe zuerst: Aussage, Ja-/Nein-Frage oder W-Frage? Dann wähle die passende Verbposition.",
          "exercises": [
            {
              "id": "c02-g8-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Welche Reihenfolge passt zu einer W-Frage?",
              "options": [
                "Verb – W-Wort – Subjekt",
                "W-Wort – Verb – Subjekt",
                "Subjekt – W-Wort – Verb"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Eine W-Frage beginnt mit dem Fragewort, dann kommt das Verb."
            },
            {
              "id": "c02-g8-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Welche Form ist eine Ja-/Nein-Frage?",
              "options": [
                "Wann fährt Tassnim?",
                "Fährt Tassnim heute?",
                "Tassnim fährt heute."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Eine Ja-/Nein-Frage beginnt mit dem Verb."
            },
            {
              "id": "c02-g8-3",
              "label": "Mini-Übung 3",
              "type": "written",
              "prompt": "Forme um: Houssem arbeitet am Morgen. (Frage nach der Zeit)",
              "answer": "Wann arbeitet Houssem?",
              "points": 1,
              "explanation": "Eine W-Frage beginnt mit Wann; das Verb arbeitet steht direkt danach.",
              "modelAnswer": "Wann arbeitet Houssem?"
            }
          ]
        }
      ],
      "tables": [
        {
          "caption": "Endungen regelmäßiger Verben am Beispiel lernen",
          "columns": [
            "Person",
            "Pronomen",
            "Form von lernen",
            "Endung"
          ],
          "rows": [
            [
              "1. Person Singular",
              "ich",
              "lerne",
              "-e"
            ],
            [
              "2. Person Singular",
              "du",
              "lernst",
              "-st"
            ],
            [
              "3. Person Singular",
              "er / sie / es",
              "lernt",
              "-t"
            ],
            [
              "1. Person Plural",
              "wir",
              "lernen",
              "-en"
            ],
            [
              "2. Person Plural",
              "ihr",
              "lernt",
              "-t"
            ],
            [
              "3. Person Plural",
              "sie",
              "lernen",
              "-en"
            ],
            [
              "Höfliche Anrede",
              "Sie",
              "lernen",
              "-en"
            ]
          ]
        },
        {
          "caption": "Häufige Stammwechsel im Präsens",
          "columns": [
            "Infinitiv",
            "du",
            "er / sie / es",
            "Beispiel"
          ],
          "rows": [
            [
              "sprechen",
              "sprichst",
              "spricht",
              "Du sprichst Deutsch."
            ],
            [
              "lesen",
              "liest",
              "liest",
              "Sie liest ein Buch."
            ],
            [
              "fahren",
              "fährst",
              "fährt",
              "Er fährt mit dem Bus."
            ],
            [
              "nehmen",
              "nimmst",
              "nimmt",
              "Du nimmst eine Pause."
            ],
            [
              "sehen",
              "siehst",
              "sieht",
              "Sie sieht einen Film."
            ],
            [
              "essen",
              "isst",
              "isst",
              "Er isst zu Hause."
            ]
          ]
        },
        {
          "caption": "Wortstellung in Aussagen und Fragen",
          "columns": [
            "Satzart",
            "Muster",
            "Beispiel"
          ],
          "rows": [
            [
              "Aussage",
              "Subjekt + Verb + …",
              "Houssem arbeitet heute."
            ],
            [
              "Aussage mit Zeitangabe",
              "Zeit + Verb + Subjekt + …",
              "Heute arbeitet Houssem."
            ],
            [
              "Ja-/Nein-Frage",
              "Verb + Subjekt + …?",
              "Arbeitet Houssem heute?"
            ],
            [
              "W-Frage",
              "Fragewort + Verb + Subjekt + …?",
              "Wann arbeitet Houssem?"
            ]
          ]
        }
      ],
      "comparisons": [
        {
          "title": "Aussage oder Ja-/Nein-Frage?",
          "explanation": "In der Aussage steht das konjugierte Verb auf Position zwei. In der Ja-/Nein-Frage steht es auf Position eins.",
          "examples": [
            "Du lernst heute. → Lernst du heute?",
            "Tassnim fährt mit dem Bus. → Fährt Tassnim mit dem Bus?"
          ]
        },
        {
          "title": "Ja-/Nein-Frage oder W-Frage?",
          "explanation": "Die Ja-/Nein-Frage beginnt mit dem Verb. Die W-Frage beginnt mit einem Fragewort; das Verb steht danach.",
          "examples": [
            "Arbeitest du heute?",
            "Wann arbeitest du?",
            "Wer arbeitet heute?"
          ]
        }
      ],
      "exercises": [
        {
          "id": "c02-gr-quick-1",
          "label": "Wissenskontrolle · 1",
          "type": "multiple-choice",
          "prompt": "Welche Form ist richtig? „Du ____ ein Buch.“ (lesen)",
          "options": [
            "liest",
            "lese",
            "lest"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Bei du wird lesen zu liest."
        },
        {
          "id": "c02-gr-quick-2",
          "label": "Wissenskontrolle · 2",
          "type": "multiple-choice",
          "prompt": "Welche Frage ist richtig?",
          "options": [
            "Wann du stehst auf?",
            "Wann stehst du auf?",
            "Stehst wann du auf?"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Die W-Frage beginnt mit Wann, dann folgt stehst."
        },
        {
          "id": "c02-gr-quick-3",
          "label": "Wissenskontrolle · 3",
          "type": "multiple-choice",
          "prompt": "Welcher Satz hat eine korrekte Inversion?",
          "options": [
            "Am Abend Houssem liest.",
            "Am Abend liest Houssem.",
            "Am Abend liest er Houssem."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Nach Am Abend steht das Verb liest auf Position zwei."
        }
      ]
    },
    {
      "id": "exercises",
      "title": "Übungen & Aktivitäten",
      "description": "Übe Erkennen, Ergänzen, Umformen, Fragen und eigene Sätze.",
      "exercises": [
        {
          "id": "c02-ex-01",
          "label": "Erkennen · 1",
          "type": "multiple-choice",
          "prompt": "Welche Form passt? „Du ____ jeden Morgen.“ (frühstücken)",
          "options": [
            "frühstücke",
            "frühstückst",
            "frühstückt"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Das Subjekt du braucht die Endung -st."
        },
        {
          "id": "c02-ex-02",
          "label": "Erkennen · 2",
          "type": "multiple-choice",
          "prompt": "Welche Verbform passt? „Meine Freunde ____ gern Musik.“",
          "options": [
            "hört",
            "höre",
            "hören"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Meine Freunde steht für sie im Plural: hören."
        },
        {
          "id": "c02-ex-03",
          "label": "Ergänzen · 1",
          "type": "fill-blank",
          "prompt": "Ergänze: Ich ____ jeden Tag um sieben Uhr auf. (aufstehen)",
          "answer": "stehe",
          "points": 1,
          "explanation": "Bei ich heißt es stehe; das trennbare Präfix auf steht am Satzende."
        },
        {
          "id": "c02-ex-04",
          "label": "Ergänzen · 2",
          "type": "fill-blank",
          "prompt": "Ergänze: Er ____ am Abend ein Buch. (lesen)",
          "answer": "liest",
          "points": 1,
          "explanation": "Lesen hat bei er den Stammwechsel e → ie."
        },
        {
          "id": "c02-ex-05",
          "label": "Umformen · 1",
          "type": "multiple-choice",
          "prompt": "Welche Ja-/Nein-Frage passt zu „Du spielst Gitarre.“?",
          "options": [
            "Spielst du Gitarre?",
            "Du spielst Gitarre?",
            "Gitarre du spielst?"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "In der Ja-/Nein-Frage steht das Verb vor dem Subjekt."
        },
        {
          "id": "c02-ex-06",
          "label": "Umformen · 2",
          "type": "multiple-choice",
          "prompt": "Welche W-Frage fragt nach der Uhrzeit von „Der Kurs beginnt um neun Uhr.“?",
          "options": [
            "Wo beginnt der Kurs?",
            "Wann beginnt der Kurs?",
            "Wer beginnt der Kurs?"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Eine Uhrzeit beantwortet die Frage Wann?"
        },
        {
          "id": "c02-ex-07",
          "label": "Satzbau · 1",
          "type": "written",
          "prompt": "Ordne die Wörter: am Abend / Tassnim / gern / liest / ein Buch",
          "answer": "Am Abend liest Tassnim gern ein Buch.",
          "points": 1,
          "explanation": "Alle Wörter sollen in einem korrekten Satz stehen; das Verb steht nach „Am Abend“ auf Position zwei.",
          "modelAnswer": "Am Abend liest Tassnim gern ein Buch."
        },
        {
          "id": "c02-ex-08",
          "label": "Satzbau · 2",
          "type": "written",
          "prompt": "Schreibe eine Ja-/Nein-Frage mit „du“, „Deutsch lernen“ und „heute“.",
          "answer": "Lernst du heute Deutsch?",
          "points": 1,
          "explanation": "Beginne mit der Verbform lernst und setze das Subjekt du danach.",
          "modelAnswer": "Lernst du heute Deutsch?"
        },
        {
          "id": "c02-ex-09",
          "label": "Übersetzung · 1",
          "type": "written",
          "prompt": "Übersetze ins Deutsche: “When do you work?”",
          "answer": "Wann arbeitest du?",
          "points": 1,
          "explanation": "Wann ist das Fragewort; arbeitest steht an zweiter Stelle.",
          "modelAnswer": "Wann arbeitest du?"
        },
        {
          "id": "c02-ex-10",
          "label": "Fehlerkorrektur · 1",
          "type": "written",
          "prompt": "Korrigiere den Satz: „Heute Houssem fährt mit dem Bus.“",
          "answer": "Heute fährt Houssem mit dem Bus.",
          "points": 1,
          "explanation": "Nach der Zeitangabe heute steht das konjugierte Verb fährt.",
          "modelAnswer": "Heute fährt Houssem mit dem Bus."
        },
        {
          "id": "c02-ex-11",
          "label": "Dialog · 1",
          "type": "multiple-choice",
          "prompt": "Ergänze die passende Frage: „____ du gern?“ – „Ich lese gern.“",
          "options": [
            "Was liest",
            "Liest was",
            "Was du liest"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "In der W-Frage steht das Verb nach dem Fragewort."
        },
        {
          "id": "c02-ex-12",
          "label": "Kreativ · 1",
          "type": "written",
          "prompt": "Schreibe drei kurze Sätze über deinen Tagesablauf. Verwende ich, eine Zeitangabe und mindestens ein Verb aus der Wortschatzliste.",
          "answer": "Ich stehe um sieben Uhr auf. Am Morgen frühstücke ich. Am Abend lese ich gern.",
          "points": 1,
          "explanation": "Eine mögliche Antwort. Eigene passende Sätze sind richtig.",
          "modelAnswer": "Ich stehe um sieben Uhr auf. Am Morgen frühstücke ich. Am Abend lese ich gern."
        },
        {
          "id": "c02-ex-13",
          "label": "Gemischt · 1",
          "type": "multiple-choice",
          "prompt": "Welche Frage ist korrekt?",
          "options": [
            "Warum du lernst Deutsch?",
            "Warum lernst du Deutsch?",
            "Lernst warum du Deutsch?"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Nach dem Fragewort warum steht das Verb lernst."
        },
        {
          "id": "c02-ex-14",
          "label": "Gemischt · 2",
          "type": "fill-blank",
          "prompt": "Ergänze: Ihr ____ heute sehr früh. (beginnen)",
          "answer": "beginnt",
          "points": 1,
          "explanation": "Bei ihr heißt die Form beginnt."
        }
      ]
    },
    {
      "id": "practical-communication",
      "title": "Sprache im Alltag",
      "description": "Sprich über Tagesabläufe und Interessen. Stelle passende Rückfragen.",
      "dialogue": [
        {
          "speaker": "Tassnim",
          "text": "Wann stehst du normalerweise auf?"
        },
        {
          "speaker": "Houssem",
          "text": "Um sieben Uhr. Und du?"
        },
        {
          "speaker": "Tassnim",
          "text": "Ich stehe um halb sieben auf. Dann frühstücke ich und fahre zur Arbeit."
        },
        {
          "speaker": "Houssem",
          "text": "Was machst du nach der Arbeit?"
        },
        {
          "speaker": "Tassnim",
          "text": "Ich gehe manchmal spazieren. Am Abend höre ich gern Musik. Spielst du ein Instrument?"
        },
        {
          "speaker": "Houssem",
          "text": "Nein, ich spiele kein Instrument. Aber ich lese gern. Was liest du?"
        },
        {
          "speaker": "Tassnim",
          "text": "Ich lese kurze Geschichten. Am Wochenende habe ich mehr Zeit."
        }
      ],
      "expressionsForCommunication": [
        "Wann stehst du auf?",
        "Was machst du am Morgen / am Nachmittag / am Abend?",
        "Wie oft …? — Oft, manchmal, selten oder nie.",
        "Was machst du gern?",
        "Spielst du …? — Ja, ich spiele … / Nein, ich spiele nicht …",
        "Wann fängt … an?",
        "Wo arbeitest / lernst du?",
        "Und du?"
      ],
      "scenario": {
        "prompt": "Du lernst eine neue Person kennen. Ihr sprecht über euren Tagesablauf und eure Hobbys.",
        "steps": [
          "Frage, wann die Person aufsteht.",
          "Frage, was sie nach der Arbeit oder dem Kurs macht.",
          "Nenne zwei Aktivitäten aus deinem Alltag.",
          "Stelle eine Ja-/Nein-Frage und eine W-Frage."
        ]
      },
      "guidedWriting": "Schreibe eine kurze Nachricht mit fünf bis sieben Sätzen über deinen Tagesablauf. Nenne eine Uhrzeit am Morgen, eine Aktivität am Nachmittag und ein Hobby am Abend. Verwende mindestens vier Verben aus der Wortschatzliste. Lies danach jeden Satz und prüfe die Verbendung sowie die Verbposition.",
      "prompts": [
        "Wann beginnt dein Tag? Erzähle in drei Sätzen.",
        "Was machst du gern in deiner Freizeit?",
        "Welche Frage stellst du einer neuen Person über ihren Alltag?",
        "Beschreibe einen typischen Abend. Verwende manchmal oder oft."
      ],
      "miniProject": "Erstelle einen kleinen Wochenplan mit drei Tagen. Schreibe pro Tag zwei Aktivitäten und stelle darunter drei Fragen an eine Lernpartnerin oder einen Lernpartner. Markiere in jedem Satz das konjugierte Verb."
    },
    {
      "id": "summary",
      "title": "Zusammenfassung",
      "description": "Wiederhole die Endungen, Stammwechsel und drei Frage- und Satzmuster.",
      "summary": [
        "Regelmäßige Präsensformen: Verbstamm + passende Personalendung.",
        "Endungen: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
        "Bei häufigen Verben verändert sich der Stammvokal oft nur bei du und er/sie/es: lesen → du liest, sie liest.",
        "Aussage: konjugiertes Verb auf Position zwei. Nach einer Zeitangabe folgt das Verb vor dem Subjekt: Heute arbeite ich.",
        "Ja-/Nein-Frage: Verb + Subjekt: Arbeitest du?",
        "W-Frage: Fragewort + Verb + Subjekt: Wann arbeitest du?",
        "Lerne unregelmäßige Formen mit dem Infinitiv und Beispielsätzen."
      ],
      "checklist": [
        "Ich kann den Stamm eines regelmäßigen Verbs finden.",
        "Ich kann die Präsensendungen passend zum Subjekt wählen.",
        "Ich erkenne die Stammwechsel bei lesen, sprechen und fahren.",
        "Ich stelle das Verb im Aussagesatz auf Position zwei.",
        "Ich bilde Ja-/Nein-Fragen und W-Fragen.",
        "Ich kann nach Alltag und Hobbys fragen und darüber sprechen."
      ],
      "exercises": [
        {
          "id": "c02-sum-1",
          "label": "Wiederholung · 1",
          "type": "multiple-choice",
          "prompt": "Welche Aussage über den Aussagesatz stimmt?",
          "options": [
            "Das Verb steht immer am Satzende.",
            "Das konjugierte Verb steht normalerweise an Position zwei.",
            "Das Subjekt muss immer zuerst stehen."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Auch wenn eine Zeitangabe am Anfang steht, bleibt das Verb auf Position zwei."
        },
        {
          "id": "c02-sum-2",
          "label": "Wiederholung · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form ist richtig? „Er ____ gern.“ (sprechen)",
          "options": [
            "spricht",
            "sprichst",
            "sprechen"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Bei er wechselt sprechen zu spricht."
        },
        {
          "id": "c02-sum-3",
          "label": "Wiederholung · 3",
          "type": "multiple-choice",
          "prompt": "Wie beginnt eine Ja-/Nein-Frage?",
          "options": [
            "Mit dem Subjekt.",
            "Mit dem Verb.",
            "Mit dem Fragewort."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Das Verb steht bei einer Ja-/Nein-Frage an erster Stelle."
        }
      ]
    },
    {
      "id": "examination",
      "title": "Kapitelprüfung",
      "description": "Prüfe deine Kenntnisse. Die Schreibaufgaben werden nach der Abgabe manuell bewertet.",
      "exam": {
        "id": "exam-chapter-02",
        "title": "Kapitelprüfung 02: Präsens und Fragen",
        "totalPoints": 100,
        "distribution": {
          "reading": 20,
          "vocabulary": 15,
          "grammar": 35,
          "sentenceConstruction": 10,
          "writing": 20
        },
        "instructions": "Lies beide neuen Texte. Bearbeite alle Aufgaben und wähle oder schreibe deine Antworten. Gib die Prüfung am Ende ab. Die drei Schreibaufgaben werden mit den Kriterien im Lösungsteil manuell bewertet.",
        "readingTexts": [
          {
            "id": "c02-exam-text-a",
            "title": "Lesetext A: Ein Morgen im Stadtpark",
            "text": "Mira steht am Samstag um acht Uhr auf. Sie läuft im Park und hört dabei einen Podcast. Um zehn Uhr trifft sie ihren Freund Karim. Karim fährt mit dem Fahrrad zum Park. Die beiden sprechen über ihre Woche. Mira arbeitet in einer Bäckerei und beginnt früh. Karim studiert und lernt am Nachmittag oft in der Bibliothek. Am Abend kochen sie zu Hause und sehen einen Film. Mira arbeitet gern in der Bäckerei und spricht dort mit vielen Menschen. Am Sonntag schläft sie länger."
          },
          {
            "id": "c02-exam-text-b",
            "title": "Lesetext B: Nachricht von Karim",
            "text": "Hallo Mira,\n\nwas machst du heute nach dem Kurs? Ich fahre um vier Uhr nach Hause und lerne zuerst für die Prüfung. Danach spiele ich eine Stunde Schach mit meinem Bruder. Um sieben Uhr bin ich zu Hause. Meine Eltern wohnen in Sfax. Am Abend lese ich noch ein Kapitel. Am Sonntag besuche ich einen Freund. Wir spielen Schach und sprechen über die Universität. Ich schreibe dir: Hast du Zeit für einen Spaziergang am Sonntag?\n\nViele Grüße\nKarim\nBis bald!"
          }
        ],
        "questions": [
          {
            "id": "c02-ex-r1",
            "label": "Lesen A · 1",
            "type": "multiple-choice",
            "prompt": "Wann steht Mira am Samstag auf?",
            "options": [
              "Um sieben Uhr.",
              "Um acht Uhr.",
              "Um zehn Uhr."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Im Text steht: Mira steht am Samstag um acht Uhr auf.",
            "category": "reading"
          },
          {
            "id": "c02-ex-r2",
            "label": "Lesen A · 2",
            "type": "multiple-choice",
            "prompt": "Wie kommt Karim zum Park?",
            "options": [
              "Mit dem Fahrrad.",
              "Mit dem Bus.",
              "Zu Fuß."
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Karim fährt mit dem Fahrrad zum Park.",
            "category": "reading"
          },
          {
            "id": "c02-ex-r3",
            "label": "Lesen B · 1",
            "type": "true-false",
            "prompt": "Karim lernt zuerst für die Prüfung.",
            "answer": "true",
            "points": 5,
            "explanation": "Nach der Heimfahrt lernt Karim zuerst für die Prüfung.",
            "category": "reading"
          },
          {
            "id": "c02-ex-r4",
            "label": "Lesen B · 2",
            "type": "multiple-choice",
            "prompt": "Wann ist Karim zu Hause?",
            "options": [
              "Um vier Uhr.",
              "Um sieben Uhr.",
              "Am Sonntagmorgen."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Karim schreibt: Um sieben Uhr bin ich zu Hause.",
            "category": "reading"
          },
          {
            "id": "c02-ex-v1",
            "label": "Wortschatz · 1",
            "type": "multiple-choice",
            "prompt": "Was bedeutet „oft“?",
            "options": [
              "fast nie",
              "häufig",
              "gestern"
            ],
            "answer": 1,
            "points": 3,
            "explanation": "Oft bedeutet häufig.",
            "category": "vocabulary"
          },
          {
            "id": "c02-ex-v2",
            "label": "Wortschatz · 2",
            "type": "multiple-choice",
            "prompt": "Was bedeutet „der Beruf“? (Wiederholung aus Kapitel 01)",
            "options": [
              "occupation, profession",
              "break",
              "hobby"
            ],
            "answer": 0,
            "points": 3,
            "explanation": "Der Beruf beschreibt die Arbeit einer Person. Das Wort stammt aus dem Wortschatz von Kapitel 01.",
            "category": "vocabulary"
          },
          {
            "id": "c02-ex-v3",
            "label": "Wortschatz · 3",
            "type": "fill-blank",
            "prompt": "Ergänze: „Ich ____ gern Musik.“ (hören)",
            "answer": "höre",
            "points": 3,
            "explanation": "Zu ich gehört höre.",
            "category": "vocabulary"
          },
          {
            "id": "c02-ex-v4",
            "label": "Wortschatz · 4",
            "type": "multiple-choice",
            "prompt": "Welcher Artikel passt? ____ Team (Wiederholung aus Kapitel 01)",
            "options": [
              "Der",
              "Die",
              "Das"
            ],
            "answer": 2,
            "points": 3,
            "explanation": "Team ist Neutrum: das Team. Die Frage wiederholt die Artikel aus Kapitel 01.",
            "category": "vocabulary"
          },
          {
            "id": "c02-ex-v5",
            "label": "Wortschatz · 5",
            "type": "fill-blank",
            "prompt": "Ergänze: Houssem ____ mit dem Bus. (fahren)",
            "answer": "fährt",
            "points": 3,
            "explanation": "Bei er wechselt fahren zu fährt.",
            "category": "vocabulary"
          },
          {
            "id": "c02-ex-g1",
            "label": "Grammatik · 1",
            "type": "multiple-choice",
            "prompt": "Welche Form passt? „Ich ____ Deutsch.“ (lernen)",
            "options": [
              "lerne",
              "lernst",
              "lernt"
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Das Subjekt ich bekommt die Endung -e.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g2",
            "label": "Grammatik · 2",
            "type": "multiple-choice",
            "prompt": "Welche Form passt? „Ihr ____ heute.“ (arbeiten)",
            "options": [
              "arbeitet",
              "arbeiten",
              "arbeitest"
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Bei ihr heißt die Form arbeitet.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g3",
            "label": "Grammatik · 3",
            "type": "multiple-choice",
            "prompt": "Welche Form passt? „Du ____ sehr gut.“ (sprechen)",
            "options": [
              "sprichst",
              "spricht",
              "sprechst"
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Sprechen wechselt bei du e → i: du sprichst.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g4",
            "label": "Grammatik · 4",
            "type": "multiple-choice",
            "prompt": "Welche Form passt? „Er ____ mit dem Zug.“ (fahren)",
            "options": [
              "fährst",
              "fährt",
              "fahrt"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Fahren wechselt bei er a → ä: er fährt.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g5",
            "label": "Grammatik · 5",
            "type": "multiple-choice",
            "prompt": "Welcher Satz hat die richtige Verbposition?",
            "options": [
              "Am Abend Tassnim liest.",
              "Am Abend liest Tassnim.",
              "Am Abend liest sie Tassnim."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Nach der Zeitangabe folgt direkt das konjugierte Verb.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g6",
            "label": "Grammatik · 6",
            "type": "multiple-choice",
            "prompt": "Welche Ja-/Nein-Frage ist richtig?",
            "options": [
              "Du spielst heute?",
              "Spielst du heute?",
              "Heute du spielst?"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Die Ja-/Nein-Frage beginnt mit dem Verb.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-g7",
            "label": "Grammatik · 7",
            "type": "multiple-choice",
            "prompt": "Welche W-Frage fragt nach einem Ort?",
            "options": [
              "Wann arbeitet er?",
              "Wo arbeitet er?",
              "Wer arbeitet heute?"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Wo fragt nach einem Ort.",
            "category": "grammar"
          },
          {
            "id": "c02-ex-s1",
            "label": "Satzbau · 1",
            "type": "written",
            "prompt": "Bilde einen Aussagesatz mit allen Wörtern: heute / Houssem / am Computer / arbeitet",
            "answer": "Heute arbeitet Houssem am Computer.",
            "points": 5,
            "explanation": "Verwende alle Angaben. Nach heute steht arbeitet.",
            "modelAnswer": "Heute arbeitet Houssem am Computer.",
            "category": "sentenceConstruction"
          },
          {
            "id": "c02-ex-s2",
            "label": "Satzbau · 2",
            "type": "written",
            "prompt": "Forme eine W-Frage: „Tassnim spielt am Abend Gitarre.“ Frage nach der Zeit.",
            "answer": "Wann spielt Tassnim Gitarre?",
            "points": 5,
            "explanation": "Frage nach der Zeit mit Wann. Das Verb steht danach.",
            "modelAnswer": "Wann spielt Tassnim Gitarre?",
            "category": "sentenceConstruction"
          },
          {
            "id": "c02-ex-w1",
            "label": "Schreiben A · 1",
            "type": "written",
            "prompt": "Schreibe vier kurze Sätze über deinen Morgen. Verwende mindestens zwei Verben aus dem Kapitel und eine Uhrzeit.",
            "answer": "Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich. Danach fahre ich zur Arbeit. Am Morgen lerne ich Deutsch.",
            "points": 5,
            "explanation": "Eine mögliche Antwort. Eigene richtige Tagesabläufe sind ebenfalls korrekt.",
            "modelAnswer": "Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich. Danach fahre ich zur Arbeit. Am Morgen lerne ich Deutsch.",
            "category": "writing"
          },
          {
            "id": "c02-ex-w2",
            "label": "Schreiben B · 2",
            "type": "written",
            "prompt": "Schreibe eine kurze Nachricht an eine Freundin oder einen Freund. Erzähle von zwei Aktivitäten nach der Arbeit und stelle eine Frage. Schreibe etwa 20–40 Wörter.",
            "answer": "Hallo Lina, nach der Arbeit fahre ich nach Hause und koche etwas. Danach höre ich Musik oder lese ein Buch. Was machst du am Abend? Hast du Zeit für einen Spaziergang? Viele Grüße, Samira.",
            "points": 7,
            "explanation": "Eine mögliche Nachricht mit zwei Aktivitäten und einer Frage.",
            "modelAnswer": "Hallo Lina, nach der Arbeit fahre ich nach Hause und koche etwas. Danach höre ich Musik oder lese ein Buch. Was machst du am Abend? Hast du Zeit für einen Spaziergang? Viele Grüße, Samira.",
            "category": "writing"
          },
          {
            "id": "c02-ex-w3",
            "label": "Schreiben C · 3",
            "type": "written",
            "prompt": "Schreibe einen kurzen Text über einen normalen Tag. Nenne den Morgen, den Nachmittag und den Abend. Verwende mindestens fünf Verben aus dem Kapitel und stelle am Ende eine Frage an eine andere Person.",
            "answer": "An einem normalen Tag stehe ich um sieben Uhr auf. Ich frühstücke zu Hause und fahre mit dem Bus zur Arbeit. Am Nachmittag arbeite ich und spreche mit meinem Team. Nach der Arbeit gehe ich manchmal spazieren. Am Abend lese ich gern oder höre Musik. Was machst du am Abend?",
            "points": 8,
            "explanation": "Eine mögliche Antwort. Eigene Alltagstexte mit den verlangten Informationen sind ebenfalls richtig.",
            "modelAnswer": "An einem normalen Tag stehe ich um sieben Uhr auf. Ich frühstücke zu Hause und fahre mit dem Bus zur Arbeit. Am Nachmittag arbeite ich und spreche mit meinem Team. Nach der Arbeit gehe ich manchmal spazieren. Am Abend lese ich gern oder höre Musik. Was machst du am Abend?",
            "category": "writing"
          }
        ]
      }
    },
    {
      "id": "solutions",
      "title": "Lösungen & Lernkontrolle",
      "description": "Vergleiche deine Antworten und nutze die Rückmeldungen, um gezielt weiterzuüben.",
      "answers": [
        {
          "exerciseId": "c02-intro-r1",
          "answer": "bin",
          "explanation": "Die Präsensform von sein bei ich lautet bin."
        },
        {
          "exerciseId": "c02-intro-r2",
          "answer": "ist",
          "explanation": "Houssem steht für er; die Form lautet ist."
        },
        {
          "exerciseId": "c02-intro-r3",
          "answer": "arbeite",
          "explanation": "Heute steht am Anfang; danach folgt das Verb arbeite."
        },
        {
          "exerciseId": "c02-rd-a1",
          "answer": "Um acht Uhr.",
          "explanation": "Im Text steht: Houssem beginnt um acht Uhr mit der Arbeit."
        },
        {
          "exerciseId": "c02-rd-a2",
          "answer": "false",
          "explanation": "Houssem fährt mit dem Bus. Tassnim geht gern zu Fuß."
        },
        {
          "exerciseId": "c02-rd-a3",
          "answer": "Er liest ein Buch.",
          "explanation": "Houssem liest manchmal ein Buch."
        },
        {
          "exerciseId": "c02-rd-a4",
          "answer": "Hobbys",
          "explanation": "Das letzte Satz nennt ihre Hobbys."
        },
        {
          "exerciseId": "c02-rd-b1",
          "answer": "Um sieben Uhr.",
          "explanation": "Tassnim steht um sieben Uhr auf."
        },
        {
          "exerciseId": "c02-rd-b2",
          "answer": "true",
          "explanation": "Das steht im Text."
        },
        {
          "exerciseId": "c02-rd-b3",
          "answer": "Sie geht mit ihrer Schwester spazieren.",
          "explanation": "Nach dem Kurs geht sie mit ihrer Schwester spazieren."
        },
        {
          "exerciseId": "c02-rd-b4",
          "answer": "Arbeit",
          "explanation": "Tassnim fragt: „Was machst du nach der Arbeit?“"
        },
        {
          "exerciseId": "c02-voc-1",
          "answer": "am Morgen essen",
          "explanation": "„Frühstücken“ bedeutet: am Morgen essen."
        },
        {
          "exerciseId": "c02-voc-2",
          "answer": "steht",
          "explanation": "Das trennbare Verb steht hier im Hauptsatz: steht … auf."
        },
        {
          "exerciseId": "c02-voc-3",
          "answer": "Feierabend",
          "explanation": "Der Feierabend ist die Zeit nach der Arbeit."
        },
        {
          "exerciseId": "c02-voc-4",
          "answer": "gern",
          "explanation": "„Gern“ zeigt, dass man etwas mag."
        },
        {
          "exerciseId": "c02-gr-quick-1",
          "answer": "liest",
          "explanation": "Bei du wird lesen zu liest."
        },
        {
          "exerciseId": "c02-gr-quick-2",
          "answer": "Wann stehst du auf?",
          "explanation": "Die W-Frage beginnt mit Wann, dann folgt stehst."
        },
        {
          "exerciseId": "c02-gr-quick-3",
          "answer": "Am Abend liest Houssem.",
          "explanation": "Nach Am Abend steht das Verb liest auf Position zwei."
        },
        {
          "exerciseId": "c02-g1-1",
          "answer": "spiel-",
          "explanation": "Die Endung -en wird entfernt: spiel-."
        },
        {
          "exerciseId": "c02-g1-2",
          "answer": "mache",
          "explanation": "Zu ich gehört bei regelmäßigen Verben die Endung -e."
        },
        {
          "exerciseId": "c02-g1-3",
          "answer": "lernen",
          "explanation": "Der Infinitiv und die wir-Form enden beide auf -en."
        },
        {
          "exerciseId": "c02-g2-1",
          "answer": "spielst",
          "explanation": "Du bekommt bei spielen die Endung -st."
        },
        {
          "exerciseId": "c02-g2-2",
          "answer": "arbeitet",
          "explanation": "Bei ihr lautet die Endung -t; nach dem Stamm auf -t steht ein zusätzliches e."
        },
        {
          "exerciseId": "c02-g2-3",
          "answer": "Du heißt Houssem.",
          "explanation": "Der Stamm heißt auf ß. Bei du kommt nur -t dazu: heißt."
        },
        {
          "exerciseId": "c02-g3-1",
          "answer": "lernen",
          "explanation": "Houssem und ich bedeutet wir: Wir lernen."
        },
        {
          "exerciseId": "c02-g3-2",
          "answer": "arbeitet",
          "explanation": "Tassnim ist sie; bei arbeiten heißt die Form arbeitet."
        },
        {
          "exerciseId": "c02-g3-3",
          "answer": "Arbeiten Sie heute?",
          "explanation": "Die höfliche Anrede Sie steht mit der Endung -en."
        },
        {
          "exerciseId": "c02-g4-1",
          "answer": "liest",
          "explanation": "Bei er/sie/es wird e zu ie: er liest."
        },
        {
          "exerciseId": "c02-g4-2",
          "answer": "fährst",
          "explanation": "Bei du wechselt a zu ä; die Endung ist -st."
        },
        {
          "exerciseId": "c02-g4-3",
          "answer": "spricht",
          "explanation": "Tassnim steht für sie; sprechen wechselt zu spricht."
        },
        {
          "exerciseId": "c02-g5-1",
          "answer": "Heute arbeitet Tassnim.",
          "explanation": "Heute steht am Anfang; das konjugierte Verb arbeitet folgt direkt."
        },
        {
          "exerciseId": "c02-g5-2",
          "answer": "fährt",
          "explanation": "„Am Morgen“ ist das erste Satzglied. Fährt ist das zweite Satzglied."
        },
        {
          "exerciseId": "c02-g5-3",
          "answer": "Heute lerne ich Deutsch.",
          "explanation": "Ein Satzglied heute steht vorn; danach kommt das Verb lerne."
        },
        {
          "exerciseId": "c02-g6-1",
          "answer": "Hörst du gern Musik?",
          "explanation": "Das Verb hörst steht vor dem Subjekt du."
        },
        {
          "exerciseId": "c02-g6-2",
          "answer": "Spielt",
          "explanation": "Bei ihr heißt die Verbform spielt; das Verb steht zuerst."
        },
        {
          "exerciseId": "c02-g6-3",
          "answer": "true",
          "explanation": "Fährt ist das erste Satzglied."
        },
        {
          "exerciseId": "c02-g7-1",
          "answer": "Wann",
          "explanation": "Um neun Uhr ist eine Zeitangabe. Die Frage lautet Wann?"
        },
        {
          "exerciseId": "c02-g7-2",
          "answer": "Wo arbeitest du?",
          "explanation": "Nach dem Fragewort wo steht das Verb arbeitest."
        },
        {
          "exerciseId": "c02-g7-3",
          "answer": "Wer",
          "explanation": "Wer ist hier das Subjekt der Frage."
        },
        {
          "exerciseId": "c02-g8-1",
          "answer": "W-Wort – Verb – Subjekt",
          "explanation": "Eine W-Frage beginnt mit dem Fragewort, dann kommt das Verb."
        },
        {
          "exerciseId": "c02-g8-2",
          "answer": "Fährt Tassnim heute?",
          "explanation": "Eine Ja-/Nein-Frage beginnt mit dem Verb."
        },
        {
          "exerciseId": "c02-g8-3",
          "answer": "Wann arbeitet Houssem?",
          "explanation": "Eine W-Frage beginnt mit Wann; das Verb arbeitet steht direkt danach."
        },
        {
          "exerciseId": "c02-ex-01",
          "answer": "frühstückst",
          "explanation": "Das Subjekt du braucht die Endung -st."
        },
        {
          "exerciseId": "c02-ex-02",
          "answer": "hören",
          "explanation": "Meine Freunde steht für sie im Plural: hören."
        },
        {
          "exerciseId": "c02-ex-03",
          "answer": "stehe",
          "explanation": "Bei ich heißt es stehe; das trennbare Präfix auf steht am Satzende."
        },
        {
          "exerciseId": "c02-ex-04",
          "answer": "liest",
          "explanation": "Lesen hat bei er den Stammwechsel e → ie."
        },
        {
          "exerciseId": "c02-ex-05",
          "answer": "Spielst du Gitarre?",
          "explanation": "In der Ja-/Nein-Frage steht das Verb vor dem Subjekt."
        },
        {
          "exerciseId": "c02-ex-06",
          "answer": "Wann beginnt der Kurs?",
          "explanation": "Eine Uhrzeit beantwortet die Frage Wann?"
        },
        {
          "exerciseId": "c02-ex-07",
          "answer": "Am Abend liest Tassnim gern ein Buch.",
          "explanation": "Alle Wörter sollen in einem korrekten Satz stehen; das Verb steht nach „Am Abend“ auf Position zwei."
        },
        {
          "exerciseId": "c02-ex-08",
          "answer": "Lernst du heute Deutsch?",
          "explanation": "Beginne mit der Verbform lernst und setze das Subjekt du danach."
        },
        {
          "exerciseId": "c02-ex-09",
          "answer": "Wann arbeitest du?",
          "explanation": "Wann ist das Fragewort; arbeitest steht an zweiter Stelle."
        },
        {
          "exerciseId": "c02-ex-10",
          "answer": "Heute fährt Houssem mit dem Bus.",
          "explanation": "Nach der Zeitangabe heute steht das konjugierte Verb fährt."
        },
        {
          "exerciseId": "c02-ex-11",
          "answer": "Was liest",
          "explanation": "In der W-Frage steht das Verb nach dem Fragewort."
        },
        {
          "exerciseId": "c02-ex-12",
          "answer": "Ich stehe um sieben Uhr auf. Am Morgen frühstücke ich. Am Abend lese ich gern.",
          "explanation": "Eine mögliche Antwort. Eigene passende Sätze sind richtig."
        },
        {
          "exerciseId": "c02-ex-13",
          "answer": "Warum lernst du Deutsch?",
          "explanation": "Nach dem Fragewort warum steht das Verb lernst."
        },
        {
          "exerciseId": "c02-ex-14",
          "answer": "beginnt",
          "explanation": "Bei ihr heißt die Form beginnt."
        },
        {
          "exerciseId": "c02-sum-1",
          "answer": "Das konjugierte Verb steht normalerweise an Position zwei.",
          "explanation": "Auch wenn eine Zeitangabe am Anfang steht, bleibt das Verb auf Position zwei."
        },
        {
          "exerciseId": "c02-sum-2",
          "answer": "spricht",
          "explanation": "Bei er wechselt sprechen zu spricht."
        },
        {
          "exerciseId": "c02-sum-3",
          "answer": "Mit dem Verb.",
          "explanation": "Das Verb steht bei einer Ja-/Nein-Frage an erster Stelle."
        },
        {
          "exerciseId": "c02-ex-r1",
          "answer": "Um acht Uhr.",
          "explanation": "Im Text steht: Mira steht am Samstag um acht Uhr auf."
        },
        {
          "exerciseId": "c02-ex-r2",
          "answer": "Mit dem Fahrrad.",
          "explanation": "Karim fährt mit dem Fahrrad zum Park."
        },
        {
          "exerciseId": "c02-ex-r3",
          "answer": "true",
          "explanation": "Nach der Heimfahrt lernt Karim zuerst für die Prüfung."
        },
        {
          "exerciseId": "c02-ex-r4",
          "answer": "Um sieben Uhr.",
          "explanation": "Karim schreibt: Um sieben Uhr bin ich zu Hause."
        },
        {
          "exerciseId": "c02-ex-v1",
          "answer": "häufig",
          "explanation": "Oft bedeutet häufig."
        },
        {
          "exerciseId": "c02-ex-v2",
          "answer": "occupation, profession",
          "explanation": "Der Beruf beschreibt die Arbeit einer Person. Das Wort stammt aus dem Wortschatz von Kapitel 01."
        },
        {
          "exerciseId": "c02-ex-v3",
          "answer": "höre",
          "explanation": "Zu ich gehört höre."
        },
        {
          "exerciseId": "c02-ex-v4",
          "answer": "Das",
          "explanation": "Team ist Neutrum: das Team. Die Frage wiederholt die Artikel aus Kapitel 01."
        },
        {
          "exerciseId": "c02-ex-v5",
          "answer": "fährt",
          "explanation": "Bei er wechselt fahren zu fährt."
        },
        {
          "exerciseId": "c02-ex-g1",
          "answer": "lerne",
          "explanation": "Das Subjekt ich bekommt die Endung -e."
        },
        {
          "exerciseId": "c02-ex-g2",
          "answer": "arbeitet",
          "explanation": "Bei ihr heißt die Form arbeitet."
        },
        {
          "exerciseId": "c02-ex-g3",
          "answer": "sprichst",
          "explanation": "Sprechen wechselt bei du e → i: du sprichst."
        },
        {
          "exerciseId": "c02-ex-g4",
          "answer": "fährt",
          "explanation": "Fahren wechselt bei er a → ä: er fährt."
        },
        {
          "exerciseId": "c02-ex-g5",
          "answer": "Am Abend liest Tassnim.",
          "explanation": "Nach der Zeitangabe folgt direkt das konjugierte Verb."
        },
        {
          "exerciseId": "c02-ex-g6",
          "answer": "Spielst du heute?",
          "explanation": "Die Ja-/Nein-Frage beginnt mit dem Verb."
        },
        {
          "exerciseId": "c02-ex-g7",
          "answer": "Wo arbeitet er?",
          "explanation": "Wo fragt nach einem Ort."
        },
        {
          "exerciseId": "c02-ex-s1",
          "answer": "Heute arbeitet Houssem am Computer.",
          "explanation": "Verwende alle Angaben. Nach heute steht arbeitet."
        },
        {
          "exerciseId": "c02-ex-s2",
          "answer": "Wann spielt Tassnim Gitarre?",
          "explanation": "Frage nach der Zeit mit Wann. Das Verb steht danach."
        },
        {
          "exerciseId": "c02-ex-w1",
          "answer": "Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich. Danach fahre ich zur Arbeit. Am Morgen lerne ich Deutsch.",
          "explanation": "Eine mögliche Antwort. Eigene richtige Tagesabläufe sind ebenfalls korrekt."
        },
        {
          "exerciseId": "c02-ex-w2",
          "answer": "Hallo Lina, nach der Arbeit fahre ich nach Hause und koche etwas. Danach höre ich Musik oder lese ein Buch. Was machst du am Abend? Hast du Zeit für einen Spaziergang? Viele Grüße, Samira.",
          "explanation": "Eine mögliche Nachricht mit zwei Aktivitäten und einer Frage."
        },
        {
          "exerciseId": "c02-ex-w3",
          "answer": "An einem normalen Tag stehe ich um sieben Uhr auf. Ich frühstücke zu Hause und fahre mit dem Bus zur Arbeit. Am Nachmittag arbeite ich und spreche mit meinem Team. Nach der Arbeit gehe ich manchmal spazieren. Am Abend lese ich gern oder höre Musik. Was machst du am Abend?",
          "explanation": "Eine mögliche Antwort. Eigene Alltagstexte mit den verlangten Informationen sind ebenfalls richtig."
        }
      ],
      "modelAnswers": [
        {
          "text": "Beispiel für die Schreibübung: Ich stehe um sieben Uhr auf. Dann frühstücke ich. Um acht Uhr fahre ich zur Arbeit. Am Nachmittag spreche ich mit meinem Team. Nach der Arbeit lese ich gern. Was machst du am Abend?"
        },
        {
          "text": "Beispiel für eine Nachricht: Hallo Sami, nach der Arbeit fahre ich nach Hause. Ich koche und höre Musik. Später lese ich gern. Was machst du am Abend? Viele Grüße, Lina."
        },
        {
          "text": "Beispiel für eine Frage zum Alltag: Wann stehst du auf? Was machst du nach der Arbeit? Spielst du gern Musik?"
        }
      ],
      "criteria": [
        "Bei offenen Antworten können andere Sätze richtig sein. Prüfe, ob sie die Aufgabe erfüllen und die Verbformen zum Subjekt passen.",
        "Für Sätze mit einer Zeitangabe am Anfang: Prüfe, ob direkt danach das konjugierte Verb steht.",
        "Bei Ja-/Nein-Fragen steht das Verb zuerst. Bei W-Fragen folgt das Verb direkt auf das Fragewort.",
        "Prüfe bei stammverändernden Verben die Formen du und er/sie/es. Achte auch auf Großschreibung am Satzanfang und Satzzeichen.",
        "Bei der Prüfung zählen die zwei Satzbauaufgaben 10 Punkte und die drei Schreibaufgaben 20 Punkte. Nutze die jeweilige Punkteaufteilung als Bewertungsraster."
      ],
      "mistakeReview": "Notiere die Aufgaben-ID, deine Antwort und die passende Korrektur. Ordne den Fehler einem Thema zu: Verbendung, Stammwechsel, Subjekt-Verb-Kongruenz, Verbzweitstellung, Ja-/Nein-Frage oder W-Frage. Schreibe danach einen eigenen Beispielsatz und übe die betreffende Regel erneut."
    }
  ]
};

function collectExercises(section) {
  return [
    ...(section.exercises || []),
    ...(section.comprehension || []),
    ...(section.rules || []).flatMap(rule => rule.exercises || []),
    ...(section.exam?.questions || [])
  ];
}
const exercises = chapter.sections.flatMap(collectExercises);
chapter.sections[8].answers = exercises.map(question => ({
  exerciseId: question.id,
  answer: question.type === 'multiple-choice' ? question.options[question.answer] : question.type === 'written' ? question.modelAnswer : question.answer,
  explanation: question.explanation || (question.type === 'written' ? `Musterantwort: ${question.modelAnswer}` : '')
}));
window.CHAPTERS = window.CHAPTERS || {};
window.CHAPTERS[chapter.id] = chapter;
})();
