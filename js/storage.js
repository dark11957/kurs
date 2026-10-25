window.StudyStorage = (() => {
const KEY='deutsch-a1-b1:student-progress';
const defaults={current:{chapter:null,section:null},completedActivities:[],completedChapters:[],chapterProgress:{},lastActiveChapterId:null,exercises:{},exams:{},drafts:{},lastVisited:null,grammarProgress:{}};
let memoryProgress=null;
const memoryPreferences={};
function isRecord(value){return value!==null&&typeof value==='object'&&!Array.isArray(value)}
function validTimestamp(value){return typeof value==='string'&&Number.isFinite(Date.parse(value))?value:null}
function mergeGrammarProgress(local,imported){
 const merged={...(isRecord(imported)?imported:{}),...(isRecord(local)?local:{})};
 for(const id of new Set([...Object.keys(isRecord(local)?local:{}),...Object.keys(isRecord(imported)?imported:{})])){
  const left=isRecord(local?.[id])?local[id]:null,right=isRecord(imported?.[id])?imported[id]:null;
  const completed=left?.completed===true||right?.completed===true;
  const dates=[left?.completed===true?validTimestamp(left.completedAt):null,right?.completed===true?validTimestamp(right.completedAt):null].filter(Boolean).sort((a,b)=>Date.parse(b)-Date.parse(a));
  merged[id]={completed,completedAt:completed?(dates[0]||null):null};
 }
 return merged;
}
function getProgress(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||JSON.stringify(memoryProgress||{}))}}catch{return {...defaults,...(memoryProgress||{})}}}
function saveProgress(progress){memoryProgress=progress;try{localStorage.setItem(KEY,JSON.stringify(progress))}catch{}window.dispatchEvent(new CustomEvent('progresschange',{detail:progress}));}
function updateProgress(fn){const p=getProgress();fn(p);saveProgress(p);return p}
function mergeProgress(local,imported){
 const merged={...imported,...local};
 // Import is an explicit request to resume the imported study position.
 merged.current=imported.current?.chapter?imported.current:(local.current?.chapter?local.current:(imported.current||defaults.current));
 merged.lastVisited=imported.lastVisited||local.lastVisited||null;
 merged.lastActiveChapterId=imported.lastActiveChapterId||imported.current?.chapter||local.lastActiveChapterId||local.current?.chapter||null;
 for(const key of ['completedActivities','completedChapters'])merged[key]=[...new Set([...(Array.isArray(local[key])?local[key]:[]),...(Array.isArray(imported[key])?imported[key]:[])])];
 for(const key of ['exercises','exams','drafts'])merged[key]={...(isRecord(imported[key])?imported[key]:{}),...(isRecord(local[key])?local[key]:{})};
 merged.chapterProgress={...(isRecord(local.chapterProgress)?local.chapterProgress:{}),...(isRecord(imported.chapterProgress)?imported.chapterProgress:{})};
 for(const id of new Set([...Object.keys(local.chapterProgress||{}),...Object.keys(imported.chapterProgress||{})])){
  const a=local.chapterProgress?.[id],b=imported.chapterProgress?.[id];if(!isRecord(a)||!isRecord(b))continue;
  const dates=[a.lastStudiedAt,b.lastStudiedAt].filter(validTimestamp).sort((x,y)=>Date.parse(y)-Date.parse(x));
  const completedSections=[...new Set([...(a.completedSections||[]),...(b.completedSections||[])])];
  merged.chapterProgress[id]={...a,...b,completedSections,lastStudiedAt:dates[0]||null,completedAt:[a.completedAt,b.completedAt].filter(validTimestamp).sort((x,y)=>Date.parse(y)-Date.parse(x))[0]||null};
 }
 merged.grammarProgress=mergeGrammarProgress(local.grammarProgress,imported.grammarProgress);
 return syncChapterCompletion({...defaults,...merged});
}
function importProgress(progress,mode='replace'){
 if(!isRecord(progress))throw new Error('Der Sicherungsstand enthält keine gültigen Lernfortschritte.');
 if(mode!=='replace'&&mode!=='merge')throw new Error('Unbekannte Importoption.');
 const local=getProgress(),next=syncChapterCompletion(mode==='merge'?mergeProgress(local,progress):{...defaults,...progress});
 // Backups created before rule tracking have no grammarProgress field. Keep current rule statuses when restoring one.
 if(mode==='replace'&&!Object.prototype.hasOwnProperty.call(progress,'grammarProgress'))next.grammarProgress=local.grammarProgress||{};
 let serialized;try{serialized=JSON.stringify(next)}catch{throw new Error('Der Lernfortschritt kann nicht gespeichert werden.')}
 try{localStorage.setItem(KEY,serialized)}catch{throw new Error('Der Browser konnte den Lernfortschritt nicht speichern. Prüfe den verfügbaren Speicherplatz und versuche es erneut.')}
 memoryProgress=next;
 window.dispatchEvent(new CustomEvent('progresschange',{detail:next}));
 return next;
}
function hasValidStoredProgress(){try{const raw=localStorage.getItem(KEY);return raw===null||isRecord(JSON.parse(raw))}catch{return false}}
function getPreference(key,fallback){try{return localStorage.getItem(`deutsch-a1-b1:${key}`)??memoryPreferences[key]??fallback}catch{return memoryPreferences[key]??fallback}}
function setPreference(key,value){memoryPreferences[key]=value;try{localStorage.setItem(`deutsch-a1-b1:${key}`,value)}catch{}}
function chapterProgress(progress,id){if(isRecord(progress.chapterProgress?.[id]))return progress.chapterProgress[id];const legacyComplete=progress.completedChapters?.includes(id),chapter=(window.CURRICULUM||[]).find(item=>item.id===id);return {status:legacyComplete?'completed':'not_started',completedSections:legacyComplete?(chapter?.sections.map(section=>section.id)||[]):[],lastSectionId:null,lastPosition:null,lastStudiedAt:null,completedAt:null}}
function chapterStatus(progress,id,sectionCount){const item=chapterProgress(progress,id),done=Array.isArray(item.completedSections)?item.completedSections.length:0;return progress.completedChapters?.includes(id)||item.status==='completed'||(sectionCount>0&&done>=sectionCount)?'completed':done||progress.current?.chapter===id||item.status==='in_progress'?'in_progress':'not_started'}
function resumeTarget(progress=getProgress(),curriculum=window.CURRICULUM||[]){
 const available=curriculum.filter(ch=>window.StudyChapterLoader?.hasChapter(ch.id));
 const currentId=progress.lastActiveChapterId||progress.current?.chapter;
 const current=available.find(ch=>ch.id===currentId),saved=current&&chapterProgress(progress,current.id);
 if(current&&chapterStatus(progress,current.id,current.sections.length)!=='completed')return {chapter:current,section:saved?.lastSectionId||progress.current?.section||'introduction',position:saved?.lastPosition||null};
 const next=available.find(ch=>chapterStatus(progress,ch.id,ch.sections.length)!=='completed')||available[0]||curriculum[0];
 return next?{chapter:next,section:'introduction',position:null}:null;
}
function trackChapter(id,sectionId,sectionCount,position){updateProgress(p=>{p.chapterProgress??={};const old=chapterProgress(p,id),completed=[...new Set(old.completedSections||[])],sameSection=old.lastSectionId===sectionId;p.chapterProgress[id]={...old,status:old.status==='completed'?'completed':'in_progress',completedSections:completed,lastSectionId:sectionId||old.lastSectionId,lastPosition:position||(sameSection?old.lastPosition:null),lastStudiedAt:new Date().toISOString()};p.lastActiveChapterId=id;p.current={chapter:id,section:sectionId||p.current?.section};p.lastVisited=location.href})}
function setSectionCompletion(id,sectionId,done,sectionCount){updateProgress(p=>{p.chapterProgress??={};const old=chapterProgress(p,id),set=new Set(old.completedSections||[]);done?set.add(sectionId):set.delete(sectionId);const completedSections=[...set],complete=sectionCount>0&&completedSections.length>=sectionCount;p.chapterProgress[id]={...old,status:complete?'completed':completedSections.length||p.current?.chapter===id?'in_progress':'not_started',completedSections,completedAt:complete?(old.completedAt||new Date().toISOString()):null,lastStudiedAt:new Date().toISOString()};p.completedChapters=Array.isArray(p.completedChapters)?p.completedChapters:[];p.completedChapters=p.completedChapters.filter(x=>x!==id);if(complete)p.completedChapters.push(id)})}
function setChapterCompletion(id,sections,done){updateProgress(p=>{p.chapterProgress??={};const old=chapterProgress(p,id);p.chapterProgress[id]={...old,status:done?'completed':'in_progress',completedSections:done?sections.map(s=>s.id):[],completedAt:done?new Date().toISOString():null,lastStudiedAt:new Date().toISOString()};p.completedChapters=Array.isArray(p.completedChapters)?p.completedChapters.filter(x=>x!==id):[];if(done)p.completedChapters.push(id)})}
function syncChapterCompletion(progress){progress.completedChapters=Array.isArray(progress.completedChapters)?progress.completedChapters:[];for(const chapter of window.CURRICULUM||[]){const state=progress.chapterProgress?.[chapter.id];if(!state)continue;const complete=state.status==='completed'||(chapter.sections.length>0&&state.completedSections?.length>=chapter.sections.length);if(complete&&!progress.completedChapters.includes(chapter.id))progress.completedChapters.push(chapter.id);if(!complete)progress.completedChapters=progress.completedChapters.filter(id=>id!==chapter.id)}return progress}
return {progressKey:KEY,getProgress,saveProgress,updateProgress,mergeProgress,importProgress,hasValidStoredProgress,getPreference,setPreference,chapterProgress,chapterStatus,resumeTarget,trackChapter,setSectionCompletion,setChapterCompletion};
})();
