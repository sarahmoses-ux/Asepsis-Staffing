import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { mkdirSync, readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
const scrypt = promisify(scryptCallback);
const production = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 5173);
const directory = process.env.DATA_DIR || 'server/data';
mkdirSync(directory, { recursive: true });
const db = new DatabaseSync(resolve(directory, 'asepsis.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL, role TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, user_id INTEGER REFERENCES users(id), expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS records(id INTEGER PRIMARY KEY, user_id INTEGER REFERENCES users(id), kind TEXT NOT NULL, data TEXT NOT NULL, created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS saved(user_id INTEGER REFERENCES users(id), job_id INTEGER, PRIMARY KEY(user_id,job_id));`);
const hash = value => createHash('sha256').update(value).digest('hex');
const safeUser = ({ id, name, email, role }) => ({ id, name, email, role });
const fail = (status, message) => { throw Object.assign(new Error(message), { status }); };
const attempts = new Map();
const dummySalt = randomBytes(16).toString('hex');
const dummyKey = await scrypt('unused password', dummySalt, 64);
const vite = production ? null : await (await import('vite')).createServer({ server: { middlewareMode: true }, appType: 'spa' });
const server = http.createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (!path.startsWith('/api/')) {
    if (vite) return vite.middlewares(req, res);
    try {
      const file = resolve('dist', '.' + decodeURIComponent(path === '/' ? '/index.html' : path));
      if (!file.startsWith(resolve('dist') + '/'.replace('/', process.platform === 'win32' ? '\\' : '/'))) fail(404, 'Not found');
      res.setHeader('Content-Type', ({ '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png' })[extname(file)] || 'application/octet-stream');
      res.end(readFileSync(file));
    } catch { res.writeHead(404); res.end('Not found'); }
    return;
  }
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  const send = (data, status = 200) => { res.writeHead(status); res.end(JSON.stringify(data)); };
  try {
    if (!['GET', 'POST'].includes(req.method)) fail(405, 'Method not allowed');
    let body = {};
    if (req.method === 'POST') {
      const expectedOrigin = process.env.APP_ORIGIN || `http://${req.headers.host}`;
      if (req.headers.origin && req.headers.origin !== expectedOrigin) fail(403, 'Origin not allowed');
      if (!req.headers['content-type']?.startsWith('application/json')) fail(415, 'Use JSON');
      let raw = '';
      for await (const chunk of req) { raw += chunk; if (Buffer.byteLength(raw) > 32768) fail(413, 'Request too large'); }
      try { body = JSON.parse(raw); } catch { fail(400, 'Invalid JSON'); }
      if (!body || typeof body !== 'object' || Array.isArray(body)) fail(400, 'Invalid request');
    }
    db.prepare('DELETE FROM sessions WHERE expires < ?').run(Date.now());
    const token = req.headers.cookie?.split(';').map(x => x.trim()).find(x => x.startsWith('asepsis_session='))?.slice(16) || '';
    const user = db.prepare('SELECT users.* FROM sessions JOIN users ON users.id=sessions.user_id WHERE token=? AND expires>?').get(hash(token), Date.now());
    const cookie = (value, age) => res.setHeader('Set-Cookie', `asepsis_session=${value}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${age}${production ? '; Secure' : ''}`);
    if (path === '/api/session' && req.method === 'GET') return send({ user: user ? safeUser(user) : null });
    if (['/api/signup','/api/login'].includes(path) && req.method === 'POST') {
      const now = Date.now();
      for (const [key, value] of attempts) if (value.until < now) attempts.delete(key);
      const key = req.socket.remoteAddress;
      const attempt = attempts.get(key) || { count: 0, until: now + 900000 };
      attempts.set(key, attempt);
      if (++attempt.count > 20) fail(429, 'Too many attempts. Please try again in 15 minutes.');
      const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || typeof body.password !== 'string' || body.password.length < 10 || body.password.length > 128) fail(400, 'Enter a valid email and a password between 10 and 128 characters.');
      let account;
      if (path === '/api/signup') {
        if (typeof body.name !== 'string' || !body.name.trim() || body.name.length > 100 || !['worker','employer'].includes(body.role)) fail(400, 'Enter your name and choose an account type.');
        const salt = randomBytes(16).toString('hex');
        const password = salt + ':' + (await scrypt(body.password, salt, 64)).toString('hex');
        try { const result = db.prepare('INSERT INTO users(name,email,password,role) VALUES(?,?,?,?)').run(body.name.trim(), email, password, body.role); account = db.prepare('SELECT * FROM users WHERE id=?').get(result.lastInsertRowid); }
        catch (error) { if (error.code?.includes('SQLITE') && db.prepare('SELECT id FROM users WHERE email=?').get(email)) fail(409, 'An account already uses this email. Please log in.'); throw error; }
      } else {
        account = db.prepare('SELECT * FROM users WHERE email=?').get(email);
        const [salt, encoded] = account ? account.password.split(':') : [dummySalt, dummyKey.toString('hex')];
        const actual = await scrypt(body.password, salt, 64);
        if (!timingSafeEqual(actual, Buffer.from(encoded, 'hex')) || !account) fail(401, 'Email or password is incorrect.');
      }
      db.prepare('DELETE FROM sessions WHERE token=?').run(hash(token));
      const session = randomBytes(32).toString('hex');
      db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(hash(session), account.id, Date.now() + 604800000);
      cookie(session, 604800);
      return send({ user: safeUser(account) });
    }
    if (!user) fail(401, 'Please log in to continue.');
    if (path === '/api/logout' && req.method === 'POST') { db.prepare('DELETE FROM sessions WHERE token=?').run(hash(token)); cookie('', 0); return send({ ok: true }); }
    if (path === '/api/account' && req.method === 'GET') return send({ records: db.prepare('SELECT id,kind,data,created FROM records WHERE user_id=? ORDER BY id DESC').all(user.id).map(r => ({ ...r, data: JSON.parse(r.data) })), saved: db.prepare('SELECT job_id FROM saved WHERE user_id=?').all(user.id).map(r => r.job_id) });
    if (path === '/api/saved' && req.method === 'POST') {
      if (!Number.isInteger(body.jobId) || body.jobId < 1 || typeof body.saved !== 'boolean') fail(400, 'Invalid saved job');
      db.prepare(body.saved ? 'INSERT OR IGNORE INTO saved VALUES(?,?)' : 'DELETE FROM saved WHERE user_id=? AND job_id=?').run(user.id, body.jobId);
      return send({ ok: true });
    }
    if (path === '/api/records' && req.method === 'POST') {
      const { kind, data } = body;
      if (!['application','request'].includes(kind) || !data || typeof data !== 'object' || Array.isArray(data)) fail(400, 'Invalid submission');
      if (user.role !== (kind === 'application' ? 'worker' : 'employer')) fail(403, 'This submission is not available for your account type.');
      const required = kind === 'application' ? ['first','last','phone','email','zip'] : ['role','start','site','cityState','contact','company','email','phone'];
      if (!required.every(k => typeof data[k] === 'string' && data[k].trim() && data[k].length <= 500) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) fail(400, 'Please complete all required contact and submission details.');
      if (kind === 'application' && (data.consent !== true || data.over18 !== true || !Number.isInteger(data.jobId))) fail(400, 'Please confirm eligibility and verification consent.');
      if (kind === 'request' && (!Number.isInteger(Number(data.headcount)) || Number(data.headcount) < 1 || Number(data.headcount) > 10000 || !/^\d{4}-\d{2}-\d{2}$/.test(data.start) || !Number.isFinite(Date.parse(data.start)))) fail(400, 'Enter a valid headcount and start date.');
      const result = db.prepare('INSERT INTO records(user_id,kind,data,created) VALUES(?,?,?,?)').run(user.id, kind, JSON.stringify(data), new Date().toISOString());
      return send({ id: Number(result.lastInsertRowid) }, 201);
    }
    fail(404, 'Not found');
  } catch (error) { if (!error.status) console.error(error); send({ error: error.status ? error.message : 'Something went wrong. Please try again.' }, error.status || 500); }
});
server.listen(port, process.env.HOST || '127.0.0.1', () => console.log(`Asepsis running at http://127.0.0.1:${port}`));
