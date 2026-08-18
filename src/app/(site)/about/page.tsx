import { PageHeader } from '@/components/sections/page-header';
import { About } from '@/components/sections/about';
import { Timeline } from '@/components/sections/timeline';
import { Certificates } from '@/components/sections/certificates';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Sirajul - Digital Marketing Consultant',
  description: 'Learn more about Sirajul Islam Sohag, a performance digital marketer with 5+ years of experience helping 200+ businesses scale revenue through Google Ads, Meta Ads, and SEO.',
  keywords: ['about sirajul', 'digital marketing consultant background', 'google ads expert bio', 'marketing strategist'],
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 md:pt-32">
        <About />
      </div>
      <Certificates />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
