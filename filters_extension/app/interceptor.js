(function () {
  function postFilters(filterGroups, objectTypeId) {
    window.postMessage({
      type: '__HS_FILTER_COPIER__',
      filterGroups,
      objectTypeId,
    }, '*');
  }

  function tryExtract(url, body) {
    if (!url.includes('graphql/crm')) return;
    // console.log(`checking url: ${url}\n${body}`);
    try {
      const parsed = JSON.parse(body);
      const vars = parsed.variables;
      if (vars?.filterGroups && vars?.objectTypeId) {
        postFilters(vars.filterGroups, vars.objectTypeId);
      }
    } catch (_) {}
  }

  // Intercept fetch (used by newer HubSpot code)
  const _fetch = window.fetch;
  window.fetch = async function (...args) {
    const url = args[0] instanceof Request ? args[0].url : String(args[0]);
    const opts = args[1] || {};
    if (opts.body) tryExtract(url, opts.body);
    return _fetch.apply(this, args);
  };

  // Intercept XHR (used by hub-http, HubSpot's legacy HTTP client)
  const _open = XMLHttpRequest.prototype.open;
  const _send = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this._hsUrl = String(url);
    return _open.apply(this, [method, url, ...rest]);
  };

  XMLHttpRequest.prototype.send = function (body) {
    if (this._hsUrl && body) tryExtract(this._hsUrl, body);
    return _send.apply(this, arguments);
  };
})();
