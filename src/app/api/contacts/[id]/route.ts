import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { ContactModel } from '@/models/contact';
import { authenticateRequest } from '@/lib/auth';
import { contactPatchSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
    }
    await connectDB();
    const contact = await ContactModel.findById(id);
    if (!contact) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
    }
    const body = await req.json();
    const parsed = contactPatchSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid input data' }, { status: 400 });
    }
    await connectDB();
    const contact = await ContactModel.findByIdAndUpdate(id, { $set: parsed.data }, { new: true, runValidators: true });
    if (!contact) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
    }
    await connectDB();
    const contact = await ContactModel.findByIdAndDelete(id);
    if (!contact) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
