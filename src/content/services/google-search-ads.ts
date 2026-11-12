import type { ServicePage } from '../types';

export const googleSearchAds: ServicePage = {
  slug: 'google-search-ads',
  name: 'Google Search Ads',

  seoTitle: 'Google Search Ads Management | High-Intent PPC',
  metaDescription:
    'Google Search Ads management built on high-intent keywords, negatives, strong ads and conversion tracking to bring in qualified leads. Get a free audit.',
  imageAlt: 'Google Search Ads campaign targeting high intent keywords',
  tags: ['Google Search Ads', 'paid search management', 'PPC campaigns', 'keyword strategy', 'search ads'],
  primaryKeyword: { keyword: 'google search ads management', sv: 590, kd: 46 },
  secondaryKeywords: [
    { keyword: 'search ads management', sv: 390, kd: 40 },
    { keyword: 'google search campaign management', sv: 260, kd: 38 },
    { keyword: 'paid search management', sv: 1300, kd: 52 },
  ],
  searchIntent: 'Commercial: businesses that want Search campaigns built or managed for lead generation.',

  h1: 'Google Search Ads Management',
  heroHeadline: 'Search campaigns built on the searches that mean someone is ready to buy',
  heroText:
    'Search is where intent lives. Someone typing "emergency plumber near me" or "dental implants cost" is telling you exactly what they need. I build and manage Search campaigns that capture those searches with tight keyword groups, strong ads, aggressive negatives and tracking that shows which keywords produce leads.',
  valueProps: [
    'Keyword research by intent, not just volume',
    'Tight ad groups so every ad matches the search',
    'Weekly search term reviews that cut waste and find new opportunities',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1781246435700-afec19012b45',
    alt: 'Laptop showing search campaign charts on a desk',
    credit: 'https://unsplash.com/photos/laptop-with-charts-on-a-desk-by-a-sunny-window-8OYcY9CRP_0',
  },

  whoItsFor: [
    'Service businesses that get leads by phone or form',
    'Companies with a clear set of services people search for',
    'Businesses whose Performance Max campaigns have no Search foundation underneath',
    'Anyone who has been burned by broad match and wants control back',
  ],

  problems: [
    {
      title: 'Broad match without guardrails',
      text: 'Broad match can work with strong conversion data and negatives. Without them, it spends budget on searches only loosely related to your business.',
    },
    {
      title: 'Ad groups that cover too much',
      text: 'When one ad group holds "roof repair", "roof replacement" and "gutter cleaning", no ad can match any of them well. Quality Score drops and cost per click rises.',
    },
    {
      title: 'Ads that say what everyone says',
      text: '"Best service, call today" does not win clicks against competitors who mention response time, licensing, pricing and guarantees.',
    },
    {
      title: 'No feedback loop',
      text: 'Without weekly search term reviews, the same wasted searches repeat month after month.',
    },
  ],

  included: [
    {
      title: 'Keyword research and intent mapping',
      text: 'Keywords grouped by what the searcher wants: emergency, repair, install, cost research, comparison. Each group gets its own treatment.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'Campaigns by service or intent with their own budgets, and ad groups small enough that ads match searches closely.',
    },
    {
      title: 'Match type strategy',
      text: 'Exact and phrase match for control, with broad match tested only where conversion data and negatives support it.',
    },
    {
      title: 'Responsive search ads',
      text: 'Headlines and descriptions written for your industry with pinned elements where needed, tested against each other and refreshed as data comes in.',
    },
    {
      title: 'Ad assets',
      text: 'Sitelinks, callouts, structured snippets, call, location, lead form and image assets configured to expand your ad and improve click-through rate.',
    },
    {
      title: 'Negative keyword management',
      text: 'Pre-built industry negative lists at launch and weekly additions from search terms.',
    },
    {
      title: 'Bidding strategy',
      text: 'Manual or Maximize Clicks to collect clean data, then Maximize Conversions or Target CPA once conversions are reliable.',
    },
    {
      title: 'Ad schedule and location optimization',
      text: 'Bids adjusted by hour, day and location based on when and where leads actually convert.',
    },
  ],

  process: [
    { title: 'Research', text: 'Keyword and competitor research mapped to your services and service area.' },
    { title: 'Build', text: 'Campaigns, ad groups, keywords, ads, assets and negatives built in your account.' },
    { title: 'Track', text: 'Calls, forms and bookings tracked before launch so data is clean from day one.' },
    { title: 'Launch and learn', text: 'Controlled launch with daily checks in the first two weeks.' },
    { title: 'Optimize weekly', text: 'Search terms, bids, ads and budgets reviewed and adjusted every week.' },
  ],

  deliverables: [
    'Keyword map by intent',
    'Built Search campaigns in your account',
    'Responsive search ads and assets',
    'Negative keyword lists',
    'Bid strategy plan',
    'Weekly optimization log',
  ],
  tools: ['Google Ads', 'Google Ads Editor', 'Keyword Planner', 'Google Tag Manager', 'GA4', 'Call tracking'],

  faqs: [
    {
      question: 'Should I use Search or Performance Max?',
      answer:
        'For lead generation, Search first. It gives control over keywords and the clearest data. Performance Max can be added later with that conversion data behind it.',
    },
    {
      question: 'Do you use broad match?',
      answer:
        'Carefully. Broad match with Smart Bidding and a strong negative list can find new converting searches. Without those conditions it wastes money, so it is tested, not assumed.',
    },
    {
      question: 'How many keywords do I need?',
      answer:
        'Fewer than most people think. A focused set of high-intent keywords, grouped tightly, usually outperforms hundreds of loosely related ones.',
    },
    {
      question: 'How do you measure Search campaign success?',
      answer:
        'Cost per qualified lead or cost per sale, by campaign and keyword. Clicks and impressions are tracked but they are not the goal.',
    },
    {
      question: 'Can you take over an existing Search account?',
      answer:
        'Yes. I start with an audit, keep what works and restructure what does not, without losing the account history that helps bidding.',
    },
    {
      question: 'How long before Search ads produce leads?',
      answer:
        'Often within the first week. Cost per lead improves over the following weeks as search terms are refined and bidding learns.',
    },
    {
      question: 'Do you write the ad copy?',
      answer:
        'Yes. Ads are written for your industry and reviewed with you before launch, especially for regulated industries such as legal and healthcare.',
    },
  ],

  finalCta: {
    heading: 'Get a free Search campaign review',
    text: 'I will look at your keywords, search terms, ads and structure and show you where Search budget is being wasted or missed.',
  },

  relatedServices: ['google-ads-management', 'google-ads-audit', 'google-ads-conversion-tracking', 'performance-max-management'],
  relatedIndustries: ['google-ads-for-plumbers', 'google-ads-for-hvac', 'google-ads-for-law-firms', 'google-ads-for-local-businesses'],
};
