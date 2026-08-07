import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
  title: string;
  slug: string;
  category: string;
  description: string;
  challenge?: string;
  solution?: string;
  results?: string;
  images: string[];
  thumbnail?: string;
  client?: string;
  metrics: { label: string; value: string; change?: string }[];
  tags: string[];
  featured: boolean;
  seo?: { metaTitle: string; metaDescription: string; ogImage?: string; keywords?: string[] };
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema = new Schema<IPortfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  challenge: String,
  solution: String,
  results: String,
  images: [String],
  thumbnail: String,
  client: String,
  metrics: [{ label: String, value: String, change: String }],
  tags: [String],
  featured: { type: Boolean, default: false },
  seo: { metaTitle: String, metaDescription: String, ogImage: String, keywords: [String] },
}, { timestamps: true });

export const PortfolioModel = mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
