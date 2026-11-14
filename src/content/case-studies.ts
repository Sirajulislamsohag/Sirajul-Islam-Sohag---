/**
 * Real Google Ads case studies. Every number here comes from the account
 * screenshots in /public/case-studies/<slug>/. Where the original write-up and
 * the screenshot disagreed, the screenshot figure is used.
 *
 * Content rules:
 * - Strategy, tracking and the optimization example state only what the
 *   original write-ups and account screenshots show was actually done.
 * - No client business names anywhere (describe the business type instead).
 * - Screenshots are cropped so no account names, emails, IDs or phone numbers show.
 */

export interface CaseStudyImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudyScreenshot extends CaseStudyImage {
  caption: string;
}

export interface CaseStudyResultRow {
  label: string;
  before?: string;
  after: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  /** H1 */
  title: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Short label shown on cards, e.g. "Roofing" */
  industry: string;
  /** Industry landing page slugs this case study supports */
  relatedIndustries: string[];
  thumbnail: CaseStudyImage;
  /** One or two sentences for cards */
  summary: string;
  /** Hero introduction (uses the primary keyword) */
  intro: string;
  targetMarket: string;
  role: string;
  campaignType: string;
  duration: string;
  /** The one verified result shown in the hero */
  heroResult: { value: string; label: string };
  period: { before?: string; after: string };
  highlights: { value: string; label: string }[];
  results: CaseStudyResultRow[];
  /** Honest context a reader needs to read the numbers correctly */
  notes?: string[];
  /** Small label above the H1 */
  eyebrow: string;
  screenshotsHeading: string;
  screenshotsIntro: string;
  screenshots: CaseStudyScreenshot[];
  /** Only challenges that actually existed */
  challengesIntro: string;
  challenges: string[];
  strategyHeading: string;
  strategyIntro: string;
  strategy: TitledText[];
  trackingIntro: string;
  tracking: TitledText[];
  approachHeading: string;
  approach: TitledText[];
  /** A real optimization from this account */
  realExample: string;
  outcome: string;
}

const ROLE = 'Google Ads manager: campaign restructure, conversion tracking and monthly management';
const PRIVACY = 'Business names, emails and IDs are hidden for privacy. Click any image to enlarge it.';

const shot = (slug: string, n: number, width: number, height: number, alt: string, caption: string): CaseStudyScreenshot => ({
  src: `/case-studies/${slug}/${String(n).padStart(2, '0')}.webp`,
  width,
  height,
  alt,
  caption,
});

const thumb = (file: string, alt: string): CaseStudyImage => ({
  src: `/case-studies/thumbs/${file}.webp`,
  width: 1200,
  height: 900,
  alt,
});

