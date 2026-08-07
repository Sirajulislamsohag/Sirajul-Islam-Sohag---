import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://arifhossainaslam6_db_user:frfrsYHduNyXjdxh@clusterdb.nabjjrb.mongodb.net/database_DB?appName=ClusterDB';

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  challenge: String,
  solution: String,
  results: String,
  images: [String],
  thumbnail: String,
  client: String,
  metrics: [{ label: String, value: String, change: String }],
  tags: [String],
  featured: { type: Boolean, default: false },
  seo: { metaTitle: String, metaDescription: String, ogImage: String, keywords: [String] },
}, { timestamps: true });

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);

const portfolioItems = [
  // Facebook Ads
  {
    title: 'B2B SaaS Lead Generation Machine',
    slug: 'b2b-saas-lead-generation-machine',
    category: 'facebook-ads',
    description: 'Built a full-funnel Meta Ads lead generation system for an enterprise SaaS platform, leveraging dynamic instant lead forms, video testimonials, and hyper-targeted retargeting.',
    challenge: 'High cost per acquisition and low lead-to-demo conversion rates from legacy ad campaigns.',
    solution: 'Designed interactive Meta Instant Forms with qualifying questions and deployed high-intent retargeting sequences.',
    results: 'Generated 500+ SQLs per month with a 62% reduction in Cost Per Lead (CPL).',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    client: 'CloudScale Technologies',
    tags: ['Meta Ads', 'Lead Gen', 'Retargeting', 'SaaS'],
    featured: true,
    metrics: [
      { label: 'Leads / Month', value: '500+' },
      { label: 'CPL Reduction', value: '62%' }
    ],
    seo: {
      metaTitle: 'B2B SaaS Meta Ads Case Study',
      metaDescription: 'How Meta Ads generated 500+ qualified B2B SaaS leads per month.'
    }
  },
  {
    title: 'DTC Skincare Brand Revenue Scaling',
    slug: 'dtc-skincare-brand-revenue-scaling',
    category: 'facebook-ads',
    description: 'Launched and scaled an e-commerce DTC skincare brand from zero to $80K first-month revenue through viral UGC video creatives and high-converting Lookalike Audiences.',
    challenge: 'Launching a new brand in a crowded market with no existing audience or brand equity.',
    solution: 'Tested 20+ UGC creator video hooks and built a structured ASC (Advantage+ Shopping) scaling campaign.',
    results: 'Achieved $80,000 revenue in the first 30 days at a 4.8x ROAS.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    client: 'GlowSkin Co.',
    tags: ['Meta Ads', 'DTC', 'Creative Scaling', 'Instagram'],
    featured: true,
    metrics: [
      { label: 'First Month Revenue', value: '$80K' },
      { label: 'ROAS', value: '4.8x' }
    ],
    seo: {
      metaTitle: 'DTC Skincare Meta Ads Scaling',
      metaDescription: 'Scaling a new DTC skincare brand to $80K first-month revenue via Meta Ads.'
    }
  },
  {
    title: 'Global Fashion Brand Catalog Scaling',
    slug: 'global-fashion-brand-catalog-scaling',
    category: 'facebook-ads',
    description: 'Scaled international e-commerce apparel company to $210K monthly revenue using Dynamic Product Ads (DPA) and Advantage+ Shopping campaigns across US & EU markets.',
    challenge: 'Inefficient ad spend across broad international markets with low catalog engagement.',
    solution: 'Overhauled dynamic catalog feeds, custom product overlays, and localized currency retargeting.',
    results: 'Scaled monthly revenue to $210,000 maintaining a 4.1x blended ROAS.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    client: 'VogueApparel',
    tags: ['Meta Ads', 'Catalog Sales', 'DPA', 'International'],
    featured: false,
    metrics: [
      { label: 'Monthly Revenue', value: '$210K' },
      { label: 'Blended ROAS', value: '4.1x' }
    ],
    seo: {
      metaTitle: 'Global Fashion Catalog Meta Ads Case Study',
      metaDescription: 'E-commerce fashion brand scaling to $210K/month using Meta Advantage+ Shopping.'
    }
  },

  // SEO
  {
    title: '340% Organic Traffic Growth Strategy',
    slug: '340-organic-traffic-growth-strategy',
    category: 'seo',
    description: 'Achieved 340% organic traffic explosion and top 3 rankings for 50+ high-volume competitive keywords through technical audits, topical authority hubs, and contextual link building.',
    challenge: 'Stagnant organic search rankings due to legacy technical debt and thin content coverage.',
    solution: 'Fixed core web vitals, structured pillar-cluster content architectures, and built high-DR backlinks.',
    results: '340% increase in organic search traffic and 50+ keywords ranking in top 3 position on Google.',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    client: 'TechHub Media',
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    featured: true,
    metrics: [
      { label: 'Traffic Growth', value: '340%' },
      { label: 'Top 3 Keywords', value: '50+' }
    ],
    seo: {
      metaTitle: '340% Organic Search Growth SEO Case Study',
      metaDescription: 'Technical & content SEO campaign driving 340% traffic increase and 50+ top rankings.'
    }
  },
  {
    title: 'Local Service Google Map Pack Domination',
    slug: 'local-service-google-map-pack-domination',
    category: 'seo',
    description: 'Helped a multi-location home service contractor dominate Google Map Pack (#1 rank) and organic search across 5 major metropolitan markets, driving massive phone call growth.',
    challenge: 'Inconsistent Google Business Profiles and lack of localized search authority across branches.',
    solution: 'Optimized GMB profiles, structured geo-landing pages, schema markup, and citation consistency.',
    results: 'Secured #1 Google Map Pack spot in all 5 target cities with 280% increase in direct inbound calls.',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80',
    client: 'Apex Home Services',
    tags: ['Local SEO', 'Google Maps', 'GMB', 'Reviews'],
    featured: true,
    metrics: [
      { label: 'Map Pack Rank', value: '#1' },
      { label: 'Inbound Calls', value: '+280%' }
    ],
    seo: {
      metaTitle: 'Local SEO & Google Maps Domination Case Study',
      metaDescription: 'How Local SEO achieved #1 Google Map Pack rank and 280% phone call increase.'
    }
  },
  {
    title: 'Enterprise B2B SaaS Organic Revenue Scaling',
    slug: 'enterprise-b2b-saas-organic-revenue-scaling',
    category: 'seo',
    description: 'Grew organic search sales pipeline from $200K to $1.2M ARR by building programmatic SEO landing pages and eliminating crawl budget bottlenecks.',
    challenge: 'Low organic pipeline share compared to paid acquisition channels.',
    solution: 'Engineered programmatic comparison pages and high-intent commercial keyword hubs.',
    results: 'Scaled organic search ARR contribution to $1.2M while elevating domain rank to DR 68.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    client: 'DataFlow Software',
    tags: ['Programmatic SEO', 'SaaS', 'B2B Growth'],
    featured: false,
    metrics: [
      { label: 'Organic ARR', value: '$1.2M' },
      { label: 'Domain Rank', value: '68' }
    ],
    seo: {
      metaTitle: 'Enterprise B2B SaaS SEO Case Study',
      metaDescription: 'Scaling B2B SaaS organic search ARR to $1.2M with programmatic SEO.'
    }
  },

  // Analytics
  {
    title: 'Full-Stack GA4 & GTM Infrastructure Setup',
    slug: 'full-stack-ga4-gtm-infrastructure-setup',
    category: 'analytics',
    description: 'Implemented enterprise-grade analytics tracking using Google Analytics 4, Google Tag Manager, custom data layers, and Looker Studio real-time executive dashboards.',
    challenge: 'Fragmented analytics, missing e-commerce purchase events, and unreliable data reporting.',
    solution: 'Designed end-to-end GTM data layer architecture and interactive multi-channel Looker dashboards.',
    results: 'Achieved 99.8% data tracking accuracy with over 1.5 million events tracked monthly.',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    client: 'FinCorp Global',
    tags: ['GA4', 'GTM', 'Looker Studio', 'DataLayer'],
    featured: true,
    metrics: [
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Events Tracked', value: '1.5M+' }
    ],
    seo: {
      metaTitle: 'GA4 & GTM Full-Stack Analytics Case Study',
      metaDescription: 'Enterprise Google Analytics 4 & GTM implementation delivering 99.8% data accuracy.'
    }
  },
  {
    title: 'Server-Side GTM & Meta CAPI Data Recovery',
    slug: 'server-side-gtm-meta-capi-data-recovery',
    category: 'analytics',
    description: 'Deployed server-side GTM with Meta Conversion API and Stape.io to recover 35% lost conversion data caused by iOS 14+ privacy tracking restrictions.',
    challenge: 'Up to 40% of ad conversions were missing due to browser ad-blockers and iOS privacy restrictions.',
    solution: 'Configured first-party server container tracking with hashed customer matching parameters.',
    results: 'Recovered 35% of lost attribution data and raised Meta Event Match Quality to 9.2/10.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    client: 'TrendyCart Ecommerce',
    tags: ['Server-Side GTM', 'Meta CAPI', 'Attribution'],
    featured: false,
    metrics: [
      { label: 'Data Recovery', value: '+35%' },
      { label: 'Match Quality', value: '9.2/10' }
    ],
    seo: {
      metaTitle: 'Server-Side GTM & Meta CAPI Data Recovery',
      metaDescription: 'Recovering 35% lost ad conversions with Server-Side GTM and Meta Conversion API.'
    }
  },

  // Branding
  {
    title: 'FinTech Platform Global Brand Identity',
    slug: 'fintech-platform-global-brand-identity',
    category: 'branding',
    description: 'Created a comprehensive brand identity, logo design system, color palette, and corporate design guidelines for a next-gen FinTech startup preparing for Series A funding.',
    challenge: 'Outdated visual identity that failed to inspire confidence among enterprise investors and users.',
    solution: 'Developed modern geometric brand identity, typography design tokens, and digital brand book.',
    results: 'Drove +300% brand awareness growth and supported successful $4.5M Series A fundraising round.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    client: 'PayPulse FinTech',
    tags: ['Brand Identity', 'Logo System', 'Visual Guidelines'],
    featured: true,
    metrics: [
      { label: 'Brand Awareness', value: '+300%' },
      { label: 'Investor Funding', value: '$4.5M' }
    ],
    seo: {
      metaTitle: 'FinTech Brand Identity Design Case Study',
      metaDescription: 'Brand identity & visual design system for a FinTech platform securing $4.5M funding.'
    }
  },
  {
    title: 'Luxury Lifestyle E-Commerce Rebranding',
    slug: 'luxury-lifestyle-e-commerce-rebranding',
    category: 'branding',
    description: 'Executed complete brand refresh including luxury typography, sustainable packaging design, and high-end UI design system for a premium lifestyle goods company.',
    challenge: 'Generic branding causing high bounce rates and low perceived product value.',
    solution: 'Designed elegant luxury brand aesthetic, custom typography tokens, and premium web design UI.',
    results: 'Elevated customer trust score to 98% and increased Average Order Value (AOV) by 75%.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    client: 'Aura Luxury Goods',
    tags: ['Rebranding', 'Typography', 'Brand Strategy'],
    featured: false,
    metrics: [
      { label: 'Customer Trust', value: '98%' },
      { label: 'Avg Order Value', value: '+75%' }
    ],
    seo: {
      metaTitle: 'Luxury E-Commerce Rebranding Case Study',
      metaDescription: 'Luxury brand refresh increasing Average Order Value (AOV) by 75%.'
    }
  },

  // Google Ads
  {
    title: 'E-Commerce Google Ads Revenue Scaling',
    slug: 'e-commerce-google-ads-revenue-scaling',
    category: 'google-ads',
    description: 'Scaled e-commerce brand from $10K to $150K monthly revenue through strategic Google Search, Shopping, and Performance Max campaigns.',
    challenge: 'Low ROAS and unprofitable ad spend on non-converting keyword match types.',
    solution: 'Restructured account with negative keyword lists, feed optimization, and PMax asset groups.',
    results: '1400% revenue increase at a sustained 5.2x ROAS.',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=800&auto=format&fit=crop&q=80',
    client: 'FitEquip Direct',
    tags: ['Google Ads', 'Shopping', 'PMax'],
    featured: true,
    metrics: [
      { label: 'Revenue Growth', value: '1400%' },
      { label: 'ROAS', value: '5.2x' }
    ],
    seo: {
      metaTitle: 'Google Ads E-Commerce Scaling Case Study',
      metaDescription: 'Scaling e-commerce store to $150K/month with 5.2x ROAS on Google Ads.'
    }
  }
];

async function seed() {
  try {
    console.log('Connecting to MongoDB Atlas (database_DB)...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB Atlas!');

    let inserted = 0;
    let updated = 0;

    for (const item of portfolioItems) {
      const res = await Portfolio.updateOne(
        { slug: item.slug },
        { $set: item },
        { upsert: true }
      );
      if (res.upsertedCount > 0) inserted++;
      else updated++;
    }

    console.log(`\n🎉 DONE! ${inserted} new portfolios inserted, ${updated} portfolios updated in 'portfolios' collection!`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding Error:', err);
    process.exit(1);
  }
}

seed();
