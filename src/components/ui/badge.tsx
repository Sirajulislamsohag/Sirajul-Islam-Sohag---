import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'glow';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 text-[var(--text-secondary)] border border-[var(--border)]',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    outline: 'bg-transparent border border-[var(--border)] text-[var(--text-secondary)]',
    glow: 'bg-primary/10 text-primary border border-primary/30 shadow-[0_0_15px_rgba(79,70,229,0.15)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
