'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { useCalendly } from '@/providers/calendly-provider';
import { Badge } from '@/components/ui/badge';

export interface PortfolioItemData {
  _id?: string;
  id?: string;
  title: string;
  slug?: string;
  category?: string;
  description: string;
  thumbnail?: string;
  metrics?: { label: string; value: string; change?: string }[];
  tags?: string[];
  client?: string;

  // Upwork-style modal fields
  role?: string;
  modalImages?: string[];
  descriptionParagraphs?: string[];
  bulletPoints?: string[];
  skills?: string[];
  projectUrl?: string;
}

interface PortfolioModalProps {
  item: PortfolioItemData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const { openCalendly } = useCalendly();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'ArrowLeft') handlePrevSlide();
    };

    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset slide index when modal item changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [item]);

  // Prepare images for slider (maximum 6, minimum 3 with fallback)
  const defaultImages = [
    item?.thumbnail || 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
  ];

  let sliderImages = item?.modalImages && item.modalImages.length > 0
    ? item.modalImages.filter(Boolean)
    : [];

  // Ensure minimum 3 images (repeat/supplement with fallbacks if needed) and cap at maximum 6
  if (sliderImages.length === 0) {
    sliderImages = [item?.thumbnail || defaultImages[0], defaultImages[1], defaultImages[2]];
  } else if (sliderImages.length < 3) {
    sliderImages = [...sliderImages, ...defaultImages].slice(0, 3);
  } else if (sliderImages.length > 6) {
    sliderImages = sliderImages.slice(0, 6);
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Prepare paragraphs
  const paragraphs = item?.descriptionParagraphs && item.descriptionParagraphs.length > 0
    ? item.descriptionParagraphs
    : [item?.description || ''];

  // Prepare bullet points
  const bulletPoints = item?.bulletPoints && item.bulletPoints.length > 0
    ? item.bulletPoints
    : [
        'Full-funnel Google Ads / Meta Ads campaign structure & audience segmentation',
        'Conversion tracking audit & server-side event tracking verification',
        'Daily bid optimization, negative keyword scrubbing & budget allocation',
        'Real-time executive performance dashboard & weekly growth reviews',
      ];

  // Prepare skills / deliverables
  const skills = item?.skills && item.skills.length > 0
    ? item.skills
    : item?.tags && item.tags.length > 0
    ? item.tags
    : ['Google Search Ads', 'Performance Max', 'Server-Side GTM', 'GA4 Analytics', 'Conversion Rate Optimization'];

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto overflow-x-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          onClick={onClose}
        />

        {/* Upwork-Inspired Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-50 w-full max-w-5xl max-h-[92vh] flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-[28px] shadow-2xl overflow-hidden my-auto text-[var(--text)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Sticky Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-xl z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                Case Study
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium capitalize">
                {item.category?.replace('-', ' ') || 'Marketing Strategy'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
            {/* 1. Header: Portfolio Title & Role */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[var(--text)] tracking-tight mb-3">
                {item.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                {item.role && (
                  <div className="flex items-center gap-1.5 font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                    <Briefcase className="w-4 h-4" />
                    <span>My Role: {item.role}</span>
                  </div>
                )}
                {item.client && (
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[var(--text-muted)]" />
                    <span>Client: {item.client}</span>
                  </div>
                )}
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Project</span>
                  </a>
                )}
              </div>
            </div>

            {/* 2. Upwork Image Slider (3 to 6 slides) */}
            <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-[var(--border)]">
              {/* Main Active Image */}
              <div className="relative aspect-[16/9] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={sliderImages[currentSlide]}
                      alt={`${item.title} - Slide ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Controls */}
                {sliderImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSlide}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={handleNextSlide}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Slide Counter Badge (Upwork Style: 1 / 4) */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono font-medium">
                      {currentSlide + 1} / {sliderImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {sliderImages.length > 1 && (
                <div className="flex items-center gap-2 p-3 bg-black/50 border-t border-white/10 overflow-x-auto">
                  {sliderImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        currentSlide === idx
                          ? 'border-primary scale-105 shadow-md shadow-primary/30'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="Thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Verified Metrics Row */}
            {item.metrics && item.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[var(--bg)]/60 border border-[var(--border)]"
                  >
                    <p className="text-2xl sm:text-3xl font-number font-extrabold text-gradient leading-tight">
                      {metric.value}
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-1 truncate">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Project Description (Paragraphs & Unordered List) */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text)] flex items-center gap-2 border-b border-[var(--border)] pb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Project Description & Strategy
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Unordered List / Bullet Points */}
              {bulletPoints.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-heading font-bold text-[var(--text)] uppercase tracking-wider">
                    Key Deliverables & Execution:
                  </h4>
                  <ul className="space-y-2.5">
                    {bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 5. Skills and Deliverables */}
            {skills.length > 0 && (
              <div className="space-y-3 border-t border-[var(--border)] pt-6">
                <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Skills & Deliverables
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="primary"
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl bg-primary/10 border border-primary/20 text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--bg-card)]/90 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[var(--text-muted)] text-center sm:text-left">
              Want similar results for your advertising campaigns?
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openCalendly({
                    title: `Strategy Consultation: ${item.title}`,
                    subtitle: `Let's discuss implementing these exact marketing frameworks for your business.`,
                  });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary via-amber-400 to-amber-500 text-slate-950 font-heading font-bold text-xs sm:text-sm shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Discuss Similar Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
  );
}

export default PortfolioModal;
