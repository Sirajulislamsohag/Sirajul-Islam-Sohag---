import { MetadataRoute } from 'next';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';
import { INDUSTRY_PAGES, industryHref } from '@/content/industries';
import { CASE_STUDIES, caseStudyHref } from '@/content/case-studies';
import { SERVICE_PAGES, serviceHref } from '@/content/services';

// Revalidate sitemap at most every hour (ISR) for fast responses & fresh indexation
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sirajulislamsohag.com';
  // Strip trailing slashes to guarantee clean canonical URLs without double slashes
  const baseUrl = rawUrl.replace(/\/+$/, '');
  const now = new Date();

  // Core Static Pages with calculated SEO priority hierarchy
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...CASE_STUDIES.map((c) => ({
      url: `${baseUrl}${caseStudyHref(c.slug)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...INDUSTRY_PAGES.map((page) => ({
      url: `${baseUrl}${industryHref(page.slug)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...SERVICE_PAGES.map((page) => ({
      url: `${baseUrl}${serviceHref(page.slug)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  // Dynamic Blog Posts from Database
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      const blogs = await BlogModel.find({ status: 'published' })
        .select('slug updatedAt createdAt')
        .sort({ updatedAt: -1, createdAt: -1 })
        .lean();

      blogPages = blogs
        .filter((blog) => blog.slug && typeof blog.slug === 'string')
        .map((blog) => ({
          url: `${baseUrl}/blog/${encodeURIComponent(blog.slug.trim())}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : (blog.createdAt ? new Date(blog.createdAt) : now),
          changeFrequency: 'monthly',
          priority: 0.7,
        }));
    }
  } catch (error) {
    console.warn('Sitemap dynamic blog fetching error:', error);
  }

  return [...staticPages, ...blogPages];
}
