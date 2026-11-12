import type { IndustryPage } from '../types';

export const lawFirms: IndustryPage = {
  slug: 'google-ads-for-law-firms',
  name: 'Law Firms',
  noun: 'law firms',

  seoTitle: 'Google Ads for Law Firms | Legal PPC Lead Generation',
  metaDescription:
    'Google Ads for law firms focused on high-intent practice-area searches, lead quality, call tracking and cost control for consultations and case inquiries.',
  imageAlt: 'Google Ads PPC campaign for law firms and legal consultations',
  tags: ['Google Ads law firms', 'legal PPC', 'lawyer marketing', 'legal leads', 'call tracking'],
  primaryKeyword: { keyword: 'google ads for law firms', sv: 720, kd: 48 },
  secondaryKeywords: [
    { keyword: 'law firm ppc', sv: 590, kd: 45 },
    { keyword: 'ppc for lawyers', sv: 480, kd: 44 },
    { keyword: 'legal ppc management', sv: 170, kd: 37 },
  ],
  suggestedKeywords: ['attorney google ads', 'personal injury ppc', 'google ads for lawyers', 'law firm lead generation', 'legal advertising google'],
  searchIntent: 'Commercial: partners, managing attorneys and marketing staff at law firms looking for Google Ads management.',

  h1: 'Google Ads for Law Firms',
  heroHeadline: 'Legal PPC that controls cost per case inquiry in the most expensive keywords on Google',
  heroText:
    'Legal keywords are among the costliest clicks anywhere. A loosely managed law firm account can spend a month of budget in a week on searches that never become clients. I build practice-area campaigns around high-intent searches, qualify leads before they count as conversions, and track every call and intake form so you know exactly what a signed case costs.',
  overview:
    'Google Ads for law firms is one of the most expensive advertising markets online, so every click needs a purpose. Law firm PPC is organized by practice area, with intake tracking that separates real case inquiries from unqualified calls. PPC for lawyers works when bids follow case value, and that is the focus of my legal PPC management.',
  valueProps: [
    'Separate campaigns per practice area with their own budgets and intake goals',
    'Call tracking with qualification so only real case inquiries count',
    'Negative keywords that block free advice, legal aid, job and law school searches',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1758518729912-bf3a84c400e0',
    alt: 'Two professionals reviewing legal documents at an office desk',
    credit: 'https://unsplash.com/photos/two-colleagues-discussing-documents-at-an-office-desk-XjJmfN7QJj4',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744',
    alt: 'Law books on a dark wooden shelf in a law office',
    credit: 'https://unsplash.com/photos/book-lot-on-black-wooden-shelf-zeH-ljawHtg',
  },

  challenges: [
    {
      title: 'Clicks that cost more than most leads',
      text: 'Personal injury, DUI, family law and immigration searches carry very high costs per click in US metros. Every wasted click is a significant loss.',
    },
    {
      title: 'Free advice and legal aid searches',
      text: '"Free lawyer consultation", "legal aid near me" and "can I sue for" searches look like legal intent but rarely become paying clients.',
    },
    {
      title: 'Unqualified intake',
      text: 'Calls about cases outside your practice areas or jurisdiction still count as conversions in most accounts, so Google optimizes for the wrong calls.',
    },
    {
      title: 'Lead aggregators and directories',
      text: 'Directories and lead-selling sites bid on the same searches and often win on budget. Firms need tighter keywords, stronger ads and better landing pages to compete.',
    },
    {
      title: 'Compliance and advertising rules',
      text: 'Attorney advertising rules vary by state bar. Ad copy and landing pages need to stay within them while still being persuasive.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by practice area and intent',
      text: 'Searches are grouped by practice area and by intent: someone who needs a lawyer now, someone researching, and someone looking for free help. Only the first group gets significant budget.',
    },
    {
      title: 'Search campaigns first',
      text: 'Legal demand is captured on Search. Local Services Ads for law firms are added where available, since they charge per lead and sit above Search results.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'One campaign per practice area, sometimes per sub-area (for example car accidents separate from slip and fall), with tight ad groups so ads and landing pages match the search.',
    },
    {
      title: 'Legal ad copy',
      text: 'Ads speak to the situation: free case evaluation, no fee unless you win where that applies, years of experience, case results you are permitted to cite, and availability. Copy is kept within state bar advertising rules.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting follows your jurisdiction and the courts you practice in, using presence-only settings and city or county lists rather than a wide radius.',
    },
    {
      title: 'Negative keywords',
      text: 'A legal negative list removes free, legal aid, pro bono, law school, jobs, salary, definitions and other practice areas you do not handle, and grows weekly from search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'Budgets are set per practice area based on case value and capacity. Bidding moves from manual control to Target CPA only after intake is tracked and qualified leads are being imported.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews catch expensive, irrelevant searches quickly and find new high-intent phrases worth their own ad groups.',
    },
    {
      title: 'Landing page optimization',
      text: 'Practice-area landing pages with a clear headline, tap-to-call, short intake form, attorney bios, credentials and permitted results. No generic home page traffic.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Personal Injury - Search',
      goal: 'Qualified case inquiries',
      adGroups: [
        { name: 'Car Accident Lawyer', keywords: ['[car accident lawyer]', '"car accident attorney near me"', '"auto accident lawyer"'] },
        { name: 'Truck Accident', keywords: ['"truck accident lawyer"', '"18 wheeler accident attorney"'] },
        { name: 'Slip and Fall', keywords: ['"slip and fall lawyer"', '"premises liability attorney"'] },
      ],
    },
    {
      campaign: 'Family Law - Search',
      goal: 'Consultation bookings',
      adGroups: [
        { name: 'Divorce Lawyer', keywords: ['[divorce lawyer]', '"divorce attorney near me"'] },
        { name: 'Child Custody', keywords: ['"child custody lawyer"', '"custody attorney"'] },
      ],
    },
    {
      campaign: 'Criminal Defense - Search',
      goal: 'Urgent calls',
      adGroups: [
        { name: 'DUI Lawyer', keywords: ['[dui lawyer]', '"dui attorney near me"', '"dwi lawyer"'] },
        { name: 'Criminal Defense', keywords: ['"criminal defense attorney"', '"criminal lawyer near me"'] },
      ],
    },
    {
      campaign: 'Estate Planning - Search',
      goal: 'Consultation requests',
      adGroups: [
        { name: 'Estate Planning', keywords: ['"estate planning attorney"', '"will and trust lawyer"'] },
        { name: 'Probate', keywords: ['"probate attorney"', '"probate lawyer near me"'] },
      ],
    },
  ],

  negativeKeywords: [
    'free',
    'pro bono',
    'legal aid',
    'jobs',
    'salary',
    'paralegal',
    'law school',
    'lsat',
    'bar exam',
    'definition',
    'what is',
    'how to become',
    'template',
    'forms',
    'diy',
    'reddit',
    'movie',
    'tv show',
    'public defender',
    'student',
  ],

  locationTargeting: {
    intro:
      'Law firms are limited by jurisdiction and licensing. Targeting should match where you can actually take cases and where your intake team can serve clients.',
    points: [
      'Target the counties, cities or metro areas where you are licensed and practice, with "Presence" targeting.',
      'For practice areas tied to specific courts, align targeting with those court districts.',
      'Raise bids in areas with higher case values or lower competition, based on data.',
      'Mention the city and county in ad copy and on landing pages to improve relevance.',
      'Exclude states or regions where you cannot take cases, even if searchers there show interest.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or intake form',
    'Qualified lead (right practice area, jurisdiction, viable case)',
    'Consultation booked',
    'Retained client or signed case',
    'Case value and revenue',
  ],
  trackingText:
    'For law firms, the conversion that matters is a qualified case inquiry, not a call. I set up call tracking with duration thresholds and, where your intake team marks leads as qualified in a CRM such as Clio Grow, Lawmatics or HubSpot, offline conversion tracking imports retained clients back into Google Ads. Google then bids toward searches that produce signed cases rather than any call. GA4 and Google Tag Manager record intake forms, chat starts and calls as separate actions.',

  subcategories: [
    { title: 'Personal injury', text: 'Car, truck and motorcycle accidents, premises liability and medical malpractice. High case value, highest CPCs.' },
    { title: 'Family law', text: 'Divorce, custody, support and adoption. Consultation-driven with strong local intent.' },
    { title: 'Criminal defense and DUI', text: 'Urgent, after-hours searches with immediate call intent.' },
    { title: 'Estate planning and probate', text: 'Lower urgency, higher consideration, strong fit for educational landing pages.' },
    { title: 'Immigration law', text: 'Multilingual search behavior and nationwide intent for some case types.' },
    { title: 'Business, employment and real estate law', text: 'B2B-style inquiries with longer sales cycles and referral-heavy intake.' },
  ],

  faqs: [
    {
      question: 'Why are legal keywords so expensive?',
      answer:
        'Because a single case can be worth tens of thousands of dollars, firms and lead aggregators bid aggressively. The way to compete is tighter targeting, better ads and landing pages, and tracking that keeps budget on searches that produce signed cases.',
    },
    {
      question: 'How much should a law firm budget for Google Ads?',
      answer:
        'It depends heavily on practice area and market. Personal injury in a major metro needs a much larger budget than estate planning in a smaller city. I review your practice areas and competition and recommend a budget in the free audit.',
    },
    {
      question: 'Do you track which calls became signed cases?',
      answer:
        'Yes, when your intake team records case status in a CRM. Offline conversion tracking imports qualified and retained leads so Google Ads optimizes for cases, not calls.',
    },
    {
      question: 'Are Local Services Ads worth it for law firms?',
      answer:
        'In most markets, yes. They charge per lead, show above Search ads and carry the Google Screened badge. They work best alongside Search campaigns.',
    },
    {
      question: 'How do you avoid people looking for free legal help?',
      answer:
        'With negative keywords for free, pro bono, legal aid and similar phrases, ad copy that sets expectations, and landing pages that describe your fee structure clearly.',
    },
    {
      question: 'Can you work within attorney advertising rules?',
      answer:
        'Yes. Ad copy and landing pages are written to stay within state bar advertising rules, and I ask you to review anything that references results or guarantees.',
    },
    {
      question: 'How quickly will we see case inquiries?',
      answer:
        'Search campaigns can produce calls in the first days. Cost per qualified inquiry improves over the first one to three months as search terms are refined and intake data feeds back into bidding.',
    },
    {
      question: 'Do you work with solo attorneys and small firms?',
      answer:
        'Yes. Smaller firms often benefit most from focused campaigns on one or two practice areas rather than trying to cover everything.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your law firm',
    text: 'I will review your practice-area campaigns, search terms, intake tracking and landing pages and show you where expensive clicks are going to waste.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-ads-audit', 'google-search-ads'],
  relatedIndustries: ['google-ads-for-local-businesses', 'google-ads-for-dentists', 'google-ads-for-home-services', 'google-ads-for-contractors'],
};
