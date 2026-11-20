# SEO-friendly article checklist (Siraj's SEO expert process)

Every blog post published from Nov 21, 2026 must follow this checklist. Items marked **[checked]** are
enforced by `scripts/check-blog-posts.ts`; everything else must be done by the writer and confirmed in the
final re-read. "How on this site" notes explain how each item maps to `StaticBlogPost` fields and the tools
available in this environment.

## 1. Keyword research
- Pick 1 primary keyword (the plan row's keyword). Search volume and KD tools (Ahrefs, Semrush) are not
  available here, so confirm demand and intent from the live Google results instead, and say nothing about volume.
- Confirm search intent type: informational, commercial, transactional or navigational.
- Pull 15 to 30 secondary keywords, plus LSI and semantic variations, from the top results, Google
  autocomplete style queries and related searches.
- Pull long-tail question keywords from People Also Ask, Reddit and Quora results found via web search.
- Group keywords by subtopic, one group per H2.
- Check keyword cannibalization against existing site pages (all posts in `posts/`, service, industry and
  case study pages). Pick a different angle if a page already targets the same intent.
- Lock the target: 1 primary, 3 to 5 secondary, 10+ long-tail. How on this site: `seo.keywords` = primary
  first, then 3 to 5 secondary. Use the long-tail questions as H2/H3 headings and FAQ questions.

## 2. SERP analysis
- Analyze the top 10 results for the primary keyword (web search, then fetch the top pages).
- Note the ranking content format (listicle, how-to, guide, comparison, tool page, product page), the average
  word count of the top 5, heading count and depth, the H1 to H4 structure, and the title and meta patterns.
- List SERP features present: featured snippet, PAA, video, image pack, AI Overview. Identify the snippet type
  to target: paragraph, list or table.
- Find content gaps: what all 10 missed.
- Set the target word count: match the top 5 average, then add the gap value (minimum 1,200 words **[checked]**).
- Never copy competitor text. Use them only to understand intent and gaps.

## 3. URL slug
- Contains the primary keyword **[checked]**. 3 to 5 words **[checked]**. Lowercase, hyphen separated **[checked]**.
- No dates, stop words **[checked]** or numbers unless needed.

## 4. Title tag (H1)
- Within 60 characters **[checked]** (`title` and `seo.metaTitle`).
- Primary keyword in the first 3 words **[checked]**.
- Includes a hook: number, year, benefit, curiosity or power word.
- Different and stronger than all top 10 competitors. Matches search intent exactly. Reads naturally, not stuffed.
- Only one H1 on the page (the page template renders `title` as the only H1).

## 5. Meta description
- 155 to 160 characters (checker allows 150 to 160) **[checked]**.
- Primary keyword in the first 100 characters **[checked]**.
- Directly answers the main query in one line, includes a benefit and a soft CTA.
- Secondary keyword included if space allows. No duplicate meta anywhere on the site **[checked]**.

## 6. Introduction (the first, untitled section)
- 120 to 150 words total **[checked]**. Primary keyword in the first 100 characters **[checked]**.
- The first 2 sentences directly answer the main query in 40 to 55 words (snippet target).
- Include 1 or 2 real data points with source and year (linked, verified).
- State who the article is for and what the reader will get.
- Add a credibility signal (3+ years managing Google Ads for US home service businesses, a real case study figure).
- No fluff opener, no "In today's world". Written so an AI engine can lift it as a standalone answer.

## 7. Heading structure
- Headings mapped from the keyword groups, not guessed.
- Logical hierarchy: H2 (`section.title`) then H3 (`"### "` paragraphs). Never skip levels.
- Primary keyword in at least 1 H2 **[checked]**. Secondary keywords spread across H2s.
- Question-format headings for PAA and AEO capture **[checked: at least one]**.
- Each heading under 8 words where possible (checker fails above 10) **[checked]**.
- Headings scannable and self-explanatory alone. Cover every subtopic the top 10 cover, plus the gap topics.
- Table of contents with jump links: added automatically by the page template from the H2s.

## 8. Body content
- Each H2 section answers its heading in the first 2 sentences.
- Primary keyword density 0.8% to 1.5%, natural placement **[checked]** (measured as keyword words / total words).
- Secondary and LSI keywords placed inside body copy.
- Sentences within 20 words (checker fails any sentence over 30, or more than 20% over 20) **[checked]**.
- Paragraphs 2 to 5 sentences maximum **[checked]**. Active voice. Grade 6 to 8 readability.
- Statistics, dates, numbers and percentages included with sources.
- At least 1 original element: a real case study figure from `src/content/case-studies.ts`, a worked calculation
  labeled as an example, a template or a checklist.
- Bullet lists and numbered lists for steps. At least 1 comparison table **[checked]** (a paragraph whose lines
  all start with `|`, first row is the header).
- No repeated content between sections. Transition words for flow.

## 9. E-E-A-T
- First-hand experience shown with real examples only (never invented).
- Author box with real name, photo, bio, credentials, LinkedIn and About links: rendered by the page template.
- Published and last updated dates visible: rendered by the template from `publishedAt` / `updatedAt`.
- All claims cited to authoritative, recent sources (ideally within 2 years). Set `sourcesChecked` **[checked]**.
- Editorial note when figures are illustrative: `editorialNote`.
- No unsupported claims or exaggeration.

## 10. AEO optimization (answer engines)
- Direct answer in 40 to 60 words immediately under each question heading, before any explanation.
- Question headings phrased exactly as users search. Standalone factual sentences.
- Definitions use the "X is a ..." format. Steps as numbered lists. Comparisons as tables.
- FAQ section with 5 to 8 real PAA questions **[checked]**, answers 40 to 60 words (checker allows 30 to 70) **[checked]**.
- Key takeaways box near the top: `keyTakeaways`, 3 to 6 items **[checked]**.

## 11. GEO optimization (generative engines)
- Content chunked so each section is quotable on its own.
- Clear entity naming: brands, tools, places and people written in full (Google Ads, Google Analytics 4,
  Google Tag Manager, Performance Max).
- Statistics with named sources. Quotes only from real, named experts with a source link, never invented.
- Unique data or opinion that cannot be found elsewhere (Siraj's real case study figures and approach).
- Consistent terminology, no switching synonyms mid-article.
- Summary block at the end restating the core answer (the closing section before the CTA).
- Brand (Sirajul Islam Sohag) mentioned naturally alongside the topic entity. Fresh, dated information.

## 12. Local GEO (only if the post targets a location)
- City, region and service area named in the title, H1, intro and 1 H2. Local landmarks or areas mentioned.
- Most posts target the whole US, so this section usually does not apply.

## 13. Internal links
- 3 to 6 internal links **[checked: minimum 3, all must exist]**, descriptive keyword-rich anchors, no "click here".
- Link pillar and cluster pages, and at least 1 money or service page **[checked]**.
- Update 2 older relevant posts to link to the new post, so it is not an orphan (set their `updatedAt`).

## 14. External links
- 2 to 4 external links to authoritative sources **[checked]**: .gov, .edu, official Google documentation,
  industry studies, original research. Not direct competitors. Links open in a new tab (automatic).
- All links live, no 404s (verify each one before publishing).

## 18. Pre-publish QC
- Read the whole post once for flow. Grammar and spelling checked.
- Originality: written from scratch, nothing copied from competitors or sources.
- Every stat and link verified. Title, meta, H1 and URL aligned to the same intent.
- Content genuinely better than the current number 1 result. Search intent fully satisfied.
- Clear CTA at the end.

## Reference article
The structure follows the sample Siraj shared ("Takeaway Delivery Radius: How Far Should You Deliver?"):
- A keyword-first question title.
- A 2-sentence direct answer that opens the intro.
- "What is X?" and "How far / how much / how to" question H2s, each answered in the first 2 sentences.
- Short sentences with a scenario-style example ("Picture Friday at 7pm...").
- A worked calculation table clearly labeled as illustrative.
- A comparison table and a numbered trial or checklist.
- A copyable worksheet table.
- A closing summary section with a soft CTA.
- 5 to 6 FAQs, then an editorial note.
