import { PageHeader } from '@/components/sections/page-header';
import { PortfolioShowcase } from '@/components/sections/portfolio-showcase';
import { TrustedBrands } from '@/components/sections/trusted-brands';
import { ClientReviews } from '@/components/sections/client-reviews';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Google Ads Case Studies & Results',
  description:
    'Google Ads case studies and campaign results across Search, Performance Max, Shopping and conversion tracking for lead generation and e-commerce businesses.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-20">
        <PortfolioShowcase enablePagination={true} itemsPerPage={6} />
      </div>
      <TrustedBrands />
      <ClientReviews />
      <Contact />
      <Footer />
    </>
  );
}
