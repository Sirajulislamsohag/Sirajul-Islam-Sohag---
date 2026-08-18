'use client';

import { useEffect, useState, useRef } from 'react';
import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowUpRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
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
  // Google Ads
  {
    _id: '1',
    title: 'How to Scale Google Ads Performance Max Campaigns in 2026',
    slug: 'scale-google-ads-pmax-2026',
    excerpt: 'Discover actionable strategies to structure asset groups, feed optimization, and audience signals to reach 5x+ ROAS on PMax.',
    tags: ['Google Ads', 'PMax', 'PPC'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-08-12',
  },
  {
    _id: '2',
    title: 'Google Ads Negative Keywords Mastery: Stop Wasting Ad Spend',
    slug: 'google-ads-negative-keywords-mastery',
    excerpt: 'Learn how to build exhaustive cross-campaign negative keyword lists to prevent irrelevant search terms from draining your budget.',
    tags: ['Google Ads', 'PPC', 'Optimization'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-08-05',
  },
  {
    _id: '3',
    title: 'High-Intent Google Search Ad Copy Formulas for B2B Leads',
    slug: 'high-intent-google-search-ad-copy',
    excerpt: 'Proven headline formulas, dynamic keyword insertion techniques, and callout extensions that double CTR for B2B services.',
    tags: ['Google Ads', 'PPC', 'CRO'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-28',
  },
  {
    _id: '4',
    title: 'Mastering Google Ads Quality Score: 10/10 Ad Relevance Strategy',
    slug: 'google-ads-quality-score-mastery',
    excerpt: 'How lowering CPC by 40% is achievable through tight single-theme ad groups, landing page speed, and high CTR ad creative.',
    tags: ['Google Ads', 'PPC', 'Optimization'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-07-20',
  },
  {
    _id: '5',
    title: 'Google Demand Gen vs Performance Max: Which One Fits Your Funnel?',
    slug: 'google-demand-gen-vs-pmax',
    excerpt: 'A comprehensive comparison between YouTube/Discover Demand Gen campaigns and Performance Max for e-commerce and lead gen.',
    tags: ['Google Ads', 'Strategy', 'PPC'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-07-12',
  },
  {
    _id: '6',
    title: 'Smart Bidding in Google Ads: tCPA vs tROAS vs Maximize Conversions',
    slug: 'smart-bidding-tcpa-vs-troas',
    excerpt: 'Step-by-step decision framework on when to switch from Maximize Conversions to Target CPA or Target ROAS.',
    tags: ['Google Ads', 'Analytics', 'PPC'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-01',
  },
  {
    _id: '7',
    title: 'Local Service Ads (LSA) vs Google Search Ads: The Ultimate Playbook',
    slug: 'local-service-ads-vs-google-search',
    excerpt: 'How roofing, plumbing, and HVAC contractors can dominate Google Local Service Ads and Google Search simultaneously.',
    tags: ['Google Ads', 'PPC', 'Local SEO'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-06-22',
  },

  // Meta Ads
  {
    _id: '8',
    title: 'Meta Ads Attribution Setup: Navigating iOS Restrictions',
    slug: 'meta-ads-attribution-setup-ios',
    excerpt: 'Learn how to set up Meta Conversions API (CAPI) and GA4 server-side tracking to recover up to 35% of lost attribution data.',
    tags: ['Meta Ads', 'Analytics', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-08-10',
  },
  {
    _id: '9',
    title: 'Building a Full-Funnel Retargeting Engine on Facebook & Instagram',
    slug: 'full-funnel-retargeting-engine',
    excerpt: 'Stop wasting budget on repetitive ad fatigue. Learn how to sequence ad creatives based on user intent and days since last visit.',
    tags: ['Meta Ads', 'CRO', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 5,
    createdAt: '2026-08-02',
  },
  {
    _id: '10',
    title: 'Meta Advantage+ Shopping Campaigns: The Complete Scaling Blueprint',
    slug: 'meta-advantage-plus-shopping-campaigns',
    excerpt: 'How to structure ASC budget caps, creative testing variations, and audience exclusions for maximum e-commerce profitability.',
    tags: ['Meta Ads', 'E-Commerce', 'CRO'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-07-24',
  },
  {
    _id: '11',
    title: 'Meta Ads Creative Fatigue: How to Build a Rapid Testing Matrix',
    slug: 'meta-ads-creative-fatigue-testing',
    excerpt: 'Prevent ad burnout by rotating 3-second hook variations, user-generated content (UGC), and offer angles every 14 days.',
    tags: ['Meta Ads', 'CRO', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-07-16',
  },
  {
    _id: '12',
    title: 'Scaling Facebook Lead Ads for High-Ticket B2B & Consultancies',
    slug: 'scaling-facebook-lead-ads-high-ticket',
    excerpt: 'How instant forms with conditional logic and custom qualifying questions filter out low-intent leads and boost closing rates.',
    tags: ['Meta Ads', 'Strategy', 'CRO'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-08',
  },
  {
    _id: '13',
    title: 'Instagram Reels Ads: Creative Guidelines for 3x Click-Through Rates',
    slug: 'instagram-reels-ads-creative-guide',
    excerpt: 'Audio hooks, visual pacing, and native caption typography tricks that make paid Reels feel like organic viral content.',
    tags: ['Meta Ads', 'CRO', 'Design'],
    author: 'Sirajul Islam Sohag',
    readTime: 5,
    createdAt: '2026-06-29',
  },
  {
    _id: '14',
    title: 'Meta Conversions API (CAPI) Gateway on AWS: Step-by-Step Setup',
    slug: 'meta-capi-gateway-aws-setup',
    excerpt: 'Deploy a self-hosted Meta CAPI Gateway instance on AWS to achieve 9.5+ Event Match Quality (EMQ) scores.',
    tags: ['Meta Ads', 'Analytics', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 10,
    createdAt: '2026-06-18',
  },

  // SEO
  {
    _id: '15',
    title: 'Technical SEO Checklist: 10 Critical Audits For E-Commerce',
    slug: 'technical-seo-checklist-ecommerce',
    excerpt: 'Step-by-step technical SEO guide covering crawl budgets, Schema markup, Core Web Vitals, and indexation fixes to double organic traffic.',
    tags: ['SEO', 'E-Commerce', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 10,
    createdAt: '2026-08-09',
  },
  {
    _id: '16',
    title: 'Programmatic SEO: How to Generate 100+ High-Ranking Landing Pages',
    slug: 'programmatic-seo-scaling-content',
    excerpt: 'Learn database-driven programmatic SEO templates to capture thousands of high-intent localized search queries automatically.',
    tags: ['SEO', 'Content', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 11,
    createdAt: '2026-08-03',
  },
  {
    _id: '17',
    title: 'Core Web Vitals & Page Speed: The Ultimate Ranking Factor Guide',
    slug: 'core-web-vitals-ranking-factor',
    excerpt: 'Optimize Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) to pass Google PageSpeed audits and rank higher.',
    tags: ['SEO', 'Analytics', 'Performance'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-07-22',
  },
  {
    _id: '18',
    title: 'Local SEO Mastery: Dominating the Google 3-Pack Map Rankings',
    slug: 'local-seo-google-maps-3pack',
    excerpt: 'Google Business Profile optimization, local citations, geo-tagged photo signals, and review velocity strategies for service businesses.',
    tags: ['SEO', 'Local SEO', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-07-14',
  },
  {
    _id: '19',
    title: 'SaaS SEO Strategy: Building High-Converting Topic Clusters',
    slug: 'saas-seo-topic-clusters',
    excerpt: 'How to structure pillar pages and supporting cluster articles to capture bottom-of-funnel comparison and alternative keywords.',
    tags: ['SEO', 'Content', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-07-04',
  },
  {
    _id: '20',
    title: 'Internal Linking Architecture: Distributing PageRank for Maximum Lift',
    slug: 'internal-linking-pagerank-architecture',
    excerpt: 'Stop relying on footer links. How contextual internal linking hierarchies pass equity to key product and category pages.',
    tags: ['SEO', 'Audits', 'Content'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-06-25',
  },
  {
    _id: '21',
    title: 'Schema Markup for Service Businesses: JSON-LD Rich Snippets Guide',
    slug: 'schema-markup-json-ld-service-business',
    excerpt: 'Implement LocalBusiness, Service, FAQPage, and Review Schema to earn rich star snippets directly on Google SERP.',
    tags: ['SEO', 'Audits', 'Analytics'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-06-15',
  },

  // Analytics
  {
    _id: '22',
    title: 'GA4 Custom Dashboards: Metrics That Matter For Executives',
    slug: 'ga4-custom-dashboards-executive-metrics',
    excerpt: 'Cut through GA4 bloat and create clean Looker Studio dashboards that highlight true Customer Acquisition Cost (CAC) and LTV.',
    tags: ['Analytics', 'GA4', 'Reporting'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-08-11',
  },
  {
    _id: '23',
    title: 'Server-Side Tagging with Stape & Google Tag Manager',
    slug: 'server-side-tagging-stape-gtm',
    excerpt: 'Set up custom cloud server tagging containers to bypass browser ad-blockers and increase tracking precision by 25%.',
    tags: ['Analytics', 'GTM', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-08-04',
  },
  {
    _id: '24',
    title: 'GA4 Enhanced E-commerce Tracking with Google Tag Manager',
    slug: 'ga4-enhanced-ecommerce-gtm',
    excerpt: 'Complete dataLayer implementation guide for view_item, add_to_cart, begin_checkout, and purchase events in GA4.',
    tags: ['Analytics', 'GA4', 'GTM'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-07-26',
  },
  {
    _id: '25',
    title: 'Cross-Domain Tracking & Cookie Consent in Google Tag Manager',
    slug: 'cross-domain-tracking-cookie-consent',
    excerpt: 'Set up Google Consent Mode v2 and seamless cross-domain session preservation across subdomains and checkout URLs.',
    tags: ['Analytics', 'GTM', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-07-17',
  },
  {
    _id: '26',
    title: 'Building Automated Marketing Reports in Looker Studio (Data Studio)',
    slug: 'automated-marketing-reports-looker-studio',
    excerpt: 'Connect Google Ads, Meta Ads, and GA4 into a single live executive dashboard that updates automatically every morning.',
    tags: ['Analytics', 'Reporting', 'GA4'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-06',
  },
  {
    _id: '27',
    title: 'UTM Tracking Convention: The Bulletproof Framework for Agencies',
    slug: 'utm-tracking-convention-framework',
    excerpt: 'Standardize campaign names, medium parameters, and content tags across all paid and organic channels to prevent dirty attribution.',
    tags: ['Analytics', 'Tracking', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-06-27',
  },
  {
    _id: '28',
    title: 'Offline Conversion Tracking (OCT) for Google Ads & CRM Integration',
    slug: 'offline-conversion-tracking-google-ads',
    excerpt: 'Import closed-won deals from HubSpot or Salesforce back into Google Ads via GCLID to optimize for actual revenue instead of form fills.',
    tags: ['Analytics', 'Google Ads', 'Tracking'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-06-16',
  },

  // CRO
  {
    _id: '29',
    title: '7 Landing Page CRO Hacks That Instantly Boost Conversion Rates',
    slug: 'landing-page-cro-hacks',
    excerpt: 'Simple design and copywriting tweaks that turn cold traffic into qualified leads without increasing ad spend.',
    tags: ['CRO', 'Copywriting', 'Design'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-08-07',
  },
  {
    _id: '30',
    title: 'Conversion Rate Optimization (CRO) Framework for Shopify Stores',
    slug: 'shopify-cro-framework-2026',
    excerpt: 'Actionable audit checklist to eliminate cart abandonment, simplify mobile checkouts, and boost Average Order Value (AOV).',
    tags: ['CRO', 'E-Commerce', 'Design'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-07-30',
  },
  {
    _id: '31',
    title: 'High-Converting Above-The-Fold Layout Anatomy for Service Pages',
    slug: 'high-converting-above-the-fold-layout',
    excerpt: 'Hero headline structures, trust badge placements, and floating CTA forms that maximize instant visitor engagement.',
    tags: ['CRO', 'Design', 'Copywriting'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-07-21',
  },
  {
    _id: '32',
    title: 'A/B Testing Methodology: How to Avoid False Positives in Experiments',
    slug: 'ab-testing-methodology-sample-size',
    excerpt: 'Calculate statistical significance, sample sizes, and minimum detectable effect (MDE) before declaring test winners.',
    tags: ['CRO', 'Analytics', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 9,
    createdAt: '2026-07-11',
  },
  {
    _id: '33',
    title: 'Multi-Step Lead Forms vs Single-Page Forms: When & Why They Work',
    slug: 'multi-step-lead-forms-cro',
    excerpt: 'Why breaking complex quote forms into bite-sized micro-steps increases completion rates by up to 86%.',
    tags: ['CRO', 'Design', 'Copywriting'],
    author: 'Sirajul Islam Sohag',
    readTime: 7,
    createdAt: '2026-06-30',
  },
  {
    _id: '34',
    title: 'Checkout Funnel Audit: 5 Friction Points Costing You Thousands',
    slug: 'checkout-funnel-friction-points',
    excerpt: 'Eliminate surprise shipping fees, redundant billing fields, and lack of trust badges to rescue abandoned carts.',
    tags: ['CRO', 'E-Commerce', 'Audits'],
    author: 'Sirajul Islam Sohag',
    readTime: 8,
    createdAt: '2026-06-20',
  },
  {
    _id: '35',
    title: 'Copywriting Psychology: 5 Cognitive Biases That Double Sign-Ups',
    slug: 'copywriting-psychology-cognitive-biases',
    excerpt: 'Harness social proof, loss aversion, anchoring, and urgency ethically in your landing page headlines.',
    tags: ['CRO', 'Copywriting', 'Strategy'],
    author: 'Sirajul Islam Sohag',
    readTime: 6,
    createdAt: '2026-06-10',
  },
];

const CATEGORIES = ['All', 'Google Ads', 'Meta Ads', 'SEO', 'Analytics', 'CRO'];
const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(SAMPLE_BLOGS);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch('/api/blogs?status=published&limit=100');
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

  // Filter blogs according to selected category
  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter((b) =>
        b.tags?.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  // Calculate pagination metrics (6 per page)
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <PageHeader
        badge="Insights & Performance"
        title="Marketing Articles & Growth Guides"
        subtitle="Data-driven strategies, PPC case studies, and actionable tutorials on Google Ads, Meta Ads, SEO, and Analytics."
        breadcrumbCurrent="Blog"
      />

      <section ref={gridSectionRef} className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Tabs */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                      : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Results Count Summary Top Bar */}
          <div className="flex items-center justify-between mb-8 text-xs md:text-sm text-[var(--text-muted)]">
            <p>
              Showing <span className="text-[var(--text)] font-semibold">{filteredBlogs.length > 0 ? startIndex + 1 : 0}</span> to{' '}
              <span className="text-[var(--text)] font-semibold">
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredBlogs.length)}
              </span>{' '}
              of <span className="text-[var(--text)] font-semibold">{filteredBlogs.length}</span> articles in{' '}
              <span className="text-primary font-medium">{activeCategory}</span>
            </p>
            <p className="font-number font-medium">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          {/* Blog Cards Grid (Strict 6 per page) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[420px]">
            {paginatedBlogs.length === 0 ? (
              <div className="col-span-full py-16 text-center border border-dashed border-[var(--border)] rounded-2xl bg-[var(--bg-card)]/40">
                <FileText className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
                <h3 className="text-lg font-heading font-semibold mb-1">No Articles Found</h3>
                <p className="text-sm text-[var(--text-secondary)]">There are no articles under the {activeCategory} category yet.</p>
              </div>
            ) : (
              paginatedBlogs.map((post, index) => (
                <ScrollReveal key={post._id} delay={index * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <Card variant="glass" className="h-full flex flex-col justify-between group hover-glow cursor-pointer overflow-hidden p-0">
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                        {post.thumbnail ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                          />
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
              ))
            )}
          </div>

          {/* Bottom Pagination Bar (Always displayed for all tabs) */}
          <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-[var(--text-muted)]">
              Showing page <span className="text-[var(--text)] font-semibold font-number">{currentPage}</span> of{' '}
              <span className="text-[var(--text)] font-semibold font-number">{totalPages}</span> ({filteredBlogs.length} total articles)
            </p>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <Button
                variant="glass"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                icon={<ChevronLeft className="w-4 h-4" />}
                className="rounded-full px-4 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Previous
              </Button>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-full text-xs font-semibold font-number transition-all cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                          : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/50 hover:text-[var(--text)]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <Button
                variant="glass"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                icon={<ChevronRight className="w-4 h-4" />}
                className="rounded-full px-4 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex-row-reverse"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

