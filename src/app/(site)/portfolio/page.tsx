import { PageHeader } from '@/components/sections/page-header';
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Case Studies & PPC Results | Sirajul Sohag',
  absoluteTitle: true,
  description:
    'See Google Ads and PPC case studies showing lead growth, ROAS gains, lower CPL and campaign scaling across local services and e-commerce brands.',
  path: '/portfolio',
  imageAlt: 'Google Ads case studies and PPC campaign performance results',
  keywords: ['Google Ads case studies', 'PPC results', 'ROAS', 'lead generation', 'portfolio'],
});

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-20">
        <PortfolioShowcase enablePagination={true} itemsPerPage={6}
          headingAs="h1"
          heading="Google Ads Case Studies & PPC Results"
          subheading="PPC case studies and Google Ads results from real campaigns: performance marketing case studies across lead generation and e-commerce. Click any case study for the strategy and deliverables."
        />
      </div>
      <TrustedBrands />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
