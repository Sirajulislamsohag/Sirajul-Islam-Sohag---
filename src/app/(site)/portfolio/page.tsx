import { PageHeader } from '@/components/sections/page-header';
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Sirajul - Digital Marketing Results',
  description: 'Explore real digital marketing case studies and campaign results across Google Ads, Meta Ads, SEO, and Analytics scaling e-commerce and B2B brands.',
  keywords: ['digital marketing portfolio', 'google ads case study', 'facebook ads results', 'seo success stories'],
};

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-24 md:pt-32">
        <PortfolioShowcase />
      </div>
      <TrustedBrands />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
