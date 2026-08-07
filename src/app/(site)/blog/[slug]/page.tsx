'use client';

import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  sections: BlogSection[];
  thumbnail?: string;
  tags: string[];
  author: string;
  readTime: number;
  createdAt: string;
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

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs?status=published`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const found = data.data.find((b: BlogPost) => b.slug === slug || b._id === slug);
          if (found) {
            setPost(found);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('API lookup failed, checking static map:', err);
      }

      // Check sample map fallback
      if (SAMPLE_ARTICLES_MAP[slug]) {
        setPost(SAMPLE_ARTICLES_MAP[slug]);
      } else {
        // Fallback default
        setPost({
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
        });
      }
      setLoading(false);
    }
    loadArticle();
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <span className="text-2xl font-heading font-bold text-gradient">Sirajul</span>
          <div className="mt-4 w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  if (!post) return null;

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
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary text-[var(--text)] transition-colors cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="primary" className="text-xs">
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
