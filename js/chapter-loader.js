window.StudyChapterLoader = (() => {
const {CHAPTER_CONTENT}=window;
const EXPECTED_SECTION_IDS=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'];
const cache=new Map(),inFlight=new Map();
function hasChapter(chapterId){return Boolean(CHAPTER_CONTENT[chapterId])}
async function loadChapter(chapter){
 if(cache.has(chapter.id))return cache.get(chapter.id);
 if(inFlight.has(chapter.id))return inFlight.get(chapter.id);
 const path=CHAPTER_CONTENT[chapter.id];if(!path)return null;
 const request=(async()=>{
  if(!window.CHAPTERS?.[chapter.id])await new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src=path;script.onload=resolve;
   script.onerror=()=>{script.remove();reject(new Error(`Could not load chapter: ${chapter.id} (${path})`))};
   document.head.append(script);
  });
  const content=window.CHAPTERS?.[chapter.id];
  if(content?.id!==chapter.id||!content.metadata||!Array.isArray(content.sections)||content.sections.length!==9||EXPECTED_SECTION_IDS.some((id,i)=>content.sections[i]?.id!==id))throw new Error(`Invalid chapter script: ${chapter.id} must provide the nine ordered chapter sections`);
  cache.set(chapter.id,content);return content;
 })();
 inFlight.set(chapter.id,request);
 try{return await request}finally{if(inFlight.get(chapter.id)===request)inFlight.delete(chapter.id)}
}
return {hasChapter,loadChapter};
})();
