/**
 * Quality gate for code-published blog posts. Run: npx tsx scripts/check-blog-posts.ts
 * Exits 1 if any post breaks a rule, so a scheduled publish stops before going live.
 */
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { STATIC_POSTS } from '../src/content/blog';
import { INDUSTRY_PAGES, industryHref } from '../src/content/industries';
import { SERVICE_PAGES, serviceHref } from '../src/content/services';
import { CASE_STUDIES, caseStudyHref } from '../src/content/case-studies';

const fixed = ['/', '/about', '/services', '/industries', '/portfolio', '/contact', '/blog'];
const valid = new Set<string>([
  ...fixed,
  ...INDUSTRY_PAGES.map((p) => industryHref(p.slug)),
  ...SERVICE_PAGES.map((p) => serviceHref(p.slug)),
  ...CASE_STUDIES.map((c) => caseStudyHref(c.slug)),
  ...STATIC_POSTS.map((p) => `/blog/${p.slug}`),
]);

/** Posts published on or after this date must also pass the full SEO checklist rules. */
const CHECKLIST_FROM = process.env.CHECKLIST_FROM || '2026-11-21T00:00:00.000Z';
const STOP_WORDS = new Set(['a', 'an', 'the', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'with', 'is', 'are', 'it', 'your', 'you', 'how', 'what', 'why', 'when', 'does', 'do']);

const errors: string[] = [];
const files = readdirSync(join(__dirname, '../src/content/blog/posts')).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
const slugs = new Set<string>();

for (const f of files) {
  if (!STATIC_POSTS.some((p) => `${p.slug}.ts` === f)) errors.push(`${f}: file exists but is not registered in posts/index.ts`);
}

