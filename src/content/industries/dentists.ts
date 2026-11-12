import type { IndustryPage } from '../types';

export const dentists: IndustryPage = {
  slug: 'google-ads-for-dentists',
  name: 'Dentists',
  noun: 'dental practices',

  seoTitle: 'Google Ads for Dentists | Dental PPC & Appointments',
  metaDescription:
    'Google Ads for dentists designed around high-value treatments, local intent, call and form tracking, and campaign optimization to generate appointments.',
  imageAlt: 'Google Ads campaign for dental practices generating appointments',
  tags: ['Google Ads dentists', 'dental PPC', 'dental leads', 'appointment marketing', 'local PPC'],
  primaryKeyword: { keyword: 'google ads for dentists', sv: 590, kd: 42 },
  secondaryKeywords: [
    { keyword: 'dental google ads', sv: 390, kd: 39 },
    { keyword: 'dental ppc', sv: 320, kd: 37 },
    { keyword: 'ppc for dentists', sv: 260, kd: 35 },
  ],
  suggestedKeywords: ['dental implant google ads', 'dentist advertising google', 'dental practice lead generation', 'invisalign ppc', 'emergency dentist ads'],
  searchIntent: 'Commercial: dentists, practice owners and office managers looking for Google Ads management to book more patients.',

  h1: 'Google Ads for Dentists',
  heroHeadline: 'Dental PPC built around high-value treatments and booked appointments',
  heroText:
    'A new patient searching "dentist near me" and a patient searching "dental implants cost" are worth very different amounts to your practice. I build dental campaigns that separate general, emergency and high-value treatment searches, target the neighborhoods around your office, and track calls and appointment requests so you know what each new patient costs.',
  overview:
    'Google Ads for dentists should fill the chair with the treatments that matter most to your practice. Dental Google Ads campaigns for implants, Invisalign, emergency visits and new patients each need their own budget. PPC for dentists works when appointment requests are tracked from the click to the booked visit.',
  valueProps: [
    'Separate campaigns for implants, Invisalign, cosmetic, emergency and new patient searches',
    'Call tracking with duration filters and online booking tracking',
    'Ad copy that stays within healthcare advertising policies',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1777331903190-341a3dd0441b',
    alt: 'Dentist talking with a patient in a modern dental office',
    credit: 'https://unsplash.com/photos/dentist-talking-to-patient-in-a-modern-dental-office-Bg81yWKZlMg',
  },
  sectionImage: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    alt: 'Modern dental treatment room with chair and equipment',
    credit: 'https://unsplash.com/photos/modern-dental-office-with-chair-and-equipment-e7MJLM5VGjY',
  },

  challenges: [
    {
      title: 'Insurance and Medicaid searches',
      text: '"Dentist that accepts Medicaid" or "free dental clinic" searches bring patients your practice may not serve. Without filtering, they consume a large share of budget.',
    },
    {
      title: 'High-value treatments lost in general campaigns',
      text: 'Implants, veneers and clear aligners have high case values and expensive clicks. Mixed into a general dentist campaign, they never get the budget or landing pages they need.',
    },
    {
      title: 'Phone calls that go unanswered',
      text: 'Dental leads are mostly calls, often during lunch or after hours. Ads running when the front desk cannot answer waste money.',
    },
    {
      title: 'Healthcare advertising policies',
      text: 'Google restricts certain health claims and personalized targeting. Campaigns need to be built within those rules to avoid disapprovals.',
    },
    {
      title: 'Corporate dental chains',
      text: 'DSOs and chains bid heavily on local dental searches. Independent practices need sharper targeting and stronger trust signals to compete.',
    },
  ],

  strategy: [
    {
      title: 'Keyword research by treatment value',
      text: 'Dental searches are grouped into new patient and general dentistry, emergency dentistry, implants and restorative, clear aligners and orthodontics, cosmetic dentistry, and pediatric. Each has a different case value and gets its own budget.',
    },
    {
      title: 'Search campaigns first',
      text: 'Patients choose a dentist on Search and Maps. Campaigns begin with local new-patient and emergency searches plus the high-value treatments you want more of.',
    },
    {
      title: 'Campaign and ad group structure',
      text: 'One campaign per treatment category with tight ad groups, so an implant searcher sees an implant ad and lands on an implant page with pricing guidance and financing.',
    },
    {
      title: 'Dental ad copy',
      text: 'Ads highlight new patient specials where permitted, same-day emergency appointments, insurance accepted, financing, technology and reviews, all within Google\'s healthcare policies.',
    },
    {
      title: 'Location targeting',
      text: 'Most patients come from a short drive. Targeting focuses on ZIP codes around the office with presence-only settings, expanded slightly for high-value treatments people travel for.',
    },
    {
      title: 'Negative keywords',
      text: 'A dental negative list blocks free, Medicaid where not accepted, dental school, jobs, DIY and symptom-only searches, and grows weekly from search terms.',
    },
    {
      title: 'Budget and bidding',
      text: 'High-value treatment campaigns get higher cost-per-lead targets because the cases justify it. New-patient campaigns are optimized for cost per booked appointment.',
    },
    {
      title: 'Search term optimization',
      text: 'Weekly reviews move converting searches into keywords and cut the rest, especially the symptom and insurance searches that waste budget.',
    },
    {
      title: 'Landing page optimization',
      text: 'Treatment pages with before-and-after where allowed, financing, doctor bios, reviews, a tap-to-call button and online scheduling. The general new-patient page highlights convenience and trust.',
    },
  ],

  campaignExamples: [
    {
      campaign: 'New Patients - Search',
      goal: 'New patient appointment bookings',
      adGroups: [
        { name: 'Dentist Near Me', keywords: ['[dentist near me]', '"dentist in [city]"', '"family dentist near me"'] },
        { name: 'New Patient', keywords: ['"new patient dentist"', '"dentist accepting new patients"'] },
      ],
    },
    {
      campaign: 'Emergency Dentistry - Search',
      goal: 'Same-day emergency calls',
      adGroups: [
        { name: 'Emergency Dentist', keywords: ['[emergency dentist]', '"emergency dentist near me"', '"same day dentist"'] },
        { name: 'Tooth Pain', keywords: ['"toothache dentist"', '"broken tooth repair"'] },
      ],
    },
    {
      campaign: 'Dental Implants - Search',
      goal: 'Implant consultation requests',
      adGroups: [
        { name: 'Dental Implants', keywords: ['[dental implants]', '"dental implants near me"', '"dental implant cost"'] },
        { name: 'All-on-4', keywords: ['"all on 4 dental implants"', '"full mouth dental implants"'] },
      ],
    },
    {
      campaign: 'Clear Aligners and Cosmetic - Search',
      goal: 'Consultation bookings for elective treatments',
      adGroups: [
        { name: 'Invisalign', keywords: ['[invisalign]', '"invisalign dentist near me"', '"invisalign cost"'] },
        { name: 'Veneers', keywords: ['"porcelain veneers"', '"veneers near me"'] },
        { name: 'Teeth Whitening', keywords: ['"teeth whitening dentist"', '"professional teeth whitening near me"'] },
      ],
    },
  ],

  negativeKeywords: [
    'free',
    'medicaid',
    'dental school',
    'jobs',
    'salary',
    'hygienist program',
    'diy',
    'at home',
    'kit',
    'amazon',
    'walmart',
    'insurance plans',
    'how to',
    'symptoms',
    'reddit',
    'reviews',
    'lawsuit',
    'horror',
    'cheap',
    'coupon',
  ],

  locationTargeting: {
    intro:
      'Patients choose dentists close to home or work. Targeting should be tight for general dentistry and slightly wider for high-value treatments people are willing to travel for.',
    points: [
      'Target ZIP codes within a short drive of the office using "Presence" targeting.',
      'Expand targeting modestly for implants, All-on-4 and cosmetic campaigns where patients travel further.',
      'Raise bids in neighborhoods with demographics that match your ideal patient profile, based on performance data rather than assumptions.',
      'Link Google Business Profile so ads show your address, hours and reviews.',
      'For multi-location practices, run a campaign per office with its own landing page.',
    ],
  },

  conversionJourney: [
    'Google Ads click',
    'Phone call or online appointment request',
    'Qualified lead (in area, treatment you offer, insurance fit)',
    'Appointment booked',
    'Patient seen and treatment accepted',
    'Case value and lifetime patient value',
  ],
  trackingText:
    'Dental leads are mostly phone calls, so call tracking with duration thresholds comes first. Online scheduling tools and web forms are tracked through Google Tag Manager, and GA4 records every action. Where your practice management software or a tool like Weave, NexHealth or a call-tracking platform can export booked appointments, I add offline conversion tracking so Google Ads optimizes for booked patients and treatment value instead of all calls.',

  subcategories: [
    { title: 'General and family dentistry', text: 'New patient acquisition, cleanings and checkups. High volume, local intent.' },
    { title: 'Emergency dentistry', text: 'Urgent searches with immediate call intent, often outside office hours.' },
    { title: 'Implants and restorative', text: 'High case values and expensive clicks. Needs dedicated campaigns and landing pages.' },
    { title: 'Orthodontics and clear aligners', text: 'Invisalign and braces searches from adults and parents, with financing as a key message.' },
    { title: 'Cosmetic dentistry', text: 'Veneers, whitening and smile makeovers. Elective, image-driven and competitive.' },
    { title: 'Pediatric and specialty practices', text: 'Pediatric, periodontal, endodontic and oral surgery practices with specific search behavior.' },
  ],

  faqs: [
    {
      question: 'How much should a dental practice spend on Google Ads?',
      answer:
        'It depends on your market and which treatments you promote. Implant and cosmetic campaigns in a major metro need more budget than a new-patient campaign in a smaller town. I recommend a starting budget after reviewing your competition in the free audit.',
    },
    {
      question: 'Can Google Ads bring dental implant patients?',
      answer:
        'Yes. Implant searches are high intent and high value. A dedicated campaign with a landing page covering cost, financing and the procedure usually performs much better than a general dental campaign.',
    },
    {
      question: 'How do you avoid Medicaid or insurance-only searches we cannot serve?',
      answer:
        'With negative keywords for insurance types you do not accept, ad copy that states which plans you take, and landing pages that make the fit clear before the call.',
    },
    {
      question: 'Do you track phone calls?',
      answer:
        'Yes. Calls from ads and from your website are tracked with a minimum duration so hang-ups and spam do not count as conversions.',
    },
    {
      question: 'Are there restrictions on dental advertising in Google Ads?',
      answer:
        'Yes. Healthcare advertising policies restrict some claims and targeting options. Campaigns are built within those rules to avoid disapprovals and account issues.',
    },
    {
      question: 'Should I run ads when the office is closed?',
      answer:
        'Emergency campaigns can run after hours if calls are answered by an on-call line or answering service. Otherwise, ads are scheduled for the hours your front desk is available.',
    },
    {
      question: 'How fast will we see new patients?',
      answer:
        'New-patient and emergency campaigns can produce calls in the first week. Implant and cosmetic leads take longer because patients compare options, but they are worth far more.',
    },
    {
      question: 'Do you work with multi-location dental groups?',
      answer:
        'Yes. Each office gets its own campaigns, targeting, landing page and reporting so performance can be compared by location.',
    },
  ],

  finalCta: {
    heading: 'Get a free Google Ads audit for your dental practice',
    text: 'I will review your campaigns, search terms, call tracking and treatment landing pages and show you where new patients are being missed.',
  },

  relatedServices: ['google-ads-management', 'google-ads-conversion-tracking', 'google-search-ads', 'google-ads-audit'],
  relatedIndustries: ['google-ads-for-local-businesses', 'google-ads-for-law-firms', 'google-ads-for-home-services', 'google-ads-for-cleaning-businesses'],
};
