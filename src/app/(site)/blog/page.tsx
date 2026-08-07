'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TextReveal } from '@/components/animations/text-reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowUpRight, BookOpen, Calendar, User, FileText } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail?: string;
  tags: string[];
  author: string;
  readTime: number;
  createdAt: string;
}

const SAMPLE_BLOGS: BlogPost[] = [
  {
    _id: '1',
    title: 'How to Scale Google Ads Performance Max Campaigns in 2026',
    slug: 'scale-google-ads-pmax-2026',
    excerpt: 'Discover actionable strategies to structure asset groups, feed optimization, and audience signals to reach 5x+ ROAS on PMax.',
    tags: ['Google Ads', 'PMax', 'PPC'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-28',
  },
  {
    _id: '2',
    title: 'Meta Ads Attribution Setup: Navigating iOS Restrictions',
    slug: 'meta-ads-attribution-setup-ios',
    excerpt: 'Learn how to set up Meta Conversions API (CAPI) and GA4 server-side tracking to recover up to 35% of lost attribution data.',
    tags: ['Meta Ads', 'Analytics', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-07-20',
  },
  {
    _id: '3',
    title: 'Technical SEO Checklist: 10 Critical Audits For E-Commerce',
    slug: 'technical-seo-checklist-ecommerce',
    excerpt: 'Step-by-step technical SEO guide covering crawl budgets, Schema markup, Core Web Vitals, and indexation fixes to double organic traffic.',
    tags: ['SEO', 'E-Commerce', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 10,
    createdAt: '2026-07-15',
  },
  {
    _id: '4',
    title: 'Building a Full-Funnel Retargeting Engine That Converts',
    slug: 'full-funnel-retargeting-engine',
    excerpt: 'Stop wasting budget on repetitive ad fatigue. Learn how to sequence ad creatives based on user intent and days since last visit.',
    tags: ['Strategy', 'Meta Ads', 'CRO'],
    author: 'Sirajul Islam Sohag',
    readTime: 5,
    createdAt: '2026-07-10',
  },
  {
    _id: '5',
    title: 'GA4 Custom Dashboards: Metrics That Matter For Executives',
    slug: 'ga4-custom-dashboards-executive-metrics',
    excerpt: 'Cut through GA4 bloat and create clean Looker Studio dashboards that highlight true Customer Acquisition Cost (CAC) and LTV.',
    tags: ['Analytics', 'GA4', 'Reporting'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-07-02',
  },
  {
    _id: '6',
    title: '7 Landing Page CRO Hacks That Instantly Boost Conversion Rates',
    slug: 'landing-page-cro-hacks',
    excerpt: 'Simple design and copywriting tweaks that turn cold traffic into qualified leads without increasing ad spend.',
    tags: ['CRO', 'Copywriting', 'Design'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-06-25',
  },
];

const CATEGORIES = ['All', 'Google Ads', 'Meta Ads', 'SEO', 'Analytics', 'CRO'];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(SAMPLE_BLOGS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch('/api/blogs?status=published');
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.warn('Using sample blogs fallback:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.tags?.some((t) => t.toLowerCase() === activeCategory.toLowerCase()));

  return (
    <>
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Pills */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/25'
                      : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post, index) => (
              <ScrollReveal key={post._id} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card variant="glass" className="h-full flex flex-col justify-between group hover-glow cursor-pointer overflow-hidden p-0">
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      {post.thumbnail ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={post.thumbnail} alt={post.title} className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <FileText className="w-10 h-10 text-[var(--text-muted)] group-hover:scale-110 transition-transform duration-500" />
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="primary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Meta Footer */}
                    <div className="px-6 py-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)] mt-auto bg-[var(--bg-card)]/50">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-medium group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
