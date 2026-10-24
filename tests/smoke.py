import json
import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]

class InfrastructureSmokeChecks(unittest.TestCase):
    def test_full_actual_curriculum_and_pending_manifest(self):
        curriculum = (ROOT / 'content/curriculum.js').read_text()
        manifest = json.loads((ROOT / 'progress/chapters.json').read_text())
        self.assertEqual(len(re.findall(r'"id": "chapter-\d{2}"', curriculum)), 30)
        self.assertEqual(len(manifest['chapters']), 30)
        self.assertEqual(manifest['chapters']['01']['status'], 'completed')
        self.assertEqual(manifest['chapters']['01']['contentFile'], 'content/a1/chapter-01.js')
        self.assertEqual(manifest['chapters']['02']['status'], 'completed')
        self.assertEqual(manifest['chapters']['02']['contentFile'], 'content/a1/chapter-02.js')
        self.assertEqual(manifest['chapters']['03']['status'], 'completed')
        self.assertEqual(manifest['chapters']['03']['contentFile'], 'content/a1/chapter-03.js')
        self.assertEqual(manifest['chapters']['04']['status'], 'completed')
        self.assertEqual(manifest['chapters']['04']['contentFile'], 'content/a1/chapter-04.js')
        self.assertEqual(manifest['chapters']['05']['status'], 'completed')
        self.assertEqual(manifest['chapters']['05']['contentFile'], 'content/a1/chapter-05.js')
        self.assertEqual(manifest['chapters']['06']['status'], 'completed')
        self.assertEqual(manifest['chapters']['06']['contentFile'], 'content/a1/chapter-06.js')
        self.assertEqual(manifest['chapters']['07']['status'], 'completed')
        self.assertEqual(manifest['chapters']['07']['contentFile'], 'content/a1/chapter-07.js')
        self.assertEqual(manifest['chapters']['08']['status'], 'completed')
        self.assertEqual(manifest['chapters']['08']['contentFile'], 'content/a1/chapter-08.js')
        self.assertEqual(manifest['chapters']['09']['status'], 'completed')
        self.assertEqual(manifest['chapters']['09']['contentFile'], 'content/a1/chapter-09.js')
        self.assertEqual(manifest['chapters']['10']['status'], 'completed')
        self.assertEqual(manifest['chapters']['10']['contentFile'], 'content/a1/chapter-10.js')
        self.assertEqual(manifest['chapters']['11']['status'], 'completed')
        self.assertEqual(manifest['chapters']['11']['contentFile'], 'content/a2/chapter-11.js')
        self.assertEqual(manifest['chapters']['12']['status'], 'completed')
        self.assertEqual(manifest['chapters']['12']['contentFile'], 'content/a2/chapter-12.js')
        self.assertEqual(manifest['chapters']['13']['status'], 'completed')
        self.assertEqual(manifest['chapters']['13']['contentFile'], 'content/a2/chapter-13.js')
        self.assertTrue(all(x['status'] == 'pending' and x['contentFile'] is None for k,x in manifest['chapters'].items() if k not in ('01','02','03','04','05','06','07','08','09','10','11','12','13')))
        self.assertEqual(len(manifest['assessments']), 12)
        self.assertTrue(all(x['status'] == 'pending' for x in manifest['assessments'].values()))

    def test_fixture_isolated_with_nine_sections_and_working_examples(self):
        fixture = (ROOT / 'tests/fixtures/demo-chapter.js').read_text()
        self.assertIn("id:'development-demo'", fixture)
        self.assertIn("developmentOnly:true", fixture)
        self.assertEqual(len(re.findall(r"\{id:'(?:introduction|reading|vocabulary|grammar|exercises|practical-communication|summary|examination|solutions)'", fixture)), 9)
        self.assertIn("type:'multiple-choice'", fixture)
        self.assertIn("type:'fill-blank'", fixture)
        self.assertIn("totalPoints:4", fixture)
        self.assertNotIn('development-demo', (ROOT / 'progress/chapters.json').read_text())

    def test_required_modules_and_design_tokens(self):
        for name in ['app.js','router.js','navigation.js','renderer.js','exercises.js','exams.js','highlighting.js','storage.js','chapter-loader.js']:
            self.assertTrue((ROOT / 'js' / name).is_file(), name)
        css = '\n'.join(p.read_text() for p in (ROOT / 'css').glob('*.css'))
        self.assertIn('Ubuntu', css)
        self.assertIn('--bg-app:#080b09', css)
        self.assertIn('grid-template-columns:278px minmax(0,1fr)', css)
        self.assertNotIn('third-column', css)
        html = (ROOT / 'index.html').read_text()
        learning_page = (ROOT / 'learn.html').read_text()
        self.assertIn('fonts.googleapis.com/css2?family=Ubuntu', html)
        self.assertNotIn('type="module"', html)
        self.assertIn('id="chapter-collection"', html)
        self.assertIn('<script src="js/landing.js"></script>', html)
        self.assertIn('<script src="js/app.js"></script>', learning_page)

    def test_source_has_expected_interactions_and_schema(self):
        app=(ROOT/'js/app.js').read_text(); exercise=(ROOT/'js/exercises.js').read_text(); exam=(ROOT/'js/exams.js').read_text()
        self.assertIn("addEventListener('hashchange'", app)
        self.assertIn("setPreference('sidebar'", app)
        self.assertIn("setPreference('theme'", app)
        for action in ['data-check','data-reveal','data-retry','data-draft']:
            self.assertIn(action, exercise)
        self.assertIn('data-submit-exam', exam)
        self.assertIn('manualPointsPossible', exam)
        self.assertIn('script.src=path', (ROOT/'js/chapter-loader.js').read_text())
        self.assertNotIn('import(', '\n'.join(p.read_text() for p in (ROOT/'js').glob('*.js')))
        self.assertIn("'chapter-01': 'content/a1/chapter-01.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-02': 'content/a1/chapter-02.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-03': 'content/a1/chapter-03.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-04': 'content/a1/chapter-04.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-05': 'content/a1/chapter-05.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-06': 'content/a1/chapter-06.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn('renderExam', (ROOT/'js/exams.js').read_text())
        self.assertTrue((ROOT/'docs/content-schema.md').is_file())

    def test_chapter_scripts_have_isolated_global_scope(self):
        chapters = list((ROOT/'content/a1').glob('chapter-*.js')) + list((ROOT/'content/a2').glob('chapter-*.js'))
        self.assertEqual(len(chapters), 13)
        for path in chapters:
            source = path.read_text()
            self.assertTrue(source.startswith('(()=>{'), path)
            self.assertTrue(source.rstrip().endswith('})();'), path)

    def test_progress_backup_controls_and_versioned_schema(self):
        html=(ROOT/'index.html').read_text()
        backup=(ROOT/'js/progress-backup.js').read_text()
        storage=(ROOT/'js/storage.js').read_text()
        self.assertIn('id="export-progress"',html)
        self.assertIn('id="import-progress"',html)
        self.assertIn('id="import-dialog"',html)
        self.assertIn('<script src="js/progress-backup.js"></script>',html)
        for value in ['deutsch-a1-b1-learning-progress','schemaVersion','backupVersion','exportedAt','chapterStatuses','statistics','GermanB1_Progress_']:
            self.assertIn(value,backup)
        self.assertIn('importProgress',storage)
        self.assertIn('completedChapters',storage)
        self.assertIn('deutsch-a1-b1:student-progress',storage)

    def test_chapter_01_content_and_assessment(self):
        source = (ROOT / 'content/a1/chapter-01.js').read_text()
        raw = source.split('const chapter = ', 1)[1].split(';\n\nfunction collectExercises', 1)[0]
        chapter = json.loads(raw)
        self.assertEqual(chapter['id'], 'chapter-01')
        self.assertEqual([s['id'] for s in chapter['sections']], [
            'introduction','reading','vocabulary','grammar','exercises',
            'practical-communication','summary','examination','solutions'])
        self.assertEqual(chapter['metadata']['grammarReferences'], [1,2,3,4,5,6,7,8,9,18,19,20,21,48,49,61,62,89,90,91,101,289,290,758,759])
        reading = chapter['sections'][1]
        annotation = reading['annotations'][0]
        self.assertTrue(any(t.get('text') == annotation['text'] for t in reading['texts']))
        for mark in annotation['marks']:
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
        vocabulary = chapter['sections'][2]['vocabulary']
        self.assertGreaterEqual(len(vocabulary), 12)
        self.assertLessEqual(len(vocabulary), 20)
        questions = []
        for section in chapter['sections']:
            questions += section.get('exercises', []) + section.get('comprehension', [])
            for rule in section.get('rules', []): questions += rule.get('exercises', [])
        exam = chapter['sections'][7]['exam']
        questions += exam['questions']
        self.assertEqual(len({q['id'] for q in questions}), len(questions))
        self.assertEqual(sum(q['points'] for q in exam['questions']), 100)
        self.assertEqual(sum(q['points'] for q in exam['questions'] if q['category']=='writing'), 20)
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']), 2)
                self.assertIn(q['answer'], range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            else: self.assertIn('answer', q)
        self.assertEqual(len(exam['readingTexts']), 2)
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({', source)
        self.assertIn('if(s.miniProject)', (ROOT/'js/renderer.js').read_text())
        self.assertIn('if(s.criteria)', (ROOT/'js/renderer.js').read_text())


    def test_chapter_02_content_and_assessment(self):
        source = (ROOT / 'content/a1/chapter-02.js').read_text()
        raw = source.split('const chapter = ', 1)[1].split(';\n\nfunction collectExercises', 1)[0]
        chapter = json.loads(raw)
        self.assertEqual(chapter['id'], 'chapter-02')
        self.assertEqual(chapter['metadata']['title'], 'Präsens: Verben, Konjugation und Fragen')
        self.assertEqual(chapter['metadata']['grammarReferences'], list(range(88,105)) + list(range(127,130)) + list(range(290,297)) + list(range(324,340)) + list(range(708,712)))
        self.assertEqual([s['id'] for s in chapter['sections']], [
            'introduction','reading','vocabulary','grammar','exercises',
            'practical-communication','summary','examination','solutions'])
        self.assertEqual(len(chapter['sections'][2]['vocabulary']), 18)
        self.assertEqual(len(chapter['sections'][3]['rules']), 8)
        self.assertTrue(all(len(r['exercises']) >= 3 and r.get('explanation') and r.get('examples') and r.get('formula') and r.get('exceptions') and r.get('mistakes') and r.get('tip') for r in chapter['sections'][3]['rules']))
        questions=[]
        for section in chapter['sections']:
            questions += section.get('exercises',[]) + section.get('comprehension',[])
            for rule in section.get('rules',[]): questions += rule.get('exercises',[])
            questions += section.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions), 80)
        self.assertEqual(len({q['id'] for q in questions}), len(questions))
        for q in questions:
            if q['type'] == 'multiple-choice':
                self.assertIn(q['answer'], range(len(q['options'])))
            elif q['type'] == 'written':
                self.assertTrue(q.get('modelAnswer'))
            else:
                self.assertIn('answer', q)
        exam=chapter['sections'][7]['exam']
        self.assertEqual(sum(q['points'] for q in exam['questions']), 100)
        self.assertEqual(exam['distribution'], {'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({c:sum(q['points'] for q in exam['questions'] if q.get('category')==c) for c in exam['distribution']}, exam['distribution'])
        self.assertEqual(len(exam['readingTexts']), 2)
        self.assertEqual(len(chapter['sections'][8]['answers']), len(questions))
        reading=chapter['sections'][1]
        annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text') == annotation['text'] for t in reading['texts']))
        for mark in annotation['marks']:
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
        english_instructions=re.compile(r'\b(choose|complete the|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','explanation'):
                if q.get(field): self.assertIsNone(english_instructions.search(q[field]), f"{q['id']} {field}")

    def test_chapter_10_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-10.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-10')
        self.assertEqual(chapter['metadata']['title'],'Einfache Gespräche und Satzverbindungen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(367,373),*range(411,419),*range(483,486),517,518,*range(529,551),*range(758,777)])
        self.assertEqual([s['id'] for s in chapter['sections']], ['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),20)
        self.assertEqual(len(chapter['sections'][3]['rules']),8)
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[]) + sec.get('comprehension',[]) + sec.get('observationExercises',[])
            for rule in sec.get('rules',[]): questions += rule.get('exercises',[])
            questions += sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({',source)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        for q in questions:
            if q['type']=='multiple-choice': self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertTrue(q.get('answer') is not None)
        exam=chapter['sections'][7]['exam']
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        learning_texts=[t['text'] for t in chapter['sections'][1]['texts']]
        self.assertTrue(all(t['text'] not in learning_texts for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        for a in chapter['sections'][1]['annotations']:
            self.assertTrue(any(a['text'] in text for text in learning_texts))
            for mark in a['marks']: self.assertTrue(a['text'][mark['start']:mark['end']])
        english=re.compile(r'\b(choose|complete|write|correct|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-10': 'content/a1/chapter-10.js'",(ROOT/'content/curriculum.js').read_text())

    def test_chapter_11_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-11.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-11')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Das Präteritum und vergangene Erlebnisse')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(143,154),171,172,*range(563,581)])
        ids=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],ids)
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),25)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in chapter['sections'][2]['vocabulary']))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),7)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[])+sec.get('comprehension',[])+sec.get('observationExercises',[])
            for rule in sec.get('rules',[]): questions += rule.get('exercises',[])
            questions += sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),88)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({',source)
        for q in questions:
            if q['type']=='multiple-choice': self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=chapter['sections'][7]['exam']
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        word_count=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=word_count(chapter['sections'][0]['openingText'])<=160)
        self.assertTrue(all(150<=word_count(t['text'])<=250 for t in chapter['sections'][1]['texts']))
        learning=[t['text'] for t in chapter['sections'][1]['texts']]
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        for a in chapter['sections'][1]['annotations']:
            self.assertTrue(any(a['text'] in text for text in learning))
            for mark in a['marks']: self.assertTrue(a['text'][mark['start']:mark['end']])
        english=re.compile(r'\b(choose|complete|write|correct|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-11': 'content/a2/chapter-11.js'",(ROOT/'content/curriculum.js').read_text())
        self.assertIn('\"title\": \"Das Präteritum und vergangene Erlebnisse\"',(ROOT/'content/curriculum.js').read_text())

    def test_chapter_13_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-13.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-13')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Adjektive, Deklination und Vergleiche')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(483,507),*range(510,529)])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected)
        self.assertGreaterEqual(len(chapter['sections'][2]['vocabulary']),20)
        vocabulary=chapter['sections'][2]['vocabulary']
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocabulary))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocabulary if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocabulary if v['category']=='verb'))
        grammar=chapter['sections'][3]
        self.assertGreaterEqual(len(grammar['rules']),8)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and r.get('examples') and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in grammar['rules']))
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[]) + sec.get('comprehension',[]) + sec.get('observationExercises',[])
            for rule in sec.get('rules',[]): questions += rule.get('exercises',[])
            questions += sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual(len(chapter['sections'][8]['answers']),len(questions))
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice': self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            else: self.assertTrue(q.get('answer'))
        exam=chapter['sections'][7]['exam']
        expected_points={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],expected_points)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected_points},expected_points)
        self.assertEqual(len(exam['readingTexts']),2)
        learning_texts=[t['text'] for t in chapter['sections'][1]['texts']]
        self.assertTrue(all(t['text'] not in learning_texts for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]
        for annotation in reading['annotations']:
            self.assertTrue(any(annotation['text']==t['text'] for t in reading['texts']))
            for mark in annotation['marks']:
                self.assertGreater(mark['end'],mark['start'])
                self.assertTrue(annotation['text'][mark['start']:mark['end']])
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-13': 'content/a2/chapter-13.js'",(ROOT/'content/curriculum.js').read_text())

    def test_chapter_12_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-12.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-12')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Reflexive Verben und persönliche Beziehungen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[66,67,68,76,109,110,111,112,*range(600,610)])
        self.assertEqual([s['id'] for s in chapter['sections']],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        vocab=chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocab),25)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),7)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[])+sec.get('comprehension',[])+sec.get('observationExercises',[])
            for rule in sec.get('rules',[]): questions += rule.get('exercises',[])
            questions += sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),86)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({',source)
        for q in questions:
            if q['type']=='multiple-choice': self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=chapter['sections'][7]['exam']
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        word_count=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=word_count(chapter['sections'][0]['openingText'])<=160)
        self.assertTrue(all(150<=word_count(t['text'])<=250 for t in chapter['sections'][1]['texts']))
        learning=[t['text'] for t in chapter['sections'][1]['texts']]
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        for annotation in chapter['sections'][1]['annotations']:
            self.assertTrue(any(annotation['text']==text for text in learning))
            for mark in annotation['marks']: self.assertTrue(annotation['text'][mark['start']:mark['end']])
        english=re.compile(r'\b(choose|complete|write|correct|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-12': 'content/a2/chapter-12.js'",curriculum)
        self.assertIn('"title": "Reflexive Verben und persönliche Beziehungen"',curriculum)

    def test_chapter_03_content_and_assessment(self):
        source = (ROOT / 'content/a1/chapter-03.js').read_text()
        raw = source.split('const chapter = ', 1)[1].split(';\n\nfunction collectExercises', 1)[0]
        chapter = json.loads(raw)
        self.assertEqual(chapter['id'], 'chapter-03')
        self.assertEqual(chapter['metadata']['title'], 'Akkusativ, Negation und Possessivartikel')
        self.assertEqual(chapter['metadata']['grammarReferences'], [22,23,24,25,26,27,28,50,51,52,53,63,*range(348,367)])
        self.assertEqual([s['id'] for s in chapter['sections']], [
            'introduction','reading','vocabulary','grammar','exercises',
            'practical-communication','summary','examination','solutions'])
        self.assertEqual([s['title'] for s in chapter['sections']], [
            'Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten',
            'Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        vocabulary = chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocabulary), 20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocabulary))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocabulary if v['category']=='noun'))
        grammar = chapter['sections'][3]
        self.assertEqual(len(grammar['rules']), 8)
        self.assertTrue(all(len(r['exercises']) >= 3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in grammar['rules']))
        self.assertEqual([r['reference'] for r in grammar['rules']], ['22, 25–26','23, 50, 52','24, 63','25–28','348–355','51','52–53','356–366'])
        questions=[]
        for section in chapter['sections']:
            questions += section.get('exercises',[]) + section.get('comprehension',[])
            for rule in section.get('rules',[]): questions += rule.get('exercises',[])
            questions += section.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions), 87)
        self.assertEqual(len({q['id'] for q in questions}), len(questions))
        self.assertEqual(len(chapter['sections'][8]['answers']), len(questions))
        self.assertEqual({x['exerciseId'] for x in chapter['sections'][8]['answers']}, {q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']), 2)
                self.assertIn(q['answer'], range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'], ('true','false'))
            else: self.assertIn('answer', q)
        exam=chapter['sections'][7]['exam']
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'], {'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in exam['distribution']}, exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(t['text'] not in [x.get('text','') for x in chapter['sections'][1]['texts']] for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]; annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==annotation['text'] for t in reading['texts']))
        for mark in annotation['marks']:
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
        self.assertIn("'chapter-03': 'content/a1/chapter-03.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn("'chapter-04': 'content/a1/chapter-04.js'", (ROOT/'content/curriculum.js').read_text())
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({', source)
        word_count=lambda text: len(re.findall(r'\b[\wÄÖÜäöüß]+\b', text))
        self.assertGreaterEqual(word_count(chapter['sections'][0]['openingText']),60)
        self.assertTrue(all(80 <= word_count(' '.join(x['text'] for x in t['lines']) if 'lines' in t else t['text']) <= 150 for t in reading['texts']))
        self.assertTrue(all(80 <= word_count(t['text']) <= 150 for t in exam['readingTexts']))
        self.assertEqual(len({t['text'] for t in exam['readingTexts']}),2)
        english_prompt=re.compile(r'\b(choose|complete|write|correct|which|where|what|who|select|fill in|true or false|no thing|that shop)\b',re.I)
        for q in questions:
            if q['id']=='c03-ex-09': continue  # the English source sentence is the translation task
            for field in ('label','prompt'):
                if q.get(field): self.assertIsNone(english_prompt.search(q[field]), f"{q['id']} {field}")

    def test_chapter_04_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-04.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-04')
        self.assertEqual(chapter['metadata']['title'],'Dativ und Objektpronomen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(29,36),*range(42,48),64,*range(113,119),*range(312,315)])
        ids=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],ids)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in chapter['sections'][2]['vocabulary']))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in chapter['sections'][2]['vocabulary'] if v['category']=='noun'))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),8)
        self.assertEqual([r['reference'] for r in rules],['29, 33, 35, 46','30, 34, 47','31, 64','32, 117','42–43, 113–118','44, 312','45, 313–314','46–47'])
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),88)
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers=chapter['sections'][8]['answers']
        self.assertEqual(len(answers),len(questions))
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIn('answer',q)
        exam=chapter['sections'][7]['exam']
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q['category']=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]; annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==annotation['text'] for t in reading['texts']))
        end=0
        for mark in sorted(annotation['marks'],key=lambda m:m['start']):
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
            self.assertGreaterEqual(mark['start'],end)
            end=mark['end']
        words=lambda s:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',s))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertTrue(all(80<=words(' '.join(x['text'] for x in t['lines']) if 'lines' in t else t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false|to show|to thank)\b',re.I)
        for q in questions:
            if q['id']=='c04-ex-08':continue
            for field in ('label','prompt'):
                if q.get(field):self.assertIsNone(english.search(q[field]),f"{q['id']} {field}")
        self.assertIn("'chapter-04': 'content/a1/chapter-04.js'",(ROOT/'content/curriculum.js').read_text())
        self.assertIn('chapter.sections[8].answers = exercises.map(question => ({',source)


    def test_chapter_05_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-05.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-05')
        self.assertEqual(chapter['metadata']['title'],'Modalverben und Kommunikation im Alltag')
        self.assertEqual(chapter['metadata']['grammarReferences'],[105,130,*range(163,171),*range(173,183),298,*range(716,724)])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in chapter['sections'][2]['vocabulary']))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),8)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        self.assertIn('weil ich heute arbeiten muss',rules[6]['exceptions'])
        self.assertIn('Ich höre gern Musik',rules[4]['explanation'])
        questions=[]
        for sec in chapter['sections']:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),88)
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers=chapter['sections'][8]['answers']
        self.assertEqual(len(answers),len(questions))
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIn('answer',q)
        exam=chapter['sections'][7]['exam']
        expected_points={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],expected_points)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected_points},expected_points)
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1];annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==annotation['text'] for t in reading['texts']))
        end=0
        for mark in sorted(annotation['marks'],key=lambda m:m['start']):
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
            self.assertGreaterEqual(mark['start'],end)
            end=mark['end']
        words=lambda s:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',s))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertTrue(all(80<=words(t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false|permission)\b',re.I)
        for q in questions:
            if q['id'] in ('c05-p-06','c05-ex-v5'):continue  # English appears only in a translation/vocabulary prompt.
            for field in ('label','prompt'):
                if q.get(field):self.assertIsNone(english.search(q[field]),f"{q['id']} {field}")
        self.assertIn("'chapter-05': 'content/a1/chapter-05.js'",(ROOT/'content/curriculum.js').read_text())

    def test_chapter_06_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-06.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-06')
        self.assertEqual(chapter['metadata']['title'],'Präpositionen I: Orte, Wege und Bewegung')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(228,263),270,*range(274,284),285])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        vocabulary=chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocabulary),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') and v.get('article') and v.get('plural') for v in vocabulary))
        grammar=chapter['sections'][3]
        self.assertEqual(len(grammar['rules']),7)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in grammar['rules']))
        self.assertTrue(all(r['reference'] for r in grammar['rules']))
        questions=[]
        for sec in chapter['sections']:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),89)
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers=chapter['sections'][8]['answers']
        self.assertEqual(len(answers),len(questions))
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIn('answer',q)
        exam=chapter['sections'][7]['exam']
        expected_points={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],expected_points)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected_points},expected_points)
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1];annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==annotation['text'] for t in reading['texts']))
        end=0
        for mark in sorted(annotation['marks'],key=lambda m:m['start']):
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
            self.assertGreaterEqual(mark['start'],end)
            end=mark['end']
        words=lambda x:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',x))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertTrue(all(80<=words(t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete the|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            if q['id'] in ('c06-p-06',):continue
            for field in ('label','prompt'):
                if q.get(field):self.assertIsNone(english.search(q[field]),f"{q['id']} {field}")
        self.assertIn("'chapter-06': 'content/a1/chapter-06.js'",(ROOT/'content/curriculum.js').read_text())

    def test_chapter_07_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-07.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-07')
        self.assertEqual(chapter['metadata']['title'],'Zeit, Zahlen und Tagesabläufe')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(551,571),*range(581,600),529,530,*range(545,549)])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        self.assertEqual(len(chapter['sections'][0]['keywords']),6)
        self.assertNotEqual(chapter['sections'][0]['openingText'],chapter['sections'][1]['texts'][0]['text'])
        vocabulary=chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocabulary),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') and v.get('article') and v.get('plural') for v in vocabulary))
        self.assertTrue(any(q['id']=='c07-v-7' for q in chapter['sections'][2]['exercises']))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),8)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        self.assertTrue(all(t.get('columns') and t.get('rows') for t in chapter['sections'][3]['tables']))
        questions=[]
        for sec in chapter['sections']:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),99)
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers=chapter['sections'][8]['answers']
        self.assertEqual(len(answers),len(questions))
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIn('answer',q)
        exam=chapter['sections'][7]['exam']
        expected_points={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],expected_points)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected_points},expected_points)
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1];annotation=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==annotation['text'] for t in reading['texts']))
        end=0
        for mark in sorted(annotation['marks'],key=lambda m:m['start']):
            self.assertTrue(annotation['text'][mark['start']:mark['end']])
            self.assertGreaterEqual(mark['start'],end)
            end=mark['end']
        words=lambda x:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',x))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertLessEqual(words(chapter['sections'][0]['openingText']),120)
        self.assertTrue(all(80<=words(t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete the|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            if q['id']=='c07-p-18':continue  # the English sentence is the explicit translation source
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value):
                        self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-07': 'content/a1/chapter-07.js'",(ROOT/'content/curriculum.js').read_text())


    def test_chapter_08_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-08.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-08')
        self.assertEqual(chapter['metadata']['title'],'Trennbare Verben und der Imperativ')
        self.assertEqual(chapter['metadata']['grammarReferences'],[106,107,108,126,*range(204,214),299,667,668,669,713,714,715])
        ids=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],ids)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        vocabulary=chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocabulary),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocabulary))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocabulary if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocabulary if v['category']=='verb'))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),8)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        self.assertTrue(any('Reflexive Imperativformen' in t.get('caption','') for t in chapter['sections'][3]['tables']))
        questions=[]
        for section in chapter['sections']:
            questions+=section.get('exercises',[])+section.get('comprehension',[])
            for rule in section.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=section.get('exam',{}).get('questions',[])
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers=chapter['sections'][8]['answers']
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':
                self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIn('answer',q)
        exam=chapter['sections'][7]['exam']
        expected={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['totalPoints'],100); self.assertEqual(exam['distribution'],expected)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected},expected)
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]; ann=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==ann['text'] for t in reading['texts']))
        end=0
        for mark in sorted(ann['marks'],key=lambda x:x['start']):
            self.assertTrue(ann['text'][mark['start']:mark['end']]); self.assertGreaterEqual(mark['start'],end); end=mark['end']
        words=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertTrue(all(80<=words(t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete the|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            if q['id'] in ('c08-ex-05','c08-v-10'): continue
            for field in ('label','prompt','options'):
                val=q.get(field)
                if val:
                    for text in ([val] if isinstance(val,str) else val): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-08': 'content/a1/chapter-08.js'",(ROOT/'content/curriculum.js').read_text())


    def test_chapter_09_content_and_assessment(self):
        source=(ROOT/'content/a1/chapter-09.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-09')
        self.assertEqual(chapter['metadata']['title'],'Das Perfekt: Über Vergangenes sprechen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(132,143),300])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected)
        self.assertEqual([s['title'] for s in chapter['sections']],['Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten','Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        vocabulary=chapter['sections'][2]['vocabulary']
        self.assertEqual(len(vocabulary),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocabulary))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocabulary if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocabulary if v['category']=='verb'))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),8)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        tables=chapter['sections'][3]['tables']
        self.assertTrue(any('haben' in t['caption'].lower() and 'sein' in t['caption'].lower() for t in tables))
        self.assertTrue(any('Reflexivpronomen' in t['caption'] for t in tables))
        self.assertTrue(chapter['sections'][1].get('exercises'))
        questions=[]
        for section in chapter['sections']:
            questions+=section.get('exercises',[])+section.get('comprehension',[])
            for rule in section.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=section.get('exam',{}).get('questions',[])
        self.assertEqual(len({q['id'] for q in questions}),len(questions))
        answers={a['exerciseId']:a for a in chapter['sections'][8]['answers']}
        self.assertEqual(set(answers),{q['id'] for q in questions})
        for q in questions:
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
                self.assertEqual(answers[q['id']]['answer'],q['options'][q['answer']])
            elif q['type']=='written':
                self.assertTrue(q.get('modelAnswer'))
                self.assertEqual(q['answer'],q['modelAnswer'])
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else:
                self.assertIn('answer',q); self.assertNotIn('|',str(q['answer']))
        exam=chapter['sections'][7]['exam']
        expected_points={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['totalPoints'],100); self.assertEqual(exam['distribution'],expected_points)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in expected_points},expected_points)
        self.assertEqual(len(exam['readingTexts']),2)
        learning={t.get('text','') for t in chapter['sections'][1]['texts']}
        self.assertTrue(all(t['text'] not in learning for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]; ann=reading['annotations'][0]
        self.assertTrue(any(t.get('text')==ann['text'] for t in reading['texts']))
        end=0
        for mark in sorted(ann['marks'],key=lambda x:x['start']):
            self.assertTrue(ann['text'][mark['start']:mark['end']]); self.assertGreaterEqual(mark['start'],end); end=mark['end']
        words=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertGreaterEqual(words(chapter['sections'][0]['openingText']),60)
        self.assertLessEqual(words(chapter['sections'][0]['openingText']),100)
        self.assertTrue(all(80<=words(t['text'])<=150 for t in reading['texts']))
        self.assertTrue(all(80<=words(t['text'])<=150 for t in exam['readingTexts']))
        english=re.compile(r'\b(choose|complete the|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            if q['id'] in ('c09-v-8','c09-pr-13'): continue
            for field in ('label','prompt','options'):
                val=q.get(field)
                if val:
                    for text in ([val] if isinstance(val,str) else val): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-09': 'content/a1/chapter-09.js'",(ROOT/'content/curriculum.js').read_text())

    def test_chapter_01_german_learning_language(self):
        source = (ROOT / 'content/a1/chapter-01.js').read_text()
        raw = source.split('const chapter = ', 1)[1].split(';\n\nfunction collectExercises', 1)[0]
        chapter = json.loads(raw)
        self.assertEqual(chapter['metadata']['title'], 'Erste Schritte: Nomen, Artikel und einfache Sätze')
        self.assertEqual([s['title'] for s in chapter['sections']], [
            'Einstieg','Lesen & Verstehen','Wortschatz','Grammatik','Übungen & Aktivitäten',
            'Sprache im Alltag','Zusammenfassung','Kapitelprüfung','Lösungen & Lernkontrolle'])
        questions = []
        for section in chapter['sections']:
            questions += section.get('exercises', []) + section.get('comprehension', [])
            for rule in section.get('rules', []): questions += rule.get('exercises', [])
            questions += section.get('exam', {}).get('questions', [])
        self.assertEqual(len(questions), 79)
        self.assertEqual({kind:sum(q['type']==kind for q in questions) for kind in ('multiple-choice','true-false','fill-blank','written')},
                         {'multiple-choice':49,'true-false':8,'fill-blank':7,'written':15})
        english_instructions = re.compile(r'\b(choose|complete|write|correct|which|where|what|who|select|multiple choice|fill in|written response|self-check|capitalization|pronouns|verb endings|word order)\b', re.I)
        for q in questions:
            # The English source sentence in this translation exercise is intentional.
            if q['id'] == 'p01-translate':
                self.assertFalse(english_instructions.search(q['label']))
                continue
            for field in ('label','prompt','options'):
                value = q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value):
                        self.assertIsNone(english_instructions.search(text), f"{q['id']} {field}: {text}")
        self.assertEqual(chapter['sections'][7]['exam']['totalPoints'], 100)
        self.assertEqual(chapter['sections'][7]['exam']['distribution'], {
            'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        for path in ['index.html','js/exercises.js','js/exams.js','js/navigation.js','js/app.js']:
            text=(ROOT/path).read_text()
            self.assertNotIn('Check answer', text)
            self.assertNotIn('Show answer', text)
            self.assertNotIn('Next section', text)
        self.assertIn('Erneut versuchen', (ROOT/'js/exercises.js').read_text())
        self.assertIn('Lösung anzeigen', (ROOT/'js/exercises.js').read_text())
        loader=(ROOT/'js/chapter-loader.js').read_text()
        self.assertIn("'introduction','reading','vocabulary','grammar','exercises'", loader)

if __name__ == '__main__':
    unittest.main(verbosity=2)
