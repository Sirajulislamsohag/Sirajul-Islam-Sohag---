import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';
import { authenticateRequest } from '@/lib/auth';
import { blogSchema } from '@/lib/validations';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
    }
    await connectDB();
    const item = await BlogModel.findById(id);
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: item });
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
    const parsed = blogSchema.partial().safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid input data' }, { status: 400 });
    }
    await connectDB();
    const updateData: Record<string, unknown> = { ...parsed.data };
    if (parsed.data.sections) {
      const totalWords = parsed.data.sections.reduce(
        (acc, sec) => acc + sec.paragraphs.join(' ').split(/\s+/).filter(Boolean).length,
        0
      );
      updateData.readTime = Math.max(Math.ceil(totalWords / 200), 1);
    }
    const item = await BlogModel.findByIdAndUpdate(id, { $set: updateData }, { new: true, runValidators: true });
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: item });
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
    const item = await BlogModel.findByIdAndDelete(id);
    if (!item) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
