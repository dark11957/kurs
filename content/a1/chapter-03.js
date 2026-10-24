(()=>{
const chapter = {
  "id": "chapter-03",
  "metadata": {
    "number": "03",
    "level": "A1",
    "title": "Akkusativ, Negation und Possessivartikel",
    "subtitle": "Dinge haben, brauchen und kaufen",
    "vocabularyTheme": "Persönliche Dinge, Einkaufen, Lebensmittel und Alltagsgegenstände",
    "prerequisites": [
      "Kapitel 01: Genus, Artikel und Personalpronomen im Nominativ.",
      "Kapitel 02: Präsensformen, einfache Aussagen und Fragen."
    ],
    "objectives": [
      "Du unterscheidest in einfachen Sätzen Subjekt im Nominativ und direktes Objekt im Akkusativ.",
      "Du bildest Akkusativformen bestimmter, unbestimmter, negativer und demonstrativer Artikel.",
      "Du ersetzt Akkusativobjekte durch Personalpronomen.",
      "Du verwendest häufige Akkusativverben, Zeitdauern im Akkusativ und die feste Verbindung es gibt.",
      "Du verneinst Nomen, Handlungen, Eigenschaften und einfache Aussagen passend mit kein, nicht und wichtigen negativen Ausdrücken.",
      "Du verwendest Possessivartikel und Demonstrativartikel im Akkusativ.",
      "Du sprichst über persönliche Dinge, Einkäufe, Wünsche und fehlende Gegenstände."
    ],
    "grammarSubjects": [
      "Nominativ und Akkusativ",
      "Akkusativartikel",
      "Akkusativpersonalpronomen",
      "Häufige Akkusativverben",
      "Akkusativobjekt",
      "Akkusativ bei Zeitangaben",
      "es gibt + Akkusativ",
      "Negation mit nicht und kein",
      "Possessivartikel",
      "Demonstrativartikel",
      "Grundlegende negative Ausdrücke"
    ],
    "grammarReferences": [
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      50,
      51,
      52,
      53,
      63,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366
    ]
  },
  "sections": [
    {
      "id": "introduction",
      "title": "Einstieg",
      "description": "Entdecke, welche Dinge im Satz die Handlung direkt betreffen und wie man sie verneint.",
      "objectives": [
        "Nominativ und Akkusativ unterscheiden.",
        "Besitz mit mein, dein und weiteren Formen ausdrücken.",
        "Mit kein und nicht verneinen.",
        "Beim Einkaufen nach Dingen fragen."
      ],
      "prerequisites": [
        "Du kennst die Artikel der, die und das sowie Personalpronomen im Nominativ.",
        "Du kannst regelmäßige und häufige unregelmäßige Verben im Präsens verwenden."
      ],
      "reviewQuestions": [
        "Wer macht die Handlung im Satz?",
        "Welche Präsensform passt zu ich?",
        "Mit welcher Frage findest du das direkte Objekt?"
      ],
      "exercises": [
        {
          "id": "c03-intro-1",
          "label": "Vorwissen · 1",
          "type": "multiple-choice",
          "prompt": "Welches Wort ist im Satz das Subjekt? „Houssem sucht den Schlüssel.“",
          "options": [
            "Houssem",
            "sucht",
            "den Schlüssel"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Houssem macht die Handlung; er steht im Nominativ."
        },
        {
          "id": "c03-intro-2",
          "label": "Vorwissen · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form steht nach „ich“?",
          "options": [
            "suche",
            "suchst",
            "sucht"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Bei ich lautet die regelmäßige Präsensendung -e."
        },
        {
          "id": "c03-intro-3",
          "label": "Vorwissen · 3",
          "type": "multiple-choice",
          "prompt": "Welche Frage stellt man zu einem direkten Objekt?",
          "options": [
            "Wer?",
            "Wen oder was?",
            "Wem?"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Nach dem direkten Objekt fragt man Wen? oder Was?"
        }
      ],
      "keywords": [
        {
          "word": "der Akkusativ",
          "translation": "accusative case",
          "example": "Ich kaufe einen Apfel."
        },
        {
          "word": "das Objekt",
          "translation": "object",
          "example": "Die Tasche ist das Objekt: Ich suche die Tasche."
        },
        {
          "word": "besitzen",
          "translation": "to own",
          "example": "Ich besitze ein Handy."
        },
        {
          "word": "verneinen",
          "translation": "to negate",
          "example": "Ich habe keinen Kaffee."
        },
        {
          "word": "brauchen",
          "translation": "to need",
          "example": "Ich brauche eine Tasche."
        },
        {
          "word": "der Einkauf",
          "translation": "shopping",
          "example": "Der Einkauf ist heute klein."
        }
      ],
      "openingText": "Nach der Arbeit gehen Houssem und Tassnim in einen Laden. Das Geschäft ist klein und ruhig. Tassnim sucht ihre Geldbörse und findet sie nicht. „Hast du deinen Schlüssel?“, fragt Houssem. „Ja, aber ich habe keinen Apfel für zu Hause.“ Houssem nimmt einen Apfel und eine Flasche Wasser. Tassnim kauft ein Brot. „Möchtest du diesen Tee?“, fragt sie. „Nein, danke. Ich trinke heute keinen Tee.“",
      "discoveryQuestions": [
        "Was sucht Tassnim?",
        "Welche Wörter zeigen, wem der Schlüssel gehört?",
        "Warum steht es „einen Apfel“, aber „eine Flasche“?",
        "Welche Wörter verneinen Nomen oder Handlungen?"
      ]
    },
    {
      "id": "reading",
      "title": "Lesen & Verstehen",
      "description": "Lies einen Dialog im Laden und eine Nachricht über Dinge für das Abendessen.",
      "texts": [
        {
          "id": "c03-reading-a",
          "title": "Lesetext A: Ein kurzer Einkauf",
          "format": "dialogue",
          "lines": [
            {
              "speaker": "Tassnim",
              "text": "Hast du deine Geldbörse gefunden?"
            },
            {
              "speaker": "Houssem",
              "text": "Ja, sie ist in meinem Rucksack. Was brauchst du?"
            },
            {
              "speaker": "Tassnim",
              "text": "Ich kaufe einen Apfel und eine Flasche Wasser. Ich brauche kein Brot."
            },
            {
              "speaker": "Houssem",
              "text": "Möchtest du diesen Tee?"
            },
            {
              "speaker": "Tassnim",
              "text": "Nein, danke. Ich trinke keinen Tee. Ich nehme lieber eine Flasche Wasser."
            },
            {
              "speaker": "Houssem",
              "text": "Ich suche meinen Schlüssel. Hast du ihn gesehen?"
            },
            {
              "speaker": "Tassnim",
              "text": "Nein, ich sehe ihn nicht. Vielleicht liegt er in deiner Tasche."
            },
            {
              "speaker": "Houssem",
              "text": "Hier ist er! Ich brauche heute nichts anderes."
            },
            {
              "speaker": "Tassnim",
              "text": "Hast du deinen Einkaufszettel?"
            },
            {
              "speaker": "Houssem",
              "text": "Ja, ich habe ihn. Heute brauchen wir kein Brot."
            }
          ]
        },
        {
          "id": "c03-reading-b",
          "title": "Lesetext B: Eine Nachricht aus dem Laden",
          "format": "email",
          "text": "Hallo Houssem,\n\nich bin gerade im Laden. Ich brauche ein paar Dinge für das Abendessen. In meiner Tasche habe ich schon einen Apfel und zwei Flaschen Wasser. Ich kaufe heute kein Brot, denn zu Hause haben wir noch genug. Mein Bruder isst keinen Käse. Deshalb nehme ich Tomaten und Reis. Hast du deinen Schlüssel? Ich habe ihn nicht in der Küche gefunden. Im Laden gibt es auch Tee, aber keinen Kaffee. Möchtest du etwas? Schreib mir bitte.\n\nViele Grüße\nTassnim"
        }
      ],
      "comprehension": [
        {
          "id": "c03-r-a1",
          "label": "Text A · 1",
          "type": "multiple-choice",
          "prompt": "Was findet Houssem in seinem Rucksack?",
          "options": [
            "Tassnims Geldbörse.",
            "Seinen Schlüssel.",
            "Einen Apfel."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Houssem sagt: „Ja, sie ist in meinem Rucksack.“ „Sie“ bezieht sich auf Tassnims Geldbörse."
        },
        {
          "id": "c03-r-a2",
          "label": "Text A · 2",
          "type": "true-false",
          "prompt": "Houssem findet Tassnims Geldbörse in seinem Rucksack.",
          "answer": "true",
          "points": 1,
          "explanation": "Houssem bestätigt, dass sie in seinem Rucksack ist."
        },
        {
          "id": "c03-r-a3",
          "label": "Text A · 3",
          "type": "multiple-choice",
          "prompt": "Was kauft Tassnim im Laden?",
          "options": [
            "Einen Apfel und eine Flasche Wasser.",
            "Brot und Käse.",
            "Einen Kaffee und einen Tee."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Sie kauft einen Apfel und eine Flasche Wasser."
        },
        {
          "id": "c03-r-a4",
          "label": "Text A · 4",
          "type": "fill-blank",
          "prompt": "Ergänze: Heute brauchen wir ____ Brot.",
          "answer": "kein",
          "points": 1,
          "explanation": "Houssem sagt, dass sie heute kein Brot brauchen. Brot ist ein Akkusativobjekt im Neutrum; kein bleibt kein."
        },
        {
          "id": "c03-r-b1",
          "label": "Text B · 1",
          "type": "multiple-choice",
          "prompt": "Was hat Tassnim schon in ihrer Tasche?",
          "options": [
            "Einen Apfel und zwei Flaschen Wasser.",
            "Brot und Käse.",
            "Tee und Kaffee."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Tassnim hat einen Apfel und zwei Flaschen Wasser."
        },
        {
          "id": "c03-r-b2",
          "label": "Text B · 2",
          "type": "true-false",
          "prompt": "Tassnim kauft heute Brot.",
          "answer": "false",
          "points": 1,
          "explanation": "Sie kauft heute kein Brot."
        },
        {
          "id": "c03-r-b3",
          "label": "Text B · 3",
          "type": "fill-blank",
          "prompt": "Wen oder was hat Tassnim nicht in der Küche gefunden? Ihren ____.",
          "answer": "Schlüssel",
          "points": 1,
          "explanation": "Sie fragt: Hast du deinen Schlüssel? Ich habe ihn nicht in der Küche gefunden."
        },
        {
          "id": "c03-r-b4",
          "label": "Text B · 4",
          "type": "multiple-choice",
          "prompt": "Was gibt es im Laden, aber nicht?",
          "options": [
            "Tee, aber keinen Kaffee.",
            "Kaffee, aber keinen Tee.",
            "Brot, aber keinen Reis."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Der Text nennt Tee, aber keinen Kaffee."
        }
      ],
      "annotations": [
        {
          "text": "Hallo Houssem,\n\nich bin gerade im Laden. Ich brauche ein paar Dinge für das Abendessen. In meiner Tasche habe ich schon einen Apfel und zwei Flaschen Wasser. Ich kaufe heute kein Brot, denn zu Hause haben wir noch genug. Mein Bruder isst keinen Käse. Deshalb nehme ich Tomaten und Reis. Hast du deinen Schlüssel? Ich habe ihn nicht in der Küche gefunden. Im Laden gibt es auch Tee, aber keinen Kaffee. Möchtest du etwas? Schreib mir bitte.\n\nViele Grüße\nTassnim",
          "marks": [
            {
              "start": 16,
              "end": 19,
              "category": "nominative",
              "explanation": "Das Personalpronomen ich ist hier das Subjekt des Satzes."
            },
            {
              "start": 53,
              "end": 67,
              "category": "accusative",
              "explanation": "Dinge ist das direkte Objekt von brauche."
            },
            {
              "start": 120,
              "end": 131,
              "category": "accusative",
              "explanation": "Apfel ist maskulin; das Objekt steht im Akkusativ."
            },
            {
              "start": 136,
              "end": 156,
              "category": "accusative",
              "explanation": "Die Flaschen sind das direkte Objekt; hier steht der Akkusativ im Plural."
            },
            {
              "start": 174,
              "end": 183,
              "category": "accusative",
              "explanation": "Brot ist Neutrum; kein Brot ist hier das verneinte Objekt."
            },
            {
              "start": 238,
              "end": 249,
              "category": "accusative",
              "explanation": "Käse ist maskulin; der Negativartikel lautet keinen."
            },
            {
              "start": 295,
              "end": 311,
              "category": "accusative",
              "explanation": "Schlüssel ist maskulin; dein bekommt im Akkusativ -en."
            },
            {
              "start": 322,
              "end": 325,
              "category": "accusative",
              "explanation": "ihn ersetzt das maskuline Akkusativobjekt den Schlüssel."
            },
            {
              "start": 387,
              "end": 400,
              "category": "accusative",
              "explanation": "Kaffee ist maskulin; der Negativartikel lautet keinen."
            }
          ]
        }
      ],
      "exercises": [
        {
          "id": "c03-read-obs1",
          "label": "Sprachbeobachtung · 1",
          "type": "multiple-choice",
          "prompt": "Welche Wortgruppe ist das Akkusativobjekt? „Ich brauche ein paar Dinge.“",
          "options": [
            "Ich",
            "brauche",
            "ein paar Dinge"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Die Frage Was brauche ich? führt zum Akkusativobjekt."
        },
        {
          "id": "c03-read-obs2",
          "label": "Sprachbeobachtung · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form verneint ein Nomen im Text?",
          "options": [
            "kein Brot",
            "nicht Küche",
            "nie Schlüssel"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Kein steht direkt vor dem verneinten Nomen Brot."
        },
        {
          "id": "c03-read-obs3",
          "label": "Textvergleich · 1",
          "type": "multiple-choice",
          "prompt": "Was haben beide Texte gemeinsam?",
          "options": [
            "In beiden Texten suchen oder kaufen die Figuren Dinge.",
            "Beide Texte sind Einkaufszettel.",
            "In beiden Texten kauft niemand etwas."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Im Dialog suchen und kaufen Houssem und Tassnim Dinge; in der Nachricht kauft Tassnim Dinge für das Essen."
        }
      ]
    },
    {
      "id": "vocabulary",
      "title": "Wortschatz",
      "description": "Lerne Gegenstände, Lebensmittel und Verben für einen Einkauf.",
      "vocabulary": [
        {
          "id": "c03-v01",
          "word": "Rucksack",
          "translation": "backpack",
          "category": "noun",
          "example": "Ich trage meinen Rucksack.",
          "article": "der",
          "plural": "die Rucksäcke"
        },
        {
          "id": "c03-v02",
          "word": "Tasche",
          "translation": "bag",
          "category": "noun",
          "example": "Ich suche meine Tasche.",
          "article": "die",
          "plural": "die Taschen"
        },
        {
          "id": "c03-v03",
          "word": "Handy",
          "translation": "mobile phone",
          "category": "noun",
          "example": "Ich finde mein Handy.",
          "article": "das",
          "plural": "die Handys"
        },
        {
          "id": "c03-v04",
          "word": "Schlüssel",
          "translation": "key",
          "category": "noun",
          "example": "Hast du deinen Schlüssel?",
          "article": "der",
          "plural": "die Schlüssel"
        },
        {
          "id": "c03-v05",
          "word": "Geldbörse",
          "translation": "wallet",
          "category": "noun",
          "example": "Ich brauche meine Geldbörse.",
          "article": "die",
          "plural": "die Geldbörsen"
        },
        {
          "id": "c03-v06",
          "word": "Einkaufszettel",
          "translation": "shopping list",
          "category": "noun",
          "example": "Mein Einkaufszettel liegt hier.",
          "article": "der",
          "plural": "die Einkaufszettel"
        },
        {
          "id": "c03-v07",
          "word": "Apfel",
          "translation": "apple",
          "category": "noun",
          "example": "Ich nehme einen Apfel.",
          "article": "der",
          "plural": "die Äpfel"
        },
        {
          "id": "c03-v08",
          "word": "Flasche",
          "translation": "bottle",
          "category": "noun",
          "example": "Sie kauft eine Flasche Wasser.",
          "article": "die",
          "plural": "die Flaschen"
        },
        {
          "id": "c03-v09",
          "word": "Brot",
          "translation": "bread",
          "category": "noun",
          "example": "Wir brauchen ein Brot.",
          "article": "das",
          "plural": "die Brote"
        },
        {
          "id": "c03-v10",
          "word": "Käse",
          "translation": "cheese",
          "category": "noun",
          "example": "Mein Bruder isst keinen Käse.",
          "article": "der",
          "plural": "die Käse (verschiedene Sorten)"
        },
        {
          "id": "c03-v11",
          "word": "Tee",
          "translation": "tea",
          "category": "noun",
          "example": "Möchtest du einen Tee?",
          "article": "der",
          "plural": "die Tees"
        },
        {
          "id": "c03-v12",
          "word": "Rechnung",
          "translation": "bill, invoice",
          "category": "noun",
          "example": "Ich bezahle die Rechnung.",
          "article": "die",
          "plural": "die Rechnungen"
        },
        {
          "id": "c03-v13",
          "word": "Laden",
          "translation": "shop",
          "category": "noun",
          "example": "Im Laden gibt es Wasser.",
          "article": "der",
          "plural": "die Läden"
        },
        {
          "id": "c03-v14",
          "word": "Preis",
          "translation": "price",
          "category": "noun",
          "example": "Der Preis ist niedrig.",
          "article": "der",
          "plural": "die Preise"
        },
        {
          "id": "c03-v15",
          "word": "Angebot",
          "translation": "special offer",
          "category": "noun",
          "example": "Dieses Angebot ist günstig.",
          "article": "das",
          "plural": "die Angebote"
        },
        {
          "id": "c03-v16",
          "word": "kaufen",
          "translation": "to buy",
          "category": "verb",
          "example": "Ich kaufe einen Apfel.",
          "forms": "kauft; kaufte"
        },
        {
          "id": "c03-v17",
          "word": "suchen",
          "translation": "to look for",
          "category": "verb",
          "example": "Wir suchen den Schlüssel.",
          "forms": "sucht; suchte"
        },
        {
          "id": "c03-v18",
          "word": "brauchen",
          "translation": "to need",
          "category": "verb",
          "example": "Tassnim braucht eine Tasche.",
          "forms": "braucht; brauchte"
        },
        {
          "id": "c03-v19",
          "word": "finden",
          "translation": "to find",
          "category": "verb",
          "example": "Houssem findet die Geldbörse.",
          "forms": "findet; fand"
        },
        {
          "id": "c03-v20",
          "word": "bezahlen",
          "translation": "to pay",
          "category": "verb",
          "example": "Sie bezahlt die Rechnung.",
          "forms": "bezahlt; bezahlte"
        }
      ],
      "expressions": [
        "Was brauchst du? — Ich brauche eine Flasche Wasser.",
        "Suchst du deinen Schlüssel? — Ja, ich suche ihn.",
        "Hast du meine Geldbörse gesehen?",
        "Ich nehme diesen Apfel.",
        "Möchtest du einen Tee? — Nein, danke.",
        "Ich kaufe kein Brot.",
        "Es gibt hier keine Äpfel.",
        "Wie viel kostet die Tasche? — Sie kostet zwanzig Euro.",
        "Das brauche ich heute nicht.",
        "Weder Tee noch Kaffee, bitte.",
        "Wiederholung aus Kapitel 01: die Firma, das Team, der Beruf, der Name.",
        "Wiederholung aus Kapitel 02: arbeiten, lesen, manchmal."
      ],
      "wordFamilies": [
        {
          "root": "kaufen",
          "words": [
            "kaufen",
            "der Einkauf",
            "einkaufen"
          ]
        },
        {
          "root": "zahlen",
          "words": [
            "zahlen",
            "bezahlen",
            "die Zahlung"
          ]
        },
        {
          "root": "der Preis",
          "words": [
            "der Preis",
            "preiswert",
            "teuer"
          ]
        },
        {
          "root": "finden",
          "words": [
            "finden",
            "der Fund",
            "auffindbar"
          ]
        }
      ],
      "synonyms": [
        {
          "word": "teuer",
          "synonym": "kostspielig",
          "antonym": "günstig"
        },
        {
          "word": "suchen",
          "synonym": "nach etwas sehen",
          "antonym": "finden"
        },
        {
          "word": "kaufen",
          "synonym": "erwerben",
          "antonym": "verkaufen"
        }
      ],
      "contextExamples": [
        "Ich kaufe einen Apfel und eine Flasche Wasser.",
        "Tassnim sucht ihre Geldbörse.",
        "Houssem findet den Schlüssel nicht.",
        "Im Laden gibt es Brot, aber keinen Käse.",
        "Wir bezahlen die Rechnung."
      ],
      "exercises": [
        {
          "id": "c03-vocab-1",
          "label": "Wortschatz · 1",
          "type": "multiple-choice",
          "prompt": "Welcher Artikel passt? ____ Handy",
          "options": [
            "der",
            "die",
            "das"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Handy ist Neutrum: das Handy."
        },
        {
          "id": "c03-vocab-2",
          "label": "Wortschatz · 2",
          "type": "fill-blank",
          "prompt": "Ergänze den Plural: der Schlüssel – die ____.",
          "answer": "Schlüssel",
          "points": 1,
          "explanation": "Schlüssel hat im Plural keine Endung."
        },
        {
          "id": "c03-vocab-3",
          "label": "Wortschatz · 3",
          "type": "multiple-choice",
          "prompt": "Was passt? „Ich ____ das Brot.“",
          "options": [
            "kaufe",
            "suche",
            "bezahle"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Kaufen bedeutet, eine Ware zu erwerben."
        },
        {
          "id": "c03-vocab-4",
          "label": "Wortschatz · 4",
          "type": "written",
          "prompt": "Schreibe einen Satz mit „die Rechnung“ und „bezahlen“.",
          "answer": "Ich bezahle die Rechnung.",
          "points": 1,
          "explanation": "Die Rechnung ist das Akkusativobjekt. Andere grammatisch richtige Sätze sind möglich.",
          "modelAnswer": "Ich bezahle die Rechnung."
        }
      ]
    },
    {
      "id": "grammar",
      "title": "Grammatik",
      "description": "Lerne direkte Objekte, Akkusativformen, Besitzwörter und Verneinung.",
      "overview": "Der Nominativ zeigt in einfachen Aussagesätzen meistens das Subjekt. Ein direktes Objekt steht häufig im Akkusativ. Im maskulinen Singular verändert sich der Artikel besonders sichtbar. Pronomen und Possessivartikel zeigen dieselbe Kasusform. Kein verneint ein Nomen; nicht verneint eine Handlung, eine Eigenschaft oder einen bestimmten Satzteil.",
      "rules": [
        {
          "id": "c03-g1",
          "title": "Nominativ und Akkusativ (subject and direct object)",
          "explanation": "Der Nominativ zeigt meistens, wer oder was die Handlung macht. Der Akkusativ zeigt oft, wen oder was die Handlung direkt betrifft. Frage nach dem Akkusativ mit Wen? oder Was? Vergleiche: „Der Apfel ist frisch.“ Der Apfel ist das Subjekt (Nominativ). „Ich nehme den Apfel.“ Ich mache etwas; den Apfel nehme ich (Akkusativ).",
          "formula": "Subjekt im Nominativ + Verb + direktes Objekt im Akkusativ",
          "examples": [
            "Der Schlüssel liegt hier. – Ich suche den Schlüssel.",
            "Die Tasche ist neu. – Houssem kauft die Tasche.",
            "Das Handy ist teuer. – Tassnim braucht das Handy.",
            "Die Äpfel sind frisch. – Wir nehmen die Äpfel."
          ],
          "exceptions": "Nicht jedes Verb hat ein Akkusativobjekt. Bei sein steht eine Personen- oder Berufsbezeichnung oft im Nominativ: „Sie ist Ärztin.“ Lerne neue Verben mit ihrer Ergänzung.",
          "mistakes": "Falsch: „Ich suche der Schlüssel.“ Richtig: „Ich suche den Schlüssel.“ Das Objekt von suchen steht hier im Akkusativ.",
          "tip": "Finde zuerst das Verb und das Subjekt. Frage dann: Wen oder was betrifft die Handlung direkt?",
          "reference": "22, 25–26",
          "exercises": [
            {
              "id": "c03-g1-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Welches Wort ist das Akkusativobjekt? „Tassnim kauft einen Apfel.“",
              "options": [
                "Tassnim",
                "kauft",
                "einen Apfel"
              ],
              "answer": 2,
              "points": 1,
              "explanation": "Was kauft Tassnim? Einen Apfel."
            },
            {
              "id": "c03-g1-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Welcher Satz hat ein Objekt im Akkusativ?",
              "options": [
                "Der Laden ist klein.",
                "Houssem sucht den Schlüssel.",
                "Tassnim ist freundlich."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Den Schlüssel ist das direkte Objekt von sucht."
            },
            {
              "id": "c03-g1-3",
              "label": "Mini-Übung 3",
              "type": "fill-blank",
              "prompt": "Ergänze den Artikel: Ich brauche ____ Rucksack.",
              "answer": "einen",
              "points": 1,
              "explanation": "Was brauche ich? Einen Rucksack. Maskulinum bekommt im Akkusativ -en."
            }
          ]
        },
        {
          "id": "c03-g2",
          "title": "Artikel im Akkusativ (accusative articles)",
          "explanation": "Im Akkusativ ändert sich vor allem der maskuline Artikel im Singular: der wird den, ein wird einen, kein wird keinen und mein wird meinen. Feminine, neutrale und pluralische Formen sehen im Akkusativ wie im Nominativ aus. Der unbestimmte Artikel hat keinen Plural; dort verwendest du zum Beispiel keine oder gar keinen Artikel.",
          "formula": "Maskulin: der → den, ein → einen, kein → keinen, dieser → diesen. Feminin, Neutrum und Plural: Endung bleibt gleich.",
          "examples": [
            "Ich kaufe den Apfel. / Der Apfel ist frisch.",
            "Houssem nimmt einen Tee. / Ein Tee steht auf dem Tisch.",
            "Tassnim sucht die Tasche. / Die Tasche ist hier.",
            "Wir kaufen keine Äpfel."
          ],
          "exceptions": "Die Akkusativformen von den, einen, keinen und diesen gelten hier für maskuline Nomen im Singular. Im Plural gibt es keinen unbestimmten Artikel: „Ich kaufe Äpfel“ oder „Ich kaufe keine Äpfel.“",
          "mistakes": "Falsch: „Ich nehme ein Apfel.“ Richtig: „Ich nehme einen Apfel.“ Apfel ist maskulin, und das Objekt steht im Akkusativ.",
          "tip": "Merke dir die auffällige Änderung beim maskulinen Artikel: ein → einen. Die anderen drei Gruppen bleiben in diesen Formen gleich.",
          "reference": "23, 50, 52",
          "exercises": [
            {
              "id": "c03-g2-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ergänze: Ich kaufe ____ Tee.",
              "options": [
                "ein",
                "einen",
                "eine"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Tee ist maskulin; im Akkusativ heißt es einen Tee."
            },
            {
              "id": "c03-g2-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Houssem sucht ____ Tasche. (bestimmter Artikel)",
              "answer": "die",
              "points": 1,
              "explanation": "Tasche ist feminin. Die Form die bleibt im Akkusativ gleich."
            },
            {
              "id": "c03-g2-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Form ist richtig?",
              "options": [
                "Wir haben kein Äpfel.",
                "Wir haben keine Äpfel.",
                "Wir haben keinen Äpfel."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Im Plural lautet der Negativartikel keine."
            }
          ]
        },
        {
          "id": "c03-g3",
          "title": "Personalpronomen im Akkusativ (accusative personal pronouns)",
          "explanation": "Ein Akkusativpronomen ersetzt ein Akkusativobjekt, damit du das Nomen nicht wiederholen musst. Die Formen ich, du, er, wir und ihr verändern sich deutlich. Die Formen sie, es und sie für mehrere Personen bleiben gleich, aber ihre Aufgabe im Satz ist eine andere. Die höfliche Anrede Sie bleibt großgeschrieben.",
          "formula": "Nominativ → Akkusativ: ich → mich, du → dich, er → ihn, wir → uns, ihr → euch",
          "examples": [
            "Houssem sieht mich.",
            "Ich sehe dich.",
            "Tassnim kennt ihn.",
            "Wir besuchen sie. / Sie besucht uns.",
            "Ich finde es. – Ich sehe euch. – Ich kenne Sie."
          ],
          "exceptions": "Ersetzt das Pronomen eine Sache, richtet es sich nach dem grammatischen Genus: der Schlüssel → ihn; die Tasche → sie; das Handy → es. Bei mehreren Dingen heißt es sie.",
          "mistakes": "Falsch: „Ich sehe er.“ Richtig: „Ich sehe ihn.“ Nach sehen steht die Person als Akkusativobjekt.",
          "tip": "Lerne Pronomenpaare: ich–mich, du–dich, er–ihn. Verbinde jede Form mit einem Beispielsatz.",
          "reference": "24, 63",
          "exercises": [
            {
              "id": "c03-g3-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ersetze „den Schlüssel“: „Ich suche den Schlüssel.“",
              "options": [
                "Ich suche ihn.",
                "Ich suche er.",
                "Ich suche ihm."
              ],
              "answer": 0,
              "points": 1,
              "explanation": "Der Schlüssel ist maskulin; das Akkusativpronomen lautet ihn."
            },
            {
              "id": "c03-g3-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Ersetze „die Tasche“: „Houssem findet die Tasche.“",
              "options": [
                "Houssem findet sie.",
                "Houssem findet ihr.",
                "Houssem findet es."
              ],
              "answer": 0,
              "points": 1,
              "explanation": "Die Tasche ist feminin; das Akkusativpronomen lautet sie."
            },
            {
              "id": "c03-g3-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Ergänze: „Tassnim besucht Houssem und mich.“ – Sie besucht ____.",
              "options": [
                "wir",
                "uns",
                "euch"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Houssem und ich bedeutet uns; als Akkusativobjekt bleibt es uns."
            }
          ]
        },
        {
          "id": "c03-g4",
          "title": "Akkusativverben, Zeitdauer und es gibt (accusative verbs, duration and there is/are)",
          "explanation": "Viele häufige Verben haben ein direktes Objekt im Akkusativ: haben, brauchen, kaufen, suchen, finden, nehmen, sehen, essen, trinken und lesen. Auch eine Zeitdauer kann ohne Präposition im Akkusativ stehen. Bei „es gibt“ steht die Sache oder Person immer im Akkusativ.",
          "formula": "Person/Sache im Nominativ + Akkusativverb + Objekt im Akkusativ. | Es gibt + Akkusativ. | Verb + Zeitdauer im Akkusativ.",
          "examples": [
            "Ich brauche eine Tasche.",
            "Tassnim findet ihren Schlüssel.",
            "Es gibt einen Laden und eine Bäckerei.",
            "Es gibt keine Äpfel.",
            "Wir bleiben einen Tag. – Ich lese zwei Stunden."
          ],
          "exceptions": "Bei „es gibt“ bleibt das Verb gibt immer in der 3. Person Singular, auch wenn danach ein Plural steht: „Es gibt Äpfel.“ Eine Zeitdauer beantwortet die Frage Wie lange? und steht oft ohne Präposition: „eine Stunde“, „zwei Tage“.",
          "mistakes": "Falsch: „Es gibt ein Laden.“ Richtig: „Es gibt einen Laden.“ Laden ist maskulin; nach es gibt steht er im Akkusativ.",
          "tip": "Lerne es gibt als feste Verbindung mit Akkusativ. Bei einer Zeitdauer frage: Wie lange?",
          "reference": "25–28",
          "exercises": [
            {
              "id": "c03-g4-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Was ist richtig?",
              "options": [
                "Es gibt eine Laden.",
                "Es gibt einen Laden.",
                "Es gibt ein Laden."
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Es gibt steht mit einem maskulinen Akkusativobjekt: einen Laden."
            },
            {
              "id": "c03-g4-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Wir bleiben ____ Tag. (Zeitdauer)",
              "answer": "einen",
              "points": 1,
              "explanation": "Wie lange bleiben wir? Einen Tag. Die Zeitdauer steht im Akkusativ."
            },
            {
              "id": "c03-g4-3",
              "label": "Mini-Übung 3",
              "type": "true-false",
              "prompt": "Richtig oder falsch? „Es gibt Äpfel“ hat ein Verb im Plural.",
              "answer": "false",
              "points": 1,
              "explanation": "Das Verb bleibt immer gibt, also 3. Person Singular."
            }
          ]
        },
        {
          "id": "c03-g5",
          "title": "Negation mit nicht und kein (negation with nicht and kein)",
          "explanation": "Kein verneint ein Nomen ohne Artikel oder mit ein/eine. Es steht direkt vor dem Nomen und bekommt die passende Endung: keinen Apfel, keine Tasche, kein Handy, keine Äpfel. Nicht verneint ein Verb, eine Eigenschaft oder einen Satzteil. Bei einer Eigenschaft steht nicht davor: „Der Tee ist nicht heiß.“ Wenn du eine bestimmte Sache meinst und die ganze Aussage verneinst, steht nicht häufig nach dem Objekt: „Ich kaufe den Tee nicht.“",
          "formula": "kein + Nomen: Ich kaufe keinen Tee. | nicht + Eigenschaft: Der Tee ist nicht heiß. | Objekt + nicht: Ich kaufe den Tee nicht.",
          "examples": [
            "Ich habe keinen Schlüssel.",
            "Tassnim kauft keine Tasche.",
            "Das Handy ist nicht neu.",
            "Wir brauchen das Brot nicht.",
            "Ich suche nicht den Schlüssel, sondern die Geldbörse.",
            "Ich trinke nicht gern Kaffee."
          ],
          "exceptions": "Nicht kann verschiedene Satzteile verneinen. Es steht direkt vor dem Wort oder Ausdruck, den du besonders verneinst: „Nicht heute, sondern morgen.“ „Sondern“ folgt oft auf eine Verneinung und nennt die richtige Alternative.",
          "mistakes": "Falsch: „Ich habe kein Apfel.“ Richtig: „Ich habe keinen Apfel.“ Apfel ist maskulin und steht im Akkusativ.",
          "tip": "Frage: Verneine ich ein Nomen? Dann meist kein. Verneine ich eine Handlung, Eigenschaft oder bestimmte Sache? Dann nicht.",
          "reference": "348–355",
          "exercises": [
            {
              "id": "c03-g5-1",
              "label": "Mini-Übung 1",
              "type": "fill-blank",
              "prompt": "Ergänze: Ich habe ____ Handy. (kein)",
              "answer": "kein",
              "points": 1,
              "explanation": "Handy ist Neutrum; im Akkusativ lautet die Form kein Handy."
            },
            {
              "id": "c03-g5-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Welche Verneinung passt? „Die Tasche ist ____ teuer.“",
              "options": [
                "kein",
                "keine",
                "nicht"
              ],
              "answer": 2,
              "points": 1,
              "explanation": "Teuer ist eine Eigenschaft. Eigenschaften verneinst du mit nicht."
            },
            {
              "id": "c03-g5-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Form passt? „Ich esse ____ Apfel.“",
              "options": [
                "nicht Apfel",
                "kein Apfel",
                "keinen Apfel"
              ],
              "answer": 2,
              "points": 1,
              "explanation": "Apfel ist ein maskulines Akkusativobjekt: keinen Apfel."
            }
          ]
        },
        {
          "id": "c03-g6",
          "title": "Possessivartikel im Akkusativ (possessive determiners)",
          "explanation": "Possessivartikel zeigen, wem etwas gehört: mein, dein, sein, ihr, unser, euer, ihr und Ihr. Die Endung richtet sich nach dem Nomen, das danach kommt, nicht nach der Person, der es gehört. Vor einem maskulinen Akkusativobjekt kommt -en: meinen Schlüssel, deinen Rucksack, ihren Apfel. Feminine, neutrale und pluralische Formen benutzen die Endungen -e, keine Endung und -e.",
          "formula": "mein/dein/sein/ihr/unser/euer/Ihr + Akkusativendung: m -en, f -e, n keine, Plural -e",
          "examples": [
            "Ich suche meinen Schlüssel.",
            "Hast du deine Tasche?",
            "Houssem findet sein Handy.",
            "Tassnim nimmt ihre Geldbörse.",
            "Wir kaufen unser Brot. – Ihr sucht eure Äpfel."
          ],
          "exceptions": "Euer verliert vor einer Endung oft das zweite e: eure Tasche, euren Schlüssel. Bei der höflichen Anrede bleibt Ihr groß: „Haben Sie Ihren Schlüssel?“ In der 3. Person zeigen sein/ihr, wem der Besitzer entspricht.",
          "mistakes": "Falsch: „Sie sucht ihr Rucksack.“ Richtig: „Sie sucht ihren Rucksack.“ Rucksack ist maskulin und steht hier im Akkusativ.",
          "tip": "Bestimme zuerst das Genus und den Numerus des besessenen Nomens. Danach wähle die Endung.",
          "reference": "51",
          "exercises": [
            {
              "id": "c03-g6-1",
              "label": "Mini-Übung 1",
              "type": "fill-blank",
              "prompt": "Ergänze: Ich suche ____ Schlüssel. (mein)",
              "answer": "meinen",
              "points": 1,
              "explanation": "Schlüssel ist maskulin; Akkusativ: meinen Schlüssel."
            },
            {
              "id": "c03-g6-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Houssem braucht ____ Tasche. (sein)",
              "answer": "seine",
              "points": 1,
              "explanation": "Tasche ist feminin; die Akkusativform lautet seine Tasche."
            },
            {
              "id": "c03-g6-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Form passt? „Ihr kauft ____ Brot.“ (euer)",
              "options": [
                "euer",
                "eure",
                "euren"
              ],
              "answer": 0,
              "points": 1,
              "explanation": "Brot ist Neutrum; die Form bleibt euer Brot."
            }
          ]
        },
        {
          "id": "c03-g7",
          "title": "Demonstrativartikel: dieser, jener und solche (demonstrative determiners)",
          "explanation": "Demonstrativartikel zeigen auf eine bestimmte Sache: dieser, diese, dieses. Im Akkusativ bekommen sie dieselben Endungen wie der bestimmte Artikel: diesen Schlüssel, diese Tasche, dieses Handy, diese Äpfel. Jener, jene, jenes bedeutet „that“ und folgt demselben Muster; es klingt oft etwas formeller. Solche bedeutet „such“ und steht zum Beispiel vor einem Nomen im Plural.",
          "formula": "Nominativ → Akkusativ: dieser → diesen (m), diese → diese (f/Pl.), dieses → dieses (n).",
          "examples": [
            "Dieser Apfel ist rot. Ich nehme diesen Apfel.",
            "Diese Tasche ist neu. Ich kaufe diese Tasche.",
            "Dieses Handy ist teuer. Ich brauche dieses Handy.",
            "Jener Laden ist klein. Wir suchen jenen Laden.",
            "Solche Äpfel sind frisch. Ich kaufe solche Äpfel."
          ],
          "exceptions": "Dieser/jener/s solcher stehen direkt vor einem Nomen und richten sich nach dessen Genus und Numerus. Jener wird im Alltag seltener verwendet als dieser. Bei solch- ist hier besonders die häufige Pluralform solche wichtig.",
          "mistakes": "Falsch: „Ich nehme dieser Apfel.“ Richtig: „Ich nehme diesen Apfel.“ Das Demonstrativwort steht im maskulinen Akkusativ auf -en.",
          "tip": "Vergleiche diesen mit den: Beide markieren den maskulinen Akkusativ.",
          "reference": "52–53",
          "exercises": [
            {
              "id": "c03-g7-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ergänze: Ich nehme ____ Apfel. (dieser)",
              "options": [
                "dieser",
                "diesen",
                "dieses"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Apfel ist maskulin; Akkusativ: diesen Apfel."
            },
            {
              "id": "c03-g7-2",
              "label": "Mini-Übung 2",
              "type": "fill-blank",
              "prompt": "Ergänze: Wir kaufen ____ Tasche. (diese)",
              "answer": "diese",
              "points": 1,
              "explanation": "Tasche ist feminin; diese bleibt im Akkusativ gleich."
            },
            {
              "id": "c03-g7-3",
              "label": "Mini-Übung 3",
              "type": "multiple-choice",
              "prompt": "Welche Wortgruppe bedeutet „jener Laden“?",
              "options": [
                "jener Laden",
                "jene Laden",
                "jenes Laden"
              ],
              "answer": 0,
              "points": 1,
              "explanation": "Laden ist maskulin; die Nominativform lautet jener Laden."
            }
          ]
        },
        {
          "id": "c03-g8",
          "title": "Weitere negative Ausdrücke (other negative expressions)",
          "explanation": "Mit nichts verneinst du eine Sache: „Ich kaufe nichts.“ Niemand bezeichnet eine Person: als Subjekt „Niemand kommt“, als Akkusativobjekt „Ich sehe niemanden.“ Nie oder niemals bedeutet „never“, nirgendwo bedeutet „nowhere“. Noch nicht heißt „not yet“, nicht mehr heißt „no longer“, und überhaupt nicht verstärkt die Verneinung.",
          "formula": "nichts = no thing | niemand/niemanden = no person | nie = never | noch nicht = not yet | nicht mehr = no longer",
          "examples": [
            "Ich kaufe nichts.",
            "Niemand findet den Schlüssel. – Ich sehe niemanden.",
            "Tassnim trinkt nie Kaffee.",
            "Ich finde den Schlüssel nirgendwo.",
            "Der Laden ist noch nicht offen. – Ich kaufe dort nicht mehr.",
            "Der Tee ist überhaupt nicht teuer."
          ],
          "exceptions": "Auf eine verneinte Ja-/Nein-Frage kann doch eine positive Antwort sein: „Hast du keinen Schlüssel?“ – „Doch, hier ist er.“ In „weder … noch“ werden zwei Dinge gemeinsam verneint: „Ich kaufe weder Tee noch Kaffee.“ Vermeide im einfachen Standardsatz eine zusätzliche Verneinung wie „Ich kaufe nichts nicht.“ „Noch nie“ bedeutet „nie zuvor“ und steht oft bei vergangenen Erlebnissen; die entsprechende Zeitform lernst du später. „Niemals“ bedeutet dasselbe wie „nie“ und klingt oft stärker.",
          "mistakes": "Falsch: „Ich sehe nicht niemanden.“ (wenn du sagen möchtest, dass du keine Person siehst) Richtig: „Ich sehe niemanden.“",
          "tip": "Wähle ein klares negatives Wort. Nichts verneint eine Sache, niemand eine Person, nie eine Zeit und nirgendwo einen Ort.",
          "reference": "356–366",
          "exercises": [
            {
              "id": "c03-g8-1",
              "label": "Mini-Übung 1",
              "type": "multiple-choice",
              "prompt": "Ergänze: Ich kaufe ____ . (keine Sache)",
              "options": [
                "niemanden",
                "nichts",
                "nie"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Nichts verneint eine Sache."
            },
            {
              "id": "c03-g8-2",
              "label": "Mini-Übung 2",
              "type": "multiple-choice",
              "prompt": "Was passt? „Hast du keinen Schlüssel?“ – „____, hier ist er.“",
              "options": [
                "Nein",
                "Doch",
                "Nie"
              ],
              "answer": 1,
              "points": 1,
              "explanation": "Doch widerspricht der negativen Annahme: Ja, ich habe einen Schlüssel."
            },
            {
              "id": "c03-g8-3",
              "label": "Mini-Übung 3",
              "type": "true-false",
              "prompt": "„Noch nicht“ bedeutet, dass etwas bisher nicht passiert ist, aber später passieren kann.",
              "answer": "true",
              "points": 1,
              "explanation": "Noch nicht heißt not yet."
            }
          ]
        }
      ],
      "tables": [
        {
          "caption": "Nominativ und Akkusativ: Artikel im Vergleich",
          "columns": [
            "Genus / Zahl",
            "Bestimmt Nom. → Akk.",
            "Unbestimmt Nom. → Akk.",
            "Negativ Nom. → Akk.",
            "Demonstrativ Nom. → Akk."
          ],
          "rows": [
            [
              "Maskulin",
              "der → den",
              "ein → einen",
              "kein → keinen",
              "dieser → diesen"
            ],
            [
              "Feminin",
              "die → die",
              "eine → eine",
              "keine → keine",
              "diese → diese"
            ],
            [
              "Neutrum",
              "das → das",
              "ein → ein",
              "kein → kein",
              "dieses → dieses"
            ],
            [
              "Plural",
              "die → die",
              "— → —",
              "keine → keine",
              "diese → diese"
            ]
          ]
        },
        {
          "caption": "Personalpronomen im Nominativ und Akkusativ",
          "columns": [
            "Nominativ",
            "Akkusativ",
            "Beispiel"
          ],
          "rows": [
            [
              "ich",
              "mich",
              "Houssem sieht mich."
            ],
            [
              "du",
              "dich",
              "Ich sehe dich."
            ],
            [
              "er",
              "ihn",
              "Tassnim kennt ihn."
            ],
            [
              "sie",
              "sie",
              "Houssem sieht sie."
            ],
            [
              "es",
              "es",
              "Ich finde es."
            ],
            [
              "wir",
              "uns",
              "Sie besucht uns."
            ],
            [
              "ihr",
              "euch",
              "Ich sehe euch."
            ],
            [
              "sie",
              "sie",
              "Wir kennen sie."
            ],
            [
              "Sie",
              "Sie",
              "Ich sehe Sie."
            ]
          ]
        },
        {
          "caption": "Possessivartikel im maskulinen Akkusativ",
          "columns": [
            "Besitzer",
            "Nominativ",
            "Akkusativ",
            "Beispiel"
          ],
          "rows": [
            [
              "ich",
              "mein Schlüssel",
              "meinen Schlüssel",
              "Ich suche meinen Schlüssel."
            ],
            [
              "du",
              "dein Rucksack",
              "deinen Rucksack",
              "Ich trage deinen Rucksack."
            ],
            [
              "er / es",
              "sein Apfel",
              "seinen Apfel",
              "Er nimmt seinen Apfel."
            ],
            [
              "sie (Singular)",
              "ihr Schlüssel",
              "ihren Schlüssel",
              "Sie findet ihren Schlüssel."
            ],
            [
              "wir",
              "unser Tee",
              "unseren Tee",
              "Wir trinken unseren Tee."
            ],
            [
              "ihr",
              "euer Schlüssel",
              "euren Schlüssel",
              "Ihr sucht euren Schlüssel."
            ],
            [
              "sie (Plural)",
              "ihr Schlüssel",
              "ihren Schlüssel",
              "Sie finden ihren Schlüssel."
            ],
            [
              "Sie (höflich)",
              "Ihr Schlüssel",
              "Ihren Schlüssel",
              "Haben Sie Ihren Schlüssel?"
            ]
          ]
        },
        {
          "caption": "Possessivartikel im Akkusativ: alle Besitzer",
          "columns": [
            "Besitzer",
            "Maskulin",
            "Feminin",
            "Neutrum",
            "Plural"
          ],
          "rows": [
            [
              "ich",
              "meinen Schlüssel",
              "meine Tasche",
              "mein Handy",
              "meine Äpfel"
            ],
            [
              "du",
              "deinen Schlüssel",
              "deine Tasche",
              "dein Handy",
              "deine Äpfel"
            ],
            [
              "er",
              "seinen Schlüssel",
              "seine Tasche",
              "sein Handy",
              "seine Äpfel"
            ],
            [
              "sie (Singular)",
              "ihren Schlüssel",
              "ihre Tasche",
              "ihr Handy",
              "ihre Äpfel"
            ],
            [
              "es",
              "seinen Schlüssel",
              "seine Tasche",
              "sein Handy",
              "seine Äpfel"
            ],
            [
              "wir",
              "unseren Schlüssel",
              "unsere Tasche",
              "unser Handy",
              "unsere Äpfel"
            ],
            [
              "ihr",
              "euren Schlüssel",
              "eure Tasche",
              "euer Handy",
              "eure Äpfel"
            ],
            [
              "sie (Plural)",
              "ihren Schlüssel",
              "ihre Tasche",
              "ihr Handy",
              "ihre Äpfel"
            ],
            [
              "Sie (höflich)",
              "Ihren Schlüssel",
              "Ihre Tasche",
              "Ihr Handy",
              "Ihre Äpfel"
            ]
          ]
        },
        {
          "caption": "Demonstrativartikel im Akkusativ",
          "columns": [
            "Genus / Zahl",
            "dieser",
            "jener",
            "solcher"
          ],
          "rows": [
            [
              "Maskulin",
              "diesen Laden",
              "jenen Laden",
              "solchen Laden"
            ],
            [
              "Feminin",
              "diese Tasche",
              "jene Tasche",
              "solche Tasche"
            ],
            [
              "Neutrum",
              "dieses Handy",
              "jenes Handy",
              "solches Handy"
            ],
            [
              "Plural",
              "diese Äpfel",
              "jene Äpfel",
              "solche Äpfel"
            ]
          ]
        },
        {
          "caption": "Negation: welches Wort passt?",
          "columns": [
            "Was wird verneint?",
            "Form",
            "Beispiel"
          ],
          "rows": [
            [
              "Nomen ohne Artikel / ein-",
              "kein + passende Endung",
              "Ich habe keinen Apfel."
            ],
            [
              "Verb oder Aussage",
              "nicht",
              "Ich kaufe den Tee nicht."
            ],
            [
              "Eigenschaft",
              "nicht + Adjektiv",
              "Der Tee ist nicht heiß."
            ],
            [
              "eine Person",
              "niemand / niemanden",
              "Niemand kommt. / Ich sehe niemanden."
            ],
            [
              "eine Sache",
              "nichts",
              "Ich kaufe nichts."
            ],
            [
              "Zeit / Wiederholung",
              "nie, noch nicht, nicht mehr",
              "Ich trinke nie Kaffee."
            ]
          ]
        },
        {
          "caption": "Häufige Akkusativverben und Zeitdauer",
          "columns": [
            "Verb / Ausdruck",
            "Beispiel"
          ],
          "rows": [
            [
              "haben, brauchen",
              "Ich habe / brauche eine Tasche."
            ],
            [
              "kaufen, bezahlen",
              "Wir kaufen / bezahlen das Brot."
            ],
            [
              "suchen, finden",
              "Tassnim sucht / findet ihren Schlüssel."
            ],
            [
              "sehen, nehmen",
              "Ich sehe / nehme den Apfel."
            ],
            [
              "essen, trinken, lesen",
              "Er isst einen Apfel. Sie trinkt Wasser. Er liest ein Buch."
            ],
            [
              "Zeitdauer",
              "Wir bleiben einen Tag. Ich schlafe acht Stunden."
            ],
            [
              "es gibt",
              "Es gibt einen Laden und keine Bäckerei."
            ]
          ]
        }
      ],
      "comparisons": [
        {
          "title": "Nominativ oder Akkusativ?",
          "explanation": "Das Subjekt ist die Person oder Sache, die die Handlung macht. Das direkte Objekt ist unmittelbar von der Handlung betroffen. Frage nach dem Subjekt mit Wer? oder Was?, nach dem Objekt mit Wen? oder Was?",
          "examples": [
            "Der Apfel ist frisch. – Der Apfel ist Subjekt (Nominativ).",
            "Ich esse den Apfel. – Ich ist Subjekt; den Apfel ist Objekt (Akkusativ)."
          ]
        },
        {
          "title": "Nicht oder kein?",
          "explanation": "Kein verneint ein Nomen ohne Artikel oder mit ein/eine. Nicht verneint das Verb, ein Adjektiv, einen Adverb-Ausdruck oder eine bestimmte Sache.",
          "examples": [
            "Ich kaufe keinen Tee.",
            "Der Tee ist nicht heiß.",
            "Ich kaufe den Tee nicht."
          ]
        },
        {
          "title": "Possessivartikel oder Personalpronomen?",
          "explanation": "Ein Possessivartikel steht vor einem Nomen und zeigt den Besitzer. Ein Personalpronomen ersetzt das Nomen. Beide Formen können im Akkusativ stehen.",
          "examples": [
            "Ich suche meinen Schlüssel. – Possessivartikel + Nomen.",
            "Ich suche ihn. – Akkusativpronomen ersetzt den Schlüssel."
          ]
        },
        {
          "title": "Dieser und jener",
          "explanation": "Dieser zeigt oft auf etwas hier oder etwas gerade Genanntes. Jener kann auf etwas dort oder auf einen Gegensatz zeigen und klingt häufig formeller. Beide folgen bei der Akkusativform den Endungen des bestimmten Artikels.",
          "examples": [
            "Dieser Apfel ist frisch. Ich nehme diesen Apfel.",
            "Jener Laden ist neu. Wir besuchen jenen Laden."
          ]
        }
      ],
      "exercises": [
        {
          "id": "c03-gq-1",
          "label": "Wissenskontrolle · 1",
          "type": "multiple-choice",
          "prompt": "Was ist das Akkusativobjekt? „Ich brauche einen Schlüssel.“",
          "options": [
            "Ich",
            "brauche",
            "einen Schlüssel"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Was brauche ich? Einen Schlüssel."
        },
        {
          "id": "c03-gq-2",
          "label": "Wissenskontrolle · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form ersetzt „das Handy“?",
          "options": [
            "ihn",
            "sie",
            "es"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Das Handy ist Neutrum; das Akkusativpronomen lautet es."
        },
        {
          "id": "c03-gq-3",
          "label": "Wissenskontrolle · 3",
          "type": "multiple-choice",
          "prompt": "Welche Verneinung passt? „Ich habe ____ Apfel.“",
          "options": [
            "nicht",
            "keinen",
            "keine"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Apfel ist maskulin; im Akkusativ lautet kein: keinen."
        },
        {
          "id": "c03-gq-4",
          "label": "Wissenskontrolle · 4",
          "type": "multiple-choice",
          "prompt": "Welche Form passt? „Tassnim sucht ____ Schlüssel.“ (ihr)",
          "options": [
            "ihre",
            "ihren",
            "ihr"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Schlüssel ist maskulin; der Possessivartikel bekommt im Akkusativ -en."
        },
        {
          "id": "c03-gq-5",
          "label": "Wissenskontrolle · 5",
          "type": "multiple-choice",
          "prompt": "Welcher Satz ist richtig?",
          "options": [
            "Es gibt ein Laden.",
            "Es gibt einen Laden.",
            "Es gibt einer Laden."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Es gibt steht mit einem maskulinen Akkusativobjekt."
        }
      ]
    },
    {
      "id": "exercises",
      "title": "Übungen & Aktivitäten",
      "description": "Übe Artikel, Pronomen, Besitzangaben und Verneinung in Alltagssituationen.",
      "exercises": [
        {
          "id": "c03-ex-01",
          "label": "Erkennen · 1",
          "type": "multiple-choice",
          "prompt": "Welcher Satz ist richtig?",
          "options": [
            "Ich kaufe der Apfel.",
            "Ich kaufe den Apfel.",
            "Ich kaufe dem Apfel."
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Kaufen hat hier ein Akkusativobjekt; der wird zu den."
        },
        {
          "id": "c03-ex-02",
          "label": "Erkennen · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form ist das Akkusativpronomen für „ich“?",
          "options": [
            "mich",
            "mir",
            "mein"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "ich wird im Akkusativ zu mich."
        },
        {
          "id": "c03-ex-03",
          "label": "Ergänzen · 1",
          "type": "fill-blank",
          "prompt": "Ergänze: Houssem braucht ____ Handy. (ein)",
          "answer": "ein",
          "points": 1,
          "explanation": "Handy ist Neutrum; ein bleibt im Akkusativ ein."
        },
        {
          "id": "c03-ex-04",
          "label": "Ergänzen · 2",
          "type": "fill-blank",
          "prompt": "Ergänze: Tassnim kauft ____ Flasche. (kein)",
          "answer": "keine",
          "points": 1,
          "explanation": "Flasche ist feminin; der Negativartikel lautet keine."
        },
        {
          "id": "c03-ex-05",
          "label": "Umformen · 1",
          "type": "multiple-choice",
          "prompt": "Ersetze „den Rucksack“: „Ich suche den Rucksack.“",
          "options": [
            "Ich suche ihn.",
            "Ich suche ihn nicht.",
            "Ich suche es."
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Der Rucksack ist maskulin; ihn ersetzt den Rucksack."
        },
        {
          "id": "c03-ex-06",
          "label": "Umformen · 2",
          "type": "multiple-choice",
          "prompt": "Ergänze: „Ich kaufe das Brot heute ___.“",
          "options": [
            "kein",
            "keinen",
            "nicht"
          ],
          "answer": 2,
          "points": 1,
          "explanation": "Nicht verneint hier die Handlung „kaufe“; das bestimmte Nomen „das Brot“ bleibt stehen."
        },
        {
          "id": "c03-ex-07",
          "label": "Satzbau · 1",
          "type": "written",
          "prompt": "Ordne die Wörter: kaufe / ich / diesen / Apfel",
          "answer": "Ich kaufe diesen Apfel.",
          "points": "Achte auf Satzanfang, Verb und maskulinen Akkusativ.",
          "explanation": "Setze das Subjekt vor das Verb und das Akkusativobjekt danach.",
          "modelAnswer": "Ich kaufe diesen Apfel."
        },
        {
          "id": "c03-ex-08",
          "label": "Satzbau · 2",
          "type": "written",
          "prompt": "Bilde eine Frage mit „Hast du“ und „dein Schlüssel“; die Frage soll wissen, ob der Schlüssel vorhanden ist.",
          "answer": "Hast du deinen Schlüssel?",
          "points": "Die Frage muss den richtigen Possessivartikel und das Fragezeichen haben.",
          "explanation": "Der Schlüssel ist maskulin und steht als Objekt im Akkusativ.",
          "modelAnswer": "Hast du deinen Schlüssel?"
        },
        {
          "id": "c03-ex-09",
          "label": "Übersetzung · 1",
          "type": "written",
          "prompt": "Übersetze ins Deutsche: “I don’t have a bag.”",
          "answer": "Ich habe keine Tasche.",
          "points": 1,
          "explanation": "Kein verneint ein Nomen mit unbestimmtem Artikel; Tasche ist feminin.",
          "modelAnswer": "Ich habe keine Tasche."
        },
        {
          "id": "c03-ex-10",
          "label": "Fehlerkorrektur · 1",
          "type": "written",
          "prompt": "Korrigiere den Satz: „Tassnim sucht ihr Schlüssel.“",
          "answer": "Tassnim sucht ihren Schlüssel.",
          "points": "Korrigiere Artikelendung und Satzzeichen.",
          "explanation": "Schlüssel ist maskulin und Akkusativ; ihr bekommt die Endung -en.",
          "modelAnswer": "Tassnim sucht ihren Schlüssel."
        },
        {
          "id": "c03-ex-11",
          "label": "Dialog · 1",
          "type": "multiple-choice",
          "prompt": "Ergänze: „Hast du meinen Schlüssel?“ – „Nein, ich finde ____ nicht.“",
          "options": [
            "ihn",
            "ihm",
            "er"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Der Schlüssel ist maskulin; als Akkusativpronomen heißt es ihn."
        },
        {
          "id": "c03-ex-12",
          "label": "Kreativ · 1",
          "type": "written",
          "prompt": "Schreibe vier Sätze über Dinge in deiner Tasche. Verwende einen Possessivartikel, einen Akkusativartikel und eine Verneinung.",
          "answer": "In meiner Tasche habe ich mein Handy. Ich habe auch einen Schlüssel. Ich habe keinen Apfel. Meine Geldbörse suche ich nicht.",
          "points": "Prüfe Besitzform, Akkusativ und Verneinung.",
          "explanation": "Eine mögliche Antwort; eigene passende Sätze sind richtig.",
          "modelAnswer": "In meiner Tasche habe ich mein Handy. Ich habe auch einen Schlüssel. Ich habe keinen Apfel. Meine Geldbörse suche ich nicht."
        },
        {
          "id": "c03-ex-13",
          "label": "Gemischt · 1",
          "type": "multiple-choice",
          "prompt": "Welche Antwort passt? „Gibt es hier einen Laden?“ – „Nein, es gibt ____ Laden.“",
          "options": [
            "nicht",
            "keinen",
            "keine"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Laden ist maskulin; nach es gibt steht keinen Laden."
        },
        {
          "id": "c03-ex-14",
          "label": "Gemischt · 2",
          "type": "fill-blank",
          "prompt": "Ergänze die Zeitdauer: Wir bleiben ____ Tag.",
          "answer": "einen",
          "points": 1,
          "explanation": "Wie lange bleiben wir? Einen Tag. Zeitdauer kann im Akkusativ ohne Präposition stehen."
        },
        {
          "id": "c03-ex-15",
          "label": "Gemischt · 3",
          "type": "true-false",
          "prompt": "„Hast du keinen Apfel?“ – „Doch, hier ist einer.“ ist eine passende Antwort.",
          "answer": "true",
          "points": 1,
          "explanation": "Doch widerspricht der negativen Frage und bestätigt, dass ein Apfel da ist."
        }
      ]
    },
    {
      "id": "practical-communication",
      "title": "Sprache im Alltag",
      "description": "Kaufe Dinge ein, frage nach Gegenständen und sage, was du brauchst oder nicht brauchst.",
      "dialogue": [
        {
          "speaker": "Tassnim",
          "text": "Hast du deinen Einkaufszettel?"
        },
        {
          "speaker": "Houssem",
          "text": "Ja, hier ist er. Wir brauchen einen Apfel und eine Flasche Wasser."
        },
        {
          "speaker": "Tassnim",
          "text": "Möchtest du diesen Käse?"
        },
        {
          "speaker": "Houssem",
          "text": "Nein, danke. Ich esse keinen Käse."
        },
        {
          "speaker": "Tassnim",
          "text": "Dann nehme ich ein Brot. Gibt es hier Tee?"
        },
        {
          "speaker": "Houssem",
          "text": "Ja, es gibt Tee, aber keinen Kaffee."
        },
        {
          "speaker": "Tassnim",
          "text": "Ich nehme diesen Tee. Wo ist meine Geldbörse?"
        },
        {
          "speaker": "Houssem",
          "text": "Sie liegt in deiner Tasche. Hier ist sie."
        },
        {
          "speaker": "Tassnim",
          "text": "Danke. Ich bezahle die Rechnung."
        }
      ],
      "expressionsForCommunication": [
        "Ich suche meinen / meine / mein …",
        "Hast du meinen Schlüssel gesehen?",
        "Ich brauche einen / eine / ein …",
        "Ich nehme diesen / diese / dieses …",
        "Ich habe keinen / keine / kein …",
        "Das brauche ich nicht.",
        "Gibt es hier …? — Ja, es gibt … / Nein, es gibt keinen / keine / kein …",
        "Möchtest du …? — Ja, bitte. / Nein, danke.",
        "Hast du keinen …? — Doch, hier ist er."
      ],
      "scenario": {
        "prompt": "Du bist in einem kleinen Laden. Du möchtest Lebensmittel und etwas für den Haushalt kaufen.",
        "steps": [
          "Frage, ob es Äpfel, Brot oder Tee gibt.",
          "Bitte um zwei Dinge.",
          "Sage, was du nicht brauchst.",
          "Frage, ob eine Person deinen Schlüssel gesehen hat."
        ]
      },
      "guidedWriting": "Schreibe eine Nachricht mit fünf bis sieben Sätzen über einen Einkauf. Nenne mindestens drei Dinge, die du kaufst oder brauchst. Verneine ein Nomen mit kein und eine Handlung mit nicht. Verwende außerdem einen Possessivartikel.",
      "prompts": [
        "Was hast du in deiner Tasche?",
        "Welche Dinge brauchst du heute nicht?",
        "Frage eine andere Person, ob sie deinen Schlüssel gesehen hat.",
        "Nenne zwei Dinge, die es in deinem Lieblingsladen gibt."
      ],
      "miniProject": "Erstelle einen Einkaufszettel mit sechs Dingen. Schreibe daneben, was du kaufst, was du nicht brauchst und wem zwei Gegenstände gehören. Formuliere danach einen kurzen Dialog im Laden."
    },
    {
      "id": "summary",
      "title": "Zusammenfassung",
      "description": "Wiederhole die Artikeländerungen, Pronomen, Besitzformen und wichtigsten Verneinungen.",
      "summary": [
        "Das direkte Objekt steht häufig im Akkusativ. Frage Wen? oder Was?",
        "Im maskulinen Singular ändert sich der Artikel: der → den, ein → einen, kein → keinen, mein → meinen, dieser → diesen.",
        "Feminine, neutrale und pluralische Formen bleiben bei diesen Artikeln im Akkusativ gleich.",
        "Akkusativpronomen: mich, dich, ihn, sie, es, uns, euch, sie/Sie.",
        "Kein verneint ein Nomen; nicht verneint Handlungen, Eigenschaften oder bestimmte Dinge.",
        "Possessivartikel richten sich nach dem besessenen Nomen: meinen Schlüssel, meine Tasche, mein Handy, meine Äpfel.",
        "Es gibt steht mit Akkusativ; das Verb gibt bleibt Singular.",
        "Zeitdauern können ohne Präposition im Akkusativ stehen: eine Stunde, einen Tag, zwei Stunden.",
        "Nichts, niemand, nie, nirgendwo, noch nicht und nicht mehr haben verschiedene Bedeutungen. Doch bestätigt eine Aussage als Antwort auf eine verneinte Frage.",
        "Typische Fehler: „Ich kaufe der Apfel“ → „Ich kaufe den Apfel“; „Ich habe nicht Brot“ → „Ich habe kein Brot.“",
        "Merktipp: Vergleiche Nominativ und Akkusativ zuerst beim maskulinen Wort: der Schlüssel → den Schlüssel."
      ],
      "checklist": [
        "Ich kann Subjekt und direktes Objekt erkennen.",
        "Ich bilde den maskulinen Akkusativ mit -en.",
        "Ich kann Akkusativpronomen korrekt einsetzen.",
        "Ich wähle zwischen nicht und kein.",
        "Ich verwende Possessiv- und Demonstrativartikel passend zum Nomen.",
        "Ich bilde Sätze mit es gibt und Zeitdauern im Akkusativ.",
        "Ich verwende grundlegende negative Ausdrücke passend."
      ],
      "exercises": [
        {
          "id": "c03-sum-1",
          "label": "Wiederholung · 1",
          "type": "multiple-choice",
          "prompt": "Welche Form passt? „Ich sehe ____.“ (der Schlüssel)",
          "options": [
            "der Schlüssel",
            "den Schlüssel",
            "dem Schlüssel"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Das direkte Objekt steht im Akkusativ: den Schlüssel."
        },
        {
          "id": "c03-sum-2",
          "label": "Wiederholung · 2",
          "type": "multiple-choice",
          "prompt": "Welche Form verneint „ein Handy“?",
          "options": [
            "nicht Handy",
            "kein Handy",
            "keinen Handy"
          ],
          "answer": 1,
          "points": 1,
          "explanation": "Handy ist Neutrum; kein bleibt kein."
        },
        {
          "id": "c03-sum-3",
          "label": "Wiederholung · 3",
          "type": "multiple-choice",
          "prompt": "Welche Form ersetzt „die Äpfel“?",
          "options": [
            "sie",
            "ihnen",
            "es"
          ],
          "answer": 0,
          "points": 1,
          "explanation": "Die Äpfel sind Plural; das Akkusativpronomen lautet sie."
        },
        {
          "id": "c03-sum-4",
          "label": "Wiederholung · 4",
          "type": "fill-blank",
          "prompt": "Ergänze: Ich arbeite ____ Stunden. (Zeitdauer)",
          "answer": "zwei",
          "points": 1,
          "explanation": "Eine Zeitdauer kann ohne Präposition im Akkusativ stehen; zwei Stunden bleibt im Plural gleich."
        }
      ]
    },
    {
      "id": "examination",
      "title": "Kapitelprüfung",
      "description": "Bearbeite alle Teile. Schreibaufgaben werden nach der Abgabe manuell bewertet.",
      "exam": {
        "id": "exam-chapter-03",
        "title": "Kapitelprüfung 03: Akkusativ, Verneinung und Besitz",
        "totalPoints": 100,
        "distribution": {
          "reading": 20,
          "vocabulary": 15,
          "grammar": 35,
          "sentenceConstruction": 10,
          "writing": 20
        },
        "instructions": "Lies beide neuen Texte. Bearbeite alle Aufgaben und gib die Prüfung am Ende ab. Die drei Schreibaufgaben und beide Satzbauaufgaben werden mit den Kriterien im Lösungsteil manuell bewertet.",
        "readingTexts": [
          {
            "id": "c03-exam-text-a",
            "title": "Lesetext A: Noras Einkauf",
            "text": "Nora ist in einem Geschäft. Sie sucht eine kleine Tasche für ihr Handy. Sie findet eine blaue Tasche, aber sie kauft sie nicht. Die Tasche kostet fünfzig Euro. Nora nimmt eine andere Tasche. Sie kostet zwanzig Euro. Nora hat auch einen Einkaufszettel. Sie kauft Brot, zwei Äpfel und eine Flasche Wasser. Käse braucht sie heute nicht. An der Kasse bezahlt sie alles. Danach sucht sie ihren Schlüssel. Er ist in ihrer Jacke. Nora findet ihn und fährt nach Hause. Nora ist sehr zufrieden."
          },
          {
            "id": "c03-exam-text-b",
            "title": "Lesetext B: Eine Nachricht von Mina",
            "text": "Hallo Samir,\n\nheute kaufe ich keine Getränke. Zu Hause habe ich noch Wasser und Tee. Ich brauche aber ein Brot und drei Äpfel. Meine Schwester mag keinen Käse. Sie möchte Tomaten und Reis. Gibt es in deinem Laden frisches Obst? Ich suche auch eine neue Geldbörse. Meine alte Geldbörse ist sehr klein. Bitte bring deinen Schlüssel mit; nach dem Einkauf gehen wir zusammen nach Hause. Im Laden gibt es auch Brot. Der Preis ist heute gut. Ich nehme dieses Angebot.\n\nViele Grüße\nMina"
          }
        ],
        "questions": [
          {
            "id": "c03-ex-r1",
            "label": "Lesen A · 1",
            "type": "multiple-choice",
            "prompt": "Welche Tasche nimmt Nora?",
            "options": [
              "Die Tasche für fünfzig Euro.",
              "Die Tasche für zwanzig Euro.",
              "Sie nimmt keine Tasche."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Nora nimmt die andere Tasche; sie kostet zwanzig Euro.",
            "category": "reading"
          },
          {
            "id": "c03-ex-r2",
            "label": "Lesen A · 2",
            "type": "multiple-choice",
            "prompt": "Wo findet Nora ihren Schlüssel?",
            "options": [
              "In ihrer Jacke.",
              "In der Tasche.",
              "An der Kasse."
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Der Schlüssel ist in ihrer Jacke.",
            "category": "reading"
          },
          {
            "id": "c03-ex-r3",
            "label": "Lesen B · 1",
            "type": "multiple-choice",
            "prompt": "Was kauft Mina heute nicht?",
            "options": [
              "Getränke.",
              "Brot und Äpfel.",
              "Tomaten und Reis."
            ],
            "answer": 0,
            "points": 5,
            "explanation": "Mina schreibt: Heute kaufe ich keine Getränke.",
            "category": "reading"
          },
          {
            "id": "c03-ex-r4",
            "label": "Lesen B · 2",
            "type": "fill-blank",
            "prompt": "Was sucht Mina? Eine neue ____.",
            "answer": "Geldbörse",
            "points": 5,
            "explanation": "Im Text steht: Ich suche auch eine neue Geldbörse.",
            "category": "reading"
          },
          {
            "id": "c03-ex-v1",
            "label": "Wortschatz · 1",
            "type": "multiple-choice",
            "prompt": "Was bedeutet „der Beruf“? (Wiederholung aus Kapitel 01)",
            "options": [
              "occupation, profession",
              "bag",
              "key"
            ],
            "answer": 0,
            "points": 3,
            "explanation": "Der Beruf bezeichnet die Arbeit einer Person.",
            "category": "vocabulary"
          },
          {
            "id": "c03-ex-v2",
            "label": "Wortschatz · 2",
            "type": "multiple-choice",
            "prompt": "Welcher Artikel passt? ____ Team (Wiederholung aus Kapitel 01)",
            "options": [
              "Der",
              "Die",
              "Das"
            ],
            "answer": 2,
            "points": 3,
            "explanation": "Team ist Neutrum: das Team.",
            "category": "vocabulary"
          },
          {
            "id": "c03-ex-v3",
            "label": "Wortschatz · 3",
            "type": "multiple-choice",
            "prompt": "Was ist ein „Einkaufszettel“?",
            "options": [
              "Eine Liste mit Dingen zum Kaufen.",
              "Ein Schlüssel für den Laden.",
              "Eine Rechnung nach dem Einkauf."
            ],
            "answer": 0,
            "points": 3,
            "explanation": "Auf dem Einkaufszettel stehen Dinge, die man kaufen möchte.",
            "category": "vocabulary"
          },
          {
            "id": "c03-ex-v4",
            "label": "Wortschatz · 4",
            "type": "fill-blank",
            "prompt": "Ergänze den Plural: der Apfel – die ____.",
            "answer": "Äpfel",
            "points": 3,
            "explanation": "Der Plural von Apfel hat einen Umlaut.",
            "category": "vocabulary"
          },
          {
            "id": "c03-ex-v5",
            "label": "Wortschatz · 5",
            "type": "multiple-choice",
            "prompt": "Welches Wort bedeutet „to pay“?",
            "options": [
              "suchen",
              "bezahlen",
              "finden"
            ],
            "answer": 1,
            "points": 3,
            "explanation": "Bezahlen bedeutet to pay.",
            "category": "vocabulary"
          },
          {
            "id": "c03-ex-g1",
            "label": "Grammatik · 1",
            "type": "multiple-choice",
            "prompt": "Welche Form ist richtig? „Ich kaufe ____ Apfel.“",
            "options": [
              "der",
              "den",
              "dem"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Apfel ist maskulin; als direktes Objekt steht den.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g2",
            "label": "Grammatik · 2",
            "type": "multiple-choice",
            "prompt": "Ersetze „die Geldbörse“: „Houssem sucht die Geldbörse.“",
            "options": [
              "Houssem sucht ihn.",
              "Houssem sucht sie.",
              "Houssem sucht es."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Geldbörse ist feminin; das Akkusativpronomen lautet sie.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g3",
            "label": "Grammatik · 3",
            "type": "multiple-choice",
            "prompt": "Was passt? „Wir haben ____ Käse.“",
            "options": [
              "nicht",
              "keinen",
              "keine"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Käse ist maskulin; der Negativartikel im Akkusativ lautet keinen.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g4",
            "label": "Grammatik · 4",
            "type": "multiple-choice",
            "prompt": "Welche Verneinung ist richtig? „Ich kaufe den Tee.“",
            "options": [
              "Ich kaufe den Tee kein.",
              "Ich kaufe den Tee nicht.",
              "Ich nicht kaufe den Tee."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Nicht verneint die Aussage über die bestimmte Sache den Tee.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g5",
            "label": "Grammatik · 5",
            "type": "multiple-choice",
            "prompt": "Ergänze: Tassnim findet ____ Handy. (ihr)",
            "options": [
              "ihren",
              "ihr",
              "ihre"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Handy ist Neutrum; der Possessivartikel heißt ihr Handy.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g6",
            "label": "Grammatik · 6",
            "type": "multiple-choice",
            "prompt": "Ergänze: Ich nehme ____ Rucksack. (dieser)",
            "options": [
              "dieser",
              "diesen",
              "dieses"
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Rucksack ist maskulin; im Akkusativ heißt es diesen Rucksack.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-g7",
            "label": "Grammatik · 7",
            "type": "multiple-choice",
            "prompt": "Welche Aussage ist richtig?",
            "options": [
              "Es gibt ein Laden.",
              "Es gibt einen Laden.",
              "Es geben einen Laden."
            ],
            "answer": 1,
            "points": 5,
            "explanation": "Nach es gibt steht der maskuline Akkusativ einen Laden; gibt bleibt Singular.",
            "category": "grammar"
          },
          {
            "id": "c03-ex-s1",
            "label": "Satzbau · 1",
            "type": "written",
            "prompt": "Bilde einen Satz mit allen Wörtern: ich / mein Handy / nicht / finden",
            "answer": "Ich finde mein Handy nicht.",
            "points": 5,
            "explanation": "5 Punkte: alle Wörter (1), Verbform (1), Possessivartikel (1), Satzstellung (1), Großschreibung und Satzzeichen (1).",
            "modelAnswer": "Ich finde mein Handy nicht.",
            "category": "sentenceConstruction"
          },
          {
            "id": "c03-ex-s2",
            "label": "Satzbau · 2",
            "type": "written",
            "prompt": "Bilde eine Frage mit „es gibt“ und „Laden“. Verneine das Nomen „Laden“.",
            "answer": "Gibt es keinen Laden?",
            "points": 5,
            "explanation": "5 Punkte: Frageform (1), es-gibt-Konstruktion (1), Akkusativform keinen (1), verständliche Frage (1), Satzzeichen (1).",
            "modelAnswer": "Gibt es keinen Laden?",
            "category": "sentenceConstruction"
          },
          {
            "id": "c03-ex-w1",
            "label": "Schreiben A · 1",
            "type": "written",
            "prompt": "Schreibe vier kurze Sätze über Dinge in deiner Tasche. Verwende einen Possessivartikel und eine Verneinung.",
            "answer": "In meiner Tasche habe ich mein Handy. Ich habe meinen Schlüssel. Ich habe eine Geldbörse. Ich habe keinen Apfel.",
            "points": 5,
            "explanation": "5 Punkte: vier verständliche Sätze (1), Possessivartikel (1), richtige Akkusativformen (1), Verneinung (1), Rechtschreibung (1).",
            "modelAnswer": "In meiner Tasche habe ich mein Handy. Ich habe meinen Schlüssel. Ich habe eine Geldbörse. Ich habe keinen Apfel.",
            "category": "writing"
          },
          {
            "id": "c03-ex-w2",
            "label": "Schreiben B · 2",
            "type": "written",
            "prompt": "Schreibe eine kurze Nachricht an eine Person aus deiner Familie. Bitte um zwei Dinge aus dem Laden. Nenne eine Sache, die du nicht brauchst. Schreibe etwa 20–40 Wörter.",
            "answer": "Hallo Mama, bitte kauf einen Apfel und eine Flasche Wasser. Ich brauche keinen Käse. Der Laden ist neben dem Büro. Ich komme um sechs nach Hause. Danke! Mina.",
            "points": 7,
            "explanation": "7 Punkte: Nachricht passend (1), zwei Dinge genannt (2), Verneinung (1), Possessivartikel oder Frage (1), Akkusativformen (1), Verständlichkeit (1).",
            "modelAnswer": "Hallo Mama, bitte kauf einen Apfel und eine Flasche Wasser. Ich brauche keinen Käse. Der Laden ist neben dem Büro. Ich komme um sechs nach Hause. Danke! Mina.",
            "category": "writing"
          },
          {
            "id": "c03-ex-w3",
            "label": "Schreiben C · 3",
            "type": "written",
            "prompt": "Schreibe fünf bis sieben Sätze über einen Einkauf. Nenne mindestens drei Dinge, die du kaufst, und zwei Dinge, die du nicht kaufst oder nicht brauchst. Verwende mindestens einen Possessivartikel oder Demonstrativartikel.",
            "answer": "Heute gehe ich in einen Laden. Ich kaufe einen Apfel und eine Flasche Wasser. Ich nehme auch dieses Brot. Käse brauche ich nicht. Ich kaufe keinen Tee, denn zu Hause habe ich Tee. Meine Geldbörse ist in meiner Tasche.",
            "points": 8,
            "explanation": "8 Punkte: Einkaufssituation und Länge (1), mindestens drei Dinge (2), zwei Verneinungen (2), Possessiv- oder Demonstrativartikel (1), Akkusativformen (1), Verständlichkeit (1).",
            "modelAnswer": "Heute gehe ich in einen Laden. Ich kaufe einen Apfel und eine Flasche Wasser. Ich nehme auch dieses Brot. Käse brauche ich nicht. Ich kaufe keinen Tee, denn zu Hause habe ich Tee. Meine Geldbörse ist in meiner Tasche.",
            "category": "writing"
          }
        ]
      }
    },
    {
      "id": "solutions",
      "title": "Lösungen & Lernkontrolle",
      "description": "Prüfe geschlossene Antworten und bewerte offene Aufgaben mit den Mustern und Kriterien.",
      "answers": [
        {
          "exerciseId": "c03-intro-1",
          "answer": "Houssem",
          "explanation": "Houssem macht die Handlung; er steht im Nominativ."
        },
        {
          "exerciseId": "c03-intro-2",
          "answer": "suche",
          "explanation": "Bei ich lautet die regelmäßige Präsensendung -e."
        },
        {
          "exerciseId": "c03-intro-3",
          "answer": "Wen oder was?",
          "explanation": "Nach dem direkten Objekt fragt man Wen? oder Was?"
        },
        {
          "exerciseId": "c03-read-obs1",
          "answer": "ein paar Dinge",
          "explanation": "Die Frage Was brauche ich? führt zum Akkusativobjekt."
        },
        {
          "exerciseId": "c03-read-obs2",
          "answer": "kein Brot",
          "explanation": "Kein steht direkt vor dem verneinten Nomen Brot."
        },
        {
          "exerciseId": "c03-read-obs3",
          "answer": "In beiden Texten suchen oder kaufen die Figuren Dinge.",
          "explanation": "Im Dialog suchen und kaufen Houssem und Tassnim Dinge; in der Nachricht kauft Tassnim Dinge für das Essen."
        },
        {
          "exerciseId": "c03-r-a1",
          "answer": "Tassnims Geldbörse.",
          "explanation": "Houssem sagt: „Ja, sie ist in meinem Rucksack.“ „Sie“ bezieht sich auf Tassnims Geldbörse."
        },
        {
          "exerciseId": "c03-r-a2",
          "answer": "true",
          "explanation": "Houssem bestätigt, dass sie in seinem Rucksack ist."
        },
        {
          "exerciseId": "c03-r-a3",
          "answer": "Einen Apfel und eine Flasche Wasser.",
          "explanation": "Sie kauft einen Apfel und eine Flasche Wasser."
        },
        {
          "exerciseId": "c03-r-a4",
          "answer": "kein",
          "explanation": "Houssem sagt, dass sie heute kein Brot brauchen. Brot ist ein Akkusativobjekt im Neutrum; kein bleibt kein."
        },
        {
          "exerciseId": "c03-r-b1",
          "answer": "Einen Apfel und zwei Flaschen Wasser.",
          "explanation": "Tassnim hat einen Apfel und zwei Flaschen Wasser."
        },
        {
          "exerciseId": "c03-r-b2",
          "answer": "false",
          "explanation": "Sie kauft heute kein Brot."
        },
        {
          "exerciseId": "c03-r-b3",
          "answer": "Schlüssel",
          "explanation": "Sie fragt: Hast du deinen Schlüssel? Ich habe ihn nicht in der Küche gefunden."
        },
        {
          "exerciseId": "c03-r-b4",
          "answer": "Tee, aber keinen Kaffee.",
          "explanation": "Der Text nennt Tee, aber keinen Kaffee."
        },
        {
          "exerciseId": "c03-vocab-1",
          "answer": "das",
          "explanation": "Handy ist Neutrum: das Handy."
        },
        {
          "exerciseId": "c03-vocab-2",
          "answer": "Schlüssel",
          "explanation": "Schlüssel hat im Plural keine Endung."
        },
        {
          "exerciseId": "c03-vocab-3",
          "answer": "kaufe",
          "explanation": "Kaufen bedeutet, eine Ware zu erwerben."
        },
        {
          "exerciseId": "c03-vocab-4",
          "answer": "Ich bezahle die Rechnung.",
          "explanation": "Die Rechnung ist das Akkusativobjekt. Andere grammatisch richtige Sätze sind möglich."
        },
        {
          "exerciseId": "c03-gq-1",
          "answer": "einen Schlüssel",
          "explanation": "Was brauche ich? Einen Schlüssel."
        },
        {
          "exerciseId": "c03-gq-2",
          "answer": "es",
          "explanation": "Das Handy ist Neutrum; das Akkusativpronomen lautet es."
        },
        {
          "exerciseId": "c03-gq-3",
          "answer": "keinen",
          "explanation": "Apfel ist maskulin; im Akkusativ lautet kein: keinen."
        },
        {
          "exerciseId": "c03-gq-4",
          "answer": "ihren",
          "explanation": "Schlüssel ist maskulin; der Possessivartikel bekommt im Akkusativ -en."
        },
        {
          "exerciseId": "c03-gq-5",
          "answer": "Es gibt einen Laden.",
          "explanation": "Es gibt steht mit einem maskulinen Akkusativobjekt."
        },
        {
          "exerciseId": "c03-g1-1",
          "answer": "einen Apfel",
          "explanation": "Was kauft Tassnim? Einen Apfel."
        },
        {
          "exerciseId": "c03-g1-2",
          "answer": "Houssem sucht den Schlüssel.",
          "explanation": "Den Schlüssel ist das direkte Objekt von sucht."
        },
        {
          "exerciseId": "c03-g1-3",
          "answer": "einen",
          "explanation": "Was brauche ich? Einen Rucksack. Maskulinum bekommt im Akkusativ -en."
        },
        {
          "exerciseId": "c03-g2-1",
          "answer": "einen",
          "explanation": "Tee ist maskulin; im Akkusativ heißt es einen Tee."
        },
        {
          "exerciseId": "c03-g2-2",
          "answer": "die",
          "explanation": "Tasche ist feminin. Die Form die bleibt im Akkusativ gleich."
        },
        {
          "exerciseId": "c03-g2-3",
          "answer": "Wir haben keine Äpfel.",
          "explanation": "Im Plural lautet der Negativartikel keine."
        },
        {
          "exerciseId": "c03-g3-1",
          "answer": "Ich suche ihn.",
          "explanation": "Der Schlüssel ist maskulin; das Akkusativpronomen lautet ihn."
        },
        {
          "exerciseId": "c03-g3-2",
          "answer": "Houssem findet sie.",
          "explanation": "Die Tasche ist feminin; das Akkusativpronomen lautet sie."
        },
        {
          "exerciseId": "c03-g3-3",
          "answer": "uns",
          "explanation": "Houssem und ich bedeutet uns; als Akkusativobjekt bleibt es uns."
        },
        {
          "exerciseId": "c03-g4-1",
          "answer": "Es gibt einen Laden.",
          "explanation": "Es gibt steht mit einem maskulinen Akkusativobjekt: einen Laden."
        },
        {
          "exerciseId": "c03-g4-2",
          "answer": "einen",
          "explanation": "Wie lange bleiben wir? Einen Tag. Die Zeitdauer steht im Akkusativ."
        },
        {
          "exerciseId": "c03-g4-3",
          "answer": "false",
          "explanation": "Das Verb bleibt immer gibt, also 3. Person Singular."
        },
        {
          "exerciseId": "c03-g5-1",
          "answer": "kein",
          "explanation": "Handy ist Neutrum; im Akkusativ lautet die Form kein Handy."
        },
        {
          "exerciseId": "c03-g5-2",
          "answer": "nicht",
          "explanation": "Teuer ist eine Eigenschaft. Eigenschaften verneinst du mit nicht."
        },
        {
          "exerciseId": "c03-g5-3",
          "answer": "keinen Apfel",
          "explanation": "Apfel ist ein maskulines Akkusativobjekt: keinen Apfel."
        },
        {
          "exerciseId": "c03-g6-1",
          "answer": "meinen",
          "explanation": "Schlüssel ist maskulin; Akkusativ: meinen Schlüssel."
        },
        {
          "exerciseId": "c03-g6-2",
          "answer": "seine",
          "explanation": "Tasche ist feminin; die Akkusativform lautet seine Tasche."
        },
        {
          "exerciseId": "c03-g6-3",
          "answer": "euer",
          "explanation": "Brot ist Neutrum; die Form bleibt euer Brot."
        },
        {
          "exerciseId": "c03-g7-1",
          "answer": "diesen",
          "explanation": "Apfel ist maskulin; Akkusativ: diesen Apfel."
        },
        {
          "exerciseId": "c03-g7-2",
          "answer": "diese",
          "explanation": "Tasche ist feminin; diese bleibt im Akkusativ gleich."
        },
        {
          "exerciseId": "c03-g7-3",
          "answer": "jener Laden",
          "explanation": "Laden ist maskulin; die Nominativform lautet jener Laden."
        },
        {
          "exerciseId": "c03-g8-1",
          "answer": "nichts",
          "explanation": "Nichts verneint eine Sache."
        },
        {
          "exerciseId": "c03-g8-2",
          "answer": "Doch",
          "explanation": "Doch widerspricht der negativen Annahme: Ja, ich habe einen Schlüssel."
        },
        {
          "exerciseId": "c03-g8-3",
          "answer": "true",
          "explanation": "Noch nicht heißt not yet."
        },
        {
          "exerciseId": "c03-ex-01",
          "answer": "Ich kaufe den Apfel.",
          "explanation": "Kaufen hat hier ein Akkusativobjekt; der wird zu den."
        },
        {
          "exerciseId": "c03-ex-02",
          "answer": "mich",
          "explanation": "ich wird im Akkusativ zu mich."
        },
        {
          "exerciseId": "c03-ex-03",
          "answer": "ein",
          "explanation": "Handy ist Neutrum; ein bleibt im Akkusativ ein."
        },
        {
          "exerciseId": "c03-ex-04",
          "answer": "keine",
          "explanation": "Flasche ist feminin; der Negativartikel lautet keine."
        },
        {
          "exerciseId": "c03-ex-05",
          "answer": "Ich suche ihn.",
          "explanation": "Der Rucksack ist maskulin; ihn ersetzt den Rucksack."
        },
        {
          "exerciseId": "c03-ex-06",
          "answer": "nicht",
          "explanation": "Nicht verneint hier die Handlung „kaufe“; das bestimmte Nomen „das Brot“ bleibt stehen."
        },
        {
          "exerciseId": "c03-ex-07",
          "answer": "Ich kaufe diesen Apfel.",
          "explanation": "Setze das Subjekt vor das Verb und das Akkusativobjekt danach."
        },
        {
          "exerciseId": "c03-ex-08",
          "answer": "Hast du deinen Schlüssel?",
          "explanation": "Der Schlüssel ist maskulin und steht als Objekt im Akkusativ."
        },
        {
          "exerciseId": "c03-ex-09",
          "answer": "Ich habe keine Tasche.",
          "explanation": "Kein verneint ein Nomen mit unbestimmtem Artikel; Tasche ist feminin."
        },
        {
          "exerciseId": "c03-ex-10",
          "answer": "Tassnim sucht ihren Schlüssel.",
          "explanation": "Schlüssel ist maskulin und Akkusativ; ihr bekommt die Endung -en."
        },
        {
          "exerciseId": "c03-ex-11",
          "answer": "ihn",
          "explanation": "Der Schlüssel ist maskulin; als Akkusativpronomen heißt es ihn."
        },
        {
          "exerciseId": "c03-ex-12",
          "answer": "In meiner Tasche habe ich mein Handy. Ich habe auch einen Schlüssel. Ich habe keinen Apfel. Meine Geldbörse suche ich nicht.",
          "explanation": "Eine mögliche Antwort; eigene passende Sätze sind richtig."
        },
        {
          "exerciseId": "c03-ex-13",
          "answer": "keinen",
          "explanation": "Laden ist maskulin; nach es gibt steht keinen Laden."
        },
        {
          "exerciseId": "c03-ex-14",
          "answer": "einen",
          "explanation": "Wie lange bleiben wir? Einen Tag. Zeitdauer kann im Akkusativ ohne Präposition stehen."
        },
        {
          "exerciseId": "c03-ex-15",
          "answer": "true",
          "explanation": "Doch widerspricht der negativen Frage und bestätigt, dass ein Apfel da ist."
        },
        {
          "exerciseId": "c03-sum-1",
          "answer": "den Schlüssel",
          "explanation": "Das direkte Objekt steht im Akkusativ: den Schlüssel."
        },
        {
          "exerciseId": "c03-sum-2",
          "answer": "kein Handy",
          "explanation": "Handy ist Neutrum; kein bleibt kein."
        },
        {
          "exerciseId": "c03-sum-3",
          "answer": "sie",
          "explanation": "Die Äpfel sind Plural; das Akkusativpronomen lautet sie."
        },
        {
          "exerciseId": "c03-sum-4",
          "answer": "zwei",
          "explanation": "Eine Zeitdauer kann ohne Präposition im Akkusativ stehen; zwei Stunden bleibt im Plural gleich."
        },
        {
          "exerciseId": "c03-ex-r1",
          "answer": "Die Tasche für zwanzig Euro.",
          "explanation": "Nora nimmt die andere Tasche; sie kostet zwanzig Euro."
        },
        {
          "exerciseId": "c03-ex-r2",
          "answer": "In ihrer Jacke.",
          "explanation": "Der Schlüssel ist in ihrer Jacke."
        },
        {
          "exerciseId": "c03-ex-r3",
          "answer": "Getränke.",
          "explanation": "Mina schreibt: Heute kaufe ich keine Getränke."
        },
        {
          "exerciseId": "c03-ex-r4",
          "answer": "Geldbörse",
          "explanation": "Im Text steht: Ich suche auch eine neue Geldbörse."
        },
        {
          "exerciseId": "c03-ex-v1",
          "answer": "occupation, profession",
          "explanation": "Der Beruf bezeichnet die Arbeit einer Person."
        },
        {
          "exerciseId": "c03-ex-v2",
          "answer": "Das",
          "explanation": "Team ist Neutrum: das Team."
        },
        {
          "exerciseId": "c03-ex-v3",
          "answer": "Eine Liste mit Dingen zum Kaufen.",
          "explanation": "Auf dem Einkaufszettel stehen Dinge, die man kaufen möchte."
        },
        {
          "exerciseId": "c03-ex-v4",
          "answer": "Äpfel",
          "explanation": "Der Plural von Apfel hat einen Umlaut."
        },
        {
          "exerciseId": "c03-ex-v5",
          "answer": "bezahlen",
          "explanation": "Bezahlen bedeutet to pay."
        },
        {
          "exerciseId": "c03-ex-g1",
          "answer": "den",
          "explanation": "Apfel ist maskulin; als direktes Objekt steht den."
        },
        {
          "exerciseId": "c03-ex-g2",
          "answer": "Houssem sucht sie.",
          "explanation": "Geldbörse ist feminin; das Akkusativpronomen lautet sie."
        },
        {
          "exerciseId": "c03-ex-g3",
          "answer": "keinen",
          "explanation": "Käse ist maskulin; der Negativartikel im Akkusativ lautet keinen."
        },
        {
          "exerciseId": "c03-ex-g4",
          "answer": "Ich kaufe den Tee nicht.",
          "explanation": "Nicht verneint die Aussage über die bestimmte Sache den Tee."
        },
        {
          "exerciseId": "c03-ex-g5",
          "answer": "ihr",
          "explanation": "Handy ist Neutrum; der Possessivartikel heißt ihr Handy."
        },
        {
          "exerciseId": "c03-ex-g6",
          "answer": "diesen",
          "explanation": "Rucksack ist maskulin; im Akkusativ heißt es diesen Rucksack."
        },
        {
          "exerciseId": "c03-ex-g7",
          "answer": "Es gibt einen Laden.",
          "explanation": "Nach es gibt steht der maskuline Akkusativ einen Laden; gibt bleibt Singular."
        },
        {
          "exerciseId": "c03-ex-s1",
          "answer": "Ich finde mein Handy nicht.",
          "explanation": "5 Punkte: alle Wörter (1), Verbform (1), Possessivartikel (1), Satzstellung (1), Großschreibung und Satzzeichen (1)."
        },
        {
          "exerciseId": "c03-ex-s2",
          "answer": "Gibt es keinen Laden?",
          "explanation": "5 Punkte: Frageform (1), es-gibt-Konstruktion (1), Akkusativform keinen (1), verständliche Frage (1), Satzzeichen (1)."
        },
        {
          "exerciseId": "c03-ex-w1",
          "answer": "In meiner Tasche habe ich mein Handy. Ich habe meinen Schlüssel. Ich habe eine Geldbörse. Ich habe keinen Apfel.",
          "explanation": "5 Punkte: vier verständliche Sätze (1), Possessivartikel (1), richtige Akkusativformen (1), Verneinung (1), Rechtschreibung (1)."
        },
        {
          "exerciseId": "c03-ex-w2",
          "answer": "Hallo Mama, bitte kauf einen Apfel und eine Flasche Wasser. Ich brauche keinen Käse. Der Laden ist neben dem Büro. Ich komme um sechs nach Hause. Danke! Mina.",
          "explanation": "7 Punkte: Nachricht passend (1), zwei Dinge genannt (2), Verneinung (1), Possessivartikel oder Frage (1), Akkusativformen (1), Verständlichkeit (1)."
        },
        {
          "exerciseId": "c03-ex-w3",
          "answer": "Heute gehe ich in einen Laden. Ich kaufe einen Apfel und eine Flasche Wasser. Ich nehme auch dieses Brot. Käse brauche ich nicht. Ich kaufe keinen Tee, denn zu Hause habe ich Tee. Meine Geldbörse ist in meiner Tasche.",
          "explanation": "8 Punkte: Einkaufssituation und Länge (1), mindestens drei Dinge (2), zwei Verneinungen (2), Possessiv- oder Demonstrativartikel (1), Akkusativformen (1), Verständlichkeit (1)."
        }
      ],
      "modelAnswers": [
        {
          "text": "Beispiel für die Schreibübung: In meiner Tasche habe ich mein Handy und meinen Schlüssel. Ich brauche heute keine Flasche Wasser. Ich kaufe einen Apfel. Meine Geldbörse finde ich nicht. Ich bezahle den Einkauf später."
        },
        {
          "text": "Beispiel für eine Nachricht: Hallo Houssem, bitte kauf einen Apfel und eine Flasche Wasser. Ich brauche keinen Käse. Hast du meinen Schlüssel gesehen? Danke, Tassnim."
        },
        {
          "text": "Beispiel für einen Einkaufstext: Heute gehe ich in einen Laden. Ich kaufe ein Brot und zwei Äpfel. Ich nehme auch dieses Wasser. Kaffee brauche ich nicht. Ich kaufe keinen Käse. Meine Geldbörse ist in meiner Tasche."
        }
      ],
      "criteria": [
        "Andere Antworten sind richtig, wenn sie die Aufgabe erfüllen und die Akkusativformen zum Genus und Numerus passen.",
        "Bei offenen Sätzen prüfe, ob das Verb zum Subjekt passt und ob das direkte Objekt korrekt markiert ist.",
        "Bei kein prüfe die Endung: keinen (maskulin), keine (feminin/Plural), kein (Neutrum).",
        "Bei nicht prüfe, was verneint wird und ob nicht an einer passenden Stelle steht.",
        "Die Satzbauaufgaben zählen 10 Punkte; die drei Schreibaufgaben zählen 20 Punkte. Nutze die jeweilige Kriterienliste.",
        "Lerntipp: Bei 80–100 Punkten kannst du weitergehen. Bei 65–79 Punkten wiederholst du die Themen mit Fehlern. Unter 65 Punkten wiederholst du die Regeln und Übungen gezielt. Das sind Empfehlungen, keine offizielle Prüfungsschwelle."
      ],
      "mistakeReview": "Notiere die Aufgaben-ID, deine Antwort und die Korrektur. Ordne den Fehler einem Thema zu: Nominativ oder Akkusativ, Artikelendung, Pronomen, kein oder nicht, Possessivartikel, Demonstrativartikel, es gibt oder negative Ausdrücke. Schreibe danach einen eigenen Beispielsatz zur Regel."
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
