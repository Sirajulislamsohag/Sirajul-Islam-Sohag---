'use client';

import { useState } from 'react';
import { Mail, Phone, Calendar, Sparkles, CheckCircle2, Clock, Video, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { SOCIAL_ICON_MAP } from '@/components/ui/social-icons';

interface ContactCalendlyProps {
  id?: string;
  calendlyUrl?: string;
}

export function ContactCalendly({
  id = 'contact',
  calendlyUrl,
}: ContactCalendlyProps) {
  const [loading, setLoading] = useState(true);

  const rawUrl = calendlyUrl || SITE_CONFIG.calendlyUrl || 'https://calendly.com/siraj';
  const embedUrl = rawUrl.includes('?')
    ? `${rawUrl}&hide_gdpr_banner=1`
    : `${rawUrl}?hide_gdpr_banner=1`;

  const PERKS = [
    { title: 'Free 30-Min Strategy Call', desc: 'Direct 1-on-1 consultation to audit your current ad accounts.' },
    { title: 'Tailored Growth Roadmap', desc: 'Actionable steps to lower cost per lead and increase ROAS.' },
    { title: 'Zero Obligation', desc: 'Transparent advice with no pushy sales tactics.' },
  ];

  return (
    <section id={id} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Schedule A Consultation
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Let's Grow Your Business
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Ready to scale? Select a convenient time on my calendar below to discuss your marketing goals and campaign strategy.
          </TextReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Contact Info & Call Highlights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card */}
            <ScrollReveal>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal delay={0.1}>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Phone</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Strategy Call Value Card */}
            <ScrollReveal delay={0.2}>
              <Card variant="glass" className="p-6 border-primary/20 bg-primary/[0.02]">
                <div className="flex items-center gap-2 text-primary font-heading font-bold text-base mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>What to Expect on the Call</span>
                </div>
                <div className="space-y-3.5">
                  {PERKS.map((perk) => (
                    <div key={perk.title} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text)]">{perk.title}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 30 Minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" /> Google Meet / Zoom
                  </span>
                </div>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.3}>
              <div className="flex gap-3">
                {Object.entries(SOCIAL_LINKS).map(([name, url]) => {
                  const Icon = SOCIAL_ICON_MAP[name];
                  return (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center hover:border-primary hover:text-primary transition-all group shadow-inner"
                      title={name.charAt(0).toUpperCase() + name.slice(1)}
                    >
                      {Icon ? <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" /> : name[0].toUpperCase()}
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Embedded Calendly Widget */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <Card variant="glass" className="overflow-hidden p-0 border border-[var(--border)] shadow-2xl rounded-3xl">
                {/* Widget Top Bar */}
                <div className="p-4 sm:p-5 border-b border-[var(--border)] flex items-center justify-between bg-[var(--bg)]/60 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-heading font-bold text-[var(--text)]">
                        Select a Date & Time
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Real-time availability synced with Sirajul's calendar
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Calendar
                  </span>
                </div>

                {/* Calendly iFrame Container */}
                <div className="relative min-h-[620px] sm:min-h-[680px] w-full bg-[var(--bg)]">
                  {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[var(--bg)] z-10">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <p className="text-xs text-[var(--text-secondary)]">Loading available time slots...</p>
                    </div>
                  )}

                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Strategy Session"
                    className="w-full h-full min-h-[620px] sm:min-h-[680px]"
                    onLoad={() => setLoading(false)}
                  />
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCalendly;
