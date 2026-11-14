import Link from 'next/link';
import { ArrowRight, ChevronRight, Home, CheckCircle2 } from 'lucide-react';
import type { Faq, TitledText } from '@/content/types';
import { SERVICE_PAGES, serviceHref } from '@/content/services';
import { INDUSTRY_PAGES, industryHref } from '@/content/industries';

/* ---------- Breadcrumbs ---------- */

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[var(--text-muted)] mb-6">
      <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text)] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Section wrapper ---------- */

export function Section({
  children,
  tone = 'plain',
  className = '',
  id,
}: {
  children: React.ReactNode;
  tone?: 'plain' | 'card';
  className?: string;
  id?: string;
}) {
  const bg = tone === 'card' ? 'bg-[var(--bg-card)]/40 border-y border-[var(--border)]' : '';
  return (
    <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, center }: { title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-10 md:mb-12`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ---------- Card grid for titled text ---------- */

export function TitledGrid({
  items,
  columns = 3,
  icon,
  numbered,
}: {
  items: TitledText[];
  columns?: 2 | 3;
  icon?: React.ReactNode;
  numbered?: boolean;
}) {
  const cols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';
  return (
    <div className={`grid ${cols} gap-5 md:gap-6`}>
      {items.map((item, index) => (
        <div key={item.title} className="h-full rounded-2xl p-6 md:p-7 bg-[var(--bg-card)] border border-[var(--border)]">
          {numbered ? (
            <div className="w-9 h-9 rounded-full bg-primary/15 text-primary font-heading font-bold flex items-center justify-center mb-4 text-sm">
              {index + 1}
            </div>
          ) : (
            icon && <div className="mb-4">{icon}</div>
          )}
          <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
          <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- FAQ with details/summary ---------- */

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3 md:space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] p-5 md:p-6 open:border-primary/50"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-base md:text-lg">
            <h3 className="text-base md:text-lg font-heading font-semibold">{faq.question}</h3>
            <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90 text-primary" />
          </summary>
          <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Related links ---------- */

export function RelatedServices({ slugs, heading = 'Related services' }: { slugs: string[]; heading?: string }) {
  const pages = slugs.map((slug) => SERVICE_PAGES.find((p) => p.slug === slug)).filter(Boolean);
  if (!pages.length) return null;
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pages.map((page) => (
          <Link
            key={page!.slug}
            href={serviceHref(page!.slug)}
            className="group flex items-center justify-between gap-3 rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
          >
            <span className="font-heading font-semibold group-hover:text-primary transition-colors">{page!.name}</span>
            <ArrowRight className="w-4 h-4 text-primary shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RelatedIndustries({ slugs, heading = 'Other industries I work with' }: { slugs: string[]; heading?: string }) {
  const pages = slugs.map((slug) => INDUSTRY_PAGES.find((p) => p.slug === slug)).filter(Boolean);
  if (!pages.length) return null;
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">{heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pages.map((page) => (
          <Link
            key={page!.slug}
            href={industryHref(page!.slug)}
            className="group flex items-center justify-between gap-3 rounded-2xl p-5 bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/50 transition-colors"
          >
            <span className="font-heading font-semibold group-hover:text-primary transition-colors">Google Ads for {page!.name}</span>
            <ArrowRight className="w-4 h-4 text-primary shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------- Checklist ---------- */

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Work process (shared across industry pages) ---------- */

export const WORK_PROCESS: TitledText[] = [
  { title: 'Free audit and strategy call', text: 'I review your account (or your market, if you are starting fresh), your website and your tracking, then walk you through what I would change and why.' },
  { title: 'Tracking setup', text: 'Calls, forms, bookings or purchases are tracked through Google Tag Manager and GA4 before scaling spend, with offline conversions connected where you have a CRM.' },
  { title: 'Campaign build or restructure', text: 'Campaigns, ad groups, keywords, ads, assets, negatives and location settings built in your own account.' },
  { title: 'Launch and daily checks', text: 'Close monitoring in the first two weeks to catch wasted search terms and tracking issues early.' },
  { title: 'Weekly optimization', text: 'Search terms, bids, budgets, ads and landing pages reviewed and adjusted every week.' },
  { title: 'Monthly reporting', text: 'A Looker Studio dashboard with spend, leads or sales and cost per result, plus a short summary of what changed and what is next.' },
];
