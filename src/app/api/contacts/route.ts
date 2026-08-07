import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { ContactModel } from '@/models/contact';
import { NotificationModel } from '@/models/notification';
import { contactSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendOwnerNotification, sendCustomerConfirmation } from '@/lib/email';
import { authenticateRequest } from '@/lib/auth';

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
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }
    if (status) query.status = status;
    
    const total = await ContactModel.countDocuments(query);
    const contacts = await ContactModel.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
      
    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 }
    });
  } catch (error) {
    console.error('GET contacts error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Rate limit: Max 5 submissions per minute per IP
    if (!checkRateLimit(ip, 5, 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }

    // Optional MongoDB storage (graceful if DB not configured)
    let contactId = null;
    try {
      if (process.env.MONGODB_URI) {
        await connectDB();
        const contact = await ContactModel.create({ ...parsed.data, ip });
        contactId = contact._id.toString();
        
        // Create Dashboard Notification
        await NotificationModel.create({
          type: 'contact',
          title: `New Lead: ${parsed.data.name}`,
          message: `${parsed.data.name} is interested in ${parsed.data.service}. Budget: ${parsed.data.budget}`,
          relatedId: contactId
        });
      }
    } catch (dbError) {
      console.warn('Database save skipped or failed:', dbError);
    }

    // Nodemailer Email dispatch (Owner notification + Customer receipt)
    try {
      await Promise.all([
        sendOwnerNotification(parsed.data),
        sendCustomerConfirmation(parsed.data.email, parsed.data.name),
      ]);
    } catch (emailError) {
      console.error('Email dispatch error:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received.',
        data: { id: contactId, name: parsed.data.name },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('POST contact handler error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
