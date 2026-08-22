import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { SettingsModel } from '@/models/settings';
import { authenticateRequest } from '@/lib/auth';
import { settingsSchema } from '@/lib/validations';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export async function GET(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    if (process.env.MONGODB_URI) {
      await connectDB();
      let settings = await SettingsModel.findOne();
      if (!settings) settings = await SettingsModel.create({ siteName: 'Sirajul', siteDescription: 'Digital Marketing Consultant' });
      
      const safeSettings = settings.toObject ? settings.toObject() : JSON.parse(JSON.stringify(settings));
      if (safeSettings.smtp) {
        delete safeSettings.smtp.pass;
      }
      return NextResponse.json({ success: true, data: safeSettings });
    }
  } catch (error) {
    console.error('GET settings error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    data: {
      siteName: SITE_CONFIG.name,
      siteDescription: SITE_CONFIG.description,
      socialLinks: SOCIAL_LINKS,
      calendlyUrl: SITE_CONFIG.calendlyUrl,
    },
  });
}

export async function PUT(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const parsed = settingsSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid input' }, { status: 400 });
    await connectDB();
    let settings = await SettingsModel.findOne();
    if (settings) {
      if (parsed.data.siteName !== undefined) settings.siteName = parsed.data.siteName;
      if (parsed.data.siteDescription !== undefined) settings.siteDescription = parsed.data.siteDescription;
      if (parsed.data.logo !== undefined) settings.logo = parsed.data.logo;
      if (parsed.data.favicon !== undefined) settings.favicon = parsed.data.favicon;
      if (parsed.data.calendlyUrl !== undefined) settings.calendlyUrl = parsed.data.calendlyUrl;
      if (parsed.data.socialLinks) settings.socialLinks = { ...settings.socialLinks, ...parsed.data.socialLinks };
      if (parsed.data.seo) settings.seo = { ...settings.seo, ...parsed.data.seo };
      if (parsed.data.analytics) settings.analytics = { ...settings.analytics, ...parsed.data.analytics };
      if (parsed.data.smtp) {
        const existingPass = settings.smtp?.pass;
        settings.smtp = {
          host: parsed.data.smtp.host,
          port: parsed.data.smtp.port,
          user: parsed.data.smtp.user,
          pass: (parsed.data.smtp.pass && parsed.data.smtp.pass !== '••••••••') ? parsed.data.smtp.pass : existingPass,
        };
      }
      await settings.save();
    } else {
      settings = await SettingsModel.create(parsed.data);
    }
    
    // Sanitize response: Never return sensitive credentials
    const safeResponse = settings.toObject ? settings.toObject() : JSON.parse(JSON.stringify(settings));
    if (safeResponse.smtp) {
      delete safeResponse.smtp.pass;
    }
    return NextResponse.json({ success: true, data: safeResponse });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  return PUT(req);
}
