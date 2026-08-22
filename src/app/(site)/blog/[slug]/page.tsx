import type { Metadata } from 'next';
import Link from 'next/link';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShareButton } from '@/components/ui/share-button';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt: string;
  sections: BlogSection[];
  thumbnail?: string;
  tags: string[];
  author: string;
  readTime: number;
  createdAt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
}

const SAMPLE_ARTICLES_MAP: Record<string, BlogPost> = {
  'scale-google-ads-pmax-2026': {
    _id: '1',
    title: 'How to Scale Google Ads Performance Max Campaigns in 2026',
    slug: 'scale-google-ads-pmax-2026',
    excerpt: 'Discover actionable strategies to structure asset groups, feed optimization, and audience signals to reach 5x+ ROAS on PMax.',
    sections: [
      {
        title: 'Introduction to Performance Max Scaling',
        paragraphs: ['Performance Max (PMax) has become the flagship campaign type in Google Ads. However, many advertisers struggle with runaway spending and inconsistent CPA. In this guide, we break down the exact scaling framework used across enterprise Google Ads accounts.']
      },
      {
        title: '1. Granular Asset Group Segmentation',
        paragraphs: ['Stop dumping all products or landing pages into a single asset group. Group your asset groups by tight product categories, high-margin items, or audience personas. This gives Google\'s AI specific creative assets and copy tailored to each buying intent.']
      },
      {
        title: '2. High-Intent Audience Signals',
        paragraphs: ['Audience signals don\'t target users directly — they guide the algorithm during the initial learning phase. Combine custom intent keywords (competitor brand names + high-intent search queries) with first-party customer lists (uploaded via Customer Match).']
      }
    ],
    tags: ['Google Ads', 'PMax', 'PPC'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-28',
  },
  'meta-ads-attribution-setup-ios': {
    _id: '2',
    title: 'Meta Ads Attribution Setup: Navigating iOS Restrictions',
    slug: 'meta-ads-attribution-setup-ios',
    excerpt: 'Learn how to set up Meta Conversions API (CAPI) and GA4 server-side tracking to recover up to 35% of lost attribution data.',
    sections: [
      {
        title: 'The Challenge of Signal Loss in Meta Ads',
        paragraphs: ['Since Apple introduced iOS 14.5+ ATT privacy prompts, browser-based Meta Pixel tracking misses 20% to 40% of conversion events. Without accurate data, Meta\'s algorithm bids blindly, leading to inflated CPA and inaccurate ROAS metrics.']
      },
      {
        title: '1. Server-Side Conversions API (CAPI)',
        paragraphs: ['Conversions API creates a direct server-to-server link between your website (or server container) and Meta. By bypassing client-side ad blockers and browser privacy restrictions, CAPI recovers lost conversion signals seamlessly.']
      }
    ],
    tags: ['Meta Ads', 'Analytics', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-07-20',
  },
  'technical-seo-checklist-ecommerce': {
    _id: '3',
    title: 'Technical SEO Checklist: 10 Critical Audits For E-Commerce',
    slug: 'technical-seo-checklist-ecommerce',
    excerpt: 'Step-by-step technical SEO guide covering crawl budgets, Schema markup, Core Web Vitals, and indexation fixes to double organic traffic.',
    sections: [
      {
        title: 'Why Technical SEO Drives Organic Revenue',
        paragraphs: ['Even with great content, technical barriers like slow page speed, orphan pages, or canonical loops can prevent search engine crawlers from indexing your money pages.']
      },
      {
        title: '1. Faceted Navigation & Canonicalization',
        paragraphs: ['E-commerce filter parameters (color, size, price) can generate thousands of duplicate URL parameters. Implement canonical tags pointing to root category pages or use noindex, follow rules for thin filter variations.']
      }
    ],
    tags: ['SEO', 'E-Commerce', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 10,
    createdAt: '2026-07-15',
  }
};

async function getBlogPost(slug: string): Promise<BlogPost> {
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      const blog = await BlogModel.findOne({ slug, status: 'published' }).lean();
      if (blog) {
        return {
          _id: blog._id.toString(),
          title: blog.title,
          slug: blog.slug,
          category: blog.category,
          excerpt: blog.excerpt || '',
          sections: blog.sections || [],
          thumbnail: blog.thumbnail,
          tags: blog.tags || [],
          author: blog.author || 'Sirajul Islam Sohag',
          readTime: blog.readTime || 5,
          createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : new Date().toISOString(),
          seo: blog.seo,
        };
      }
    }
  } catch (error) {
    console.warn('Database blog lookup error, falling back to static map:', error);
  }

  if (SAMPLE_ARTICLES_MAP[slug]) {
    return SAMPLE_ARTICLES_MAP[slug];
  }

  return {
    _id: 'default',
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    slug,
    excerpt: 'Comprehensive growth guide and strategic analysis for performance marketing campaigns.',
    sections: [
      {
        title: 'Strategic Growth Framework',
        paragraphs: ['Scaling digital marketing performance requires continuous optimization, accurate conversion tracking, and high-converting ad copy.']
      }
    ],
    tags: ['Digital Marketing', 'Growth', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 5,
    createdAt: new Date().toISOString().split('T')[0],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sirajmarketing.com';
  const url = `${siteUrl}/blog/${post.slug}`;
  const title = post.seo?.metaTitle || `${post.title} | Sirajul`;
  const description = post.seo?.metaDescription || post.excerpt;
  const image = post.seo?.ogImage || post.thumbnail || `${siteUrl}/avatar.png`;

  return {
    title,
    description,
    keywords: post.tags,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.createdAt ? new Date(post.createdAt).toISOString() : undefined,
      authors: [post.author || 'Sirajul Islam Sohag'],
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return (
    <>
      <article className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border)]">
            <Link href="/blog">
              <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                Back to Articles
              </Button>
            </Link>

            <div className="flex items-center gap-6 text-xs md:text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {post.createdAt?.split('T')[0]}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime} min read
              </span>
              <ShareButton title={post.title} />
            </div>
          </div>

          {/* Tags & Category */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.category && (
              <Badge variant="primary" className="text-xs uppercase font-bold tracking-wider">
                {post.category.replace(/-/g, ' ')}
              </Badge>
            )}
            {post.tags?.filter((t) => t.toLowerCase() !== post.category?.toLowerCase()).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="w-full aspect-video md:aspect-[21/9] relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Body Content from Sections */}
          <div className="max-w-none text-[var(--text-secondary)] leading-relaxed space-y-12 text-base md:text-lg">
            {post.sections?.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                {section.title && (
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text)]">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs?.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
              <span className="text-xl font-heading font-bold text-primary">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-heading font-bold text-[var(--text)] mb-1">
                Written by {post.author}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Digital Marketing Consultant specializing in Google Ads, Meta Ads scaling, SEO, and Web Analytics for e-commerce and high-growth brands.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Contact />
      <Footer />
    </>
  );
}
