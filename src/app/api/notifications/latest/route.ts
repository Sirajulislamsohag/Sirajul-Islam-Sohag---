import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { NotificationModel } from '@/models/notification';
import { authenticateRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    
    await connectDB();
    
    // Get total unread count
    const unreadCount = await NotificationModel.countDocuments({ read: false });
    
    // Get the absolute latest notification (regardless of read status)
    const latestNotification = await NotificationModel.findOne()
      .sort({ createdAt: -1 })
      .select('_id title message type createdAt');

    return NextResponse.json({ 
      success: true, 
      data: {
        unreadCount,
        latestNotification
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
