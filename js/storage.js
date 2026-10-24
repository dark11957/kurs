window.StudyStorage = (() => {

const KEY='deutsch-a1-b1:student-progress';
const defaults={current:{chapter:null,section:null},completedActivities:[],exercises:{},exams:{},drafts:{},lastVisited:null};
let memoryProgress=null;
const memoryPreferences={};
function getProgress(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||JSON.stringify(memoryProgress||{}))}}catch{return {...defaults,...(memoryProgress||{})}}}
function saveProgress(progress){memoryProgress=progress;try{localStorage.setItem(KEY,JSON.stringify(progress))}catch{}window.dispatchEvent(new CustomEvent('progresschange',{detail:progress}));}
function updateProgress(fn){const p=getProgress();fn(p);saveProgress(p);return p}
function getPreference(key,fallback){try{return localStorage.getItem(`deutsch-a1-b1:${key}`)??memoryPreferences[key]??fallback}catch{return memoryPreferences[key]??fallback}}
function setPreference(key,value){memoryPreferences[key]=value;try{localStorage.setItem(`deutsch-a1-b1:${key}`,value)}catch{}}

return {getProgress, saveProgress, updateProgress, getPreference, setPreference};
})();
