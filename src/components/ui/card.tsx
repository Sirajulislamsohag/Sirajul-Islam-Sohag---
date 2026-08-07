'use client';

import { forwardRef, useRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'spotlight' | 'bordered';
  hover?: boolean;
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (variant !== 'spotlight') return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    const variants = {
      default: 'bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl',
      glass: 'glass-card',
      spotlight: 'spotlight-card bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl',
      bordered: 'bg-transparent border border-[var(--border)] rounded-2xl',
    };

    return (
      <div
        ref={(node) => {
          cardRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          'relative overflow-hidden p-6',
          'transition-all duration-300',
          hover && 'hover:border-[var(--border-hover)] hover:shadow-lg hover:shadow-[var(--shadow)]',
          variants[variant],
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
