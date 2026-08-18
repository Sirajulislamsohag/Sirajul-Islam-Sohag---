'use client';

import { useRef, useState } from 'react';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = '/video/Introduction Video-Google Ads Expert.mp4';

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--bg-card)]/30 to-transparent border-y border-[var(--border)]/40">
      {/* Ambient soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TextReveal
            as="p"
            variant="fade-up"
            className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Video Introduction
          </TextReveal>

          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            See the Strategy in Action
          </TextReveal>

          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Watch how data-driven Google Ads setup, server-side tracking, and campaign optimization scale high-ticket leads and profitable revenue.
          </TextReveal>
        </div>

        {/* Video Player Box */}
        <ScrollReveal delay={0.3}>
          <div className="relative group max-w-5xl mx-auto">
            {/* Video Container Card */}
            <div
              className="relative aspect-video rounded-3xl overflow-hidden bg-dark border border-[var(--border)] group-hover:border-primary/40 shadow-2xl cursor-pointer"
              onClick={togglePlay}
            >
              {/* HTML5 Native Video Tag */}
              <video
                ref={videoRef}
                src={videoSrc}
                preload="metadata"
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Big Center Play Button Overlay (fades out when playing) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-110 hover:bg-primary-hover active:scale-95 transition-all duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 fill-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Feature Highlights Below Video - Full Theme Support (Dark & Light) */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-heading font-bold text-[var(--text)]">Granular Search & PMax</h4>
                  <p className="text-xs text-[var(--text-secondary)]">High-intent bid targeting</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-heading font-bold text-[var(--text)]">Server-Side Tracking</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Meta CAPI & GA4 server tags</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-heading font-bold text-[var(--text)]">Continuous ROI Scaling</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Negative keywords & CRO</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
