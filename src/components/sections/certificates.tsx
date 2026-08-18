'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltCard } from '@/components/animations/tilt-card';
import { TextReveal } from '@/components/animations/text-reveal';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    id: '1',
    title: 'Google Ads Search Certification',
    org: 'Google',
    date: '2024',
    color: '#4285F4',
    credentialUrl: 'https://skillshop.credential.net/d0737662-b9d7-46d1-aa54-0ac6bc36313e#acc.qVHi6uzn',
    image: '/certificates/google-ads-search.jpg',
  },
  {
    id: '2',
    title: 'Google Ads Display Certification',
    org: 'Google',
    date: '2024',
    color: '#34A853',
    credentialUrl: 'https://skillshop.credential.net/54395ced-af9a-483a-b993-0bc541eb40a8',
    image: '/certificates/google-ads-display.jpg',
  },
  {
    id: '3',
    title: 'Google Ads Video Certification',
    org: 'Google',
    date: '2024',
    color: '#EA4335',
    credentialUrl: 'https://skillshop.credential.net/df9cb452-cffd-4b70-a0e6-ceef5dca09b0',
    image: '/certificates/google-ads-video.jpg',
  },
  {
    id: '4',
    title: 'Google Ads - Measurement Certification',
    org: 'Google',
    date: '2024',
    color: '#FBBC05',
    credentialUrl: 'https://skillshop.credential.net/dbe97c66-6306-4406-89f0-301755aaa1b3',
    image: '/certificates/google-ads-measurement.jpg',
  },
  {
    id: '5',
    title: 'AI-Powered Performance Ads Certification',
    org: 'Google',
    date: '2024',
    color: '#8B5CF6',
    credentialUrl: 'https://skillshop.credential.net/d9f29068-aea3-4614-8472-629b886d32c1',
    image: '/certificates/ai-powered-performance.jpg',
  },
  {
    id: '6',
    title: 'Google Analytics Certification',
    org: 'Google',
    date: '2024',
    color: '#F59E0B',
    credentialUrl: 'https://skillshop.credential.net/4f913c6b-ea69-4fa9-8993-7753b2cd7024',
    image: '/certificates/google-analytics.jpg',
  },
  {
    id: '7',
    title: 'AI-Powered Shopping ads Certification',
    org: 'Google',
    date: '2024',
    color: '#06B6D4',
    credentialUrl: 'https://skillshop.credential.net/4a2ba8d8-ea2f-4ed9-8255-9dd4a43af864',
    image: '/certificates/ai-powered-shopping.jpg',
  },
];

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<any[]>(CERTIFICATES);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  useEffect(() => {
    async function loadDynamicCertificates() {
      try {
        const res = await fetch('/api/certificates?limit=20');
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mapped = data.data.map((item: any, idx: number) => ({
            id: item._id,
            title: item.title,
            org: item.issuer || item.issuingOrg || 'Google',
            date: item.date || item.issueDate || '2024',
            color: item.color || ['#4285F4', '#34A853', '#EA4335', '#FBBC05', '#8B5CF6', '#F59E0B', '#06B6D4'][idx % 7],
            credentialUrl: item.url || item.credentialUrl || '#',
            image: item.image || '/certificates/google-ads-search.jpg',
            description: item.description || '',
          }));
          setList(mapped);
        }
      } catch (err) {
        console.warn('Fallback to static certificates:', err);
      }
    }
    loadDynamicCertificates();
  }, []);

  // Handle Escape key and overflow lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };

    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  useGSAP(() => {
    if (!cardsRef.current || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = gsap.utils.toArray<HTMLElement>(cardsRef.current.querySelectorAll('.cert-card'));

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];

      gsap.to(card, {
        scale: 0.9 - (cards.length - index) * 0.02,
         
        transformOrigin: 'center top',
        ease: 'none',
        scrollTrigger: {
          trigger: nextCard,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      });
    });
  }, { scope: sectionRef, dependencies: [list] });

  return (
    <section ref={sectionRef} id="certificates" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Credentials
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading">
            Certifications & Awards
          </TextReveal>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="space-y-6">
          {list.map((cert) => (
            <div
              key={cert.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="cert-card sticky top-24 block group text-left cursor-pointer select-none"
            >
              <TiltCard maxTilt={3}>
                <div
                  className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover-glow transition-all duration-300 group-hover:border-primary/50"
                  style={{ boxShadow: `0 0 0 1px ${cert.color}20` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                    {/* Badge Icon */}
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Award className="w-7 h-7 md:w-8 md:h-8" style={{ color: cert.color }} />
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm md:text-base">{cert.org}</p>
                      <p className="text-xs md:text-sm text-[var(--text-muted)] font-number mt-1">{cert.date}</p>
                      {cert.description && (
                        <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-2 leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {/* Right Side Certificate Image */}
                    {cert.image && (
                      <div className="relative w-full md:w-64 h-48 md:h-40 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black/40 shadow-inner group-hover:border-primary/40 transition-colors">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 256px"
                        />
                      </div>
                    )}

                    {/* External Link Icon */}
                    {cert.credentialUrl && cert.credentialUrl !== '#' && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all shrink-0 hidden md:flex items-center justify-center"
                        title="Open Credential Verification"
                      >
                        <ExternalLink className="w-5 h-5 text-[var(--text-muted)] hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center cursor-default"
            >
              {/* Top Close / Cancel Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 md:-top-4 md:-right-14 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg cursor-pointer group"
                aria-label="Cancel and close"
                title="Cancel (Esc)"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* Certificate Image Only */}
              <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title || 'Certificate'}
                  className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl select-none"
                />
              </div>

              {/* Bottom Cancel Button */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setSelectedCert(null)}
                  icon={<X className="w-4 h-4" />}
                  className="rounded-full px-6 py-2 bg-white/10 hover:bg-white/20 text-white border-white/20 text-xs font-medium cursor-pointer"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

