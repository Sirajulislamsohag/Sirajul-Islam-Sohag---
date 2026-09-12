import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sirajulislamsohag.com';
  const baseUrl = rawUrl.replace(/\/+$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/login'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
