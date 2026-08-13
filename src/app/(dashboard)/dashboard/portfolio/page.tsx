'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, Eye, Star } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  thumbnail?: string;
  featured: boolean;
  tags: string[];
  metrics: { label: string; value: string }[];
  createdAt: string;
}

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/portfolio?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch {
      toast.error('Failed to load portfolio items');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/portfolio/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) {
        toast.success('Portfolio item deleted');
        fetchItems();
      }
    } catch {
      toast.error('Failed to delete portfolio item');
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header with Link to Dedicated Add Page */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Portfolio Case Studies</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your published marketing case studies</p>
        </div>
        <Link href="/dashboard/portfolio/add">
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Portfolio
          </Button>
        </Link>
      </div>

      {/* Grid List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />
          ))
        ) : items.length === 0 ? (
          <div className="col-span-full py-16 text-center border border-dashed border-[var(--border)] rounded-2xl">
            <Eye className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
            <h3 className="text-lg font-heading font-semibold mb-1">No Portfolio Case Studies Found</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Click "Add Portfolio" to create your first case study page.</p>
            <Link href="/dashboard/portfolio/add">
              <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
                Add Portfolio
              </Button>
            </Link>
          </div>
        ) : (
          items.map((item) => (
            <Card key={item._id} variant="default" className="group flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center overflow-hidden relative border border-[var(--border)]">
                  {item.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <Eye className="w-8 h-8 text-[var(--text-muted)]" />
                  )}
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-semibold text-sm line-clamp-2">{item.title}</h3>
                  {item.featured && <Star className="w-4 h-4 text-warning fill-warning shrink-0" />}
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3 capitalize">{item.category.replace('-', ' ')}</p>
                {item.description && (
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 mb-4">{item.description}</p>
                )}
              </div>
              <div className="flex gap-2 pt-3 border-t border-[var(--border)]">
                <Link href={`/dashboard/portfolio/add?edit=${item._id}`}>
                  <Button variant="ghost" size="sm" icon={<Edit className="w-3.5 h-3.5" />}>
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => confirmDelete(item._id)}
                  className="text-danger hover:text-danger"
                  icon={<Trash2 className="w-3.5 h-3.5" />}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => {
          setConfirmOpen(false);
          setItemToDelete(null);
        }}
        onConfirm={executeDelete}
        title="Delete Portfolio Item"
        message="Are you sure you want to delete this portfolio item? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
