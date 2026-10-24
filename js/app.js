window.StudyApp = (() => {
const {CURRICULUM}=window;
const {renderNavigation}=window.StudyNavigation;
const {readRoute,navigate}=window.StudyRouter;
const {getPreference,setPreference,getProgress,updateProgress}=window.StudyStorage;
const {renderChapter,bindChapter}=window.StudyRenderer;
const {loadChapter}=window.StudyChapterLoader;
const shell=document.querySelector('.app-shell'),view=document.querySelector('#view'),sectionNav=document.querySelector('#section-nav');
const fixture=window.DEVELOPMENT_FIXTURE||null;
let renderVersion=0;

function init(){
 if(!location.hash){const current=getProgress().current;if(current.chapter&&!current.chapter.startsWith('development-demo'))navigate(current.chapter,current.section,{replace:true})}
 if(getPreference('theme','dark')==='light')document.documentElement.dataset.theme='light';
 if(getPreference('sidebar','open')==='closed')shell.classList.add('sidebar-collapsed');
 document.querySelector('#sidebar-toggle').setAttribute('aria-expanded',String(!shell.classList.contains('sidebar-collapsed')));
 scheduleRender();
}

function isCurrent(version,hash){return version===renderVersion&&location.hash===hash}
function setSectionNavigation(chapter,sections,index){
 sectionNav.hidden=false;
 sectionNav.innerHTML=`<button class="button" data-prev ${index===0?'disabled':''}>← Vorheriger Abschnitt</button><span class="eyebrow">${index+1} / ${sections.length}</span><button class="button" data-next ${index===sections.length-1?'disabled':''}>Nächster Abschnitt →</button>`;
 sectionNav.querySelector('[data-prev]').onclick=()=>navigate(chapter.id,sections[index-1]?.id);
 sectionNav.querySelector('[data-next]').onclick=()=>navigate(chapter.id,sections[index+1]?.id);
}
function showLoadError(chapter,error){
 console.error(`Kapitel ${chapter.number} konnte nicht geladen werden.`,error);
 sectionNav.hidden=true;
 view.innerHTML=`<section class="empty-state" role="alert"><p class="eyebrow">${chapter.level} · KAPITEL ${chapter.number}</p><h1>${escape(chapter.title)}</h1><p class="lead">Das Lernmaterial konnte gerade nicht geladen werden.</p><div class="availability-note"><strong>Bitte prüfe die Kapiteldatei oder lade den Inhalt erneut.</strong><br>Dein aktueller Lernort bleibt gespeichert.</div><button class="button" type="button" data-retry>Erneut versuchen</button></section>`;
 view.querySelector('[data-retry]').addEventListener('click',scheduleRender);
}
function scheduleRender(){
 const hash=location.hash;
 render().catch(error=>{
  if(location.hash!==hash)return;
  const route=readRoute(),chapter=CURRICULUM.find(c=>c.id===route.chapter);
  if(chapter){showLoadError(chapter,error);return;}
  console.error('Die Seite konnte nicht dargestellt werden.',error);
  view.innerHTML='<section class="empty-state" role="alert"><h1>Der Lernbereich konnte nicht geladen werden.</h1><p class="lead">Bitte versuche es erneut.</p><button class="button" type="button" data-retry>Erneut versuchen</button></section>';
  view.querySelector('[data-retry]').addEventListener('click',scheduleRender);
 });
}

async function render(){
 const version=++renderVersion,route=readRoute(),hash=location.hash;
 renderNavigation(route,document.querySelector('#search').value);
 if(fixture&&route.chapter==='development-demo'){
  const {html,index}=renderChapter(fixture,route.section);view.innerHTML=html;bindChapter(view,fixture,route.section);
  document.querySelector('#breadcrumb').textContent='Entwicklungsvorschau · nur Beispiel';
  setSectionNavigation(route,fixture.sections,index);return;
 }
 const chapter=CURRICULUM.find(c=>c.id===route.chapter);
 if(chapter){
  document.querySelector('#breadcrumb').textContent=`${chapter.level} · ${chapter.number} · ${chapter.title}`;
  sectionNav.hidden=true;
  view.innerHTML=`<section class="empty-state" role="status" aria-live="polite"><p class="eyebrow">${chapter.level} · KAPITEL ${chapter.number}</p><h1>${escape(chapter.title)}</h1><p class="lead">Kapitel wird geladen …</p></section>`;
  let content;
  try{content=await loadChapter(chapter)}catch(error){if(isCurrent(version,hash))showLoadError(chapter,error);return}
  if(!isCurrent(version,hash))return;
  if(content){
   const {html,index}=renderChapter(content,route.section);view.innerHTML=html;bindChapter(view,content,route.section);
   const section=content.sections[index];setSectionNavigation(chapter,content.sections,index);
   updateProgress(p=>{p.current={chapter:chapter.id,section:section.id};p.lastVisited=location.href});return;
  }
  const section=chapter.sections.find(s=>s.id===route.section)||chapter.sections[0],i=chapter.sections.indexOf(section);
  view.innerHTML=`<p class="eyebrow">${chapter.level} · KAPITEL ${chapter.number}</p><h1>${escape(chapter.title)}</h1><p class="lead">Das Lernmaterial wurde noch nicht erstellt.</p><div class="availability-note"><strong>Dieses Kapitel ist im Lehrplan vorgesehen.</strong><br>Das Lernmaterial erscheint hier, sobald es erstellt wurde.</div><h2>${escape(section.title)}</h2><p class="body-copy">Für diesen Abschnitt gibt es noch kein Lernmaterial.</p>`;
  setSectionNavigation(chapter,chapter.sections,i);
  updateProgress(p=>{p.current={chapter:chapter.id,section:section.id};p.lastVisited=location.href});return;
 }
 document.querySelector('#breadcrumb').textContent='Lernbereich';sectionNav.hidden=true;
 view.innerHTML=`<section class="empty-state"><div class="empty-mark"></div><p class="eyebrow">DEUTSCH A1–B1</p><h1>Dein Weg zum Deutschen beginnt hier.</h1><p class="lead">Ein klarer Lernweg von den ersten deutschen Sätzen bis zur sicheren Kommunikation.</p><div class="availability-note"><strong>Das Lernmaterial wurde noch nicht erstellt.</strong><br>Der vollständige Lehrplan steht bereit. Kapitel 01 ist die nächste Lerneinheit.</div><div class="curriculum-preview">${['A1','A2','B1'].map((l,i)=>`<article class="level-preview"><h3>${l} · ${['Grundlagen','Aufbau','Selbstständige Sprachverwendung'][i]}</h3><p>${CURRICULUM.filter(c=>c.level===l).length} Kapitel · Lernmaterial wird nach und nach ergänzt</p></article>`).join('')}</div></section>`;
}
function escape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

document.querySelector('#sidebar-toggle').addEventListener('click',e=>{if(innerWidth<=780){shell.classList.toggle('mobile-sidebar-open');e.currentTarget.setAttribute('aria-expanded',String(shell.classList.contains('mobile-sidebar-open')))}else{shell.classList.toggle('sidebar-collapsed');const closed=shell.classList.contains('sidebar-collapsed');e.currentTarget.setAttribute('aria-expanded',String(!closed));setPreference('sidebar',closed?'closed':'open')}});
document.querySelector('#theme-toggle').addEventListener('click',()=>{const light=document.documentElement.dataset.theme!=='light';if(light)document.documentElement.dataset.theme='light';else delete document.documentElement.dataset.theme;setPreference('theme',light?'light':'dark');document.querySelector('#theme-toggle').setAttribute('aria-label',`${light?'Dunkles':'Helles'} Design aktivieren`)});
document.querySelector('#search').addEventListener('input',()=>renderNavigation(readRoute(),document.querySelector('#search').value));
document.querySelector('#progress-button').addEventListener('click',()=>document.querySelector('#progress-dialog').showModal());
document.querySelector('#progress-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
window.addEventListener('hashchange',()=>{shell.classList.remove('mobile-sidebar-open');scheduleRender()});
window.addEventListener('progresschange',e=>{const done=e.detail.completedActivities.length;document.querySelector('#progress-label').textContent=`${done} abgeschlossen`;document.querySelector('#progress-detail').textContent=`${done} Lernaktivitäten abgeschlossen. Übungsversuche, Schreibentwürfe, Prüfungen und dein letzter Lernort werden auf diesem Gerät gespeichert.`;document.querySelector('#progress-bar').style.width=`${Math.min(100,done)}%`});
init();window.dispatchEvent(new CustomEvent('progresschange',{detail:getProgress()}));
})();
