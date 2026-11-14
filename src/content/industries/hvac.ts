import type { IndustryPage } from '../types';

export const hvac: IndustryPage = {
  slug: 'google-ads-for-hvac',
  sectionId: 'hvac-plumbing',
  name: 'HVAC Companies',
  noun: 'HVAC companies',

  seoTitle: 'Google Ads for HVAC Companies | PPC Lead Generation',
  metaDescription:
    'Google Ads for HVAC companies targeting emergency and scheduled searches with service-area campaigns, call tracking and conversion-focused PPC optimization.',
  imageAlt: 'Google Ads dashboard showing HVAC repair and installation campaign performance',
  tags: ['Google Ads HVAC', 'HVAC PPC', 'HVAC leads', 'local service marketing', 'call tracking'],
  primaryKeyword: { keyword: 'google ads for hvac', sv: 480, kd: 32 },
  secondaryKeywords: [
    { keyword: 'hvac google ads', sv: 390, kd: 30 },
    { keyword: 'hvac ppc', sv: 320, kd: 28 },
    { keyword: 'ppc for hvac companies', sv: 170, kd: 25 },
  ],
  suggestedKeywords: ['hvac lead generation google ads', 'hvac ppc management', 'ac repair google ads', 'hvac advertising', 'google ads for heating and cooling'],
  searchIntent: 'Commercial: HVAC owners and managers looking for Google Ads management or help fixing an underperforming account.',

  h1: 'Google Ads for HVAC Companies',
  heroHeadline: 'HVAC PPC built for the days your phones need to ring',
  heroText:
    'When an air conditioner dies in July or a furnace fails in January, homeowners call the first HVAC company they trust on Google. I build HVAC campaigns around those emergency searches, schedule ads around your dispatch hours, and track every call so you see the real cost of each booked service call and installation.',
  overview:
    'Google Ads for HVAC companies has to handle two very different kinds of demand: emergency repairs and planned installations. Effective PPC for HVAC companies keeps them separate, with schedules and budgets that follow the weather and your dispatch capacity.',
  valueProps: [
    'Emergency repair, installation and maintenance campaigns run with separate budgets',
    'Ad schedules and bids matched to when your office can actually answer',
    'Seasonal budget shifts between cooling and heating instead of a flat budget all year',
  ],
  heroImage: {
    src: '/industries/google-ads-for-hvac-companies.webp',
    alt: 'Google Ads for HVAC companies: technician repairing an AC unit with Google Search ad and Local Services Ad examples',
    aspect: 'aspect-[16/9]',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1770625467384-304e461ef1be',
    alt: 'Homeowner adjusting a digital thermostat on the wall',
    credit: 'https://unsplash.com/photos/finger-adjusting-a-modern-digital-thermostat-on-wall-3_nf1qKJGf4',
  },

  challenges: [
    {
      title: 'Emergency and installation searches mixed together',
      text: '"AC not cooling" and "new HVAC system cost" are worth very different amounts and need different ads. When they share one campaign, the budget goes wherever clicks are cheapest, not where profit is.',
    },
    {
      title: 'Peak season bidding wars',
      text: 'During heat waves and cold snaps every HVAC company in the market raises bids at the same time. Without clean conversion data, Smart Bidding overpays or stops showing ads exactly when demand is highest.',
    },
    {
      title: 'Missed calls after hours',
      text: 'An ad that runs at 11pm when nobody answers the phone is a paid click handed to the next company. Many HVAC accounts never match ad schedules to dispatch coverage.',
    },
    {
      title: 'Parts, DIY and warranty searches',
      text: 'Searches for capacitors, filters, thermostat wiring and manufacturer warranty claims look like HVAC keywords but bring people who are not hiring a technician.',
    },
    {
      title: 'Tracking that counts the wrong things',
      text: 'If a 10-second wrong-number call counts the same as a booked installation estimate, Google optimizes toward noise. Most HVAC accounts I audit have this problem.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by service and season',
      text: 'HVAC searches split into cooling repair, heating repair, system replacement and installation, maintenance and tune-ups, indoor air quality, and commercial HVAC. Each has its own season and job value, and each gets its own keyword set.',
    },
    {
      title: 'Search campaigns as the foundation',
      text: 'Search is where urgent HVAC demand lives. Campaigns are built first around repair and replacement searches, then expanded into maintenance, IAQ and brand once the core is profitable.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'Campaigns are split by service line so each has its own budget and bid strategy. Ad groups are tight, usually a single theme such as "AC repair" or "furnace replacement", so ads match the search closely.',
    },
    {
      title: 'HVAC-specific ad copy',
      text: 'Ads highlight same-day service, licensed and NATE-certified technicians where applicable, financing on new systems, brands you install, and 24/7 availability only if you really offer it.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting follows your dispatch zones. Dense suburban ZIP codes with older housing stock often deserve higher bids than new-build areas where systems are still under warranty.',
    },
    {
      title: 'Negative keywords',
      text: 'A pre-built HVAC negative list blocks parts, DIY, training, jobs and manufacturer searches from day one, and the list grows every week from your actual search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'Budgets move with the weather: more into cooling in late spring and summer, more into heating in fall and winter. Bidding moves from manual to Target CPA once there are enough tracked booked calls.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews surface new converting searches such as "mini split installation" or "heat pump replacement" and cut the rest. Over time the account gets more specific and cheaper per lead.',
    },
    {
      title: 'Landing page optimization',
      text: 'Repair searchers land on a page built for a fast call, with a tap-to-call button, service area and response time. Installation searchers land on a page with system options, financing and a quote form.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'AC Repair - Search (seasonal)',
      goal: 'Same-day service calls during cooling season',
      adGroups: [
        { name: 'AC Repair', keywords: ['[ac repair]', '"ac repair near me"', '"air conditioner repair"'] },
        { name: 'AC Not Cooling', keywords: ['"ac not cooling"', '"ac not working"', '"ac blowing warm air"'] },
        { name: 'Emergency AC', keywords: ['"emergency ac repair"', '"24 hour ac repair"'] },
      ],
    },
    {
      campaign: 'Heating Repair - Search (seasonal)',
      goal: 'Service calls during heating season',
      adGroups: [
        { name: 'Furnace Repair', keywords: ['[furnace repair]', '"furnace repair near me"', '"furnace not working"'] },
        { name: 'Heat Pump Repair', keywords: ['"heat pump repair"', '"heat pump not heating"'] },
      ],
    },
    {
      campaign: 'HVAC Installation - Search',
      goal: 'Estimate requests for system replacement',
      adGroups: [
        { name: 'AC Installation', keywords: ['[ac installation]', '"new ac unit cost"', '"air conditioner replacement"'] },
        { name: 'Furnace Installation', keywords: ['[furnace installation]', '"furnace replacement cost"'] },
        { name: 'Heat Pump Installation', keywords: ['"heat pump installation"', '"heat pump replacement"'] },
        { name: 'Ductless Mini Split', keywords: ['"mini split installation"', '"ductless ac installation"'] },
      ],
    },
    {
      campaign: 'Maintenance - Search',
      goal: 'Tune-up bookings and maintenance plan sign-ups',
      adGroups: [
        { name: 'AC Tune Up', keywords: ['"ac tune up"', '"ac maintenance near me"'] },
        { name: 'Furnace Tune Up', keywords: ['"furnace tune up"', '"heating maintenance"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'salary',
    'training',
    'certification',
    'school',
    'diy',
    'how to',
    'parts',
    'capacitor',
    'filter',
    'thermostat wiring',
    'manual',
    'warranty claim',
    'home depot',
    'lowes',
    'amazon',
    'portable',
    'window unit',
    'car ac',
    'rv',
  ],

  locationTargeting: {
    intro:
      'HVAC companies live and die by dispatch efficiency. Your Google Ads targeting should mirror the zones your technicians can reach quickly, especially for emergency work.',
    points: [
      'Build location targets from your dispatch zones: ZIP codes, cities or counties, not one wide radius.',
      'Use "Presence" targeting so only people physically in your area trigger ads.',
      'Raise bids in ZIP codes with older homes and higher repair frequency; lower them in areas dominated by new construction.',
      'Add location names to ad copy and landing pages for the cities you serve most.',
      'For multi-branch companies, run separate campaigns per branch so budgets and reporting stay clean.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or service request form',
    'Qualified lead (in area, real repair or install need)',
    'Service call or estimate booked',
    'Job completed or system installed',
    'Revenue and maintenance plan sign-up',
  ],
  trackingText:
    'HVAC accounts need call tracking above everything else, because most leads are calls. I set up call tracking with duration thresholds, form tracking through Google Tag Manager, and GA4 events for each lead action. If you use ServiceTitan, Housecall Pro, Jobber or a similar platform, I connect offline conversion tracking so booked jobs and installation revenue flow back into Google Ads and Smart Bidding optimizes for them.',

  subcategories: [
    { title: 'Residential AC and heating repair', text: 'Urgent, weather-driven searches with fast call conversions. The core of most HVAC accounts.' },
    { title: 'System replacement and installation', text: 'High-value jobs with longer decision cycles. Financing messaging and follow-up matter.' },
    { title: 'Maintenance plans and tune-ups', text: 'Lower cost per lead, builds recurring revenue and future replacement opportunities.' },
    { title: 'Ductless and heat pump specialists', text: 'Growing search category, often with rebate and efficiency angles in the ad copy.' },
    { title: 'Indoor air quality', text: 'Duct cleaning, purifiers and humidifiers. Usually a secondary campaign.' },
    { title: 'Commercial HVAC', text: 'Rooftop units, refrigeration and service contracts for property managers and businesses.' },
  ],

  faqs: [
    {
      question: 'What is a realistic Google Ads budget for an HVAC company?',
      answer:
        'Budgets vary a lot by market and by season. A single-truck company in a smaller city needs far less than a multi-branch operation in a large metro. The right starting point is a budget that buys enough clicks to generate consistent calls and gives the account data to optimize. I recommend a figure after reviewing your area and competition in the free audit.',
    },
    {
      question: 'Should HVAC and plumbing run in the same account?',
      answer:
        'Same account, separate campaigns. Each trade has different keywords, seasonality and job values, so they need their own budgets and reporting.',
    },
    {
      question: 'How do you handle seasonality?',
      answer:
        'Cooling and heating campaigns are built separately so budget can shift between them as the weather changes. Replacement and maintenance campaigns run year-round with lower, steadier budgets.',
    },
    {
      question: 'How do you stop ads from running when nobody can answer the phone?',
      answer:
        'Ad schedules follow your dispatch and office hours, with bid adjustments by hour based on when calls convert. If you offer true 24/7 service, after-hours ads run with their own budget and tracking.',
    },
    {
      question: 'Do you track phone calls from Google Ads?',
      answer:
        'Yes. Calls from ads and from the landing page are tracked as conversions with a minimum call length so misdials and spam do not count.',
    },
    {
      question: 'Are Local Services Ads worth it for HVAC?',
      answer:
        'Usually yes, in markets where they are available. They appear above Search ads and charge per lead. I run them alongside Search campaigns rather than instead of them.',
    },
    {
      question: 'Can Google Ads help sell maintenance plans?',
      answer:
        'Yes. Tune-up campaigns in spring and fall bring lower-cost leads that can be converted into maintenance agreements and future replacement jobs.',
    },
    {
      question: 'How long until an HVAC account is profitable?',
      answer:
        'Calls usually start within days. Cost per booked call typically improves over the first 4 to 8 weeks as search terms are cleaned up, tracking matures and bidding moves to conversion-based strategies.',
    },
    {
      question: 'Will you work in my existing Google Ads account?',
      answer:
        'Yes. You keep ownership of the account and all its history. I work through manager access and start with an audit before changing anything.',
    },
  ],

  finalCta: {
    heading: 'Get a free HVAC Google Ads audit',
    text: 'I will review your campaigns, search terms, ad schedule and call tracking and show you where budget is going to the wrong searches.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-search-ads', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-plumbers', 'google-ads-for-electricians', 'google-ads-for-home-services', 'google-ads-for-roofing'],
};
