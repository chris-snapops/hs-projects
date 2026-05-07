// Inject the fetch interceptor into page context before HubSpot's JS runs.
// Must use a web-accessible src= script (not inline) to satisfy HubSpot's CSP.
const interceptorScript = document.createElement('script');
interceptorScript.src = chrome.runtime.getURL('interceptor.js');
(document.head || document.documentElement).appendChild(interceptorScript);

let latestFilterData = null;

// Receive filter data posted by the interceptor running in page context
window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  if (event.data?.type !== '__HS_FILTER_COPIER__') return;
  latestFilterData = event.data;
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action !== 'GET_FILTERS') return;

  const url = new URL(window.location.href);

  // Primary: graphql intercept (captures live filter state for all view types)
  if (latestFilterData) {
    const { filterGroups: rawGroups, objectTypeId } = latestFilterData;
    const groups = rawGroups
      .map(group => sanitizeFilters(flattenGroup(group), objectTypeId))
      .filter(g => g.length > 0);

    sendResponse({
      source: 'graphql',
      groups,
      baseUrl: buildBaseUrl(url, objectTypeId),
    });
    return true;
  }

  // Fallback: filters encoded in the URL
  const raw = url.searchParams.get('filters');
  if (raw) {
    try {
      const filters = JSON.parse(raw);
      if (Array.isArray(filters) && filters.length > 0) {
        sendResponse({
          source: 'url',
          groups: [filters],
          baseUrl: buildBaseUrl(url, null),
        });
        return true;
      }
    } catch (_) {}
  }

  sendResponse({ source: 'none', groups: [], baseUrl: null });
  return true;
});

function flattenGroup(group) {
  return (group.filters || []).map(({ __typename, ...entry }) => entry);
}

function sanitizeFilters(filters, objectTypeId) {
  if (objectTypeId !== '0-3') return filters;
  // Deals (0-3): HubSpot adds a redundant pipeline EQ alongside the pipeline IN.
  // The EQ breaks the URL filter, so drop it; the IN is sufficient.
  return filters.filter(f => !(f.property === 'pipeline' && f.operator === 'EQ'));
}

function buildBaseUrl(url, objectTypeId) {
  const match = url.pathname.match(/\/contacts\/(\d+)\/objects\/([^/]+)\//);
  const hubId = match ? match[1] : '';
  const type = objectTypeId || (match ? match[2] : '0-1');
  return `${url.origin}/contacts/${hubId}/objects/${type}/views/all/list`;
}
