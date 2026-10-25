window.StudyNavigation = (() => {
const {CURRICULUM}=window;
const {navigate}=window.StudyRouter;
const {hasChapter}=window.StudyChapterLoader;
const {getProgress,chapterProgress,chapterStatus}=window.StudyStorage;
const nav=document.querySelector('#curriculum-nav');
let collapsedChapters=new Set();
let collapsedLevels=new Set();
function renderNavigation(route,query=''){
 const previousScroll=nav.scrollTop;
 const progress=getProgress();
 const q=query.trim().toLowerCase(); let html='';
 for(const level of ['A1','A2','B1']){
  const levelName={A1:'Grundlagen',A2:'Aufbau',B1:'Selbstständige Sprachverwendung'}[level];
  const chapters=CURRICULUM.filter(c=>c.level===level).filter(c=>{if(!q)return true;const sectionNames=hasChapter(c.id)?c.sections.map(s=>s.title).join(' '):'';return `${c.title} ${c.level} ${levelName} ${sectionNames}`.toLowerCase().includes(q)}); if(!chapters.length)continue;
  const levelOpen=!collapsedLevels.has(level);html+=`<section class="level-group"><button class="level-toggle" aria-expanded="${levelOpen}"><span class="level-code">${level}</span><span>${{A1:'Grundlagen',A2:'Aufbau',B1:'Selbstständige Sprachverwendung'}[level]}</span><span class="chevron">⌄</span></button><div class="chapter-list" ${levelOpen?'':'hidden'}>${chapters.map(c=>{const open=route.chapter===c.id&&!collapsedChapters.has(c.id),available=hasChapter(c.id),state=chapterProgress(progress,c.id),status=chapterStatus(progress,c.id,c.sections.length),done=new Set(state.completedSections||[]),percent=Math.round(done.size/c.sections.length*100),indicator=status==='completed'?'✓':status==='in_progress'?'◐':'○';return `<div class="chapter-item"><button class="chapter-toggle ${status==='completed'?'is-completed':status==='in_progress'?'is-progress':''}" data-chapter="${c.id}" aria-expanded="${open}" ${route.chapter===c.id?'aria-current="page"':''}><span class="status-indicator" aria-label="${status==='completed'?'Abgeschlossen':status==='in_progress'?'In Bearbeitung':'Nicht begonnen'}">${indicator}</span><span class="chapter-num">${c.number}</span><span>${c.title}</span>${status==='in_progress'?`<span class="chapter-percent">${percent}%</span>`:''}<span class="chevron">⌄</span></button><div class="section-list" ${open?'':'hidden'}>${c.sections.map(s=>{const marked=done.has(s.id);return `<button class="section-link ${open&&route.section===s.id?'active':''} ${marked?'is-completed':''}" data-chapter="${c.id}" data-section="${s.id}"><span>${s.title}</span><span class="section-status" aria-label="${marked?'Gelernt':'Nicht gelernt'}">${marked?'✓':'·'}</span></button>`}).join('')}</div></div>`}).join('')}</div></section>`;
 }
 nav.innerHTML=html||'<p class="no-results">Keine passenden Lehrplaneinträge gefunden.</p>';nav.scrollTop=previousScroll;
 nav.querySelectorAll('.level-toggle').forEach(b=>b.addEventListener('click',()=>{const level=b.querySelector('.level-code').textContent;if(collapsedLevels.has(level))collapsedLevels.delete(level);else collapsedLevels.add(level);renderNavigation(route,query)}));
 nav.querySelectorAll('.chapter-toggle').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.chapter;if(route.chapter===id){if(collapsedChapters.has(id))collapsedChapters.delete(id);else collapsedChapters.add(id);renderNavigation(route,query)}else{collapsedChapters.clear();navigate(id,'introduction')}}));
 nav.querySelectorAll('.section-link').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.chapter,b.dataset.section)));
 document.querySelector('#course-count').textContent=`${CURRICULUM.length} Kapitel`;
}

return {renderNavigation};
})();
