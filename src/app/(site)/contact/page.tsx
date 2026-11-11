import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact - Book a Free Google Ads Audit',
  description:
    'Book a free Google Ads account audit or strategy call with Sirajul Islam Sohag. Get a clear plan to cut wasted spend and get more qualified leads.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
