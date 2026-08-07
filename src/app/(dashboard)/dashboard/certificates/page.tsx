'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Modal } from '@/components/ui/modal';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, Award, Upload, Image as ImageIcon, X, Loader2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface Certificate {
  _id: string;
  title: string;
  issuer?: string;
  issuingOrg?: string;
  date?: string;
  issueDate?: string;
  url?: string;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
  image?: string;
  createdAt: string;
}

export default function CertificatesPage() {
  const [items, setItems] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<Certificate | null>(null);
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

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/certificates?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch {
      toast.error('Failed to load certificates');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      toast.error('Title is required');
      return;
    }

    try {
      const url = editItem ? `/api/certificates/${editItem._id}` : '/api/certificates';
      const method = editItem ? 'PATCH' : 'POST';
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
        toast.success(editItem ? 'Certificate updated!' : 'Certificate created!');
        setModalOpen(false);
        setEditItem(null);
        resetForm();
        fetchItems();
      } else {
        toast.error(data.error || 'Failed to save certificate');
      }
    } catch {
      toast.error('Failed to save certificate');
    }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/certificates/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) {
        toast.success('Certificate deleted');
        fetchItems();
      }
    } catch {
      toast.error('Failed to delete');
    }
  };

  const resetForm = () => {
    setForm({ title: '', issuer: '', date: '', url: '', credentialId: '', description: '', image: '' });
  };

  const openEdit = (item: Certificate) => {
    setEditItem(item);
    setForm({
      title: item.title || '',
      issuer: item.issuer || item.issuingOrg || '',
      date: item.date || item.issueDate || '',
      url: item.url || item.credentialUrl || '',
      credentialId: item.credentialId || '',
      description: item.description || '',
      image: item.image || '',
    });
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Certifications</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your professional certifications and awards</p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={<Plus className="w-4 h-4" />}
          onClick={() => {
            resetForm();
            setEditItem(null);
            setModalOpen(true);
          }}
        >
          Add Certificate
        </Button>
      </div>

      {/* Grid List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />
          ))
        ) : items.length === 0 ? (
          <div className="col-span-full py-16 text-center border border-dashed border-[var(--border)] rounded-2xl">
            <Award className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
            <h3 className="text-lg font-heading font-semibold mb-1">No Certificates Found</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Click "Add Certificate" to upload your first certificate.</p>
            <Button
              variant="primary"
              size="sm"
              icon={<Plus className="w-4 h-4" />}
              onClick={() => {
                resetForm();
                setEditItem(null);
                setModalOpen(true);
              }}
            >
              Add Certificate
            </Button>
          </div>
        ) : (
          items.map((item) => {
            const issuerName = item.issuer || item.issuingOrg || 'Issuer';
            const issueDate = item.date || item.issueDate;
            const certUrl = item.url || item.credentialUrl;

            return (
              <Card key={item._id} variant="default" className="group overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Image Preview inside Card */}
                  {item.image ? (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-black/40 border border-[var(--border)] group-hover:border-primary/40 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-base truncate">{item.title}</h3>
                        <p className="text-xs text-[var(--text-secondary)] truncate">{issuerName}</p>
                      </div>
                    </div>
                  )}

                  {item.image && (
                    <div className="mb-3">
                      <h3 className="font-heading font-semibold text-base line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)]">{issuerName}</p>
                    </div>
                  )}

                  <div className="space-y-1 text-xs text-[var(--text-muted)] mb-4">
                    {issueDate && <p>Issued: {issueDate}</p>}
                    {item.credentialId && <p className="truncate font-mono text-[11px]">ID: {item.credentialId}</p>}
                    {item.description && <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-2">{item.description}</p>}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" onClick={() => openEdit(item)} icon={<Edit className="w-3.5 h-3.5" />}>
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => confirmDelete(item._id)} className="text-danger hover:text-danger" icon={<Trash2 className="w-3.5 h-3.5" />}>
                      Delete
                    </Button>
                  </div>
                  {certUrl && (
                    <a
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--text-muted)] hover:text-primary transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Add / Edit Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditItem(null);
        }}
        title={editItem ? 'Edit Certificate' : 'Add Certificate'}
        size="lg"
      >
        <div className="space-y-4">
          <Input
            label="Title"
            placeholder="e.g. Google Ads Search Certification"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <Input
            label="Issuer"
            placeholder="e.g. Google, Meta, HubSpot"
            value={form.issuer}
            onChange={(e) => setForm({ ...form, issuer: e.target.value })}
          />

          <Input
            label="Date"
            type="month"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <Input
            label="URL (optional)"
            placeholder="https://credential.net/..."
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />

          <Input
            label="Credential ID (optional)"
            placeholder="e.g. 12345678"
            value={form.credentialId}
            onChange={(e) => setForm({ ...form, credentialId: e.target.value })}
          />

          <Textarea
            label="Short Description (optional)"
            placeholder="e.g. Verified proficiency in Google Search Ads, bidding strategies, and campaign optimization..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          {/* Certificate Image Upload Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[var(--text)]">Certificate Image</label>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {/* Upload Area / Image Preview */}
            {form.image ? (
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[var(--border)] bg-black/40 group">
                <Image src={form.image} alt="Certificate preview" fill className="object-contain p-2" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button
                    type="button"
                    variant="glass"
                    size="sm"
                    icon={<Upload className="w-4 h-4" />}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change
                  </Button>
                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    icon={<X className="w-4 h-4" />}
                    onClick={() => setForm({ ...form, image: '' })}
                  >
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
                    <p className="text-sm font-medium text-primary">Uploading certificate image...</p>
                  </>
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--text)]">Click or drag & drop to upload certificate image</p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">PNG, JPG, WEBP or SVG (Max 5MB)</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Manual Image URL Input fallback */}
            <div className="mt-2">
              <Input
                label="Or Image URL"
                placeholder="https://example.com/certificate.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>
          </div>

          {/* Form Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
            <Button variant="primary" onClick={handleSubmit} isLoading={uploading}>
              {editItem ? 'Update Certificate' : 'Create Certificate'}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setModalOpen(false);
                setEditItem(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => { setConfirmOpen(false); setItemToDelete(null); }}
        onConfirm={executeDelete}
        title="Delete Certificate"
        message="Are you sure you want to delete this certificate? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
