import type { StaticBlogPost } from './types';
import { POSTS } from './posts';

/** Posts published from the codebase (newest first). Dashboard posts are merged in at runtime. */
export const STATIC_POSTS: StaticBlogPost[] = [...POSTS].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getStaticPost(slug: string): StaticBlogPost | undefined {
  return STATIC_POSTS.find((p) => p.slug === slug);
}

export function blogCover(slug: string): string {
  return `/blog-cover/${slug}`;
}

/** Lightweight card data for the blog listing (no article body). */
export const STATIC_POST_CARDS = STATIC_POSTS.map((p) => ({
  _id: `static-${p.slug}`,
  title: p.title,
  slug: p.slug,
  category: p.category,
  excerpt: p.excerpt,
  thumbnail: p.thumbnail || blogCover(p.slug),
  tags: p.tags,
  author: p.author,
  readTime: p.readTime,
  createdAt: p.publishedAt,
}));
