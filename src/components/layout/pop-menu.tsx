'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { Magnetic } from '@/components/animations/magnetic';

interface PopMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopMenu({ isOpen, onClose }: PopMenuProps) {
  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[150] flex items-center justify-center overflow-hidden bg-[var(--bg)]/95 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Close Button in Circle (Top Right) */}
          <motion.div
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.1 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-20"
          >
            <Magnetic strength={0.3}>
              <button
                onClick={onClose}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-primary/10 hover:border-primary flex items-center justify-center transition-all duration-300 shadow-xl group cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 md:w-7 md:h-7 text-[var(--text)] group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
              </button>
            </Magnetic>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-10 md:gap-12 w-full h-full px-6 max-w-4xl mx-auto">
            {/* Links */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.06,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="menu-link group relative inline-flex items-center"
                  >
                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[var(--text)] transition-all duration-300 group-hover:text-gradient group-hover:scale-105 inline-block">
                      {item.label}
                    </span>
                    <span className="absolute -left-7 sm:-left-10 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-number font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-[var(--border)]/50"
            >
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-primary transition-colors capitalize px-3 py-1 rounded-lg hover:bg-white/5"
                >
                  {name}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

