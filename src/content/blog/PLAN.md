# Blog content plan and publishing rules

Daily publishing reads this file. Publish the FIRST row below whose slug does not yet exist in
`src/content/blog/posts/`. Edit, reorder or add rows any time.

## 30-day plan (Nov - Dec 2026)

Row 14 (house cleaning) was added on Nov 26 from Search Console data: Google already shows the site for 15+ house cleaning Google Ads queries. Its angle is a practical how-to guide, so it must not repeat the /google-ads-for-cleaning-businesses service page; link to that page instead.

Pillars: Google Ads Expertise, Google PPC Campaign Management, Google Lead Generation.
Category values must be exactly one of these three pillar names.

| Day | SEO title / H1 (max 60 chars, keyword in first 3 words) | Slug | Primary keyword | Intent | Category | Must link to |
|---|---|---|---|---|---|---|
| 1 | What Does a Google Ads Specialist Do? (2026 Guide) | what-does-a-google-ads-specialist-do | google ads specialist | Info | Google Ads Expertise | / |
| 2 | Google Ads Consultant vs Agency: Which to Hire? | google-ads-consultant-vs-agency | google ads consultant | Commercial | Google Ads Expertise | /, /services/google-ads-management |
| 3 | How Google PPC Campaigns Work for Service Businesses | how-google-ppc-campaigns-work | google ppc campaigns | Info | Google PPC Campaign Management | /services/google-search-ads |
| 4 | Google Lead Generation for Contractors | google-lead-generation-for-contractors | google lead generation | Info | Google Lead Generation | /google-ads-for-contractors |
| 5 | What Does a Google Ads Manager Do Every Month? | what-does-a-google-ads-manager-do | google ads manager | Info | Google PPC Campaign Management | /services/google-ads-management |
| 6 | How to Hire a Google Ads Expert: 12 Questions | how-to-hire-a-google-ads-expert | google ads expert | Commercial | Google Ads Expertise | /, /services/google-ads-audit |
| 7 | Google Ads Advertising for Small Businesses | google-ads-advertising-small-business | google ads advertising | Info | Google PPC Campaign Management | /google-ads-for-local-businesses |
| 8 | Google AdWords Specialist vs Google Ads Specialist | google-adwords-specialist | google adwords specialist | Info | Google Ads Expertise | / |
| 9 | Google PPC Campaigns: 6 Types and When to Use Each | google-ppc-campaign-types | google ppc campaigns | Info | Google PPC Campaign Management | /services/performance-max-management, /services/google-search-ads, /services/google-shopping-management |
| 10 | Google Ads Consultant Cost: What to Expect in 2026 | google-ads-consultant-cost | google ads consultant cost | Commercial | Google Ads Expertise | /services/google-ads-management |
| 11 | Google Lead Generation for Roofers: What Works | google-lead-generation-roofers | google lead generation for roofers | Info | Google Lead Generation | /google-ads-for-roofing, /portfolio/roofing-google-ads |
| 12 | Google Campaign Manager vs Google Ads, Explained | google-campaign-manager-explained | google campaign manager | Info | Google PPC Campaign Management | /services/google-ads-management |
| 13 | Google Ads Expert or More Budget? Signs to Know | google-ads-expert-signs | google ads expert | Commercial | Google Ads Expertise | /services/google-ads-audit |
| 14 | House Cleaning Google Ads: Keywords, Budget and Setup | house-cleaning-google-ads | house cleaning google ads | Info | Google Lead Generation | /google-ads-for-cleaning-businesses, /services/google-ads-management |
| 15 | Google Ads Manager vs In-House Hire: Cost and Control | google-ads-manager-in-house | google ads manager | Commercial | Google PPC Campaign Management | /services/google-ads-management |
| 16 | Google Ads Advertising Budget: How to Set It for Leads | google-ads-advertising-budget | google ads advertising budget | Info | Google PPC Campaign Management | /services/google-ads-management |
| 17 | Google Lead Generation for HVAC Companies | google-lead-generation-hvac | google lead generation for hvac | Info | Google Lead Generation | /google-ads-for-hvac |
| 18 | Google PPC Campaign Structure for Local Services | google-ppc-campaign-structure | google ppc campaign structure | Info | Google PPC Campaign Management | /google-ads-for-local-businesses, /portfolio/home-services-google-ads |
| 19 | Google Ads Specialist Skills That Actually Matter | google-ads-specialist-skills | google ads specialist skills | Info | Google Ads Expertise | /about |
| 20 | Google Ads Audit: How a Consultant Checks Your Account | google-ads-consultant-audit | google ads audit | Commercial | Google Ads Expertise | /services/google-ads-audit |
| 21 | Google Ads Call Tracking for Better Lead Generation | google-ads-call-tracking-leads | google ads call tracking | Info | Google Lead Generation | /services/google-ads-conversion-tracking |
| 22 | Google PPC for Remodeling Companies: A Practical Guide | google-ppc-remodeling-companies | google ppc for remodeling | Info | Google Lead Generation | /google-ads-for-contractors |
| 23 | Google Ads Report: What Your Manager Should Show You | google-ads-manager-report | google ads report | Info | Google PPC Campaign Management | /services/looker-studio-dashboard |
| 24 | Negative Keywords in Google Ads: Cut Wasted Spend | negative-keywords-google-ads | negative keywords | Info | Google PPC Campaign Management | /services/google-ads-audit |
| 25 | Google Lead Generation for Plumbers: What Works | google-lead-generation-plumbers | google lead generation for plumbers | Info | Google Lead Generation | /google-ads-for-plumbers |
| 26 | Google Ads Conversion Tracking: GA4 and GTM Checks | ga4-gtm-google-ads-tracking | google ads conversion tracking | Info | Google PPC Campaign Management | /services/ga4-consultant, /services/google-tag-manager |
| 27 | Google Ads Mistakes Home Service Businesses Make | google-ads-mistakes-home-services | google ads mistakes | Info | Google Lead Generation | /google-ads-for-home-services |
| 28 | Google Ads Lead Quality: How to Improve It | improve-google-ads-lead-quality | google ads lead quality | Info | Google Lead Generation | /services/google-ads-conversion-tracking |
| 29 | PPC Landing Page Checklist for Google Ads Leads | google-ppc-landing-page-checklist | ppc landing page | Info | Google PPC Campaign Management | /services/google-ads-management |
| 30 | Google Ads Expert vs DIY: When to Hand It Over | google-ads-expert-diy | google ads expert | Commercial | Google Ads Expertise | / |
| 31 | Google Ads Consultant: Is Hiring One Worth It? | google-ads-consultant-value | google ads consultant | Commercial | Google Ads Expertise | /, /portfolio |

