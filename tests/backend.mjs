import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { startTestDatabase } from './mongo-helper.mjs';
const mongo = await startTestDatabase();
const origin = 'http://127.0.0.1:5191';
let server;
async function start() {
  server = spawn(process.execPath, ['server/index.js'], { env: { ...process.env, NODE_ENV: 'development', HOST: '127.0.0.1', APP_ORIGIN: origin, PORT: '5191', MONGODB_URI: mongo.uri, MONGODB_DB: 'backend_test' }, windowsHide: true, stdio: ['ignore','pipe','pipe'] });
  let log = ''; server.stderr.on('data', x => log += x);
  for (let i=0;i<200;i++) { try { if ((await fetch(origin + '/api/session')).ok) return; } catch {} await new Promise(r => setTimeout(r,100)); }
  throw new Error(log || 'Server did not start');
}
async function stop() { if (server.exitCode !== null) return; await new Promise(r => { server.once('exit', r); server.kill(); }); }
async function call(path, body, cookie, extra = {}) {
  const response = await fetch(origin + '/api/' + path, { method: body === undefined ? 'GET' : 'POST', headers: { 'Content-Type':'application/json', ...(cookie ? { cookie } : {}), ...extra }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
  return { status: response.status, body: await response.json(), cookie: response.headers.get('set-cookie')?.split(';')[0], headers: response.headers };
}
try {
  await start();
  assert.equal((await call('account')).status, 401);
  const worker = { name:'Test Worker', email:'worker@example.com', password:'secure test password', role:'worker' };
  const signup = await call('signup', worker); assert.equal(signup.status,200); assert.ok(signup.headers.get('set-cookie').includes('HttpOnly')); assert.equal(signup.body.user.password, undefined);
  const cookie = signup.cookie;
  const { MongoClient } = await import('mongodb');
  const inspect = new MongoClient(mongo.uri);
  try {
    await inspect.connect();
    const stored = await inspect.db('backend_test').collection('users').findOne({ email: worker.email });
    assert.notEqual(stored.password, worker.password);
    assert.equal(stored.password.split(':').length, 2);
    const session = await inspect.db('backend_test').collection('sessions').findOne({ userId: signup.body.user.id });
    assert.equal(session._id.length, 64);
    assert.ok(!cookie.includes(session._id));
    await inspect.db('backend_test').collection('sessions').insertOne({ _id: createHash('sha256').update('expired').digest('hex'), userId: stored._id, expires: new Date(0) });
  } finally { await inspect.close(); }
  assert.equal((await call('account', undefined, 'asepsis_session=expired')).status,401);
  assert.equal((await call('signup', worker)).status,409);
  assert.equal((await call('login', { ...worker, password:'incorrect password' })).status,401);
  assert.equal((await call('saved', {jobId:1,saved:true},cookie, {origin:'https://evil.example'})).status,403);
  assert.equal((await call('saved', {jobId:1,saved:true},cookie)).status,200);
  assert.equal((await call('saved', {jobId:1,saved:true},cookie)).status,200);
  assert.equal((await call('login', {email: { '$ne': null }, password: worker.password})).status,400);
  assert.equal((await call('records', {kind:'application',data:{}},cookie)).status,400);
  const data = {first:'Test',last:'Worker',phone:'12345678',email:worker.email,zip:'10001',consent:true,over18:true,jobId:1,jobTitle:'Test role'};
  assert.equal((await call('records', {kind:'application',data},cookie)).status,201);
  assert.equal((await call('records', {kind:'request',data},cookie)).status,403);
  const employer = await call('signup', {...worker,email:'employer@example.com',role:'employer'});
  assert.equal(employer.status,200);
  assert.deepEqual((await call('account',undefined,employer.cookie)).body, {records:[],saved:[]});
  assert.equal((await call('records',{kind:'request',data:{role:'Welder',start:'2026-10-01',site:'Site',cityState:'Lagos',contact:'Test',company:'Example',email:'employer@example.com',phone:'12345',headcount:'2'}},employer.cookie)).status,201);
  await stop(); await start();
  const account = await call('account',undefined,cookie); assert.equal(account.body.records.length,1); assert.deepEqual(account.body.saved,[1]);
  assert.equal((await call('logout',{},cookie)).status,200);
  assert.equal((await call('account',undefined,cookie)).status,401);
  assert.equal((await call('login',worker)).status,200);
  console.log('PASS: signup, login, validation, cookies, origin protection, role checks, account isolation, persistence, and logout.');
} finally { if (server) await stop(); await mongo.stop(); }
