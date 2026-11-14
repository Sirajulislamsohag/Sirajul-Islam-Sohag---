'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import { PageHeader } from '@/components/sections/page-header';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowUpRight, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/sections/cta-section';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt: string;
  thumbnail?: string;
  tags: string[];
  author: string;
  readTime: number;
  createdAt: string;
}

// Old sample posts removed. New posts come from the dashboard (database).
const SAMPLE_BLOGS: BlogPost[] = [];

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

  // Dynamically extract all unique categories present in the blog posts
  const dynamicCategories = useMemo(() => {
    const categoryMap = new Map<string, string>();

    const formatCategoryLabel = (raw: string) => {
      if (!raw) return '';
      const trimmed = raw.trim();
      if (trimmed.includes('-')) {
        return trimmed
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(' ');
      }
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    };

    blogs.forEach((b) => {
      if (b.category && b.category.toLowerCase() !== 'all') {
        const key = b.category.toLowerCase().trim();
        if (!categoryMap.has(key)) {
          categoryMap.set(key, formatCategoryLabel(b.category));
        }
      }
      if (b.tags && Array.isArray(b.tags)) {
        b.tags.forEach((tag) => {
          if (tag && tag.toLowerCase() !== 'all') {
            const key = tag.toLowerCase().trim();
            if (!categoryMap.has(key)) {
              categoryMap.set(key, tag.trim());
            }
          }
        });
      }
    });

    return [
      { value: 'All', label: 'All' },
      ...Array.from(categoryMap.entries()).map(([_, label]) => ({
        value: label,
        label,
      })),
    ];
  }, [blogs]);

  // Filter blogs according to selected category
  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter((b) => {
        const catMatch = b.category && (
          b.category.toLowerCase().trim() === activeCategory.toLowerCase().trim() ||
          b.category.replace(/-/g, ' ').toLowerCase().trim() === activeCategory.toLowerCase().trim()
        );
        const tagMatch = b.tags?.some((t) =>
          t.toLowerCase().trim() === activeCategory.toLowerCase().trim() ||
          t.toLowerCase().includes(activeCategory.toLowerCase().trim())
        );
        return catMatch || tagMatch;
      });

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
        title="Google Ads Blog: PPC Tips & Strategy"
        subtitle="A Google Ads blog with practical Google Ads tips, PPC blog guides and Google Ads strategy blog posts on Search, PMax, tracking and lead generation."
        breadcrumbCurrent="Blog"
      />

      <section ref={gridSectionRef} className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Dynamic Category Filter Tabs */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {dynamicCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    activeCategory.toLowerCase() === cat.value.toLowerCase()
                      ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                      : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/40'
                  }`}
                >
                  {cat.label}
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
                <h3 className="text-lg font-heading font-semibold mb-1">New Articles Coming Soon</h3>
                <p className="text-sm text-[var(--text-secondary)]">Practical Google Ads and PPC guides will be published here soon. Check back shortly.</p>
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

            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Previous Button */}
              <Button
                variant="glass"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                icon={<ChevronLeft className="w-4 h-4" />}
                className="rounded-full px-3 sm:px-4 text-xs sm:text-sm disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="hidden xs:inline">Previous</span>
              </Button>

              {/* Numbered Page Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full text-xs font-semibold font-number transition-all cursor-pointer flex items-center justify-center ${
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
                className="rounded-full px-3 sm:px-4 text-xs sm:text-sm disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex-row-reverse"
              >
                <span className="hidden xs:inline">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      <Contact />
      <Footer />
    </>
  );
}

