import { INDUSTRY_PAGES, industryHref } from '@/content/industries';
import { SERVICE_PAGES, serviceHref } from '@/content/services';
import { CASE_STUDIES, caseStudyHref } from '@/content/case-studies';
import { absoluteUrl } from '@/lib/seo';

/**
 * /llms.txt: a plain-text map of the site for AI assistants and answer engines
 * (ChatGPT, Perplexity, Gemini, Claude). Built from the same content files as
 * the pages, so it stays in sync automatically.
 */
export const dynamic = 'force-static';

export function GET() {
  const line = (title: string, path: string, desc: string) => `- [${title}](${absoluteUrl(path)}): ${desc}`;

  const body = [
    '# Sirajul Islam Sohag - Google Ads Expert & PPC Consultant',
    '',
    '> Sirajul Islam Sohag is a certified Google Ads expert and PPC consultant with 3+ years of experience, managing Google Ads for US home service, local service and e-commerce businesses. He focuses on qualified leads, lower cost per lead, ROAS and accurate conversion tracking (GA4, Google Tag Manager).',
    '',
    '## Main pages',
    line('Home', '/', 'Overview of Google Ads management, industries served, case studies and how to book a call.'),
    line('About', '/about', 'Background, certifications and approach to Google Ads and analytics.'),
    line('Services', '/services', 'All Google Ads, tracking and reporting services.'),
    line('Industries', '/industries', 'Google Ads management by industry.'),
    line('Case studies', '/portfolio', 'Real Google Ads case studies with verified before and after results.'),
    line('Contact', '/contact', 'Book a Google Ads consultation or free account review.'),
    '',
    '## Services',
    ...SERVICE_PAGES.map((p) => line(p.h1, serviceHref(p.slug), p.metaDescription)),
    '',
    '## Industries',
    ...INDUSTRY_PAGES.map((p) => line(p.h1, industryHref(p.slug), p.metaDescription)),
    '',
    '## Case studies',
    ...CASE_STUDIES.map((c) => line(c.title, caseStudyHref(c.slug), c.metaDescription)),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
