'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Counter } from '@/components/animations/counter';
import { STATS } from '@/lib/constants';

export function PartnerCounterBar() {
  return (
    <section id="partner-counter" className="py-8 sm:py-12 relative overflow-hidden bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)]/80 border border-[var(--border)] backdrop-blur-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10"
        >
          {/* Left: Google Partner Logo Frame */}
          <div className="shrink-0 flex items-center justify-center p-3 sm:p-4 rounded-xl border-2 border-slate-900 dark:border-white/20 bg-white shadow-sm w-full sm:w-auto min-w-[170px] max-w-[200px] h-[80px]">
            <Image
              src="/google_partner_logo.png"
              alt="Google Partner"
              width={160}
              height={60}
              className="w-auto h-11 object-contain"
              priority
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-[var(--border)] shrink-0" />

          {/* Right: 4 Animated Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full flex-1 text-center">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-number tracking-tight bg-gradient-to-r from-amber-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-none mb-2">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2 + index * 0.2}
                  />
                </p>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const ByTheNumbersPartner = PartnerCounterBar;
export default PartnerCounterBar;
