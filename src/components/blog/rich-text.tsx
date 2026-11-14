import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Tiny, safe formatter for blog paragraphs written in the dashboard.
 * Supports (no raw HTML is ever rendered):
 *   [link text](/internal-page) or [link text](https://external.com)
 *   **bold text**
 *   lines starting with "- "   -> bullet list
 *   lines starting with "1. "  -> numbered list
 *   a paragraph starting "### " -> small heading (H3)
 */

const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const start = m.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    const key = `${keyBase}-${i++}`;
    if (m[1] && m[2]) {
      const href = m[2];
      const cls = 'text-primary font-medium underline underline-offset-4 hover:opacity-80';
      if (href.startsWith('/') || href.startsWith('#')) {
        out.push(<Link key={key} href={href} className={cls}>{m[1]}</Link>);
      } else if (/^https?:\/\//.test(href)) {
        const internal = /^https?:\/\/(www\.)?sirajulislamsohag\.com/.test(href);
        out.push(
          <a key={key} href={href} className={cls} {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
            {m[1]}
          </a>,
        );
      } else {
        out.push(m[1]);
      }
    } else if (m[3]) {
      out.push(<strong key={key} className="font-semibold text-[var(--text)]">{m[3]}</strong>);
    }
    last = start + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function RichParagraph({ text, id }: { text: string; id: string }) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('### ')) {
    return <h3 className="text-xl md:text-2xl font-heading font-semibold text-[var(--text)] pt-2">{inline(trimmed.slice(4), id)}</h3>;
  }

  const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length && lines.every((l) => l.startsWith('- '))) {
    return (
      <ul className="list-disc pl-6 space-y-2 marker:text-primary">
        {lines.map((l, k) => <li key={k}>{inline(l.slice(2), `${id}-${k}`)}</li>)}
      </ul>
    );
  }
  if (lines.length && lines.every((l) => /^\d+[.)]\s/.test(l))) {
    return (
      <ol className="list-decimal pl-6 space-y-2 marker:text-primary marker:font-semibold">
        {lines.map((l, k) => <li key={k}>{inline(l.replace(/^\d+[.)]\s/, ''), `${id}-${k}`)}</li>)}
      </ol>
    );
  }
  return <p className="leading-relaxed">{inline(trimmed, id)}</p>;
}

/** Plain-text version (markdown removed) for schema and descriptions. */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/^###\s+/gm, '')
    .replace(/^-\s+/gm, '')
    .trim();
}

/**
 * FAQ extraction: a section whose title contains "FAQ" or "Frequently Asked",
 * with each paragraph written as "**Question?** Answer".
 */
export function extractFaq(sections: { title?: string; paragraphs: string[] }[]) {
  const faq: { q: string; a: string }[] = [];
  for (const s of sections) {
    if (!s.title || !/faq|frequently asked/i.test(s.title)) continue;
    for (const p of s.paragraphs || []) {
      const m = p.trim().match(/^\*\*(.+?\?)\*\*\s*([\s\S]+)$/);
      if (m) faq.push({ q: m[1].trim(), a: plainText(m[2]) });
    }
  }
  return faq;
}
