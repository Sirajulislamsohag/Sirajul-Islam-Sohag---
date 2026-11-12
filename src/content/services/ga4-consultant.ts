import type { ServicePage } from '../types';

export const ga4Consultant: ServicePage = {
  slug: 'ga4-consultant',
  name: 'GA4 Consulting',

  seoTitle: 'GA4 Consultant | Google Analytics 4 Setup & Audits',
  metaDescription:
    'GA4 consulting for event tracking, e-commerce measurement, funnels, attribution and reporting so marketing decisions are based on reliable analytics data.',
  imageAlt: 'GA4 consultant reviewing Google Analytics 4 events and funnels',
  tags: ['GA4 consultant', 'Google Analytics 4', 'analytics audit', 'event tracking', 'attribution'],
  primaryKeyword: { keyword: 'ga4 consultant', sv: 590, kd: 39 },
  secondaryKeywords: [
    { keyword: 'google analytics 4 consultant', sv: 480, kd: 42 },
    { keyword: 'ga4 expert', sv: 720, kd: 44 },
    { keyword: 'google analytics consultant', sv: 1300, kd: 51 },
  ],
  searchIntent: 'Commercial: businesses that need GA4 set up properly, audited or made useful for marketing decisions.',

  h1: 'GA4 Consultant',
  heroHeadline: 'Google Analytics 4 that answers real questions about leads, sales and marketing',
  heroText:
    'Most GA4 properties are installed but not configured. Events are default, key events are missing or wrong, and the reports do not answer the questions a business owner actually has. I set up, audit and fix GA4 so you can see where leads and sales come from, how your funnel performs and which channels deserve more budget.',
  valueProps: [
    'Key events that match your real conversions, aligned with Google Ads',
    'E-commerce and lead funnels you can read without a data analyst',
    'Attribution and channel reporting that holds up against ad platform claims',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86',
    alt: 'Analytics dashboard interface with traffic and engagement data',
    credit: 'https://unsplash.com/photos/graphical-user-interface--WXQm_NTK0U',
  },

  whoItsFor: [
    'Businesses that migrated to GA4 and never finished the setup',
    'E-commerce stores that need accurate purchase and funnel data',
    'Lead generation companies that want to see which channels produce real leads',
    'Marketing teams that need GA4 and Google Ads to agree',
  ],

  problems: [
    {
      title: 'Default setup, no real events',
      text: 'Out of the box, GA4 tracks page views and a few automatic events. Form submissions, calls, bookings and purchases need to be configured, and usually are not.',
    },
    {
      title: 'Key events that mislead',
      text: 'Marking scroll depth or every form view as a key event inflates conversion counts and makes channel comparisons meaningless.',
    },
    {
      title: 'Unfiltered and unlinked data',
      text: 'Internal traffic, spam referrals, missing Google Ads and Search Console links, and wrong attribution settings quietly distort reports.',
    },
    {
      title: 'Reports nobody uses',
      text: 'GA4 reports are flexible but not friendly. Without custom explorations and a dashboard, the data stays locked in the interface.',
    },
  ],

  included: [
    {
      title: 'GA4 audit',
      text: 'Property settings, data streams, events, key events, filters, links, retention and attribution reviewed against your goals.',
    },
    {
      title: 'Measurement plan',
      text: 'A document mapping business goals to GA4 events, parameters and key events.',
    },
    {
      title: 'Event implementation',
      text: 'Custom events for forms, calls, bookings, chats, downloads and e-commerce through Google Tag Manager, with consistent naming.',
    },
    {
      title: 'E-commerce measurement',
      text: 'Full GA4 e-commerce events from product view to purchase, with item data, on Shopify, WooCommerce and custom stores.',
    },
    {
      title: 'Key events and Google Ads alignment',
      text: 'Key events defined to match Google Ads conversions, imported where useful, and attribution settings configured sensibly.',
    },
    {
      title: 'Data quality',
      text: 'Internal traffic exclusions, cross-domain tracking, referral exclusions, consent and data retention set correctly.',
    },
    {
      title: 'Explorations and reports',
      text: 'Funnel, path and channel explorations built for the questions you ask most, plus a Looker Studio dashboard if needed.',
    },
    {
      title: 'Training',
      text: 'A walkthrough for your team on where to find the answers in GA4.',
    },
  ],

  process: [
    { title: 'Discovery', text: 'We define the questions GA4 needs to answer for your business.' },
    { title: 'Audit', text: 'Current property and tracking reviewed and documented.' },
    { title: 'Plan', text: 'Measurement plan with events, parameters and key events.' },
    { title: 'Implement', text: 'Events built in GTM, GA4 configured, links and filters set.' },
    { title: 'Report and train', text: 'Explorations and dashboards built, team walkthrough delivered.' },
  ],

  deliverables: [
    'GA4 audit report',
    'Measurement plan',
    'Configured GA4 property with custom events',
    'E-commerce tracking (where applicable)',
    'Custom explorations and reports',
    'Documentation and training session',
  ],
  tools: ['Google Analytics 4', 'Google Tag Manager', 'Google Ads', 'Search Console', 'Looker Studio', 'BigQuery (optional)'],

  faqs: [
    {
      question: 'Is GA4 worth setting up properly if I already have Google Ads tracking?',
      answer:
        'Yes. Google Ads only sees its own clicks. GA4 shows the full picture across organic, paid, email, social and direct, and how users behave after they arrive.',
    },
    {
      question: 'Why do GA4 and Google Ads report different conversion numbers?',
      answer:
        'Different attribution models, counting methods and time windows. Some difference is normal. Large gaps usually mean inconsistent tracking, which the audit identifies.',
    },
    {
      question: 'Can you set up GA4 e-commerce for Shopify?',
      answer:
        'Yes, including purchase, add to cart, checkout and item-level data through GTM or the Shopify integration, with deduplication.',
    },
    {
      question: 'Do you connect GA4 to BigQuery?',
      answer:
        'When it is useful, yes. BigQuery export gives raw, unsampled data for deeper analysis and longer retention.',
    },
    {
      question: 'How long does a GA4 setup take?',
      answer:
        'A standard setup takes a few business days once site access and goals are clear. E-commerce and multi-site setups take longer.',
    },
    {
      question: 'Will you train my team?',
      answer:
        'Yes. The project includes a walkthrough of the property, the key reports and how to answer common questions.',
    },
    {
      question: 'Can you fix a GA4 property set up by someone else?',
      answer:
        'Yes. The audit shows what is wrong, and most issues can be corrected without starting a new property.',
    },
  ],

  finalCta: {
    heading: 'Get a free GA4 property review',
    text: 'I will review your GA4 setup and show you what is missing, what is wrong and what it would take to make the data useful.',
  },

  relatedServices: ['google-tag-manager', 'google-ads-conversion-tracking', 'looker-studio-dashboard', 'google-ads-management'],
  relatedIndustries: ['google-ads-for-ecommerce', 'google-ads-for-local-businesses', 'google-ads-for-home-services', 'google-ads-for-dentists'],
};