/** How I approach local lead generation accounts (home services, roofing, contractors). */
const localLeadApproach = (noun: string): TitledText[] => [
  {
    title: 'Search intent',
    text: `I separate high-intent service searches, like repair, replacement and "near me" searches, from research and irrelevant searches, so the budget goes to people ready to call a ${noun}.`,
  },
  {
    title: 'Location targeting',
    text: 'Budget is focused on the cities and areas the business actually serves, so ads do not pay for clicks from people the crew cannot reach.',
  },
  {
    title: 'Conversion tracking',
    text: 'Calls and form submissions are tracked as separate conversions with Google Tag Manager, GA4 and Google Ads conversion tracking, so I can see which campaigns produce real leads.',
  },
  {
    title: 'Search terms',
    text: 'I review the search terms report regularly and add negative keywords for irrelevant searches, such as jobs, DIY and supply searches.',
  },
  {
    title: 'Landing pages',
    text: 'The page each ad sends traffic to should match the service being advertised, so a repair searcher lands on a repair page with a clear call button.',
  },
  {
    title: 'Lead quality',
    text: 'I look beyond the number of leads at whether calls and forms are real customers, and use that to decide where the next dollar of budget goes.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'home-services-google-ads',
    eyebrow: 'Google Ads Case Study for Home Service Business',
    title: 'How I Generated Leads for a Home Services Company With Google Ads',
    seoTitle: 'Home Services Google Ads Case Study | PPC Lead Generation',
    metaDescription:
      'Explore how I managed Google Ads for a home services company, optimized campaigns, improved conversion tracking, and generated calls and leads.',
    primaryKeyword: 'Google Ads case study for home services',
    secondaryKeywords: [
      'Home services Google Ads case study',
      'Google Ads for home service businesses',
      'Home services PPC case study',
      'Google Ads lead generation case study',
      'PPC campaign for home services',
      'Home service lead generation with Google Ads',
      'Google Ads results for contractors',
    ],
    industry: 'Home Services',
    relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-local-businesses', 'google-ads-for-contractors'],
    thumbnail: thumb('home-services-company', 'Home services Google Ads case study results: 282 phone calls and 117 lead forms in one month'),
    summary:
      'Restructured Google Ads for a home services business by service and city. Monthly phone calls grew from 67 to 282 and cost per conversion dropped 11%.',
    intro:
      'This Google Ads case study for home services shows how I restructured underperforming Google Ads campaigns for a US home services company. The goal was more phone calls and form leads at a lower cost per conversion, with a campaign structure that could take more budget.',
    targetMarket: 'Homeowners in the company’s service areas, USA',
    role: ROLE,
    campaignType: 'Search and Performance Max',
    duration: 'October to December 2025',
    heroResult: { value: '67 to 282', label: 'Phone calls a month' },
    period: { before: 'October 2025', after: 'December 2025' },
    highlights: [
      { value: '282', label: 'Phone calls a month (from 67)' },
      { value: '117', label: 'Form leads a month (from 54)' },
      { value: '-11%', label: 'Cost per conversion' },
    ],
    results: [
      { label: 'Phone calls', before: '67', after: '282' },
      { label: 'Lead form submissions', before: '54', after: '117' },
      { label: 'Cost per conversion', before: '$104', after: '$92.53' },
      { label: 'Ad spend', before: '$9.88K', after: '$27.6K' },
    ],
    notes: [
      'Monthly ad spend increased from $9.88K to $27.6K over this period, so part of the lead growth came from a larger budget. Cost per conversion still went down while spend scaled.',
    ],
    screenshotsHeading: 'Home Services Google Ads Results: Before and After Campaign Performance',
    screenshotsIntro: `These results come directly from the client's Google Ads campaigns and show the before and after numbers behind this home services PPC case study: phone calls, form leads, cost per conversion and ad spend. As in any Google Ads lead generation case study, calls and leads matter more than clicks. ${PRIVACY}`,
    screenshots: [
      shot('home-services-google-ads', 1, 1600, 605, 'Home services Google Ads results for December 2025: 282 phone calls, 117 lead forms, $92.53 cost per conversion', 'December 2025 (after): 282 phone calls, 117 lead forms, $92.53 cost per conversion, $27.6K spend.'),
      shot('home-services-google-ads', 2, 1464, 432, 'Home services Google Ads results for October 2025: 67 phone calls, 54 lead forms, $104 cost per conversion', 'October 2025 (before): 67 phone calls, 54 lead forms, $104 cost per conversion, $9.88K spend.'),
    ],
    challengesIntro: 'This home services Google Ads case study starts with a company that was already getting some calls from Google Ads, but the campaigns were not set up to grow.',
    challenges: [
      'High cost per conversion: $104 per lead in October 2025.',
      'Low call volume: 67 phone calls and 54 form leads in a month.',
      'Weak campaign structure that was not organized around services or locations.',
      'Keyword targeting that was not focused on high-intent local service searches.',
      'Lead quality that varied from month to month.',
    ],
    strategyHeading: 'PPC campaign for home services: the Google Ads strategy',
    strategyIntro:
      'Here is how I rebuilt this PPC campaign for home services, so the budget followed the services and cities that book the most jobs.',
    strategy: [
      {
        title: 'Campaign structure',
        text: 'Separate campaigns for each core service and each city, using Search and Performance Max, plus separate brand search campaigns per city.',
      },
      {
        title: 'Keyword research',
        text: 'Keywords focused on high-intent local service searches, the kind people make when they need the job done now.',
      },
      {
        title: 'Location targeting',
        text: 'Each city has its own campaigns, so budget and bids can be set by area instead of across the whole service region.',
      },
      {
        title: 'Ad copy and assets',
        text: 'Ads rewritten around calling now, current offers and trust signals.',
      },
      {
        title: 'Bidding strategy',
        text: 'Bid strategy adjusted campaign by campaign based on each campaign’s conversion data.',
      },
      {
        title: 'Budget allocation',
        text: 'Budgets set per campaign and scaled toward the services and cities producing leads, from $9.88K to $27.6K a month.',
      },
    ],
    trackingIntro:
      'Accurate home service lead generation with Google Ads starts with tracking every call and form, so bidding learns from real leads.',
    tracking: [
      {
        title: 'Phone call tracking',
        text: 'Phone calls are tracked as their own conversion, so the growth from 67 to 282 calls a month is measured directly.',
      },
      {
        title: 'Form submission tracking',
        text: 'Lead form submissions are tracked as a separate conversion from calls.',
      },
      {
        title: 'Conversion tracking review',
        text: 'Call and form conversion tracking was reviewed and cleaned up during the restructure.',
      },
      {
        title: 'Call and lead quality',
        text: 'Call quality and lead quality were monitored alongside volume, not just the conversion count.',
      },
    ],
    approachHeading: 'My Google Ads Optimization Approach for Home Service Businesses',
    approach: localLeadApproach('home services company'),
    realExample:
      'The original campaigns were not organized around services or locations, so budget could not follow the work the company wanted most. I split it into separate campaigns for each core service and city, plus separate brand campaigns per city. In December 2025 those campaigns ran with Google Ads optimization scores between 88.6% and 100%, and monthly calls grew from 67 to 282.',
    outcome:
      'The business now gets several times more calls and form leads each month at a lower cost per conversion, with campaigns organized so budget can follow the services and cities that book the most jobs. That is what Google Ads for home service businesses should deliver, and the kind of Google Ads results for contractors I aim for with every client: more booked work, not just more clicks.',
  },
  {
    slug: 'roofing-construction-google-ads',
    eyebrow: 'Google Ads Case Study for Roofing and Construction Business',
    title: 'How I Cut a Roofing and Construction Company’s Cost per Lead With Google Ads',
    seoTitle: 'Roofing Google Ads Case Study | PPC Lead Generation',
    metaDescription:
      'See how I managed Google Ads for a roofing and construction company, cleaned up search terms and tracking, and cut cost per lead from $176 to $36.67.',
    primaryKeyword: 'Google Ads case study for roofing companies',
    secondaryKeywords: [
      'Roofing Google Ads case study',
      'Roofing PPC case study',
      'Google Ads for roofing and construction companies',
      'Roofing lead generation case study',
      'PPC campaign for roofing companies',
      'Contractor Google Ads case study',
    ],
    industry: 'Roofing & Construction',
    relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-contractors', 'google-ads-for-home-services'],
    thumbnail: thumb('roofing-construction', 'Roofing Google Ads case study results: 38 lead forms, 21 phone calls, $36.67 cost per conversion'),
    summary:
      'Rebuilt Search and Performance Max around roofing services. In one month, form leads doubled, calls grew from 6 to 21 and cost per conversion fell 79%.',
    intro:
      'This Google Ads case study for roofing companies shows how I turned low-performing Google Ads campaigns for a US roofing and construction company around in one month, with more calls and form leads from high-intent local roofing searches at a much lower cost per lead.',
    targetMarket: 'Homeowners needing roofing work in the company’s service area, USA',
    role: ROLE,
    campaignType: 'Search and Performance Max',
    duration: 'November to December 2025',
    heroResult: { value: '$176 to $36.67', label: 'Cost per conversion' },
    period: { before: 'November 2025', after: 'December 2025' },
    highlights: [
      { value: '-79%', label: 'Cost per conversion ($176 to $36.67)' },
      { value: '2x', label: 'Form leads (19 to 38)' },
      { value: '3.5x', label: 'Phone calls (6 to 21)' },
    ],
    results: [
      { label: 'Lead form submissions', before: '19', after: '38' },
      { label: 'Phone calls', before: '6', after: '21' },
      { label: 'Cost per conversion', before: '$176', after: '$36.67' },
      { label: 'Clicks', before: '187', after: '1.03K' },
    ],
    screenshotsHeading: 'Roofing Google Ads Results: Before and After Lead Growth',
    screenshotsIntro: `These results from the client's Google Ads campaigns show the before and after numbers in this roofing Google Ads case study: form leads, phone calls, clicks and cost per conversion. ${PRIVACY}`,
    screenshots: [
      shot('roofing-construction-google-ads', 1, 1600, 522, 'Roofing Google Ads results for December 2025: 38 lead forms, 21 phone calls, $36.67 cost per conversion', 'December 2025 (after): 1.03K clicks, 38 lead forms, 21 phone calls, $36.67 cost per conversion.'),
      shot('roofing-construction-google-ads', 2, 1552, 430, 'Roofing Google Ads results for November 2025: 19 lead forms, 6 phone calls, $176 cost per conversion', 'November 2025 (before): 187 clicks, 19 lead forms, 6 phone calls, $176 cost per conversion.'),
    ],
    challengesIntro: 'This contractor Google Ads case study starts with a familiar problem: the business was spending on roofing searches but producing very few leads.',
    challenges: [
      'High cost per lead: $176 per conversion in November 2025.',
      'Low lead volume: 19 form leads and 6 phone calls in a month.',
      'Wasted budget: search terms included low-intent traffic.',
      'Limited keyword refinement.',
    ],
    strategyHeading: 'PPC campaign for roofing companies: the Google Ads strategy',
    strategyIntro: 'Here is how I rebuilt this PPC campaign for roofing companies in one month. The same approach works for Google Ads for roofing and construction companies that sell both repairs and larger projects.',
    strategy: [
      {
        title: 'Campaign structure',
        text: 'Campaigns restructured by roofing service, running on Search and Performance Max.',
      },
      {
        title: 'Keyword research',
        text: 'Targeting focused on high-intent local roofing searches, such as roof repair and roof replacement.',
      },
      {
        title: 'Negative keywords',
        text: 'Search terms reviewed and cleaned up, with negative keywords added for low-intent and irrelevant searches.',
      },
      {
        title: 'Ad copy and assets',
        text: 'Ad copy rewritten for roof repair and roof replacement searches.',
      },
      {
        title: 'Performance Max',
        text: 'Performance Max optimized for service-based intent rather than broad roofing traffic.',
      },
    ],
    trackingIntro: 'In any roofing lead generation case study, the numbers only mean something when every call and form is measured.',
    tracking: [
      {
        title: 'Phone call tracking',
        text: 'Phone calls tracked as their own conversion (6 in November, 21 in December).',
      },
      {
        title: 'Form submission tracking',
        text: 'Lead form submissions tracked separately from calls (19 in November, 38 in December).',
      },
      {
        title: 'Conversion tracking review',
        text: 'Call and form conversion tracking reviewed so bidding learned from real leads.',
      },
    ],
    approachHeading: 'My Google Ads Optimization Approach for Roofing Companies',
    approach: localLeadApproach('roofing company'),
    realExample:
      'Part of the budget was going to low-intent searches that never became roofing leads. I reviewed the search terms, added negative keywords for the irrelevant queries and narrowed targeting to local roofing searches. Within a month clicks grew from 187 to 1.03K and cost per conversion fell from $176 to $36.67.',
    outcome:
      'Within a month the business was getting twice the form leads and more than three times the phone calls at a fraction of the previous cost per conversion, all from high-intent roofing searches. It is a good example of a roofing PPC case study where fixing search terms mattered more than raising the budget.',
  },
  {
    slug: 'roofing-google-ads',
    eyebrow: 'Google Ads Case Study for Roofing Business',
    title: 'How I Lowered a Roofing Company’s Cost per Lead by 29% With Google Ads',
    seoTitle: 'Roofing Google Ads Results | 29% Lower Cost per Lead',
    metaDescription:
      'See how I optimized Google Ads for a roofing company, focusing budget on high-intent roof repair searches and cutting cost per lead from $54.76 to $38.99.',
    primaryKeyword: 'Roofing Google Ads results',
    secondaryKeywords: [
      'Roofing PPC cost per lead',
      'Lower cost per lead with Google Ads',
      'Roofing lead generation with Google Ads',
      'Google Ads optimization for roofers',
      'Performance Max for roofing',
    ],
    industry: 'Roofing',
    relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-home-services'],
    thumbnail: thumb('roofing-lower-cost', 'Roofing Google Ads results: 54 lead forms, 31 phone calls, $38.99 cost per conversion'),
    summary:
      'Tightened roofing keywords and cleaned up search terms. Cost per conversion fell from $54.76 to $38.99 and monthly form leads rose 28% on a smaller budget.',
    intro:
      'These roofing Google Ads results come from a US roofing company that was already getting leads but paying too much for each one. I focused the budget on high-intent roofing searches to lower the roofing PPC cost per lead.',
    targetMarket: 'Homeowners needing roof repair or replacement, USA',
    role: ROLE,
    campaignType: 'Search and Performance Max',
    duration: 'September to December 2025',
    heroResult: { value: '-29%', label: 'Cost per conversion' },
    period: { before: 'September to November 2025 (monthly average)', after: 'December 2025' },
    highlights: [
      { value: '-29%', label: 'Cost per conversion ($54.76 to $38.99)' },
      { value: '+28%', label: 'Monthly form leads' },
      { value: '-20%', label: 'Monthly ad spend' },
    ],
    results: [
      { label: 'Cost per conversion', before: '$54.76', after: '$38.99' },
      { label: 'Lead form submissions per month', before: '42 (avg)', after: '54' },
      { label: 'Phone calls per month', before: '37 (avg)', after: '31' },
      { label: 'Ad spend per month', before: '$3.57K (avg)', after: '$2.85K' },
    ],
    notes: [
      'The before period covers three months (September 1 to November 30, 2025), so before figures are shown as monthly averages (127 forms, 111 calls and $10.7K spend over three months).',
      'Monthly phone calls were slightly lower after optimization (37 to 31), while form leads increased and cost per conversion dropped.',
    ],
    screenshotsHeading: 'Roofing PPC Cost per Lead: Before and After Optimization',
    screenshotsIntro: `These results from the client's Google Ads campaigns show the roofing lead generation numbers before and after optimization: cost per conversion, form leads, phone calls and spend. ${PRIVACY}`,
    screenshots: [
      shot('roofing-google-ads', 1, 1600, 466, 'Roofing Google Ads results for December 2025: $38.99 cost per conversion, 54 lead forms, 31 phone calls', 'December 2025 (after): $38.99 cost per conversion, 54 lead forms, 31 phone calls, $2.85K spend.'),
      shot('roofing-google-ads', 2, 1572, 406, 'Roofing Google Ads results for September to November 2025: $54.76 cost per conversion, 127 lead forms, 111 phone calls', 'September to November 2025 (before, three months): $54.76 cost per conversion, 127 lead forms, 111 phone calls, $10.7K spend.'),
    ],
    challengesIntro: 'The business was getting roofing leads, but the cost per lead was higher than it needed to be.',
    challenges: [
      'High cost per lead: $54.76 per conversion from September to November 2025.',
      'Wasted budget on broad and low-intent searches.',
      'Campaign structure not organized around roofing services.',
      'Inconsistent lead quality.',
    ],
    strategyHeading: 'Google Ads optimization for roofers: the strategy',
    strategyIntro: 'The goal was a lower cost per lead with Google Ads, by spending a similar budget on better roofing searches.',
    strategy: [
      {
        title: 'Campaign structure',
        text: 'Campaigns restructured by roofing service, using Search alongside Performance Max for roofing searches.',
      },
      {
        title: 'Keyword research',
        text: 'Budget focused on high-intent roofing keywords such as roof repair near me and roof repair services.',
      },
      {
        title: 'Negative keywords',
        text: 'Search term analysis used to find and remove wasted traffic from broad and irrelevant searches.',
      },
      {
        title: 'Ad copy and bidding',
        text: 'Ad copy and bidding improved for the roofing services that converted best.',
      },
      {
        title: 'Budget allocation',
        text: 'Spend moved away from waste, so monthly ad spend fell from $3.57K to $2.85K while form leads rose.',
      },
    ],
    trackingIntro: 'Roofing lead generation with Google Ads depends on tracking calls and forms separately, which is what made this cost per lead comparison possible.',
    tracking: [
      {
        title: 'Phone call tracking',
        text: 'Phone calls tracked as their own conversion (111 over September to November, 31 in December).',
      },
      {
        title: 'Form submission tracking',
        text: 'Lead form submissions tracked separately (127 over September to November, 54 in December).',
      },
    ],
    approachHeading: 'My Google Ads Optimization Approach for Roofing Companies',
    approach: localLeadApproach('roofing company'),
    realExample:
      'The keyword report showed roof repair near me converting at 22.73% and roof repair services at 22.22%, and in the search terms report roof replacement searches converted at 44.44%. I focused budget on these high-intent roofing searches and cleaned up wasted traffic from broad terms. Cost per conversion dropped from $54.76 to $38.99.',
    outcome: 'The business now converts roofing searches at a lower cost, with more form leads each month on less budget.',
  },
  {
    slug: 'tire-service-google-ads',
    eyebrow: 'Google Ads Case Study for Tire Service Business',
    title: 'How I Generated 630 Phone Calls for a Mobile Tire Service With Google Ads',
    seoTitle: 'Tire Shop Google Ads Case Study | 630 Phone Calls',
    metaDescription:
      'See how I managed Google Ads for a mobile tire service, with call-focused local campaigns and call tracking that produced 630 phone calls in 30 days.',
    primaryKeyword: 'Google Ads case study for tire shops',
    secondaryKeywords: [
      'Tire shop Google Ads case study',
      'Mobile tire service PPC',
      'Auto repair Google Ads case study',
      'Google Ads call campaign case study',
      'PPC for tire shops',
      'Google Ads phone call leads',
    ],
    industry: 'Auto & Tire Services',
    relatedIndustries: ['google-ads-for-auto-services', 'google-ads-for-local-businesses'],
    thumbnail: thumb('tire-service', 'Tire shop Google Ads case study results: 630 phone calls and 373 call leads'),
    summary:
      'Call-focused local campaigns for a mobile tire service: 630 phone calls and 373 call leads in 30 days at CA$10.65 per conversion.',
    intro:
      'This Google Ads case study for tire shops shows how I ran call-focused local campaigns for a mobile tire service. Customers in this business usually call when they need a tire fixed, so every campaign was built around phone calls.',
    targetMarket: 'Drivers in the service area needing tire repair or replacement',
    role: ROLE,
    campaignType: 'Search (call-focused)',
    duration: 'November 2 to December 2, 2025',
    heroResult: { value: '630', label: 'Phone calls in 30 days' },
    period: { after: 'November 2 to December 2, 2025' },
    highlights: [
      { value: '630', label: 'Phone calls in 30 days' },
      { value: '373', label: 'Call leads' },
      { value: 'CA$10.65', label: 'Cost per conversion' },
    ],
    results: [
      { label: 'Phone calls', after: '630' },
      { label: 'Phone call leads', after: '373' },
      { label: 'Cost per conversion', after: 'CA$10.65' },
      { label: 'Ad spend', after: 'CA$3.97K' },
    ],
    notes: ['All costs are in Canadian dollars (CA$), the billing currency.'],
    screenshotsHeading: 'Tire Shop Google Ads Results: 30 Days of Phone Call Leads',
    screenshotsIntro: `These results from the client's Google Ads campaigns show the results of this tire shop Google Ads case study: the Google Ads phone call leads from a mobile tire service PPC campaign over 30 days. ${PRIVACY}`,
    screenshots: [
      shot('tire-service-google-ads', 1, 1600, 518, 'Tire shop Google Ads results for November 2 to December 2, 2025: 630 phone calls, 373 call leads, CA$10.65 cost per conversion', 'November 2 to December 2, 2025: 630 phone calls, 373 phone call leads, CA$10.65 cost per conversion, CA$3.97K spend.'),
    ],
    challengesIntro: 'Calls were coming in, but the campaigns were not set up to bring them in consistently or cheaply.',
    challenges: [
      'Call volume that changed a lot from month to month.',
      'Uneven lead quality.',
      'A cost per conversion too high to scale profitably.',
      'Keywords not focused on urgent, local tire searches.',
    ],
    strategyHeading: 'PPC for tire shops: the Google Ads strategy',
    strategyIntro: 'This is a Google Ads call campaign case study: every campaign was built to make the phone ring with local tire customers.',
    strategy: [
      {
        title: 'Campaign structure',
        text: 'Campaigns restructured by service and location, with a call-focused Search campaign.',
      },
      {
        title: 'Keyword research',
        text: 'Keywords focused on high-intent local tire searches. The top keywords by calls were tires near me, tire service and tire and repair.',
      },
      {
        title: 'Location targeting',
        text: 'Campaigns organized by location so budget stays within the area the mobile service covers.',
      },
      {
        title: 'Ad copy and assets',
        text: 'Ads focused on calling now and fast service.',
      },
      {
        title: 'Bidding and budget',
        text: 'Bid strategy and budget optimized around phone call conversions.',
      },
    ],
    trackingIntro: 'For a call-driven business, call tracking decides what Google Ads optimizes for.',
    tracking: [
      {
        title: 'Phone call tracking',
        text: 'Calls from ads and calls from the website are both tracked, and set as primary conversions.',
      },
      {
        title: 'Click-to-call as a secondary signal',
        text: 'Taps on the phone number are tracked as a secondary conversion, so they are visible but do not drive bidding.',
      },
      {
        title: 'Qualified call leads',
        text: 'Phone call leads are counted separately from all calls (373 of 630), so lead quality can be measured.',
      },
    ],
    approachHeading: 'My Google Ads Optimization Approach for Tire and Auto Service Businesses',
    approach: [
      {
        title: 'Search intent',
        text: 'Tire searches are often urgent. I prioritize "near me", repair and replacement searches over research and price-shopping searches.',
      },
      {
        title: 'Location targeting',
        text: 'For a mobile service, targeting follows the area the vans can reach quickly, not a broad region.',
      },
      {
        title: 'Conversion tracking',
        text: 'Real phone calls are the primary conversion. I set this up with Google Tag Manager, GA4 and Google Ads call tracking.',
      },
      {
        title: 'Search terms',
        text: 'I review search terms to block irrelevant and competitor-brand searches that waste budget.',
      },
      {
        title: 'Landing pages',
        text: 'Mobile visitors need a big call button and the service area on the first screen.',
      },
      {
        title: 'Lead quality',
        text: 'I compare qualified call leads against all calls to judge which campaigns bring real customers.',
      },
    ],
    realExample:
      'Calls are the main conversion for a mobile tire service, so I set calls from ads and calls from the website as primary conversions and kept click-to-call as a secondary conversion. That way Google Ads optimizes for real phone calls, not taps on a phone number. In the 30 days shown, it produced 630 calls and 373 qualified call leads.',
    outcome:
      'The business now gets a steady stream of phone calls from local tire searches at a low cost per conversion, with tracking that separates qualified call leads from all calls. It reads like any auto repair Google Ads case study: the wins come from tracking real calls and putting budget behind urgent local searches.',
  },
  {
    slug: 'tour-booking-google-ads',
    eyebrow: 'Google Ads Case Study for Tour Booking Business',
    title: 'How I Increased ROAS From 166% to 547% for a Tour Booking Business With Google Ads',
    seoTitle: 'Tour Booking Google Ads Case Study | ROAS 166% to 547%',
    metaDescription:
      'See how I improved Google Ads for an online tour booking business with purchase tracking and ROAS bidding, raising ROAS from 166% to 547% on half the spend.',
    primaryKeyword: 'Google Ads ROAS case study',
    secondaryKeywords: [
      'Tour booking Google Ads case study',
      'Google Ads for tour operators',
      'Travel PPC case study',
      'Increase ROAS with Google Ads',
      'Google Ads purchase conversion tracking',
    ],
    industry: 'E-commerce',
    relatedIndustries: ['google-ads-for-ecommerce'],
    thumbnail: thumb('tour-booking-roas', 'Tour booking Google Ads case study: 547% ROAS'),
    summary:
      'Restructured campaigns and bidding around purchase value. ROAS rose from 166% to 547% while ad spend fell 54%.',
    intro:
      'This Google Ads ROAS case study shows how I made an online tour booking business profitable on Google Ads. The business was spending heavily for a low return, so the work focused on purchase value instead of clicks or conversion count.',
    targetMarket: 'Travelers booking tours online',
    role: ROLE,
    campaignType: 'Search with ROAS bidding',
    duration: 'September to October 2025',
    heroResult: { value: '166% to 547%', label: 'Return on ad spend' },
    period: { before: 'September 2025', after: 'October 2025' },
    highlights: [
      { value: '547%', label: 'ROAS (from 166%)' },
      { value: '-54%', label: 'Ad spend' },
      { value: '+51%', label: 'Revenue from ads' },
    ],
    results: [
      { label: 'ROAS', before: '166.25%', after: '547.44%' },
      { label: 'Ad spend', before: 'MX$25.5K', after: 'MX$11.7K' },
      { label: 'Revenue from ads (ROAS x spend)', before: 'MX$42.4K', after: 'MX$64.0K' },
      { label: 'Conversions (purchases)', before: '57.83', after: '26.50' },
      { label: 'Clicks', before: '1.99K', after: '1.43K' },
    ],
    notes: ['Costs are billed in Mexican pesos (MX$). Revenue is calculated from the ROAS and cost shown in Google Ads.'],
    screenshotsHeading: 'Tour Booking Google Ads Results: ROAS Before and After Optimization',
    screenshotsIntro: `These results from the client's Google Ads campaigns show the ROAS, conversions and spend before and after optimization in this tour booking Google Ads case study. ${PRIVACY}`,
    screenshots: [
      shot('tour-booking-google-ads', 1, 1600, 530, 'Tour booking Google Ads results for October 2025: 547.44% ROAS and 26.50 conversions', 'October 2025 (after): 1.43K clicks, 547.44% ROAS, 26.50 conversions, MX$11.7K spend.'),
      shot('tour-booking-google-ads', 2, 1581, 441, 'Tour booking Google Ads results for September 2025: 166.25% ROAS and 57.83 conversions', 'September 2025 (before): 1.99K clicks, 166.25% ROAS, 57.83 conversions, MX$25.5K spend.'),
    ],
    challengesIntro: 'Bookings were coming in, but the campaigns were losing money for the business.',
    challenges: [
      'Low return: ROAS of 166% in September 2025.',
      'High ad spend with poor returns.',
      'Limited keyword refinement.',
      'Low-intent search terms taking budget.',
    ],
    strategyHeading: 'How to increase ROAS with Google Ads: the strategy',
    strategyIntro: 'The work shifted the campaigns from chasing conversions to earning revenue.',
    strategy: [
      {
        title: 'Campaign structure and budget',
        text: 'Campaigns restructured with tighter budget control, and spend cut from MX$25.5K to MX$11.7K.',
      },
      {
        title: 'Keyword and audience research',
        text: 'High-intent keywords and audiences refined to reach travelers ready to book.',
      },
      {
        title: 'Ad copy and assets',
        text: 'Ad copy and assets improved for the tours being sold.',
      },
      {
        title: 'Bidding strategy',
        text: 'Bidding moved to a ROAS-focused strategy that optimizes for booking value.',
      },
    ],
    trackingIntro: 'ROAS bidding only works when Google Ads knows the value of each booking, so Google Ads purchase conversion tracking came first.',
    tracking: [
      {
        title: 'Purchase conversion tracking',
        text: 'Purchase set as the primary website conversion, recording the booking value.',
      },
      {
        title: 'Revenue values',
        text: 'Accurate revenue values let Google Ads optimize for return on ad spend, not just the number of bookings.',
      },
    ],
    approachHeading: 'My Approach to Google Ads for Tour Operators and Travel Businesses',
    approach: [
      {
        title: 'Search intent',
        text: 'I separate travelers ready to book from people researching destinations, and put the budget behind booking intent.',
      },
      {
        title: 'Value over volume',
        text: 'A few high-value bookings can be worth more than many cheap ones, so I judge campaigns on revenue and ROAS.',
      },
      {
        title: 'Conversion tracking',
        text: 'Purchases are tracked with their real value using Google Tag Manager, GA4 and Google Ads conversion tracking.',
      },
      {
        title: 'Search terms',
        text: 'I review search terms and remove low-intent traffic that takes budget without booking.',
      },
      {
        title: 'Landing pages',
        text: 'Each ad should land on the tour it promotes, with price, dates and a clear booking button.',
      },
      {
        title: 'Budget control',
        text: 'Budget follows return. Campaigns that do not earn their spend get less of it.',
      },
    ],
    realExample:
      'Purchase was set as the primary conversion with the booking value recorded, and bidding moved to ROAS. Conversions fell from 57.83 to 26.50, but revenue from ads rose about 51% because the bookings were worth more, and ROAS went from 166.25% to 547.44% on 54% less spend.',
    outcome:
      'The business now earns far more revenue per peso spent. Fewer but higher-value bookings brought in about 51% more revenue on 54% less ad spend. In a travel PPC case study, that is the number that matters: revenue per dollar, not the number of bookings.',
  },
  {
    slug: 'ecommerce-google-ads',
    eyebrow: 'Google Ads Case Study for E-commerce Business',
    title: 'How I Raised an E-commerce Store’s ROAS to 2,517% With Google Ads',
    seoTitle: 'Ecommerce Google Ads Case Study | 2,517% ROAS',
    metaDescription:
      'How I optimized Google Ads for an e-commerce store, refining keywords, audiences and bidding to lift ROAS from 1,712% to 2,517% and conversion rate to 5.33%.',
    primaryKeyword: 'Ecommerce Google Ads case study',
    secondaryKeywords: [
      'Ecommerce PPC case study',
      'Google Ads ROAS improvement',
      'Online store Google Ads results',
      'Increase conversion rate with Google Ads',
      'Ecommerce PPC management results',
    ],
    industry: 'E-commerce',
    relatedIndustries: ['google-ads-for-ecommerce'],
    thumbnail: thumb('ecommerce-roas', 'Ecommerce Google Ads case study: 2,517% ROAS and 5.33% conversion rate'),
    summary:
      'Refined keywords, audiences and bidding for an already profitable store. ROAS rose from 1,712% to 2,517% and conversion rate from 4.50% to 5.33%.',
    intro:
      'This ecommerce Google Ads case study shows how I improved an online store that was already profitable. Instead of buying more traffic, I focused the budget on shoppers most likely to buy.',
    targetMarket: 'Online shoppers',
    role: ROLE,
    campaignType: 'Search and product campaigns',
    duration: 'September 1 to 23, 2025',
    heroResult: { value: '1,712% to 2,517%', label: 'Return on ad spend' },
    period: { before: 'September 1 to 13, 2025', after: 'September 14 to 23, 2025' },
    highlights: [
      { value: '2,517%', label: 'ROAS (from 1,712%)' },
      { value: '5.33%', label: 'Conversion rate (from 4.50%)' },
      { value: '-44%', label: 'Daily ad spend' },
    ],
    results: [
      { label: 'ROAS', before: '1,711.90%', after: '2,517.47%' },
      { label: 'Conversion rate', before: '4.50%', after: '5.33%' },
      { label: 'Average daily ad spend', before: '$96', after: '$54' },
      { label: 'Total ad spend for the period', before: '$1.25K (13 days)', after: '$537 (10 days)' },
    ],
    notes: ['The two periods have different lengths (13 days before, 10 days after), so compare ROAS, conversion rate and daily spend rather than totals.'],
    screenshotsHeading: 'Online Store Google Ads Results: ROAS and Conversion Rate Growth',
    screenshotsIntro: `These results from the client's Google Ads campaigns show the ROAS and conversion rate before and after optimization in this ecommerce PPC case study. ${PRIVACY}`,
    screenshots: [
      shot('ecommerce-google-ads', 1, 1280, 440, 'Ecommerce Google Ads results for September 14 to 23, 2025: 2,517.47% ROAS and 5.33% conversion rate', 'September 14 to 23, 2025 (after): 2,517.47% ROAS, 5.33% conversion rate, 1.18K clicks, $537 spend.'),
      shot('ecommerce-google-ads', 2, 1280, 442, 'Ecommerce Google Ads results for September 1 to 13, 2025: 1,711.90% ROAS and 4.50% conversion rate', 'September 1 to 13, 2025 (before): 1,711.90% ROAS, 4.50% conversion rate, 2.02K clicks, $1.25K spend.'),
    ],
    challengesIntro: 'The store was profitable, but it was leaving return on the table.',
    challenges: [
      'ROAS of 1,711.90%, below what the store could reach.',
      'Conversion rate of 4.50%.',
      'Campaign structure not fully built for profitability.',
      'Spend not concentrated on the highest-intent shoppers.',
    ],
    strategyHeading: 'Google Ads ROAS improvement: the strategy',
    strategyIntro: 'The work focused on getting more out of each dollar, and shows how to increase conversion rate with Google Ads without buying more traffic.',
    strategy: [
      {
        title: 'Campaign structure and budget',
        text: 'Campaigns restructured and budgets optimized, bringing daily spend from $96 to $54.',
      },
      {
        title: 'Keyword and audience research',
        text: 'High-intent keywords and audiences refined to reach shoppers ready to buy.',
      },
      {
        title: 'Bidding strategy',
        text: 'Bidding switched to a conversion-focused strategy optimized for higher ROAS.',
      },
    ],
    trackingIntro: 'ROAS can only be improved when purchase values are measured.',
    tracking: [
      {
        title: 'Purchase value tracking',
        text: 'Purchases are tracked with their revenue value, which is what makes the ROAS figures in this case study possible.',
      },
    ],
    approachHeading: 'My Google Ads Optimization Approach for E-commerce Stores',
    approach: [
      {
        title: 'Search intent',
        text: 'I separate shoppers ready to buy from browsers and researchers, and move budget toward buying intent.',
      },
      {
        title: 'Profit over revenue',
        text: 'I judge campaigns on ROAS and margin, not just revenue, so growth stays profitable.',
      },
      {
        title: 'Conversion tracking',
        text: 'Purchases and their values are tracked with Google Tag Manager, GA4 and Google Ads conversion tracking.',
      },
      {
        title: 'Search terms',
        text: 'I review search terms and cut queries that bring clicks without sales.',
      },
      {
        title: 'Landing pages',
        text: 'Ads should land on the exact product or category searched, not the home page.',
      },
      {
        title: 'Conversion rate',
        text: 'Fewer, better clicks often lift conversion rate more than extra traffic does.',
      },
    ],
    realExample:
      'Instead of buying more traffic, I tightened keywords and audiences. Clicks dropped from 2.02K to 1.18K, but conversion rate rose from 4.50% to 5.33% and ROAS from 1,711.90% to 2,517.47%, which shows the spend moved toward higher-intent shoppers.',
    outcome:
      'Each dollar of ad spend now returns about $25 in revenue, and a higher share of visitors buy, with less budget wasted on low-intent clicks. These are the ecommerce PPC management results I aim for: profitable growth, not just more spend.',
  },
];

