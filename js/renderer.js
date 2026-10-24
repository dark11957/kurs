window.StudyRenderer = (() => {
const {escapeHtml,renderAnnotated}=window.StudyHighlighting;
const {renderExercise,bindExercises}=window.StudyExercises;
const {renderExam,bindExam}=window.StudyExams;
const {getProgress,updateProgress}=window.StudyStorage;
const esc=escapeHtml;
const list=items=>`<ul>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
function table(t){return `<h3>${esc(t.caption||'')}</h3><div class="learning-table-wrap"><table class="learning-table"><thead><tr>${t.columns.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function renderText(t){if(t.format==='dialogue')return `<h3>${esc(t.title||'Dialog')}</h3>${(t.lines||[]).map(l=>`<p class="dialogue-line"><span class="speaker">${esc(l.speaker)}:</span><span>${esc(l.text)}</span></p>`).join('')}`;return `<h3>${esc(t.title||'')}</h3><div class="content-block reading-text">${esc(t.text||'')}</div>`}
function questionSet(items){return (items||[]).map(renderExercise).join('')}
function sectionBody(s){let out='';
 if(s.overview)out+=`<p class="body-copy">${esc(s.overview)}</p>`;
 if(s.objectives)out+=`<h3>Lernziele</h3>${list(s.objectives)}`;
 if(s.prerequisites)out+=`<p class="body-copy"><b>Vorkenntnisse:</b> ${s.prerequisites.map(esc).join(' · ')}</p>`;
 if(s.keywords)out+=table({caption:'Schlüsselwörter',columns:['Deutsch','Englisch','Beispiel'],rows:s.keywords.map(x=>[x.word,x.translation,x.example])});
 if(s.openingText)out+=`<div class="content-block reading-text">${esc(s.openingText)}</div>`;
 if(s.discoveryQuestions)out+=`<h3>Entdeckungsfragen</h3><ol>${s.discoveryQuestions.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
 if(s.reviewQuestions)out+=`<h3>Einstieg: Fragen zum Nachdenken</h3><ol>${s.reviewQuestions.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
 if(s.texts)out+=s.texts.map(renderText).join('');
 if(s.comprehension)out+=`<h3>Textverständnis</h3>${questionSet(s.comprehension)}`;
 if(s.annotations)out+=`<div class="grammar-controls"><label><input type="checkbox" data-highlight checked> Grammatikmarkierungen anzeigen</label>${[['nominative','Nominativ'],['accusative','Akkusativ'],['dative','Dativ'],['genitive','Genitiv'],['verb','Verb'],['modal','Modalverb'],['conjunction','Konjunktion'],['preposition','Präposition']].map(([id,label])=>`<label><input type="checkbox" data-category-toggle="${id}" checked> ${label}</label>`).join('')}</div>`;
 if(s.vocabulary)out+=`<label class="translation-control"><input type="checkbox" data-translation-toggle checked> Übersetzungen anzeigen</label><div class="learning-table-wrap"><table class="learning-table"><thead><tr><th>Deutsch</th><th class="translation-cell">Englisch</th><th>Form</th><th>Beispiel</th></tr></thead><tbody>${s.vocabulary.map(v=>`<tr><td>${esc(v.article?`${v.article} `:'')}${esc(v.word)}</td><td class="translation-cell">${esc(v.translation)}</td><td>${esc(v.plural||v.forms||({noun:'Nomen',verb:'Verb',adjective:'Adjektiv'}[v.category]||v.category||''))}</td><td>${esc(v.example)}</td></tr>`).join('')}</tbody></table></div>`;
 if(s.expressions)out+=`<h3>Nützliche Ausdrücke</h3>${list(s.expressions)}`;
 if(s.wordFamilies)out+=`<h3>Wortfamilien</h3>${list(s.wordFamilies.map(x=>`${x.root}: ${x.words.join(' · ')}`))}`;
 if(s.synonyms)out+=table({caption:'Synonyme und Gegenteile',columns:['Wort','Synonym','Gegenteil'],rows:s.synonyms.map(x=>[x.word,x.synonym||'—',x.antonym||'—'])});
 if(s.contextExamples)out+=`<h3>Wortschatz im Kontext</h3>${s.contextExamples.map(x=>`<p class="example">${esc(x)}</p>`).join('')}`;
 if(s.rules)out+=s.rules.map(r=>`<article class="rule-block"><h3>${esc(r.title)}</h3><p class="body-copy">${esc(r.explanation)}</p>${r.formula?`<p class="formula">${esc(r.formula)}</p>`:''}${r.examples?.map(x=>`<p class="example">${esc(x)}</p>`).join('')||''}${r.exceptions?`<p class="note"><b>Besonderheiten:</b> ${esc(r.exceptions)}</p>`:''}${r.note?`<p class="note">${esc(r.note)}</p>`:''}${r.mistakes?`<p class="note"><b>Häufiger Fehler:</b> ${esc(r.mistakes)}</p>`:''}${r.tip?`<p class="note"><b>Merktipp:</b> ${esc(r.tip)}</p>`:''}${r.exercises?.length?`<h4>Mini-Übung</h4>${questionSet(r.exercises)}`:''}</article>`).join('');
 if(s.tables)out+=s.tables.map(table).join('');
 if(s.comparisons?.length)out+=`<h3>Formen vergleichen</h3>${s.comparisons.map(c=>`<article class="rule-block"><h4>${esc(c.title||'')}</h4><p>${esc(c.explanation||'')}</p>${c.examples?.map(x=>`<p class="example">${esc(x)}</p>`).join('')||''}</article>`).join('')}`;
 if(s.exercises?.length)out+=questionSet(s.exercises);
 if(s.exam)out+=renderExam(s.exam);
 if(s.dialogue)out+=s.dialogue.map(l=>`<p class="dialogue-line"><span class="speaker">${esc(l.speaker)}:</span><span>${esc(l.text)}</span></p>`).join('');
 if(s.expressionsForCommunication)out+=`<h3>Redemittel</h3>${list(s.expressionsForCommunication)}`;
 if(s.scenario)out+=`<article class="rule-block"><h3>Situation</h3><p>${esc(s.scenario.prompt||s.scenario)}</p>${s.scenario.steps?list(s.scenario.steps):''}</article>`;
 if(s.miniProject)out+=`<article class="rule-block"><h3>Mini-Projekt</h3><p>${esc(s.miniProject)}</p></article>`;
 if(s.prompts)out+=`<h3>Sprechübungen</h3>${list(s.prompts)}`;
 if(s.guidedWriting)out+=`<div class="exercise"><h3>Schreibübung</h3><p>${esc(s.guidedWriting)}</p><textarea aria-label="Schreibentwurf" data-draft="guided-${esc(s.id)}"></textarea></div>`;
 if(s.summary)out+=list(s.summary);
 if(s.checklist)out+=`<div>${s.checklist.map(x=>`<label class="exercise-option"><input type="checkbox"> ${esc(x)}</label>`).join('')}</div>`;
 if(s.answers)out+=`<h3>Lösungsschlüssel</h3>${s.answers.map(x=>`<div class="answer-key"><b>${esc(x.exerciseId)}</b><p>${esc(Array.isArray(x.answer)?x.answer.join(', '):x.answer==='true'?'Richtig':x.answer==='false'?'Falsch':x.answer)}</p>${x.explanation?`<p>${esc(x.explanation)}</p>`:''}</div>`).join('')}`;
 if(s.modelAnswers)out+=`<h3>Beispielantworten</h3>${list(s.modelAnswers.map(x=>typeof x==='string'?x:x.text||x.modelAnswer||''))}`;
 if(s.mistakeReview)out+=`<article class="rule-block"><h3>Fehlerkontrolle</h3><p>${esc(s.mistakeReview)}</p></article>`;
 if(s.criteria)out+=`<h3>Bewertungskriterien</h3>${list(s.criteria)}`;
 return out||`<p class="body-copy">${esc(s.description||'')}</p>`;
}
function renderChapter(chapter,requestedSection){window.currentFixture=chapter;const current=chapter.sections.findIndex(s=>s.id===requestedSection);const idx=Math.max(0,current);const section=chapter.sections[idx];const refs=chapter.metadata.grammarReferences||chapter.metadata.originalGrammarReferences||[],topics=chapter.metadata.grammarSubjects||[];const html=`<header class="chapter-header"><div class="chapter-meta"><span class="badge">${esc(chapter.metadata.level)}</span><span>${chapter.developmentOnly?'Entwicklungsvorschau':'Kapitel'}</span><span>·</span><span>${esc(chapter.metadata.number)}</span></div><h1>${esc(chapter.metadata.title)}</h1><p class="lead">${esc(chapter.metadata.subtitle||'')}</p>${chapter.metadata.vocabularyTheme?`<p class="body-copy"><b>Wortschatzthema:</b> ${esc(chapter.metadata.vocabularyTheme)}</p>`:''}${topics.length?`<p class="eyebrow">GRAMMATIK ${topics.map(esc).join(' · ')}</p>`:''}${refs.length?`<p class="eyebrow">GRAMMATIK-REFERENZEN ${refs.map(esc).join(' · ')}</p>`:''}</header><h2 class="section-title">${String(idx+1).padStart(2,'0')} — ${esc(section.title)}</h2><p class="eyebrow">${esc(section.description||'')}</p><section>${sectionBody(section)}</section>`;return {html,section,index:idx}}
function bindChapter(root,chapter,section){const current=chapter.sections.find(s=>s.id===section);if(current?.exam)bindExam(root,current.exam);else if(root.querySelectorAll('[data-exercise]').length)bindExercises(root);root.querySelectorAll('[data-draft]').forEach(el=>{el.value=getProgress().drafts[el.dataset.draft]||'';el.addEventListener('input',()=>{if(!window.currentFixture?.developmentOnly)updateProgress(p=>{p.drafts[el.dataset.draft]=el.value})})});root.querySelectorAll('[data-translation-toggle]').forEach(el=>el.addEventListener('change',()=>root.querySelectorAll('.translation-cell').forEach(cell=>cell.hidden=!el.checked)));const annotated=chapter.sections.find(s=>s.annotations)?.annotations||[];root.querySelectorAll('[data-highlight]').forEach(el=>el.addEventListener('change',()=>root.classList.toggle('grammar-off',!el.checked)));root.querySelectorAll('[data-category-toggle]').forEach(el=>el.addEventListener('change',()=>root.querySelectorAll(`.grammar-mark[data-category="${el.dataset.categoryToggle}"]`).forEach(mark=>mark.hidden=!el.checked)));if(annotated.length){const s=chapter.sections.find(x=>x.annotations);const item=s.texts?.find(t=>t.text===s.annotations[0].text);if(item){const p=[...root.querySelectorAll('.reading-text')].find(node=>node.textContent===item.text);if(p)p.innerHTML=renderAnnotated(item.text,s.annotations[0].marks)}}root.querySelectorAll('.grammar-mark').forEach(mark=>mark.addEventListener('click',()=>{const next=mark.nextElementSibling;if(next?.classList.contains('grammar-tip')){next.remove();mark.setAttribute('aria-expanded','false')}else{const tip=document.createElement('span');tip.className='grammar-tip';tip.setAttribute('role','status');tip.textContent=mark.title;mark.after(tip);mark.setAttribute('aria-expanded','true')}}))}

return {renderChapter, bindChapter};
})();
