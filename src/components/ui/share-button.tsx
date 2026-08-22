'use client';

import { Share2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function ShareButton({ title, url }: { title?: string; url?: string }) {
  const handleShare = () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary text-[var(--text)] transition-colors cursor-pointer"
      title="Share Article"
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}
