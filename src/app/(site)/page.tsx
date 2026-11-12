import { Hero } from '@/components/sections/hero';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { Services } from '@/components/sections/services';
import { IndustryExpertise } from '@/components/sections/industry-expertise';
import { HowIBringSuccess } from '@/components/sections/how-i-bring-success';
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { Certificates } from '@/components/sections/certificates';
import { ClientReviews } from '@/components/sections/client-reviews';
import { CTASection } from '@/components/sections/cta-section';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { AboutWithImage } from '@/components/sections/about-with-image';
import { ToolsPlatformsIcons } from '@/components/sections/tools-platforms-icons';

 
 

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Expert & PPC Consultant | Sirajul Islam Sohag',
  absoluteTitle: true,
  description:
    'Certified Google Ads expert with 4+ years managing PPC for home service, local and e-commerce brands. More qualified leads, less wasted spend. Book a call.',
  path: '/',
  imageAlt: 'Sirajul Islam Sohag Google Ads expert and PPC consultant',
  keywords: ['Google Ads expert', 'PPC consultant', 'Google Ads specialist', 'performance marketing', 'Sirajul Islam Sohag'],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <AboutWithImage/>
      <Services />
      <PortfolioShowcase />
      <IndustryExpertise />
      <ToolsPlatformsIcons/>
      <HowIBringSuccess />
      <Certificates />
      <ClientReviews />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
