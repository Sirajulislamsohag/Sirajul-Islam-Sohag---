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
 *   a paragraph whose lines all start with "|" -> table (first row = header,
 *   an optional "|---|---|" separator row is skipped)
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
  if (lines.length >= 2 && lines.every((l) => l.startsWith('|'))) {
    const cells = (l: string) => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
    const rows = lines.filter((l) => !/^\|[\s:|-]+\|?$/.test(l)).map(cells);
    const [head, ...body] = rows;
    return (
      <div className="overflow-x-auto rounded-2xl border border-[var(--border)] not-prose">
        <table className="w-full text-left text-[13px] leading-snug sm:text-sm md:text-base">
          <thead className="bg-[var(--bg-card)] text-[var(--text)]">
            <tr>
              {head.map((h, k) => (
                <th key={k} scope="col" className="px-2.5 sm:px-4 py-3 font-heading font-semibold align-bottom">{inline(h, `${id}-h${k}`)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((r, ri) => (
              <tr key={ri} className="border-t border-[var(--border)]">
                {r.map((c, ci) => (
                  <td key={ci} className="px-2.5 sm:px-4 py-3 align-top">{inline(c, `${id}-${ri}-${ci}`)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
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

/** URL-safe id for an H2, used by the table of contents jump links. */
export function headingId(title: string): string {
  return title
    .toLowerCase()
    .replace(/\*\*/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
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
