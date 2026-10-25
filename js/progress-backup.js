window.StudyProgressBackup = (() => {
const FORMAT='deutsch-a1-b1-learning-progress',VERSION=1,LAST_BACKUP_KEY='deutsch-a1-b1:progress-backup-at',MAX_FILE_SIZE=10*1024*1024;
const {CURRICULUM,CHAPTER_CONTENT}=window;
const storage=window.StudyStorage;
let memoryLastBackup=null,pendingBackup=null,statusTimer=null;
const isRecord=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
const own=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);

function exportStatistics(progress){
 const done=new Set(Array.isArray(progress.completedChapters)?progress.completedChapters:[]),activities=Array.isArray(progress.completedActivities)?progress.completedActivities:[];
 const completed=CURRICULUM.filter(chapter=>done.has(chapter.id)).length,total=CURRICULUM.length;
 const grammar=isRecord(progress.grammarProgress)?Object.values(progress.grammarProgress):[];
 const chapterProgress=isRecord(progress.chapterProgress)?Object.values(progress.chapterProgress):[],completedSections=chapterProgress.reduce((n,item)=>n+(Array.isArray(item?.completedSections)?item.completedSections.length:0),0);
 return {totalChapters:total,completedChapters:completed,remainingChapters:total-completed,completionPercentage:total?Math.round(completed/total*100):0,completedActivities:activities.length,savedExercises:Object.keys(progress.exercises||{}).length,submittedExercises:Object.values(progress.exercises||{}).filter(item=>isRecord(item)&&item.submitted===true).length,savedExams:Object.keys(progress.exams||{}).length,savedDrafts:Object.keys(progress.drafts||{}).length,completedSections,savedChapterPositions:chapterProgress.filter(item=>isRecord(item)&&isRecord(item.lastPosition)).length,savedGrammarRuleStatuses:grammar.length,completedGrammarRules:grammar.filter(rule=>isRecord(rule)&&rule.completed===true).length};
}
function chapterStatuses(progress){
 const done=new Set(Array.isArray(progress.completedChapters)?progress.completedChapters:[]);
 return CURRICULUM.map(chapter=>({id:chapter.id,status:storage.chapterStatus(progress,chapter.id,chapter.sections.length)==='completed'||done.has(chapter.id)?'completed':storage.chapterStatus(progress,chapter.id,chapter.sections.length),available:Boolean(CHAPTER_CONTENT[chapter.id])}));
}
function createBackup(progress=storage.getProgress(),date=new Date()){
 if(!storage.hasValidStoredProgress())throw new Error('Der gespeicherte Lernfortschritt ist beschädigt. Importiere eine frühere Sicherung, bevor du einen neuen Export erstellst.');
 let snapshot;try{snapshot=JSON.parse(JSON.stringify(progress))}catch{throw new Error('Der Lernfortschritt kann nicht in eine Sicherung umgewandelt werden.')}
 return validateBackup({format:FORMAT,schemaVersion:VERSION,backupVersion:VERSION,exportedAt:date.toISOString(),application:'Deutsch A1–B1',statistics:exportStatistics(snapshot),chapterStatuses:chapterStatuses(snapshot),progress:snapshot});
}
function assertStringArray(value,label){if(!Array.isArray(value)||value.some(item=>typeof item!=='string')||new Set(value).size!==value.length)throw new Error(`Die Sicherungsdatei enthält eine ungültige Liste: ${label}.`)}
function validateBackup(backup){
 if(!isRecord(backup))throw new Error('Die Datei enthält kein JSON-Sicherungsobjekt.');
 if(backup.format!==FORMAT)throw new Error('Diese Datei ist keine Sicherung von Deutsch A1–B1.');
 if(backup.schemaVersion!==VERSION||backup.backupVersion!==VERSION)throw new Error(`Diese Sicherungsversion wird nicht unterstützt (Schema ${backup.schemaVersion}, Backup ${backup.backupVersion}).`);
 if(typeof backup.exportedAt!=='string'||!Number.isFinite(Date.parse(backup.exportedAt)))throw new Error('Der Sicherungszeitpunkt ist ungültig.');
 if(!isRecord(backup.progress))throw new Error('Die Datei enthält keinen gültigen Lernfortschritt.');
 const p=backup.progress;
 if(own(p,'current')&&(!isRecord(p.current)||(['chapter','section'].some(key=>own(p.current,key)&&p.current[key]!==null&&typeof p.current[key]!=='string'))))throw new Error('Der gespeicherte Lernort ist ungültig.');
 for(const key of ['completedActivities','completedChapters'])if(own(p,key))assertStringArray(p[key],key);
 if(own(p,'lastActiveChapterId')&&p.lastActiveChapterId!==null&&(typeof p.lastActiveChapterId!=='string'||!/^chapter-\d{2}$/.test(p.lastActiveChapterId)))throw new Error('Das zuletzt aktive Kapitel ist ungültig.');
 if(own(p,'chapterProgress')&&(!isRecord(p.chapterProgress)||Object.entries(p.chapterProgress).some(([id,state])=>{const chapter=CURRICULUM.find(item=>item.id===id);return !/^chapter-\d{2}$/.test(id)||!chapter||!isRecord(state)||!['not_started','in_progress','completed'].includes(state.status)||!Array.isArray(state.completedSections)||state.completedSections.some(section=>typeof section!=='string'||!chapter.sections.some(item=>item.id===section))||new Set(state.completedSections).size!==state.completedSections.length||(state.status==='completed'&&state.completedSections.length!==chapter.sections.length&&!(p.completedChapters||[]).includes(id))||(state.status==='not_started'&&state.completedSections.length>0)||(own(state,'lastSectionId')&&state.lastSectionId!==null&&!chapter.sections.some(item=>item.id===state.lastSectionId))||(own(state,'lastPosition')&&state.lastPosition!==null&&(!isRecord(state.lastPosition)||!Number.isFinite(state.lastPosition.scrollTop)||state.lastPosition.scrollTop<0||(own(state.lastPosition,'sectionId')&&!chapter.sections.some(item=>item.id===state.lastPosition.sectionId))))||['lastStudiedAt','completedAt'].some(key=>own(state,key)&&state[key]!==null&&!Number.isFinite(Date.parse(state[key])))})))throw new Error('Der gespeicherte Kapitel- und Abschnittsfortschritt ist ungültig.');
 for(const key of ['exercises','exams','drafts'])if(own(p,key)&&!isRecord(p[key]))throw new Error(`Der Bereich „${key}“ ist ungültig.`);
 if(own(p,'grammarProgress')&&(!isRecord(p.grammarProgress)||Object.entries(p.grammarProgress).some(([id,state])=>! /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)||!isRecord(state)||typeof state.completed!=='boolean'||(own(state,'completedAt')&&state.completedAt!==null&&(typeof state.completedAt!=='string'||!Number.isFinite(Date.parse(state.completedAt)))))))throw new Error('Der gespeicherte Grammatikfortschritt ist ungültig.');
 if(p.exercises&&Object.values(p.exercises).some(record=>!isRecord(record)||(own(record,'attempts')&&(!Number.isInteger(record.attempts)||record.attempts<0))||(own(record,'lastResult')&&record.lastResult!==undefined&&typeof record.lastResult!=='boolean')||(own(record,'answer')&&typeof record.answer!=='string')||(own(record,'submitted')&&typeof record.submitted!=='boolean')||(own(record,'feedback')&&typeof record.feedback!=='string')||(own(record,'feedbackType')&&!['','correct','incorrect'].includes(record.feedbackType))))throw new Error('Mindestens ein gespeicherter Übungsstand ist ungültig.');
 if(p.exams&&Object.values(p.exams).some(record=>!isRecord(record)||(own(record,'submitted')&&typeof record.submitted!=='boolean')||(own(record,'answers')&&!isRecord(record.answers))||(own(record,'submittedAt')&&record.submittedAt!==null&&!Number.isFinite(Date.parse(record.submittedAt)))))throw new Error('Mindestens ein gespeicherter Prüfungsstand ist ungültig.');
 if(p.drafts&&Object.values(p.drafts).some(value=>typeof value!=='string'))throw new Error('Mindestens ein gespeicherter Schreibentwurf ist ungültig.');
 if(own(p,'lastVisited')&&p.lastVisited!==null&&typeof p.lastVisited!=='string')throw new Error('Der letzte Lernort ist ungültig.');
 const stats=backup.statistics;
 if(!isRecord(stats)||!['totalChapters','completedChapters','remainingChapters','completionPercentage','completedActivities','savedExercises','savedExams','savedDrafts'].every(key=>Number.isInteger(stats[key])&&stats[key]>=0)||stats.completionPercentage>100||stats.completedChapters+stats.remainingChapters!==stats.totalChapters||stats.completionPercentage!==(stats.totalChapters?Math.round(stats.completedChapters/stats.totalChapters*100):0))throw new Error('Die Sicherungsstatistik ist unvollständig oder ungültig.');
 if(own(stats,'savedGrammarRuleStatuses')||own(stats,'completedGrammarRules')){
  const grammar=isRecord(p.grammarProgress)?Object.values(p.grammarProgress):[],completedGrammar=grammar.filter(rule=>isRecord(rule)&&rule.completed===true).length;
  if(!Number.isInteger(stats.savedGrammarRuleStatuses)||stats.savedGrammarRuleStatuses<0||!Number.isInteger(stats.completedGrammarRules)||stats.completedGrammarRules<0||stats.completedGrammarRules>stats.savedGrammarRuleStatuses||stats.savedGrammarRuleStatuses!==grammar.length||stats.completedGrammarRules!==completedGrammar)throw new Error('Die Grammatikstatistik stimmt nicht mit den gespeicherten Regelständen überein.');
 }
 if(own(stats,'completedSections')||own(stats,'savedChapterPositions')||own(stats,'submittedExercises')){
  const chapters=isRecord(p.chapterProgress)?Object.values(p.chapterProgress):[],sections=chapters.reduce((n,item)=>n+(Array.isArray(item?.completedSections)?item.completedSections.length:0),0),positions=chapters.filter(item=>isRecord(item)&&isRecord(item.lastPosition)).length,submitted=Object.values(p.exercises||{}).filter(item=>isRecord(item)&&item.submitted===true).length;
  if(stats.completedSections!==sections||stats.savedChapterPositions!==positions||stats.submittedExercises!==submitted)throw new Error('Die Abschnitts- oder Antwortstatistik stimmt nicht mit dem gespeicherten Lernfortschritt überein.');
 }
 if(!Array.isArray(backup.chapterStatuses)||backup.chapterStatuses.some(item=>!isRecord(item)||typeof item.id!=='string'||!/^chapter-\d{2}$/.test(item.id)||!['completed','in_progress','not_started'].includes(item.status)||typeof item.available!=='boolean')||new Set(backup.chapterStatuses.map(item=>item.id)).size!==backup.chapterStatuses.length)throw new Error('Die Kapitelstatus in der Sicherungsdatei sind ungültig.');
 const statusCounts=backup.chapterStatuses.reduce((counts,item)=>{counts[item.status]++;return counts;},{completed:0,in_progress:0,not_started:0}),completed=new Set(Array.isArray(p.completedChapters)?p.completedChapters:[]);
 if(stats.totalChapters!==backup.chapterStatuses.length||stats.completedChapters!==statusCounts.completed||stats.completedActivities!==(Array.isArray(p.completedActivities)?p.completedActivities.length:0)||stats.savedExercises!==Object.keys(p.exercises||{}).length||stats.savedExams!==Object.keys(p.exams||{}).length||stats.savedDrafts!==Object.keys(p.drafts||{}).length||backup.chapterStatuses.some(item=>item.status!==chapterStatuses(p).find(expected=>expected.id===item.id)?.status))throw new Error('Die Kapitelstatus oder Statistiken stimmen nicht mit dem gespeicherten Lernfortschritt überein.');
 try{if(JSON.stringify(p).length>MAX_FILE_SIZE)throw new Error('Die Lernfortschritte sind zu groß.');}catch(error){if(error instanceof Error&&error.message==='Die Lernfortschritte sind zu groß.')throw error;throw new Error('Die Lernfortschritte können nicht gelesen werden.');}
 return backup;
}
function localDate(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`}
function fileName(timestamp){return `GermanB1_Progress_${localDate(new Date(timestamp))}.json`}
function setLastBackup(timestamp){memoryLastBackup=timestamp;try{localStorage.setItem(LAST_BACKUP_KEY,timestamp)}catch{}}
function getLastBackup(){try{return localStorage.getItem(LAST_BACKUP_KEY)||memoryLastBackup}catch{return memoryLastBackup}}
function formatDate(timestamp){const date=new Date(timestamp);return Number.isFinite(date.getTime())?new Intl.DateTimeFormat('de-DE',{dateStyle:'medium',timeStyle:'short'}).format(date):'Noch keine Sicherung'}
function updateLastBackupLabel(){const label=document.querySelector('#last-backup-date');if(label)label.textContent=getLastBackup()?formatDate(getLastBackup()):'Noch keine Sicherung'}
function notify(message,type='success'){
 const notice=document.querySelector('#backup-notice');if(!notice)return;
 notice.textContent=message;notice.className=`backup-notice ${type}`;notice.hidden=false;
 if(statusTimer)window.clearTimeout(statusTimer);
 statusTimer=window.setTimeout(()=>{notice.hidden=true},7000);
}
function exportFile(){
 try{
  const backup=createBackup(),blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=fileName(backup.exportedAt);document.body.append(link);link.click();link.remove();window.setTimeout(()=>URL.revokeObjectURL(url),1000);
  setLastBackup(backup.exportedAt);updateLastBackupLabel();notify('Deine Lernfortschritte wurden als JSON-Datei exportiert.');
 }catch(error){notify(error.message||'Der Export ist fehlgeschlagen.','error')}
}
function progressPreview(backup){
 const stats=backup.statistics,current=backup.progress.current?.chapter,chapter=CURRICULUM.find(item=>item.id===current);
 const lines=[`Sicherung vom ${formatDate(backup.exportedAt)}.`,`Enthält ${stats.completedChapters} von ${stats.totalChapters} abgeschlossene Kapitel (${stats.completionPercentage} %), ${stats.completedActivities} erledigte Lernaktivitäten, ${stats.savedExercises} Übungsstände, ${stats.savedExams} Prüfungsstände und ${stats.savedDrafts} Schreibentwürfe.`];
 if(isRecord(backup.progress.grammarProgress)){
  const entries=Object.values(backup.progress.grammarProgress),completed=entries.filter(state=>isRecord(state)&&state.completed===true).length;
  lines.push(`Enthält außerdem ${completed} als gelernt markierte Grammatikregeln (${entries.length} gespeicherte Regelstände).`);
 }else lines.push('Diese ältere Sicherung enthält keine Grammatik-Regelstände; vorhandener Grammatikfortschritt bleibt beim Import erhalten.');
 if(chapter)lines.push(`Letzter Lernort: Kapitel ${chapter.number} · ${chapter.title}.`);
 const chapterProgress=backup.progress.chapterProgress||{},sectionCount=Object.values(chapterProgress).reduce((sum,item)=>sum+(Array.isArray(item?.completedSections)?item.completedSections.length:0),0),savedAnswers=Object.values(backup.progress.exercises||{}).filter(item=>isRecord(item)&&typeof item.answer==='string').length;
 lines.push(`Enthält ${sectionCount} gelernte Abschnitte und ${savedAnswers} gespeicherte Übungsantworten.`);
 lines.push('Die Sicherung enthält nur Lernfortschritt. Design-Einstellungen und andere Browserdaten werden nicht verändert.');
 return lines.join(' ');
}
function updateImportModeHelp(){
 const mode=document.querySelector('input[name="import-mode"]:checked')?.value,help=document.querySelector('#import-mode-help');
 if(help)help.textContent=mode==='replace'?'Ersetzen löscht den aktuell gespeicherten Lernfortschritt und stellt stattdessen die Sicherung wieder her. Andere Browserdaten bleiben erhalten.':'Zusammenführen ergänzt Kapitelabschlüsse und fehlende Lernstände. Bei Konflikten bleiben die Daten auf diesem Gerät erhalten.';
}
async function readBackupFile(file){
 if(!file)return;
 try{
  if(file.size>MAX_FILE_SIZE)throw new Error('Die Datei ist größer als 10 MB und kann nicht importiert werden.');
  const contents=await file.text();let parsed;
  try{parsed=JSON.parse(contents)}catch{throw new Error('Die Datei enthält kein gültiges JSON. Wähle eine unveränderte Lernfortschritts-Sicherung aus.')}
  const backup=validateBackup(parsed);pendingBackup=backup;
  const existingValid=storage.hasValidStoredProgress(),mergeChoice=document.querySelector('#merge-choice');
  mergeChoice.disabled=!existingValid;
  if(!existingValid)document.querySelector('#replace-choice').checked=true;
  else document.querySelector('#merge-choice').checked=true;
  document.querySelector('#import-summary').textContent=progressPreview(backup);
  document.querySelector('#import-existing-warning').hidden=existingValid;
  updateImportModeHelp();document.querySelector('#import-dialog').showModal();
 }catch(error){pendingBackup=null;notify(error.message||'Die Sicherungsdatei konnte nicht importiert werden.','error')}
}
function confirmImport(event){
 event.preventDefault();if(!pendingBackup)return;
 const mode=document.querySelector('input[name="import-mode"]:checked')?.value||'merge';
 try{
  storage.importProgress(pendingBackup.progress,mode);
  setLastBackup(pendingBackup.exportedAt);updateLastBackupLabel();
  const date=formatDate(pendingBackup.exportedAt);document.querySelector('#import-dialog').close();
  notify(`Lernfortschritt aus der Sicherung vom ${date} wurde ${mode==='replace'?'wiederhergestellt':'zusammengeführt'}.`);
  pendingBackup=null;document.querySelector('#progress-file').value='';
 }catch(error){notify(error.message||'Der Import ist fehlgeschlagen. Deine vorhandenen Daten blieben unverändert.','error')}
}
function init(){
 const exportButton=document.querySelector('#export-progress'),importButton=document.querySelector('#import-progress'),input=document.querySelector('#progress-file'),dialog=document.querySelector('#import-dialog'),form=document.querySelector('#import-form');
 if(!exportButton||!importButton||!input||!dialog||!form){console.error('[progress-backup] Required landing-page controls are missing. Check index.html and script paths.');return;}
 exportButton.addEventListener('click',exportFile);
 importButton.addEventListener('click',()=>input.click());
 input.addEventListener('change',()=>{const file=input.files?.[0];readBackupFile(file);input.value=''});
 form.addEventListener('submit',confirmImport);
 document.querySelector('#cancel-import').addEventListener('click',()=>{pendingBackup=null;dialog.close()});
 document.querySelectorAll('input[name="import-mode"]').forEach(radio=>radio.addEventListener('change',updateImportModeHelp));
 dialog.addEventListener('click',event=>{if(event.target===dialog){pendingBackup=null;dialog.close()}});
 updateLastBackupLabel();
}
if(typeof document!=='undefined'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();}
return {createBackup,validateBackup,exportStatistics,chapterStatuses,fileName,getLastBackup,formatDate};
})();
