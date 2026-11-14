'use client';

import Link from 'next/link';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { useCalendly } from '@/providers/calendly-provider';

interface CtaButtonsProps {
  /** Short label used in the Calendly modal title, e.g. "Roofing" or "Google Ads Audit". */
  context: string;
  className?: string;
  size?: 'md' | 'lg';
  /** Override the primary button label. */
  primaryLabel?: string;
  /** Hide the secondary "Request a Google Ads Audit" button. */
  hideSecondary?: boolean;
}

/**
 * Primary CTA: Book a Free Strategy Call (opens Calendly).
 * Secondary CTA: Request a Google Ads Audit (goes to the contact page).
 */
export function CtaButtons({ context, className = '', size = 'md', primaryLabel = 'Book a Free Strategy Call', hideSecondary = false }: CtaButtonsProps) {
  const { openCalendly } = useCalendly();
  const pad = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-6 py-3 text-sm md:text-base';

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <button
        type="button"
        onClick={() =>
          openCalendly({
            title: `Strategy Call: ${context}`,
            subtitle: 'Pick a time and we will review your goals, account and next steps.',
          })
        }
        className={`inline-flex items-center gap-2 rounded-full bg-primary text-white font-heading font-semibold hover:opacity-90 transition-opacity ${pad}`}
      >
        {primaryLabel}
        <ArrowRight className="w-4 h-4" />
      </button>
      {!hideSecondary && (
      <Link
        href="/contact"
        className={`inline-flex items-center gap-2 rounded-full border border-[var(--border)] font-heading font-semibold hover:border-primary hover:text-primary transition-colors ${pad}`}
      >
        <ClipboardCheck className="w-4 h-4" />
        Request a Google Ads Audit
      </Link>
      )}
    </div>
  );
}
