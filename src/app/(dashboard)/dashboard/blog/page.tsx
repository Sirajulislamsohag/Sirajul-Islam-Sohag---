'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Modal } from '@/components/ui/modal';
import { Select } from '@/components/ui/select';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, FileText, Globe, Upload, Loader2, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

interface BlogPost {
  _id: string; title: string; slug: string; excerpt: string; thumbnail?: string;
  sections: BlogSection[];
  status: string; tags: string[]; createdAt: string;
}

const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
];

export default function BlogPage() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<BlogPost | null>(null);
  
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({ 
    title: '', slug: '', excerpt: '', tags: '', status: 'draft', thumbnail: '',
    sections: [{ title: '', paragraphs: [''] }] as BlogSection[]
  });

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/blogs?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch { toast.error('Failed to load'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { toast.error('Image must be less than 5MB'); return; }
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setForm(prev => ({ ...prev, thumbnail: data.url }));
        toast.success('Image uploaded');
      } else throw new Error(data.error);
    } catch {
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    try {
      const body = { 
        ...form, 
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        sections: form.sections.map(s => ({ ...s, paragraphs: s.paragraphs.filter(p => p.trim() !== '') }))
      };
      const url = editItem ? `/api/blogs/${editItem._id}` : '/api/blogs';
      const method = editItem ? 'PATCH' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if ((await res.json()).success) { toast.success(editItem ? 'Updated!' : 'Created!'); setModalOpen(false); setEditItem(null); resetForm(); fetchItems(); }
    } catch { toast.error('Failed to save'); }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/blogs/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) { toast.success('Deleted'); fetchItems(); }
    } catch { toast.error('Failed to delete'); }
  };

  const resetForm = () => setForm({ 
    title: '', slug: '', excerpt: '', tags: '', status: 'draft', thumbnail: '', 
    sections: [{ title: '', paragraphs: [''] }] 
  });

  const openEdit = (item: BlogPost) => {
    setEditItem(item);
    setForm({ 
      title: item.title || '', 
      slug: item.slug || '', 
      excerpt: item.excerpt || '', 
      thumbnail: item.thumbnail || '',
      sections: item.sections?.length > 0 ? item.sections : [{ title: '', paragraphs: [''] }],
      tags: (item.tags || []).join(', '), 
      status: item.status || 'draft' 
    });
    setModalOpen(true);
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Blog Posts</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your blog content</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => { resetForm(); setEditItem(null); setModalOpen(true); }}>Add New</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? Array.from({ length: 6 }).map((_, i) => (<div key={i} className="h-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />)) :
          items.map((item) => (
            <Card key={item._id} variant="default" className="group p-0 overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 relative flex items-center justify-center">
                {item.thumbnail ? (
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
                ) : (
                  <FileText className="w-8 h-8 text-[var(--text-muted)]" />
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-semibold text-sm line-clamp-2">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>{item.status}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2">{item.excerpt}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => openEdit(item)} icon={<Edit className="w-3 h-3" />}>Edit</Button>
                  <Button variant="ghost" size="sm" onClick={() => confirmDelete(item._id)} className="text-danger" icon={<Trash2 className="w-3 h-3" />}>Delete</Button>
                </div>
              </div>
            </Card>
          ))
        }
      </div>

      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditItem(null); }} title={editItem ? 'Edit Blog Post' : 'Add Blog Post'} size="xl">
        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
          
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-') })} />
            <Input label="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
            <Select label="Status" options={STATUS_OPTIONS} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
            <Input label="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Feature Image (Thumbnail)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-[16/10] rounded-xl border-2 border-dashed border-[var(--border)] flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
                {uploading ? (
                  <Loader2 className="w-6 h-6 text-primary animate-spin" />
                ) : form.thumbnail ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={form.thumbnail} alt="Thumbnail" className="object-cover rounded-xl w-full h-full absolute inset-0" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
                      <span className="text-white text-sm font-medium">Change Image</span>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-[var(--text-muted)] mb-2" />
                    <span className="text-xs text-[var(--text-secondary)]">Click to upload image</span>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-center gap-2">
                <Input label="Or Image URL" value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} placeholder="https://..." />
                <Textarea label="Excerpt (Summary)" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="h-full min-h-[100px]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[var(--text-secondary)]">Content Sections</label>
              <Button variant="outline" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => setForm({ ...form, sections: [...form.sections, { title: '', paragraphs: [''] }] })}>
                Add Section
              </Button>
            </div>
            
            <div className="space-y-4">
              {form.sections.map((section, sIndex) => (
                <div key={sIndex} className="p-4 rounded-xl border border-[var(--border)] bg-white/[0.01] space-y-4">
                  <div className="flex gap-2 items-start">
                    <div className="flex-1">
                      <Input placeholder={`Section ${sIndex + 1} Title (Optional)`} value={section.title || ''} onChange={(e) => updateSection(sIndex, 'title', e.target.value)} />
                    </div>
                    {form.sections.length > 1 && (
                      <button onClick={() => setForm({ ...form, sections: form.sections.filter((_, i) => i !== sIndex) })} className="p-2.5 text-[var(--text-muted)] hover:text-danger hover:bg-danger/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-3 pl-4 border-l-2 border-[var(--border)]">
                    {section.paragraphs.map((para, pIndex) => (
                      <div key={pIndex} className="flex gap-2 items-start">
                        <div className="flex-1">
                          <Textarea placeholder={`Paragraph ${pIndex + 1}`} value={para} onChange={(e) => updateParagraph(sIndex, pIndex, e.target.value)} className="min-h-[80px]" />
                        </div>
                        {section.paragraphs.length > 1 && (
                          <button onClick={() => updateSection(sIndex, 'paragraphs', section.paragraphs.filter((_, i) => i !== pIndex))} className="p-2 text-[var(--text-muted)] hover:text-danger rounded-lg transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" icon={<Plus className="w-3 h-3" />} onClick={() => updateSection(sIndex, 'paragraphs', [...section.paragraphs, ''])}>
                      Add Paragraph
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[var(--border)] sticky bottom-0 bg-[var(--bg)] pb-2 z-10">
            <Button variant="primary" onClick={handleSubmit}>{editItem ? 'Update' : 'Create'}</Button>
            <Button variant="ghost" onClick={() => { setModalOpen(false); setEditItem(null); }}>Cancel</Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => { setConfirmOpen(false); setItemToDelete(null); }}
        onConfirm={executeDelete}
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
