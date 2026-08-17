import { NavItem, Service, Review, TimelineItem } from '@/types';

export const SITE_CONFIG = {
  name: 'Sirajul',
  fullName: 'Sirajul Islam Sohag',
  title: 'Digital Marketing Consultant',
  description: 'Premium digital marketing consultant helping businesses generate leads, scale sales, and build their online presence through data-driven strategies.',
  email: 'sirajulislamshoag697@gmail.com',
  phone: '+880 1793859694',
  address: 'Dhaka, Bangladesh',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/siraj',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sirajmarketing.com',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const TYPING_ROLES = [
  'Google Ads Specialist',
  'Facebook Ads Expert',
  'SEO Specialist',
  'Performance Marketer',
  'Marketing Strategist',
  'Growth Consultant',
];

export const ORBIT_SKILLS = [
  { label: 'Google Ads', iconUrl: 'https://cdn.simpleicons.org/googleads/4285F4', color: '#4285F4' },
  { label: 'Meta Ads', iconUrl: 'https://cdn.simpleicons.org/meta/0668E1', color: '#0668E1' },
  { label: 'Google Analytics', iconUrl: 'https://cdn.simpleicons.org/googleanalytics/F59E0B', color: '#F59E0B' },
  { label: 'SEO', iconUrl: 'https://cdn.simpleicons.org/google/22C55E', color: '#22C55E' },
  { label: 'Mailchimp', iconUrl: 'https://cdn.simpleicons.org/mailchimp/FFE01B', color: '#FFE01B' },
  { label: 'HubSpot', iconUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59', color: '#FF7A59' },
];

export const STATS = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Completed', value: 200, suffix: '+' },
  { label: 'Happy Clients', value: 150, suffix: '+' },
  { label: 'Revenue Generated', value: 2.5, suffix: 'M+', prefix: '$' },
];

export const SERVICES: Service[] = [
  {
    id: 'google-ads',
    icon: 'Target',
    title: 'Google Ads Management',
    description: 'Data-driven Google Ads campaigns that maximize ROI. From Search to Performance Max, I optimize every dollar of your ad spend.',
    features: ['Search Campaigns', 'Performance Max', 'Display Network', 'YouTube Ads', 'Shopping Campaigns', 'Remarketing'],
  },
  {
    id: 'facebook-ads',
    icon: 'Megaphone',
    title: 'Facebook & Meta Ads',
    description: 'Strategic Facebook and Instagram advertising that reaches your ideal customers and drives conversions at scale.',
    features: ['Lead Generation', 'Conversion Campaigns', 'Retargeting', 'Lookalike Audiences', 'Creative Strategy', 'A/B Testing'],
  },
  {
    id: 'seo',
    icon: 'Search',
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies that improve your organic rankings, drive qualified traffic, and build long-term visibility.',
    features: ['Technical SEO', 'On-Page Optimization', 'Content Strategy', 'Link Building', 'Local SEO', 'SEO Audits'],
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Analytics & Tracking',
    description: 'Full-stack analytics setup with Google Analytics 4, Tag Manager, and conversion tracking for data-driven decisions.',
    features: ['GA4 Setup', 'GTM Implementation', 'Conversion Tracking', 'Custom Dashboards', 'Attribution Modeling', 'Data Analysis'],
  },
  {
    id: 'email-marketing',
    icon: 'Mail',
    title: 'Email Marketing',
    description: 'High-converting email campaigns and automation sequences that nurture leads and drive repeat purchases.',
    features: ['Campaign Strategy', 'Automation Flows', 'List Segmentation', 'A/B Testing', 'Template Design', 'Deliverability'],
  },
  {
    id: 'cro',
    icon: 'TrendingUp',
    title: 'Conversion Optimization',
    description: 'Data-backed CRO strategies that turn more visitors into customers through testing, analysis, and iterative improvements.',
    features: ['Landing Page Optimization', 'A/B Testing', 'Heat Map Analysis', 'User Journey Mapping', 'Funnel Optimization', 'UX Improvements'],
  },
];



export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Marketing Consultant',
    company: 'Freelance',
    description: 'Managing $500K+ monthly ad spend across Google & Meta for international clients. Specializing in e-commerce scaling and lead generation.',
  },
  {
    year: '2023',
    title: 'Digital Marketing Manager',
    company: 'Growth Agency',
    description: 'Led a team of 5 marketers, managed 30+ client accounts, and achieved average 4.2x ROAS across all campaigns.',
  },
  {
    year: '2022',
    title: 'PPC Specialist',
    company: 'Digital Studio',
    description: 'Specialized in Google Ads and Facebook Ads management. Reduced client CAC by 45% through data-driven optimization.',
  },
  {
    year: '2021',
    title: 'Marketing Executive',
    company: 'Startup Inc.',
    description: 'Built marketing infrastructure from ground up. Launched successful campaigns across multiple channels driving 300% growth.',
  },
  {
    year: '2020',
    title: 'Digital Marketing Intern',
    company: 'Agency Pro',
    description: 'Started career in digital marketing, learning the fundamentals of PPC, SEO, and analytics while managing small campaigns.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    company: 'TechScale Inc.',
    role: 'CEO',
    photo: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=4F46E5&color=fff&size=100',
    rating: 5,
    text: 'Sirajul transformed our Google Ads strategy completely. We went from burning $10K/month with no results to generating 5x ROAS within 60 days. His analytical approach is unmatched.',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    company: 'BeautyBox',
    role: 'Founder',
    photo: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=8B5CF6&color=fff&size=100',
    rating: 5,
    text: 'Working with Sirajul was a game-changer for our e-commerce brand. He scaled our Facebook Ads from $500/day to $5000/day while maintaining a profitable ROAS. Truly exceptional.',
  },
  {
    id: '3',
    name: 'Michael Roberts',
    company: 'LegalEase',
    role: 'Marketing Director',
    photo: 'https://ui-avatars.com/api/?name=Michael+Roberts&background=06B6D4&color=fff&size=100',
    rating: 5,
    text: 'Sirajul\'s SEO expertise helped us rank #1 for our most competitive keywords within 4 months. Our organic traffic increased by 340% and lead quality improved dramatically.',
  },
  {
    id: '4',
    name: 'Emily Park',
    company: 'FitLife',
    role: 'Co-Founder',
    photo: 'https://ui-avatars.com/api/?name=Emily+Park&background=22C55E&color=fff&size=100',
    rating: 5,
    text: 'The best marketing consultant we\'ve ever worked with. Sirajul doesn\'t just run ads — he builds entire growth systems. Our revenue tripled in 6 months.',
  },
  {
    id: '5',
    name: 'David Miller',
    company: 'PropTech Solutions',
    role: 'COO',
    photo: 'https://ui-avatars.com/api/?name=David+Miller&background=F59E0B&color=fff&size=100',
    rating: 5,
    text: 'Sirajul\'s data-driven approach to our PPC campaigns reduced our cost per lead by 62% while increasing lead volume by 180%. His weekly reports and optimization cadence are outstanding.',
  },
  {
    id: '6',
    name: 'Lisa Wang',
    company: 'EduTech Global',
    role: 'VP Marketing',
    photo: 'https://ui-avatars.com/api/?name=Lisa+Wang&background=EF4444&color=fff&size=100',
    rating: 5,
    text: 'From analytics setup to full-funnel campaign management, Sirajul handles everything with precision. He helped us build a marketing engine that now generates $200K+ monthly revenue.',
  },
];

