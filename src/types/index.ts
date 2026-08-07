// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Services
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Portfolio
export interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  category: 'google-ads' | 'facebook-ads' | 'seo' | 'analytics' | 'branding';
  description: string;
  challenge: string;
  solution: string;
  results: string;
  images: string[];
  thumbnail: string;
  client: string;
  metrics: {
    label: string;
    value: string;
    change?: string;
  }[];
  tags: string[];
  featured: boolean;
  seo: SEOData;
  createdAt: string;
  updatedAt: string;
}

// Blog
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnail: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published';
  seo: SEOData;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

// Certificate
export interface Certificate {
  _id: string;
  title: string;
  image: string;
  category: string;
  issuingOrg: string;
  issueDate: string;
  credentialUrl?: string;
  createdAt: string;
}

// Contact
export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ip?: string;
  createdAt: string;
}

// Client
export interface Client {
  _id: string;
  name: string;
  company: string;
  logo: string;
  email: string;
  status: 'active' | 'inactive';
  projectStatus: 'pending' | 'in-progress' | 'completed' | 'on-hold';
  notes: string;
  timeline: {
    date: string;
    event: string;
    description: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

// Review
export interface Review {
  id: string;
  name: string;
  company: string;
  role: string;
  photo: string;
  rating: number;
  text: string;
}

// Timeline
export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

// Notification
export interface Notification {
  _id: string;
  type: 'contact' | 'client' | 'system';
  title: string;
  message: string;
  read: boolean;
  relatedId?: string;
  createdAt: string;
}

// Settings
export interface SiteSettings {
  _id: string;
  siteName: string;
  siteDescription: string;
  logo: string;
  favicon: string;
  seo: SEOData;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
  };
  calendlyUrl: string;
  smtp: {
    host: string;
    port: number;
    user: string;
    pass: string;
  };
  analytics: {
    googleAnalyticsId?: string;
  };
}

// SEO
export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  keywords?: string[];
}

// Auth
export interface User {
  _id: string;
  email: string;
  name: string;
  role: 'admin';
}

// API Response
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Stats
export interface DashboardStats {
  totalContacts: number;
  totalClients: number;
  totalPortfolio: number;
  totalBlogs: number;
  unreadNotifications: number;
  recentContacts: ContactMessage[];
}
