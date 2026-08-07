import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactModel } from '@/models/contact';
import { authenticateRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Message', 'Status', 'Date'];
    const rows = contacts.map((c) => [c.name, c.email, c.phone || '', c.company || '', c.service, c.budget, c.message.replace(/,/g, ';'), c.status, new Date(c.createdAt).toLocaleDateString()]);
    const csv = [headers.join(','), ...rows.map((r) => r.map((v) => `"${v}"`).join(','))].join('\n');
    return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename=contacts.csv' } });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
