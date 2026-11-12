import type { IndustryPage } from '../types';

export const contractors: IndustryPage = {
  slug: 'google-ads-for-contractors',
  name: 'Contractors',
  noun: 'contractors',

  seoTitle: 'Google Ads for Contractors | PPC Lead Generation',
  metaDescription:
    'Google Ads for contractors targeting high-value projects, local searches and service areas to generate qualified calls, form leads and project inquiries.',
  imageAlt: 'Contractor Google Ads campaign dashboard showing calls and form leads',
  tags: ['Google Ads for Contractors', 'Contractor PPC', 'Contractor Lead Generation', 'Construction Marketing', 'Google Ads Management', 'Local Service Advertising'],
  primaryKeyword: { keyword: 'google ads for contractors', sv: 500 },
  secondaryKeywords: [
    { keyword: 'contractor google ads', sv: 200 },
    { keyword: 'google ads contractor', sv: 200 },
  ],
  suggestedKeywords: ['general contractor ppc', 'remodeling contractor google ads', 'construction company google ads', 'contractor lead generation', 'kitchen remodel leads'],
  searchIntent: 'Commercial: general contractors, remodelers and construction companies looking for Google Ads management to win higher-value projects.',

  h1: 'Google Ads for Contractors',
  heroHeadline: 'Contractor PPC that targets kitchen remodels and additions, not handyman calls',
  heroText:
    'Contractors win on Google Ads when the campaign is built around project types and project values. I structure contractor accounts so remodels, additions, basements and commercial work each have their own budget, targeting and landing page, with tracking that shows which searches become signed projects.',
  valueProps: [
    'Campaigns by project type so budget follows project value',
    'Negative keywords that block handyman, DIY, supplier and job-seeker searches',
    'Estimate and consultation tracking tied to signed projects through your CRM',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1772442198624-4fc4d7281e89',
    alt: 'Contractor reviewing blueprints on a construction site',
    credit: 'https://unsplash.com/photos/man-reviews-blueprints-at-construction-site-9gCRnfwSkwo',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45',
    alt: 'Kitchen remodeling project with cabinets protected during renovation',
    credit: 'https://unsplash.com/photos/kitchen-renovation-with-white-cabinets-UqNEbyRQ660',
  },

  challenges: [
    {
      title: 'Small jobs crowding out big projects',
      text: '"Contractor near me" brings a lot of small repair and handyman requests. Without a project-based structure, high-value remodels and additions never get enough budget.',
    },
    {
      title: 'Long sales cycles',
      text: 'Remodeling decisions take weeks or months. Accounts that only measure first-touch calls undervalue the searches that start the biggest projects.',
    },
    {
      title: 'Supplier, DIY and job searches',
      text: '"Kitchen cabinets for sale", "how to frame a wall" and "contractor jobs" look like contractor keywords and waste budget every day without a strong negative list.',
    },
    {
      title: 'Lead aggregators and marketplaces',
      text: 'Home service marketplaces bid on contractor searches and sell the same lead to several contractors. Your own campaigns need to send people to your own page, not a shared one.',
    },
    {
      title: 'Portfolio-free landing pages',
      text: 'Contractor buyers want to see work. Pages without project photos, reviews and licensing lose to competitors who show them.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by project type',
      text: 'Searches are grouped into kitchen remodeling, bathroom remodeling, basement finishing, additions, whole-home renovation, exterior and decks, and commercial build-outs. Each has its own project value and decision cycle.',
    },
    {
      title: 'Search campaigns first',
      text: 'Project searches with "contractor", "remodel", "cost" and city modifiers signal real intent. Search captures them. Remarketing supports the long decision cycle.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'One campaign per project type with its own budget. General contractor terms run with a capped budget and tight negatives to avoid small jobs.',
    },
    {
      title: 'Contractor ad copy',
      text: 'Ads lead with licensed and insured, design-build capability, project photos, financing, warranties and free in-home consultations. Years in business and reviews add trust.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting mirrors the cities and neighborhoods where your project values hold up, with bid adjustments toward areas with higher home values and renovation activity.',
    },
    {
      title: 'Negative keywords',
      text: 'A contractor negative list blocks DIY, suppliers, jobs, license and training searches, and handyman terms if you do not want them, with weekly additions from search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'High-value project campaigns get higher cost-per-lead targets because the projects justify it. Bidding moves to Target CPA once consultation tracking is reliable.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews surface new project phrases worth their own ad groups and remove the small-job and DIY searches that slip through.',
    },
    {
      title: 'Landing page optimization',
      text: 'Project pages with photo galleries, process overview, financing, reviews, licensing and a consultation form. For long cycles, a downloadable guide or pricing range can capture earlier-stage leads.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Kitchen Remodeling - Search',
      goal: 'In-home consultation requests',
      adGroups: [
        { name: 'Kitchen Remodel', keywords: ['[kitchen remodeling contractor]', '"kitchen remodel near me"', '"kitchen renovation company"'] },
        { name: 'Kitchen Remodel Cost', keywords: ['"kitchen remodel cost"', '"how much does a kitchen remodel cost"'] },
      ],
    },
    {
      campaign: 'Bathroom Remodeling - Search',
      goal: 'Consultation requests',
      adGroups: [
        { name: 'Bathroom Remodel', keywords: ['[bathroom remodeling contractor]', '"bathroom remodel near me"'] },
        { name: 'Shower Conversion', keywords: ['"tub to shower conversion"', '"walk in shower installation"'] },
      ],
    },
    {
      campaign: 'Additions and Basements - Search',
      goal: 'Large project inquiries',
      adGroups: [
        { name: 'Home Additions', keywords: ['"home addition contractor"', '"room addition cost"'] },
        { name: 'Basement Finishing', keywords: ['"basement finishing contractor"', '"finish basement cost"'] },
      ],
    },
    {
      campaign: 'General Contractor - Search (capped)',
      goal: 'Controlled coverage of broad terms',
      adGroups: [
        { name: 'General Contractor', keywords: ['[general contractor near me]', '"licensed general contractor"', '"home renovation contractor"'] },
      ],
    },
  ],

  negativeKeywords: [
    'jobs',
    'hiring',
    'salary',
    'license',
    'exam',
    'school',
    'diy',
    'how to',
    'youtube',
    'home depot',
    'lowes',
    'supply',
    'cabinets for sale',
    'materials',
    'software',
    'template',
    'contract template',
    'lawsuit',
    'complaints',
    'handyman',
  ],

  locationTargeting: {
    intro:
      'Project value varies a lot by neighborhood. Contractor targeting should follow where your profitable projects come from, not just where you are willing to drive.',
    points: [
      'Target cities and ZIP codes where home values support your project pricing, with "Presence" targeting.',
      'Raise bids in neighborhoods with older homes and active renovation permits.',
      'Keep commercial campaigns focused on business districts and development areas.',
      'Mention service cities in ad copy and on project landing pages.',
      'Exclude far-out areas where travel time makes projects less profitable.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or consultation request',
    'Qualified lead (in area, project type and budget fit)',
    'In-home consultation booked',
    'Proposal and signed contract',
    'Project revenue',
  ],
  trackingText:
    'Contractor projects take time to close, so first-touch tracking is only the start. I track calls and consultation forms through Google Tag Manager and GA4, then connect offline conversion tracking from your CRM, such as Buildertrend, JobTread, HubSpot or a simple spreadsheet, so signed contracts and project values are tied back to the keyword and campaign that started them. That is what lets bidding favor remodel leads over small-job calls.',

  subcategories: [
    { title: 'Kitchen and bathroom remodelers', text: 'The highest-volume remodeling searches with strong cost-research intent.' },
    { title: 'General contractors and design-build', text: 'Whole-home renovations, additions and custom projects.' },
    { title: 'Basement finishing and specialty remodelers', text: 'Focused project types with dedicated search demand.' },
    { title: 'Exterior contractors', text: 'Decks, siding, windows and outdoor living projects.' },
    { title: 'Commercial contractors', text: 'Tenant improvements, build-outs and renovations for business clients.' },
    { title: 'Custom home builders', text: 'Long cycles and high values, with land and lot searches in the mix.' },
  ],

  faqs: [
    {
      question: 'How much should a contractor spend on Google Ads?',
      answer:
        'It depends on your project types and market. Remodeling clicks are competitive, so the budget needs to buy enough consultations to produce signed projects and give the account data to optimize. I recommend a starting budget after reviewing your market in the free audit.',
    },
    {
      question: 'How do you avoid small handyman jobs?',
      answer:
        'By building campaigns around project types, capping budget on broad contractor terms, using negative keywords for handyman and repair searches if you do not want them, and importing project values so bidding favors bigger work.',
    },
    {
      question: 'How long does it take to see signed projects?',
      answer:
        'Consultation requests can start within the first two weeks. Signed contracts follow your normal sales cycle, which is why offline conversion tracking matters for measuring real results.',
    },
    {
      question: 'Do you work with Local Services Ads for contractors?',
      answer:
        'Yes, where your trade and market are eligible. They complement Search campaigns rather than replace them.',
    },
    {
      question: 'Should my ads send people to my home page?',
      answer:
        'No. Each project type should have its own landing page with photos, process, financing and a consultation form. I review your pages and recommend changes or structure for new ones.',
    },
    {
      question: 'Can you track which keyword produced a signed contract?',
      answer:
        'Yes, with call tracking, form tracking and offline conversion imports from your CRM or estimating software.',
    },
    {
      question: 'Do you handle remarketing for long sales cycles?',
      answer:
        'Yes. Remarketing keeps your projects in front of people who requested information but have not booked yet, which matters for decisions that take weeks.',
    },
    {
      question: 'Do you work with commercial contractors?',
      answer:
        'Yes. Commercial campaigns target property managers, developers and business owners with different keywords, ads and landing pages.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your contracting business',
    text: 'I will review your campaigns, search terms, tracking and project landing pages and show you where high-value projects are being missed.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-ads-audit', 'google-search-ads'],
  relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-home-services', 'google-ads-for-electricians', 'google-ads-for-plumbers'],
};
