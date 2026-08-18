'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
  subtitle?: string;
}

export function CalendlyModal({
  isOpen,
  onClose,
  url,
  title = 'Schedule Your Free Strategy Call',
  subtitle = 'Choose a time that works best for you to discuss your marketing roadmap.',
}: CalendlyModalProps) {
  const [loading, setLoading] = useState(true);

  // Default to Calendly URL with custom parameters for clean dark embedding if applicable
  const calendlyBase = url || SITE_CONFIG.calendlyUrl || 'https://calendly.com/siraj';
  const embedUrl = calendlyBase.includes('?')
    ? `${calendlyBase}&hide_gdpr_banner=1`
    : `${calendlyBase}?hide_gdpr_banner=1`;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setLoading(true);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[var(--border)] flex items-start justify-between gap-4 bg-[var(--bg)]/50 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-[var(--text)]">
                      {title}
                    </h3>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" /> Free Audit
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5">
                    {subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Calendly Embed */}
            <div className="relative flex-1 min-h-[520px] sm:min-h-[600px] w-full bg-[var(--bg)] overflow-hidden">
              {/* Spinner while loading */}
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--bg)] z-10">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-xs text-[var(--text-secondary)]">Loading calendar...</p>
                </div>
              )}

              {/* Calendly iFrame */}
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendly Booking"
                className="w-full h-full min-h-[520px] sm:min-h-[600px]"
                onLoad={() => setLoading(false)}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
