import type { IndustryPage } from '../types';

export const localBusinesses: IndustryPage = {
  slug: 'google-ads-for-local-businesses',
  sectionId: 'local-business',
  name: 'Local Businesses',
  noun: 'local businesses',

  seoTitle: 'Google Ads for Local Businesses | More Calls & Leads',
  metaDescription:
    'Google Ads for local businesses focused on service-area targeting, high-intent searches, call tracking and lead quality to generate more booked customers.',
  imageAlt: 'Google Ads lead generation for local service businesses',
  tags: ['Google Ads local business', 'local PPC', 'lead generation', 'call tracking', 'local service ads'],
  primaryKeyword: { keyword: 'google ads for local businesses', sv: 1000, kd: 45 },
  secondaryKeywords: [
    { keyword: 'google ads for local business', sv: 880, kd: 44 },
    { keyword: 'local business ppc', sv: 320, kd: 35 },
    { keyword: 'local service google ads', sv: 260, kd: 33 },
  ],
  suggestedKeywords: ['local ppc management', 'google ads for small business', 'local lead generation google ads', 'google ads near me campaigns'],
  searchIntent: 'Commercial: local business owners looking for Google Ads management to get more calls, bookings and visits.',

  h1: 'Google Ads for Local Businesses',
  heroHeadline: 'Local PPC that reaches nearby customers at the moment they need you',
  heroText:
    'Local businesses win on Google when they show up for people nearby who are ready to call, book or visit. I build local campaigns with tight service-area targeting, call and direction tracking, and ad copy that makes your business the obvious choice in your area, without the wasted clicks that come from default settings.',
  valueProps: [
    'Presence-only targeting so you pay for people in your area, not people reading about it',
    'Call, form, booking and direction-request tracking',
    'Google Business Profile connected for location and call assets',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1768180316485-2c7306ab38ff',
    alt: 'Local business storefront with open signs and plants',
    credit: 'https://unsplash.com/photos/green-storefront-with-open-signs-and-plants-oQF86wU7UDc',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76',
    alt: 'Thank you for supporting local sign in a shop window',
    credit: 'https://unsplash.com/photos/thank-you-for-supporting-local-sign-on-window-2vBTXkv-N20',
  },

  challenges: [
    {
      title: 'Ads showing outside your area',
      text: 'Google\'s default "Presence or interest" setting shows your ads to people who are merely interested in your city. For a local business, that is budget spent on people who will never walk in or call.',
    },
    {
      title: 'Competing with national brands and lead aggregators',
      text: 'Big brands and lead-selling directories bid on the same local searches. A small account needs sharper keywords and better ads to win clicks at a fair price.',
    },
    {
      title: 'Google Business Profile not connected',
      text: 'Without location assets, your ads miss calls and direction requests from Maps and lose the local trust signals that reviews provide.',
    },
    {
      title: 'Generic ads',
      text: 'Ads that do not mention your neighborhood, city or what makes you local lose to competitors whose ads do.',
    },
    {
      title: 'Conversions that are not tracked',
      text: 'Calls, bookings and store visits are the real outcomes for a local business. Most small accounts track none of them properly, so the platform cannot optimize.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research with local intent',
      text: 'I focus on the searches that signal someone nearby is ready to act: "near me", city and neighborhood names, "open now", "same day" and the specific service or product you offer.',
    },
    {
      title: 'Search campaigns first',
      text: 'Local Search campaigns capture people actively looking. Performance Max with store goals is added for businesses that want foot traffic, and Local Services Ads for eligible service categories.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'Campaigns are split by service or product line and, for multi-location businesses, by location. Ad groups stay tight so the ad matches the search.',
    },
    {
      title: 'Local ad copy',
      text: 'Headlines mention the city or neighborhood, years in the community, reviews, hours and what makes you different from the chain down the road. Call, location and review assets add trust.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting is set to the exact area your customers come from, using "Presence" so only people physically there trigger ads. Bid adjustments favor the neighborhoods that convert.',
    },
    {
      title: 'Negative keywords',
      text: 'Jobs, DIY, wholesale, "free" and unrelated brand searches are blocked before launch, with weekly additions from real search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'Local budgets are often small, so every click matters. I start with controlled bidding, then move to conversion-based bidding once calls and bookings are tracked reliably.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly search term reviews keep the account focused on the exact searches that bring customers through the door.',
    },
    {
      title: 'Landing page optimization',
      text: 'Local landing pages show the address, hours, phone number, reviews, service area and a simple way to book or call. For store visits, directions and a map are front and center.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Core Service - Search',
      goal: 'Calls and bookings from nearby customers',
      adGroups: [
        { name: 'Service + Near Me', keywords: ['"[your service] near me"', '[your service] + city'] },
        { name: 'Service + Neighborhood', keywords: ['"[your service] in [neighborhood]"', '"best [your service] [city]"'] },
      ],
    },
    {
      campaign: 'Urgent and Same Day - Search',
      goal: 'High-intent, time-sensitive searches',
      adGroups: [
        { name: 'Same Day', keywords: ['"same day [your service]"', '"[your service] open now"'] },
        { name: 'Emergency', keywords: ['"emergency [your service]"', '"24 hour [your service]"'] },
      ],
    },
    {
      campaign: 'Brand - Search',
      goal: 'Protect your name from competitors and aggregators',
      adGroups: [{ name: 'Brand', keywords: ['[your business name]', '"[your business name] reviews"'] }],
    },
    {
      campaign: 'Store Visits - Performance Max',
      goal: 'Direction requests and visits for walk-in businesses',
      adGroups: [{ name: 'Asset group by location', keywords: ['Audience signals: local searchers and past customers'] }],
    },
  ],

  negativeKeywords: [
    'jobs',
    'hiring',
    'careers',
    'salary',
    'diy',
    'how to',
    'free',
    'wholesale',
    'online course',
    'training',
    'school',
    'franchise',
    'reddit',
    'yelp',
    'craigslist',
    'amazon',
    'walmart',
    'reviews of',
    'complaints',
    'lawsuit',
  ],

  locationTargeting: {
    intro:
      'For a local business, targeting is the whole game. The difference between a profitable account and a wasteful one is often one setting.',
    points: [
      'Switch from "Presence or interest" to "Presence" so only people physically in your area see ads.',
      'Target by ZIP code, neighborhood or a tight radius around your location rather than the whole metro.',
      'Use location bid adjustments to spend more where customers convert and less where they do not.',
      'Link Google Business Profile so ads show your address, hours, reviews and directions.',
      'For multi-location businesses, run one campaign per location with its own budget and landing page.',
    ],
  },

  conversionJourney: [
    'Google Ads click or Maps impression',
    'Phone call, booking, form or direction request',
    'Qualified lead or walk-in',
    'Appointment or visit',
    'Purchase or booked service',
    'Repeat customer and reviews',
  ],
  trackingText:
    'I track calls from ads and from your website, form submissions, online bookings and direction requests as separate conversion actions through Google Tag Manager and GA4. With Google Business Profile linked, store visit and local action data appear in Google Ads too. For businesses with a booking system or POS, offline conversion tracking connects completed appointments and sales back to the search that started them.',

  subcategories: [
    { title: 'Local service businesses', text: 'Trades, cleaners, movers, pest control, locksmiths and other services booked by phone or form.' },
    { title: 'Health, wellness and personal care', text: 'Dental and medical practices, chiropractors, salons, barbershops, spas and fitness studios.' },
    { title: 'Retail and showrooms', text: 'Furniture, appliances, mattresses, auto and other stores that depend on store visits.' },
    { title: 'Restaurants and hospitality', text: 'Reservations, orders and visits driven by "near me" and "open now" searches.' },
    { title: 'Professional services', text: 'Law firms, accountants, insurance agents and consultants serving a local market.' },
    { title: 'Multi-location local brands', text: 'Franchises and regional chains that need per-location campaigns and reporting.' },
  ],

  faqs: [
    {
      question: 'Can Google Ads get more people to visit my store?',
      answer:
        'Yes. With your Google Business Profile linked, campaigns can optimize for direction requests and store visits rather than just website clicks, and ads show your address, hours and reviews.',
    },
    {
      question: 'How small a budget can a local business start with?',
      answer:
        'Smaller than most people expect, as long as the budget buys enough clicks each day to learn. I review the cost per click in your market and recommend a starting budget in the free audit.',
    },
    {
      question: 'Why am I getting calls from outside my area?',
      answer:
        'Usually because location targeting is set to "Presence or interest". Switching to "Presence" and tightening the target list fixes most of it.',
    },
    {
      question: 'Do you manage Local Services Ads?',
      answer:
        'Yes, for eligible categories. They charge per lead, appear above Search ads and work well alongside a Search campaign.',
    },
    {
      question: 'Should I bid on my own business name?',
      answer:
        'Usually yes, at a low cost. It protects your name from competitors and lead aggregators and gives you control over what people see when they search for you.',
    },
    {
      question: 'How do you track phone calls?',
      answer:
        'Calls from ads and from your website are tracked with call tracking and a minimum duration, so misdials and spam are not counted as conversions.',
    },
    {
      question: 'How quickly will I see results?',
      answer:
        'Local Search campaigns often produce calls and bookings in the first week. The first month is about cutting waste and tuning targeting so cost per customer comes down.',
    },
    {
      question: 'Do I need a new website?',
      answer:
        'Not necessarily. A focused landing page with your phone number, hours, reviews and a simple booking option usually does the job. I review your current site and recommend the smallest changes that will help.',
    },
  ],

  finalCta: {
    heading: 'Get a free local Google Ads audit',
    text: 'I will check your targeting, search terms, tracking and Google Business Profile connection and show you where local budget is being wasted.',
  },

  relatedServices: ['google-ads-management', 'google-search-ads', 'google-ads-conversion-tracking', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-dentists', 'google-ads-for-auto-services', 'google-ads-for-cleaning-businesses'],
};
