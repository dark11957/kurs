window.StudyNavigation = (() => {
const {CURRICULUM}=window;
const {navigate}=window.StudyRouter;
const {hasChapter}=window.StudyChapterLoader;
const nav=document.querySelector('#curriculum-nav');
let collapsedChapters=new Set();
function renderNavigation(route,query=''){
 const q=query.trim().toLowerCase(); let html='';
 for(const level of ['A1','A2','B1']){
  const levelName={A1:'Grundlagen',A2:'Aufbau',B1:'Selbstständige Sprachverwendung'}[level];
  const chapters=CURRICULUM.filter(c=>c.level===level).filter(c=>{if(!q)return true;const sectionNames=hasChapter(c.id)?c.sections.map(s=>s.title).join(' '):'';return `${c.title} ${c.level} ${levelName} ${sectionNames}`.toLowerCase().includes(q)}); if(!chapters.length)continue;
  html+=`<section class="level-group"><button class="level-toggle" aria-expanded="true"><span class="level-code">${level}</span><span>${{A1:'Grundlagen',A2:'Aufbau',B1:'Selbstständige Sprachverwendung'}[level]}</span><span class="chevron">⌄</span></button><div class="chapter-list">${chapters.map(c=>{const open=route.chapter===c.id&&!collapsedChapters.has(c.id),available=hasChapter(c.id);return `<div class="chapter-item"><button class="chapter-toggle" data-chapter="${c.id}" aria-expanded="${open}" ${route.chapter===c.id?'aria-current="page"':''}><span class="chapter-num">${c.number}</span><span>${c.title}</span><span class="availability" aria-label="${available?'Lernmaterial verfügbar':'Lernmaterial noch nicht verfügbar'}">${available?'●':'○'}</span><span class="chevron">⌄</span></button><div class="section-list" ${open?'':'hidden'}>${c.sections.map(s=>`<button class="section-link ${open&&route.section===s.id?'active':''}" data-chapter="${c.id}" data-section="${s.id}">${s.title}<span class="availability">${available?'●':'○'}</span></button>`).join('')}</div></div>`}).join('')}</div></section>`;
 }
 nav.innerHTML=html||'<p class="no-results">Keine passenden Lehrplaneinträge gefunden.</p>';
 nav.querySelectorAll('.level-toggle').forEach(b=>b.addEventListener('click',()=>{const list=b.nextElementSibling;list.hidden=!list.hidden;b.setAttribute('aria-expanded',String(!list.hidden))}));
 nav.querySelectorAll('.chapter-toggle').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.chapter;if(route.chapter===id){if(collapsedChapters.has(id))collapsedChapters.delete(id);else collapsedChapters.add(id);renderNavigation(route,query)}else{collapsedChapters.clear();navigate(id,'introduction')}}));
 nav.querySelectorAll('.section-link').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.chapter,b.dataset.section)));
 document.querySelector('#course-count').textContent=`${CURRICULUM.length} Kapitel`;
}

return {renderNavigation};
})();
