'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { useTheme } from '@/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/animations/magnetic';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { PopMenu } from './pop-menu';

export function Navbar() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const isScrolled = scrollY > 50;
  const isHidden = scrollDirection === 'down' && scrollY > 200 && !menuOpen;

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-500',
          isScrolled
            ? 'py-3 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]/50'
            : 'py-5 bg-transparent',
          isHidden && '-translate-y-full'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Magnetic strength={0.2}>
              <span className="text-2xl font-heading font-bold text-gradient">
                Sirajul
              </span>
            </Magnetic>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button - Visible on both mobile & desktop */}
            <div>
              <Link href="/contact">
                <Button variant="primary" size="sm" className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-xl hover:bg-white/5 transition-colors z-[110] relative cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Pop Menu */}
      <PopMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
