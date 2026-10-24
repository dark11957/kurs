window.StudyStorage = (() => {
const KEY='deutsch-a1-b1:student-progress';
const defaults={current:{chapter:null,section:null},completedActivities:[],completedChapters:[],exercises:{},exams:{},drafts:{},lastVisited:null};
let memoryProgress=null;
const memoryPreferences={};
function isRecord(value){return value!==null&&typeof value==='object'&&!Array.isArray(value)}
function getProgress(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||JSON.stringify(memoryProgress||{}))}}catch{return {...defaults,...(memoryProgress||{})}}}
function saveProgress(progress){memoryProgress=progress;try{localStorage.setItem(KEY,JSON.stringify(progress))}catch{}window.dispatchEvent(new CustomEvent('progresschange',{detail:progress}));}
function updateProgress(fn){const p=getProgress();fn(p);saveProgress(p);return p}
function mergeProgress(local,imported){
 const merged={...imported,...local};
 merged.current=local.current?.chapter?local.current:(imported.current||local.current||defaults.current);
 merged.lastVisited=local.lastVisited||imported.lastVisited||null;
 for(const key of ['completedActivities','completedChapters'])merged[key]=[...new Set([...(Array.isArray(local[key])?local[key]:[]),...(Array.isArray(imported[key])?imported[key]:[])])];
 for(const key of ['exercises','exams','drafts'])merged[key]={...(isRecord(imported[key])?imported[key]:{}),...(isRecord(local[key])?local[key]:{})};
 return {...defaults,...merged};
}
function importProgress(progress,mode='replace'){
 if(!isRecord(progress))throw new Error('Der Sicherungsstand enthält keine gültigen Lernfortschritte.');
 if(mode!=='replace'&&mode!=='merge')throw new Error('Unbekannte Importoption.');
 const local=getProgress(),next=mode==='merge'?mergeProgress(local,progress):{...defaults,...progress};
 let serialized;try{serialized=JSON.stringify(next)}catch{throw new Error('Der Lernfortschritt kann nicht gespeichert werden.')}
 try{localStorage.setItem(KEY,serialized)}catch{throw new Error('Der Browser konnte den Lernfortschritt nicht speichern. Prüfe den verfügbaren Speicherplatz und versuche es erneut.')}
 memoryProgress=next;
 window.dispatchEvent(new CustomEvent('progresschange',{detail:next}));
 return next;
}
function hasValidStoredProgress(){try{const raw=localStorage.getItem(KEY);return raw===null||isRecord(JSON.parse(raw))}catch{return false}}
function getPreference(key,fallback){try{return localStorage.getItem(`deutsch-a1-b1:${key}`)??memoryPreferences[key]??fallback}catch{return memoryPreferences[key]??fallback}}
function setPreference(key,value){memoryPreferences[key]=value;try{localStorage.setItem(`deutsch-a1-b1:${key}`,value)}catch{}}
return {getProgress,saveProgress,updateProgress,mergeProgress,importProgress,hasValidStoredProgress,getPreference,setPreference};
})();
