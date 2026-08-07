import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sirajul - Digital Marketing Consultant',
  description: 'Get in touch with Sirajul Islam Sohag for Google Ads management, Meta Ads scaling, SEO audits, and custom performance marketing strategies.',
  keywords: ['contact sirajul', 'book marketing consultation', 'hire google ads expert', 'ppc consultant contact'],
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 md:pt-32">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