## Writing rules

**Every post from Nov 21, 2026 follows `src/content/blog/SEO_CHECKLIST.md` (Siraj's SEO expert checklist).
Read it fully before writing. `scripts/check-blog-posts.ts` enforces the measurable parts.**
The rules below still apply on top of the checklist.

Author: Sirajul Islam Sohag, Certified Google Ads Specialist and PPC Consultant, **3+ years** of experience,
Google Ads management, PPC optimization, conversion tracking and lead generation for US home service businesses.
Audience: US business owners, contractors, roofing, remodeling, HVAC and companies looking for Google Ads management.

- The plan row's title and slug are the target. If research shows a better keyword-first title, you may adjust the title, but keep the slug (it is how the plan tracks what is published).
- NEVER invent personal stories, client results, case studies, statistics or expert quotes. The only real results allowed are the figures already published in `src/content/case-studies.ts` (quote them exactly and link the case study). Every statistic needs a named, linked, verified source and its year. If a real, verifiable quote from a named expert is not available, leave quotes out.
- Original element (checklist 8): use a real case study figure from the site, a worked calculation clearly labeled as an example, a template or a checklist. Label illustrative numbers as illustrative.
- External links: 2 to 4, authoritative only (Google official docs: support.google.com, developers.google.com, blog.google, skillshop; .gov / .edu; well-known industry research). Never link a competing agency or freelancer. Verify each URL loads before using it.
- Never use the em dash character; use a hyphen or rewrite. Never name a client business. Never promise rankings or AI citations.
- Keep each post genuinely different from earlier posts (different angle, examples and structure). Check the existing posts and site pages for keyword cannibalization before writing.
- Internal linking both ways: 3 to 6 internal links in the new post (including the plan's "Must link to" pages), AND add one natural sentence with a descriptive link to the new post inside 2 older related blog posts (set their updatedAt to now). Only edit blog posts for this, never case studies or service pages.
- End with "Frequently Asked Questions" (5 to 8 items, each paragraph exactly "**Question?** Answer", answers 40 to 60 words), then a short closing section that restates the core answer (summary block) with a clear CTA linking /contact and one of /services/google-ads-audit or /portfolio.
- 4 to 6 seo.keywords (primary first), 3 to 5 tags, category = the plan's category, excerpt 1 to 2 sentences, keyTakeaways 3 to 6 items, sourcesChecked = today's date.
