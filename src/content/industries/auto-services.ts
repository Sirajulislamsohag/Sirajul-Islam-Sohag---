import type { IndustryPage } from '../types';

export const autoServices: IndustryPage = {
  slug: 'google-ads-for-auto-services',
  sectionId: 'auto-tyre',
  name: 'Auto Repair & Tire Shops',
  noun: 'auto repair and tire shops',

  seoTitle: 'Google Ads for Auto Repair & Tire Shops | More Calls',
  metaDescription:
    'Google Ads for auto repair and tire businesses using service-specific keywords, local targeting and call tracking to generate more booked appointments.',
  imageAlt: 'Google Ads campaign for auto repair and tire service businesses',
  tags: ['Google Ads auto repair', 'tire shop PPC', 'automotive leads', 'local ads', 'call tracking'],
  primaryKeyword: { keyword: 'google ads for auto repair', sv: 320, kd: 28 },
  secondaryKeywords: [
    { keyword: 'auto repair ppc', sv: 210, kd: 24 },
    { keyword: 'google ads for tire shops', sv: 110, kd: 21 },
    { keyword: 'ppc for auto repair shops', sv: 90, kd: 19 },
  ],
  suggestedKeywords: ['auto shop advertising google', 'mechanic google ads', 'mobile tire service ads', 'auto repair lead generation', 'brake repair google ads'],
  searchIntent: 'Commercial: owners of auto repair shops, tire shops and mobile tire services looking for Google Ads management.',

  h1: 'Google Ads for Auto Repair & Tire Shops',
  heroHeadline: 'Automotive PPC that fills your bays and booking calendar',
  heroText:
    'Drivers search Google when a warning light comes on, a tire goes flat or a service is due. I build auto repair and tire campaigns around specific services and the area around your shop, so you show up for urgent and planned searches and every call or booking is tracked back to the ad that produced it.',
  valueProps: [
    'Service-specific campaigns: tires, brakes, diagnostics, oil changes, mobile tire service',
    'Radius and ZIP targeting around your shop or mobile service area',
    'Call and online booking tracking so you know cost per appointment',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1727893119356-1702fe921cf9',
    alt: 'Mechanics working on cars in an auto repair shop',
    credit: 'https://unsplash.com/photos/mechanics-working-in-automotive-repair-workshop-8t6tk7LYLrE',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f',
    alt: 'Auto mechanic inspecting a car engine',
    credit: 'https://unsplash.com/photos/mechanic-inspecting-car-engine-bEGTsOCnHro',
  },

  challenges: [
    {
      title: 'Broad automotive terms are expensive and messy',
      text: '"Car repair" and "tires" mix shoppers, DIY mechanics and parts buyers with real customers. Paying for all of them makes cost per appointment look terrible.',
    },
    {
      title: 'Parts and DIY searches',
      text: '"Brake pads price", "how to change a tire" and "tires for sale online" are product or DIY searches, not service requests.',
    },
    {
      title: 'National chains and tire retailers',
      text: 'Big brands bid on local automotive searches with large budgets. Independent shops need tighter keywords and stronger local ads to compete.',
    },
    {
      title: 'Bookings not connected to ads',
      text: 'Online booking tools and phone calls are often not tracked as conversions, so the account cannot learn which searches fill the schedule.',
    },
    {
      title: 'Mobile service areas that are hard to target',
      text: 'Mobile tire fitters and mobile mechanics need targeting based on where the van can profitably reach, not a single point on a map.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by service',
      text: 'Automotive searches are grouped into tires (new tires, tire repair, mobile tire service), brakes, diagnostics and check engine light, maintenance (oil change, inspection), AC repair, transmission and specialty services. Each gets its own keywords and budget.',
    },
    {
      title: 'Search campaigns first',
      text: 'Urgent automotive needs are solved on Search. Campaigns start with the services that bring the most profitable appointments, then expand.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'Each service line is its own campaign. Ad groups are tight so "brake repair near me" sees a brake ad with brake-specific landing page, not a general auto repair page.',
    },
    {
      title: 'Automotive ad copy',
      text: 'Ads lead with same-day appointments, ASE-certified technicians where applicable, warranties, price transparency, free inspections and the brands or vehicles you specialize in.',
    },
    {
      title: 'Location targeting',
      text: 'Shops target a tight radius or ZIP list around the location. Mobile services target the full coverage area with presence-only settings so you do not pay for people outside it.',
    },
    {
      title: 'Negative keywords',
      text: 'A pre-built automotive negative list blocks parts, DIY, jobs, dealerships, car sales and unrelated vehicle types before launch and grows weekly.',
    },
    {
      title: 'Budget and bidding',
      text: 'Higher-value services such as brakes, diagnostics and tire sets get priority budget. Oil changes and inspections run with tighter cost-per-lead targets and often lead to upsells.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews move converting searches into keywords and remove the shopping and DIY searches that slip through.',
    },
    {
      title: 'Landing page optimization',
      text: 'Each service page has a tap-to-call button, online booking, shop hours, location, reviews and clear pricing guidance where you can offer it.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Tires - Search',
      goal: 'Tire sales and installation appointments',
      adGroups: [
        { name: 'Tire Shop', keywords: ['[tire shop near me]', '"tire store"', '"new tires near me"'] },
        { name: 'Tire Repair', keywords: ['"flat tire repair"', '"tire patch near me"', '"tire plug"'] },
        { name: 'Mobile Tire Service', keywords: ['"mobile tire service"', '"mobile tire repair near me"', '"tire change at home"'] },
      ],
    },
    {
      campaign: 'Brakes - Search',
      goal: 'Brake repair appointments',
      adGroups: [
        { name: 'Brake Repair', keywords: ['[brake repair]', '"brake repair near me"', '"brake pad replacement"'] },
        { name: 'Brake Service', keywords: ['"brake service"', '"brakes squeaking"'] },
      ],
    },
    {
      campaign: 'Diagnostics and Repair - Search',
      goal: 'Diagnostic and repair bookings',
      adGroups: [
        { name: 'Check Engine Light', keywords: ['"check engine light diagnostic"', '"car diagnostic near me"'] },
        { name: 'Auto Repair', keywords: ['[auto repair shop]', '"mechanic near me"', '"car repair near me"'] },
        { name: 'AC Repair', keywords: ['"car ac repair"', '"car ac not blowing cold"'] },
      ],
    },
    {
      campaign: 'Maintenance - Search',
      goal: 'Oil change and inspection bookings that lead to upsells',
      adGroups: [
        { name: 'Oil Change', keywords: ['[oil change near me]', '"synthetic oil change"'] },
        { name: 'State Inspection', keywords: ['"state inspection near me"', '"car inspection station"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'salary',
    'school',
    'training',
    'diy',
    'how to',
    'youtube',
    'parts',
    'autozone',
    'advance auto',
    'oreilly',
    'amazon',
    'for sale',
    'used cars',
    'dealership',
    'lease',
    'bike',
    'motorcycle',
    'boat',
    'rv',
  ],

  locationTargeting: {
    intro:
      'Drivers rarely travel far for a repair shop, and mobile services are limited by van travel time. Targeting should match the real pull of your location.',
    points: [
      'For a shop, target a tight radius or a list of surrounding ZIP codes rather than the whole city.',
      'For mobile tire or mobile mechanic services, target the full coverage area with "Presence" targeting.',
      'Raise bids near major commuter routes and dense residential areas close to the shop.',
      'Mention the neighborhood, nearby landmarks or highway exits in ad copy and on landing pages.',
      'Exclude areas with strong competitor density if your data shows they rarely convert.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or online booking',
    'Qualified lead (in area, real service need)',
    'Appointment booked',
    'Vehicle serviced',
    'Revenue and repeat customer',
  ],
  trackingText:
    'I track calls from ads and from landing pages with call tracking and a minimum duration, and track online bookings through Google Tag Manager with most booking tools and shop management systems. GA4 records the full path from click to booking. Where your shop software exports completed repair orders, I add offline conversion tracking so repair order value is connected back to the ad and keyword that brought the customer in.',

  subcategories: [
    { title: 'Independent auto repair shops', text: 'General repair, diagnostics and maintenance for all makes.' },
    { title: 'Tire shops and tire dealers', text: 'New tires, installation, balancing, alignment and repair.' },
    { title: 'Mobile tire and mobile mechanic services', text: 'At-home and roadside service with travel-area targeting.' },
    { title: 'Brake, transmission and specialty shops', text: 'Higher-ticket repairs with strong search intent.' },
    { title: 'Quick lube and inspection centers', text: 'High-volume, lower-ticket services that depend on convenience and location.' },
    { title: 'Dealer-alternative and European specialists', text: 'Shops specializing in specific makes, with brand-focused keyword strategies.' },
  ],

  faqs: [
    {
      question: 'Does Google Ads work for an independent auto repair shop?',
      answer:
        'Yes. Drivers with a problem search Google and call the nearest trustworthy shop. Service-specific campaigns with tight local targeting let independent shops compete with chains on the searches that matter.',
    },
    {
      question: 'Does Google Ads work for mobile tire service?',
      answer:
        'Yes. Mobile tire searches are urgent and local, which suits call-focused Search campaigns with coverage-area targeting.',
    },
    {
      question: 'How much should an auto shop spend?',
      answer:
        'It depends on your market, how many services you promote and how many bays you can fill. The budget needs to buy enough clicks for steady appointments. I recommend a starting figure after reviewing your area.',
    },
    {
      question: 'Can you track bookings from my online scheduling tool?',
      answer:
        'In most cases, yes. Booking confirmations are tracked through Google Tag Manager, and calls through call tracking, so each appointment is attributed to the search that produced it.',
    },
    {
      question: 'Should I bid on tire brand names?',
      answer:
        'Sometimes. Brand plus "installed" or "near me" searches can convert well for tire shops. Pure brand searches often come from online shoppers, so they are tested carefully with separate budgets.',
    },
    {
      question: 'How do you keep out parts and DIY searches?',
      answer:
        'With a negative keyword list covering parts retailers, DIY phrases and product terms, reviewed weekly against your real search terms.',
    },
    {
      question: 'How fast will I see appointments?',
      answer:
        'Urgent services such as tire repair and brakes can produce calls within days. Maintenance campaigns build more gradually as people schedule around their own timing.',
    },
    {
      question: 'Do you need access to my website?',
      answer:
        'For tracking, yes. I install Google Tag Manager and conversion tags, and recommend landing page improvements that you or your developer can apply.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your auto or tire business',
    text: 'I will review your campaigns, search terms, targeting and booking tracking and show you which services are paying for themselves.',
  },

  relatedServices: ['google-ads-management', 'google-search-ads', 'google-ads-conversion-tracking', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-local-businesses', 'google-ads-for-home-services', 'google-ads-for-cleaning-businesses', 'google-ads-for-plumbers'],
};
