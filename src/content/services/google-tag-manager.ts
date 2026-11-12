import type { ServicePage } from '../types';

export const googleTagManager: ServicePage = {
  slug: 'google-tag-manager',
  name: 'Google Tag Manager Consulting',

  seoTitle: 'Google Tag Manager Consultant | GTM Tracking Setup',
  metaDescription:
    'Google Tag Manager consulting for web and server-side tracking, event setup, form tracking, dataLayer implementation and cleaner conversion measurement.',
  imageAlt: 'Google Tag Manager consultant configuring event and conversion tracking',
  tags: ['Google Tag Manager consultant', 'GTM expert', 'dataLayer', 'event tracking', 'server-side GTM'],
  primaryKeyword: { keyword: 'google tag manager consultant', sv: 390, kd: 39 },
  secondaryKeywords: [
    { keyword: 'google tag manager expert', sv: 480, kd: 42 },
    { keyword: 'gtm consultant', sv: 320, kd: 35 },
    { keyword: 'google tag manager setup service', sv: 170, kd: 31 },
  ],
  searchIntent: 'Commercial: businesses and marketing teams that need GTM set up, cleaned up or extended with server-side tracking.',

  h1: 'Google Tag Manager Consultant',
  heroHeadline: 'A clean, documented GTM setup for every tag your marketing depends on',
  heroText:
    'Google Tag Manager is where your Google Ads, GA4, Meta and other tags live. When it is messy, every platform gets bad data. I audit, build and document GTM containers for web and server-side tracking, with a proper data layer, consistent naming and tests for every tag, so your marketing data is reliable and easy to maintain.',
  valueProps: [
    'Data layer design and implementation for forms, calls, bookings and e-commerce',
    'Consistent naming, folders and documentation so the container stays maintainable',
    'Server-side GTM for better data quality and control where it is worth it',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473',
    alt: 'Tracking code on a computer screen',
    credit: 'https://unsplash.com/photos/computer-coding-screengrab-hvSr_CVecVI',
  },

  whoItsFor: [
    'Businesses whose GTM container has grown messy over several agencies',
    'Marketing teams launching a new site that needs tracking from day one',
    'E-commerce stores that need a reliable data layer for purchases and funnels',
    'Advertisers who want server-side tracking for Google Ads and Meta',
  ],

  problems: [
    {
      title: 'Containers nobody understands',
      text: 'Dozens of unnamed tags, duplicate pixels and triggers from old campaigns make it impossible to know what is firing and why.',
    },
    {
      title: 'Tags that break on site changes',
      text: 'Click and element triggers built on CSS classes stop working the moment a developer changes the page. A data layer prevents that.',
    },
    {
      title: 'Platforms disagreeing with each other',
      text: 'When Google Ads, GA4 and Meta each count conversions differently, nobody trusts the numbers. Usually the cause is inconsistent triggers in GTM.',
    },
    {
      title: 'Data lost to browsers and blockers',
      text: 'Client-side tags miss a growing share of users. Server-side tagging recovers data and gives you control over what each vendor receives.',
    },
  ],

  included: [
    {
      title: 'Container audit',
      text: 'Every tag, trigger and variable reviewed for purpose, duplication, firing accuracy and naming.',
    },
    {
      title: 'Data layer design',
      text: 'A data layer specification for your developer or platform covering page data, form submissions, calls, bookings and e-commerce events.',
    },
    {
      title: 'Tag implementation',
      text: 'Google Ads, GA4, Meta, LinkedIn, Microsoft and other tags implemented with shared triggers and consistent event names.',
    },
    {
      title: 'Form, call and booking tracking',
      text: 'Reliable tracking for common form builders, booking tools, chat widgets and phone links.',
    },
    {
      title: 'E-commerce tracking',
      text: 'GA4 e-commerce events and Google Ads purchase tags with values, transaction IDs and item data on Shopify, WooCommerce and custom stores.',
    },
    {
      title: 'Consent integration',
      text: 'Consent Mode v2 configured with your consent platform so tags respect user choices.',
    },
    {
      title: 'Server-side GTM',
      text: 'Server container setup on Google Cloud or Stape, with client-side tags routed through it for better data quality and control.',
    },
    {
      title: 'Documentation and training',
      text: 'A written guide to the container and a walkthrough so your team can maintain it.',
    },
  ],

  process: [
    { title: 'Audit', text: 'Existing container, site and tracking goals reviewed.' },
    { title: 'Specification', text: 'Data layer and tag plan written and agreed with you and your developer.' },
    { title: 'Build', text: 'Tags, triggers and variables implemented in a GTM workspace.' },
    { title: 'Test', text: 'Every tag verified in preview mode and in live tests before publishing.' },
    { title: 'Publish and document', text: 'Container published with version notes and a handover document.' },
  ],

  deliverables: [
    'GTM audit report',
    'Data layer specification',
    'Clean, organized GTM container',
    'Consent Mode configuration',
    'Server-side container (if included)',
    'Documentation and walkthrough',
  ],
  tools: ['Google Tag Manager', 'Server-side GTM', 'Stape', 'GA4', 'Google Ads', 'Tag Assistant', 'Consent management platforms'],

  faqs: [
    {
      question: 'Do I need a developer for GTM work?',
      answer:
        'For a data layer, usually yes, or a platform that provides one such as Shopify. I write the specification so your developer knows exactly what to add. Many tracking tasks can be done without developer time.',
    },
    {
      question: 'What is a data layer and why does it matter?',
      answer:
        'It is a structured set of information the website passes to GTM, such as form names, order values and product details. Tags built on it keep working when the page design changes.',
    },
    {
      question: 'Is server-side GTM worth it for my business?',
      answer:
        'It depends on your spend, data loss and consent requirements. I assess the likely gain before recommending it, since it adds hosting cost and complexity.',
    },
    {
      question: 'Can you clean up an existing container without breaking things?',
      answer:
        'Yes. Changes are made in a workspace, tested in preview and published with version notes, so anything can be rolled back.',
    },
    {
      question: 'Do you set up Consent Mode?',
      answer:
        'Yes. Consent Mode v2 is configured with your consent banner so Google tags behave correctly for users who decline.',
    },
    {
      question: 'Which platforms do you track through GTM?',
      answer:
        'Google Ads, GA4, Meta, Microsoft Ads, LinkedIn, TikTok, Hotjar, call tracking tools, CRMs and most others with a web tag.',
    },
    {
      question: 'How long does a GTM setup take?',
      answer:
        'A standard web container takes a few business days once the data layer is in place. Server-side setups take longer.',
    },
  ],

  finalCta: {
    heading: 'Get a GTM container review',
    text: 'Send me access to your container. I will review it and tell you what is broken, what is redundant and what is missing.',
  },

  relatedServices: ['google-ads-conversion-tracking', 'ga4-consultant', 'looker-studio-dashboard', 'google-ads-management'],
  relatedIndustries: ['google-ads-for-ecommerce', 'google-ads-for-home-services', 'google-ads-for-local-businesses', 'google-ads-for-law-firms'],
};
