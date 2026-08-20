import { Hero } from '@/components/sections/hero';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { Services } from '@/components/sections/services';
import { IndustryExpertise } from '@/components/sections/industry-expertise';
import { VideoShowcase } from '@/components/sections/video-showcase';
import { HowIBringSuccess } from '@/components/sections/how-i-bring-success';
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { Certificates } from '@/components/sections/certificates';
import { ClientReviews } from '@/components/sections/client-reviews';
import { CTASection } from '@/components/sections/cta-section';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { AboutWithImage } from '@/components/sections/about-with-image';
import { ToolsPlatformsIcons } from '@/components/sections/tools-platforms-icons';

 
 

export const metadata: Metadata = {
  title: 'Sirajul | Premium Digital Marketing Consultant',
  description: 'Expert Google Ads, Facebook Ads, SEO & Analytics specialist. Helping businesses generate leads, scale sales, and build their online presence through data-driven strategies.',
  keywords: ['digital marketing', 'google ads', 'facebook ads', 'seo', 'analytics', 'ppc', 'consultant'],
  openGraph: {
    title: 'Sirajul | Premium Digital Marketing Consultant',
    description: 'Expert Google Ads, Facebook Ads, SEO & Analytics specialist.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <AboutWithImage/>
      <Services />
      <IndustryExpertise />
      <ToolsPlatformsIcons/>
      <HowIBringSuccess />
      <PortfolioShowcase />
      <Certificates />
      <ClientReviews />
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}
