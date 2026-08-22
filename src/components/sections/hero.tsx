'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Magnetic } from '@/components/animations/magnetic';
import { Typing } from '@/components/animations/typing';
import { Counter } from '@/components/animations/counter';
import { AuroraBg } from '@/components/effects/aurora-bg';
import { HeroParticles } from '@/components/effects/hero-particles';
import { TYPING_ROLES, ORBIT_SKILLS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

const CLIENT_AVATARS = [
  { name: 'Alex Thompson', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80' },
  { name: 'Sarah Chen', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80' },
  { name: 'Michael Roberts', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80' },
  { name: 'Emily Park', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(150); // 220px avatar (110px radius + 40px gap)
      } else if (w < 640) {
        setRadius(168); // 250px avatar (125px radius + 43px gap)
      } else if (w < 768) {
        setRadius(185); // 280px avatar (140px radius + 45px gap)
      } else if (w < 1024) {
        setRadius(205); // 320px avatar on 1-col tablet
      } else if (w < 1168) {
        setRadius(216); // 340px big avatar on 2-col compact laptop (170px radius + 46px gap - completely outside image)
      } else if (w < 1280) {
        setRadius(228); // 360px big avatar on 2-col medium laptop (180px radius + 48px gap)
      } else if (w < 1536) {
        setRadius(242); // 380px avatar on standard desktop
      } else {
        setRadius(265); // 420px avatar on wide desktop
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tl.from(headingRef.current, { y: 100, opacity: 0, duration: 1.2, delay: 0.3 })
      .from(contentRef.current?.querySelectorAll('.hero-animate') || [], {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
      }, '-=0.6')
      .from(imageRef.current, {
        scale: 0.8, opacity: 0, duration: 1, ease: 'back.out(1.7)',
      }, '-=0.8')
      .from(orbitRef.current?.querySelectorAll('.orbit-item') || [], {
        scale: 0, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(2)',
      }, '-=0.5')
      .from(statsRef.current, {
        y: 30, opacity: 0, duration: 0.8,
      }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 lg:pb-0 h-auto"
    >
      {/* Background */}
      <AuroraBg />
      <HeroParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] xl:grid-cols-2 gap-8 lg:gap-6 xl:gap-16 items-center">
          {/* Left Column (Heading & CTAs) */}
          <div ref={contentRef} className="order-2 lg:order-1 space-y-8">
            <Badge variant="glow" className="hero-animate">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for New Clients
            </Badge>

            <div>
              <p className="hero-animate text-lg text-[var(--text-secondary)] mb-2">Hello, I'm</p>
              <h1
                ref={headingRef}
                className="hero-heading"
              >
                <span className="text-gradient">Sirajul Islam Sohag</span>
              </h1>
              <div className="hero-animate mt-4 text-xl md:text-2xl font-heading text-[var(--text-secondary)]">
                <Typing words={TYPING_ROLES} />
              </div>
            </div>

            <p className="hero-animate text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg">
              I help home service, local service, and e-commerce businesses turn ad spend into qualified leads and revenue through data-driven Google Ads strategy.
            </p>

            <div className="hero-animate flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <Link href="#contact" className="w-full sm:w-auto shrink-0">
                <Magnetic className="w-full sm:w-auto block sm:inline-block">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full px-5 py-3.5 sm:px-6 sm:py-3.5 xl:px-8 xl:py-4 text-sm sm:text-base xl:text-lg whitespace-nowrap shadow-xl shadow-primary/25 hover:shadow-primary/40" 
                    icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                  >
                    Book Free Consultation
                  </Button>
                </Magnetic>
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto shrink-0">
                <Magnetic className="w-full sm:w-auto block sm:inline-block">
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full px-5 py-3.5 sm:px-6 sm:py-3.5 xl:px-8 xl:py-4 text-sm sm:text-base xl:text-lg whitespace-nowrap" 
                    icon={<Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />}
                  >
                    View Portfolio
                  </Button>
                </Magnetic>
              </Link>
            </div>
          </div>

          {/* Right Column (Profile Image & Orbit) */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center py-4 sm:py-6 lg:py-0 w-full overflow-visible my-10 lg:my-0 ">
            {/* Profile Image with Orbit */}
            <div 
              ref={imageRef} 
              className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] min-[1168px]:w-[360px] min-[1168px]:h-[360px] xl:w-[380px] xl:h-[380px] 2xl:w-[420px] 2xl:h-[420px] shrink-0"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-2xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/siraj.webp"
                  alt="Sirajul Islam Sohag - Digital Marketing Consultant"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 270px, (max-width: 1024px) 340px, 420px"
                />
              </div>

              {/* Orbit Skills */}
              <div 
                ref={orbitRef} 
                className="absolute inset-0 pointer-events-none"
                style={{ animation: 'spin 30s linear infinite' }}
              >
                {ORBIT_SKILLS.map((skill, index) => {
                  const angle = (index * 360) / ORBIT_SKILLS.length;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={skill.label}
                      className="orbit-item absolute pointer-events-auto"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      {/* Center alignment wrapper */}
                      <div className="-translate-x-1/2 -translate-y-1/2">
                        {/* Counter-rotation wrapper */}
                        <div style={{ animation: 'spin 30s linear infinite reverse' }}>
                          <div
                            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full glass shadow-lg hover:scale-110 transition-transform duration-300 relative group cursor-pointer"
                          style={{ 
                            borderColor: `${skill.color}40`,
                            boxShadow: `0 0 20px ${skill.color}20`
                          }}
                        >
                          <img 
                            src={skill.iconUrl} 
                            alt={skill.label}
                            className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 object-contain"
                          />
                          {/* Tooltip on hover */}
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--bg-card)] border border-[var(--border)] rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {skill.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>

            {/* Stats Card */}
            <div
              ref={statsRef}
              className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:right-2 md:right-4 xl:right-6 glass-card p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-3 rounded-2xl shadow-xl border border-white/20 dark:border-white/10 z-20"
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                {CLIENT_AVATARS.map((client) => (
                  <div
                    key={client.name}
                    className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[var(--bg-card)] overflow-hidden shrink-0 shadow-sm"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-warning text-xs sm:text-sm">★</span>
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)]">
                  <Counter value={15000} suffix="+" className="font-bold text-[var(--text)]" /> Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
