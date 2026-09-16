import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

for (const uri of ['', 'invalid-connection-string']) {
  const result = spawnSync(process.execPath, ['server/index.js'], {
    env: { ...process.env, NODE_ENV: 'production', MONGODB_URI: uri, DATA_DIR: '/var/data' },
    encoding: 'utf8', windowsHide: true, timeout: 10000,
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Set MONGODB_URI/);
  assert.doesNotMatch(result.stderr, /EACCES|mkdir|invalid-connection-string/);
}
console.log('PASS: missing or malformed MongoDB configuration gives a clear error without using the old disk path.');
