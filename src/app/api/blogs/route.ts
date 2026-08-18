import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';
import { authenticateRequest } from '@/lib/auth';
import { blogSchema } from '@/lib/validations';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '100');
    const tag = url.searchParams.get('tag') || '';
    const auth = authenticateRequest(req);

    if (process.env.MONGODB_URI) {
      await connectDB();
      const query: Record<string, unknown> = {};
      if (!auth) query.status = 'published';
      if (tag) query.tags = { $in: [tag] };
      const total = await BlogModel.countDocuments(query);
      const blogs = await BlogModel.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
      return NextResponse.json({ success: true, data: blogs, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
    }
  } catch (error) {
    console.warn('DB query skipped or failed, returning fallback empty blogs:', error);
  }

  return NextResponse.json({ success: true, data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } });
}

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const parsed = blogSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    await connectDB();
    const wordCount = parsed.data.sections?.reduce((acc: number, section: any) => {
      const sectionWords = section.paragraphs.reduce((pAcc: number, p: string) => pAcc + (p.split(' ').length || 0), 0);
      return acc + sectionWords;
    }, 0) || 0;
    const readTime = Math.ceil(wordCount / 200);
    const blog = await BlogModel.create({ ...parsed.data, readTime: Math.max(readTime, 1) });
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
