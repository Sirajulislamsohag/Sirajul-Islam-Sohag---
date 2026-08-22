import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ClientModel } from '@/models/client';
import { authenticateRequest } from '@/lib/auth';
import { clientSchema } from '@/lib/validations';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const search = url.searchParams.get('search') || '';
    const status = url.searchParams.get('status') || '';

    const query: Record<string, unknown> = {};
    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      query.$or = [
        { name: { $regex: escaped, $options: 'i' } },
        { email: { $regex: escaped, $options: 'i' } },
        { phone: { $regex: escaped, $options: 'i' } },
        { company: { $regex: escaped, $options: 'i' } },
      ];
    }
    if (status) query.status = status;

    const total = await ClientModel.countDocuments(query);
    const items = await ClientModel.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
    return NextResponse.json({ success: true, data: items, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 } });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const parsed = clientSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    await connectDB();
    
    if (parsed.data.email) {
      const existing = await ClientModel.findOne({ email: parsed.data.email });
      if (existing) {
        return NextResponse.json({ success: false, error: 'A client with this email already exists' }, { status: 400 });
      }
    }

    const item = await ClientModel.create(parsed.data);
    return NextResponse.json({ success: true, data: item }, { status: 201 });
  } catch (error) {
    console.error('Add client error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
