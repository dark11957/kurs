(() => {
const {CURRICULUM,CHAPTER_CONTENT}=window;
const {getProgress,updateProgress,resumeTarget,chapterProgress,chapterStatus}=window.StudyStorage;
const {loadChapter}=window.StudyChapterLoader;
const collection=document.querySelector('#chapter-collection');
const quoteList=[
 {text:'Übung macht den Meister.',translation:'Practice makes perfect.'},
 {text:'Aller Anfang ist schwer.',translation:'Every beginning is difficult.'},
 {text:'Es ist noch kein Meister vom Himmel gefallen.',translation:'No one becomes an expert overnight.'},
 {text:'Wer rastet, der rostet.',translation:'Those who stop practising lose their edge.'}
];
const levelDescriptions={A1:'Grundlagen · Erste Wörter und alltägliche Gespräche',A2:'Aufbau · Erlebnisse erzählen und Gedanken verbinden',B1:'Selbstständig · Gespräche führen und eigene Sichtweisen ausdrücken'};
const chapterDescriptions=new Map();
let quoteIndex=0,quoteTimer=null;

// Older bookmarks used index.html#/chapter-XX. Keep those links working after the move.
if(/^#\/?chapter-\d{2}(\/|$)/.test(location.hash)){location.replace(`learn.html${location.hash}`);return;}

function available(chapter){return Boolean(CHAPTER_CONTENT[chapter.id])}
function completedIds(progress){return new Set(Array.isArray(progress.completedChapters)?progress.completedChapters:[])}
function nextChapter(progress){
 const completed=completedIds(progress),availableChapters=CURRICULUM.filter(available);
 return availableChapters.find(ch=>!completed.has(ch.id))
  || availableChapters.find(ch=>ch.id===progress.current?.chapter)
  || availableChapters[0]
  || CURRICULUM.find(ch=>!completed.has(ch.id))
  || CURRICULUM[0];
}
function setContinueLink(progress){
 const target=resumeTarget(progress,CURRICULUM),chapter=target?.chapter||nextChapter(progress),button=document.querySelector('#continue-button');
 if(!chapter){button.href='learn.html';return;}
 button.href=`learn.html#/${chapter.id}/${target?.section||'introduction'}`;
 button.setAttribute('aria-label',`Weiterlernen: Kapitel ${chapter.number}, ${chapter.title}`);
}
function updateProgressView(progress){
 const total=CURRICULUM.length,completed=completedIds(progress),count=CURRICULUM.filter(c=>completed.has(c.id)).length,remaining=Math.max(0,total-count),percent=total?Math.round(count/total*100):0,next=nextChapter(progress);
 document.querySelector('#stat-total').textContent=total;
 document.querySelector('#stat-completed').textContent=count;
 document.querySelector('#stat-remaining').textContent=remaining;
 document.querySelector('#completion-label').textContent=`${percent} %`;
 document.querySelector('#progress-fill').style.width=`${percent}%`;
 const bar=document.querySelector('.progress-line');bar.setAttribute('aria-valuenow',String(percent));
 document.querySelector('#progress-message').textContent=percent===100?'Du hast deinen Lernweg abgeschlossen. Was möchtest du als Nächstes entdecken?':count===0?'Dein erstes Kapitel wartet auf dich.':`${count} ${count===1?'Kapitel':'Kapitel'} geschafft. Dein nächster Schritt wartet schon.`;
 document.querySelector('#journey-current-title').textContent=count===0?'Dein erstes Kapitel':`${count} ${count===1?'Kapitel':'Kapitel'} geschafft`;
 document.querySelector('#journey-current-copy').textContent=progress.current?.chapter
  ?`Dein letzter Lernort: ${CURRICULUM.find(c=>c.id===progress.current.chapter)?.title||'ein Kapitel auf deinem Lernweg'}. Du kannst jederzeit dort weitermachen.`
  :'Lerne einfache Wörter kennen und lass die ersten deutschen Sätze entstehen.';
 if(next){
  document.querySelector('#journey-next-title').textContent=`Kapitel ${next.number} · ${next.level}`;
  document.querySelector('#journey-next-copy').textContent=`${next.title} — ${levelDescriptions[next.level]||'ein weiterer Schritt auf deinem Lernweg'}.`;
 }
 setContinueLink(progress);
}
function cardStatus(chapter,progress,completed){
 const status=chapterStatus(progress,chapter.id,chapter.sections.length),state=chapterProgress(progress,chapter.id),percent=Math.round((state.completedSections||[]).length/chapter.sections.length*100);
 if(completed.has(chapter.id)||status==='completed')return {key:'done',label:'Abgeschlossen'};
 if(status==='in_progress')return {key:'current',label:`In Bearbeitung${percent?` · ${percent}%`:''}`};
 if(!available(chapter))return {key:'unavailable',label:'Material folgt'};
 return {key:'todo',label:'Noch nicht begonnen'};
}
function renderCollection(progress){
 const completed=completedIds(progress);
 collection.innerHTML=CURRICULUM.map(chapter=>{
  const status=cardStatus(chapter,progress,completed),canMark=available(chapter)||completed.has(chapter.id),description=chapterDescriptions.get(chapter.id)||chapter.description||levelDescriptions[chapter.level]||'Ein Kapitel auf deinem persönlichen Weg zum Deutschen.';
  const markLabel=completed.has(chapter.id)?'Abschluss zurücksetzen':'Als abgeschlossen markieren';
  return `<article class="chapter-card status-${status.key}">
   <div class="chapter-card-top"><span class="chapter-number">KAPITEL ${chapter.number}</span><span class="chapter-level">${chapter.level}</span></div>
   <h3>${escapeHtml(chapter.title)}</h3>
   <p class="chapter-description">${escapeHtml(description)}</p>
   <div class="chapter-card-bottom"><span class="chapter-status"><span class="status-dot"></span>${status.label}</span>
    <div class="chapter-actions"><button class="chapter-mark" type="button" data-complete="${chapter.id}" ${canMark?'':'disabled'} aria-label="${canMark?markLabel:'Abschluss verfügbar, sobald das Lernmaterial fertig ist'}">${canMark?markLabel:'Demnächst'}</button><a class="chapter-open" href="learn.html#/${chapter.id}/introduction">${canMark?'Kapitel öffnen':'Lehrplan ansehen'} <span aria-hidden="true">↗</span></a></div>
   </div>
  </article>`;
 }).join('');
 collection.querySelectorAll('[data-complete]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.complete;
  const wasDone=getProgress().completedChapters?.includes(id)||chapterStatus(getProgress(),id,CURRICULUM.find(ch=>ch.id===id)?.sections.length||0)==='completed';
  if(!window.confirm(wasDone?'Möchtest du den Kapitelabschluss zurücksetzen?':'Möchtest du dieses gesamte Kapitel als abgeschlossen markieren?'))return;
  updateProgress(progress=>{
   progress.completedChapters=Array.isArray(progress.completedChapters)?progress.completedChapters:[];
   const chapter=CURRICULUM.find(ch=>ch.id===id),old=progress.chapterProgress?.[id]||{};progress.chapterProgress??={};
   if(wasDone){progress.completedChapters=progress.completedChapters.filter(x=>x!==id);progress.chapterProgress[id]={...old,status:progress.current?.chapter===id?'in_progress':'not_started',completedSections:[],completedAt:null,lastStudiedAt:new Date().toISOString()}}
   else {if(!progress.completedChapters.includes(id))progress.completedChapters.push(id);progress.chapterProgress[id]={...old,status:'completed',completedSections:chapter?.sections.map(s=>s.id)||[],completedAt:new Date().toISOString(),lastStudiedAt:new Date().toISOString()}}
  });
 }));
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
function render(){const progress=getProgress();updateProgressView(progress);renderCollection(progress);}
let descriptionsStarted=false;
async function loadAvailableDescriptions(){
 if(descriptionsStarted)return;
 descriptionsStarted=true;
 const chapters=CURRICULUM.filter(available);
 await Promise.all(chapters.map(async chapter=>{
  try{
   const content=await loadChapter(chapter),description=content.metadata.subtitle||content.sections[0]?.description;
   if(description)chapterDescriptions.set(chapter.id,description);
  }catch{/* The card remains usable with its level description if a summary cannot load. */}
 }));
 renderCollection(getProgress());
}
function showQuote(index){
 const quote=quoteList[(index+quoteList.length)%quoteList.length],text=document.querySelector('#rotating-quote'),translation=document.querySelector('#quote-translation');
 text.classList.add('is-changing');translation.classList.add('is-changing');
 window.setTimeout(()=>{quoteIndex=(index+quoteList.length)%quoteList.length;text.textContent=quote.text;translation.textContent=quote.translation;document.querySelector('#quote-count').textContent=`${String(quoteIndex+1).padStart(2,'0')} / ${String(quoteList.length).padStart(2,'0')}`;text.classList.remove('is-changing');translation.classList.remove('is-changing');},150);
}
document.querySelectorAll('[data-quote-step]').forEach(button=>button.addEventListener('click',()=>showQuote(quoteIndex+Number(button.dataset.quoteStep))));
window.addEventListener('progresschange',render);
render();
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{rootMargin:'0px 0px -45px 0px',threshold:.08});
 document.querySelectorAll('.reveal').forEach(section=>revealObserver.observe(section));
 const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();loadAvailableDescriptions();}},{rootMargin:'220px'});
 observer.observe(document.querySelector('#kapitel'));
}else{document.querySelectorAll('.reveal').forEach(section=>section.classList.add('is-visible'));loadAvailableDescriptions();}
quoteTimer=window.setInterval(()=>showQuote(quoteIndex+1),9000);
window.addEventListener('pagehide',()=>{if(quoteTimer)window.clearInterval(quoteTimer)});
})();
