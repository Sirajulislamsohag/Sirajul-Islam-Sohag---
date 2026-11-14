 
import { About } from '@/components/sections/about';
 
import { Certificates } from '@/components/sections/certificates';
import { ClientReviews } from '@/components/sections/client-reviews';
 
import { Contact } from '@/components/sections/contact';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/sections/footer';
import { ToolsPlatformsIcons } from '@/components/sections/tools-platforms-icons';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About Sirajul Islam Sohag | Certified Google Ads Expert',
  absoluteTitle: true,
  description:
    'Meet Sirajul Islam Sohag, a certified Google Ads and analytics specialist with 3+ years running Search, PMax and tracking for clients worldwide.',
  path: '/about',
  imageAlt: 'Sirajul Islam Sohag certified Google Ads and analytics specialist',
  keywords: ['Sirajul Islam Sohag', 'Google Ads specialist', 'PPC expert Bangladesh', 'certifications', 'performance marketer'],
});

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
      </div>
      <ToolsPlatformsIcons/>
      <Certificates />
      <ClientReviews/>
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
