import type { IndustryPage } from '../types';

/**
 * Not in the SEO strategy sheet yet. Title, description and keywords below are
 * suggested and unverified. Add a row to the sheet to confirm or change them.
 */
export const electricians: IndustryPage = {
  slug: 'google-ads-for-electricians',
  sectionId: 'electrical',
  name: 'Electricians',
  noun: 'electrical contractors',

  seoTitle: 'Google Ads for Electricians | Electrical PPC Leads',
  metaDescription:
    'Google Ads for electricians targeting panel upgrades, EV chargers, rewiring and emergency searches, with call tracking and lead filtering for qualified jobs.',
  imageAlt: 'Google Ads campaign for electricians generating service and installation leads',
  tags: ['Google Ads electricians', 'electrician PPC', 'electrical leads', 'EV charger installation ads', 'call tracking'],
  primaryKeyword: { keyword: 'google ads for electricians' },
  secondaryKeywords: [{ keyword: 'electrician google ads' }, { keyword: 'electrician ppc' }, { keyword: 'ppc for electricians' }],
  suggestedKeywords: ['electrical contractor advertising', 'electrician lead generation', 'ev charger installation leads', 'panel upgrade google ads'],
  searchIntent: 'Commercial: electrical contractors looking for Google Ads management or lead generation help.',

  h1: 'Google Ads for Electricians',
  heroHeadline: 'Electrical PPC that favors panel upgrades and EV chargers over $99 call-outs',
  heroText:
    'Electrical work ranges from a tripped breaker to a full service upgrade. If your Google Ads account treats every search the same, the budget drifts toward the smallest jobs. I structure electrician campaigns around the work you want more of, in the areas you serve, with tracking that shows which searches become real jobs.',
  valueProps: [
    'Separate campaigns for emergency, panel and service upgrades, EV chargers and rewiring',
    'Residential and commercial searches kept apart with their own ads and pages',
    'Negative keywords that block apprenticeships, courses, parts and DIY traffic',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57',
    alt: 'Electrician testing an electrical panel with a multimeter',
    credit: 'https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e',
    alt: 'Electrician in a hard hat installing wiring',
    credit: 'https://unsplash.com/photos/electrician-installing-wiring-with-yellow-hardhat-_2AlIm-F6pw',
  },

  challenges: [
    {
      title: 'Small jobs eating the budget',
      text: 'Generic "electrician near me" traffic brings a lot of outlet and switch repairs. Without a service split, higher-value work like panel upgrades and rewiring never gets enough budget.',
    },
    {
      title: 'Training, licensing and job searches',
      text: '"Electrician apprenticeship", "electrician license" and "electrician salary" look like your keywords. They are never your customers.',
    },
    {
      title: 'Landing pages that do not match the search',
      text: 'Someone searching "EV charger installation" who lands on a general electrical home page usually leaves. Each major service needs its own page.',
    },
    {
      title: 'Product and DIY intent',
      text: 'Searches for breakers, wire gauges and "how to install a ceiling fan" are DIY or shopping searches, not service requests.',
    },
    {
      title: 'No lead quality feedback',
      text: 'If a $99 outlet call and a $4,000 panel upgrade both count as one conversion, Smart Bidding will chase the cheap one.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by job value',
      text: 'Electrical searches are grouped into emergency and repair, panel and service upgrades, EV charger installation, rewiring and remodel electrical, lighting and ceiling fans, generators, and commercial. Each gets its own budget based on job value.',
    },
    {
      title: 'Search campaigns first',
      text: 'Search is where homeowners and businesses look for a licensed electrician. Campaigns start with the highest-value, highest-intent searches and expand from there.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'High-value services get their own campaigns so you can give them priority budget. Smaller repair work is grouped with a capped budget rather than removed entirely.',
    },
    {
      title: 'Electrician-specific ad copy',
      text: 'Ads lead with licensed and insured, code-compliant work, permits handled, upfront pricing and, for EV chargers and panels, rebates and financing where available.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting matches your service area at ZIP code level with presence-only settings. EV charger campaigns can be weighted toward neighborhoods with higher EV adoption.',
    },
    {
      title: 'Negative keywords',
      text: 'A pre-built electrician negative list removes apprenticeship, school, salary, parts, DIY and unrelated terms from day one and grows weekly.',
    },
    {
      title: 'Budget and bidding',
      text: 'High-value campaigns get higher target CPAs because the jobs justify it. Repair campaigns are held to a tighter cost per lead. Bidding moves to conversion-based strategies once tracking is clean.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly search term reviews catch new opportunities such as "whole house surge protector installation" and cut the DIY and product searches that slip through.',
    },
    {
      title: 'Landing page optimization',
      text: 'Each high-value service gets a dedicated page: EV charger installation with rebate info, panel upgrades with pricing guidance, generators with brand options, all with a short form and tap-to-call.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Emergency and Repair - Search',
      goal: 'Service calls for urgent electrical problems',
      adGroups: [
        { name: 'Emergency Electrician', keywords: ['[emergency electrician]', '"emergency electrician near me"', '"24 hour electrician"'] },
        { name: 'Electrical Repair', keywords: ['"electrical repair service"', '"electrician near me"', '"power outage in house electrician"'] },
      ],
    },
    {
      campaign: 'Panel and Service Upgrades - Search',
      goal: 'Estimate requests for high-value upgrades',
      adGroups: [
        { name: 'Panel Upgrade', keywords: ['[electrical panel upgrade]', '"panel replacement cost"', '"200 amp panel upgrade"'] },
        { name: 'Service Upgrade', keywords: ['"electrical service upgrade"', '"upgrade electrical service to 200 amps"'] },
      ],
    },
    {
      campaign: 'EV Charger Installation - Search',
      goal: 'Installation quotes from EV owners',
      adGroups: [
        { name: 'EV Charger Install', keywords: ['[ev charger installation]', '"ev charger installer near me"', '"level 2 charger installation"'] },
        { name: 'Tesla Charger', keywords: ['"tesla wall connector installation"', '"tesla charger installer"'] },
      ],
    },
    {
      campaign: 'Rewiring and Generators - Search',
      goal: 'Large project estimate requests',
      adGroups: [
        { name: 'Rewiring', keywords: ['"house rewiring"', '"rewire house cost"', '"knob and tube replacement"'] },
        { name: 'Generators', keywords: ['"whole house generator installation"', '"generac installer near me"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'salary',
    'apprenticeship',
    'apprentice',
    'school',
    'course',
    'license exam',
    'union',
    'diy',
    'how to',
    'youtube',
    'breaker for sale',
    'wire',
    'home depot',
    'lowes',
    'amazon',
    'tools',
    'calculator',
    'automotive',
    'car',
  ],

  locationTargeting: {
    intro:
      'Electricians serve a defined area but different services pull from different neighborhoods. Targeting should reflect both your service radius and where each type of job comes from.',
    points: [
      'Target ZIP codes and cities that match your dispatch area, using "Presence" targeting.',
      'For EV charger campaigns, raise bids in neighborhoods with newer homes and higher EV adoption.',
      'For panel upgrades and rewiring, raise bids in areas with older housing stock.',
      'Keep commercial campaigns focused on business districts and industrial zones.',
      'Exclude areas with long drive times unless the job value justifies the travel.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or estimate request',
    'Qualified lead (in area, licensed work needed)',
    'Site visit or estimate booked',
    'Job approved and completed',
    'Revenue by service type',
  ],
  trackingText:
    'I set up call tracking, form tracking and GA4 events so every lead action is recorded with the service and keyword that produced it. Because job values vary so much in electrical work, offline conversion tracking matters here: approved estimates and completed job values are imported back into Google Ads so bidding can favor panel upgrades, EV chargers and rewiring over small repairs.',

  subcategories: [
    { title: 'Residential electrical repair', text: 'Outlets, switches, breakers and troubleshooting. High volume, lower job value.' },
    { title: 'Panel and service upgrades', text: 'Panel replacements and 200 amp upgrades. High value and growing demand with electrification.' },
    { title: 'EV charger installation', text: 'Level 2 home chargers and commercial charging. A fast-growing search category.' },
    { title: 'Rewiring and remodel electrical', text: 'Whole-house rewiring, additions and kitchen or basement remodels.' },
    { title: 'Generators and backup power', text: 'Standby generator installation and transfer switches.' },
    { title: 'Commercial electrical', text: 'Tenant improvements, lighting retrofits and service work for businesses and property managers.' },
  ],

  faqs: [
    {
      question: 'Can Google Ads bring EV charger installation leads?',
      answer:
        'Yes. EV charger installation is one of the fastest-growing electrical searches. A dedicated campaign and landing page with rebate and charger brand details performs much better than folding it into a general electrician campaign.',
    },
    {
      question: 'How do you avoid low-value electrical jobs?',
      answer:
        'By giving high-value services their own campaigns and budgets, capping budget on general repair, blocking DIY and price-only searches, and importing job values so bidding favors bigger work.',
    },
    {
      question: 'What budget does an electrician need for Google Ads?',
      answer:
        'It depends on your market and which services you advertise. A campaign focused on panel upgrades and EV chargers in one metro needs a different budget than a general repair campaign across a region. I recommend a starting budget after reviewing your area in the free audit.',
    },
    {
      question: 'Do you work with commercial electrical contractors?',
      answer:
        'Yes. Commercial campaigns use different keywords, longer sales cycles and landing pages written for property managers, builders and facility teams.',
    },
    {
      question: 'How fast will I see leads?',
      answer:
        'Repair and emergency campaigns can produce calls within days. Panel, EV and rewiring leads take a little longer because people compare quotes, but they are worth far more.',
    },
    {
      question: 'Do you handle Local Services Ads for electricians?',
      answer:
        'Yes, where available. Local Services Ads work well for urgent electrical searches and run alongside Search campaigns.',
    },
    {
      question: 'Can you track which keyword produced a signed job?',
      answer:
        'Yes, with call tracking, form tracking and offline conversion imports from your CRM or job management software.',
    },
    {
      question: 'Will you need to change my website?',
      answer:
        'Usually I recommend dedicated landing pages for your top services. You or your developer can build them, or I can provide the structure and copy.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your electrical business',
    text: 'I will review your campaigns, search terms and tracking and show you where high-value jobs are being missed.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-search-ads', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-hvac', 'google-ads-for-plumbers', 'google-ads-for-contractors', 'google-ads-for-home-services'],
};
