import type { IndustryPage } from '../types';

export const cleaning: IndustryPage = {
  slug: 'google-ads-for-cleaning-businesses',
  sectionId: 'cleaning',
  name: 'Cleaning Businesses',
  noun: 'cleaning companies',

  seoTitle: 'Google Ads for Cleaning Businesses | More Bookings',
  metaDescription:
    'Google Ads for cleaning businesses built around local service keywords, service areas, call and form tracking, and conversion-focused campaign optimization.',
  imageAlt: 'Google Ads lead generation for residential and commercial cleaning businesses',
  tags: ['Google Ads cleaning business', 'cleaning PPC', 'cleaning leads', 'local service marketing', 'bookings'],
  primaryKeyword: { keyword: 'google ads for cleaning business', sv: 390, kd: 30 },
  secondaryKeywords: [
    { keyword: 'cleaning business google ads', sv: 260, kd: 27 },
    { keyword: 'cleaning ppc', sv: 210, kd: 25 },
    { keyword: 'ppc for cleaning companies', sv: 170, kd: 23 },
  ],
  suggestedKeywords: ['house cleaning google ads', 'commercial cleaning ppc', 'cleaning company lead generation', 'maid service advertising', 'janitorial google ads'],
  searchIntent: 'Commercial: owners of residential and commercial cleaning companies looking for Google Ads management.',

  h1: 'Google Ads for Cleaning Businesses',
  heroHeadline: 'Cleaning PPC that fills your schedule with the right customers',
  heroText:
    'Cleaning is a comparison market. People request two or three quotes and book the company that responds fastest and looks most trustworthy. I build cleaning campaigns that separate residential and commercial searches, target only the ZIP codes you serve, and make it easy for the right customers to book or request a quote.',
  valueProps: [
    'Residential, commercial and specialty cleaning campaigns with separate budgets',
    'Negative keywords that block cleaning jobs, supplies and DIY traffic',
    'Quote and booking tracking so you know the real cost per new customer',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1758273238415-01ec03d9ef27',
    alt: 'House cleaner mopping the floor of a bright living room',
    credit: 'https://unsplash.com/photos/a-woman-mops-a-bright-modern-living-room-floor-2NcTLdFHpH8',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba',
    alt: 'Cleaner in gloves wiping down a white surface',
    credit: 'https://unsplash.com/photos/person-wiping-surface-with-paper-towel-SnKfmC1I9fU',
  },

  challenges: [
    {
      title: 'Residential clicks on a commercial budget',
      text: 'If you want office and janitorial contracts, one-off house cleaning searches can eat the whole budget. The two markets need separate campaigns, ads and landing pages.',
    },
    {
      title: 'Job seekers and cleaning supplies',
      text: '"Cleaning jobs near me" and "cleaning products" are some of the most common wasted clicks in this industry. Without a strong negative list they quietly drain budget every day.',
    },
    {
      title: 'Price shoppers and low margins',
      text: 'Cleaning margins are thin. A campaign that attracts price-only searchers produces quotes that never convert and lowers the value of every lead.',
    },
    {
      title: 'Quote forms that lose people',
      text: 'A generic home page with a long form or no instant quote option loses visitors who wanted a price in 30 seconds.',
    },
    {
      title: 'No idea which leads became recurring clients',
      text: 'A one-time deep clean and a weekly recurring client have very different lifetime values. Most cleaning accounts cannot tell them apart in Google Ads.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by customer type',
      text: 'Cleaning searches are grouped into residential (house cleaning, maid service, deep cleaning, move-out cleaning), commercial (office cleaning, janitorial, medical office cleaning), and specialty (carpet, window, post-construction, Airbnb turnover). Each group gets its own keywords and budget.',
    },
    {
      title: 'Search campaigns first',
      text: 'Search captures people who need a cleaner now or are actively comparing. It is the core of every cleaning account before any Display, Performance Max or video is considered.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'Residential and commercial campaigns are kept separate so you control how much goes to each. Within them, ad groups are built around one service each, such as "move out cleaning" or "office cleaning".',
    },
    {
      title: 'Cleaning-specific ad copy',
      text: 'Ads use the proof points that win cleaning customers: bonded and insured, background-checked staff, satisfaction guarantee, instant online quotes, flexible scheduling and eco-friendly products if you use them.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting is built from the ZIP codes your teams can reach without long drive times, with higher bids in neighborhoods that produce recurring clients.',
    },
    {
      title: 'Negative keywords',
      text: 'A cleaning negative list blocks jobs, careers, supplies, equipment, DIY, franchise and training searches before launch and is expanded from search terms every week.',
    },
    {
      title: 'Budget and bidding',
      text: 'Commercial campaigns usually justify higher bids because contracts are worth more. Residential campaigns are optimized for cost per booking. Smart Bidding is introduced once quote and booking tracking is reliable.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews find converting searches such as "recurring house cleaning" or "medical office cleaning" and remove the price-only and irrelevant ones.',
    },
    {
      title: 'Landing page optimization',
      text: 'Residential pages offer an instant quote or online booking. Commercial pages speak to office managers with a short quote form, service list and compliance details.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Residential Cleaning - Search',
      goal: 'Online bookings and quote requests from homeowners',
      adGroups: [
        { name: 'House Cleaning', keywords: ['[house cleaning services]', '"house cleaning near me"', '"maid service near me"'] },
        { name: 'Deep Cleaning', keywords: ['"deep cleaning service"', '"deep house cleaning"'] },
        { name: 'Move Out Cleaning', keywords: ['"move out cleaning service"', '"move in cleaning"'] },
        { name: 'Recurring Cleaning', keywords: ['"weekly house cleaning"', '"recurring cleaning service"'] },
      ],
    },
    {
      campaign: 'Commercial Cleaning - Search',
      goal: 'Contract quote requests from businesses',
      adGroups: [
        { name: 'Office Cleaning', keywords: ['[office cleaning services]', '"office cleaning company"', '"commercial cleaning services near me"'] },
        { name: 'Janitorial', keywords: ['"janitorial services"', '"janitorial company"'] },
        { name: 'Medical Office Cleaning', keywords: ['"medical office cleaning"', '"dental office cleaning service"'] },
      ],
    },
    {
      campaign: 'Specialty Cleaning - Search',
      goal: 'Leads for higher-ticket specialty services',
      adGroups: [
        { name: 'Post Construction', keywords: ['"post construction cleaning"', '"construction cleanup services"'] },
        { name: 'Airbnb Turnover', keywords: ['"airbnb cleaning service"', '"vacation rental cleaning"'] },
        { name: 'Carpet Cleaning', keywords: ['[carpet cleaning]', '"carpet cleaning near me"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'hiring',
    'careers',
    'salary',
    'employment',
    'supplies',
    'products',
    'equipment',
    'checklist',
    'diy',
    'how to',
    'tips',
    'franchise',
    'business plan',
    'license',
    'training',
    'app',
    'robot',
    'vacuum',
    'free',
  ],

  locationTargeting: {
    intro:
      'Cleaning companies work in routes. Targeting should keep new customers close to existing ones so your teams spend time cleaning, not driving.',
    points: [
      'Target ZIP codes along your existing routes first, then expand outward as capacity allows.',
      'Use "Presence" targeting so only people in your service area see ads.',
      'Raise bids in neighborhoods that produce recurring residential clients or dense commercial zones.',
      'For commercial cleaning, target business districts and office parks rather than residential suburbs.',
      'Mention the cities and neighborhoods you serve in ad copy and landing pages.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Instant quote, online booking or quote form',
    'Qualified lead (in area, right service type)',
    'First cleaning booked',
    'Recurring client or commercial contract',
    'Lifetime revenue',
  ],
  trackingText:
    'I track quote requests, online bookings and calls as separate conversion actions so you can see which services and areas produce real customers. For companies using booking software such as ZenMaid, Jobber, Launch27 or Booking Koala, I track booking confirmations through Google Tag Manager and, where possible, import recurring client status back into Google Ads as an offline conversion so bidding favors customers with long-term value.',

  subcategories: [
    { title: 'Residential house cleaning and maid services', text: 'Recurring weekly and biweekly cleaning, the backbone of most residential companies.' },
    { title: 'Deep, move-in and move-out cleaning', text: 'One-time, higher-ticket jobs with urgent intent around lease dates.' },
    { title: 'Commercial and office cleaning', text: 'Contracts with offices, retail, gyms and schools. Higher value, longer sales cycle.' },
    { title: 'Janitorial and facility services', text: 'Ongoing facility cleaning for property managers and larger buildings.' },
    { title: 'Specialty cleaning', text: 'Post-construction, carpet, window, pressure washing and vacation rental turnover.' },
    { title: 'Medical and specialized environments', text: 'Clinics, dental offices and labs with compliance requirements worth highlighting in ads.' },
  ],

  faqs: [
    {
      question: 'Can Google Ads bring commercial cleaning contracts?',
      answer:
        'Yes. Office managers and facility managers search Google for commercial cleaners. A campaign focused on commercial keywords, with a landing page written for business buyers, produces contract inquiries rather than one-off house cleaning leads.',
    },
    {
      question: 'What is a good cost per lead for a cleaning company?',
      answer:
        'It depends on the city and the service type. Commercial leads cost more but are worth far more over a contract. Residential leads are cheaper but need recurring clients to be profitable. I benchmark your market during the audit and set targets based on your job values.',
    },
    {
      question: 'How much should I budget to start?',
      answer:
        'Enough to buy consistent clicks every day in your area. Cleaning clicks are usually less expensive than roofing or plumbing, so smaller budgets can work, but the budget still has to produce enough leads to optimize. I recommend a starting figure after reviewing your market.',
    },
    {
      question: 'Do I need online booking for Google Ads to work?',
      answer:
        'Not required, but instant quotes or online booking usually raise conversion rates for residential cleaning. If you only take calls and forms, campaigns are built around those instead.',
    },
    {
      question: 'How do you avoid people looking for cleaning jobs?',
      answer:
        'With a negative keyword list that blocks jobs, hiring, careers, salary and employment searches, reviewed weekly against your actual search terms.',
    },
    {
      question: 'Should I advertise all my services?',
      answer:
        'Start with the services that are most profitable and that you have capacity for. Adding specialty services later as separate campaigns keeps the budget focused.',
    },
    {
      question: 'How quickly will I see bookings?',
      answer:
        'Residential campaigns often produce bookings in the first week. Commercial inquiries take longer to turn into contracts. The first month is about cleaning up search terms and improving the quote flow.',
    },
    {
      question: 'Can you track recurring clients from Google Ads?',
      answer:
        'With most booking platforms, yes. Booking confirmations are tracked as conversions, and recurring status can be imported as an offline conversion so Google Ads learns which searches bring long-term customers.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your cleaning business',
    text: 'I will review your campaigns, search terms, quote flow and tracking and show you where wasted clicks are hiding.',
  },

  relatedServices: ['google-ads-management', 'google-search-ads', 'google-ads-conversion-tracking', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-local-businesses', 'google-ads-for-home-services', 'google-ads-for-plumbers', 'google-ads-for-contractors'],
};
