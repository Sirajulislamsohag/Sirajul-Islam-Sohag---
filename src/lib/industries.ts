/**
 * Content for the industry landing pages at /industries/[slug].
 * Each entry targets one search intent ("google ads for X").
 * Keep claims factual: no invented client numbers here.
 */

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryPage {
  slug: string;
  /** Matches the card id in components/sections/industry-expertise.tsx */
  sectionId: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problems: { title: string; text: string }[];
  approach: { title: string; text: string }[];
  campaignTypes: string[];
  keywordExamples: string[];
  faqs: IndustryFaq[];
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: 'google-ads-for-roofing-companies',
    sectionId: 'roofing',
    name: 'Roofing Companies',
    metaTitle: 'Google Ads for Roofing Companies - Roofing PPC Management',
    metaDescription:
      'Google Ads management for roofing contractors. Get more roof repair and replacement leads from homeowners searching now, with call tracking, LSA and high-intent Search campaigns.',
    h1: 'Google Ads for Roofing Companies',
    intro:
      'Homeowners search for a roofer when they have a leak, storm damage or an old roof they need replaced. I build roofing Google Ads campaigns that show up for those searches in your service area, filter out job seekers and DIY traffic, and track every call and form so you know which jobs came from ads.',
    problems: [
      {
        title: 'Expensive clicks that never call',
        text: 'Broad keywords like "roofing" or "roof shingles" attract DIY buyers, suppliers and job seekers. Every wasted click in roofing costs real money.',
      },
      {
        title: 'No idea which leads became jobs',
        text: 'Without call tracking and offline conversion imports, Google optimizes for any form fill, not the replacement jobs that actually pay.',
      },
      {
        title: 'Storm season swings',
        text: 'Demand spikes after hail and wind events. Campaigns that are not set up to react miss the busiest weeks of the year.',
      },
    ],
    approach: [
      {
        title: 'Service-split campaigns',
        text: 'Separate campaigns for roof repair, roof replacement, storm and insurance claims, and commercial roofing, so budget goes to the jobs you want most.',
      },
      {
        title: 'Tight geo targeting',
        text: 'Targeting by the zip codes and cities you actually serve, with "presence" targeting so out-of-area searchers do not trigger your ads.',
      },
      {
        title: 'Aggressive negative keywords',
        text: 'Ongoing search term reviews to block jobs, salary, DIY, material and supplier searches.',
      },
      {
        title: 'Call and form tracking that counts',
        text: 'GA4 and GTM conversion tracking plus call tracking, with offline conversion imports so Google learns from booked inspections and signed jobs.',
      },
      {
        title: 'Local Services Ads alongside Search',
        text: 'Where available, Local Services Ads with the Google Guaranteed badge sit above Search ads and work well for urgent roofing searches.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Local Services Ads', 'Call ads and call assets', 'Remarketing', 'Performance Max (selectively)'],
    keywordExamples: ['roof repair near me', 'roof replacement cost', 'roof leak repair', 'storm damage roof repair', 'commercial roofing contractor'],
    faqs: [
      {
        question: 'How much should a roofing company spend on Google Ads?',
        answer:
          'It depends on your service area, competition and average job value. Many local roofers start with a budget that can produce at least 20 to 30 leads a month so there is enough data to optimize. I review your market and give you a realistic starting budget in the free audit.',
      },
      {
        question: 'Are Local Services Ads better than Google Search ads for roofers?',
        answer:
          'They work best together. Local Services Ads charge per lead and appear at the very top, while Search ads give more control over keywords, ad copy and landing pages. Running both usually captures more of the market.',
      },
      {
        question: 'How long before roofing Google Ads get results?',
        answer:
          'Calls can start in the first week. The first 4 to 8 weeks are about collecting search term and conversion data, cutting waste and shifting budget to the services that bring booked jobs.',
      },
      {
        question: 'Can you track which ads turned into signed roofing jobs?',
        answer:
          'Yes. With call tracking and offline conversion tracking from your CRM, Google Ads can see which clicks became inspections and closed jobs, and optimize for those instead of just leads.',
      },
    ],
  },
  {
    slug: 'google-ads-for-hvac-and-plumbing',
    sectionId: 'hvac-plumbing',
    name: 'HVAC & Plumbing',
    metaTitle: 'Google Ads for HVAC & Plumbing Companies - PPC Management',
    metaDescription:
      'Google Ads for HVAC and plumbing businesses. Capture emergency and same-day searches, track every call, and stop paying for low-intent clicks. Free account audit.',
    h1: 'Google Ads for HVAC & Plumbing Companies',
    intro:
      'When an AC fails in summer or a pipe bursts at night, people call the first trustworthy business they find on Google. I build HVAC and plumbing campaigns around those urgent searches, schedule ads around your call hours, and track calls so you see the real cost of each booked job.',
    problems: [
      {
        title: 'Emergency and maintenance mixed together',
        text: 'Urgent repair searches and seasonal maintenance searches have very different value. Mixing them in one campaign wastes budget.',
      },
      {
        title: 'Calls missed after hours',
        text: 'Ads that run when no one answers the phone turn paid clicks into lost customers.',
      },
      {
        title: 'Paying for DIY and parts searches',
        text: 'Searches for parts, how-to videos and prices bring clicks from people who will never hire a technician.',
      },
    ],
    approach: [
      {
        title: 'Emergency vs scheduled campaigns',
        text: 'Separate campaigns and budgets for emergency repair, installation and replacement, and maintenance plans.',
      },
      {
        title: 'Ad schedule matched to your phones',
        text: 'Bids raised when your team can answer and lowered or paused when they cannot.',
      },
      {
        title: 'Call-first ad setup',
        text: 'Call assets, call-focused ads and call tracking so every phone lead is measured, not just form fills.',
      },
      {
        title: 'Seasonal budget shifts',
        text: 'Budget moved to heating or cooling services as the weather changes, instead of a flat budget all year.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Call ads and call assets', 'Local Services Ads', 'Remarketing'],
    keywordExamples: ['emergency plumber near me', 'ac repair same day', 'furnace replacement', 'water heater installation', 'blocked drain plumber'],
    faqs: [
      {
        question: 'Should HVAC and plumbing run in separate campaigns?',
        answer:
          'Yes, if you offer both. Each trade has different keywords, job values and seasonality. Separate campaigns let you control budget for each and see which one is more profitable.',
      },
      {
        question: 'How do you stop ads from running when nobody can answer?',
        answer:
          'With an ad schedule based on your business hours and call data, plus bid adjustments for the hours that convert best. If you offer 24/7 service, we set up separate after-hours budgets.',
      },
      {
        question: 'Do you track phone calls from Google Ads?',
        answer:
          'Yes. Calls from ads and from the website are tracked as conversions, with a minimum call length so short or accidental calls do not count.',
      },
    ],
  },
  {
    slug: 'google-ads-for-cleaning-businesses',
    sectionId: 'cleaning',
    name: 'Cleaning Businesses',
    metaTitle: 'Google Ads for Cleaning Businesses - Commercial & Residential',
    metaDescription:
      'Google Ads for commercial and residential cleaning companies. Get more quote requests from offices, businesses and homeowners in your service area. Free account audit.',
    h1: 'Google Ads for Cleaning Businesses',
    intro:
      'Cleaning is a competitive local market where people compare a few companies and request quotes. I build cleaning campaigns that separate commercial and residential searches, target only your service areas, and make it easy for the right customers to request a quote.',
    problems: [
      {
        title: 'Residential clicks on a commercial budget',
        text: 'If you want office and commercial contracts, one-off home cleaning searches can eat the budget.',
      },
      {
        title: 'Job seekers and cleaning supplies',
        text: '"Cleaning jobs" and product searches are some of the most common wasted clicks in this industry.',
      },
      {
        title: 'Quote forms that do not convert',
        text: 'A generic home page with a long form loses visitors who wanted a fast quote.',
      },
    ],
    approach: [
      {
        title: 'Commercial and residential split',
        text: 'Separate campaigns for office, strata, end-of-lease, deep cleaning and regular home cleaning, each with its own budget.',
      },
      {
        title: 'Service-area targeting',
        text: 'Ads only in the suburbs and cities your team can reach profitably.',
      },
      {
        title: 'Negative keyword lists',
        text: 'Jobs, careers, supplies, DIY and training searches blocked from day one.',
      },
      {
        title: 'Quote-focused landing pages',
        text: 'Landing page recommendations with a short quote form, trust signals and clear service areas.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Lead form assets', 'Call assets', 'Remarketing'],
    keywordExamples: ['commercial cleaning services', 'office cleaning company', 'end of lease cleaning', 'house cleaning near me', 'strata cleaning'],
    faqs: [
      {
        question: 'Can Google Ads bring commercial cleaning contracts?',
        answer:
          'Yes. Office managers and facility managers search for commercial cleaners on Google. Campaigns focused on commercial keywords, with a landing page built for business buyers, can bring steady contract enquiries.',
      },
      {
        question: 'What is a good cost per lead for cleaning companies?',
        answer:
          'It varies by city and service type. Commercial leads usually cost more but are worth far more over a contract. I benchmark your market during the audit and set targets based on your job values.',
      },
      {
        question: 'Do I need a separate landing page for ads?',
        answer:
          'It helps. A page that matches the service searched, shows your areas and has a short quote form usually converts better than the home page.',
      },
    ],
  },
  {
    slug: 'google-ads-for-electrical-contractors',
    sectionId: 'electrical',
    name: 'Electrical Contractors',
    metaTitle: 'Google Ads for Electricians & Electrical Contractors',
    metaDescription:
      'Google Ads management for electricians and electrical contractors. Get qualified residential, commercial and EV charger installation leads, not price shoppers.',
    h1: 'Google Ads for Electrical Contractors',
    intro:
      'Electrical work ranges from small call-outs to high-value jobs like switchboard upgrades, rewiring and EV charger installations. I structure electrician campaigns around the jobs you want more of, so your budget is not spent on the smallest, most price-sensitive work.',
    problems: [
      {
        title: 'Small jobs eating the budget',
        text: 'Generic "electrician near me" traffic often brings low-value jobs. Without a service split, high-value work gets less budget.',
      },
      {
        title: 'Training and licensing searches',
        text: 'Apprenticeship, course and license searches look similar to customer searches but never convert.',
      },
      {
        title: 'Landing pages that do not match',
        text: 'Sending EV charger searchers to a general home page loses them.',
      },
    ],
    approach: [
      {
        title: 'Service-based campaigns',
        text: 'Emergency electrician, switchboard upgrades, rewiring, lighting, and EV charger installation in separate campaigns or ad groups.',
      },
      {
        title: 'Residential vs commercial',
        text: 'Different ads and budgets for homeowners and for businesses, builders and property managers.',
      },
      {
        title: 'Lead quality filters',
        text: 'Negative keywords and ad copy that set expectations, so price shoppers and DIY searchers click less.',
      },
      {
        title: 'Service landing pages',
        text: 'Each high-value service sent to a matching page, such as a dedicated EV charger installation page.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Call assets', 'Local Services Ads', 'Remarketing'],
    keywordExamples: ['emergency electrician', 'ev charger installation', 'switchboard upgrade', 'commercial electrician', 'house rewiring cost'],
    faqs: [
      {
        question: 'Can Google Ads bring EV charger installation leads?',
        answer:
          'Yes. EV charger installation is a growing search category. A dedicated campaign and landing page for it usually performs much better than including it in a general electrician campaign.',
      },
      {
        question: 'How do you avoid low-value electrical jobs?',
        answer:
          'By splitting campaigns by service, bidding more on high-value services, blocking low-intent searches, and using ad copy that is clear about the work you do.',
      },
      {
        question: 'Do you work with commercial electrical contractors?',
        answer:
          'Yes. Commercial campaigns use different keywords, longer decision cycles and often target property managers, builders and facility managers.',
      },
    ],
  },
  {
    slug: 'google-ads-for-home-service-businesses',
    sectionId: 'home-services',
    name: 'Home Service Businesses',
    metaTitle: 'Google Ads for Home Service Businesses - Lead Generation',
    metaDescription:
      'Google Ads for home service companies: roofing, HVAC, plumbing, remodeling, cleaning and more. Campaigns built around your booking capacity and job value.',
    h1: 'Google Ads for Home Service Businesses',
    intro:
      'I manage Google Ads for roofing, plumbing, HVAC, remodeling, chimney and other home service companies in the USA and Australia. The goal is simple: more booked jobs at a cost that works for your margins, with tracking that shows which campaigns actually produce revenue.',
    problems: [
      {
        title: 'Leads you cannot handle',
        text: 'Campaigns that ignore your crew capacity bring leads you cannot serve, or go quiet when you need work.',
      },
      {
        title: 'Optimizing for the wrong conversion',
        text: 'If every page view or click counts as a conversion, Google optimizes for traffic, not jobs.',
      },
      {
        title: 'Agencies that set and forget',
        text: 'Home service accounts need weekly search term reviews and budget changes. Without that, costs climb quietly.',
      },
    ],
    approach: [
      {
        title: 'Budget tied to capacity',
        text: 'Daily budgets and schedules matched to how many jobs your team can take on.',
      },
      {
        title: 'Real conversion tracking',
        text: 'Calls, forms and booked appointments tracked with GA4 and GTM, plus offline conversions from your CRM where possible.',
      },
      {
        title: 'High-intent Search first',
        text: 'Search campaigns built around "near me", "repair", "install" and "cost" searches before expanding to wider campaign types.',
      },
      {
        title: 'Weekly optimization',
        text: 'Search term reviews, negative keywords, bid strategy checks and clear reporting every week.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Local Services Ads', 'Performance Max (lead gen)', 'Call ads', 'Remarketing'],
    keywordExamples: ['kitchen remodeling near me', 'chimney repair', 'bathroom renovation cost', 'gutter installation', 'water damage restoration'],
    faqs: [
      {
        question: 'Which home service businesses do you work with?',
        answer:
          'Roofing, plumbing, HVAC, electrical, remodeling, chimney and exteriors, cleaning, and other local trades that book jobs by phone or form.',
      },
      {
        question: 'Is Performance Max good for home service leads?',
        answer:
          'It can work, but only with solid conversion tracking and strong negative signals. I usually start with Search campaigns and test Performance Max once there is reliable lead data.',
      },
      {
        question: 'What do I get in the free audit?',
        answer:
          'A review of your account structure, keywords, search terms, conversion tracking and landing pages, with a short list of the changes that would save the most money first.',
      },
    ],
  },
  {
    slug: 'google-ads-for-local-businesses',
    sectionId: 'local-business',
    name: 'Local Service Businesses',
    metaTitle: 'Google Ads for Local Businesses - Local PPC Management',
    metaDescription:
      'Local Google Ads management for service businesses and stores. Reach nearby customers ready to call, book or visit, with tight location targeting and call tracking.',
    h1: 'Google Ads for Local Service Businesses',
    intro:
      'Local businesses win on Google when they show up for nearby customers at the moment they need a service. I build local campaigns with tight location targeting, call and direction tracking, and ad copy that makes your business the obvious choice in your area.',
    problems: [
      {
        title: 'Ads showing outside your area',
        text: 'Default location settings can show ads to people who are only interested in your area, not in it.',
      },
      {
        title: 'Google Business Profile not connected',
        text: 'Without location assets, you miss calls and direction requests from Maps.',
      },
      {
        title: 'Generic ads',
        text: 'Ads that do not mention your suburb, city or service area lose to local competitors.',
      },
    ],
    approach: [
      {
        title: 'Presence-only location targeting',
        text: 'Ads shown to people physically in or regularly in your service area.',
      },
      {
        title: 'Location and call assets',
        text: 'Google Business Profile linked for location assets, plus call assets and call tracking.',
      },
      {
        title: 'Local ad copy',
        text: 'Headlines and landing pages that mention the areas you serve.',
      },
      {
        title: 'Store visit and direction goals',
        text: 'For walk-in businesses, campaigns optimized for direction requests and store visits.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Performance Max for store goals', 'Call and location assets', 'Local Services Ads'],
    keywordExamples: ['[service] near me', '[service] in [city]', 'best [service] [suburb]', 'open now', 'same day [service]'],
    faqs: [
      {
        question: 'Can Google Ads get more people to visit my store?',
        answer:
          'Yes. With your Google Business Profile linked, campaigns can optimize for direction requests and store visits, not just website clicks.',
      },
      {
        question: 'How small a budget can a local business start with?',
        answer:
          'Many local businesses start small, but the budget needs to buy enough clicks each day to learn. I recommend a starting budget based on your local cost per click during the audit.',
      },
      {
        question: 'Do you manage Local Services Ads too?',
        answer:
          'Yes, for eligible industries and countries. Local Services Ads work well alongside Search campaigns.',
      },
    ],
  },
  {
    slug: 'google-ads-for-ecommerce',
    sectionId: 'ecommerce',
    name: 'E-commerce',
    metaTitle: 'Google Ads for E-commerce - Shopping & Performance Max',
    metaDescription:
      'Google Ads management for e-commerce stores: Shopping, Performance Max, feed optimization and accurate purchase tracking to grow sales at a profitable ROAS.',
    h1: 'Google Ads for E-commerce Brands',
    intro:
      'For online stores, Google Ads is about selling the right products at a profitable return. I manage Shopping and Performance Max campaigns, optimize your product feed in Merchant Center, and make sure purchase tracking is accurate so Smart Bidding has the right data.',
    problems: [
      {
        title: 'One Performance Max for everything',
        text: 'A single campaign for all products lets a few best-sellers take the budget while other products never get a chance.',
      },
      {
        title: 'Weak product feed',
        text: 'Poor titles, missing attributes and disapprovals limit how often your products show.',
      },
      {
        title: 'Inaccurate purchase tracking',
        text: 'Duplicate or missing purchase events make ROAS numbers wrong and confuse Smart Bidding.',
      },
    ],
    approach: [
      {
        title: 'Product segmentation',
        text: 'Campaigns split by margin, category or performance so budget follows profit, not just volume.',
      },
      {
        title: 'Feed optimization',
        text: 'Better titles, product types, custom labels and supplemental feeds in Merchant Center.',
      },
      {
        title: 'Accurate purchase tracking',
        text: 'GA4, GTM and enhanced conversions set up so purchase value is tracked once and correctly, with server-side tracking where needed.',
      },
      {
        title: 'Brand and non-brand split',
        text: 'Brand searches separated so you can see the true performance of new customer acquisition.',
      },
    ],
    campaignTypes: ['Performance Max', 'Standard Shopping', 'Search (brand and non-brand)', 'Remarketing', 'YouTube'],
    keywordExamples: ['buy [product] online', '[product] free shipping', 'best [product] for [use]', '[brand] [product]', 'custom [product] gift'],
    faqs: [
      {
        question: 'Is Performance Max or Standard Shopping better?',
        answer:
          'It depends on your catalog, data and goals. Many stores use Performance Max for scale with Standard Shopping for control over specific products. I decide based on your account data.',
      },
      {
        question: 'Do you work with Shopify and WooCommerce?',
        answer:
          'Yes. I set up and audit purchase tracking on Shopify and WooCommerce, including data layer events, enhanced conversions and server-side tracking.',
      },
      {
        question: 'Can you fix Merchant Center disapprovals?',
        answer:
          'Yes. I review feed errors, policy issues and account warnings and help resolve them so products can show again.',
      },
    ],
  },
  {
    slug: 'google-ads-for-auto-and-tyre-services',
    sectionId: 'auto-tyre',
    name: 'Auto & Tyre Services',
    metaTitle: 'Google Ads for Auto Repair & Mobile Tyre Services',
    metaDescription:
      'Google Ads for auto repair shops, mobile tyre fitters and car service businesses. Fill your booking calendar with local, service-specific campaigns.',
    h1: 'Google Ads for Auto & Tyre Services',
    intro:
      'Drivers search Google when they have a flat tyre, a warning light or a service due. I build auto and tyre campaigns around specific services and locations, so you appear for urgent and planned searches and fill your booking calendar.',
    problems: [
      {
        title: 'Broad terms with high costs',
        text: '"Car repair" and "tyres" are expensive and mixed with shopping and DIY searches.',
      },
      {
        title: 'Mobile service area confusion',
        text: 'Mobile tyre fitters need targeting by the areas the van can actually reach.',
      },
      {
        title: 'Bookings not tracked',
        text: 'Online booking systems and calls are often not connected to Google Ads conversions.',
      },
    ],
    approach: [
      {
        title: 'Service-specific campaigns',
        text: 'Mobile tyre fitting, puncture repair, brakes, servicing and MOT or inspections in separate ad groups.',
      },
      {
        title: 'Urgent search coverage',
        text: 'Ads and schedules built for emergency searches like flat tyres and roadside help.',
      },
      {
        title: 'Booking and call tracking',
        text: 'Calls and online bookings tracked as conversions so you see cost per booking.',
      },
      {
        title: 'Radius targeting',
        text: 'For mobile services, targeting set around the area your vans can reach quickly.',
      },
    ],
    campaignTypes: ['Search campaigns', 'Call ads and call assets', 'Remarketing'],
    keywordExamples: ['mobile tyre fitting near me', 'emergency tyre replacement', 'puncture repair', 'car service near me', 'brake repair cost'],
    faqs: [
      {
        question: 'Does Google Ads work for mobile tyre fitting?',
        answer:
          'Yes. Mobile tyre searches are often urgent and local, which suits call-focused Search campaigns with radius targeting.',
      },
      {
        question: 'Can you track bookings from my online booking system?',
        answer:
          'In most cases, yes. Booking confirmations can be tracked through GTM or the booking platform, and calls through call tracking.',
      },
      {
        question: 'Should I bid on tyre brand names?',
        answer:
          'Sometimes. Brand plus "fitted" or "near me" searches can convert well for fitters. Pure brand searches often bring online shoppers, so they are tested carefully.',
      },
    ],
  },
];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return INDUSTRY_PAGES.find((page) => page.slug === slug);
}

export function industryHrefForSection(sectionId: string): string | undefined {
  const page = INDUSTRY_PAGES.find((p) => p.sectionId === sectionId);
  return page ? `/industries/${page.slug}` : undefined;
}
