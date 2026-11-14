/**
 * Shared content types for the SEO landing pages.
 *
 * Industry pages live at /google-ads-for-<x> and service pages at /services/<x>.
 * Titles, descriptions, keywords and alt text come from the SEO strategy sheet.
 * Keep every claim factual: no invented client names, numbers or guarantees.
 */

export interface Keyword {
  keyword: string;
  /** Monthly US search volume from the strategy sheet (verified). */
  sv?: number;
  /** Keyword difficulty from the strategy sheet (verified). */
  kd?: number;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface AdGroupExample {
  name: string;
  /** Keywords with match type: [exact], "phrase", broad. */
  keywords: string[];
}

export interface CampaignExample {
  campaign: string;
  goal: string;
  adGroups: AdGroupExample[];
}

export interface PageImage {
  /**
   * Either a path under /public (rendered only if the file exists) or a free
   * images.unsplash.com photo URL (served as WebP/AVIF by next/image).
   */
  src: string;
  alt: string;
  /** Photo page on Unsplash, shown as a small credit so stock photos are never mistaken for client work. */
  credit?: string;
  /** Tailwind aspect class matching the image's own shape, so text in the image is never cropped. */
  aspect?: string;
}

export interface IndustryPage {
  /** URL slug after the domain, e.g. google-ads-for-roofing */
  slug: string;
  /** Card id on the homepage industry section, if one exists. */
  sectionId?: string;
  /** Short industry name used in headings and links, e.g. "Roofers". */
  name: string;
  /** Lowercase noun for sentences, e.g. "roofing companies". */
  noun: string;

  // From the strategy sheet
  seoTitle: string;
  metaDescription: string;
  imageAlt: string;
  tags: string[];
  primaryKeyword: Keyword;
  secondaryKeywords: Keyword[];
  /** Suggested, unverified search terms (no metrics). */
  suggestedKeywords: string[];
  searchIntent: string;

  // Page copy
  h1: string;
  heroHeadline: string;
  heroText: string;
  /** Short intro paragraph that works the sheet's sub keywords into natural copy. */
  overview?: string;
  valueProps: string[];
  heroImage: PageImage;
  /** Second, different industry photo shown further down the page. */
  sectionImage?: PageImage;

  challenges: TitledText[];
  strategy: TitledText[];
  campaignExamples: CampaignExample[];
  negativeKeywords: string[];
  locationTargeting: { intro: string; points: string[] };
  conversionJourney: string[];
  trackingText: string;
  subcategories: TitledText[];
  faqs: Faq[];
  finalCta: { heading: string; text: string };

  /** Slugs of service pages to link to from this page. */
  relatedServices: string[];
  /** Slugs of other industry pages to link to. */
  relatedIndustries: string[];
}

export interface ServicePage {
  /** URL slug after /services/, e.g. google-ads-management */
  slug: string;
  name: string;

  seoTitle: string;
  metaDescription: string;
  imageAlt: string;
  tags: string[];
  primaryKeyword: Keyword;
  secondaryKeywords: Keyword[];
  searchIntent: string;

  h1: string;
  heroHeadline: string;
  heroText: string;
  /** Short intro paragraph that works the sheet's sub keywords into natural copy. */
  overview?: string;
  valueProps: string[];
  heroImage: PageImage;

  whoItsFor: string[];
  problems: TitledText[];
  included: TitledText[];
  process: TitledText[];
  deliverables: string[];
  tools: string[];
  faqs: Faq[];
  finalCta: { heading: string; text: string };

  relatedServices: string[];
  relatedIndustries: string[];
}
