import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Blog - Tips, Strategy & Guides',
  description:
    'Practical Google Ads guides on Search campaigns, Performance Max, negative keywords, conversion tracking and lowering cost per lead, written by a certified Google Ads expert.',
  path: '/blog',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
