/**
 * Real Google Ads case studies. Every number here comes from the account
 * screenshots in /public/case-studies/<slug>/. Where the original write-up and
 * the screenshot disagreed, the screenshot figure is used.
 * Screenshots are cropped so no account names, emails, IDs or phone numbers show.
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

export interface CaseStudy {
  slug: string;
  /** H1 */
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** Short label shown on cards, e.g. "Roofing" */
  industry: string;
  /** Industry landing page slugs this case study supports */
  relatedIndustries: string[];
  thumbnail: CaseStudyImage;
  /** One or two sentences for cards */
  summary: string;
  /** Country only (e.g. USA). Omitted when not a US account. */
  location?: string;
  role: string;
  campaignTypes: string[];
  period: { before?: string; after: string };
  highlights: { value: string; label: string }[];
  challenge: string;
  beforeProblems: string[];
  goals: string;
  workDone: string[];
  results: CaseStudyResultRow[];
  outcome: string;
  /** Honest context a reader needs to read the numbers correctly */
  notes?: string[];
  screenshots: CaseStudyScreenshot[];
}

const ROLE = 'Google Ads specialist: account restructure, conversion tracking and monthly management';

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

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'home-services-company-google-ads',
    title: 'Home Services Company: Phone Calls Up From 67 to 282 a Month',
    seoTitle: 'Home Services Google Ads Case Study | 4x More Calls',
    metaDescription:
      'A US home services company grew Google Ads phone calls from 67 to 282 a month and form leads from 54 to 117, while cost per conversion fell from $104 to $92.53.',
    industry: 'Home Services',
    relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-local-businesses', 'google-ads-for-contractors'],
    thumbnail: thumb('home-services-company', 'Google Ads results for a home services company: 282 phone calls and 117 lead forms'),
    summary:
      'Restructured a home services account by service and city. Monthly phone calls grew from 67 to 282 and cost per conversion dropped 11%.',
    location: 'USA',
    role: ROLE,
    campaignTypes: ['Search', 'Performance Max', 'Call tracking'],
    period: { before: 'October 2025', after: 'December 2025' },
    highlights: [
      { value: '282', label: 'Phone calls a month (from 67)' },
      { value: '117', label: 'Form leads a month (from 54)' },
      { value: '-11%', label: 'Cost per conversion' },
    ],
    challenge:
      'The company was getting some calls from Google Ads, but results were inconsistent, lead quality was uneven and the cost per conversion was too high to scale. The account structure and keyword targeting were not built around local, high-intent service searches.',
    beforeProblems: [
      '67 phone calls and 54 lead forms in October 2025',
      'Average cost per conversion of $104',
      'Weak campaign structure and unoptimized keyword targeting',
      'Inconsistent lead quality from month to month',
    ],
    goals:
      'Increase high-quality phone calls and form leads, lower the cost per conversion, and build an account structure that could take more budget without losing efficiency.',
    workDone: [
      'Restructured campaigns by service and by city',
      'Optimized for high-intent local service keywords',
      'Rewrote ad copy around calls, offers and trust signals',
      'Adjusted bid strategy and budgets campaign by campaign',
      'Reviewed and cleaned up conversion tracking for calls and forms',
      'Monitored call quality and lead quality, not just volume',
    ],
    results: [
      { label: 'Phone calls', before: '67', after: '282' },
      { label: 'Lead form submissions', before: '54', after: '117' },
      { label: 'Cost per conversion', before: '$104', after: '$92.53' },
      { label: 'Ad spend', before: '$9.88K', after: '$27.6K' },
    ],
    outcome:
      'The account now produces several times more calls and form leads each month at a lower cost per conversion, with campaigns organized so budget can follow the services and cities that book the most jobs.',
    notes: [
      'Monthly ad spend increased from $9.88K to $27.6K over this period, so part of the lead growth came from a larger budget. Cost per conversion still went down while spend scaled.',
    ],
    screenshots: [
      shot('home-services-company-google-ads', 1, 1600, 605, 'Google Ads overview for December 2025 showing 282 phone calls, 117 lead forms and $92.53 cost per conversion', 'December 2025 (after): 282 phone calls, 117 lead forms, $92.53 cost per conversion, $27.6K spend.'),
      shot('home-services-company-google-ads', 2, 1464, 432, 'Google Ads overview for October 2025 showing 67 phone calls, 54 lead forms and $104 cost per conversion', 'October 2025 (before): 67 phone calls, 54 lead forms, $104 cost per conversion, $9.88K spend.'),
    ],
  },
  {
    slug: 'roofing-construction-google-ads-lead-growth',
    title: 'Roofing & Construction Company: Cost per Lead Down From $176 to $36.67',
    seoTitle: 'Roofing & Construction Google Ads Case Study | $36.67 CPL',
    metaDescription:
      'A roofing and construction company doubled Google Ads form leads, grew phone calls from 6 to 21 and cut cost per conversion from $176 to $36.67 in one month.',
    industry: 'Roofing & Construction',
    relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-contractors', 'google-ads-for-home-services'],
    thumbnail: thumb('roofing-construction', 'Google Ads results for a roofing and construction company: 38 lead forms, 21 phone calls, $36.67 cost per conversion'),
    summary:
      'Rebuilt Search and Performance Max around roofing services. In one month, form leads doubled, calls grew from 6 to 21 and cost per conversion fell 79%.',
    location: 'USA',
    role: ROLE,
    campaignTypes: ['Search', 'Performance Max', 'Call and form tracking'],
    period: { before: 'November 2025', after: 'December 2025' },
    highlights: [
      { value: '-79%', label: 'Cost per conversion ($176 to $36.67)' },
      { value: '2x', label: 'Form leads (19 to 38)' },
      { value: '3.5x', label: 'Phone calls (6 to 21)' },
    ],
    challenge:
      'The account was spending on roofing searches but producing very few leads. Keyword targeting was loose, search terms included low-intent traffic, and the cost per conversion had climbed to $176.',
    beforeProblems: [
      '19 lead form submissions and 6 phone calls in November 2025',
      'Cost per conversion of $176',
      'Limited keyword refinement',
      'Search terms included low-intent traffic',
    ],
    goals:
      'Generate more phone calls and form leads from high-intent local roofing searches while keeping ad spend under control.',
    workDone: [
      'Restructured campaigns by roofing service',
      'Focused targeting on high-intent local roofing keywords',
      'Cleaned up search terms and added negative keywords',
      'Improved ad copy for roof repair and roof replacement searches',
      'Optimized Performance Max for service-based intent',
      'Reviewed conversion tracking for calls and forms',
    ],
    results: [
      { label: 'Lead form submissions', before: '19', after: '38' },
      { label: 'Phone calls', before: '6', after: '21' },
      { label: 'Cost per conversion', before: '$176', after: '$36.67' },
      { label: 'Clicks', before: '187', after: '1.03K' },
    ],
    outcome:
      'Within a month the account was producing twice the form leads and more than three times the phone calls at a fraction of the previous cost per conversion, from high-intent roofing searches.',
    screenshots: [
      shot('roofing-construction-google-ads-lead-growth', 1, 1600, 522, 'Google Ads overview for December 2025 showing 38 lead forms, 21 phone calls and $36.67 cost per conversion', 'December 2025 (after): 1.03K clicks, 38 lead forms, 21 phone calls, $36.67 cost per conversion.'),
      shot('roofing-construction-google-ads-lead-growth', 2, 1552, 430, 'Google Ads overview for November 2025 showing 19 lead forms, 6 phone calls and $176 cost per conversion', 'November 2025 (before): 187 clicks, 19 lead forms, 6 phone calls, $176 cost per conversion.'),
    ],
  },
  {
    slug: 'roofing-google-ads-lower-cost-per-lead',
    title: 'Roofing Company: 29% Lower Cost per Lead With More Form Leads',
    seoTitle: 'Roofing Google Ads Case Study | 29% Lower Cost per Lead',
    metaDescription:
      'How a roofing company cut Google Ads cost per conversion from $54.76 to $38.99 and increased monthly lead forms, with real before and after account screenshots.',
    industry: 'Roofing',
    relatedIndustries: ['google-ads-for-roofing', 'google-ads-for-home-services'],
    thumbnail: thumb('roofing-lower-cost', 'Google Ads results for a roofing business: 54 lead forms, 31 phone calls, $38.99 cost per conversion'),
    summary:
      'Tightened roofing keywords and cleaned up search terms. Cost per conversion fell from $54.76 to $38.99 and monthly form leads rose 28% on a smaller budget.',
    location: 'USA',
    role: ROLE,
    campaignTypes: ['Search', 'Performance Max', 'Call and form tracking'],
    period: { before: 'September to November 2025 (monthly average)', after: 'December 2025' },
    highlights: [
      { value: '-29%', label: 'Cost per conversion ($54.76 to $38.99)' },
      { value: '+28%', label: 'Monthly form leads' },
      { value: '-20%', label: 'Monthly ad spend' },
    ],
    challenge:
      'The account was generating roofing leads, but too much budget went to broad or irrelevant searches and the cost per conversion was higher than it needed to be to scale profitably.',
    beforeProblems: [
      'Average cost per conversion of $54.76 from September to November 2025',
      'Wasted spend on low-intent searches',
      'Campaign structure not organized around roofing services',
      'Inconsistent lead quality',
    ],
    goals:
      'Get more high-quality roofing leads and phone calls at a lower cost per conversion, with tighter control over which roofing keywords receive budget.',
    workDone: [
      'Restructured campaigns by roofing service',
      'Optimized for high-intent roofing keywords',
      'Ran search term analysis and cleaned up wasted traffic',
      'Improved ad copy and bidding',
    ],
    results: [
      { label: 'Cost per conversion', before: '$54.76', after: '$38.99' },
      { label: 'Lead form submissions per month', before: '42 (avg)', after: '54' },
      { label: 'Phone calls per month', before: '37 (avg)', after: '31' },
      { label: 'Ad spend per month', before: '$3.57K (avg)', after: '$2.85K' },
    ],
    outcome:
      'The account now converts roofing searches at a lower cost, with more form leads each month on less budget.',
    notes: [
      'The before screenshot covers three months (September 1 to November 30, 2025), so before figures are shown as monthly averages (127 forms, 111 calls and $10.7K spend over three months).',
      'Monthly phone calls were slightly lower after optimization (37 to 31), while form leads increased and cost per conversion dropped.',
    ],
    screenshots: [
      shot('roofing-google-ads-lower-cost-per-lead', 1, 1600, 466, 'Google Ads overview for December 2025 showing $38.99 cost per conversion, 54 lead forms and 31 phone calls', 'December 2025 (after): $38.99 cost per conversion, 54 lead forms, 31 phone calls, $2.85K spend.'),
      shot('roofing-google-ads-lower-cost-per-lead', 2, 1572, 406, 'Google Ads overview for September to November 2025 showing $54.76 cost per conversion, 127 lead forms and 111 phone calls', 'September to November 2025 (before, three months): $54.76 cost per conversion, 127 lead forms, 111 phone calls, $10.7K spend.'),
    ],
  },
  {
    slug: 'mobile-tire-service-google-ads',
    title: 'Mobile Tire Service: 630 Phone Calls at CA$10.65 per Conversion',
    seoTitle: 'Mobile Tire Service Google Ads Case Study | 630 Calls',
    metaDescription:
      'How a mobile tire service got 630 phone calls and 373 call leads in 30 days from Google Ads at CA$10.65 per conversion. Real account screenshot.',
    industry: 'Auto & Tire Services',
    relatedIndustries: ['google-ads-for-auto-services', 'google-ads-for-local-businesses'],
    thumbnail: thumb('tire-service', 'Google Ads management for a tire service business: 630 phone calls, 373 call leads, $3.97K cost'),
    summary:
      'Call-focused local campaigns for a mobile tire service: 630 phone calls and 373 call leads in 30 days at CA$10.65 per conversion.',
    role: ROLE,
    campaignTypes: ['Search', 'Call-focused ads', 'Call tracking'],
    period: { after: 'November 2 to December 2, 2025' },
    highlights: [
      { value: '630', label: 'Phone calls in 30 days' },
      { value: '373', label: 'Call leads' },
      { value: 'CA$10.65', label: 'Cost per conversion' },
    ],
    challenge:
      'Phone calls were coming in, but lead quality was uneven and the cost per conversion was too high to scale. The campaign structure and keywords were not aligned with the urgent, local searches that mobile tire customers make.',
    beforeProblems: [
      'Inconsistent call volume from month to month',
      'Uneven lead quality',
      'Cost per conversion too high to scale profitably',
      'Keywords not focused on high-intent local tire searches',
    ],
    goals:
      'Generate more high-quality phone calls for the mobile tire service while significantly reducing the cost per conversion, with a setup that delivers consistent, profitable call leads.',
    workDone: [
      'Restructured campaigns by service and location',
      'Optimized for high-intent local tire service keywords',
      'Focused ad copy on calls and fast service',
      'Optimized bid strategy and budget',
      'Reviewed and cleaned up call conversion tracking',
      'Monitored call quality and lead performance',
    ],
    results: [
      { label: 'Phone calls', after: '630' },
      { label: 'Phone call leads', after: '373' },
      { label: 'Cost per conversion', after: 'CA$10.65' },
      { label: 'Ad spend', after: 'CA$3.97K' },
    ],
    outcome:
      'The account now delivers a steady stream of phone calls from local tire searches at a low cost per conversion, with tracking that separates qualified call leads from all calls.',
    notes: ['All costs are in Canadian dollars (CA$), the account currency.'],
    screenshots: [
      shot('mobile-tire-service-google-ads', 1, 1600, 518, 'Google Ads overview for November 2 to December 2, 2025 showing 630 phone calls, 373 call leads and CA$10.65 cost per conversion', 'November 2 to December 2, 2025: 630 phone calls, 373 phone call leads, CA$10.65 cost per conversion, CA$3.97K spend.'),
    ],
  },
  {
    slug: 'tour-booking-google-ads-roas',
    title: 'Online Tour Booking Business: ROAS From 166% to 547%',
    seoTitle: 'Tour Booking Google Ads Case Study | ROAS 166% to 547%',
    metaDescription:
      'How an online tour booking business raised Google Ads ROAS from 166% to 547% in one month while cutting ad spend by more than half. Real account screenshots.',
    industry: 'E-commerce',
    relatedIndustries: ['google-ads-for-ecommerce'],
    thumbnail: thumb('tour-booking-roas', 'Google Ads results for an online tour booking business: 547% ROAS'),
    summary:
      'Restructured campaigns and bidding around purchase value. ROAS rose from 166% to 547% while ad spend fell 54%.',
    role: ROLE,
    campaignTypes: ['Search', 'Purchase conversion tracking', 'ROAS bidding'],
    period: { before: 'September 2025', after: 'October 2025' },
    highlights: [
      { value: '547%', label: 'ROAS (from 166%)' },
      { value: '-54%', label: 'Ad spend' },
      { value: '+51%', label: 'Revenue from ads' },
    ],
    challenge:
      'The business was getting bookings from Google Ads, but campaigns were inefficient. A large budget produced a low return, keyword refinement was limited and search terms included low-intent traffic.',
    beforeProblems: [
      'ROAS of 166% in September 2025',
      'High ad spend with poor returns',
      'Limited keyword refinement',
      'Low-intent search terms taking budget',
    ],
    goals: 'Improve ROAS and overall profitability from Google Ads while keeping ad spend under control.',
    workDone: [
      'Restructured campaigns and set tighter budget control',
      'Refined high-intent keywords and audiences',
      'Improved ad copy and assets',
      'Set purchase tracking as the primary conversion with accurate revenue values',
      'Moved to ROAS-focused bidding',
    ],
    results: [
      { label: 'ROAS', before: '166.25%', after: '547.44%' },
      { label: 'Ad spend', before: 'MX$25.5K', after: 'MX$11.7K' },
      { label: 'Revenue from ads (ROAS x spend)', before: 'MX$42.4K', after: 'MX$64.0K' },
      { label: 'Conversions (purchases)', before: '57.83', after: '26.50' },
      { label: 'Clicks', before: '1.99K', after: '1.43K' },
    ],
    outcome:
      'The account now earns far more revenue per peso spent. Fewer but higher-value bookings brought in about 51% more revenue on 54% less ad spend.',
    notes: [
      'The account is billed in Mexican pesos (MX$). Revenue is calculated from the ROAS and cost shown in the screenshots.',
    ],
    screenshots: [
      shot('tour-booking-google-ads-roas', 1, 1600, 530, 'Google Ads overview for October 2025 showing 547.44% ROAS, 26.50 conversions and 11.7K cost', 'October 2025 (after): 1.43K clicks, 547.44% ROAS, 26.50 conversions, MX$11.7K spend.'),
      shot('tour-booking-google-ads-roas', 2, 1581, 441, 'Google Ads overview for September 2025 showing 166.25% ROAS, 57.83 conversions and 25.5K cost', 'September 2025 (before): 1.99K clicks, 166.25% ROAS, 57.83 conversions, MX$25.5K spend.'),
    ],
  },
  {
    slug: 'ecommerce-google-ads-roas',
    title: 'E-commerce Store: ROAS Up From 1,712% to 2,517%',
    seoTitle: 'E-commerce Google Ads Case Study | 2,517% ROAS',
    metaDescription:
      'How an e-commerce store raised Google Ads ROAS from 1,712% to 2,517% and conversion rate from 4.50% to 5.33% while lowering daily ad spend. Real account screenshots.',
    industry: 'E-commerce',
    relatedIndustries: ['google-ads-for-ecommerce'],
    thumbnail: thumb('ecommerce-roas', 'Google Ads results for an e-commerce store: 2,517% ROAS and 5.33% conversion rate'),
    summary:
      'Refined keywords, audiences and bidding for an already profitable store. ROAS rose from 1,712% to 2,517% and conversion rate from 4.50% to 5.33%.',
    role: ROLE,
    campaignTypes: ['Search and product campaigns', 'Conversion-focused bidding'],
    period: { before: 'September 1 to 13, 2025', after: 'September 14 to 23, 2025' },
    highlights: [
      { value: '2,517%', label: 'ROAS (from 1,712%)' },
      { value: '5.33%', label: 'Conversion rate (from 4.50%)' },
      { value: '-44%', label: 'Daily ad spend' },
    ],
    challenge:
      'The store was already profitable, but ROAS was below its potential, conversion efficiency could improve, and the campaign structure and bidding were not focused on high-intent traffic and purchase value.',
    beforeProblems: [
      'ROAS of 1,711.90%',
      'Conversion rate of 4.50%',
      'Campaign structure not fully optimized for profitability',
      'Spend not concentrated on the highest-intent traffic',
    ],
    goals:
      'Increase ROAS and conversion efficiency while controlling ad spend, so every dollar goes to high-intent traffic that buys.',
    workDone: [
      'Restructured campaigns and optimized budgets',
      'Refined high-intent keywords and audiences',
      'Switched to conversion-focused bidding',
      'Optimized campaigns for higher ROAS',
    ],
    results: [
      { label: 'ROAS', before: '1,711.90%', after: '2,517.47%' },
      { label: 'Conversion rate', before: '4.50%', after: '5.33%' },
      { label: 'Average daily ad spend', before: '$96', after: '$54' },
      { label: 'Total ad spend for the period', before: '$1.25K (13 days)', after: '$537 (10 days)' },
    ],
    outcome:
      'Each dollar of ad spend now returns about $25 in revenue, and a higher share of visitors buy, with less budget wasted on low-intent clicks.',
    notes: [
      'The two periods have different lengths (13 days before, 10 days after), so compare ROAS, conversion rate and daily spend rather than totals.',
    ],
    screenshots: [
      shot('ecommerce-google-ads-roas', 1, 1280, 440, 'Google Ads overview for September 14 to 23, 2025 showing 2,517.47% ROAS and 5.33% conversion rate', 'September 14 to 23, 2025 (after): 2,517.47% ROAS, 5.33% conversion rate, 1.18K clicks, $537 spend.'),
      shot('ecommerce-google-ads-roas', 2, 1280, 442, 'Google Ads overview for September 1 to 13, 2025 showing 1,711.90% ROAS and 4.50% conversion rate', 'September 1 to 13, 2025 (before): 1,711.90% ROAS, 4.50% conversion rate, 2.02K clicks, $1.25K spend.'),
    ],
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
