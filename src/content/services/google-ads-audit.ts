import type { ServicePage } from '../types';

export const googleAdsAudit: ServicePage = {
  slug: 'google-ads-audit',
  name: 'Google Ads Audit',

  seoTitle: 'Google Ads Audit Service | Find Waste & Growth Gaps',
  metaDescription:
    'Get a Google Ads audit covering structure, keywords, search terms, bidding, tracking, ads and budget waste with a prioritized optimization roadmap.',
  imageAlt: 'Google Ads account audit identifying wasted spend and growth opportunities',
  tags: ['Google Ads audit', 'PPC audit', 'account audit', 'wasted ad spend', 'campaign review'],
  primaryKeyword: { keyword: 'google ads audit', sv: 1300, kd: 42 },
  secondaryKeywords: [
    { keyword: 'ppc audit', sv: 590, kd: 37 },
    { keyword: 'google ads account audit', sv: 720, kd: 39 },
    { keyword: 'google ads audit service', sv: 320, kd: 34 },
  ],
  searchIntent: 'Commercial and investigational: business owners who suspect their account is wasting money and want an expert review.',

  h1: 'Google Ads Audit Service',
  heroHeadline: 'Find out where your Google Ads budget is going and what to fix first',
  heroText:
    'A Google Ads audit is a line-by-line review of your account: structure, keywords, search terms, bidding, ads, tracking and landing pages. You get a written report that ranks every issue by how much money it is costing you, so you know exactly what to fix first, whether I do the work or your team does.',
  overview:
    'A Google Ads audit shows you exactly where money is leaking and which fixes matter most. Whether you call it a PPC audit or a Google Ads account audit, the goal is the same: a clear, prioritized list of changes based on your own account data, not a generic checklist.',
  valueProps: [
    'Every finding ranked by estimated impact on wasted spend or missed leads',
    'Conversion tracking verified, not assumed',
    'A roadmap you can hand to any manager or agency',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1783115259399-3a5a3e0e4592',
    alt: 'Reviewing campaign data in a spreadsheet during a Google Ads audit',
    credit: 'https://unsplash.com/photos/hands-typing-on-a-laptop-displaying-a-data-spreadsheet-9fZuqBYlV1w',
  },

  whoItsFor: [
    'Businesses that feel Google Ads is not working but cannot see why',
    'Owners evaluating a current agency or freelancer',
    'Companies about to increase budget and wanting a second opinion first',
    'Marketing teams that want an outside review before a rebuild',
  ],

  problems: [
    {
      title: 'Wasted spend hiding in search terms',
      text: 'Broad and phrase match keywords without strong negatives send budget to irrelevant searches. The search terms report usually tells the story within minutes.',
    },
    {
      title: 'Tracking that cannot be trusted',
      text: 'Duplicate conversions, missing values, page-view "conversions" and untracked calls are common. If tracking is wrong, every optimization decision is wrong too.',
    },
    {
      title: 'Bidding strategies set too early',
      text: 'Target CPA or target ROAS turned on with too little data, or set to unrealistic targets, quietly suppresses the account.',
    },
    {
      title: 'Structure that cannot be optimized',
      text: 'One campaign for everything, shared budgets across unrelated services, and ad groups with dozens of unrelated keywords make it impossible to shift budget toward what works.',
    },
  ],

  included: [
    {
      title: 'Account structure review',
      text: 'Campaign and ad group organization, budget allocation, campaign types and settings such as location, network and ad schedule.',
    },
    {
      title: 'Keyword and match type analysis',
      text: 'Which keywords drive results, which waste budget, and where match types are too loose or too restrictive.',
    },
    {
      title: 'Search terms report review',
      text: 'The last 90 days of search terms, with estimated wasted spend and a negative keyword list ready to apply.',
    },
    {
      title: 'Bidding and budget review',
      text: 'Whether bid strategies fit the data available, whether targets are realistic, and where budget is constrained or oversupplied.',
    },
    {
      title: 'Ad copy and assets review',
      text: 'Ad strength, relevance to keywords, assets in use, and what is missing compared to competitors.',
    },
    {
      title: 'Conversion tracking audit',
      text: 'Every conversion action checked for accuracy, duplication and value. GA4 and Google Tag Manager setup reviewed.',
    },
    {
      title: 'Landing page review',
      text: 'Message match, speed, mobile usability, calls to action and tracking on the pages ads send people to.',
    },
    {
      title: 'Prioritized roadmap',
      text: 'A written document listing every issue, its estimated impact, and the order to fix things in.',
    },
  ],

  process: [
    { title: 'Access', text: 'You grant read-only access to Google Ads, GA4 and, if possible, Google Tag Manager.' },
    { title: 'Review', text: 'I go through the account, tracking and landing pages over several days.' },
    { title: 'Report', text: 'You receive a written audit with findings ranked by impact and a recommended roadmap.' },
    { title: 'Walkthrough', text: 'We go through the report on a call so you understand each finding and what to do next.' },
  ],

  deliverables: [
    'Written audit report with impact rankings',
    'Negative keyword list ready to apply',
    'Conversion tracking findings and fixes',
    'Landing page recommendations',
    'Recommended budget and bidding changes',
    'Walkthrough call',
  ],
  tools: ['Google Ads', 'Google Ads Editor', 'GA4', 'Google Tag Manager', 'Tag Assistant', 'PageSpeed Insights'],

  faqs: [
    {
      question: 'Is the audit free?',
      answer:
        'I offer a free initial review that covers the biggest issues in your account. The full written audit with a complete roadmap is a paid service, and its fee is credited if you move to ongoing management.',
    },
    {
      question: 'What access do you need?',
      answer:
        'Read-only access to Google Ads and GA4 is enough for the review. Google Tag Manager access helps me verify tracking in detail.',
    },
    {
      question: 'How long does an audit take?',
      answer:
        'Usually a few business days from access to delivered report, depending on account size.',
    },
    {
      question: 'Can I give the audit to my current agency?',
      answer:
        'Yes. The report is written so any competent manager can act on it. Many clients use it to hold their current provider accountable.',
    },
    {
      question: 'Do you audit Performance Max and Shopping accounts?',
      answer:
        'Yes. E-commerce audits include Merchant Center feed quality, product segmentation and purchase tracking accuracy.',
    },
    {
      question: 'What if the account is new?',
      answer:
        'For brand new accounts, a pre-launch audit reviews tracking, structure plans and landing pages before any money is spent.',
    },
    {
      question: 'Will you implement the fixes?',
      answer:
        'If you want. The audit stands alone, and you can choose to have me implement it through ongoing management or a one-time optimization project.',
    },
  ],

  finalCta: {
    heading: 'Request a Google Ads audit',
    text: 'Tell me a little about your account and goals. I will start with a free review of the biggest issues and explain what a full audit would cover.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-search-ads', 'performance-max-management'],
  relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-ecommerce', 'google-ads-for-law-firms', 'google-ads-for-local-businesses'],
};
