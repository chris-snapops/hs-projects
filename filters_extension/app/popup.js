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

  if (!response.filters || response.filters.length === 0) {
    showState('no-filters');
    return;
  }

  document.getElementById('filter-count').textContent = response.filters.length;

  const list = document.getElementById('filter-list');
  list.innerHTML = '';
  response.filters.forEach(filter => {
    const li = document.createElement('li');
    li.textContent = formatFilter(filter);
    list.appendChild(li);
  });

  if (response.source === 'js_state') {
    document.getElementById('fallback-notice').classList.remove('hidden');
  }

  document.getElementById('copy-btn').addEventListener('click', () => copyUrl(response.fullUrl));

  showState('has-filters');
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
  ['loading', 'wrong-page', 'no-filters', 'has-filters', 'error'].forEach(s => {
    document.getElementById(`state-${s}`).classList.add('hidden');
  });
  document.getElementById(`state-${name}`).classList.remove('hidden');
}
