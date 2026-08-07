import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { NotificationModel } from '@/models/notification';
import { authenticateRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const unread = url.searchParams.get('unread');
    const query: Record<string, unknown> = {};
    if (unread === 'true') query.read = false;
    const total = await NotificationModel.countDocuments(query);
    const notifications = await NotificationModel.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
    const unreadCount = await NotificationModel.countDocuments({ read: false });
    return NextResponse.json({ success: true, data: notifications, unreadCount, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
