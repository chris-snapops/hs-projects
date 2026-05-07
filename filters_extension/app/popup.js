const HUBSPOT_LIST_PATTERN = /^https:\/\/[^/]*\.hubspot\.com\/contacts\/\d+\/objects\/[^/]+\/views\/[^/]+\/list/;

const DATE_PROPERTIES = [
  'createdate', 'lastmodifieddate', 'closedate',
  'hs_lastcontacted', 'notes_last_updated', 'hs_latest_sequence_enrolled_date'
];

document.addEventListener('DOMContentLoaded', init);

async function init() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab || !HUBSPOT_LIST_PATTERN.test(tab.url)) {
    showState('wrong-page');
    return;
  }

  try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'GET_FILTERS' });
    handleResponse(response);
  } catch (_) {
    showState('error');
  }
}

function handleResponse(response) {
  if (!response) {
    showState('error');
    return;
  }

  const { groups = [], baseUrl, source } = response;

  if (groups.length === 0) {
    showState('no-filters');
    return;
  }

  if (groups.length === 1) {
    renderSingleGroup(groups[0], baseUrl, source);
    showState('has-filters');
    return;
  }

  renderMultiGroup(groups, baseUrl);
  showState('multi-group');
}

function renderSingleGroup(filters, baseUrl, source) {
  document.getElementById('filter-count').textContent = filters.length;

  const list = document.getElementById('filter-list');
  list.innerHTML = '';
  filters.forEach(filter => {
    const li = document.createElement('li');
    li.textContent = formatFilter(filter);
    list.appendChild(li);
  });

  if (source === 'js_state') {
    document.getElementById('fallback-notice').classList.remove('hidden');
  }

  document.getElementById('copy-btn').addEventListener('click', () => copyUrl(buildUrl(baseUrl, filters)));
}

function renderMultiGroup(groups, baseUrl) {
  const container = document.getElementById('group-list');
  container.innerHTML = '';

  groups.forEach((filters, i) => {
    const card = document.createElement('div');
    card.className = 'filter-group';

    const header = document.createElement('div');
    header.className = 'group-header';
    header.textContent = `Group ${i + 1} — ${filters.length} filter${filters.length !== 1 ? 's' : ''}`;

    const ul = document.createElement('ul');
    ul.className = 'group-filter-list';
    filters.forEach(filter => {
      const li = document.createElement('li');
      li.textContent = formatFilter(filter);
      ul.appendChild(li);
    });

    const btn = document.createElement('button');
    btn.className = 'group-copy-btn';
    btn.textContent = `Copy Group ${i + 1}`;
    btn.addEventListener('click', () => copyUrl(buildUrl(baseUrl, filters)));

    card.appendChild(header);
    card.appendChild(ul);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

function buildUrl(baseUrl, filters) {
  return `${baseUrl}?filters=${encodeURIComponent(JSON.stringify(filters))}`;
}

function formatFilter(filter) {
  const property = filter.property || '(unknown)';
  const operator = filter.operator || '';

  let valuePart = '';
  if (filter.values && filter.values.length > 0) {
    valuePart = filter.values.join(', ');
  } else if (filter.value !== undefined && filter.value !== null) {
    valuePart = formatValue(property, filter.value);
  }

  return valuePart ? `${property}  ${operator}  ${valuePart}` : `${property}  ${operator}`;
}

function formatValue(property, value) {
  const isDateProp = DATE_PROPERTIES.some(d => property.includes(d));
  const isTimestamp = typeof value === 'number' && value > 1_000_000_000_000;

  if (isDateProp || isTimestamp) {
    try {
      return new Date(value).toLocaleDateString();
    } catch (_) {}
  }

  return String(value);
}

async function copyUrl(url) {
  try {
    await navigator.clipboard.writeText(url);
  } catch (_) {
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  const confirm = document.getElementById('copy-confirmation');
  confirm.classList.remove('hidden');
  setTimeout(() => confirm.classList.add('hidden'), 2000);
}

function showState(name) {
  ['loading', 'wrong-page', 'no-filters', 'has-filters', 'multi-group', 'error'].forEach(s => {
    document.getElementById(`state-${s}`).classList.add('hidden');
  });
  document.getElementById(`state-${name}`).classList.remove('hidden');
}
