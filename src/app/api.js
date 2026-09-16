export async function api(path, body) {
  let response;
  try { response = await fetch('/api/' + path, { credentials: 'same-origin', ...(body !== undefined ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}) }); }
  catch { throw new Error('Cannot connect. Please check your connection and try again.'); }
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Please try again.');
  return data;
}
