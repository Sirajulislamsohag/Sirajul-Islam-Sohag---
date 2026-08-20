import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
  // Card Data
  title: string;
  slug: string;
  category: string;
  description: string;
  thumbnail?: string;
  metrics: { label: string; value: string; change?: string }[];
  tags: string[];
  featured: boolean;
  client?: string;

  // Modal Data (Upwork Portfolio Style)
  role?: string;
  modalImages?: string[]; // 3 to 6 slider images
  descriptionParagraphs?: string[]; // Multiple paragraphs
  bulletPoints?: string[]; // Unordered list items
  skills?: string[]; // Skills and deliverables
  projectUrl?: string; // Optional live link

  // Legacy fields
  challenge?: string;
  solution?: string;
  results?: string;
  images?: string[];

  seo?: { metaTitle: string; metaDescription: string; ogImage?: string; keywords?: string[] };
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
  {
    // Card Data
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: String,
    metrics: [{ label: String, value: String, change: String }],
    tags: [String],
    featured: { type: Boolean, default: false },
    client: String,

    // Modal Data (Upwork Style)
    role: String,
    modalImages: [String],
    descriptionParagraphs: [String],
    bulletPoints: [String],
    skills: [String],
    projectUrl: String,

    // Legacy fields
    challenge: String,
    solution: String,
    results: String,
    images: [String],

    seo: { metaTitle: String, metaDescription: String, ogImage: String, keywords: [String] },
  },
  { timestamps: true }
);

export const PortfolioModel =
  mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
