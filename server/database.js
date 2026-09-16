import { MongoClient } from 'mongodb';
import { randomUUID } from 'node:crypto';

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri || !/^mongodb(?:\+srv)?:\/\//.test(uri) || uri.includes('<')) {
    throw new Error('Set MONGODB_URI to your MongoDB connection string in Render Environment settings.');
  }
  let client;
  try {
    client = new MongoClient(uri, { serverSelectionTimeoutMS: 15000, maxPoolSize: 10 });
    await client.connect();
    const database = client.db(process.env.MONGODB_DB || 'asepsis');
    const users = database.collection('users');
    const sessions = database.collection('sessions');
    const records = database.collection('records');
    const saved = database.collection('saved_jobs');
    await Promise.all([
      users.createIndex({ email: 1 }, { unique: true }),
      sessions.createIndex({ expires: 1 }, { expireAfterSeconds: 0 }),
      records.createIndex({ userId: 1, created: -1 }),
      saved.createIndex({ userId: 1, jobId: 1 }, { unique: true }),
    ]);
    const account = user => user ? { id: user._id, name: user.name, email: user.email, password: user.password, role: user.role } : null;
    return {
      close: () => client.close(),
      findUser: async email => account(await users.findOne({ email })),
      createUser: async (name, email, password, role) => {
        const user = { _id: randomUUID(), name, email, password, role };
        await users.insertOne(user);
        return account(user);
      },
      sessionUser: async token => {
        // TTL removal is asynchronous; enforce expiration on every lookup too.
        const session = await sessions.findOne({ _id: token, expires: { $gt: new Date() } });
        return session ? account(await users.findOne({ _id: session.userId })) : null;
      },
      deleteSession: token => sessions.deleteOne({ _id: token }),
      createSession: (token, userId, expires) => sessions.insertOne({ _id: token, userId, expires: new Date(expires) }),
      getAccount: async userId => {
        const [activity, jobs] = await Promise.all([
          records.find({ userId }).sort({ created: -1, _id: -1 }).toArray(),
          saved.find({ userId }).sort({ jobId: 1 }).toArray(),
        ]);
        return { records: activity.map(r => ({ id: r._id, kind: r.kind, data: r.data, created: r.created.toISOString() })), saved: jobs.map(j => j.jobId) };
      },
      saveJob: async (userId, jobId, keep) => {
        if (!keep) return saved.deleteOne({ userId, jobId });
        try { await saved.updateOne({ userId, jobId }, { $setOnInsert: { userId, jobId } }, { upsert: true }); }
        catch (error) { if (error.code !== 11000) throw error; }
      },
      createRecord: async (userId, kind, data) => {
        const id = randomUUID();
        await records.insertOne({ _id: id, userId, kind, data, created: new Date() });
        return id;
      },
    };
  } catch (error) {
    await client?.close();
    // Do not log connection strings or raw driver errors containing credentials.
    if (error.code === 18) throw new Error('MongoDB authentication failed. Check the database username and password in MONGODB_URI.');
    throw new Error('Cannot initialize MongoDB. Check MONGODB_URI, database permissions, and the Atlas Network Access list.');
  }
}
