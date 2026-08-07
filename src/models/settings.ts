import mongoose, { Schema, Document } from 'mongoose';

export interface ISettings extends Document {
  siteName: string;
  siteDescription: string;
  logo?: string;
  favicon?: string;
  seo?: { metaTitle: string; metaDescription: string; ogImage?: string; keywords?: string[] };
  socialLinks?: Record<string, string>;
  calendlyUrl?: string;
  smtp?: { host: string; port: number; user: string; pass: string };
  analytics?: { googleAnalyticsId?: string };
}

const SettingsSchema = new Schema<ISettings>({
  siteName: { type: String, default: 'Sirajul' },
  siteDescription: String,
  logo: String,
  favicon: String,
  seo: { metaTitle: String, metaDescription: String, ogImage: String, keywords: [String] },
  socialLinks: { type: Schema.Types.Mixed },
  calendlyUrl: String,
  smtp: { host: String, port: Number, user: String, pass: String },
  analytics: { googleAnalyticsId: String },
}, { timestamps: true });

export const SettingsModel = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
