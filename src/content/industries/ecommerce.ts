import type { IndustryPage } from '../types';

export const ecommerce: IndustryPage = {
  slug: 'google-ads-for-ecommerce',
  sectionId: 'ecommerce',
  name: 'E-commerce',
  noun: 'e-commerce brands',

  seoTitle: 'Google Ads for E-commerce | Shopping, PMax & ROAS',
  metaDescription:
    'Google Ads for e-commerce using Shopping, Performance Max, Search and feed optimization to grow profitable sales while protecting target ROAS.',
  imageAlt: 'Google Ads for e-commerce using Shopping and Performance Max campaigns',
  tags: ['Google Ads e-commerce', 'Shopping ads', 'Performance Max', 'e-commerce PPC', 'ROAS'],
  primaryKeyword: { keyword: 'google ads for ecommerce', sv: 1900, kd: 48 },
  secondaryKeywords: [
    { keyword: 'ecommerce google ads', sv: 1300, kd: 46 },
    { keyword: 'ecommerce ppc management', sv: 720, kd: 43 },
    { keyword: 'google ads ecommerce expert', sv: 260, kd: 36 },
  ],
  suggestedKeywords: ['shopify google ads management', 'google shopping ads for ecommerce', 'ecommerce ppc agency alternative', 'performance max for ecommerce'],
  searchIntent: 'Commercial: online store owners and marketing managers looking for an e-commerce Google Ads specialist.',

  h1: 'Google Ads for E-commerce Brands',
  heroHeadline: 'Shopping, Performance Max and Search built to grow sales at a ROAS you can live with',
  heroText:
    'For an online store, Google Ads is about selling the right products at a profitable return, not about traffic. I manage Shopping and Performance Max campaigns, fix the product feed in Merchant Center, and make sure purchase tracking is accurate so Smart Bidding is learning from real revenue.',
  valueProps: [
    'Products segmented by margin and performance so budget follows profit',
    'Merchant Center feed optimization: titles, attributes, custom labels, disapprovals',
    'Purchase tracking verified once, correctly, with enhanced conversions',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1766040923580-16ad32fae8b4',
    alt: 'Stack of e-commerce shipping boxes ready for delivery',
    credit: 'https://unsplash.com/photos/a-large-pile-of-brown-cardboard-boxes-with-blue-tape-qO2ztAz5g7A',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1556227996-370b60576b84',
    alt: 'Labeled online order package',
    credit: 'https://unsplash.com/photos/brown-labeled-box-l-E_dRKdBhxk4',
  },

  challenges: [
    {
      title: 'One Performance Max campaign for everything',
      text: 'A single all-products campaign lets a few best-sellers absorb the budget while the rest of the catalog never gets a chance. Low-margin products can also quietly take over spend.',
    },
    {
      title: 'A weak product feed',
      text: 'Poor titles, missing attributes, wrong product types and disapprovals limit how often your products show and how relevant they look to Google.',
    },
    {
      title: 'Inaccurate purchase tracking',
      text: 'Duplicate purchase events, missing values, or tags that fire on page refresh make ROAS numbers wrong and send Smart Bidding in the wrong direction.',
    },
    {
      title: 'Brand traffic hiding real performance',
      text: 'When brand searches are mixed with everything else, the blended ROAS looks great while new-customer acquisition is actually unprofitable.',
    },
    {
      title: 'Rising costs and thin margins',
      text: 'E-commerce CPCs keep climbing. Without margin-aware bidding and segmentation, growth in revenue can mean a loss in profit.',
    },
  ],

  strategy: [
    {
      title: 'Keyword and product research',
      text: 'I map your catalog by margin, price point, seasonality and search demand, then identify which products deserve their own Search campaigns and which belong in Shopping or Performance Max.',
    },
    {
      title: 'Shopping and Performance Max',
      text: 'Standard Shopping gives control over individual products and bids. Performance Max gives scale across Shopping, Search, YouTube and Display. I use both, with a structure that keeps each one accountable.',
    },
    {
      title: 'Campaign structure',
      text: 'Campaigns are segmented by margin tier, category or performance using custom labels. Brand and non-brand Search are separated so you see true acquisition cost.',
    },
    {
      title: 'Ad copy and creative',
      text: 'Search ads highlight free shipping, returns, guarantees and unique selling points. Performance Max asset groups are built per product category with matching images, videos and headlines.',
    },
    {
      title: 'Location targeting',
      text: 'Targeting matches where you ship and where margins hold up. States or regions with high return rates or expensive shipping are bid down or excluded.',
    },
    {
      title: 'Negative keywords and brand exclusions',
      text: 'Negative lists remove free, used, DIY, wholesale and unrelated searches. Brand exclusions in Performance Max keep it from taking credit for brand demand.',
    },
    {
      title: 'Budget and bidding',
      text: 'Target ROAS is set per campaign based on margin, not one blended number. New campaigns start with Maximize Conversion Value and move to tROAS once there are enough purchases.',
    },
    {
      title: 'Search term and placement optimization',
      text: 'Weekly reviews of Shopping and Search terms, Performance Max search categories and placements keep spend on queries that convert.',
    },
    {
      title: 'Landing page and checkout optimization',
      text: 'Product and collection pages are reviewed for speed, trust signals, pricing clarity and checkout friction. Small conversion rate gains compound across every campaign.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'Performance Max - Hero Products',
      goal: 'Scale best-selling, high-margin products',
      adGroups: [
        { name: 'Asset group: Category A', keywords: ['Listing group: custom_label_0 = hero', 'Audience signals: past purchasers, in-market'] },
      ],
    },
    {
      campaign: 'Performance Max - Catalog',
      goal: 'Coverage for the rest of the catalog at a controlled ROAS',
      adGroups: [{ name: 'Asset group by category', keywords: ['Listing group: all products except hero and low margin'] }],
    },
    {
      campaign: 'Standard Shopping - Low Margin',
      goal: 'Control bids on products that cannot afford high CPCs',
      adGroups: [{ name: 'Low Margin Products', keywords: ['Product group: custom_label_1 = low margin, low max CPC'] }],
    },
    {
      campaign: 'Search - Non-Brand Category',
      goal: 'New customer acquisition on category searches',
      adGroups: [
        { name: 'Category Keywords', keywords: ['"buy [product category] online"', '[best [product category]]', '"[product category] free shipping"'] },
      ],
    },
    {
      campaign: 'Search - Brand',
      goal: 'Protect brand demand at low cost',
      adGroups: [{ name: 'Brand', keywords: ['[your brand]', '"[your brand] discount code"', '"[your brand] reviews"'] }],
    },
  ],

  negativeKeywords: [
    'free',
    'cheap',
    'used',
    'second hand',
    'wholesale',
    'bulk',
    'diy',
    'how to make',
    'pattern',
    'template',
    'jobs',
    'reviews',
    'reddit',
    'amazon',
    'ebay',
    'walmart',
    'etsy',
    'repair',
    'manual',
    'recall',
  ],

  locationTargeting: {
    intro:
      'E-commerce targeting is about profitability by region, not just where you can ship.',
    points: [
      'Target the countries and states you ship to, and exclude regions where shipping costs or return rates make orders unprofitable.',
      'Use location bid adjustments based on conversion rate and average order value by state or region.',
      'Match currency, shipping and tax settings in Merchant Center to the markets you target.',
      'For stores with physical locations, add local inventory ads and store visit goals.',
      'Review geographic reports monthly to catch regions quietly absorbing spend without sales.',
    ],
  },

  conversionJourney: [
    'Google Ads click (Shopping, Performance Max or Search)',
    'Product page view and add to cart',
    'Checkout started',
    'Purchase with order value',
    'Repeat purchase and customer lifetime value',
  ],
  trackingText:
    'I set up purchase tracking through Google Tag Manager with a proper data layer on Shopify, WooCommerce or your platform, including transaction ID deduplication and enhanced conversions. GA4 e-commerce events give a full funnel view. Where it helps, server-side tracking improves data accuracy after browser restrictions. New-customer acquisition goals and customer lifetime value data can then be used so bidding favors profitable new customers rather than repeat brand purchases.',

  subcategories: [
    { title: 'Shopify and WooCommerce stores', text: 'Direct-to-consumer brands with their own catalog and checkout.' },
    { title: 'Custom and personalized products', text: 'Engraved, printed and made-to-order products with unique search behavior.' },
    { title: 'Apparel, footwear and accessories', text: 'High competition, seasonal demand and heavy reliance on feed quality.' },
    { title: 'Home, garden and furniture', text: 'Higher order values, longer consideration and strong remarketing opportunities.' },
    { title: 'Health, beauty and supplements', text: 'Policy-sensitive categories that need careful ad copy and landing page compliance.' },
    { title: 'B2B and niche e-commerce', text: 'Industrial supplies, parts and specialty catalogs with lower volume but high intent.' },
  ],

  faqs: [
    {
      question: 'Is Performance Max or Standard Shopping better for my store?',
      answer:
        'It depends on your catalog, margins and data. Many stores use Performance Max for scale and Standard Shopping for control over specific products or low-margin items. I decide based on your account data, not a default preference.',
    },
    {
      question: 'What ROAS should I target?',
      answer:
        'The target comes from your margins, not from an industry average. I calculate break-even ROAS per product tier and set campaign targets above it so growth is profitable.',
    },
    {
      question: 'Do you work with Shopify and WooCommerce?',
      answer:
        'Yes. I set up and audit purchase tracking on both, including data layer events, enhanced conversions and server-side tracking where needed.',
    },
    {
      question: 'Can you fix Merchant Center disapprovals?',
      answer:
        'Yes. I review feed errors, policy issues and account warnings and resolve them so products can show again. Feed quality is usually the fastest win in e-commerce accounts.',
    },
    {
      question: 'How much budget does an e-commerce store need?',
      answer:
        'Enough to generate a meaningful number of purchases per month, because Smart Bidding needs conversion data to work. The right figure depends on your average order value and conversion rate, which I review in the free audit.',
    },
    {
      question: 'How do you separate brand and non-brand performance?',
      answer:
        'With separate brand Search campaigns and brand exclusions in Performance Max, so you can see the real cost of acquiring new customers.',
    },
    {
      question: 'Do you handle YouTube and Display for e-commerce?',
      answer:
        'Yes, mainly as remarketing and as part of Performance Max. Standalone video and Display campaigns are added when the account has the data and creative to support them.',
    },
    {
      question: 'How quickly will sales improve?',
      answer:
        'Feed and tracking fixes often show results within weeks. Bidding and structure changes need 4 to 8 weeks of data to settle, especially after moving to target ROAS.',
    },
  ],

  finalCta: {
    heading: 'Get a free e-commerce Google Ads audit',
    text: 'I will review your campaign structure, product feed, purchase tracking and ROAS by product tier and show you where profit is leaking.',
  },

  relatedServices: ['google-shopping-management', 'performance-max-management', 'google-ads-conversion-tracking', 'ga4-consultant'],
  relatedIndustries: ['google-ads-for-local-businesses', 'google-ads-for-home-services', 'google-ads-for-auto-services', 'google-ads-for-contractors'],
};
