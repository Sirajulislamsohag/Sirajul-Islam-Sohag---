import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Service is required'),
  budget: z.string().min(1, 'Budget is required'),
  message: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.string().email('Valid email is required')),
  password: z.string().min(1, 'Password is required'),
});

export const portfolioSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(5),
  thumbnail: z.string().optional(),
  client: z.string().optional(),
  metrics: z.array(z.object({ label: z.string(), value: z.string(), change: z.string().optional() })).optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional(),

  // Upwork-style Modal Data
  role: z.string().optional(),
  modalImages: z.array(z.string()).optional(),
  descriptionParagraphs: z.array(z.string()).optional(),
  bulletPoints: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  projectUrl: z.string().optional(),

  // Legacy fields
  challenge: z.string().optional(),
  solution: z.string().optional(),
  results: z.string().optional(),
  images: z.array(z.string()).optional(),
  seo: z.object({ metaTitle: z.string(), metaDescription: z.string(), ogImage: z.string().optional(), keywords: z.array(z.string()).optional() }).optional(),
});

export const blogSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  category: z.string().optional(),
  sections: z.array(z.object({
    title: z.string().optional(),
    paragraphs: z.array(z.string())
  })),
  excerpt: z.string().optional(),
  thumbnail: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(['draft', 'published']).optional(),
  seo: z.object({ metaTitle: z.string(), metaDescription: z.string(), ogImage: z.string().optional(), keywords: z.array(z.string()).optional() }).optional(),
});

export const certificateSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.string().optional(),
  category: z.string().optional(),
  issuer: z.string().optional(),
  issuingOrg: z.string().optional(),
  date: z.string().optional(),
  issueDate: z.string().optional(),
  url: z.string().optional(),
  credentialUrl: z.string().optional(),
  credentialId: z.string().optional(),
  description: z.string().optional(),
});

export const clientSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  logo: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  status: z.enum(['new', 'active', 'inactive']).optional(),
  projectStatus: z.enum(['pending', 'in-progress', 'completed', 'on-hold']).optional(),
  notes: z.string().optional(),
});

export const settingsSchema = z.object({
  siteName: z.string().optional(),
  siteDescription: z.string().optional(),
  logo: z.string().optional(),
  favicon: z.string().optional(),
  socialLinks: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    youtube: z.string().optional(),
    whatsapp: z.string().optional(),
  }).optional(),
  calendlyUrl: z.string().optional(),
  smtp: z.object({
    host: z.string(),
    port: z.number(),
    user: z.string(),
    pass: z.string(),
  }).optional(),
  analytics: z.object({ googleAnalyticsId: z.string().optional() }).optional(),
});