for (const p of STATIC_POSTS) {
  const e = (m: string) => errors.push(`${p.slug}: ${m}`);
  if (slugs.has(p.slug)) e('duplicate slug');
  slugs.add(p.slug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) e('slug must be lowercase words joined by hyphens');
  if (p.seo.metaTitle.length > 60) e(`metaTitle ${p.seo.metaTitle.length} chars (max 60)`);
  if (p.seo.metaDescription.length < 120 || p.seo.metaDescription.length > 160) e(`metaDescription ${p.seo.metaDescription.length} chars (120-160)`);
  if (p.seo.keywords.length < 3) e('need at least 3 seo.keywords');
  if (Number.isNaN(Date.parse(p.publishedAt))) e('publishedAt is not a valid ISO date');
  const all = JSON.stringify(p);
  if (/[—]/.test(all)) e('contains an em dash; use a regular hyphen');
  if (/\b4\+\s*years\b/i.test(all)) e('says 4+ years; the site uses 3+ years');
  const text = p.sections.flatMap((s) => s.paragraphs).join(' ');
  const words = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean).length;
  if (words < 1200) e(`only ${words} words (min 1200)`);
  const links = [...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((l) => l.startsWith('/'));
  if (internal.length < 3) e(`only ${internal.length} internal links (min 3)`);
  for (const l of internal) if (!valid.has(l.split('#')[0])) e(`internal link not found on site: ${l}`);
  for (const l of links.filter((l) => !l.startsWith('/'))) if (!/^https:\/\//.test(l)) e(`external link must be https: ${l}`);
  const faq = p.sections.find((s) => /frequently asked questions/i.test(s.title || ''));
  if (!faq) e('missing a "Frequently Asked Questions" section');
  else {
    const qs = faq.paragraphs.filter((q) => /^\*\*.+\?\*\*\s+\S/.test(q.trim()));
    if (qs.length < 4) e(`FAQ has ${qs.length} valid "**Question?** Answer" items (min 4)`);
  }
  if (!p.sections[0] || p.sections[0].title) e('first section must be an untitled intro that answers the question directly');

  // SEO checklist rules (src/content/blog/SEO_CHECKLIST.md) for every post published from CHECKLIST_FROM.
  if (Date.parse(p.publishedAt) >= Date.parse(CHECKLIST_FROM)) checklist(p, e, text, words, links);
}

function checklist(
  p: (typeof STATIC_POSTS)[number],
  e: (m: string) => void,
  text: string,
  words: number,
  links: string[],
) {
  const kw = (p.seo.keywords[0] || '').toLowerCase().trim();
  const low = (s: string) => s.toLowerCase().replace(/\*\*/g, '');
  const wordsOf = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/\s+/).filter(Boolean);
  if (!kw) return e('seo.keywords[0] must be the primary keyword');

  // URL slug: 3 to 5 words, no stop words.
  const parts = p.slug.split('-');
  if (parts.length < 3 || parts.length > 5) e(`slug has ${parts.length} words (3-5)`);
  const stop = parts.filter((w) => STOP_WORDS.has(w));
  if (stop.length) e(`slug contains stop words: ${stop.join(', ')}`);
  if (!kw.split(/\s+/).some((w) => parts.includes(w))) e('slug should contain the primary keyword');

  // Title / H1.
  if (p.title.length > 60) e(`title (H1) ${p.title.length} chars (max 60)`);
  for (const [name, t] of [['title (H1)', p.title], ['metaTitle', p.seo.metaTitle]] as const) {
    const at = low(t).indexOf(kw);
    if (at < 0) e(`${name} must contain the primary keyword "${kw}"`);
    else if (wordsOf(t.slice(0, at)).length > 2) e(`${name}: primary keyword must start within the first 3 words`);
  }

  // Meta description.
  const md = p.seo.metaDescription;
  if (md.length < 150 || md.length > 160) e(`metaDescription ${md.length} chars (aim 155-160, allowed 150-160)`);
  const mdAt = low(md).indexOf(kw);
  if (mdAt < 0 || mdAt > 100) e('metaDescription must contain the primary keyword within the first 100 characters');
  if (STATIC_POSTS.some((o) => o.slug !== p.slug && o.seo.metaDescription === md)) e('metaDescription duplicates another post');

  // Introduction.
  const intro = p.sections[0]?.paragraphs.join(' ') || '';
  const introWords = wordsOf(intro).length;
  if (introWords < 120 || introWords > 150) e(`intro is ${introWords} words (120-150)`);
  const introAt = low(intro).indexOf(kw);
  if (introAt < 0 || introAt > 100) e('primary keyword must appear within the first 100 characters of the intro');

  // Key takeaways box.
  const kt = p.keyTakeaways || [];
  if (kt.length < 3 || kt.length > 6) e(`keyTakeaways has ${kt.length} items (3-6)`);

  // Headings.
  const h2 = p.sections.map((s) => s.title).filter((t): t is string => !!t);
  const h3 = p.sections.flatMap((s) => s.paragraphs.filter((x) => x.trim().startsWith('### ')).map((x) => x.trim().slice(4)));
  if (!h2.some((t) => low(t).includes(kw))) e(`primary keyword "${kw}" must appear in at least one H2`);
  if (![...h2, ...h3].some((t) => t.trim().endsWith('?'))) e('add at least one question-format heading (ends with "?")');
  for (const t of [...h2, ...h3]) if (wordsOf(t).length > 10) e(`heading too long (${wordsOf(t).length} words, aim under 8): ${t}`);
  if (h2.filter((t) => !/frequently asked/i.test(t)).length < 4) e('need at least 4 content H2 sections');

  // Body content.
  if (!p.sections.some((s) => s.paragraphs.some((x) => x.trim().split('\n').every((l) => l.trim().startsWith('|'))))) e('add at least one comparison table');
  // Density = keyword words used / total words (how most SEO tools measure multi-word phrases).
  const occurrences = low(text).split(kw).length - 1;
  const density = ((occurrences * kw.split(/\s+/).length) / words) * 100;
  if (density < 0.8 || density > 1.5) e(`primary keyword density ${density.toFixed(2)}% (${occurrences} uses of "${kw}"); aim 0.8-1.5%`);
  const prose = p.sections
    .flatMap((s) => s.paragraphs)
    .filter((x) => !/^\s*(### |- |\d+[.)]\s|\|)/.test(x) && !/^\*\*.+\?\*\*/.test(x.trim()));
  let longSentences = 0;
  let totalSentences = 0;
  for (const para of prose) {
    const sentences = para.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/(?<=[.!?])\s+(?=[A-Z"(])/).filter((x) => x.trim());
    if (sentences.length > 5) e(`paragraph has ${sentences.length} sentences (max 5): "${para.slice(0, 60)}..."`);
    for (const s of sentences) {
      totalSentences++;
      const n = wordsOf(s).length;
      if (n > 30) e(`sentence is ${n} words (keep under 20): "${s.slice(0, 70)}..."`);
      if (n > 20) longSentences++;
    }
  }
  if (totalSentences && longSentences / totalSentences > 0.2)
    e(`${longSentences} of ${totalSentences} sentences are over 20 words (max 20% allowed)`);

  // Links.
  const internal = links.filter((l) => l.startsWith('/'));
  const external = links.filter((l) => !l.startsWith('/'));
  if (!internal.some((l) => /^\/(services|google-ads-for-|contact|portfolio)/.test(l))) e('link at least one money page (/services/..., /google-ads-for-..., /portfolio or /contact)');
  if (external.length < 2 || external.length > 4) e(`${external.length} external links (2-4 authoritative sources)`);

  // FAQ: 5 to 8 questions.
  const faq = p.sections.find((s) => /frequently asked questions/i.test(s.title || ''));
  const qs = faq ? faq.paragraphs.filter((q) => /^\*\*.+\?\*\*\s+\S/.test(q.trim())) : [];
  if (qs.length < 5 || qs.length > 8) e(`FAQ has ${qs.length} questions (5-8)`);
  for (const q of qs) {
    const n = wordsOf(q.replace(/^\*\*.+?\?\*\*\s*/, '')).length;
    if (n < 30 || n > 70) e(`FAQ answer is ${n} words (aim 40-60): ${q.slice(0, 60)}`);
  }

  if (!p.sourcesChecked || Number.isNaN(Date.parse(p.sourcesChecked))) e('set sourcesChecked to the ISO date the stats and links were verified');
}

if (errors.length) {
  console.error(`Blog check FAILED (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`Blog check passed: ${STATIC_POSTS.length} post(s).`);
