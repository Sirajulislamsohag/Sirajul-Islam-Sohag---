'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { TiltCard } from '@/components/animations/tilt-card';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PortfolioModal, PortfolioItemData } from '@/components/ui/portfolio-modal';

const ENRICHED_PORTFOLIO_ITEMS: PortfolioItemData[] = [
  // Google Ads
  {
    id: '1',
    title: 'E-Commerce Revenue Scaling',
    category: 'google-ads',
    role: 'Lead Google Ads Strategist & Performance Marketer',
    client: 'EcoLiving Supply Co.',
    projectUrl: 'https://google.com',
    description: 'Scaled an established e-commerce brand from $10K to $150K monthly revenue through strategic Google Search, Shopping, and Performance Max campaigns with granular feed optimization.',
    descriptionParagraphs: [
      'The client had plateaued at ~$10K/month due to untargeted broad match keywords, poorly structured Shopping feeds, and inaccurate revenue attribution in Google Analytics.',
      'We completely restructured the Google Ads account into a tiered Performance Max and High-Intent Search hierarchy. We segmented products by profit margin and custom label ROAS targets.',
      'By implementing Server-Side Google Tag Manager and Enhanced Conversions, we achieved 99.4% signal accuracy, allowing Google Smart Bidding algorithms to aggressively find high-LTV customers.',
    ],
    bulletPoints: [
      'Standard Shopping & PMax margin-based custom label tiering',
      'Merchant Center feed optimization with high-intent search query titles',
      'Negative keyword list containing 1,800+ low-intent and competitor terms',
      'Automated tROAS bidding rules calibrated to real inventory stock levels',
    ],
    skills: [
      'Google Performance Max',
      'Google Shopping Optimization',
      'Merchant Center Feed Tuning',
      'Server-Side GTM',
      'Enhanced Conversions',
      'tROAS Bidding Strategy',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Revenue Increase', value: '1400%' },
      { label: 'ROAS', value: '5.2x' },
    ],
    tags: ['Google Ads', 'Shopping', 'PMax'],
  },
  {
    id: '2',
    title: 'High-Intent Legal Service PPC',
    category: 'google-ads',
    role: 'Senior PPC Consultant & Funnel Architect',
    client: 'Apex Legal Partners LLP',
    description: 'Built targeted search and call-only campaigns for a law firm, generating high-ticket consultations at half the cost per acquisition.',
    descriptionParagraphs: [
      'Legal keywords in competitive metro areas can cost upwards of $80-$150 per click. The firm was burning significant budget on research queries without retaining qualified retainer clients.',
      'We designed hyper-focused single-intent ad groups combined with dedicated mobile-optimized landing pages and instant call tracking integration via CallRail.',
      'The firm saw an immediate 48% reduction in cost per signed case while tripling monthly qualified intake appointments.',
    ],
    bulletPoints: [
      'CallRail dynamic number insertion & offline GTM conversion sync',
      'Strict exact & phrase match keyword bidding on high-intent terms',
      'Localized geo-fencing radius targeting around target judicial districts',
      'Responsive Search Ads with dynamic location insertion and custom assets',
    ],
    skills: [
      'Google Search Ads',
      'CallRail Tracking',
      'Geo-Targeted PPC',
      'Landing Page CRO',
      'Legal Intake Funnels',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Qualified Leads', value: '320+' },
      { label: 'CPL Reduction', value: '48%' },
    ],
    tags: ['Google Search', 'Legal PPC', 'Call Ads'],
  },

  // Facebook Ads
  {
    id: '3',
    title: 'B2B Lead Generation Machine',
    category: 'facebook-ads',
    role: 'Paid Social Strategist & Creative Lead',
    client: 'CloudStack Enterprise',
    description: 'Built a full-funnel Meta Ads system generating 500+ qualified leads monthly for a SaaS company with custom lead forms and retargeting.',
    descriptionParagraphs: [
      'Enterprise SaaS lead generation often struggles on social platforms with low form completion rates and unqualified submissions.',
      'We launched native Meta Instant Forms with conditional logic questions to pre-qualify decision makers, paired with custom video testimonials.',
      'Leads were automatically piped via Webhooks into HubSpot with immediate SDR alert triggers, shortening response time from 4 hours to 3 minutes.',
    ],
    bulletPoints: [
      'Meta Instant Forms with custom qualification logic',
      'HubSpot CRM integration via Server Webhooks',
      'Lookalike audience creation from top 10% LTV customers',
      'Multi-stage video retargeting sequence based on video watch percentage',
    ],
    skills: ['Meta Ads Manager', 'B2B Lead Gen', 'HubSpot Integration', 'Video Retargeting', 'Meta CAPI'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Leads / Month', value: '500+' },
      { label: 'CPL Reduction', value: '62%' },
    ],
    tags: ['Meta Ads', 'Lead Gen', 'Retargeting'],
  },
  {
    id: '4',
    title: 'DTC Skincare Launch Campaign',
    category: 'facebook-ads',
    role: 'Creative & Performance Marketing Director',
    client: 'Lumière Organics',
    description: 'Launched a DTC beauty brand from zero to $80K first-month revenue through UGC video ads and high-converting lookalike audiences.',
    descriptionParagraphs: [
      'Launching a new DTC skincare line required rapid product validation, high emotional resonance, and an aggressive creative testing engine.',
      'We scripted and directed 24 UGC variations with different hook angles (problem/solution, unboxing, clinical before-and-after).',
      'Top-performing creatives were scaled with Advantage+ Shopping Campaigns (ASC), achieving a 4.8x blended ROAS during the launch month.',
    ],
    bulletPoints: [
      'Rapid UGC creative iteration testing 20+ hooks weekly',
      'Advantage+ Shopping Campaigns (ASC) with custom budget caps',
      'Klaviyo post-purchase SMS & email flow revenue multiplication',
      'Shopify custom landing pages with high conversion rate elements',
    ],
    skills: ['Advantage+ Campaigns', 'UGC Creative Testing', 'Shopify CRO', 'Klaviyo Flows', 'Meta Pixel'],
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'First Month Sales', value: '$80K' },
      { label: 'ROAS', value: '4.8x' },
    ],
    tags: ['Meta Ads', 'Creative Scaling', 'Instagram'],
  },
  {
    id: '5',
    title: 'Global Apparel Brand Scaling',
    category: 'facebook-ads',
    role: 'Growth Marketing Consultant',
    client: 'Nordic Threads',
    description: 'Scaled international e-commerce clothing brand to $210K monthly revenue using dynamic catalog ads and broad targeting strategy.',
    descriptionParagraphs: [
      'Nordic Threads needed to expand past domestic markets into US and European territories without inflating customer acquisition costs.',
      'We leveraged Meta Dynamic Product Ads (DPA) synced directly to multi-currency Shopify feeds, running localized ad copies in English, German, and French.',
      'Broad targeting powered by Andromeda creative hooks drove a 4.1x blended return on ad spend across 12 countries.',
    ],
    bulletPoints: [
      'Dynamic Product Ads (DPA) with localized multi-currency pricing',
      'Broad demographic targeting letting Meta algorithm optimize delivery',
      'Collection ad formats highlighting seasonal lookbooks',
      'Continuous creative refresh preventing ad fatigue',
    ],
    skills: ['Dynamic Catalog Ads', 'International Scaling', 'Multi-Currency PPC', 'Meta CAPI', 'Shopify Plus'],
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Monthly Sales', value: '$210K' },
      { label: 'Blended ROAS', value: '4.1x' },
    ],
    tags: ['Meta Ads', 'Catalog Sales', 'Lookalike'],
  },

  // SEO
  {
    id: '6',
    title: 'Organic Traffic Explosion',
    category: 'seo',
    role: 'Head of SEO Strategy & Technical Architect',
    client: 'TechTrend Magazine',
    description: 'Achieved 340% organic traffic growth and top 3 rankings for 50+ competitive keywords through technical audits and content hubs.',
    descriptionParagraphs: [
      'The publication had suffered from severe Core Web Vitals issues, indexation bloat from legacy category pages, and weak internal link architecture.',
      'We revamped technical site health to 98/100 on PageSpeed, pruned 12,000 zombie URLs, and created topical cluster hubs targeting high-intent affiliate keywords.',
      'Organic search traffic expanded by 340% over 6 months, generating significant recurring affiliate commissions.',
    ],
    bulletPoints: [
      'Complete Core Web Vitals optimization and JS hydration cleanup',
      'Topical authority hub architecture with automated internal linking',
      'Editorial style guide and content brief automation',
      'High-authority editorial backlink acquisition campaign',
    ],
    skills: ['Technical SEO', 'Core Web Vitals', 'Topic Clusters', 'Schema Markup', 'Link Building'],
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Traffic Growth', value: '340%' },
      { label: 'Keywords Top 3', value: '50+' },
    ],
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
  },
  {
    id: '7',
    title: 'Local Service Map Pack Domination',
    category: 'seo',
    role: 'Local SEO Specialist',
    client: 'ProGuard HVAC & Plumbing',
    description: 'Helped a multi-location home service business rank #1 in Google Maps and organic search across 5 major metro areas.',
    descriptionParagraphs: [
      'A multi-location home service company was losing thousands in emergency callouts to competitors ranking in the local Google 3-Pack.',
      'We optimized Google Business Profiles across all 5 locations, cleaned up NAP citations, and implemented localized service schema markup.',
      'Inbound phone call volume increased by 280%, delivering predictable seasonal work year-round.',
    ],
    bulletPoints: [
      'Google Business Profile (GBP) categories and geo-tagged updates',
      'Consistent NAP citation cleanup across 80+ directories',
      'Review generation automated SMS workflow',
      'Local city landing pages with localized FAQs and project photos',
    ],
    skills: ['Local SEO', 'Google Maps 3-Pack', 'GBP Optimization', 'Local Schema', 'Citation Building'],
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Map Pack Rank', value: '#1' },
      { label: 'Call Volume', value: '280%' },
    ],
    tags: ['Local SEO', 'Google Maps', 'Reviews'],
  },
  {
    id: '8',
    title: 'Enterprise SaaS Organic Growth',
    category: 'seo',
    role: 'Enterprise SEO Consultant',
    client: 'DataFlow Systems',
    description: 'Grew organic search pipeline from $200K to $1.2M ARR by building topic clusters and solving technical crawl budget bottlenecks.',
    descriptionParagraphs: [
      'DataFlow Systems had great product-market fit but struggled to capture high-value enterprise buyers searching for workflow migration solutions.',
      'We developed a programmatic SEO framework generating 200+ comparative vs pages and integration guides with custom interactive diagrams.',
      'Organic ARR grew from $200K to $1.2M with enterprise deal sizes averaging $45K+.',
    ],
    bulletPoints: [
      'Programmatic landing page template system for integration keywords',
      'Bottom-of-funnel competitor comparison matrix architecture',
      'Technical crawl budget optimization and headless CMS rendering fix',
      'High-authority guest contributor pipeline in major dev publications',
    ],
    skills: ['Enterprise SEO', 'Programmatic SEO', 'Competitor Analysis', 'Content Clusters', 'SaaS Funnels'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Organic ARR', value: '$1.2M' },
      { label: 'Domain Rank', value: '68' },
    ],
    tags: ['Programmatic SEO', 'SaaS', 'Content Marketing'],
  },

  // Analytics
  {
    id: '9',
    title: 'Full-Stack Analytics & GA4 Setup',
    category: 'analytics',
    role: 'Analytics Engineer & Tracking Architect',
    client: 'OmniVenture Commerce',
    description: 'Implemented end-to-end analytics infrastructure with GA4, Google Tag Manager, custom event tracking, and Looker Studio executive dashboards.',
    descriptionParagraphs: [
      'After the forced sunset of Universal Analytics, the client had broken attribution and no clear visibility into cross-channel ROAS.',
      'We engineered a comprehensive GA4 & GTM infrastructure tracking every micro-conversion: product view, scroll depth, video plays, and checkout abandonment.',
      'Built custom Looker Studio dashboards giving the leadership team live visibility into customer acquisition cost and blended return on ad spend.',
    ],
    bulletPoints: [
      'Google Tag Manager custom datalayer triggers and user properties',
      'GA4 custom dimensions and purchase journey funnel exploration',
      'Looker Studio real-time blended executive marketing dashboard',
      'Automated discrepancy alerts for transaction tracking drops',
    ],
    skills: ['GA4 Implementation', 'Google Tag Manager', 'Looker Studio', 'Datalayer Architecture', 'Attribution Modeling'],
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Events Tracked', value: '1.5M+' },
    ],
    tags: ['GA4', 'GTM', 'Looker Studio'],
  },
  {
    id: '10',
    title: 'Server-Side CAPI & Attribution System',
    category: 'analytics',
    role: 'Senior Tracking & Data Engineer',
    client: 'Velocity Brands',
    description: 'Deployed server-side GTM with Meta Conversion API and Stape to recover 35% lost conversion data caused by iOS 14+ ad blockers.',
    descriptionParagraphs: [
      'Browser privacy updates and ad blockers were causing 35%+ of Meta purchase events to be lost, severely blinding algorithmic bidding.',
      'We set up a custom server container on Stape.io with first-party custom domain routing (`sst.client.com`) and deployed Meta Conversions API (CAPI).',
      'Event Match Quality jumped to 9.2/10, immediately reviving campaign optimization and lowering CPA by 22%.',
    ],
    bulletPoints: [
      'Server-Side GTM on Stape with first-party cookie extension',
      'Meta Conversions API (CAPI) with full event deduplication',
      'Google Ads Enhanced Conversions for Web & Leads',
      'Stripe webhook integration for recurring subscription tracking',
    ],
    skills: ['Server-Side GTM', 'Meta CAPI', 'Stape.io', 'Event Deduplication', 'First-Party Cookies'],
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Data Recovery', value: '+35%' },
      { label: 'Match Quality', value: '9.2/10' },
    ],
    tags: ['Server-Side GTM', 'Meta CAPI', 'Attribution'],
  },

  // Branding
  {
    id: '11',
    title: 'FinTech Brand Identity & Strategy',
    category: 'branding',
    role: 'Brand Strategist & Creative Director',
    client: 'AuraPay Global',
    description: 'Designed full brand identity, logo system, color palette, and visual design guidelines for an emerging FinTech platform scaling globally.',
    descriptionParagraphs: [
      'AuraPay had built revolutionary cross-border payments tech but had a generic template visual presence that struggled to win institutional trust.',
      'We crafted a modern, authoritative brand identity system, including logo geometry, design tokens, presentation decks, and web visual guidelines.',
      'The new brand helped the team close a $4.5M Series A funding round and onboard 40+ enterprise banking partners.',
    ],
    bulletPoints: [
      'Complete logo geometry, responsive icon sets & mark system',
      'Dark-mode optimized color tokens and typography hierarchy',
      'Investor pitch deck and sales enablement collateral',
      'Design system documentation and asset repository',
    ],
    skills: ['Brand Identity', 'Logo Design', 'Design Systems', 'FinTech Positioning', 'Typography'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Brand Awareness', value: '+300%' },
      { label: 'Investor Funding', value: '$4.5M' },
    ],
    tags: ['Brand Identity', 'Logo System', 'Visual Guidelines'],
  },
  {
    id: '12',
    title: 'Luxury Lifestyle E-Commerce Rebrand',
    category: 'branding',
    role: 'Creative Director & Brand Consultant',
    client: 'Maison Élite',
    description: 'Executed complete brand refresh including typography, packaging guidelines, and UI design, boosting customer trust and average order value.',
    descriptionParagraphs: [
      'Maison Élite was selling premium handcrafted home goods but suffered from low conversion rates due to a dated, generic storefront.',
      'We redesigned the entire customer touchpoint: from unboxing packaging guidelines to bespoke serif typography, luxury lifestyle art direction, and Shopify UX.',
      'Average order value surged by 75%, with customer trust metrics reaching 98% in post-purchase surveys.',
    ],
    bulletPoints: [
      'High-end editorial packaging & stationery system design',
      'Bespoke typographic pairing and palette specifications',
      'Shopify theme UI/UX redesign with high-converting mobile layout',
      'Brand stylebook and art direction photography guidelines',
    ],
    skills: ['Luxury Branding', 'E-Commerce UX', 'Packaging Design', 'Art Direction', 'Typography'],
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    modalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
    ],
    metrics: [
      { label: 'Customer Trust', value: '98%' },
      { label: 'Avg Order Value', value: '+75%' },
    ],
    tags: ['Rebranding', 'Typography', 'Brand Strategy'],
  },
];

