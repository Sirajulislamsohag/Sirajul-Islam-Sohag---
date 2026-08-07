import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { CertificateModel } from '@/models/certificate';
import { authenticateRequest } from '@/lib/auth';
import { certificateSchema } from '@/lib/validations';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');

    if (process.env.MONGODB_URI) {
      await connectDB();
      const total = await CertificateModel.countDocuments();
      const items = await CertificateModel.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
      return NextResponse.json({ success: true, data: items, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
    }
  } catch (error) {
    console.warn('DB query skipped or failed, returning fallback empty certificates:', error);
  }

  return NextResponse.json({ success: true, data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } });
}

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const parsed = certificateSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    await connectDB();
    const item = await CertificateModel.create(parsed.data);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
