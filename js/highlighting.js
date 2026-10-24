window.StudyHighlighting = (() => {

function renderAnnotated(text,annotations=[]){if(!annotations?.length)return escapeHtml(text);const ordered=[...annotations].sort((a,b)=>a.start-b.start);let html='',cursor=0;for(const a of ordered){if(a.start<cursor||a.end>text.length)continue;html+=escapeHtml(text.slice(cursor,a.start));html+=`<button type="button" class="grammar-mark" data-category="${escapeHtml(a.category)}" aria-label="Explain grammar: ${escapeHtml(a.explanation)}" aria-expanded="false" title="${escapeHtml(a.explanation)}">${escapeHtml(text.slice(a.start,a.end))}</button>`;cursor=a.end}return html+escapeHtml(text.slice(cursor))}
function escapeHtml(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

return {renderAnnotated, escapeHtml};
})();
