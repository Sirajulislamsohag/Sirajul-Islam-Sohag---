'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import {
  ArrowLeft,
  Plus,
  X,
  Upload,
  Image as ImageIcon,
  Loader2,
  Save,
  Layers,
  LayoutGrid,
  Sparkles,
  CheckCircle2,
  Briefcase,
  ListPlus,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

const DEFAULT_CATEGORIES = [
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

  const [activeTab, setActiveTab] = useState<'card' | 'modal'>('card');
  const [saving, setSaving] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(!!editId);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [uploadingSlider, setUploadingSlider] = useState(false);

  const [categoryList, setCategoryList] = useState<{ value: string; label: string }[]>(DEFAULT_CATEGORIES);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategoryInput, setCustomCategoryInput] = useState('');

  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const sliderInputRef = useRef<HTMLInputElement>(null);

  // Card Data Form State
  const [cardForm, setCardForm] = useState({
    title: '',
    slug: '',
    category: 'google-ads',
    description: '',
    thumbnail: '',
    client: '',
    tags: '',
    featured: false,
  });

  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([
    { label: 'Revenue Increase', value: '1400%' },
    { label: 'ROAS', value: '5.2x' },
  ]);

  // Upwork Modal Data Form State
  const [modalForm, setModalForm] = useState({
    role: '',
    skills: '',
    projectUrl: '',
  });

  // Slider Images (3 to 6 images)
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [sliderUrlInput, setSliderUrlInput] = useState('');

  // Description Paragraphs (dynamic list)
  const [paragraphs, setParagraphs] = useState<string[]>([
    'Detailed background on client challenges and marketing objectives...',
    'Strategic execution framework across search and paid social campaigns...',
  ]);

  // Bullet Points / Unordered List (dynamic list)
  const [bulletPoints, setBulletPoints] = useState<string[]>([
    'Granular campaign structure and audience segmentation',
    'Server-side conversion tracking audit and event deduplication',
    'Daily bid optimization and negative keyword scrubbing',
  ]);

  // Fetch unique categories across existing items
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/portfolio?limit=100');
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const map = new Map<string, string>();
          DEFAULT_CATEGORIES.forEach((c) => map.set(c.value.toLowerCase().trim(), c.label));

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
        console.warn('Could not load categories:', err);
      }
    }
    fetchCategories();
  }, []);

  // Load item for editing
  useEffect(() => {
    if (!editId) return;
    async function loadItem() {
      try {
        const res = await fetch(`/api/portfolio/${editId}`);
        const data = await res.json();
        if (data.success && data.data) {
          const item = data.data;
          const loadedCategory = item.category || 'google-ads';
          
          setCardForm({
            title: item.title || '',
            slug: item.slug || '',
            category: loadedCategory,
            description: item.description || '',
            thumbnail: item.thumbnail || '',
            client: item.client || '',
            tags: (item.tags || []).join(', '),
            featured: item.featured || false,
          });

          // Check if loaded category is custom or present in list
          const existsInDefaults = DEFAULT_CATEGORIES.some(
            (c) => c.value.toLowerCase() === loadedCategory.toLowerCase()
          );
          if (!existsInDefaults) {
            setCategoryList((prev) => {
              if (prev.some((c) => c.value.toLowerCase() === loadedCategory.toLowerCase())) return prev;
              const formatted = loadedCategory.includes('-')
                ? loadedCategory.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                : loadedCategory.charAt(0).toUpperCase() + loadedCategory.slice(1);
              return [...prev, { value: loadedCategory, label: formatted }];
            });
          }

          setMetrics(item.metrics && item.metrics.length > 0 ? item.metrics : []);

          setModalForm({
            role: item.role || '',
            skills: (item.skills || item.tags || []).join(', '),
            projectUrl: item.projectUrl || '',
          });

          if (item.modalImages && item.modalImages.length > 0) {
            setSliderImages(item.modalImages);
          } else if (item.thumbnail) {
            setSliderImages([item.thumbnail]);
          }

          if (item.descriptionParagraphs && item.descriptionParagraphs.length > 0) {
            setParagraphs(item.descriptionParagraphs);
          } else if (item.description) {
            setParagraphs([item.description]);
          }

          if (item.bulletPoints && item.bulletPoints.length > 0) {
            setBulletPoints(item.bulletPoints);
          }
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

  // Thumbnail Image Upload
  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setUploadingThumbnail(true);
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
        setCardForm((prev) => ({ ...prev, thumbnail: data.data.url }));
        toast.success('Thumbnail uploaded successfully!');
      } else {
        toast.error(data.error || 'Failed to upload thumbnail');
      }
    } catch (err) {
      console.error('Upload error:', err);
      toast.error('Image upload failed');
    } finally {
      setUploadingThumbnail(false);
      if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
    }
  };

  // Slider Image Upload
  const handleSliderImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (sliderImages.length >= 6) {
      toast.error('Maximum 6 slider images allowed');
      return;
    }

    setUploadingSlider(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'portfolio-slides');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.data?.url) {
        setSliderImages((prev) => [...prev, data.data.url]);
        toast.success(`Slide image added! (${sliderImages.length + 1}/6)`);
      } else {
        toast.error(data.error || 'Failed to upload slide image');
      }
    } catch (err) {
      console.error('Upload error:', err);
      toast.error('Slide upload failed');
    } finally {
      setUploadingSlider(false);
      if (sliderInputRef.current) sliderInputRef.current.value = '';
    }
  };

  const addSliderUrl = () => {
    if (!sliderUrlInput.trim()) return;
    if (sliderImages.length >= 6) {
      toast.error('Maximum 6 slider images allowed');
      return;
    }
    setSliderImages([...sliderImages, sliderUrlInput.trim()]);
    setSliderUrlInput('');
    toast.success(`Slide image added (${sliderImages.length + 1}/6)`);
  };

  const removeSliderImage = (index: number) => {
    setSliderImages(sliderImages.filter((_, i) => i !== index));
  };

  // Metrics handlers
  const addMetric = () => setMetrics([...metrics, { label: '', value: '' }]);
  const removeMetric = (index: number) => setMetrics(metrics.filter((_, i) => i !== index));
  const updateMetric = (index: number, field: 'label' | 'value', val: string) => {
    const newMetrics = [...metrics];
    newMetrics[index][field] = val;
    setMetrics(newMetrics);
  };

  // Paragraphs handlers
  const addParagraph = () => setParagraphs([...paragraphs, '']);
  const removeParagraph = (index: number) => setParagraphs(paragraphs.filter((_, i) => i !== index));
  const updateParagraph = (index: number, val: string) => {
    const newArr = [...paragraphs];
    newArr[index] = val;
    setParagraphs(newArr);
  };

  // Bullet points handlers
  const addBulletPoint = () => setBulletPoints([...bulletPoints, '']);
  const removeBulletPoint = (index: number) => setBulletPoints(bulletPoints.filter((_, i) => i !== index));
  const updateBulletPoint = (index: number, val: string) => {
    const newArr = [...bulletPoints];
    newArr[index] = val;
    setBulletPoints(newArr);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardForm.title.trim()) {
      toast.error('Portfolio Title is required');
      setActiveTab('card');
      return;
    }

    if (!cardForm.description.trim()) {
      toast.error('Card short description is required');
      setActiveTab('card');
      return;
    }

    setSaving(true);
    try {
      const payload = {
        // Card Data
        title: cardForm.title,
        slug: cardForm.slug || cardForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        category: cardForm.category,
        description: cardForm.description,
        thumbnail: cardForm.thumbnail,
        client: cardForm.client,
        tags: cardForm.tags.split(',').map((t) => t.trim()).filter(Boolean),
        metrics: metrics.filter((m) => m.label && m.value),
        featured: cardForm.featured,

        // Modal Data (Upwork Style)
        role: modalForm.role,
        skills: modalForm.skills.split(',').map((s) => s.trim()).filter(Boolean),
        projectUrl: modalForm.projectUrl,
        modalImages: sliderImages.filter(Boolean),
        descriptionParagraphs: paragraphs.filter((p) => p.trim().length > 0),
        bulletPoints: bulletPoints.filter((b) => b.trim().length > 0),
      };

      const url = editId ? `/api/portfolio/${editId}` : '/api/portfolio';
      const method = editId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(editId ? 'Portfolio updated successfully!' : 'Portfolio created successfully!');
        router.push('/dashboard/portfolio');
      } else {
        toast.error(data.error || 'Failed to save portfolio');
      }
    } catch {
      toast.error('Failed to save portfolio');
    } finally {
      setSaving(false);
    }
  };

  if (loadingEdit) {
    return (
      <div className="py-20 text-center space-y-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        <p className="text-sm text-[var(--text-secondary)]">Loading case study details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/portfolio">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold text-[var(--text)]">
              {editId ? 'Edit Portfolio Case Study' : 'Create New Portfolio Case Study'}
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Manage both the showcase card preview and the Upwork-style detail modal.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs for Separate Card & Modal Management */}
      <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] w-fit">
        <button
          type="button"
          onClick={() => setActiveTab('card')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer ${
            activeTab === 'card'
              ? 'bg-primary text-slate-950 shadow-md shadow-primary/25'
              : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>1. Card Overview Data</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('modal')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer ${
            activeTab === 'modal'
              ? 'bg-primary text-slate-950 shadow-md shadow-primary/25'
              : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>2. Upwork Modal Detail Data</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ========================================================================= */}
        {/* TAB 1: CARD OVERVIEW DATA */}
        {/* ========================================================================= */}
        {activeTab === 'card' && (
          <div className="space-y-6">
            <Card variant="default" className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                <LayoutGrid className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-heading font-bold">Showcase Card Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Portfolio Title *"
                  placeholder="e.g. E-Commerce Revenue Scaling"
                  value={cardForm.title}
                  onChange={(e) =>
                    setCardForm({
                      ...cardForm,
                      title: e.target.value,
                      slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
                    })
                  }
                  required
                />

                <Input
                  label="URL Slug *"
                  placeholder="e.g. ecommerce-revenue-scaling"
                  value={cardForm.slug}
                  onChange={(e) => setCardForm({ ...cardForm, slug: e.target.value })}
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
                      value={cardForm.category}
                      onChange={(e) => {
                        if (e.target.value === '__custom__') {
                          setIsCustomCategory(true);
                          setCustomCategoryInput('');
                        } else {
                          setCardForm({ ...cardForm, category: e.target.value });
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
                          setCardForm({ ...cardForm, category: categoryList[0]?.value || 'google-ads' });
                        }}
                        className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Choose From List
                      </button>
                    </div>
                    <Input
                      placeholder="e.g. Performance Max, E-Commerce, Local Services..."
                      value={customCategoryInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomCategoryInput(val);
                        setCardForm({ ...cardForm, category: val });
                      }}
                      required
                    />
                  </div>
                )}

                <Input
                  label="Client Name / Industry"
                  placeholder="e.g. EcoLiving Supply Co. / Retail"
                  value={cardForm.client}
                  onChange={(e) => setCardForm({ ...cardForm, client: e.target.value })}
                />
              </div>

              <Textarea
                label="Card Short Summary Description *"
                placeholder="2-3 sentence overview that appears on the showcase card..."
                value={cardForm.description}
                onChange={(e) => setCardForm({ ...cardForm, description: e.target.value })}
                rows={3}
                required
              />

              <Input
                label="Card Tags (Comma separated)"
                placeholder="Google Ads, Shopping, PMax, ROAS"
                value={cardForm.tags}
                onChange={(e) => setCardForm({ ...cardForm, tags: e.target.value })}
              />

              {/* Card Thumbnail Image */}
              <div className="space-y-3 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
                <label className="block text-sm font-semibold text-[var(--text)]">Card Cover Thumbnail Image</label>
                <input
                  ref={thumbnailInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailUpload}
                />

                {cardForm.thumbnail ? (
                  <div className="relative aspect-[16/9] w-full max-w-lg rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group mx-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cardForm.thumbnail} alt="Thumbnail preview" className="object-cover w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <Button type="button" variant="glass" size="sm" icon={<Upload className="w-4 h-4" />} onClick={() => thumbnailInputRef.current?.click()}>
                        Change Image
                      </Button>
                      <Button type="button" variant="danger" size="sm" icon={<X className="w-4 h-4" />} onClick={() => setCardForm({ ...cardForm, thumbnail: '' })}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => !uploadingThumbnail && thumbnailInputRef.current?.click()}
                    className="border-2 border-dashed border-[var(--border)] hover:border-primary/50 rounded-xl p-6 text-center cursor-pointer transition-colors bg-[var(--bg-card)] hover:bg-primary/5 flex flex-col items-center justify-center gap-2 group"
                  >
                    {uploadingThumbnail ? (
                      <>
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        <p className="text-sm font-medium text-primary">Uploading thumbnail...</p>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-semibold text-[var(--text)]">Upload Card Thumbnail (16:10 or 16:9)</p>
                      </>
                    )}
                  </div>
                )}

                <Input
                  label="Or Direct Image URL"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={cardForm.thumbnail}
                  onChange={(e) => setCardForm({ ...cardForm, thumbnail: e.target.value })}
                />
              </div>

              {/* Verified Metrics Badges */}
              <div className="space-y-4 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text)]">Card Metric Badges (ROAS, Revenue, CPA)</h3>
                    <p className="text-xs text-[var(--text-muted)]">Shown at the bottom of the showcase card.</p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" icon={<Plus className="w-3.5 h-3.5" />} onClick={addMetric}>
                    Add Metric
                  </Button>
                </div>

                {metrics.map((metric, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <Input
                      placeholder="Label (e.g. Revenue Increase)"
                      value={metric.label}
                      onChange={(e) => updateMetric(idx, 'label', e.target.value)}
                    />
                    <Input
                      placeholder="Value (e.g. 1400%)"
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

              {/* Featured Switch */}
              <label className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/30 cursor-pointer">
                <input
                  type="checkbox"
                  checked={cardForm.featured}
                  onChange={(e) => setCardForm({ ...cardForm, featured: e.target.checked })}
                  className="w-4 h-4 rounded text-primary focus:ring-primary"
                />
                <div>
                  <p className="text-sm font-semibold">Featured on Homepage</p>
                  <p className="text-xs text-[var(--text-muted)]">Show this case study prominently in the homepage portfolio section.</p>
                </div>
              </label>
            </Card>

            <div className="flex justify-end">
              <Button type="button" variant="primary" onClick={() => setActiveTab('modal')}>
                Next: Upwork Modal Details →
              </Button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: UPWORK MODAL DETAIL DATA */}
        {/* ========================================================================= */}
        {activeTab === 'modal' && (
          <div className="space-y-6">
            <Card variant="default" className="p-6 md:p-8 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                <Layers className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-heading font-bold">Upwork-Style Modal Configuration</h2>
              </div>

              {/* Role & Project URL */}
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="My Role *"
                  placeholder="e.g. Lead Google Ads Strategist & Performance Marketer"
                  value={modalForm.role}
                  onChange={(e) => setModalForm({ ...modalForm, role: e.target.value })}
                />

                <Input
                  label="Project / Live Link (Optional)"
                  placeholder="https://clientwebsite.com"
                  value={modalForm.projectUrl}
                  onChange={(e) => setModalForm({ ...modalForm, projectUrl: e.target.value })}
                />
              </div>

              {/* Image Slider Management (Minimum 3, Maximum 6) */}
              <div className="space-y-4 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text)] flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-primary" />
                      Image Slider (Min 3, Max 6 Images)
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Current slides: <span className="font-bold text-primary">{sliderImages.length}/6</span>
                      {sliderImages.length < 3 && ' (Minimum 3 recommended for slider)'}
                    </p>
                  </div>

                  <input
                    ref={sliderInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleSliderImageUpload}
                  />

                  {sliderImages.length < 6 && (
                    <Button
                      type="button"
                      variant="glass"
                      size="sm"
                      icon={uploadingSlider ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                      onClick={() => sliderInputRef.current?.click()}
                      disabled={uploadingSlider}
                    >
                      Upload Slide Image
                    </Button>
                  )}
                </div>

                {/* Direct Image URL input */}
                {sliderImages.length < 6 && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Or paste direct image URL (https://...)"
                      value={sliderUrlInput}
                      onChange={(e) => setSliderUrlInput(e.target.value)}
                    />
                    <Button type="button" variant="primary" size="md" onClick={addSliderUrl}>
                      Add
                    </Button>
                  </div>
                )}

                {/* Slides Grid Preview */}
                {sliderImages.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {sliderImages.map((img, idx) => (
                      <div key={idx} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`Slide ${idx + 1}`} className="object-cover w-full h-full" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 text-[10px] font-mono text-white">
                          Slide #{idx + 1}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeSliderImage(idx)}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[var(--text-muted)] italic py-2">
                    No custom slide images added yet. The card thumbnail will be used automatically.
                  </p>
                )}
              </div>

              {/* Portfolio Description: Paragraphs (Dynamic list) */}
              <div className="space-y-4 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text)] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      Modal Description Paragraphs
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">Add multiple paragraphs to tell the complete case study story.</p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" icon={<Plus className="w-3.5 h-3.5" />} onClick={addParagraph}>
                    Add Paragraph
                  </Button>
                </div>

                {paragraphs.map((p, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <Textarea
                      placeholder={`Paragraph ${idx + 1}...`}
                      value={p}
                      onChange={(e) => updateParagraph(idx, e.target.value)}
                      rows={3}
                    />
                    {paragraphs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeParagraph(idx)}
                        className="p-2.5 text-danger hover:bg-danger/10 rounded-xl shrink-0 mt-2 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Deliverables: Unordered List / Bullet Points (Dynamic list) */}
              <div className="space-y-4 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text)] flex items-center gap-2">
                      <ListPlus className="w-4 h-4 text-primary" />
                      Key Deliverables & Execution (Bullet Points)
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">Displayed as an unordered checkmark list in the modal.</p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" icon={<Plus className="w-3.5 h-3.5" />} onClick={addBulletPoint}>
                    Add Bullet Point
                  </Button>
                </div>

                {bulletPoints.map((bp, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <Input
                      placeholder={`Deliverable bullet point ${idx + 1}...`}
                      value={bp}
                      onChange={(e) => updateBulletPoint(idx, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeBulletPoint(idx)}
                      className="p-2.5 text-danger hover:bg-danger/10 rounded-xl shrink-0 mt-6 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Skills and Deliverables Chips */}
              <Input
                label="Skills & Deliverables (Comma separated)"
                placeholder="Google Performance Max, Merchant Center Feed Tuning, Server-Side GTM, GA4 Analytics"
                value={modalForm.skills}
                onChange={(e) => setModalForm({ ...modalForm, skills: e.target.value })}
              />
            </Card>

            <div className="flex items-center justify-between">
              <Button type="button" variant="ghost" onClick={() => setActiveTab('card')}>
                ← Back to Card Overview
              </Button>
              <Button type="submit" variant="primary" size="lg" isLoading={saving} icon={<Save className="w-4 h-4" />}>
                {editId ? 'Save Changes' : 'Publish Portfolio Case Study'}
              </Button>
            </div>
          </div>
        )}

        {/* Global Save Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
          <Link href="/dashboard/portfolio">
            <Button type="button" variant="ghost" size="md">
              Cancel
            </Button>
          </Link>

          <Button type="submit" variant="primary" size="lg" isLoading={saving} icon={<Save className="w-4 h-4" />}>
            {editId ? 'Save Changes' : 'Publish Portfolio Case Study'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function AddPortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        </div>
      }
    >
      <AddPortfolioContent />
    </Suspense>
  );
}
