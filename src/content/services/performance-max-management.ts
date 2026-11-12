import type { ServicePage } from '../types';

export const performanceMaxManagement: ServicePage = {
  slug: 'performance-max-management',
  name: 'Performance Max Management',

  seoTitle: 'Performance Max Management | PMax Google Ads Expert',
  metaDescription:
    'Performance Max management for lead gen and e-commerce: asset groups, audience signals, feed quality, bidding and tracking. Book a free PMax review.',
  imageAlt: 'Google Performance Max campaign management and optimization',
  tags: ['Performance Max management', 'PMax consultant', 'Google Ads', 'audience signals', 'smart bidding'],
  primaryKeyword: { keyword: 'performance max management', sv: 480, kd: 39 },
  secondaryKeywords: [
    { keyword: 'pmax management', sv: 320, kd: 34 },
    { keyword: 'performance max agency', sv: 260, kd: 41 },
    { keyword: 'performance max consultant', sv: 170, kd: 35 },
  ],
  searchIntent: 'Commercial: advertisers running or considering Performance Max who want expert setup or optimization.',

  h1: 'Performance Max Management',
  heroHeadline: 'Performance Max that is structured, measured and accountable, not a black box',
  heroText:
    'Performance Max can scale results across Search, Shopping, YouTube, Display, Gmail and Maps. It can also quietly take credit for brand demand and spend on placements that never convert. I set up and manage PMax with clear segmentation, accurate conversion data, strong assets and the exclusions that keep it honest.',
  valueProps: [
    'Asset groups and listing groups segmented by product or service, not one catch-all campaign',
    'Brand exclusions and search theme controls so PMax does not cannibalize Search',
    'Conversion values and tracking verified before scaling',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5',
    alt: 'Marketer analyzing Performance Max charts on a laptop',
    credit: 'https://unsplash.com/photos/woman-working-on-laptop-with-charts-and-graphs-KNQUEQwTCY4',
  },

  whoItsFor: [
    'E-commerce stores with a product feed in Merchant Center',
    'Lead generation businesses with reliable conversion tracking',
    'Advertisers whose PMax results look good but revenue does not match',
    'Accounts that need more scale than Search alone can provide',
  ],

  problems: [
    {
      title: 'One campaign, every product',
      text: 'A single all-products PMax campaign lets best-sellers and low-margin products dominate while the rest of the catalog gets no spend.',
    },
    {
      title: 'Brand cannibalization',
      text: 'Without brand exclusions, PMax takes credit for customers who were already searching for you, inflating ROAS and hiding real acquisition cost.',
    },
    {
      title: 'Weak assets',
      text: 'Low-quality images, no video and generic headlines push PMax toward cheap placements and poor-quality traffic.',
    },
    {
      title: 'Bad conversion data in, bad results out',
      text: 'PMax is fully automated around your conversion data. Duplicate purchases, missing values or page-view conversions send it in the wrong direction.',
    },
  ],

  included: [
    {
      title: 'Campaign segmentation',
      text: 'Campaigns split by margin tier, category, service or performance using custom labels and listing groups so budget follows profit.',
    },
    {
      title: 'Asset group strategy',
      text: 'Asset groups built per theme with matching headlines, descriptions, images and video, so the ads shown fit the products or services in that group.',
    },
    {
      title: 'Audience signals',
      text: 'Customer lists, remarketing audiences, in-market and custom segments used as signals to shorten the learning period.',
    },
    {
      title: 'Feed optimization',
      text: 'For e-commerce, Merchant Center titles, attributes and custom labels improved so Shopping placements inside PMax perform.',
    },
    {
      title: 'Brand and placement exclusions',
      text: 'Brand exclusions, negative keywords at account level, placement exclusions and content suitability settings applied and reviewed.',
    },
    {
      title: 'Bidding and targets',
      text: 'Maximize Conversion Value or Maximize Conversions to start, then target ROAS or target CPA per campaign once data supports it.',
    },
    {
      title: 'Search term and placement insights',
      text: 'Search categories, placement reports and asset performance reviewed weekly to inform exclusions and asset refreshes.',
    },
    {
      title: 'Incrementality checks',
      text: 'Brand-separated reporting and controlled tests so you know whether PMax is adding sales or just reporting them.',
    },
  ],

  process: [
    { title: 'Audit', text: 'Existing PMax campaigns, conversion data, feed and assets reviewed.' },
    { title: 'Tracking and feed', text: 'Purchase or lead tracking verified and feed quality improved before launch.' },
    { title: 'Structure', text: 'Campaigns and asset groups built with segmentation and exclusions.' },
    { title: 'Learn', text: 'Controlled budgets while the campaign collects data, with daily checks.' },
    { title: 'Scale and refine', text: 'Budgets and targets adjusted weekly, assets refreshed, exclusions expanded.' },
  ],

  deliverables: [
    'PMax campaign structure document',
    'Asset group plan with asset requirements',
    'Audience signal setup',
    'Brand and placement exclusion lists',
    'Feed optimization recommendations',
    'Weekly optimization log and reporting',
  ],
  tools: ['Google Ads', 'Merchant Center', 'Google Tag Manager', 'GA4', 'Looker Studio', 'Supplemental feeds'],

  faqs: [
    {
      question: 'Is Performance Max good for lead generation?',
      answer:
        'It can be, with accurate conversion tracking and lead quality feedback. Without those, PMax tends to produce low-quality form fills. I usually build Search first and add PMax once there is clean lead data.',
    },
    {
      question: 'Should I replace Standard Shopping with PMax?',
      answer:
        'Not always. Many stores run PMax for scale and keep Standard Shopping for control over specific products or margins. The right mix depends on your data.',
    },
    {
      question: 'How do you stop PMax from taking brand traffic?',
      answer:
        'With brand exclusions on the campaign and a separate brand Search campaign, so brand demand is captured cheaply and reported separately.',
    },
    {
      question: 'How much data does PMax need?',
      answer:
        'Enough conversions per month for Smart Bidding to learn, ideally a few dozen or more per campaign. Accounts with less data start with broader goals and tighter budgets.',
    },
    {
      question: 'Do you create the images and videos?',
      answer:
        'I provide asset specifications and recommendations and can prepare simple assets. For brand creative, I work with your designer or supply briefs.',
    },
    {
      question: 'How long before PMax results stabilize?',
      answer:
        'Expect a learning period of a few weeks after launch or major changes. Results are judged on 4 to 8 week windows rather than day to day.',
    },
    {
      question: 'Can you audit an existing PMax account?',
      answer:
        'Yes. The audit covers structure, conversion data, feed, assets, exclusions and whether PMax is actually adding incremental results.',
    },
  ],

  finalCta: {
    heading: 'Book a free Performance Max review',
    text: 'I will review your PMax structure, conversion data and assets and tell you whether it is adding real results or just reporting them.',
  },

  relatedServices: ['google-shopping-management', 'google-ads-conversion-tracking', 'google-ads-management', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-ecommerce', 'google-ads-for-home-services', 'google-ads-for-local-businesses', 'google-ads-for-contractors'],
};
