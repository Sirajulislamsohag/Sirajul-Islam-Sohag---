 
import { About } from '@/components/sections/about';
 
import { Certificates } from '@/components/sections/certificates';
import { ClientReviews } from '@/components/sections/client-reviews';
 
import { Contact } from '@/components/sections/contact';
import { CTASection } from '@/components/sections/cta-section';
import { Footer } from '@/components/sections/footer';
import { ToolsPlatformsIcons } from '@/components/sections/tools-platforms-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Sirajul - Digital Marketing Consultant',
  description: 'Learn more about Sirajul Islam Sohag, a performance digital marketer with 5+ years of experience helping 200+ businesses scale revenue through Google Ads, Meta Ads, and SEO.',
  keywords: ['about sirajul', 'digital marketing consultant background', 'google ads expert bio', 'marketing strategist'],
};

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
