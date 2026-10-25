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
        self.assertEqual(manifest['chapters']['14']['status'], 'completed')
        self.assertEqual(manifest['chapters']['14']['contentFile'], 'content/a2/chapter-14.js')
        self.assertEqual(manifest['chapters']['15']['status'], 'completed')
        self.assertEqual(manifest['chapters']['15']['contentFile'], 'content/a2/chapter-15.js')
        self.assertEqual(manifest['chapters']['16']['status'], 'completed')
        self.assertEqual(manifest['chapters']['16']['contentFile'], 'content/a2/chapter-16.js')
        self.assertEqual(manifest['chapters']['17']['status'], 'completed')
        self.assertEqual(manifest['chapters']['17']['contentFile'], 'content/a2/chapter-17.js')
        self.assertEqual(manifest['chapters']['18']['status'], 'completed')
        self.assertEqual(manifest['chapters']['18']['contentFile'], 'content/a2/chapter-18.js')
        self.assertEqual(manifest['chapters']['19']['status'], 'completed')
        self.assertEqual(manifest['chapters']['19']['contentFile'], 'content/a2/chapter-19.js')
        self.assertEqual(manifest['chapters']['20']['status'], 'completed')
        self.assertEqual(manifest['chapters']['20']['contentFile'], 'content/a2/chapter-20.js')
        self.assertEqual(manifest['chapters']['20']['report'], 'progress/reports/chapter-20.md')
        self.assertEqual(manifest['chapters']['21']['status'], 'completed')
        self.assertEqual(manifest['chapters']['21']['contentFile'], 'content/b1/chapter-21.js')
        self.assertEqual(manifest['chapters']['21']['report'], 'progress/reports/chapter-21.md')
        self.assertEqual(manifest['chapters']['22']['status'], 'completed')
        self.assertEqual(manifest['chapters']['22']['contentFile'], 'content/b1/chapter-22.js')
        self.assertEqual(manifest['chapters']['22']['report'], 'progress/reports/chapter-22.md')
        self.assertEqual(manifest['chapters']['23']['status'], 'completed')
        self.assertEqual(manifest['chapters']['23']['contentFile'], 'content/b1/chapter-23.js')
        self.assertEqual(manifest['chapters']['23']['report'], 'progress/reports/chapter-23.md')
        self.assertEqual(manifest['chapters']['24']['status'], 'completed')
        self.assertEqual(manifest['chapters']['24']['contentFile'], 'content/b1/chapter-24.js')
        self.assertEqual(manifest['chapters']['24']['report'], 'progress/reports/chapter-24.md')
        self.assertEqual(manifest['chapters']['25']['status'], 'completed')
        self.assertEqual(manifest['chapters']['25']['contentFile'], 'content/b1/chapter-25.js')
        self.assertEqual(manifest['chapters']['25']['report'], 'progress/reports/chapter-25.md')
        self.assertEqual(manifest['chapters']['26']['status'], 'completed')
        self.assertEqual(manifest['chapters']['26']['contentFile'], 'content/b1/chapter-26.js')
        self.assertEqual(manifest['chapters']['26']['report'], 'progress/reports/chapter-26.md')
        self.assertEqual(manifest['chapters']['27']['status'], 'completed')
        self.assertEqual(manifest['chapters']['27']['contentFile'], 'content/b1/chapter-27.js')
        self.assertEqual(manifest['chapters']['27']['report'], 'progress/reports/chapter-27.md')
        self.assertTrue((ROOT / manifest['chapters']['27']['report']).is_file())
        self.assertEqual(manifest['chapters']['28']['status'], 'completed')
        self.assertEqual(manifest['chapters']['28']['contentFile'], 'content/b1/chapter-28.js')
        self.assertEqual(manifest['chapters']['28']['report'], 'progress/reports/chapter-28.md')
        self.assertTrue((ROOT / manifest['chapters']['28']['report']).is_file())
        self.assertTrue(all(x['status'] == 'pending' and x['contentFile'] is None for k,x in manifest['chapters'].items() if k not in ('01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30')))
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
        self.assertEqual(len(chapters), 20)
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

    def test_chapter_14_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-14.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-14')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Nebensätze I: Gründe, Aussagen und Fragen')
        expected_refs=[292,*range(305,312),*range(341,345),*range(373,377),*range(399,404),*range(427,430),*range(448,452)]
        self.assertEqual(chapter['metadata']['grammarReferences'],expected_refs)
        expected_sections=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in chapter['sections']],expected_sections)
        vocab=chapter['sections'][2]['vocabulary']
        self.assertGreaterEqual(len(vocab),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=chapter['sections'][3]['rules']
        self.assertGreaterEqual(len(rules),8)
        covered={n for rule in rules for n in rule.get('reference',[])}
        self.assertEqual(covered,set(expected_refs))
        self.assertTrue(all(r.get('explanation') and r.get('formula') and r.get('examples') and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual(len(chapter['sections'][8]['answers']),len(questions))
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIn(q['answer'],range(len(q['options'])))
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
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]
        for annotation in reading['annotations']:
            self.assertTrue(any(annotation['text']==t['text'] for t in reading['texts']))
            for mark in annotation['marks']:
                self.assertGreater(mark['end'],mark['start'])
                self.assertTrue(annotation['text'][mark['start']:mark['end']])
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                if field=='prompt' and q.get('label')=='Übersetzung': continue
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value): self.assertIsNone(english.search(text),f"{q['id']} {field}")
        self.assertIn("'chapter-14': 'content/a2/chapter-14.js'",(ROOT/'content/curriculum.js').read_text())
        self.assertIn('"title": "Nebensätze I: Gründe, Aussagen und Fragen"',(ROOT/'content/curriculum.js').read_text())

    def test_chapter_15_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-15.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-15')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Temporale Nebensätze und zeitliche Abläufe')
        refs=[378,*range(380,387),*range(431,439),*range(571,581)]
        self.assertEqual(chapter['metadata']['grammarReferences'],refs)
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        self.assertEqual(len(sections[2]['vocabulary']),29)
        vocab=sections[2]['vocabulary']
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']
        self.assertEqual(len(rules),11)
        self.assertEqual({n for r in rules for n in r.get('reference',[])},set(refs))
        self.assertTrue(all(r.get('explanation') and r.get('formula') and r.get('examples') and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        answers=sections[8]['answers']
        self.assertEqual({a['exerciseId'] for a in answers},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2)
                self.assertIsInstance(q['answer'],int)
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']
        distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        annotation=sections[1]['annotations'][0]
        self.assertTrue(any(t['text']==annotation['text'] for t in sections[1]['texts']))
        self.assertTrue(all(annotation['text'][m['start']:m['end']] for m in annotation['marks']))
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                if field=='prompt' and q['id']=='c15-ex16':continue
                value=q.get(field)
                if value:
                    for item in ([value] if isinstance(value,str) else value):self.assertIsNone(english.search(item),f"{q['id']} {field}")
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-15': 'content/a2/chapter-15.js'",curriculum)
        self.assertIn('"title": "Temporale Nebensätze und zeitliche Abläufe"',curriculum)

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


    def test_chapter_16_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-16.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-16')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Infinitivkonstruktionen: Pläne, Ziele und Absichten')
        refs=[*range(120,125),*range(440,446),*range(464,483)]
        self.assertEqual(chapter['metadata']['grammarReferences'],refs)
        sections=chapter['sections']
        ids=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([s['id'] for s in sections],ids)
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']
        self.assertGreaterEqual(len(vocab),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']
        self.assertEqual(len(rules),12)
        covered={n for r in rules for n in r['reference']}
        required={120,121,122,123,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,440,441,443,444}
        self.assertTrue(required.issubset(covered))
        self.assertTrue(all(r.get('explanation') and r.get('formula') and r.get('examples') and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':
                self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']
        distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        annotation=sections[1]['annotations'][0]
        self.assertTrue(any(annotation['text']==t['text'] for t in sections[1]['texts']))
        self.assertTrue(all(annotation['text'][m['start']:m['end']] for m in annotation['marks']))
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value):
                        self.assertIsNone(english.search(text),f"{q['id']} {field}")
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-16': 'content/a2/chapter-16.js'",curriculum)
        self.assertIn('"title": "Infinitivkonstruktionen: Pläne, Ziele und Absichten"',curriculum)


    def test_chapter_17_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-17.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\n\nfunction collectExercises',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-17')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Bedingungen, Gegensätze und logische Verbindungen')
        refs=[377,379,*range(387,392),*range(404,411),*range(419,427),430,439,*range(442,446),*range(695,702)]
        self.assertEqual(chapter['metadata']['grammarReferences'],refs)
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']
        self.assertGreaterEqual(len(vocab),20)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']
        self.assertEqual(len(rules),10)
        required={377,379,387,388,389,390,391,404,405,406,407,408,409,410,419,420,421,422,423,424,425,426,430,439,442,443,444,445,*range(695,702)}
        covered={n for r in rules for n in r['reference']}
        self.assertTrue(required.issubset(covered))
        self.assertTrue(all(r.get('explanation') and r.get('formula') and r.get('examples') and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),108)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        annotation=sections[1]['annotations'][0]
        self.assertTrue(any(annotation['text']==t['text'] for t in sections[1]['texts']))
        self.assertTrue(all(annotation['text'][m['start']:m['end']] for m in annotation['marks']))
        english=re.compile(r'\b(choose|complete|write a|which|where|what|who|select|fill in|true or false)\b',re.I)
        for q in questions:
            for field in ('label','prompt','options'):
                value=q.get(field)
                if value:
                    for text in ([value] if isinstance(value,str) else value):self.assertIsNone(english.search(text),f"{q['id']} {field}")
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-17': 'content/a2/chapter-17.js'",curriculum)
        self.assertIn('"title": "Bedingungen, Gegensätze und logische Verbindungen"',curriculum)


    def test_chapter_18_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-18.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-18')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Verben mit Präpositionen und Pronominaladverbien')
        self.assertEqual(chapter['metadata']['grammarReferences'],[115,119,*range(263,270),*range(286,289),*range(610,639)])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']
        self.assertEqual(len(vocab),27)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']
        self.assertEqual(len(rules),10)
        required={115,119,*range(263,270),*range(286,289),*range(610,639)}
        covered={n for r in rules for n in r['reference']}
        self.assertTrue(required.issubset(covered))
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))>=3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),105)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        annotation=sections[1]['annotations'][0]
        self.assertTrue(any(annotation['text']==t['text'] for t in sections[1]['texts']))
        self.assertTrue(all(annotation['text'][m['start']:m['end']] for m in annotation['marks']))
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-18': 'content/a2/chapter-18.js'",curriculum)
        self.assertIn('"title": "Verben mit Präpositionen und Pronominaladverbien"',curriculum)


    def test_chapter_19_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-19.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-19')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Genitiv, Besitz und Wortbildung')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(10,18),*range(36,42),*range(263,270),*range(664,679),688,689,692])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        self.assertEqual(len(sections[2]['vocabulary']),24)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in sections[2]['vocabulary']))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in sections[2]['vocabulary'] if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in sections[2]['vocabulary'] if v['category']=='verb'))
        rules=sections[3]['rules'];self.assertEqual(len(rules),11)
        required={*range(10,18),*range(36,42),*range(263,270),*range(664,679),688,689,692}
        covered={n for r in rules for n in re.findall(r'\d+',r['reference'])}
        self.assertTrue(rules and all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])+sec.get('observationExercises',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),98)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertGreaterEqual(len(q['options']),2);self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        self.assertEqual(sum(q['type']=='written' and q.get('category')=='writing' for q in exam['questions']),3)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text'] in t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']:self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-19': 'content/a2/chapter-19.js'",curriculum)
        self.assertIn('"title": "Genitiv, Besitz und Wortbildung"',curriculum)


    def test_chapter_20_content_and_assessment(self):
        source=(ROOT/'content/a2/chapter-20.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-20')
        self.assertEqual(chapter['metadata']['level'],'A2')
        self.assertEqual(chapter['metadata']['title'],'Zusammenhängend sprechen und schreiben')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(297,324),*range(367,427),*range(392,399),*range(529,551),*range(693,708)])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=160)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary'];self.assertEqual(len(vocab),28)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules'];self.assertEqual(len(rules),12)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),109)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertGreaterEqual(len(q['options']),2);self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(40<=lengths[0]<=60 and 60<=lengths[1]<=80 and 60<=lengths[2]<=100)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text'] == t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']:self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-20': 'content/a2/chapter-20.js'",curriculum)
        self.assertIn('"title": "Zusammenhängend sprechen und schreiben"',curriculum)


    def test_chapter_21_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-21.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-21')
        self.assertEqual(chapter['metadata']['level'],'B1')
        self.assertEqual(chapter['metadata']['title'],'Relativsätze und Relativpronomen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[78,79,80,81,82,83,446,*range(452,464)])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(100<=wc(sections[0]['openingText'])<=180)
        self.assertGreaterEqual(wc(sections[1]['texts'][0]['text']),250)
        vocab=sections[2]['vocabulary'];self.assertTrue(25<=len(vocab)<=40)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules'];self.assertEqual(len(rules),12)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),102)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertGreaterEqual(len(q['options']),2);self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']:self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-21': 'content/b1/chapter-21.js'",curriculum)
        self.assertIn('"title": "Relativsätze und Relativpronomen"',curriculum)


    def test_chapter_22_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-22.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-22')
        self.assertEqual(chapter['metadata']['level'],'B1')
        self.assertEqual(chapter['metadata']['title'],'Das Passiv und die Beschreibung von Vorgängen')
        self.assertEqual(chapter['metadata']['grammarReferences'],list(range(214,228)))
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary'];self.assertTrue(25<=len(vocab)<=40)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules'];self.assertEqual(len(rules),11)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),99)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertGreaterEqual(len(q['options']),2);self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']:self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-22': 'content/b1/chapter-22.js'",curriculum)
        self.assertIn('"title": "Das Passiv und die Beschreibung von Vorgängen"',curriculum)


    def test_chapter_23_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-23.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-23')
        self.assertEqual(chapter['metadata']['level'],'B1')
        self.assertEqual(chapter['metadata']['title'],'Konjunktiv II: Wünsche, Ratschläge und Möglichkeiten')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(183,204),713,716,717,718,719,720,721,722,723])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary'];self.assertTrue(25<=len(vocab)<=40)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules'];self.assertEqual(len(rules),11)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),97)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':self.assertGreaterEqual(len(q['options']),2);self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam'];distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']:self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-23': 'content/b1/chapter-23.js'",curriculum)
        self.assertIn('"title": "Konjunktiv II: Wünsche, Ratschläge und Möglichkeiten"',curriculum)


    def test_chapter_24_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-24.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-24')
        self.assertEqual(chapter['metadata']['title'],'Komplexer Satzbau und Wortstellung')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(289,324),448,449,450,451])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']; self.assertEqual(len(vocab),30)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']; self.assertEqual(len(rules),11)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),88)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice': self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']; distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']: self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-24': 'content/b1/chapter-24.js'",curriculum)
        self.assertIn('"title": "Komplexer Satzbau und Wortstellung"',curriculum)

    def test_chapter_25_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-25.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-25')
        self.assertEqual(chapter['metadata']['title'],'Plusquamperfekt, Futur I und komplexe Zeitformen')
        self.assertEqual(chapter['metadata']['grammarReferences'],[131,*range(143,163),171,172])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']; self.assertEqual(len(vocab),30)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']; self.assertEqual(len(rules),11)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),89)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice': self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']; distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']: self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-25': 'content/b1/chapter-25.js'",curriculum)
        self.assertIn('"title": "Plusquamperfekt, Futur I und komplexe Zeitformen"',curriculum)

    def test_chapter_26_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-26.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-26')
        self.assertEqual(chapter['metadata']['title'],'Komplexe Konjunktionen und Argumentation')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(392,427),*range(693,708),*range(724,731)])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']; self.assertEqual(len(vocab),30)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']; self.assertEqual(len(rules),12)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),92)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice': self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']; distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']: self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-26': 'content/b1/chapter-26.js'",curriculum)
        self.assertIn('"title": "Komplexe Konjunktionen und Argumentation"',curriculum)

    def test_chapter_27_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-27.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-27')
        self.assertEqual(chapter['metadata']['title'],'Wortbildung, Nominalisierung und Partizipien')
        self.assertEqual(chapter['metadata']['grammarReferences'],[13,14,15,*range(501,510),*range(664,693)])
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']; self.assertEqual(len(vocab),30)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category'] in ('verb','verb phrase')))
        rules=sections[3]['rules']; self.assertEqual(len(rules),12)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),92)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice': self.assertGreaterEqual(len(q['options']),2); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']; distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']: self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-27': 'content/b1/chapter-27.js'",curriculum)
        self.assertIn('"title": "Wortbildung, Nominalisierung und Partizipien"',curriculum)

    def test_chapter_28_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-28.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-28')
        self.assertEqual(chapter['metadata']['title'],'Indirekte Rede, Modalpartikeln und sprachlicher Ausdruck')
        self.assertEqual(chapter['metadata']['grammarReferences'],list(range(731,758)))
        sections=chapter['sections']
        self.assertEqual([s['id'] for s in sections],['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'])
        wc=lambda text:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',text))
        self.assertTrue(150<=wc(sections[0]['openingText'])<=220)
        self.assertTrue(all(250<=wc(t['text'])<=400 for t in sections[1]['texts']))
        vocab=sections[2]['vocabulary']; self.assertEqual(len(vocab),30)
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        self.assertTrue(all(v.get('forms') for v in vocab if v['category']=='verb'))
        rules=sections[3]['rules']; self.assertEqual(len(rules),15)
        self.assertTrue(all(r.get('explanation') and r.get('formula') and len(r.get('examples',[]))>=2 and r.get('exceptions') and r.get('mistakes') and r.get('tip') and len(r.get('exercises',[]))==3 for r in rules))
        questions=[]
        for sec in sections:
            questions+=sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions+=rule.get('exercises',[])
            questions+=sec.get('exam',{}).get('questions',[])
        self.assertEqual(len(questions),117)
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        self.assertEqual({a['exerciseId'] for a in sections[8]['answers']},{q['id'] for q in questions})
        for q in questions:
            self.assertTrue(q.get('prompt'))
            if q['type']=='multiple-choice':
                self.assertGreaterEqual(len(q['options']),2); self.assertIsInstance(q['answer'],int); self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        exam=sections[7]['exam']; distribution={'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20}
        self.assertEqual(exam['distribution'],distribution)
        self.assertEqual(sum(q['points'] for q in exam['questions']),100)
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q.get('category')==k) for k in distribution},distribution)
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertTrue(all(150<=wc(t['text'])<=250 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in [x['text'] for x in sections[1]['texts']] for t in exam['readingTexts']))
        writing=[q for q in exam['questions'] if q.get('category')=='writing']
        self.assertEqual([q['points'] for q in writing],[5,7,8])
        lengths=[wc(q['modelAnswer']) for q in writing]
        self.assertTrue(60<=lengths[0]<=80 and 80<=lengths[1]<=100 and 100<=lengths[2]<=140)
        for ann in sections[1]['annotations']:
            self.assertTrue(any(ann['text']==t['text'] for t in sections[1]['texts']))
            for mark in ann['marks']: self.assertTrue(ann['text'][mark['start']:mark['end']])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-28': 'content/b1/chapter-28.js'",curriculum)
        self.assertIn('"title": "Indirekte Rede, Modalpartikeln und sprachlicher Ausdruck"',curriculum)
        self.assertTrue(all(not any(term in q['prompt'] for term in ('Choose the correct','Complete the sentence','Read the text')) for q in questions))

    def test_progress_backup_buttons_are_visible_in_statistics_and_wired(self):
        html=(ROOT/'index.html').read_text()
        css=(ROOT/'css/landing.css').read_text()
        backup=(ROOT/'js/progress-backup.js').read_text()
        landing=(ROOT/'js/landing.js').read_text()
        progress_start=html.index('<section id="fortschritt"')
        progress_end=html.index('</section>',progress_start)
        section=html[progress_start:progress_end]
        card_start=section.index('class="progress-card"')
        self.assertLess(section.index('id="export-progress"'),section.index('id="progress-file"'))
        card_end=section.index('</div>\n      </div>',card_start)
        for label,control in [('Export Progress','export-progress'),('Import Progress','import-progress')]:
            self.assertIn(f'id="{control}" type="button"',section)
            self.assertIn(label,section)
            self.assertGreater(section.index(f'id="{control}"'),card_start)
            self.assertLess(section.index(f'id="{control}"'),card_end)
        self.assertIn('<div class="wrap progress-layout">',section)
        self.assertNotIn('progress-layout reveal',html)
        self.assertIn('.backup-tools {',css)
        self.assertIn('display: flex;',css[css.index('.backup-tools {'):css.index('.backup-date-block {')])
        self.assertIn("exportButton.addEventListener('click',exportFile)",backup)
        self.assertIn("importButton.addEventListener('click',()=>input.click())",backup)
        self.assertIn("input.addEventListener('change'",backup)
        self.assertIn("form.addEventListener('submit',confirmImport)",backup)
        self.assertIn("window.addEventListener('progresschange',render)",landing)
        self.assertIn('<script src="js/progress-backup.js"></script>',html)


    def test_chapter_29_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-29.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-29')
        self.assertEqual(chapter['metadata']['title'],'Besondere Verbkonstruktionen und Bedeutungsunterschiede')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(120,127),*range(473,483),*range(639,664)])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([x['id'] for x in chapter['sections']],expected)
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),30)
        rules=chapter['sections'][3]['rules']
        self.assertGreaterEqual(len(rules),12)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]): questions += rule.get('exercises',[])
        exam=chapter['sections'][7]['exam']; questions += exam['questions']
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        answers={x['exerciseId'] for x in chapter['sections'][8]['answers']}
        self.assertTrue({q['id'] for q in questions} <= answers)
        for q in questions:
            if q['type']=='multiple-choice': self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written': self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false': self.assertIn(q['answer'],('true','false'))
            else: self.assertIsNotNone(q.get('answer'))
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q['category']==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertEqual(sum(q['category']=='writing' for q in exam['questions']),3)
        reading=chapter['sections'][1]; texts=[x['text'] for x in reading['texts']]
        count=lambda t:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',t))
        self.assertTrue(all(250<=count(t)<=400 for t in texts),[count(t) for t in texts])
        for annotation in reading['annotations']:
            self.assertIn(annotation['text'],texts)
            for mark in annotation['marks']: self.assertTrue(annotation['text'][mark['start']:mark['end']])
        self.assertTrue(all(t['text'] not in texts for t in exam['readingTexts']))
        self.assertIn("'chapter-29': 'content/b1/chapter-29.js'",(ROOT/'content/curriculum.js').read_text())
        manifest=json.loads((ROOT/'progress/chapters.json').read_text())
        self.assertEqual(manifest['chapters']['29']['status'],'completed')
        self.assertEqual(manifest['chapters']['29']['report'],'progress/reports/chapter-29.md')
        self.assertTrue((ROOT/'progress/reports/chapter-29.md').is_file())
        self.assertEqual(manifest['chapters']['29']['contentFile'],'content/b1/chapter-29.js')


    def test_chapter_30_content_and_assessment(self):
        source=(ROOT/'content/b1/chapter-30.js').read_text()
        raw=source.split('const chapter = ',1)[1].split(';\nwindow.CHAPTERS',1)[0]
        chapter=json.loads(raw)
        self.assertEqual(chapter['id'],'chapter-30')
        self.assertEqual(chapter['metadata']['level'],'B1')
        self.assertEqual(chapter['metadata']['title'],'Selbstständige Kommunikation und schriftlicher Ausdruck')
        self.assertEqual(chapter['metadata']['grammarReferences'],[*range(708,731),*range(758,777)])
        self.assertEqual(chapter['metadata']['grammarReferenceRanges'],[[1,776],[708,730],[758,776]])
        expected=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions']
        self.assertEqual([x['id'] for x in chapter['sections']],expected)
        self.assertEqual(len(chapter['sections'][2]['vocabulary']),30)
        vocab=chapter['sections'][2]['vocabulary']
        self.assertTrue(all(v.get('translation') and v.get('category') and v.get('example') and v.get('forms') for v in vocab))
        self.assertTrue(all(v.get('article') and v.get('plural') for v in vocab if v['category']=='noun'))
        rules=chapter['sections'][3]['rules']
        self.assertEqual(len(rules),15)
        self.assertTrue(all(len(r['exercises'])>=3 and all(r.get(k) for k in ('explanation','formula','examples','exceptions','mistakes','tip','reference')) for r in rules))
        questions=[]
        for sec in chapter['sections']:
            questions += sec.get('exercises',[])+sec.get('comprehension',[])
            for rule in sec.get('rules',[]):questions+=rule.get('exercises',[])
        exam=chapter['sections'][7]['exam'];questions+=exam['questions']
        self.assertEqual(len(questions),len({q['id'] for q in questions}))
        answers={a['exerciseId'] for a in chapter['sections'][8]['answers']}
        self.assertEqual({q['id'] for q in questions},answers)
        for q in questions:
            if q['type']=='multiple-choice':self.assertIn(q['answer'],range(len(q['options'])))
            elif q['type']=='written':self.assertTrue(q.get('modelAnswer'))
            elif q['type']=='true-false':self.assertIn(q['answer'],('true','false'))
            else:self.assertIsNotNone(q.get('answer'))
        self.assertEqual(exam['totalPoints'],100)
        self.assertEqual(exam['distribution'],{'reading':20,'vocabulary':15,'grammar':35,'sentenceConstruction':10,'writing':20})
        self.assertEqual({k:sum(q['points'] for q in exam['questions'] if q['category']==k) for k in exam['distribution']},exam['distribution'])
        self.assertEqual(len(exam['readingTexts']),2)
        self.assertEqual(sum(q['category']=='writing' for q in exam['questions']),3)
        texts=[t['text'] for t in chapter['sections'][1]['texts']]
        count=lambda t:len(re.findall(r'\b[\wÄÖÜäöüß]+\b',t))
        self.assertTrue(150<=count(chapter['sections'][0]['openingText'])<=220)
        self.assertTrue(all(250<=count(t)<=400 for t in texts),[count(t) for t in texts])
        self.assertTrue(all(250<=count(t['text'])<=400 for t in exam['readingTexts']))
        self.assertTrue(all(t['text'] not in texts for t in exam['readingTexts']))
        for annotation in chapter['sections'][1]['annotations']:
            self.assertIn(annotation['text'],texts)
            for mark in annotation['marks']:self.assertTrue(annotation['text'][mark['start']:mark['end']])
        self.assertEqual([count(x['modelAnswer']) for x in chapter['sections'][8]['modelAnswers']],[67,83,111])
        english_instructions=re.compile(r'\b(choose the correct|complete the sentence|read the text and answer|write a short email|select the correct)\b',re.I)
        for q in questions:
            self.assertIsNone(english_instructions.search(q.get('prompt','')),q['id'])
        curriculum=(ROOT/'content/curriculum.js').read_text()
        self.assertIn("'chapter-30': 'content/b1/chapter-30.js'",curriculum)
        self.assertIn('"title": "Selbstständige Kommunikation und schriftlicher Ausdruck"',curriculum)
        manifest=json.loads((ROOT/'progress/chapters.json').read_text())
        self.assertEqual(manifest['chapters']['30']['status'],'completed')
        self.assertEqual(manifest['chapters']['30']['report'],'progress/reports/chapter-30.md')
        self.assertTrue((ROOT/'progress/reports/chapter-30.md').is_file())
        self.assertEqual(manifest['chapters']['30']['contentFile'],'content/b1/chapter-30.js')
if __name__ == '__main__':
    unittest.main(verbosity=2)
