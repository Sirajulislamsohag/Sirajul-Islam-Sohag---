'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Modal } from '@/components/ui/modal';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, Eye, Star, X, Loader2, Upload, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface PortfolioItem {
  _id: string; title: string; slug: string; category: string;
  description: string; thumbnail?: string; featured: boolean;
  tags: string[]; metrics: { label: string; value: string }[]; createdAt: string;
}

const CATEGORIES = [
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'facebook-ads', label: 'Facebook Ads' },
  { value: 'seo', label: 'SEO' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'branding', label: 'Branding' },
];

export default function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [form, setForm] = useState({ 
    title: '', 
    slug: '', 
    category: 'google-ads', 
    description: '', 
    thumbnail: '', 
    tags: '', 
    featured: false, 
    seo: { metaTitle: '', metaDescription: '' } 
  });
  
  const [metrics, setMetrics] = useState<{label: string, value: string}[]>([]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/portfolio?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch { toast.error('Failed to load'); }
    finally { setLoading(false); }
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'portfolio');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.data?.url) {
        setForm((prev) => ({ ...prev, thumbnail: data.data.url }));
        toast.success('Image uploaded successfully!');
      } else {
        toast.error(data.error || 'Failed to upload image');
      }
    } catch (err) {
      console.error('Upload error:', err);
      toast.error('Image upload failed');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleSubmit = async () => {
    try {
      const body = { 
        ...form, 
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean), 
        metrics: metrics.filter(m => m.label && m.value), // Only include valid metrics
        seo: form.seo.metaTitle ? form.seo : undefined 
      };
      
      const url = editItem ? `/api/portfolio/${editItem._id}` : '/api/portfolio';
      const method = editItem ? 'PATCH' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      
      if (data.success) { 
        toast.success(editItem ? 'Updated!' : 'Created!'); 
        setModalOpen(false); 
        setEditItem(null); 
        resetForm(); 
        fetchItems(); 
      } else {
        toast.error(data.error || 'Failed to save');
      }
    } catch { toast.error('Failed to save'); }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/portfolio/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) { toast.success('Deleted'); fetchItems(); }
    } catch { toast.error('Failed to delete'); }
  };

  const resetForm = () => {
    setForm({ title: '', slug: '', category: 'google-ads', description: '', thumbnail: '', tags: '', featured: false, seo: { metaTitle: '', metaDescription: '' } });
    setMetrics([]);
  };

  const openEdit = (item: PortfolioItem) => {
    setEditItem(item);
    setForm({ 
      title: item.title || '', 
      slug: item.slug || '', 
      category: item.category || 'google-ads', 
      description: item.description || '', 
      thumbnail: item.thumbnail || '',
      tags: (item.tags || []).join(', '), 
      featured: item.featured || false, 
      seo: { metaTitle: '', metaDescription: '' } 
    });
    setMetrics(item.metrics || []);
    setModalOpen(true);
  };

  const addMetric = () => setMetrics([...metrics, { label: '', value: '' }]);
  const removeMetric = (index: number) => setMetrics(metrics.filter((_, i) => i !== index));
  const updateMetric = (index: number, field: 'label' | 'value', val: string) => {
    const newMetrics = [...metrics];
    newMetrics[index][field] = val;
    setMetrics(newMetrics);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Portfolio</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your case studies</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => { resetForm(); setEditItem(null); setModalOpen(true); }}>Add New</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? Array.from({ length: 6 }).map((_, i) => (<div key={i} className="h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />)) :
          items.map((item) => (
            <Card key={item._id} variant="default" className="group">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 flex items-center justify-center overflow-hidden relative">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <Eye className="w-8 h-8 text-[var(--text-muted)]" />
                )}
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-semibold text-sm line-clamp-2">{item.title}</h3>
                {item.featured && <Star className="w-4 h-4 text-warning fill-warning shrink-0" />}
              </div>
              <p className="text-xs text-[var(--text-muted)] mb-3 capitalize">{item.category.replace('-', ' ')}</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => openEdit(item)} icon={<Edit className="w-3 h-3" />}>Edit</Button>
                <Button variant="ghost" size="sm" onClick={() => confirmDelete(item._id)} className="text-danger" icon={<Trash2 className="w-3 h-3" />}>Delete</Button>
              </div>
            </Card>
          ))
        }
      </div>

      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditItem(null); }} title={editItem ? 'Edit Portfolio Item' : 'Add Portfolio Item'} size="lg">
        <div className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
          <Input label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-') })} />
          <Input label="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <Select label="Category" options={CATEGORIES} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
          <Textarea label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--text)]">Thumbnail Image</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {form.thumbnail ? (
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.thumbnail} alt="Thumbnail preview" className="object-cover w-full h-full absolute inset-0" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button type="button" variant="glass" size="sm" icon={<Upload className="w-4 h-4" />} onClick={() => fileInputRef.current?.click()}>
                    Change
                  </Button>
                  <Button type="button" variant="danger" size="sm" icon={<X className="w-4 h-4" />} onClick={() => setForm({ ...form, thumbnail: '' })}>
                    Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => !uploading && fileInputRef.current?.click()}
                className="border-2 border-dashed border-[var(--border)] hover:border-primary/50 rounded-xl p-6 text-center cursor-pointer transition-colors bg-[var(--bg-card)]/50 hover:bg-[var(--bg-card)] flex flex-col items-center justify-center gap-2 group"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <p className="text-sm font-medium text-primary">Uploading image...</p>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text)]">Click or drag & drop to upload thumbnail</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="mt-2">
              <Input
                label="Or Image URL"
                placeholder="https://example.com/image.jpg"
                value={form.thumbnail}
                onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2 border border-[var(--border)] p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Metrics</label>
              <Button variant="ghost" size="sm" onClick={addMetric} icon={<Plus className="w-3 h-3"/>}>Add Metric</Button>
            </div>
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <Input placeholder="Label (e.g. ROAS)" value={metric.label} onChange={(e) => updateMetric(idx, 'label', e.target.value)} />
                <Input placeholder="Value (e.g. 5.2x)" value={metric.value} onChange={(e) => updateMetric(idx, 'value', e.target.value)} />
                <button onClick={() => removeMetric(idx)} className="p-2 text-danger hover:bg-danger/10 rounded-lg shrink-0 mt-6"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>

          <Input label="Tags (comma separated)" placeholder="Google Ads, Shopping, PMax" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" /> Featured Project</label>
          
          <div className="flex gap-3 pt-4 sticky bottom-0 bg-[var(--bg)] border-t border-[var(--border)] pb-2">
            <Button variant="primary" onClick={handleSubmit}>{editItem ? 'Update' : 'Create'}</Button>
            <Button variant="ghost" onClick={() => { setModalOpen(false); setEditItem(null); }}>Cancel</Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => { setConfirmOpen(false); setItemToDelete(null); }}
        onConfirm={executeDelete}
        title="Delete Portfolio Item"
        message="Are you sure you want to delete this portfolio item? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