interface PortfolioShowcaseProps {
  hideHeader?: boolean;
  enablePagination?: boolean;
  itemsPerPage?: number;
}

export function PortfolioShowcase({
  hideHeader = false,
  enablePagination = false,
  itemsPerPage = 6,
}: PortfolioShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<PortfolioItemData[]>(ENRICHED_PORTFOLIO_ITEMS);
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const gridSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const res = await fetch('/api/portfolio?limit=50');
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped: PortfolioItemData[] = data.data.map((item: any) => ({
            _id: item._id,
            id: item._id,
            title: item.title,
            slug: item.slug,
            category: item.category || 'google-ads',
            role: item.role || 'Digital Marketing Specialist',
            client: item.client || '',
            projectUrl: item.projectUrl || '',
            description: item.description,
            descriptionParagraphs: item.descriptionParagraphs && item.descriptionParagraphs.length > 0
              ? item.descriptionParagraphs
              : [item.description],
            bulletPoints: item.bulletPoints && item.bulletPoints.length > 0
              ? item.bulletPoints
              : [],
            skills: item.skills && item.skills.length > 0
              ? item.skills
              : (item.tags || []),
            thumbnail: item.thumbnail || item.images?.[0] || ENRICHED_PORTFOLIO_ITEMS[0].thumbnail,
            modalImages: item.modalImages && item.modalImages.length > 0
              ? item.modalImages
              : (item.images && item.images.length > 0 ? item.images : [item.thumbnail || ENRICHED_PORTFOLIO_ITEMS[0].thumbnail]),
            metrics: item.metrics && Array.isArray(item.metrics) && item.metrics.length > 0
              ? item.metrics
              : (item.results ? [{ label: 'Results', value: item.results }] : [{ label: 'Status', value: 'Completed' }]),
            tags: item.tags || ['Google Ads'],
          }));
          setItems(mapped);
        }
      } catch (err) {
        console.warn('Using default enriched portfolio items:', err);
      }
    }
    loadPortfolioData();
  }, []);

  // Dynamically extract all unique categories present in the portfolio items
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

    items.forEach((item) => {
      if (item.category && item.category !== 'all') {
        const key = item.category.toLowerCase().trim();
        if (!categoryMap.has(key)) {
          categoryMap.set(key, formatCategoryLabel(item.category));
        }
      }
    });

    return [
      { value: 'all', label: 'All' },
      ...Array.from(categoryMap.entries()).map(([value, label]) => ({
        value,
        label,
      })),
    ];
  }, [items]);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category?.toLowerCase().trim() === activeCategory.toLowerCase().trim());

  // Calculate pagination metrics
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = enablePagination
    ? filteredItems.slice(startIndex, startIndex + itemsPerPage)
    : filteredItems.slice(0, 6);

  const handleCategoryChange = (catValue: string) => {
    setActiveCategory(catValue);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCardClick = (item: PortfolioItemData) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section ref={gridSectionRef} id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
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
              Real results from real campaigns. Click any case study for deep-dive strategy & deliverables.
            </TextReveal>
          </div>
        )}

        {/* Dynamic Category Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {dynamicCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Results Count Summary Top Bar (Only when pagination enabled) */}
        {enablePagination && (
          <div className="flex items-center justify-between mb-8 text-xs md:text-sm text-[var(--text-muted)]">
            <p>
              Showing <span className="text-[var(--text)] font-semibold">{filteredItems.length > 0 ? startIndex + 1 : 0}</span> to{' '}
              <span className="text-[var(--text)] font-semibold">
                {Math.min(startIndex + itemsPerPage, filteredItems.length)}
              </span>{' '}
              of <span className="text-[var(--text)] font-semibold">{filteredItems.length}</span> case studies
            </p>
            <p className="font-number font-medium">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[380px]">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id || item._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleCardClick(item)}
              >
                <TiltCard maxTilt={5}>
                  <Card variant="spotlight" className="h-full group cursor-pointer flex flex-col p-6 hover:border-primary/40 transition-all">
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

                      {/* Hover Overlay Pill */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-slate-950 text-xs font-heading font-bold shadow-xl">
                          <Eye className="w-3.5 h-3.5" /> View Case Study
                        </span>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags?.map((tag: string) => (
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
                              className="p-3 flex flex-col justify-center"
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

        {/* Bottom Pagination Bar (Only when enablePagination is true) */}
        {enablePagination && totalPages > 1 && (
          <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-[var(--text-muted)]">
              Showing page <span className="text-[var(--text)] font-semibold font-number">{currentPage}</span> of{' '}
              <span className="text-[var(--text)] font-semibold font-number">{totalPages}</span> ({filteredItems.length} total case studies)
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
        )}

        {/* Homepage "See More" CTA Button (when enablePagination is false) */}
        {!enablePagination && (
          <ScrollReveal delay={0.1}>
            <div className="mt-14 text-center">
              <Link href="/portfolio">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  className="rounded-full px-8 py-3.5 shadow-xl shadow-primary/25 hover:shadow-primary/40 font-heading font-bold cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  See More Case Studies
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Upwork-Inspired Portfolio Detail Modal */}
      <PortfolioModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

export default PortfolioShowcase;
