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
  sections: StaticBlogSection[];
}
