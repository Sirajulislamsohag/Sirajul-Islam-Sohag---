import type { ServicePage } from '../types';

export const lookerStudioDashboard: ServicePage = {
  slug: 'looker-studio-dashboard',
  name: 'Looker Studio Reporting',

  seoTitle: 'Looker Studio Consultant | PPC Reporting Dashboards',
  metaDescription:
    'Build automated Looker Studio dashboards combining Google Ads, GA4 and CRM data for clear reporting on spend, leads, ROAS, CPA and revenue.',
  imageAlt: 'Looker Studio dashboard for Google Ads PPC and marketing reporting',
  tags: ['Looker Studio consultant', 'PPC dashboard', 'Google Ads reporting', 'GA4 dashboard', 'marketing analytics'],
  primaryKeyword: { keyword: 'looker studio consultant', sv: 320, kd: 34 },
  secondaryKeywords: [
    { keyword: 'looker studio dashboard service', sv: 170, kd: 29 },
    { keyword: 'google ads dashboard', sv: 390, kd: 37 },
    { keyword: 'ppc reporting dashboard', sv: 90, kd: 25 },
  ],
  searchIntent: 'Commercial: businesses and agencies that want automated marketing dashboards built in Looker Studio.',

  h1: 'Looker Studio Consultant',
  heroHeadline: 'One dashboard that shows spend, leads, sales and cost per result, updated automatically',
  heroText:
    'Reporting should take minutes, not a day of exporting spreadsheets. I build Looker Studio dashboards that pull Google Ads, GA4, Search Console, Meta and CRM data into one place, so you see what you spent, what you got and what it cost per lead or sale, by campaign, by channel and over time.',
  overview:
    'As a Looker Studio consultant, I build reports that answer business questions in one view. My Looker Studio dashboard service combines Google Ads, GA4 and CRM data into a Google Ads dashboard showing spend, leads, cost per lead, ROAS and revenue. A good PPC reporting dashboard updates itself, so nobody has to rebuild spreadsheets every month.',
  valueProps: [
    'Google Ads, GA4, CRM and other sources combined in one view',
    'Metrics that matter: cost per lead, cost per sale, ROAS, revenue, not just clicks',
    'Automated refresh and scheduled delivery to your inbox',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1784729553968-07da5d7b7c99',
    alt: 'Laptop screen with a marketing reporting dashboard',
    credit: 'https://unsplash.com/photos/a-laptop-screen-displays-data-analytics-charts-and-statistics-fDisDvdiqrQ',
  },

  whoItsFor: [
    'Business owners who want a weekly view of ad performance without logging into platforms',
    'Marketing teams reporting to leadership',
    'Agencies and freelancers who need client-ready reports',
    'Companies with CRM data that should sit next to ad data',
  ],

  problems: [
    {
      title: 'Reports built by hand every month',
      text: 'Exporting, copying and formatting data wastes hours and introduces errors. Automated dashboards remove the work.',
    },
    {
      title: 'Platform reports that flatter themselves',
      text: 'Every ad platform reports its own conversions generously. A dashboard that includes CRM or GA4 data shows what really happened.',
    },
    {
      title: 'Too many metrics, no decisions',
      text: 'Dashboards crammed with impressions, CTR and dozens of charts hide the three numbers that drive decisions.',
    },
    {
      title: 'Data that nobody trusts',
      text: 'Mismatched date ranges, wrong blends and broken connectors make dashboards unreliable. Good builds are tested and documented.',
    },
  ],

  included: [
    {
      title: 'Reporting requirements',
      text: 'We define who reads the dashboard, what decisions it supports and which metrics matter.',
    },
    {
      title: 'Data source setup',
      text: 'Google Ads, GA4, Search Console, Google Sheets, Meta, Microsoft Ads, call tracking and CRM sources connected, directly or through connectors.',
    },
    {
      title: 'Data blending and calculated fields',
      text: 'Spend joined to leads and revenue so cost per lead, cost per sale and ROAS are calculated correctly across sources.',
    },
    {
      title: 'Dashboard design',
      text: 'A clear layout: headline KPIs, trends, campaign and channel breakdowns, and drill-downs where they help, consistent with your brand.',
    },
    {
      title: 'Filters and date controls',
      text: 'Date ranges, campaign, location and device filters so one dashboard answers many questions.',
    },
    {
      title: 'Scheduled delivery',
      text: 'Automated email delivery of PDF snapshots to stakeholders on a weekly or monthly schedule.',
    },
    {
      title: 'Multi-client or multi-location templates',
      text: 'Templated reports with data source switching for agencies and multi-location businesses.',
    },
    {
      title: 'Documentation',
      text: 'A guide to the metrics, sources and blends so the dashboard can be maintained and trusted.',
    },
  ],

  process: [
    { title: 'Requirements', text: 'We agree on audience, questions and metrics.' },
    { title: 'Connect', text: 'Data sources connected and access verified.' },
    { title: 'Build', text: 'Dashboard built with blends, calculated fields and filters.' },
    { title: 'Validate', text: 'Numbers checked against the source platforms for accuracy.' },
    { title: 'Deliver', text: 'Dashboard shared, scheduled delivery set, walkthrough completed.' },
  ],

  deliverables: [
    'Looker Studio dashboard',
    'Connected and documented data sources',
    'Calculated metrics (CPL, CPA, ROAS, revenue)',
    'Scheduled email delivery',
    'Metric definitions document',
    'Walkthrough session',
  ],
  tools: ['Looker Studio', 'Google Ads', 'GA4', 'Search Console', 'Google Sheets', 'BigQuery', 'Third-party connectors for Meta, CRM and call tracking'],

  faqs: [
    {
      question: 'Can the dashboard include CRM data like qualified leads and revenue?',
      answer:
        'Yes. CRM data is connected through a native connector, a Google Sheet export or BigQuery, and blended with ad spend so you see cost per qualified lead and real ROAS.',
    },
    {
      question: 'Does the dashboard update automatically?',
      answer:
        'Yes. Data refreshes on a schedule, and PDF snapshots can be emailed automatically.',
    },
    {
      question: 'Can you combine Google Ads and Meta in one dashboard?',
      answer:
        'Yes. Meta and other platforms are connected through third-party connectors, and spend is combined for total cost per lead.',
    },
    {
      question: 'Is Looker Studio free?',
      answer:
        'Looker Studio itself is free. Some third-party connectors for platforms like Meta or CRMs have a monthly cost, which I explain before building.',
    },
    {
      question: 'Can you build a template for multiple clients or locations?',
      answer:
        'Yes. A single template with switchable data sources keeps reporting consistent and fast to roll out.',
    },
    {
      question: 'How long does a dashboard take to build?',
      answer:
        'A standard Google Ads and GA4 dashboard takes a few business days. Multi-source dashboards with CRM blends take longer.',
    },
    {
      question: 'Can you fix an existing dashboard?',
      answer:
        'Yes. I review the sources, blends and metrics and correct what is wrong rather than starting from scratch when possible.',
    },
  ],

  finalCta: {
    heading: 'Get a reporting dashboard that answers your questions',
    text: 'Tell me which platforms you use and what you need to see each week. I will outline the dashboard and what it would take to build.',
  },

  relatedServices: ['google-ads-management', 'ga4-consultant', 'google-ads-conversion-tracking', 'google-tag-manager'],
  relatedIndustries: ['google-ads-for-home-services', 'google-ads-for-ecommerce', 'google-ads-for-local-businesses', 'google-ads-for-contractors'],
};