/**
 * Siraj's own result thumbnails from real accounts (no full write-up).
 * Shown as a gallery and on matching industry pages.
 */
export interface AccountSnapshot extends CaseStudyImage {
  title: string;
  relatedIndustries: string[];
}

export const ACCOUNT_SNAPSHOTS: AccountSnapshot[] = [
  { ...thumb('local-service', 'Google Ads management for a local service business: 6.88K phone call leads and 1.23K lead forms'), title: 'Local Service Business', relatedIndustries: ['google-ads-for-local-businesses'] },
  { ...thumb('home-service', 'Google Ads management for a home service business: 3K phone call leads and 253 lead forms'), title: 'Home Service Business', relatedIndustries: ['google-ads-for-home-services'] },
  { ...thumb('roofing', 'Google Ads for a roofing business: 144 phone calls and 72 lead forms'), title: 'Roofing Business', relatedIndustries: ['google-ads-for-roofing'] },
  { ...thumb('construction-remodeling', 'Google Ads for a construction and remodeling business: 16 phone calls and 10 lead forms'), title: 'Construction & Remodeling', relatedIndustries: ['google-ads-for-contractors'] },
  { ...thumb('lead-generation', 'Google Ads lead generation account: 3.03K phone calls and 1.29K lead forms'), title: 'Lead Generation', relatedIndustries: [] },
  { ...thumb('qualified-leads-phone-calls', 'Google Ads for qualified leads and phone calls: 3.32K call leads and 304 lead forms'), title: 'Qualified Leads & Phone Calls', relatedIndustries: [] },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function caseStudiesForIndustry(industrySlug: string): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.relatedIndustries.includes(industrySlug));
}

export function snapshotsForIndustry(industrySlug: string): AccountSnapshot[] {
  return ACCOUNT_SNAPSHOTS.filter((s) => s.relatedIndustries.includes(industrySlug));
}

export function caseStudyHref(slug: string): string {
  return `/portfolio/${slug}`;
}
