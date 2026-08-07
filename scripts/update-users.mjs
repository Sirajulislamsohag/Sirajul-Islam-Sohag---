import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = 'mongodb+srv://arifhossainaslam6_db_user:frfrsYHduNyXjdxh@clusterdb.nabjjrb.mongodb.net/database_DB?appName=ClusterDB';
const PASSWORD = 'Siraj@2026Pass';

async function updateAllAdmins() {
  console.log('Connecting to database_DB...');
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;
  const hash = await bcrypt.hash(PASSWORD, 12);

  const emails = [
    'sirajulislamshoag697@gmail.com',
    'sirajulislamsohag697@gmail.com',
    'freemovie257@gmail.com',
    'admin@siraj.com',
  ];

  for (const email of emails) {
    const doc = {
      email,
      password: hash,
      name: 'Sirajul Islam Sohag',
      role: 'admin',
      updatedAt: new Date(),
    };

    await db.collection('users').updateOne({ email }, { $set: doc }, { upsert: true });
    await db.collection('user').updateOne({ email }, { $set: doc }, { upsert: true });
    console.log(`✅ Configured admin account for: ${email}`);
  }

  console.log('Done!');
  await mongoose.disconnect();
  process.exit(0);
}

updateAllAdmins().catch((err) => {
  console.error(err);
  process.exit(1);
});
