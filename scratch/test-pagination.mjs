import fs from 'fs';
import mongoose from 'mongoose';

// Minimal .env parser
const env = fs.readFileSync('.env.local', 'utf8').split('\n').reduce((acc, line) => {
  const match = line.match(/^([^#\s]+?)=(.*)$/);
  if (match) acc[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  return acc;
}, {});

// Mock contact schema
const contactSchema = new mongoose.Schema({
  name: String, email: String, service: String, budget: String, message: String, status: { type: String, default: 'new' }
}, { timestamps: true });
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

async function testPagination() {
  console.log('--- Starting Pagination Test ---');
  
  // 1. Get Auth Token
  console.log('1. Logging in as admin...');
  const loginRes = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@siraj.com', password: 'Siraj@2026Pass' })
  });
  const loginData = await loginRes.json();
  
  if (!loginData.success) {
    console.error('Login failed:', loginData);
    process.exit(1);
  }
  const token = loginData.data.token;
  console.log('✅ Login successful, token retrieved.');

  // 2. Insert mock data directly into DB
  console.log('2. Connecting to MongoDB to insert mock contacts...');
  await mongoose.connect(env.MONGODB_URI);
  console.log('✅ Connected to MongoDB.');

  await Contact.deleteMany({ email: /mock_pagination_test/ });

  const mockContacts = [];
  for (let i = 0; i < 25; i++) {
    mockContacts.push({
      name: `Pagination Test User ${i}`,
      email: `mock_pagination_test_${i}@example.com`,
      service: 'Web Development',
      budget: '$1000+',
      message: 'Testing pagination feature',
      status: 'new'
    });
  }

  await Contact.insertMany(mockContacts);
  console.log(`✅ Inserted 25 mock contacts.`);

  // 3. Test API GET /api/contacts?page=1&limit=20
  console.log('3. Fetching Page 1 (Limit: 20)...');
  const page1Res = await fetch('http://localhost:3000/api/contacts?page=1&limit=20', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const page1Data = await page1Res.json();
  
  if (!page1Data.success) {
    console.error('Failed to fetch page 1:', page1Data);
    process.exit(1);
  }
  console.log(`✅ Page 1 fetched: ${page1Data.data.length} items returned. (Expected: 20)`);
  console.log(`✅ Total Pages calculated as: ${page1Data.pagination.totalPages}`);

  // 4. Test API GET /api/contacts?page=2&limit=20
  console.log('4. Fetching Page 2 (Limit: 20)...');
  const page2Res = await fetch('http://localhost:3000/api/contacts?page=2&limit=20', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const page2Data = await page2Res.json();
  
  if (!page2Data.success) {
    console.error('Failed to fetch page 2:', page2Data);
    process.exit(1);
  }
  console.log(`✅ Page 2 fetched: ${page2Data.data.length} items returned.`);
  
  if (page1Data.data.length === 20 && page2Data.data.length > 0) {
      console.log('🎉 PAGINATION IS WORKING PERFECTLY! (Limit 20 confirmed)');
  } else {
      console.log('❌ PAGINATION TEST FAILED!');
  }

  // 5. Cleanup
  console.log('5. Cleaning up mock data...');
  const deleted = await Contact.deleteMany({ email: /mock_pagination_test/ });
  console.log(`✅ Deleted ${deleted.deletedCount} mock contacts.`);
  
  await mongoose.disconnect();
  console.log('--- Pagination Test Completed Successfully ---');
}

testPagination().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
