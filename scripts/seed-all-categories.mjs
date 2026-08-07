import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://arifhossainaslam6_db_user:frfrsYHduNyXjdxh@clusterdb.nabjjrb.mongodb.net/database_DB?appName=ClusterDB';

const itemsToSeed = [
  // Facebook Ads
  {
    title: 'B2B SaaS Lead Generation Machine',
    slug: 'b2b-saas-lead-generation-machine',
    category: 'facebook-ads',
    description: 'Built a full-funnel Meta Ads lead generation system for an enterprise SaaS platform, leveraging dynamic instant lead forms, video testimonials, and hyper-targeted retargeting.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Meta Ads', 'Lead Gen', 'Retargeting', 'SaaS'],
    metrics: [
      { label: 'Leads / Month', value: '500+' },
      { label: 'CPL Reduction', value: '62%' }
    ],
    seo: {
      metaTitle: 'B2B SaaS Meta Ads Case Study',
      metaDescription: 'How Meta Ads generated 500+ qualified B2B SaaS leads per month.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'DTC Skincare Brand Revenue Scaling',
    slug: 'dtc-skincare-brand-revenue-scaling',
    category: 'facebook-ads',
    description: 'Launched and scaled an e-commerce DTC skincare brand from zero to $80K first-month revenue through viral UGC video creatives and high-converting Lookalike Audiences.',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Meta Ads', 'DTC', 'Creative Scaling', 'Instagram'],
    metrics: [
      { label: 'First Month Revenue', value: '$80K' },
      { label: 'ROAS', value: '4.8x' }
    ],
    seo: {
      metaTitle: 'DTC Skincare Meta Ads Scaling',
      metaDescription: 'Scaling a new DTC skincare brand to $80K first-month revenue via Meta Ads.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Global Apparel Brand Catalog Scaling',
    slug: 'global-apparel-brand-catalog-scaling',
    category: 'facebook-ads',
    description: 'Scaled international e-commerce apparel company to $210K monthly revenue using Dynamic Product Ads (DPA) and Advantage+ Shopping campaigns across US & EU markets.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    featured: false,
    tags: ['Meta Ads', 'Catalog Sales', 'DPA', 'International'],
    metrics: [
      { label: 'Monthly Revenue', value: '$210K' },
      { label: 'Blended ROAS', value: '4.1x' }
    ],
    seo: {
      metaTitle: 'Global Fashion Catalog Meta Ads Case Study',
      metaDescription: 'E-commerce fashion brand scaling to $210K/month using Meta Advantage+ Shopping.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // SEO
  {
    title: '340% Organic Traffic Growth Strategy',
    slug: '340-organic-traffic-growth-strategy',
    category: 'seo',
    description: 'Achieved 340% organic traffic explosion and top 3 rankings for 50+ high-volume competitive keywords through technical audits, topical authority hubs, and contextual link building.',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Technical SEO', 'Content Strategy', 'Link Building'],
    metrics: [
      { label: 'Traffic Growth', value: '340%' },
      { label: 'Top 3 Keywords', value: '50+' }
    ],
    seo: {
      metaTitle: '340% Organic Search Growth SEO Case Study',
      metaDescription: 'Technical & content SEO campaign driving 340% traffic increase and 50+ top rankings.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Local Service Google Map Pack Domination',
    slug: 'local-service-google-map-pack-domination',
    category: 'seo',
    description: 'Helped a multi-location home service contractor dominate Google Map Pack (#1 rank) and organic search across 5 major metropolitan markets, driving massive phone call growth.',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Local SEO', 'Google Maps', 'GMB', 'Reviews'],
    metrics: [
      { label: 'Map Pack Rank', value: '#1' },
      { label: 'Inbound Calls', value: '+280%' }
    ],
    seo: {
      metaTitle: 'Local SEO & Google Maps Domination Case Study',
      metaDescription: 'How Local SEO achieved #1 Google Map Pack rank and 280% phone call increase.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Enterprise B2B SaaS Organic Revenue Scaling',
    slug: 'enterprise-b2b-saas-organic-revenue-scaling',
    category: 'seo',
    description: 'Grew organic search sales pipeline from $200K to $1.2M ARR by building programmatic SEO landing pages and eliminating crawl budget bottlenecks.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    featured: false,
    tags: ['Programmatic SEO', 'SaaS', 'B2B Growth'],
    metrics: [
      { label: 'Organic ARR', value: '$1.2M' },
      { label: 'Domain Rank', value: '68' }
    ],
    seo: {
      metaTitle: 'Enterprise B2B SaaS SEO Case Study',
      metaDescription: 'Scaling B2B SaaS organic search ARR to $1.2M with programmatic SEO.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Analytics
  {
    title: 'Full-Stack GA4 & GTM Infrastructure Setup',
    slug: 'full-stack-ga4-gtm-infrastructure-setup',
    category: 'analytics',
    description: 'Implemented enterprise-grade analytics tracking using Google Analytics 4, Google Tag Manager, custom data layers, and Looker Studio real-time executive dashboards.',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['GA4', 'GTM', 'Looker Studio', 'DataLayer'],
    metrics: [
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Events Tracked', value: '1.5M+' }
    ],
    seo: {
      metaTitle: 'GA4 & GTM Full-Stack Analytics Case Study',
      metaDescription: 'Enterprise Google Analytics 4 & GTM implementation delivering 99.8% data accuracy.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Server-Side GTM & Meta CAPI Data Recovery',
    slug: 'server-side-gtm-meta-capi-data-recovery',
    category: 'analytics',
    description: 'Deployed server-side GTM with Meta Conversion API and Stape.io to recover 35% lost conversion data caused by iOS 14+ privacy tracking restrictions.',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    featured: false,
    tags: ['Server-Side GTM', 'Meta CAPI', 'Attribution'],
    metrics: [
      { label: 'Data Recovery', value: '+35%' },
      { label: 'Match Quality', value: '9.2/10' }
    ],
    seo: {
      metaTitle: 'Server-Side GTM & Meta CAPI Data Recovery',
      metaDescription: 'Recovering 35% lost ad conversions with Server-Side GTM and Meta Conversion API.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Branding
  {
    title: 'FinTech Platform Global Brand Identity',
    slug: 'fintech-platform-global-brand-identity',
    category: 'branding',
    description: 'Created a comprehensive brand identity, logo design system, color palette, and corporate design guidelines for a next-gen FinTech startup preparing for Series A funding.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Brand Identity', 'Logo System', 'Visual Guidelines'],
    metrics: [
      { label: 'Brand Awareness', value: '+300%' },
      { label: 'Investor Funding', value: '$4.5M' }
    ],
    seo: {
      metaTitle: 'FinTech Brand Identity Design Case Study',
      metaDescription: 'Brand identity & visual design system for a FinTech platform securing $4.5M funding.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Luxury Lifestyle E-Commerce Rebranding',
    slug: 'luxury-lifestyle-e-commerce-rebranding',
    category: 'branding',
    description: 'Executed complete brand refresh including luxury typography, sustainable packaging design, and high-end UI design system for a premium lifestyle goods company.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
    featured: false,
    tags: ['Rebranding', 'Typography', 'Brand Strategy'],
    metrics: [
      { label: 'Customer Trust', value: '98%' },
      { label: 'Avg Order Value', value: '+75%' }
    ],
    seo: {
      metaTitle: 'Luxury E-Commerce Rebranding Case Study',
      metaDescription: 'Luxury brand refresh increasing Average Order Value (AOV) by 75%.'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

async function run() {
  try {
    console.log('Connecting to MongoDB Atlas (database_DB)...');
    await mongoose.connect(MONGODB_URI);
    const db = mongoose.connection.db;
    const collection = db.collection('portfolios');

    let inserted = 0;
    let updated = 0;

    for (const item of itemsToSeed) {
      const res = await collection.updateOne(
        { slug: item.slug },
        { $set: item },
        { upsert: true }
      );
      if (res.upsertedCount > 0) inserted++;
      else updated++;
    }

    console.log(`\n🎉 SUCCESS! Inserted ${inserted} new portfolios and updated ${updated} existing portfolios in 'database_DB' -> 'portfolios' collection.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding Error:', err);
    process.exit(1);
  }
}

run();
