import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { SettingsModel } from '@/models/settings';
import { authenticateRequest } from '@/lib/auth';
import { settingsSchema } from '@/lib/validations';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export async function GET() {
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      let settings = await SettingsModel.findOne();
      if (!settings) settings = await SettingsModel.create({ siteName: 'Sirajul', siteDescription: 'Digital Marketing Consultant' });
      const publicSettings = { siteName: settings.siteName, siteDescription: settings.siteDescription, logo: settings.logo, favicon: settings.favicon, seo: settings.seo, socialLinks: settings.socialLinks, calendlyUrl: settings.calendlyUrl, analytics: settings.analytics };
      return NextResponse.json({ success: true, data: publicSettings });
    }
  } catch (error) {
    console.warn('DB query skipped or failed, returning static fallback:', error);
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
    if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0].message }, { status: 400 });
    await connectDB();
    let settings = await SettingsModel.findOne();
    if (settings) {
      Object.assign(settings, parsed.data);
      await settings.save();
    } else {
      settings = await SettingsModel.create(parsed.data);
    }
    return NextResponse.json({ success: true, data: settings });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
