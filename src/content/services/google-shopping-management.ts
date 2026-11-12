import type { ServicePage } from '../types';

export const googleShoppingManagement: ServicePage = {
  slug: 'google-shopping-management',
  name: 'Google Shopping Management',

  seoTitle: 'Google Shopping Ads Management | E-commerce PPC',
  metaDescription:
    'Google Shopping Ads management with Merchant Center, feed optimization, campaign structure and bidding to grow profitable sales and ROAS. Get a free audit.',
  imageAlt: 'Google Shopping Ads and Merchant Center product feed optimization',
  tags: ['Google Shopping management', 'Merchant Center', 'shopping ads', 'product feed', 'e-commerce PPC'],
  primaryKeyword: { keyword: 'google shopping management', sv: 390, kd: 43 },
  secondaryKeywords: [
    { keyword: 'google shopping ads management', sv: 320, kd: 42 },
    { keyword: 'google shopping consultant', sv: 170, kd: 36 },
    { keyword: 'shopping ads management', sv: 260, kd: 38 },
  ],
  searchIntent: 'Commercial: online store owners who want Shopping campaigns and Merchant Center managed by a specialist.',

  h1: 'Google Shopping Ads Management',
  heroHeadline: 'Shopping campaigns and a product feed built to sell at a profitable ROAS',
  heroText:
    'Shopping ads put your product, price and image in front of people searching to buy. The results depend on three things: feed quality, campaign structure and bidding. I manage all three, starting with Merchant Center, so your products show for the right searches and your budget goes to the products that make money.',
  valueProps: [
    'Feed optimization: titles, attributes, product types, custom labels and disapproval fixes',
    'Campaigns segmented by margin and performance',
    'Purchase tracking verified so ROAS numbers are real',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9',
    alt: 'Product package for an online store',
    credit: 'https://unsplash.com/photos/brown-cardboard-box-on-white-surface-3l19r5EOZaw',
  },

  whoItsFor: [
    'Shopify, WooCommerce, BigCommerce and Magento stores',
    'Brands with disapprovals or limited performance in Merchant Center',
    'Stores where a few products take all the budget',
    'Retailers who want Standard Shopping control alongside Performance Max',
  ],

  problems: [
    {
      title: 'Product titles that do not match searches',
      text: 'Titles written for your website rarely include the words people search. Shopping relies on titles and attributes, so poor titles mean poor visibility.',
    },
    {
      title: 'Disapprovals and account warnings',
      text: 'Missing GTINs, price mismatches, shipping errors and policy issues keep products from showing and can put the whole account at risk.',
    },
    {
      title: 'Everything in one product group',
      text: 'One campaign with one bid for all products means low-margin and high-margin items compete equally. Profit suffers.',
    },
    {
      title: 'Wrong purchase values',
      text: 'Purchase tracking that includes tax and shipping, double counts orders or fires on refresh makes ROAS look better or worse than it is.',
    },
  ],

  included: [
    {
      title: 'Merchant Center setup and cleanup',
      text: 'Account settings, shipping and tax, business information, policy compliance and resolution of disapprovals and warnings.',
    },
    {
      title: 'Feed optimization',
      text: 'Product titles rewritten with search terms, product types and Google categories corrected, attributes completed, and custom labels added for segmentation.',
    },
    {
      title: 'Supplemental feeds and rules',
      text: 'Feed rules and supplemental feeds used to improve data without changing your store.',
    },
    {
      title: 'Campaign structure',
      text: 'Standard Shopping campaigns segmented by margin, category, brand or performance with product groups and bids that fit each tier.',
    },
    {
      title: 'Bidding strategy',
      text: 'Manual CPC or Maximize Clicks to gather data, then target ROAS per campaign based on margin.',
    },
    {
      title: 'Search term management',
      text: 'Shopping search terms reviewed weekly with negatives applied so products show for buying searches, not browsing ones.',
    },
    {
      title: 'Promotions and ratings',
      text: 'Merchant promotions, product ratings and free shipping annotations set up where available to improve click-through rate.',
    },
    {
      title: 'Performance Max coordination',
      text: 'Standard Shopping and PMax structured so they complement each other rather than compete.',
    },
  ],

  process: [
    { title: 'Feed and account audit', text: 'Merchant Center diagnostics, feed quality and purchase tracking reviewed.' },
    { title: 'Fix and optimize the feed', text: 'Disapprovals resolved, titles and attributes improved, custom labels added.' },
    { title: 'Build campaigns', text: 'Segmented Shopping campaigns built with product groups and starting bids.' },
    { title: 'Optimize weekly', text: 'Search terms, bids, product performance and feed diagnostics reviewed every week.' },
    { title: 'Report', text: 'Revenue, ROAS and performance by product tier reported in a dashboard.' },
  ],

  deliverables: [
    'Merchant Center audit and fixes',
    'Optimized product feed with documented changes',
    'Segmented Shopping campaign structure',
    'Negative keyword lists for Shopping',
    'ROAS targets by product tier',
    'Reporting dashboard',
  ],
  tools: ['Google Merchant Center', 'Google Ads', 'Feed rules and supplemental feeds', 'Google Tag Manager', 'GA4', 'Looker Studio'],

  faqs: [
    {
      question: 'Standard Shopping or Performance Max?',
      answer:
        'Often both. Standard Shopping gives control over products and bids; Performance Max gives reach. The split depends on your catalog, margins and data.',
    },
    {
      question: 'Can you fix Merchant Center suspensions?',
      answer:
        'I review the reason, fix the underlying issue on the site or feed, and handle the review request. Some suspensions take time, and I am honest about what can be resolved.',
    },
    {
      question: 'Do you need access to my store?',
      answer:
        'For feed changes, usually feed rules and supplemental feeds are enough. For tracking, I need Google Tag Manager access and, on Shopify, access to set up the pixel or customer events.',
    },
    {
      question: 'How do you choose ROAS targets?',
      answer:
        'From your margins. I calculate break-even ROAS per product tier and set targets above it so growth is profitable, not just high in revenue.',
    },
    {
      question: 'How quickly do feed changes show results?',
      answer:
        'Feed updates are processed within a day or two. Visibility and performance changes usually show within two to four weeks as the new data accumulates.',
    },
    {
      question: 'Do you handle local inventory ads?',
      answer:
        'Yes, for retailers with physical stores who want Shopping ads to show in-store availability.',
    },
    {
      question: 'Which platforms do you work with?',
      answer:
        'Shopify, WooCommerce, BigCommerce, Magento and custom stores with a standard product feed.',
    },
  ],

  finalCta: {
    heading: 'Get a free Shopping and feed audit',
    text: 'I will review your Merchant Center diagnostics, feed quality, campaign structure and purchase tracking and show you the fastest wins.',
  },

  relatedServices: ['performance-max-management', 'google-ads-conversion-tracking', 'google-ads-management', 'ga4-consultant'],
  relatedIndustries: ['google-ads-for-ecommerce', 'google-ads-for-local-businesses', 'google-ads-for-auto-services', 'google-ads-for-home-services'],
};
