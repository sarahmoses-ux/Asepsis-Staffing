import { MongoMemoryServer } from 'mongodb-memory-server-core';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function startTestDatabase() {
  const downloadDir = resolve('.artifacts/mongodb-binaries');
  await mkdir(downloadDir, { recursive: true });
  // A real MongoDB process, with an isolated temporary database for every test run.
  const mongo = await MongoMemoryServer.create({
    binary: { downloadDir },
    instance: { ip: '127.0.0.1', launchTimeout: 60000 },
    spawn: { windowsHide: true },
  });
  return { uri: mongo.getUri(), stop: () => mongo.stop() };
}
