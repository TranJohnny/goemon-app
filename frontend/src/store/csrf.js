import Cookies from 'js-cookie';

export async function fetch(url, options = {}) {
  // Default to 'GET' method
  options.method = options.method || 'GET';
  // Default to {} if none provided
  options.headers = options.headers || {};

  // For non-'GET', set "Content-Type" header to "application/json"
  // and set"XSRF-TOKEN" header to "XSRF-TOKEN" cookie
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  }
  // Call default window's fetch
  const res = await window.fetch(url, options);

  // If response is JSON, parse and set it to key of `data` on the response
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    res.data = data;
  }

  // Throw res if bad response
  if (res.status >= 400) throw res;

  // Else return res
  return res;
}

// Dev function to get "XSRF-TOKEN" cookie
export function restoreCSRF() {
  return fetch('/api/csrf/restore');
}
