window.StudyChapterLoader = (() => {
const {CHAPTER_CONTENT}=window;
const EXPECTED_SECTION_IDS=['introduction','reading','vocabulary','grammar','exercises','practical-communication','summary','examination','solutions'];
const cache=new Map();
/** Load only the selected chapter as a classic script, including when opened with file://. */
function hasChapter(chapterId){return Boolean(CHAPTER_CONTENT[chapterId])}
async function loadChapter(chapter){if(cache.has(chapter.id))return cache.get(chapter.id);const path=CHAPTER_CONTENT[chapter.id];if(!path)return null;if(!window.CHAPTERS?.[chapter.id])await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=path;script.onload=resolve;script.onerror=()=>reject(new Error(`Could not load chapter: ${chapter.id}`));document.head.append(script)});const content=window.CHAPTERS?.[chapter.id],expected=EXPECTED_SECTION_IDS;if(content?.id!==chapter.id||!content.metadata||!Array.isArray(content.sections)||content.sections.length!==9||expected.some((id,i)=>content.sections[i]?.id!==id))throw new Error(`Invalid chapter script: ${chapter.id} must provide the nine ordered chapter sections`);cache.set(chapter.id,content);return content}

return {hasChapter, loadChapter};
})();
