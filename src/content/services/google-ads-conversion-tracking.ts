import type { ServicePage } from '../types';

export const conversionTracking: ServicePage = {
  slug: 'google-ads-conversion-tracking',
  name: 'Google Ads Conversion Tracking',

  seoTitle: 'Google Ads Conversion Tracking Setup | GA4 & GTM',
  metaDescription:
    'Set up accurate Google Ads conversion tracking with GA4 and GTM for calls, forms, purchases and qualified leads so bidding uses reliable conversion data.',
  imageAlt: 'Google Ads conversion tracking setup with GA4 and Google Tag Manager',
  tags: ['Google Ads conversion tracking', 'GA4', 'GTM', 'tracking setup', 'lead attribution'],
  primaryKeyword: { keyword: 'google ads conversion tracking', sv: 1900, kd: 45 },
  secondaryKeywords: [
    { keyword: 'google ads tracking setup', sv: 590, kd: 38 },
    { keyword: 'conversion tracking specialist', sv: 390, kd: 36 },
    { keyword: 'ppc conversion tracking', sv: 260, kd: 34 },
  ],
  searchIntent: 'Commercial and problem-solving: advertisers whose conversion tracking is missing, broken or untrusted.',

  h1: 'Google Ads Conversion Tracking Setup',
  heroHeadline: 'Conversion tracking you can trust, so every bidding decision is based on real leads and sales',
  heroText:
    'Smart Bidding is only as good as the conversion data behind it. I set up and verify Google Ads conversion tracking through Google Tag Manager and GA4 for calls, forms, bookings and purchases, add enhanced conversions and offline conversion imports, and document everything so you know exactly what each number means.',
  valueProps: [
    'Every conversion action defined, tested and documented',
    'Calls, forms, bookings and purchases tracked separately with correct values',
    'Offline conversions from your CRM so Google learns from qualified leads and revenue',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    alt: 'Laptop displaying conversion and traffic reports',
    credit: 'https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU',
  },

  whoItsFor: [
    'Businesses whose Google Ads conversions do not match real leads or sales',
    'Advertisers moving to Smart Bidding who need clean data first',
    'E-commerce stores with duplicated or missing purchase values',
    'Lead generation businesses that want qualified leads, not all leads, driving bidding',
  ],

  problems: [
    {
      title: 'Conversions that are not conversions',
      text: 'Page views, button clicks and thank-you page refreshes counted as conversions make the account look good while bidding optimizes for nothing.',
    },
    {
      title: 'Calls not tracked at all',
      text: 'For most service businesses, calls are the main lead type. Accounts without call tracking are optimizing on a fraction of their results.',
    },
    {
      title: 'Duplicate and inflated values',
      text: 'Purchase events firing twice, values including tax and shipping, or the same lead counted by two tags inflate results and mislead target ROAS.',
    },
    {
      title: 'Browser restrictions and lost data',
      text: 'Consent requirements, ad blockers and browser privacy changes reduce what client-side tags can see. Enhanced conversions and server-side tracking recover much of it.',
    },
  ],

  included: [
    {
      title: 'Tracking audit',
      text: 'Every existing conversion action, tag and trigger reviewed for accuracy, duplication, value and attribution settings.',
    },
    {
      title: 'Measurement plan',
      text: 'A document defining each conversion: what it is, how it fires, its value and whether it is primary or secondary for bidding.',
    },
    {
      title: 'Google Tag Manager implementation',
      text: 'Tags, triggers and variables built for forms, calls, bookings, chats and purchases, with a data layer where needed.',
    },
    {
      title: 'Call tracking',
      text: 'Google forwarding numbers or a call tracking platform configured with duration thresholds and keyword-level attribution.',
    },
    {
      title: 'Enhanced conversions',
      text: 'Hashed first-party data sent with conversions to recover matches lost to browser restrictions.',
    },
    {
      title: 'Offline conversion tracking',
      text: 'GCLID capture and imports from your CRM (HubSpot, Salesforce, ServiceTitan, Jobber, Clio and others) so qualified leads and revenue reach Google Ads.',
    },
    {
      title: 'GA4 alignment',
      text: 'GA4 key events configured to match Google Ads conversions so both platforms tell the same story.',
    },
    {
      title: 'Testing and documentation',
      text: 'Every tag verified with Tag Assistant and live tests, then documented so anyone on your team can understand the setup.',
    },
  ],

  process: [
    { title: 'Audit', text: 'Existing tags, conversion actions and GA4 events reviewed and compared to real lead or sales data.' },
    { title: 'Plan', text: 'A measurement plan listing every conversion, its trigger, value and role in bidding.' },
    { title: 'Implement', text: 'Tags built in Google Tag Manager, call tracking configured, data layer added where needed.' },
    { title: 'Verify', text: 'Live tests on every conversion, duplicates removed, values checked.' },
    { title: 'Document and hand over', text: 'A written record of the setup plus recommendations for bidding changes now that data is clean.' },
  ],

  deliverables: [
    'Tracking audit report',
    'Measurement plan',
    'Google Tag Manager container with documented tags',
    'Call tracking setup',
    'Enhanced and offline conversion configuration',
    'Test results and handover document',
  ],
  tools: ['Google Tag Manager', 'GA4', 'Google Ads', 'Tag Assistant', 'Call tracking platforms', 'CRM integrations', 'Server-side GTM where needed'],

  faqs: [
    {
      question: 'How do I know if my conversion tracking is wrong?',
      answer:
        'Compare Google Ads conversions to real leads or orders for the same period. If the numbers differ a lot, or if conversions include page views and clicks, the setup needs work.',
    },
    {
      question: 'Can you track phone calls from Google Ads?',
      answer:
        'Yes. Calls from ads use Google forwarding numbers; calls from your website use a call tracking platform or GTM-based call tracking, with duration thresholds to filter out short calls.',
    },
    {
      question: 'What is offline conversion tracking?',
      answer:
        'It captures the Google click ID with each lead, then imports what happened later (qualified, booked, sold, revenue) from your CRM back into Google Ads. Bidding can then optimize for real outcomes.',
    },
    {
      question: 'Do you set up enhanced conversions?',
      answer:
        'Yes, for both leads and purchases. It improves match rates and makes Smart Bidding more accurate.',
    },
    {
      question: 'Do you work with Shopify and WooCommerce purchase tracking?',
      answer:
        'Yes, including data layer setup, deduplication, correct values and enhanced conversions for purchases.',
    },
    {
      question: 'Is server-side tracking necessary?',
      answer:
        'Not for everyone. It helps accounts losing significant data to browser restrictions or with strict consent requirements. I recommend it only when the benefit justifies the cost.',
    },
    {
      question: 'How long does a tracking setup take?',
      answer:
        'A standard lead generation setup usually takes a few business days. E-commerce with offline imports or server-side tracking takes longer.',
    },
    {
      question: 'Will this fix my Google Ads performance?',
      answer:
        'Clean tracking is the foundation. Once bidding is working from accurate data, performance usually improves, but structure, keywords and landing pages still matter. The tracking project includes recommendations for those.',
    },
  ],

  finalCta: {
    heading: 'Get your conversion tracking checked',
    text: 'Tell me what you are tracking today. I will review it, show you what is wrong and what it is costing you, and lay out the fix.',
  },

  relatedServices: ['google-tag-manager', 'ga4-consultant', 'google-ads-management', 'looker-studio-dashboard'],
  relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-ecommerce', 'google-ads-for-law-firms', 'google-ads-for-roofing'],
};
