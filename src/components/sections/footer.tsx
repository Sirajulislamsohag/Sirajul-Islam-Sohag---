'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE_CONFIG, NAV_ITEMS, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import { Heart } from 'lucide-react';
import { SOCIAL_ICON_MAP } from '@/components/ui/social-icons';

export function Footer() {
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
          className="grid md:grid-cols-3 gap-12 mb-16"
        >
          {/* Column 1 - Brand */}
          <div className="footer-item">
            <Link href="/" className="text-2xl font-heading font-bold text-gradient inline-block mb-4">
              Sirajul
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => {
                const Icon = SOCIAL_ICON_MAP[name];
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                    title={name.charAt(0).toUpperCase() + name.slice(1)}
                  >
                    {Icon ? <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" /> : name[0].toUpperCase()}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="footer-item">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div className="footer-item">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">Navigation</h3>
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
