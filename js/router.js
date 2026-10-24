window.StudyRouter = (() => {

function readRoute(){const parts=location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);return {chapter:parts[0]||null,section:parts[1]||null}}
function navigate(chapter=null,section=null,{replace=false}={}){const hash=chapter?`#/${chapter}${section?`/${section}`:''}`:'#/';if(replace)history.replaceState(null,'',hash);else location.hash=hash.slice(1)}

return {readRoute, navigate};
})();
