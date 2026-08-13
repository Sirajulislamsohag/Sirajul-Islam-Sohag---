'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { ArrowLeft, Plus, X, Upload, Image as ImageIcon, Loader2, Save } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

const CATEGORIES = [
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'facebook-ads', label: 'Facebook Ads' },
  { value: 'seo', label: 'SEO' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'branding', label: 'Branding' },
];

function AddPortfolioContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [saving, setSaving] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(!!editId);
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
    seo: { metaTitle: '', metaDescription: '' },
  });

  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([]);

  // Fetch item for editing if editId exists
  useEffect(() => {
    if (!editId) return;
    async function loadItem() {
      try {
        const res = await fetch(`/api/portfolio/${editId}`);
        const data = await res.json();
        if (data.success && data.data) {
          const item = data.data;
          setForm({
            title: item.title || '',
            slug: item.slug || '',
            category: item.category || 'google-ads',
            description: item.description || '',
            thumbnail: item.thumbnail || '',
            tags: (item.tags || []).join(', '),
            featured: item.featured || false,
            seo: item.seo || { metaTitle: '', metaDescription: '' },
          });
          setMetrics(item.metrics || []);
        } else {
          toast.error('Failed to load portfolio item for editing');
        }
      } catch {
        toast.error('Error loading portfolio item');
      } finally {
        setLoadingEdit(false);
      }
    }
    loadItem();
  }, [editId]);

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

  const addMetric = () => setMetrics([...metrics, { label: '', value: '' }]);
  const removeMetric = (index: number) => setMetrics(metrics.filter((_, i) => i !== index));
  const updateMetric = (index: number, field: 'label' | 'value', val: string) => {
    const newMetrics = [...metrics];
    newMetrics[index][field] = val;
    setMetrics(newMetrics);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error('Title is required');
      return;
    }

    setSaving(true);
    try {
      const body = {
        ...form,
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        metrics: metrics.filter((m) => m.label && m.value),
        seo: form.seo.metaTitle ? form.seo : undefined,
      };

      const url = editId ? `/api/portfolio/${editId}` : '/api/portfolio';
      const method = editId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(editId ? 'Portfolio updated successfully!' : 'Portfolio created successfully!');
        router.push('/dashboard/portfolio');
      } else {
        toast.error(data.error || 'Failed to save portfolio item');
      }
    } catch {
      toast.error('Failed to save portfolio item');
    } finally {
      setSaving(false);
    }
  };

  if (loadingEdit) {
    return (
      <div className="py-20 text-center space-y-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        <p className="text-sm text-[var(--text-secondary)]">Loading portfolio details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/portfolio">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Portfolio
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold">
              {editId ? 'Edit Portfolio Item' : 'Add New Portfolio Case Study'}
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Fill in the details below to publish a portfolio case study.
            </p>
          </div>
        </div>
      </div>

      <Card variant="default" className="p-6 md:p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Title *"
              placeholder="e.g. Google Ads Campaign Scaling for E-Commerce"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                  slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                })
              }
              required
            />

            <Input
              label="Slug *"
              placeholder="e.g. google-ads-ecommerce-scaling"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Select
              label="Category *"
              options={CATEGORIES}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <Input
              label="Tags (comma separated)"
              placeholder="Google Ads, ROAS, E-Commerce, PMax"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </div>

          <Textarea
            label="Description *"
            placeholder="Provide a detailed breakdown of the campaign objectives, strategy, execution, and client results..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={5}
            required
          />

          {/* Thumbnail Upload Section */}
          <div className="space-y-3 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
            <label className="block text-sm font-medium text-[var(--text)]">Featured Thumbnail Image</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {form.thumbnail ? (
              <div className="relative aspect-[16/9] w-full max-w-xl rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.thumbnail} alt="Thumbnail preview" className="object-cover w-full h-full absolute inset-0" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button type="button" variant="glass" size="sm" icon={<Upload className="w-4 h-4" />} onClick={() => fileInputRef.current?.click()}>
                    Change Image
                  </Button>
                  <Button type="button" variant="danger" size="sm" icon={<X className="w-4 h-4" />} onClick={() => setForm({ ...form, thumbnail: '' })}>
                    Remove
                  </Button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => !uploading && fileInputRef.current?.click()}
                className="border-2 border-dashed border-[var(--border)] hover:border-primary/50 rounded-xl p-8 text-center cursor-pointer transition-colors bg-[var(--bg-card)] hover:bg-primary/5 flex flex-col items-center justify-center gap-3 group"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    <p className="text-sm font-medium text-primary">Uploading thumbnail to Cloudinary...</p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">Click or drag image to upload</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">PNG, JPG, WEBP (Max 5MB)</p>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="pt-2">
              <Input
                label="Or Direct Image URL"
                placeholder="https://images.unsplash.com/photo-..."
                value={form.thumbnail}
                onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
              />
            </div>
          </div>

          {/* Key Metrics Builder */}
          <div className="space-y-4 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text)]">Campaign Metrics (ROAS, Revenue, CPA)</h3>
                <p className="text-xs text-[var(--text-muted)]">Add quantitative results achieved during this campaign.</p>
              </div>
              <Button type="button" variant="ghost" size="sm" icon={<Plus className="w-3.5 h-3.5" />} onClick={addMetric}>
                Add Metric
              </Button>
            </div>

            {metrics.map((metric, idx) => (
              <div key={idx} className="flex gap-3 items-center">
                <Input
                  placeholder="Label (e.g. ROAS Growth)"
                  value={metric.label}
                  onChange={(e) => updateMetric(idx, 'label', e.target.value)}
                />
                <Input
                  placeholder="Value (e.g. 5.8x)"
                  value={metric.value}
                  onChange={(e) => updateMetric(idx, 'value', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => removeMetric(idx)}
                  className="p-2.5 text-danger hover:bg-danger/10 rounded-xl shrink-0 mt-6 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Featured Checkbox */}
          <label className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/30 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4 rounded text-primary focus:ring-primary"
            />
            <div>
              <p className="text-sm font-semibold">Featured Portfolio Showcase</p>
              <p className="text-xs text-[var(--text-muted)]">Display this case study prominently on the homepage portfolio section.</p>
            </div>
          </label>

          {/* Form Submit & Cancel Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
            <Button type="submit" variant="primary" size="lg" isLoading={saving} icon={<Save className="w-4 h-4" />}>
              {editId ? 'Save Changes' : 'Publish Portfolio Case Study'}
            </Button>
            <Link href="/dashboard/portfolio">
              <Button type="button" variant="ghost" size="lg">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default function AddPortfolioPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
      </div>
    }>
      <AddPortfolioContent />
    </Suspense>
  );
}
