import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Blog | PPC Strategy, PMax & Tracking',
  absoluteTitle: true,
  description:
    'Read practical Google Ads guides on Search, PMax, Shopping, bidding, tracking, CRO and lead generation for local service and e-commerce businesses.',
  path: '/blog',
  imageAlt: 'Google Ads PPC strategy and performance marketing blog',
  keywords: ['Google Ads blog', 'PPC blog', 'PMax', 'Google Shopping', 'conversion tracking'],
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
