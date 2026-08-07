'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TiltCard } from '@/components/animations/tilt-card';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PORTFOLIO_CATEGORIES } from '@/lib/constants';

import { useEffect } from 'react';

const PORTFOLIO_ITEMS = [
  // Google Ads
  {
    id: '1',
    title: 'E-Commerce Revenue Scaling',
    category: 'google-ads',
    description: 'Scaled e-commerce brand from $10K to $150K monthly revenue through strategic Google Search, Shopping, and Performance Max campaigns.',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Revenue Increase', value: '1400%' }, { label: 'ROAS', value: '5.2x' }],
    tags: ['Google Ads', 'Shopping', 'PMax'],
  },
  {
    id: '2',
    title: 'High-Intent Legal Service PPC',
    category: 'google-ads',
    description: 'Built targeted search and call-only campaigns for a law firm, generating high-ticket consultations at half the cost per acquisition.',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Qualified Leads', value: '320+' }, { label: 'CPL Reduction', value: '48%' }],
    tags: ['Google Search', 'Legal PPC', 'Call Ads'],
  },

  // Facebook Ads
  {
    id: '3',
    title: 'B2B Lead Generation Machine',
    category: 'facebook-ads',
    description: 'Built a full-funnel Meta Ads system generating 500+ qualified leads monthly for a SaaS company with custom lead forms and retargeting.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Leads / Month', value: '500+' }, { label: 'CPL Reduction', value: '62%' }],
    tags: ['Meta Ads', 'Lead Gen', 'Retargeting'],
  },
  {
    id: '4',
    title: 'DTC Skincare Launch Campaign',
    category: 'facebook-ads',
    description: 'Launched a DTC beauty brand from zero to $80K first-month revenue through UGC video ads and high-converting lookalike audiences.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'First Month Sales', value: '$80K' }, { label: 'ROAS', value: '4.8x' }],
    tags: ['Meta Ads', 'Creative Scaling', 'Instagram'],
  },
  {
    id: '5',
    title: 'Global Apparel Brand Scaling',
    category: 'facebook-ads',
    description: 'Scaled international e-commerce clothing brand to $210K monthly revenue using dynamic catalog ads and broad targeting strategy.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Monthly Sales', value: '$210K' }, { label: 'Blended ROAS', value: '4.1x' }],
    tags: ['Meta Ads', 'Catalog Sales', 'Lookalike'],
  },

  // SEO
  {
    id: '6',
    title: 'Organic Traffic Explosion',
    category: 'seo',
    description: 'Achieved 340% organic traffic growth and top 3 rankings for 50+ competitive keywords through technical audits and content hubs.',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Traffic Growth', value: '340%' }, { label: 'Keywords Top 3', value: '50+' }],
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
  },
  {
    id: '7',
    title: 'Local Service Map Pack Domination',
    category: 'seo',
    description: 'Helped a multi-location home service business rank #1 in Google Maps and organic search across 5 major metro areas.',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Map Pack Rank', value: '#1' }, { label: 'Call Volume', value: '280%' }],
    tags: ['Local SEO', 'Google Maps', 'Reviews'],
  },
  {
    id: '8',
    title: 'Enterprise SaaS Organic Growth',
    category: 'seo',
    description: 'Grew organic search pipeline from $200K to $1.2M ARR by building topic clusters and solving technical crawl budget bottlenecks.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Organic ARR', value: '$1.2M' }, { label: 'Domain Rank', value: '68' }],
    tags: ['Programmatic SEO', 'SaaS', 'Content Marketing'],
  },

  // Analytics
  {
    id: '9',
    title: 'Full-Stack Analytics & GA4 Setup',
    category: 'analytics',
    description: 'Implemented end-to-end analytics infrastructure with GA4, Google Tag Manager, custom event tracking, and Looker Studio executive dashboards.',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Data Accuracy', value: '99.8%' }, { label: 'Events Tracked', value: '1.5M+' }],
    tags: ['GA4', 'GTM', 'Looker Studio'],
  },
  {
    id: '10',
    title: 'Server-Side CAPI & Attribution System',
    category: 'analytics',
    description: 'Deployed server-side GTM with Meta Conversion API and Stape to recover 35% lost conversion data caused by iOS 14+ ad blockers.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Data Recovery', value: '+35%' }, { label: 'Match Quality', value: '9.2/10' }],
    tags: ['Server-Side GTM', 'Meta CAPI', 'Attribution'],
  },

  // Branding
  {
    id: '11',
    title: 'FinTech Brand Identity & Strategy',
    category: 'branding',
    description: 'Designed full brand identity, logo system, color palette, and visual design guidelines for an emerging FinTech platform scaling globally.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Brand Awareness', value: '+300%' }, { label: 'Investor Funding', value: '$4.5M' }],
    tags: ['Brand Identity', 'Logo System', 'Visual Guidelines'],
  },
  {
    id: '12',
    title: 'Luxury Lifestyle E-Commerce Rebrand',
    category: 'branding',
    description: 'Executed complete brand refresh including typography, packaging guidelines, and UI design, boosting customer trust and average order value.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    metrics: [{ label: 'Customer Trust', value: '98%' }, { label: 'Avg Order Value', value: '+75%' }],
    tags: ['Rebranding', 'Typography', 'Brand Strategy'],
  },
];

interface PortfolioShowcaseProps {
  hideHeader?: boolean;
}

export function PortfolioShowcase({ hideHeader = false }: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [items, setItems] = useState<any[]>(PORTFOLIO_ITEMS);

  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const res = await fetch('/api/portfolio?limit=20');
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped = data.data.map((item: any) => ({
            id: item._id,
            title: item.title,
            category: item.category || 'google-ads',
            description: item.description,
            thumbnail: item.image || item.thumbnail || PORTFOLIO_ITEMS[0].thumbnail,
            metrics: item.metrics && Array.isArray(item.metrics) && item.metrics.length > 0
              ? item.metrics
              : (item.results ? [{ label: 'Results', value: item.results }] : [{ label: 'Status', value: 'Completed' }]),
            tags: item.technologies || item.tags || ['Google Ads'],
          }));
          setItems(mapped);
        }
      } catch (err) {
        console.warn('Fallback to static portfolio items:', err);
      }
    }
    loadPortfolioData();
  }, []);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              My Work
            </TextReveal>
            <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
              Featured Case Studies
            </TextReveal>
            <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
              Real results from real campaigns. Every project backed by data.
            </TextReveal>
          </div>
        )}

        {/* Category Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard maxTilt={5}>
                  <Card variant="spotlight" className="h-full group cursor-pointer flex flex-col p-6">
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 shrink-0">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Eye className="w-10 h-10 text-[var(--text-muted)] group-hover:scale-110 transition-transform" />
                        </div>
                      )}
                    </div>

                    {/* Category Tag */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag: string) => (
                        <Badge key={tag} variant="primary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--text-secondary)] mb-5 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="pt-4 border-t border-[var(--border)] mt-auto">
                        <div className="grid grid-cols-2 gap-3">
                          {item.metrics.map((metric: any, idx: number) => (
                            <div
                              key={metric.label || idx}
                              className="p-3  flex flex-col justify-center"
                            >
                              <p className="font-number text-xl font-extrabold text-gradient leading-tight">
                                {metric.value}
                              </p>
                              <p className="text-xs font-medium text-[var(--text-secondary)] mt-0.5 truncate">
                                {metric.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
