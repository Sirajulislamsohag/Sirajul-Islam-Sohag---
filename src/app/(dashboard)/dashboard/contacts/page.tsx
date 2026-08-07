'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Search, Download, Trash2, Eye, Mail, Filter, UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';

interface Contact {
  _id: string; name: string; email: string; phone?: string; company?: string;
  service: string; budget: string; message: string; status: string; createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false, title: '', message: '', confirmText: '', variant: 'danger' as 'danger' | 'primary', onConfirm: () => {}
  });
  const closeConfirm = () => setConfirmConfig(prev => ({ ...prev, isOpen: false }));

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: page.toString(), limit: '20' });
      if (search) params.set('search', search);
      if (statusFilter) params.set('status', statusFilter);
      const res = await fetch(`/api/contacts?${params}`);
      const data = await res.json();
      if (data.success) {
        setContacts(data.data);
        setTotalPages(data.pagination.totalPages);
      }
    } catch { toast.error('Failed to load contacts'); }
    finally { setLoading(false); }
  }, [page, search, statusFilter]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
      if ((await res.json()).success) { toast.success('Status updated'); fetchContacts(); }
    } catch { toast.error('Failed to update'); }
  };

  const confirmDelete = (id: string) => {
    setConfirmConfig({
      isOpen: true,
      title: 'Delete Contact',
      message: 'Are you sure you want to delete this contact? This action cannot be undone.',
      confirmText: 'Delete',
      variant: 'danger',
      onConfirm: async () => {
        try {
          const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
          if ((await res.json()).success) { toast.success('Deleted'); fetchContacts(); }
        } catch { toast.error('Failed to delete'); }
      }
    });
  };

  const exportCSV = () => { window.open('/api/contacts/export', '_blank'); };

  const confirmConvert = (contact: Contact) => {
    setConfirmConfig({
      isOpen: true,
      title: 'Add as Client',
      message: `Are you sure you want to add ${contact.name} as a new Client?`,
      confirmText: 'Add Client',
      variant: 'primary',
      onConfirm: async () => {
        try {
          const payload = {
            name: contact.name,
            company: contact.company || contact.name,
            email: contact.email,
            phone: contact.phone || '',
            status: 'new',
            projectStatus: 'pending',
            notes: contact.message
          };
          const res = await fetch('/api/clients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          if (data.success) {
            toast.success('Contact converted to Client successfully!');
          } else {
            toast.error(data.error || 'Failed to add client');
          }
        } catch {
          toast.error('Failed to connect to server');
        }
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold">Contacts</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your contact inquiries</p>
        </div>
        <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />} onClick={exportCSV}>Export CSV</Button>
      </div>

      {/* Filters */}
      <Card variant="default">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search by name or email..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
          </div>
          <div className="flex gap-2">
            {['', 'new', 'read', 'replied', 'archived'].map((s) => (
              <button key={s} onClick={() => { setStatusFilter(s); setPage(1); }} className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${statusFilter === s ? 'bg-primary text-white' : 'bg-white/5 text-[var(--text-secondary)] hover:bg-white/10'}`}>
                {s || 'All'}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card variant="default" className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-white/[0.02]">
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Email</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase hidden md:table-cell">Service</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase hidden md:table-cell">Date</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[var(--border)]">
                    {Array.from({ length: 6 }).map((_, j) => (<td key={j} className="py-4 px-4"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>))}
                  </tr>
                ))
              ) : contacts.length === 0 ? (
                <tr><td colSpan={6} className="py-12 text-center text-[var(--text-muted)]">No contacts found.</td></tr>
              ) : (
                contacts.map((contact) => (
                  <tr key={contact._id} className="border-b border-[var(--border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-sm font-medium">{contact.name}</td>
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{contact.email}</td>
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)] hidden md:table-cell">{contact.service}</td>
                    <td className="py-3 px-4">
                      <select value={contact.status} onChange={(e) => updateStatus(contact._id, e.target.value)} className="text-xs rounded-lg px-2 py-1 bg-transparent border border-[var(--border)] cursor-pointer">
                        <option value="new">New</option><option value="read">Read</option><option value="replied">Replied</option><option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-sm text-[var(--text-muted)] font-number hidden md:table-cell">{new Date(contact.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => { setSelectedContact(contact); setModalOpen(true); }} className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer" title="View Details"><Eye className="w-4 h-4" /></button>
                        <button onClick={() => confirmConvert(contact)} className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer text-primary hover:text-primary" title="Add as Client"><UserPlus className="w-4 h-4" /></button>
                        <a href={`mailto:${contact.email}`} className="p-1.5 rounded-lg hover:bg-white/5" title="Email"><Mail className="w-4 h-4" /></a>
                        <button onClick={() => confirmDelete(contact._id)} className="p-1.5 rounded-lg hover:bg-danger/10 text-danger cursor-pointer" title="Delete"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--border)]">
            <p className="text-xs text-[var(--text-muted)]">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>Previous</Button>
              <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</Button>
            </div>
          </div>
        )}
      </Card>

      {/* Contact Detail Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Contact Details" size="lg">
        {selectedContact && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Name</p><p className="font-medium">{selectedContact.name}</p></div>
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Email</p><p className="text-primary">{selectedContact.email}</p></div>
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Phone</p><p>{selectedContact.phone || 'N/A'}</p></div>
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Company</p><p>{selectedContact.company || 'N/A'}</p></div>
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Service</p><p>{selectedContact.service}</p></div>
              <div><p className="text-xs text-[var(--text-muted)] mb-1">Budget</p><p>{selectedContact.budget}</p></div>
            </div>
            <div><p className="text-xs text-[var(--text-muted)] mb-1">Message</p><p className="text-[var(--text-secondary)] leading-relaxed bg-white/5 p-4 rounded-xl">{selectedContact.message}</p></div>
            <div className="flex gap-3 pt-2">
              <a href={`mailto:${selectedContact.email}`}><Button variant="primary" size="sm" icon={<Mail className="w-4 h-4" />}>Reply via Email</Button></a>
              <Button variant="outline" size="sm" onClick={() => { updateStatus(selectedContact._id, 'replied'); setModalOpen(false); }}>Mark as Replied</Button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmModal
        isOpen={confirmConfig.isOpen}
        onClose={closeConfirm}
        onConfirm={confirmConfig.onConfirm}
        title={confirmConfig.title}
        message={confirmConfig.message}
        confirmText={confirmConfig.confirmText}
        variant={confirmConfig.variant}
      />
    </div>
  );
}
