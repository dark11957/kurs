(() => {
  'use strict';
  const data = window.GRAMMAR_REFERENCE;
  const list = document.querySelector('#topic-list');
  const groupList = document.querySelector('#group-list');
  const search = document.querySelector('#topic-search');
  const level = document.querySelector('#level-filter');
  const type = document.querySelector('#type-filter');
  const completionFilter = document.querySelector('#completion-filter');
  const empty = document.querySelector('#empty-state');
  const count = document.querySelector('#result-count');
  const storage = window.StudyStorage;

  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
  const validTopic = topic => topic && typeof topic.id === 'string' &&
    typeof topic.groupId === 'string' && typeof topic.title === 'string' &&
    ['A1', 'A2', 'B1'].includes(topic.level) && Array.isArray(topic.tags) &&
    Array.isArray(topic.searchTerms) && Array.isArray(topic.examples) && topic.examples.length >= 1 &&
    Array.isArray(topic.relatedTopicIds) && Array.isArray(topic.lessonLinks) &&
    Array.isArray(topic.sourceRefs) && ['summaryDe', 'whenToUseDe', 'ruleDe'].every(key => typeof topic[key] === 'string');

  if (!data || !Array.isArray(data.groups) || !Array.isArray(data.topics)) {
    list.innerHTML = '<p class="gr-status" role="alert">Die Grammatikthemen konnten nicht geladen werden. Bitte prüfe die Datei data/grammar-reference/manifest.js.</p>';
    return;
  }
  if (!storage || typeof storage.getProgress !== 'function' || typeof storage.updateProgress !== 'function') {
    list.innerHTML = '<p class="gr-status" role="alert">Der Grammatikfortschritt konnte nicht initialisiert werden. Bitte prüfe js/storage.js.</p>';
    return;
  }

  const topicIds = new Set(data.topics.map(topic => topic.id));
  const duplicateIds = topicIds.size !== data.topics.length;
  const invalid = data.topics.find(topic => !validTopic(topic) ||
    topic.relatedTopicIds.some(id => !topicIds.has(id)) ||
    topic.lessonLinks.some(link => typeof link.href !== 'string' || link.verified !== true));
  if (duplicateIds || invalid) {
    list.innerHTML = '<p class="gr-status" role="alert">Die Grammatikdaten sind unvollständig oder ungültig. Bitte prüfe Themen-IDs, Pflichtfelder und Verweise.</p>';
    console.error('Grammar reference data validation failed.', {duplicateIds, invalid});
    return;
  }

  let activeGroup = '';
  const ruleProgress = () => {
    const progress = storage.getProgress();
    return progress.grammarProgress && typeof progress.grammarProgress === 'object' && !Array.isArray(progress.grammarProgress) ? progress.grammarProgress : {};
  };
  const isCompleted = (id, progress = ruleProgress()) => progress[id]?.completed === true;
  function renderProgressSummary() {
    const progress = ruleProgress();
    const total = data.topics.length;
    const completed = data.topics.filter(topic => isCompleted(topic.id, progress)).length;
    const remaining = total - completed;
    const percent = total ? Math.round(completed / total * 100) : 0;
    document.querySelector('#gr-total-rules').textContent = String(total);
    document.querySelector('#gr-completed-rules').textContent = String(completed);
    document.querySelector('#gr-remaining-rules').textContent = String(remaining);
    document.querySelector('#gr-progress-percent').textContent = `${percent} %`;
    document.querySelector('#gr-progress-fill').style.width = `${percent}%`;
    document.querySelector('#gr-progressbar').setAttribute('aria-valuenow', String(percent));
    const next = data.topics.find(topic => !isCompleted(topic.id, progress));
    const continueLink = document.querySelector('#gr-continue-rule');
    if (next) {
      continueLink.href = `#${encodeURIComponent(next.id)}`;
      continueLink.textContent = `Weiterlernen · ${next.title}`;
      continueLink.setAttribute('aria-label', `Mit der nächsten ungelernten Regel fortfahren: ${next.title}`);
    } else {
      continueLink.removeAttribute('href');
      continueLink.textContent = 'Alle Regeln gelernt ✓';
      continueLink.setAttribute('aria-label', 'Alle Grammatikregeln wurden als gelernt markiert');
    }
  }
  const query = () => search.value.trim().toLocaleLowerCase('de');
  const groupFor = topic => data.groups.find(group => group.id === topic.groupId);
  const termsFor = topic => ({
    'deshalb-deswegen-darum': ['deshalb', 'deswegen', 'darum'],
    'dafuer-dagegen': ['dafür', 'dagegen'],
    'damit-um-zu': ['damit', 'um', 'zu'],
    'weil-denn-da': ['weil', 'denn', 'da'],
    'obwohl-trotzdem': ['obwohl', 'trotzdem'],
    'dass-das': ['dass', 'das'],
    'wenn-als': ['wenn', 'als'],
    'konjunktiv-ii-wuerde': ['würde', 'würden', 'würdest', 'würdet'],
    'konjunktiv-ii-waere-haette': ['wäre', 'wärst', 'wären', 'hätte', 'hättest', 'hätten'],
    'konjunktiv-ii-modalverben': ['könnte', 'müsste', 'dürfte', 'sollte', 'wollte', 'möchte'],
    'perfekt-haben-sein': ['haben', 'hat', 'habe', 'sein', 'ist', 'sind'],
    'partizip-ii-bildung': ['Partizip II', 'gewartet', 'aufgestanden', 'verstanden']
  }[topic.id] || [topic.title]);

  function highlightExample(text, terms) {
    const alternatives = [...terms].sort((a, b) => b.length - a.length)
      .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (!alternatives.length) return escapeHtml(text);
    const regex = new RegExp(`(${alternatives.join('|')})`, 'giu');
    const selected = new Set(terms.map(term => term.toLocaleLowerCase('de')));
    return String(text).split(regex).map(part => selected.has(part.toLocaleLowerCase('de'))
      ? `<span class="gr-ink-highlight">${escapeHtml(part)}</span>`
      : escapeHtml(part)).join('');
  }

  function renderFlowNode(text, label, tone = '') {
    const toneClass = tone ? ` is-${tone}` : '';
    return `<span class="gr-flow-node${toneClass}"><span>${escapeHtml(text)}</span><small>${escapeHtml(label)}</small></span>`;
  }

  function renderRuleVisual(topic) {
    if (topic.id === 'deshalb-deswegen-darum') {
      return `<div class="gr-visual" role="img" aria-label="Satzmuster: Deshalb im Vorfeld, finites Verb an Position zwei, danach das Subjekt">
        <p class="gr-visual-label">Satzbau · Hauptsatz mit Konjunktionaladverb</p>
        <div class="gr-flow">${renderFlowNode('Deshalb', 'Vorfeld', 'note')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('gehe', 'finites Verb · 2', 'verb')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('ich', 'Subjekt', 'subject')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('nach Hause', 'Ergänzung')}</div>
      </div>`;
    }
    if (topic.id === 'dafuer-dagegen') {
      return `<div class="gr-visual" role="img" aria-label="Formen: da plus für ergibt dafür, da plus gegen ergibt dagegen">
        <p class="gr-visual-label">Formen · Bezug auf Dinge oder Aussagen</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>Präposition + Sache</strong>da + für <span class="gr-flow-arrow" aria-hidden="true">→</span> dafür</div><div class="gr-formula"><strong>Präposition + Sache</strong>da + gegen <span class="gr-flow-arrow" aria-hidden="true">→</span> dagegen</div></div>
      </div>`;
    }
    if (topic.id === 'damit-um-zu') {
      return `<div class="gr-visual" role="img" aria-label="Zweck ausdrücken mit damit plus Nebensatz oder um plus zu plus Infinitiv">
        <p class="gr-visual-label">Zweck · zwei Satzmuster</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>Eigenes Subjekt im Nebensatz</strong>Hauptsatz + damit + Subjekt + … + finites Verb</div><div class="gr-formula"><strong>Gleiches, nicht genanntes Subjekt</strong>Hauptsatz + um … zu + Infinitiv</div></div>
      </div>`;
    }
    if (topic.id === 'weil-denn-da') {
      return `<div class="gr-visual" role="group" aria-label="Satzstellung im Vergleich: weil und da mit Verb am Ende, denn mit Verb an Position zwei">
        <p class="gr-visual-label">Verbposition · Grund nennen</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>weil / da · Nebensatz</strong>…, weil/da + Subjekt + … + <span class="gr-ink-highlight">Verb am Ende</span></div><div class="gr-formula"><strong>denn · Hauptsatz</strong>…, denn + Subjekt + <span class="gr-ink-highlight">Verb auf Position 2</span> + …</div></div>
      </div>`;
    }
    if (topic.id === 'obwohl-trotzdem') {
      return `<div class="gr-visual" role="group" aria-label="Satzmuster im Kontrast: obwohl mit Verb am Ende und trotzdem mit Verb an Position zwei">
        <p class="gr-visual-label">Gegensatz · zwei Satzmuster</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>obwohl · Nebensatz</strong>Obwohl + Subjekt + … + <span class="gr-ink-highlight">Verb am Ende</span>, Hauptsatz.</div><div class="gr-formula"><strong>trotzdem · Hauptsatz</strong>Trotzdem + <span class="gr-ink-highlight">Verb auf Position 2</span> + Subjekt + …</div></div>
      </div>`;
    }
    if (topic.id === 'dass-das') {
      return `<div class="gr-visual" role="group" aria-label="Schreibprobe: dass leitet einen Nebensatz ein; das kann oft durch dieses oder welches ersetzt werden">
        <p class="gr-visual-label">Schreibprobe · Funktion im Satz prüfen</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>dass · Inhaltssatz</strong>Ich weiß, <span class="gr-ink-highlight">dass</span> … + finites Verb am Ende.</div><div class="gr-formula"><strong>das · Artikel oder Pronomen</strong><span class="gr-ink-green">das</span> Buch → dieses Buch · das Programm, welches …</div></div>
      </div>`;
    }
    if (topic.id === 'wenn-als') {
      return `<div class="gr-visual" role="group" aria-label="Zeitlinie: als für einmaliges Vergangenes; wenn für Wiederholung oder Gegenwart und Zukunft">
        <p class="gr-visual-label">Zeitlinie · temporale Bedeutung</p>
        <div class="gr-flow"><span class="gr-flow-node is-verb"><span>einmal damals</span><small>als</small></span><span class="gr-flow-arrow" aria-hidden="true">↔</span><span class="gr-flow-node is-subject"><span>wiederholt</span><small>wenn</small></span><span class="gr-flow-arrow" aria-hidden="true">·</span><span class="gr-flow-node is-subject"><span>heute / morgen</span><small>wenn</small></span></div>
      </div>`;
    }
    if (topic.id === 'konjunktiv-ii-wuerde') {
      return `<div class="gr-visual" role="img" aria-label="Satzklammer: Ich würde den Kurs besuchen. Würde steht an Position zwei, besuchen am Satzende.">
        <p class="gr-visual-label">Satzklammer · Konjunktiv II</p>
        <div class="gr-flow">${renderFlowNode('Ich', 'Subjekt', 'subject')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('würde', 'finites Verb · 2', 'verb')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('den Kurs', 'Ergänzung')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('besuchen', 'Infinitiv am Ende', 'note')}</div>
      </div>`;
    }
    if (topic.id === 'konjunktiv-ii-waere-haette') {
      return `<div class="gr-visual" role="group" aria-label="Satzmuster im Konjunktiv II: hätte und wäre stehen im wenn-Nebensatz am Ende.">
        <p class="gr-visual-label">Irreale Bedingung · Verbposition</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>wenn-Satz · Verb am Ende</strong>Wenn ich mehr Zeit <span class="gr-ink-highlight">hätte</span>, …</div><div class="gr-formula"><strong>Hauptsatz · Verb auf Position 2</strong>… <span class="gr-ink-green">wäre</span> der Raum frei.</div></div>
      </div>`;
    }
    if (topic.id === 'konjunktiv-ii-modalverben') {
      return `<div class="gr-visual" role="group" aria-label="Satzklammer: Das Modalverb steht konjugiert auf Position zwei, der Infinitiv ohne zu am Satzende.">
        <p class="gr-visual-label">Satzklammer · Modalverb + Infinitiv</p>
        <div class="gr-flow">${renderFlowNode('Tassnim', 'Subjekt', 'subject')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('könnte', 'finites Verb · 2', 'verb')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('den Abendkurs', 'Ergänzung')}<span class="gr-flow-arrow" aria-hidden="true">→</span>${renderFlowNode('besuchen', 'Infinitiv am Ende', 'note')}</div>
      </div>`;
    }
    if (topic.id === 'perfekt-haben-sein') {
      return `<div class="gr-visual" role="group" aria-label="Perfekt: Hilfsverb haben oder sein an Position zwei und Partizip zwei am Satzende.">
        <p class="gr-visual-label">Verbklammer · Perfekt im Hauptsatz</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>meiste Verben · haben</strong>Ich <span class="gr-ink-highlight">habe</span> die Tickets <span class="gr-ink-green">gekauft</span>.</div><div class="gr-formula"><strong>Orts-/Zustandswechsel · oft sein</strong>Wir <span class="gr-ink-highlight">sind</span> spät <span class="gr-ink-green">angekommen</span>.</div></div>
      </div>`;
    }
    if (topic.id === 'partizip-ii-bildung') {
      return `<div class="gr-visual" role="group" aria-label="Partizipbildung: regelmäßige Verben mit ge und t, starke Formen oft mit en, trennbare Verben mit ge innen, untrennbare und Verben auf ieren ohne ge.">
        <p class="gr-visual-label">Partizip · Bausteine erkennen</p>
        <div class="gr-formula-pair"><div class="gr-formula"><strong>regelmäßig</strong><span class="gr-ink-highlight">ge</span> + Stamm + <span class="gr-ink-green">t</span> · ge-wart-et</div><div class="gr-formula"><strong>trennbar</strong>Präfix + <span class="gr-ink-highlight">ge</span> + Stamm · auf-ge-standen</div></div>
      </div>`;
    }
    return '';
  }

  function renderDefinition(topic) {
    return `<section class="gr-section gr-definition"><h4>01 · Definition</h4><p class="gr-topic-summary">${escapeHtml(topic.summaryDe)}</p>${topic.glossEn ? `<p class="gr-gloss" lang="en">${escapeHtml(topic.glossEn)}</p>` : ''}<aside class="gr-margin-note"><strong>Wann brauchst du das?</strong> ${escapeHtml(topic.whenToUseDe)}</aside></section>`;
  }

  function renderRule(topic) {
    return `<div class="gr-notebook-grid"><section class="gr-section gr-rule"><h4>02 · Regel</h4><p class="gr-rule-text">${escapeHtml(topic.ruleDe)}</p></section>${renderRuleVisual(topic)}</div>`;
  }

  function renderExamples(topic) {
    const examples = topic.examples.map(example => `<li><span class="gr-example-de" lang="de">${highlightExample(example.de, termsFor(topic))}</span>${example.en ? `<span class="gr-example-en" lang="en">${escapeHtml(example.en)}</span>` : ''}</li>`).join('');
    return `<section class="gr-section gr-example-section"><h4>03 · Beispiele</h4><ol class="gr-examples">${examples}</ol></section>`;
  }

  function renderImportantNote(topic) {
    return topic.pitfallDe ? `<aside class="gr-notice"><span>${escapeHtml(topic.pitfallDe)}</span></aside>` : '';
  }

  function renderChapterLinks(topic) {
    const links = topic.lessonLinks.length
      ? topic.lessonLinks.map(link => `<a class="gr-lesson" href="${escapeHtml(link.href)}">${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`).join('')
      : '<span class="gr-missing">Noch keine passende Lektion</span>';
    return `<div class="gr-links" aria-label="Passende Lernkapitel">${links}</div>`;
  }

  /* Reusable data-driven table components for future verb forms and contrasts. */
  function renderTable(spec, className = 'gr-table') {
    if (!spec || !Array.isArray(spec.headers) || !Array.isArray(spec.rows)) return '';
    const headers = spec.headers.map(header => `<th scope="col">${escapeHtml(header)}</th>`).join('');
    const rows = spec.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('');
    return `<div class="gr-table-wrap"><table class="${className}">${spec.caption ? `<caption>${escapeHtml(spec.caption)}</caption>` : ''}<thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function renderOptionalTables(topic) {
    const forms = renderTable(topic.forms, 'gr-table gr-forms-table');
    const mini = renderTable(topic.miniTable, 'gr-table');
    const comparison = renderTable(topic.comparison, 'gr-comparison-table');
    const pieces = [];
    if (forms) pieces.push(`<section class="gr-section gr-forms"><h4>Konjugation und Formen</h4>${forms}</section>`);
    if (mini) pieces.push(`<section class="gr-section">${mini}</section>`);
    if (comparison) pieces.push(`<section class="gr-comparison"><h4>Vergleich auf einen Blick</h4>${comparison}</section>`);
    return pieces.join('');
  }

  function renderRelatedComparison(topic) {
    if (!topic.relatedTopicIds.length || topic.comparison) return '';
    const related = topic.relatedTopicIds.map(id => data.topics.find(candidate => candidate.id === id)).filter(Boolean);
    if (!related.length) return '';
    const rows = [topic, ...related].map(item => `<tr><th scope="row"><a href="#${escapeHtml(item.id)}">${escapeHtml(item.title)}</a></th><td>${escapeHtml(item.summaryDe)}</td></tr>`).join('');
    return `<section class="gr-comparison"><h4>Verwandte Formen im Vergleich</h4><div class="gr-table-wrap"><table class="gr-comparison-table"><caption>Bedeutung kurz gegenübergestellt</caption><thead><tr><th scope="col">Form</th><th scope="col">Bedeutung</th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }

  function renderGroups() {
    const progress = ruleProgress();
    groupList.innerHTML = data.groups.map(group => {
      const topics = data.topics.filter(topic => topic.groupId === group.id);
      const total = topics.length;
      const completed = topics.filter(topic => isCompleted(topic.id, progress)).length;
      return `<button class="gr-group" type="button" data-group="${escapeHtml(group.id)}" aria-pressed="${activeGroup === group.id}"><span>${escapeHtml(group.id)} · ${escapeHtml(group.title)}</span><span class="gr-group-count" aria-label="${completed} von ${total} gelernt">${completed}/${total} ✓</span></button>`;
    }).join('');
  }

  function renderTopic(topic, progress) {
    const group = groupFor(topic);
    const completed = isCompleted(topic.id, progress);
    const tags = topic.tags.map(tag => `<span class="gr-tag">${escapeHtml(tag)}</span>`).join('');
    return `<article class="gr-topic${completed ? ' is-complete' : ''}" id="${escapeHtml(topic.id)}" tabindex="-1">
      <div class="gr-topic-inner">
        <div class="gr-topic-top"><span>${escapeHtml(group?.id)} · ${escapeHtml(group?.title)}</span><span class="gr-tag">${escapeHtml(topic.level)}</span><span class="gr-tag">${escapeHtml(({grammar:'Grammatik',connector:'Konnektor',phrase:'Ausdruck',verb:'Verb'})[topic.type] || 'Grammatik')}</span>${tags}</div>
        <div class="gr-topic-heading"><h3>${escapeHtml(topic.title)}</h3><button class="gr-study-toggle" type="button" data-study-rule="${escapeHtml(topic.id)}" aria-pressed="${completed}" aria-label="${completed ? 'Als nicht gelernt markieren' : 'Als gelernt markieren'}: ${escapeHtml(topic.title)}">${completed ? 'Gelernt ✓' : 'Nicht gelernt'}</button></div>
        ${renderDefinition(topic)}
        ${renderRule(topic)}
        ${renderOptionalTables(topic)}
        ${renderExamples(topic)}
        ${renderRelatedComparison(topic)}
        ${renderImportantNote(topic)}
        ${renderChapterLinks(topic)}
      </div>
    </article>`;
  }

  function renderTopics() {
    const searchTerm = query();
    const progress = ruleProgress();
    const filtered = data.topics.filter(topic => {
      const group = groupFor(topic);
      const words = [topic.title, topic.summaryDe, topic.glossEn, topic.whenToUseDe, topic.ruleDe, ...topic.tags, ...topic.searchTerms, group?.title].join(' ').toLocaleLowerCase('de');
      const completed = isCompleted(topic.id, progress);
      return (!activeGroup || topic.groupId === activeGroup) &&
        (!level.value || topic.level === level.value) &&
        (!type.value || topic.type === type.value) &&
        (completionFilter.value === 'all' || (completionFilter.value === 'completed' ? completed : !completed)) &&
        (!searchTerm || words.includes(searchTerm));
    });
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'Thema' : 'Themen'}${activeGroup ? ` · ${groupFor({groupId: activeGroup})?.title || activeGroup}` : ''}`;
    empty.hidden = filtered.length > 0;
    list.innerHTML = filtered.map(topic => renderTopic(topic, progress)).join('');
  }

  function renderAll() {
    renderProgressSummary();
    renderGroups();
    renderTopics();
  }

  list.addEventListener('click', event => {
    const button = event.target.closest('[data-study-rule]');
    if (!button) return;
    const id = button.dataset.studyRule;
    if (!topicIds.has(id)) return;
    const completed = !isCompleted(id);
    const scrollY = window.scrollY;
    storage.updateProgress(progress => {
      if (!progress.grammarProgress || typeof progress.grammarProgress !== 'object' || Array.isArray(progress.grammarProgress)) progress.grammarProgress = {};
      progress.grammarProgress[id] = {completed, completedAt: completed ? new Date().toISOString() : null};
    });
    requestAnimationFrame(() => {
      if (typeof window.scrollTo === 'function') window.scrollTo(0, scrollY);
      const nextButton = [...list.querySelectorAll('[data-study-rule]')].find(item => item.dataset.studyRule === id);
      (nextButton || completionFilter)?.focus({preventScroll: true});
    });
  });

  function readHash() {
    let id;
    try { id = decodeURIComponent(location.hash.replace(/^#\/?/, '')); }
    catch { return; }
    if (!topicIds.has(id)) return;
    activeGroup = '';
    search.value = '';
    level.value = '';
    type.value = '';
    renderGroups();
    renderTopics();
    const topic = document.getElementById(id);
    if (topic) requestAnimationFrame(() => {
      topic.scrollIntoView({block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
      topic.focus({preventScroll: true});
    });
  }

  groupList.addEventListener('click', event => {
    const button = event.target.closest('[data-group]');
    if (!button) return;
    activeGroup = activeGroup === button.dataset.group ? '' : button.dataset.group;
    renderGroups();
    renderTopics();
    history.replaceState(null, '', location.pathname + location.search);
  });
  search.addEventListener('input', renderTopics);
  level.addEventListener('change', renderTopics);
  type.addEventListener('change', renderTopics);
  completionFilter.addEventListener('change', renderTopics);
  document.querySelector('#group-toggle').addEventListener('click', event => {
    const collapsed = groupList.parentElement.classList.toggle('is-collapsed');
    event.currentTarget.setAttribute('aria-expanded', String(!collapsed));
  });
  window.addEventListener('hashchange', readHash);
  window.addEventListener('progresschange', renderAll);
  window.addEventListener('storage', event => { if (event.key === storage.progressKey) renderAll(); });
  renderAll();
  readHash();
})();
