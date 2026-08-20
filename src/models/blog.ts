import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogSection {
  title?: string;
  paragraphs: string[];
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  category?: string;
  sections: IBlogSection[];
  excerpt?: string;
  thumbnail?: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published';
  readTime: number;
  seo?: { metaTitle: string; metaDescription: string; ogImage?: string; keywords?: string[] };
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String },
  sections: [{
    title: { type: String },
    paragraphs: [{ type: String }]
  }],
  excerpt: String,
  thumbnail: String,
  tags: [String],
  author: { type: String, default: 'Sirajul Islam Sohag' },
  status: { type: String, default: 'draft', enum: ['draft', 'published'] },
  readTime: { type: Number, default: 5 },
  seo: { metaTitle: String, metaDescription: String, ogImage: String, keywords: [String] },
}, { timestamps: true });

export const BlogModel = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
