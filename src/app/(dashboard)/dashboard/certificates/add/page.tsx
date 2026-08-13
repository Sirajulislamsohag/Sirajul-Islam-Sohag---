'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Upload, Image as ImageIcon, Loader2, Save, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

function AddCertificateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  const [saving, setSaving] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(!!editId);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: '',
    issuer: '',
    date: '',
    url: '',
    credentialId: '',
    description: '',
    image: '',
  });

  // Fetch item for editing if editId exists
  useEffect(() => {
    if (!editId) return;
    async function loadItem() {
      try {
        const res = await fetch(`/api/certificates/${editId}`);
        const data = await res.json();
        if (data.success && data.data) {
          const item = data.data;
          setForm({
            title: item.title || '',
            issuer: item.issuer || item.issuingOrg || '',
            date: item.date || item.issueDate || '',
            url: item.url || item.credentialUrl || '',
            credentialId: item.credentialId || '',
            description: item.description || '',
            image: item.image || '',
          });
        } else {
          toast.error('Failed to load certificate for editing');
        }
      } catch {
        toast.error('Error loading certificate');
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
    formData.append('folder', 'certificates');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success && data.data?.url) {
        setForm((prev) => ({ ...prev, image: data.data.url }));
        toast.success('Certificate image uploaded successfully!');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error('Title is required');
      return;
    }

    setSaving(true);
    try {
      const url = editId ? `/api/certificates/${editId}` : '/api/certificates';
      const method = editId ? 'PATCH' : 'POST';
      const payload = {
        title: form.title,
        issuer: form.issuer,
        issuingOrg: form.issuer,
        date: form.date,
        issueDate: form.date,
        url: form.url,
        credentialUrl: form.url,
        credentialId: form.credentialId,
        description: form.description,
        image: form.image,
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(editId ? 'Certificate updated successfully!' : 'Certificate created successfully!');
        router.push('/dashboard/certificates');
      } else {
        toast.error(data.error || 'Failed to save certificate');
      }
    } catch {
      toast.error('Failed to save certificate');
    } finally {
      setSaving(false);
    }
  };

  if (loadingEdit) {
    return (
      <div className="py-20 text-center space-y-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
        <p className="text-sm text-[var(--text-secondary)]">Loading certificate details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button & Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/certificates">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Certificates
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold">
              {editId ? 'Edit Certificate' : 'Add New Certification'}
            </h1>
            <p className="text-sm text-[var(--text-secondary)]">
              Upload and showcase your verified professional marketing credentials.
            </p>
          </div>
        </div>
      </div>

      <Card variant="default" className="p-6 md:p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Certificate Title *"
              placeholder="e.g. Google Ads Search Certification"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />

            <Input
              label="Issuing Organization *"
              placeholder="e.g. Google, Meta, HubSpot, Skillshop"
              value={form.issuer}
              onChange={(e) => setForm({ ...form, issuer: e.target.value })}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Issue Date"
              type="month"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <Input
              label="Credential ID (Optional)"
              placeholder="e.g. 12345678"
              value={form.credentialId}
              onChange={(e) => setForm({ ...form, credentialId: e.target.value })}
            />
          </div>

          <Input
            label="Verification URL (Optional)"
            placeholder="https://skillshop.exceedlms.com/student/award/..."
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />

          <Textarea
            label="Short Description (Optional)"
            placeholder="Describe verified skills (e.g. Verified proficiency in Google Search Ads, bidding strategies, and PMax campaign optimization)..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={4}
          />

          {/* Certificate Image Upload Section */}
          <div className="space-y-3 border border-[var(--border)] p-5 rounded-2xl bg-[var(--bg-card)]/50">
            <label className="block text-sm font-medium text-[var(--text)]">Certificate Image Badge / Document</label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {form.image ? (
              <div className="relative aspect-[16/9] w-full max-w-xl rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group mx-auto">
                <Image src={form.image} alt="Certificate preview" fill className="object-contain p-2" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button type="button" variant="glass" size="sm" icon={<Upload className="w-4 h-4" />} onClick={() => fileInputRef.current?.click()}>
                    Change Image
                  </Button>
                  <Button type="button" variant="danger" size="sm" icon={<X className="w-4 h-4" />} onClick={() => setForm({ ...form, image: '' })}>
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
                    <p className="text-sm font-medium text-primary">Uploading certificate image...</p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">Click or drag image to upload certificate</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">PNG, JPG, WEBP, SVG (Max 5MB)</p>
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="pt-2">
              <Input
                label="Or Direct Image URL"
                placeholder="https://example.com/certificate.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
          </div>

          {/* Form Submit & Cancel Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
            <Button type="submit" variant="primary" size="lg" isLoading={saving} icon={<Save className="w-4 h-4" />}>
              {editId ? 'Save Certificate Changes' : 'Create Certificate'}
            </Button>
            <Link href="/dashboard/certificates">
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

export default function AddCertificatePage() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
      </div>
    }>
      <AddCertificateContent />
    </Suspense>
  );
}
