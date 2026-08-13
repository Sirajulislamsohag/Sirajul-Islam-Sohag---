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
  const [radius, setRadius] = useState(240); // Default desktop radius (outside 200px image)

  useEffect(() => {
    const handleResize = () => {
      // Mobile image radius is 150px, Desktop is 200px.
      // We add ~40px to place icons outside the border.
      setRadius(window.innerWidth < 768 ? 190 : 240);
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
      className="relative min-h-screen flex items-center overflow-hidden pt-20 h-auto"
    >
      {/* Background */}
      <AuroraBg />
      <HeroParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div ref={contentRef} className="space-y-8">
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
                <span className="text-gradient">Sirajul</span>
              </h1>
              <div className="hero-animate mt-4 text-xl md:text-2xl font-heading text-[var(--text-secondary)]">
                <Typing words={TYPING_ROLES} />
              </div>
            </div>

            <p className="hero-animate text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg">
              I help businesses generate leads, scale sales, and build their online presence through data-driven digital marketing strategies that deliver measurable ROI.
            </p>

            <div className="hero-animate flex   gap-4">
              <Link href="#contact" className="w-full sm:w-auto">
                <Magnetic>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg" 
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Book Free Consultation
                  </Button>
                </Magnetic>
              </Link>
              <Link href="#portfolio" className="w-full sm:w-auto">
                <Magnetic>
                  <Button 
                    variant="glass" 
                    size="lg" 
                    className="w-full sm:w-auto rounded-full px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg" 
                    icon={<Play className="w-5 h-5 fill-current" />}
                  >
                    View Portfolio
                  </Button>
                </Magnetic>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex items-center justify-center">
            {/* Profile Image with Orbit */}
            <div ref={imageRef} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-2xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image
                  src="/Siraj.jpeg"
                  alt="Sirajul Islam Sohag - Digital Marketing Consultant"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>

              {/* Orbit Skills */}
              <div 
                ref={orbitRef} 
                className="absolute inset-0"
                style={{ animation: 'spin 30s linear infinite' }}
              >
                {ORBIT_SKILLS.map((skill, index) => {
                  const angle = (index * 360) / ORBIT_SKILLS.length;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={skill.label}
                      className="orbit-item absolute"
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
                            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full glass shadow-lg hover:scale-110 transition-transform duration-300 relative group cursor-pointer"
                          style={{ 
                            borderColor: `${skill.color}40`,
                            boxShadow: `0 0 20px ${skill.color}20`
                          }}
                        >
                          <img 
                            src={skill.iconUrl} 
                            alt={skill.label}
                            className="w-6 h-6 md:w-7 md:h-7 object-contain"
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
              className="absolute -bottom-4 right-0 md:right-8 glass-card p-4 flex items-center gap-3"
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                {CLIENT_AVATARS.map((client) => (
                  <div
                    key={client.name}
                    className="relative w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[var(--bg-card)] overflow-hidden shrink-0 shadow-sm"
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
                    <span key={i} className="text-warning text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <Counter value={150} suffix="+" className="font-bold text-[var(--text)]" /> Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
