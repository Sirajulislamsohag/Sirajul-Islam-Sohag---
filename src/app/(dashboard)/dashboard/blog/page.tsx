'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt: string;
  thumbnail?: string;
  sections: BlogSection[];
  status: string;
  tags: string[];
  createdAt: string;
}

export default function BlogPage() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch {
      toast.error('Failed to load blog posts');
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
      const res = await fetch(`/api/blogs/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) {
        toast.success('Blog post deleted');
        fetchItems();
      }
    } catch {
      toast.error('Failed to delete blog post');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Link to Dedicated Add Page */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Blog Articles</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your published blog posts and articles</p>
        </div>
        <Link href="/dashboard/blog/add">
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Blog
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
            <FileText className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
            <h3 className="text-lg font-heading font-semibold mb-1">No Blog Articles Found</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Click "Add Blog" to publish your first article.</p>
            <Link href="/dashboard/blog/add">
              <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
                Add Blog
              </Button>
            </Link>
          </div>
        ) : (
          items.map((item) => (
            <Card key={item._id} variant="default" className="group p-0 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative flex items-center justify-center border-b border-[var(--border)]">
                  {item.thumbnail ? (
                    <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
                  ) : (
                    <FileText className="w-8 h-8 text-[var(--text-muted)]" />
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="font-heading font-semibold text-sm line-clamp-2">{item.title}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shrink-0 ${item.status === 'published' ? 'bg-success/10 text-success border border-success/20' : 'bg-warning/10 text-warning border border-warning/20'}`}>
                      {item.status}
                    </span>
                  </div>
                  {item.category && (
                    <p className="text-[11px] text-primary font-medium uppercase tracking-wider mb-2">
                      {item.category.replace(/-/g, ' ')}
                    </p>
                  )}
                  <p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2">{item.excerpt}</p>
                </div>
              </div>
              <div className="flex gap-2 p-4 pt-0 border-t border-[var(--border)] mt-auto">
                <Link href={`/dashboard/blog/add?edit=${item._id}`}>
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
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
