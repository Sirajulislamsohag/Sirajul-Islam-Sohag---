import { MetadataRoute } from 'next';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sirajmarketing.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      const blogs = await BlogModel.find({ status: 'published' }).select('slug updatedAt createdAt');
      blogPages = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.updatedAt || blog.createdAt || new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.warn('Sitemap blog fetching error:', error);
  }

  return [...staticPages, ...blogPages];
}
