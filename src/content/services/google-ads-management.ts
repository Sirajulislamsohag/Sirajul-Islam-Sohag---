import type { ServicePage } from '../types';

export const googleAdsManagement: ServicePage = {
  slug: 'google-ads-management',
  name: 'Google Ads Management',

  seoTitle: 'Google Ads Management Services | Certified PPC Manager',
  metaDescription:
    'Done-for-you Google Ads management: strategy, keywords, bidding, tracking and clear monthly reports. Built for leads and ROAS. Get a free account review.',
  imageAlt: 'Google Ads management dashboard and PPC campaign optimization',
  tags: ['Google Ads management', 'PPC management', 'paid search management', 'campaign optimization', 'ROAS'],
  primaryKeyword: { keyword: 'google ads management', sv: 3600, kd: 60 },
  secondaryKeywords: [
    { keyword: 'google ads management service', sv: 1300, kd: 52 },
    { keyword: 'ppc management services', sv: 1900, kd: 54 },
    { keyword: 'google ppc management', sv: 480, kd: 45 },
    { keyword: 'google ads management services', sv: 720, kd: 49 },
  ],
  searchIntent: 'Commercial: businesses looking to hire someone to manage their Google Ads account.',

  h1: 'Google Ads Management Services',
  heroHeadline: 'Done-for-you Google Ads management from a certified specialist, not an agency account queue',
  heroText:
    'I manage Google Ads accounts for lead generation and e-commerce businesses, mostly in the US. You get one person who builds, tracks and optimizes your campaigns every week, with reporting that shows leads, sales and cost per result instead of clicks and impressions.',
  valueProps: [
    'One specialist on your account, with direct communication',
    'Conversion tracking set up and verified before scaling spend',
    'Weekly optimization and a monthly report you can actually read',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    alt: 'Google Ads performance graphs on a laptop screen',
    credit: 'https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00',
  },

  whoItsFor: [
    'Home service and local businesses that want more booked jobs from Search',
    'E-commerce stores running Shopping and Performance Max',
    'Businesses whose current account has never been properly tracked or optimized',
    'Companies leaving an agency and wanting direct access to the person doing the work',
  ],

  problems: [
    {
      title: 'Budget spent on the wrong searches',
      text: 'Loose match types, no negative keywords and shared budgets send money to searches that never convert. Most accounts I audit waste a meaningful share of spend this way.',
    },
    {
      title: 'Conversions that do not mean anything',
      text: 'Page views, button taps and short calls counted as conversions teach Smart Bidding to optimize for noise. Real results get worse while the dashboard looks better.',
    },
    {
      title: 'Set-and-forget management',
      text: 'Search behavior, competition and costs change every month. An account that is not reviewed weekly drifts toward waste.',
    },
    {
      title: 'Reports full of clicks and impressions',
      text: 'If your report does not tell you cost per lead, cost per sale and which campaigns produce revenue, it is not a report. It is a screenshot.',
    },
  ],

  included: [
    {
      title: 'Account audit and strategy',
      text: 'A full review of structure, keywords, search terms, bidding, tracking and landing pages, with a prioritized plan before anything changes.',
    },
    {
      title: 'Campaign build or restructure',
      text: 'Campaigns organized by service, product or intent with tight ad groups, correct match types and budgets that follow value.',
    },
    {
      title: 'Keyword and negative keyword management',
      text: 'Ongoing keyword research and a negative list that grows weekly from real search terms.',
    },
    {
      title: 'Ad copy and assets',
      text: 'Responsive search ads written for your industry, with sitelinks, callouts, call and location assets, tested and refreshed regularly.',
    },
    {
      title: 'Bidding and budget management',
      text: 'The right bid strategy for each campaign stage, with budgets shifted toward what is producing leads or sales.',
    },
    {
      title: 'Conversion tracking',
      text: 'Calls, forms, bookings and purchases tracked through Google Tag Manager and GA4, with offline conversion imports where a CRM is available.',
    },
    {
      title: 'Landing page recommendations',
      text: 'Specific changes to improve conversion rate, or structure and copy for new pages.',
    },
    {
      title: 'Reporting',
      text: 'A Looker Studio dashboard with spend, leads or sales, cost per result and trends, plus a monthly written summary of what changed and why.',
    },
  ],

  process: [
    { title: 'Audit and plan', text: 'I review your account, website and tracking and send a written plan with priorities and a recommended budget.' },
    { title: 'Tracking first', text: 'Conversion tracking is fixed or built before scaling spend so every decision is based on real data.' },
    { title: 'Build or restructure', text: 'Campaigns, ad groups, keywords, ads and assets are built or rebuilt according to the plan.' },
    { title: 'Weekly optimization', text: 'Search terms, bids, budgets, ads and landing pages are reviewed and adjusted every week.' },
    { title: 'Monthly reporting and planning', text: 'You get a dashboard and a short summary, and we agree on the next month\'s priorities.' },
  ],

  deliverables: [
    'Written audit and strategy document',
    'Campaign structure built in your own account',
    'Conversion tracking setup with documentation',
    'Negative keyword lists',
    'Looker Studio reporting dashboard',
    'Monthly performance summary',
  ],
  tools: ['Google Ads', 'Google Ads Editor', 'Google Tag Manager', 'GA4', 'Looker Studio', 'Call tracking platforms', 'CRM integrations'],

  faqs: [
    {
      question: 'How is this different from an agency?',
      answer:
        'You work directly with the person managing your account. There is no account manager layer and no junior team rotating through your campaigns. You also keep full ownership of your Google Ads account.',
    },
    {
      question: 'What does Google Ads management cost?',
      answer:
        'Management fees depend on account size and complexity. Ad spend is paid directly to Google from your own account. I give a clear quote after the free audit so you know the full picture before committing.',
    },
    {
      question: 'Is there a minimum contract?',
      answer:
        'No long contracts. Management is month to month. I ask for a reasonable first period because accounts need time to collect data and improve.',
    },
    {
      question: 'Do you work with small budgets?',
      answer:
        'Yes, as long as the budget can buy enough clicks to produce results and data. I will tell you honestly if a budget is too small for your market.',
    },
    {
      question: 'Will you work in my existing account?',
      answer:
        'Yes. I work through manager access in your own account so you keep all history and data.',
    },
    {
      question: 'How quickly will results improve?',
      answer:
        'Waste reduction usually shows within the first month. Cost per lead or ROAS improvements typically settle over 1 to 3 months as tracking matures and bidding strategies learn.',
    },
    {
      question: 'Which industries do you manage?',
      answer:
        'Mostly home services, local services, professional services and e-commerce. I have dedicated strategy pages for roofing, HVAC, plumbing, electricians, contractors, cleaning, auto services, dentists, law firms and online stores.',
    },
    {
      question: 'Do you also handle Meta or other platforms?',
      answer:
        'My focus is Google Ads and the tracking around it. For tracking, I set up GA4, GTM and server-side tracking that also supports other platforms.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads account review',
    text: 'Send me access or a few details about your business. I will review the account and show you exactly what I would change first.',
  },

  relatedServices: ['google-ads-audit', 'google-search-ads', 'google-ads-conversion-tracking', 'looker-studio-dashboard'],
  relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-roofing', 'google-ads-for-ecommerce', 'google-ads-for-local-businesses'],
};
