 
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
  title: 'About Sirajul Islam Sohag - Certified Google Ads Expert',
  absoluteTitle: true,
  description:
    'Meet Sirajul Islam Sohag, a certified Google Ads expert and web analyst managing Search, Performance Max and conversion tracking for businesses in the USA, Australia, UK and Europe.',
  path: '/about',
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
