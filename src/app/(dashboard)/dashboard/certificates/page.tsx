'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
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
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/certificates?limit=50');
        const data = await res.json();
        if (isMounted && data.success) setItems(data.data);
      } catch {
        if (isMounted) toast.error('Failed to load certificates');
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

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
      toast.error('Failed to delete certificate');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Link to Dedicated Add Page */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Certifications</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your professional certifications and awards</p>
        </div>
        <Link href="/dashboard/certificates/add">
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Certificate
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
            <Award className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
            <h3 className="text-lg font-heading font-semibold mb-1">No Certificates Found</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">Click "Add Certificate" to upload your first certificate.</p>
            <Link href="/dashboard/certificates/add">
              <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
                Add Certificate
              </Button>
            </Link>
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
                    <Link href={`/dashboard/certificates/add?edit=${item._id}`}>
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

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => {
          setConfirmOpen(false);
          setItemToDelete(null);
        }}
        onConfirm={executeDelete}
        title="Delete Certificate"
        message="Are you sure you want to delete this certificate? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
