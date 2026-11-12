import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book a Google Ads Consultation | Sirajul Islam Sohag',
  absoluteTitle: true,
  description:
    'Book a Google Ads consultation with Sirajul Islam Sohag to review campaign structure, tracking, wasted spend, lead quality and growth opportunities.',
  path: '/contact',
  imageAlt: 'Book a Google Ads consultation with Sirajul Islam Sohag',
  keywords: ['Google Ads consultation', 'PPC consultation', 'account review', 'campaign strategy', 'Sirajul Sohag'],
});

export default function ContactPage() {
  return (
    <>
      <div className="pt-20">
        <Contact headingAs="h1" />
      </div>
      <Footer />
    </>
  );
}
