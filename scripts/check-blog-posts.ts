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
}

if (errors.length) {
  console.error(`Blog check FAILED (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`Blog check passed: ${STATIC_POSTS.length} post(s).`);
