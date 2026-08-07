'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { Magnetic } from '@/components/animations/magnetic';
import { Button } from '@/components/ui/button';

interface PopMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PopMenu({ isOpen, onClose }: PopMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const menu = menuRef.current;
    const bg = bgRef.current;
    const links = linksRef.current;
    const social = socialRef.current;
    const closeBtn = closeBtnRef.current;
    if (!menu || !bg || !links || !social) return;

    const linkElements = links.querySelectorAll('.menu-link');
    const socialElements = social.querySelectorAll('.social-link');

    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .set(menu, { display: 'flex', pointerEvents: 'all' })
      .fromTo(
        bg,
        { clipPath: 'circle(0% at calc(100% - 50px) 40px)' },
        { clipPath: 'circle(150% at calc(100% - 50px) 40px)', duration: 0.8, ease: 'power4.inOut' }
      )
      .fromTo(
        closeBtn,
        { scale: 0, opacity: 0, rotate: -90 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.4'
      )
      .fromTo(
        linkElements,
        { y: 80, opacity: 0, rotateX: -45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.08, ease: 'power4.out' },
        '-=0.4'
      )
      .fromTo(
        socialElements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out' },
        '-=0.3'
      );

    return () => {
      tlRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      tlRef.current?.play();
      document.body.style.overflow = 'hidden';
    } else {
      tlRef.current?.reverse();
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[105] hidden items-center justify-center pointer-events-none"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[var(--bg)] dark:bg-dark"
        style={{ clipPath: 'circle(0% at calc(100% - 50px) 40px)' }}
      />

      {/* Close Button in Circle (Top Right) */}
      <div ref={closeBtnRef} className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <Magnetic strength={0.3}>
          <button
            onClick={onClose}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-primary/10 hover:border-primary flex items-center justify-center transition-all duration-300 shadow-xl group cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 md:w-7 md:h-7 text-[var(--text)] group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
          </button>
        </Magnetic>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full h-full px-6">
        {/* Links */}
        <div ref={linksRef} className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="menu-link group relative"
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-[var(--text)] transition-colors duration-300 group-hover:text-gradient inline-block">
                {item.label}
              </span>
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-sm font-number text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, '0')}
              </span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex items-center gap-6">
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors capitalize"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

