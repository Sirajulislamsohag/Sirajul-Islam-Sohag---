'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { ArrowLeft, Plus, Trash2, Upload, Loader2, Save, X } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
];

const DEFAULT_BLOG_CATEGORIES = [
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'meta-ads', label: 'Meta Ads' },
  { value: 'seo', label: 'SEO' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'cro', label: 'CRO' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'branding', label: 'Branding' },
];

function AddBlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [saving, setSaving] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(!!editId);
  const [uploading, setUploading] = useState(false);
  const [categoryList, setCategoryList] = useState<{ value: string; label: string }[]>(DEFAULT_BLOG_CATEGORIES);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryInput, setCustomCategoryInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'google-ads',
    excerpt: '',
    tags: '',
    status: 'draft',
    thumbnail: '',
    sections: [{ title: '', paragraphs: [''] }] as BlogSection[],
  });

  // Fetch unique categories across existing blog posts
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/blogs?limit=100');
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const map = new Map<string, string>();
          DEFAULT_BLOG_CATEGORIES.forEach((c) => map.set(c.value.toLowerCase().trim(), c.label));

          data.data.forEach((item: any) => {
            if (item.category) {
              const val = item.category.trim();
              const key = val.toLowerCase();
              if (!map.has(key)) {
                const label = val.includes('-')
                  ? val.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                  : val.charAt(0).toUpperCase() + val.slice(1);
                map.set(key, label);
              }
            }
          });

          setCategoryList(Array.from(map.entries()).map(([value, label]) => ({ value, label })));
        }
      } catch (err) {
        console.warn('Could not load blog categories:', err);
      }
    }
    fetchCategories();
  }, []);

  // Fetch item for editing if editId exists
  useEffect(() => {
    if (!editId) return;
    async function loadItem() {
      try {
        const res = await fetch(`/api/blogs/${editId}`);
        const data = await res.json();
        if (data.success && data.data) {
          const item = data.data;
          const loadedCat = item.category || 'google-ads';
          
          setForm({
            title: item.title || '',
            slug: item.slug || '',
            category: loadedCat,
            excerpt: item.excerpt || '',
            thumbnail: item.thumbnail || '',
            sections: item.sections?.length > 0 ? item.sections : [{ title: '', paragraphs: [''] }],
            tags: (item.tags || []).join(', '),
            status: item.status || 'draft',
          });

          const existsInDefaults = DEFAULT_BLOG_CATEGORIES.some(
            (c) => c.value.toLowerCase() === loadedCat.toLowerCase()
          );
          if (!existsInDefaults) {
            setCategoryList((prev) => {
              if (prev.some((c) => c.value.toLowerCase() === loadedCat.toLowerCase())) return prev;
              const formatted = loadedCat.includes('-')
                ? loadedCat.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                : loadedCat.charAt(0).toUpperCase() + loadedCat.slice(1);
              return [...prev, { value: loadedCat, label: formatted }];
            });
          }
        } else {
          toast.error('Failed to load blog post for editing');
        }
      } catch {
        toast.error('Error loading blog post');
      } finally {
        setLoadingEdit(false);
      }
    }
    loadItem();
  }, [editId]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be less than 5MB');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'blogs');

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success && data.data?.url) {
        setForm((prev) => ({ ...prev, thumbnail: data.data.url }));
        toast.success('Image uploaded successfully!');
      } else {
        toast.error(data.error || 'Failed to upload image');
      }
    } catch {
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const updateSection = (sIndex: number, field: keyof BlogSection, value: any) => {
    const newSections = [...form.sections];
    newSections[sIndex] = { ...newSections[sIndex], [field]: value };
    setForm({ ...form, sections: newSections });
  };

  const updateParagraph = (sIndex: number, pIndex: number, value: string) => {
    const newSections = [...form.sections];
    const newParagraphs = [...newSections[sIndex].paragraphs];
    newParagraphs[pIndex] = value;
    newSections[sIndex].paragraphs = newParagraphs;
    setForm({ ...form, sections: newSections });
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
        category: form.category.trim(),
        tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        sections: form.sections.map((s) => ({
          ...s,
          paragraphs: s.paragraphs.filter((p) => p.trim() !== ''),
        })),
      };

      const url = editId ? `/api/blogs/${editId}` : '/api/blogs';
      const method = editId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(editId ? 'Blog post updated!' : 'Blog post published!');
        router.push('/dashboard/blog');
      } else {
        toast.error(data.error || 'Failed to save blog post');
      }
    } catch {
      toast.error('Failed to save blog post');
    } finally {
      setSaving(false);
    }
  };

  if (loadingEdit) {
    return (
      <div className="py-20 text-center space-y-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        <p className="text-sm text-[var(--text-secondary)]">Loading blog post details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/blog">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Blogs
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold">
              {editId ? 'Edit Blog Post' : 'Add New Blog Post'}
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Create and publish articles for your audience.
            </p>
          </div>
        </div>
      </div>

      <Card variant="default" className="p-6 md:p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Title *"
              placeholder="e.g. 5 B2B Google Ads Strategies to Double Leads in 2026"
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
              placeholder="e.g. b2b-google-ads-strategies"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {!isCustomCategory ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">
                    Category *
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomCategory(true);
                      setCustomCategoryInput('');
                    }}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Custom Category
                  </button>
                </div>
                <Select
                  options={[
                    ...categoryList,
                    { value: '__custom__', label: '+ Add Custom Category...' },
                  ]}
                  value={form.category}
                  onChange={(e) => {
                    if (e.target.value === '__custom__') {
                      setIsCustomCategory(true);
                      setCustomCategoryInput('');
                    } else {
                      setForm({ ...form, category: e.target.value });
                    }
                  }}
                />
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">
                    Custom Category *
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomCategory(false);
                      setForm({ ...form, category: categoryList[0]?.value || 'google-ads' });
                    }}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Choose From List
                  </button>
                </div>
                <Input
                  placeholder="e.g. Performance Max, Email Marketing, CRO..."
                  value={customCategoryInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCustomCategoryInput(val);
                    setForm({ ...form, category: val });
                  }}
                  required
                />
              </div>
            )}

            <Select
              label="Status *"
              options={STATUS_OPTIONS}
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
          </div>

          <Input
            label="Tags (comma separated)"
            placeholder="Google Ads, PPC, Marketing Strategy"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />

          <Textarea
            label="Excerpt (Summary) *"
            placeholder="Write a compelling brief overview of this blog article..."
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={3}
            required
          />

          {/* Feature Image Upload Section */}
          <div className="space-y-3 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
            <label className="block text-sm font-medium text-[var(--text)]">Feature Thumbnail Image</label>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
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
                    <p className="text-sm font-medium text-primary">Uploading feature image...</p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">Click or drag image to upload feature image</p>
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

          {/* Dynamic Article Sections Builder */}
          <div className="space-y-6 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text)]">Article Content Sections</h3>
                <p className="text-xs text-[var(--text-muted)]">Add sub-headings and paragraphs for your article body.</p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                icon={<Plus className="w-4 h-4" />}
                onClick={() => setForm({ ...form, sections: [...form.sections, { title: '', paragraphs: [''] }] })}
              >
                Add Section
              </Button>
            </div>

            <div className="space-y-6">
              {form.sections.map((section, sIndex) => (
                <div key={sIndex} className="p-5 rounded-xl border border-[var(--border)] bg-white/[0.01] space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <Input
                        label={`Section ${sIndex + 1} Sub-heading (Optional)`}
                        placeholder={`e.g. Step ${sIndex + 1}: Audit Your Negative Keywords`}
                        value={section.title || ''}
                        onChange={(e) => updateSection(sIndex, 'title', e.target.value)}
                      />
                    </div>
                    {form.sections.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, sections: form.sections.filter((_, i) => i !== sIndex) })}
                        className="p-3 text-[var(--text-muted)] hover:text-danger hover:bg-danger/10 rounded-xl transition-colors shrink-0 mt-6"
                        title="Delete Section"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                      Paragraphs
                    </label>
                    {section.paragraphs.map((para, pIndex) => (
                      <div key={pIndex} className="flex gap-3 items-start">
                        <div className="flex-1">
                          <Textarea
                            placeholder={`Paragraph ${pIndex + 1} body text...`}
                            value={para}
                            onChange={(e) => updateParagraph(sIndex, pIndex, e.target.value)}
                            rows={3}
                          />
                        </div>
                        {section.paragraphs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => updateSection(sIndex, 'paragraphs', section.paragraphs.filter((_, i) => i !== pIndex))}
                            className="p-2.5 text-[var(--text-muted)] hover:text-danger rounded-lg transition-colors mt-2"
                            title="Delete Paragraph"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      icon={<Plus className="w-3.5 h-3.5" />}
                      onClick={() => updateSection(sIndex, 'paragraphs', [...section.paragraphs, ''])}
                    >
                      Add Paragraph
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
            <Button type="submit" variant="primary" size="lg" isLoading={saving} icon={<Save className="w-4 h-4" />}>
              {editId ? 'Save Blog Changes' : 'Publish Blog Article'}
            </Button>
            <Link href="/dashboard/blog">
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

export default function AddBlogPage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
      </div>
    }>
      <AddBlogContent />
    </Suspense>
  );
}
