import type { IndustryPage } from '../types';

export const homeServices: IndustryPage = {
  slug: 'google-ads-for-home-services',
  sectionId: 'home-services',
  name: 'Home Services',
  noun: 'home service companies',

  seoTitle: 'Google Ads for Home Services | PPC Lead Generation',
  metaDescription:
    'Google Ads for home service companies using service-specific keywords, location targeting and call tracking to book more qualified jobs. Get a free audit.',
  imageAlt: 'Google Ads campaigns for home service businesses generating calls and leads',
  tags: ['Google Ads home services', 'PPC lead generation', 'roofing ads', 'HVAC ads', 'plumbing ads'],
  primaryKeyword: { keyword: 'google ads for home services', sv: 720, kd: 41 },
  secondaryKeywords: [
    { keyword: 'home services ppc', sv: 320, kd: 35 },
    { keyword: 'home service google ads', sv: 480, kd: 38 },
    { keyword: 'ppc for home service companies', sv: 170, kd: 31 },
  ],
  suggestedKeywords: ['home services lead generation', 'home service ppc management', 'google ads for contractors and home services', 'home improvement google ads'],
  searchIntent: 'Commercial: owners of home service companies (roofing, HVAC, plumbing, remodeling, cleaning and similar trades) looking for Google Ads management.',

  h1: 'Google Ads for Home Services',
  heroHeadline: 'Home service PPC built around booked jobs and crew capacity',
  heroText:
    'I manage Google Ads for US home service companies: roofing, HVAC, plumbing, electrical, remodeling, chimney and exteriors, cleaning and more. The goal is simple: more booked jobs at a cost that works for your margins, with tracking that shows which campaigns actually produce revenue.',
  valueProps: [
    'Service-specific campaigns so budget follows job value, not click volume',
    'Call, form and booking tracking tied to real jobs through your CRM',
    'Weekly optimization, not set-and-forget management',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1786204697642-328c597b6f05',
    alt: 'Home service technician sealing a kitchen window frame',
    credit: 'https://unsplash.com/photos/person-applying-caulk-in-kitchen-7PiboaUAB_0',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15',
    alt: 'Home improvement contractor working from a ladder indoors',
    credit: 'https://unsplash.com/photos/man-climbing-on-ladder-inside-room-Te48TPzdcU8',
  },

  challenges: [
    {
      title: 'Leads you cannot handle, or none when you need them',
      text: 'Campaigns that ignore crew capacity either flood you with leads you cannot serve or go quiet when the schedule is empty. Budgets need to follow your calendar.',
    },
    {
      title: 'Optimizing for the wrong conversion',
      text: 'When every page view, click-to-call tap or short call counts as a conversion, Google optimizes for noise. Home service accounts need conversions that mean a real job request.',
    },
    {
      title: 'Set-and-forget management',
      text: 'Home service search behavior changes with weather, seasons and local competition. Accounts that are not reviewed weekly lose efficiency month after month.',
    },
    {
      title: 'Expensive clicks in competitive metros',
      text: 'Home service keywords in large US markets are costly. A loose structure with broad match and no negatives can burn a month of budget in days.',
    },
    {
      title: 'Generic landing pages',
      text: 'A single home page for every service lowers Quality Score and conversion rate. Each service searched needs a matching page.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by service and intent',
      text: 'For every trade, searches are sorted into emergency, repair, installation or replacement, maintenance and commercial. "Near me", "cost" and "emergency" modifiers tell me how urgent and valuable each search is.',
    },
    {
      title: 'Search campaigns first',
      text: 'High-intent Search is the foundation. Local Services Ads are added where available, and Performance Max or Display only once Search is profitable and conversion data is clean.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'One campaign per service line with its own budget, tight ad groups with closely related keywords, and separate campaigns per branch or region for multi-location companies.',
    },
    {
      title: 'Trade-specific ad copy',
      text: 'Ads speak the language of the trade: licensed and insured, same-day service, free estimates, financing, warranties and the cities you serve. No generic "best in town" copy.',
    },
    {
      title: 'Location targeting',
      text: 'Presence-only targeting on the ZIP codes, cities or counties your crews actually cover, with bid adjustments for the areas that produce your best jobs.',
    },
    {
      title: 'Negative keywords',
      text: 'Every trade has its own waste: jobs, DIY, parts, suppliers, training. A negative list is built before launch and expanded weekly from real search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'Budgets are tied to capacity and season. Bidding starts conservative to gather clean data and moves to Target CPA or Maximize Conversions once there are enough tracked job requests.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews add converting searches as keywords, block wasted ones, and shift budget toward the services producing booked jobs.',
    },
    {
      title: 'Landing page optimization',
      text: 'Each service gets a page with a clear headline, tap-to-call number, short form, reviews, licensing and service area. I recommend changes or provide structure and copy for new pages.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Emergency Services - Search',
      goal: 'Urgent calls across trades with on-call coverage',
      adGroups: [
        { name: 'Emergency Plumber', keywords: ['[emergency plumber]', '"emergency plumber near me"'] },
        { name: 'Emergency Electrician', keywords: ['[emergency electrician]', '"24 hour electrician"'] },
        { name: 'Emergency Roof Repair', keywords: ['"emergency roof repair"', '"roof leak repair near me"'] },
      ],
    },
    {
      campaign: 'Installation and Replacement - Search',
      goal: 'High-value estimate requests',
      adGroups: [
        { name: 'HVAC Installation', keywords: ['[hvac installation]', '"new ac unit cost"'] },
        { name: 'Roof Replacement', keywords: ['[roof replacement]', '"roof replacement near me"'] },
        { name: 'Water Heater Installation', keywords: ['"water heater installation"', '"water heater replacement"'] },
      ],
    },
    {
      campaign: 'Remodeling - Search',
      goal: 'Project consultations',
      adGroups: [
        { name: 'Kitchen Remodel', keywords: ['[kitchen remodeling]', '"kitchen remodel contractor near me"'] },
        { name: 'Bathroom Remodel', keywords: ['[bathroom remodeling]', '"bathroom renovation cost"'] },
      ],
    },
    {
      campaign: 'Maintenance and Recurring - Search',
      goal: 'Lower-cost leads that build recurring revenue',
      adGroups: [
        { name: 'HVAC Tune Up', keywords: ['"ac tune up"', '"furnace maintenance"'] },
        { name: 'Gutter Cleaning', keywords: ['"gutter cleaning service"', '"gutter cleaning near me"'] },
        { name: 'Chimney Sweep', keywords: ['"chimney sweep near me"', '"chimney cleaning service"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'hiring',
    'careers',
    'salary',
    'training',
    'certification',
    'diy',
    'how to',
    'youtube',
    'free',
    'home depot',
    'lowes',
    'supply',
    'parts',
    'for sale',
    'rental',
    'calculator',
    'reddit',
    'reviews of',
    'complaints',
  ],

  locationTargeting: {
    intro:
      'Home service companies make money on route density and short drive times. Google Ads targeting should match where crews are, not the whole metro area the platform suggests.',
    points: [
      'Target a ZIP code, city or county list that mirrors your real service area, not a single wide radius.',
      'Use "Presence" targeting so out-of-area searchers do not trigger ads.',
      'Raise bids in areas that historically produce higher-value jobs; lower them where jobs are small or drive times are long.',
      'Multi-location companies get a campaign per branch so budgets and reporting stay separate.',
      'Add location names to ads and landing pages for the cities that matter most.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call, form or online booking',
    'Qualified lead (in area, real service need)',
    'Appointment or estimate booked',
    'Job completed',
    'Revenue and repeat customer',
  ],
  trackingText:
    'I set up call tracking with duration thresholds, form and booking tracking through Google Tag Manager, and GA4 events for every lead action. For companies using ServiceTitan, Housecall Pro, Jobber, JobNimbus or HubSpot, I connect offline conversion tracking so booked appointments and completed job revenue flow back into Google Ads. That is what lets Smart Bidding optimize for jobs instead of clicks.',

  subcategories: [
    { title: 'Roofing and exteriors', text: 'Roof repair and replacement, siding, gutters, chimney services.' },
    { title: 'HVAC, plumbing and electrical', text: 'Emergency repair, installation and maintenance across the core trades.' },
    { title: 'Remodeling and construction', text: 'Kitchen, bathroom and basement remodels, additions and general contracting.' },
    { title: 'Cleaning and property care', text: 'House cleaning, commercial cleaning, pressure washing, window cleaning.' },
    { title: 'Lawn, landscape and tree services', text: 'Seasonal demand with strong "near me" intent.' },
    { title: 'Pest control, moving and junk removal', text: 'High-urgency local services with fast call conversions.' },
  ],

  faqs: [
    {
      question: 'Which home service businesses do you work with?',
      answer:
        'Roofing, HVAC, plumbing, electrical, remodeling, chimney and exteriors, cleaning and other local trades that book jobs by phone or form. I have dedicated pages for several of these industries with specific strategies.',
    },
    {
      question: 'How much should a home service company spend on Google Ads?',
      answer:
        'It depends on your trade, market and how many jobs you can take on. The budget needs to buy enough clicks to produce consistent job requests and enough data to optimize. In the free audit, I look at your trades, service area and local click costs and suggest a realistic starting budget.',
    },
    {
      question: 'Is Performance Max good for home service leads?',
      answer:
        'It can work, but only with reliable conversion tracking and strong negative signals. I start with Search, and test Performance Max once there is clean lead data for it to learn from.',
    },
    {
      question: 'How quickly will I get leads?',
      answer:
        'Search campaigns usually produce calls within the first week. The first one to two months are about reducing waste and bringing cost per booked job down.',
    },
    {
      question: 'Do you use Local Services Ads?',
      answer:
        'Yes, where your trade and market qualify. They run alongside Search campaigns and are reported together.',
    },
    {
      question: 'What do I get in the free audit?',
      answer:
        'A review of account structure, keywords, search terms, conversion tracking and landing pages, with a short list of the changes that would save the most money first.',
    },
    {
      question: 'Can you connect Google Ads to my CRM?',
      answer:
        'Yes. Offline conversion tracking connects booked jobs and revenue from platforms like ServiceTitan, Housecall Pro, Jobber and HubSpot back to the ads that produced them.',
    },
    {
      question: 'Do you require long contracts?',
      answer:
        'No. Management is month to month, and you keep full ownership of your Google Ads account and data.',
    },
    {
      question: 'How do you report results?',
      answer:
        'With a Looker Studio dashboard showing spend, calls, forms, booked jobs and cost per job by campaign, plus a short monthly summary of what changed and why.',
    },
  ],

  finalCta: {
    heading: 'Get a free home services Google Ads audit',
    text: 'Tell me your trade and service area. I will review your account and show you where leads are being lost and budget is being wasted.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-ads-audit', 'looker-studio-dashboard'],
  relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-hvac', 'google-ads-for-plumbers', 'google-ads-for-contractors'],
};
