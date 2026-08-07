import { cn } from '@/lib/utils';

interface AuroraBgProps {
  className?: string;
}

export function AuroraBg({ className }: AuroraBgProps) {
  return <div className={cn('aurora-bg', className)} aria-hidden="true" />;
}
