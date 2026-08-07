import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactModel } from '@/models/contact';
import { ClientModel } from '@/models/client';
import { PortfolioModel } from '@/models/portfolio';
import { BlogModel } from '@/models/blog';
import { NotificationModel } from '@/models/notification';
import { authenticateRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    await connectDB();
    const [totalContacts, totalClients, totalPortfolio, totalBlogs, unreadNotifications, recentContacts] = await Promise.all([
      ContactModel.countDocuments(),
      ClientModel.countDocuments(),
      PortfolioModel.countDocuments(),
      BlogModel.countDocuments(),
      NotificationModel.countDocuments({ read: false }),
      ContactModel.find().sort({ createdAt: -1 }).limit(5),
    ]);
    return NextResponse.json({ success: true, data: { totalContacts, totalClients, totalPortfolio, totalBlogs, unreadNotifications, recentContacts } });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
