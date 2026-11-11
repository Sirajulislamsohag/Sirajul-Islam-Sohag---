import { SITE_URL, PERSON_NAME, BRAND_NAME, LINKEDIN_URL, absoluteUrl, jsonLdScript } from '@/lib/seo';

/**
 * Site-wide structured data: WebSite, Person and ProfessionalService.
 * Rendered once in the root layout so every page carries it.
 */
export function SiteSchema() {
  const personId = `${SITE_URL}/#person`;
  const businessId = `${SITE_URL}/#business`;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { '@id': personId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: PERSON_NAME,
        url: absoluteUrl('/about'),
        image: absoluteUrl('/siraj.webp'),
        jobTitle: 'Certified Google Ads Expert and Web Analyst',
        worksFor: { '@id': businessId },
        sameAs: [LINKEDIN_URL],
        knowsAbout: [
          'Google Ads',
          'Pay-per-click advertising',
          'Performance Max',
          'Google Shopping',
          'Google Analytics 4',
          'Google Tag Manager',
          'Conversion tracking',
          'Server-side tracking',
        ],
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Jahangirnagar University' },
      },
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: BRAND_NAME,
        url: SITE_URL,
        image: absoluteUrl('/siraj.webp'),
        description:
          'Google Ads management, conversion tracking and PPC consulting for home service, local service and e-commerce businesses.',
        founder: { '@id': personId },
        email: 'mailto:sirajulislamshoag697@gmail.com',
        telephone: '+8801793859694',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'BD',
        },
        areaServed: ['US', 'AU', 'GB', 'CA', 'DE'],
        sameAs: [LINKEDIN_URL],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Google Ads Services',
          itemListElement: [
            'Google Ads Search Campaigns',
            'Performance Max & Shopping Campaigns',
            'Display & YouTube Ads',
            'GA4 & Conversion Tracking Setup',
            'Google Ads Account Audit',
            'Conversion Rate Optimization',
          ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
        },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(data)} />;
}
