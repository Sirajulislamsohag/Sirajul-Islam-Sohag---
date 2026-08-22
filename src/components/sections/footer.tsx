'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE_CONFIG, NAV_ITEMS, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import { Heart } from 'lucide-react';
import { SOCIAL_ICON_MAP } from '@/components/ui/social-icons';
import { useCalendly } from '@/providers/calendly-provider';
const services = [
  "Google Ads Search Campaigns",
  "Performance Max & Shopping",
  "Display & YouTube Advertising",
  "Analytics & Conversion Tracking",
  "Conversion Rate Optimization",
  "Performance Strategy & Reporting",
];
export function Footer() {
  const { openCalendly } = useCalendly();
  return (
    <footer className="relative bg-dark text-white border-t border-[var(--border)]">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -20px 0px' }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16"
        >
          {/* Column 1 - Brand */}
          <div className="footer-item">
            <Link href="/" className="text-2xl font-heading font-bold text-gradient inline-block mb-4">
              Sirajul Islam Sohag
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3 pt-1">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => {
                const Icon = SOCIAL_ICON_MAP[name];
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 flex items-center justify-center text-white/80 hover:text-primary hover:border-primary/50 transition-all duration-300 group shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.18),inset_0_-2px_4px_0_rgba(0,0,0,0.7),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.3),inset_0_-2px_6px_0_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.25)] active:scale-95 active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.9)] cursor-pointer"
                    title={name.charAt(0).toUpperCase() + name.slice(1)}
                  >
                    {Icon ? <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" /> : name[0].toUpperCase()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="footer-item">
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service,index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div className="footer-item">
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-4 ">Navigation</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Get In Touch (Reference Photo) */}
          <div className="footer-item space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500 font-bold mb-4">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp || 'https://wa.me/8801793859694'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openCalendly()}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Book a Free Call
                </button>
              </li>
            </ul>

            {/* Available for New Clients Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#052e16]/80 border border-[#166534] text-[#22c55e] text-xs font-semibold shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse" />
                Available for New Clients
              </div>
            </div>
            {/* Log In  */}
                 {/* Log In  */}
            <div className="admin">
              <Link
                href="/login"
                className="text-sm text-primary transition-colors"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Brand Reveal */}
        <div className="flex items-center justify-center overflow-hidden py-8">
          <h2 className="text-[15vw] font-heading font-black leading-[0.8] uppercase tracking-tighter text-white/5">
            Sirajul
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-danger" /> by Sirajul
          </p>
        </div>
      </div>
    </footer>
  );
}