export const TRUSTED_BRANDS = [
  { name: 'United Trailers', logo: '/logos/1785730667707_unitedtrailers_com_au_logo9_nobg.png' },
  { name: 'Peckphase', logo: '/logos/Peckphase_nobg.png' },
  { name: 'Anan Care Services', logo: '/logos/anancareservices_com_au_logo13_nobg.png' },
  { name: 'Asap Tars', logo: '/logos/asaptars_com_logo5_nobg.png' },
  { name: 'Drugstore Online', logo: '/logos/drugstoreonline_me_logo11_nobg.png' },
  { name: 'Engraved Anything', logo: '/logos/engravedanything_com_logo10_nobg.png' },
  { name: 'Fishing Tours', logo: '/logos/fishingtoursplayadelcarmen_com_logo13_nobg.png' },
  { name: 'Fresh Ausfluege', logo: '/logos/fresh_deutsche-ausfluege-mexiko_de_logo12_nobg.png' },
  { name: 'House of Appliances', logo: '/logos/houseofappliances_co_logo11_nobg.png' },
  { name: 'Leather Dot BD', logo: '/logos/leatherdotbd_com_logo5_nobg.png' },
  { name: 'Location Mobile Tire', logo: '/logos/locationmobiletire_com_logo9_nobg.png' },
  { name: 'Photo Reviser', logo: '/logos/photoreviser_com_logo84_nobg.png' },
  { name: 'Pirate Mobile', logo: '/logos/piratemobile_gg_logo15_nobg.png' },
  { name: 'Rdon Cleaning', logo: '/logos/rdoncleaning_com_logo11_nobg.png' },
  { name: 'RST Electrical', logo: '/logos/rstelectrical_co_logo5_nobg.png' },
];

export const SERVICE_OPTIONS = [
  'Google Ads Management',
  'Facebook & Meta Ads',
  'SEO Optimization',
  'Analytics & Tracking',
  'Email Marketing',
  'Conversion Optimization',
  'Full Marketing Strategy',
  'Other',
];

export const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not Sure',
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/sirajmarketing',
  instagram: 'https://instagram.com/sirajmarketing',
  linkedin: 'https://www.linkedin.com/in/sirajul-islam-sohag-04996428a/',
  twitter: 'https://twitter.com/sirajmarketing',
  youtube: 'https://youtube.com/@sirajmarketing',
  whatsapp: 'https://wa.me/8801234567890',
};

export const PORTFOLIO_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'facebook-ads', label: 'Facebook Ads' },
  { value: 'seo', label: 'SEO' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'branding', label: 'Branding' },
];
