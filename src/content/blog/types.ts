export interface StaticBlogSection {
  /** H2 heading for the section (omit for an intro section). */
  title?: string;
  /**
   * Paragraphs. Supported formatting:
   * [text](/page) links, **bold**, "- " bullet lines, "1. " numbered lines, "### " sub-heading.
   * A section titled "Frequently Asked Questions" with "**Question?** Answer" paragraphs becomes FAQ schema.
   */
  paragraphs: string[];
}

export interface StaticBlogPost {
  slug: string;
  /** H1 shown on the page. */
  title: string;
  category: string;
  /** 1-2 sentence summary used on the blog card and as a fallback description. */
  excerpt: string;
  tags: string[];
  author: string;
  readTime: number;
  /** ISO date-time the post went live (UTC). */
  publishedAt: string;
  updatedAt?: string;
  /** Optional custom image; otherwise a branded cover is generated at /blog-cover/<slug>. */
  thumbnail?: string;
  thumbnailAlt?: string;
  seo: { metaTitle: string; metaDescription: string; keywords: string[] };
  /**
   * Key takeaways box shown right after the intro (3 to 6 short standalone sentences).
   * Required for posts published from 2026-11-21 (SEO checklist).
   */
  keyTakeaways?: string[];
  /** ISO date the facts, stats and links were last verified. Shown as "Sources checked". */
  sourcesChecked?: string;
  /** Optional italic note shown at the end (e.g. which figures are illustrative). */
  editorialNote?: string;
  sections: StaticBlogSection[];
}
