'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';
import { Select } from '@/components/ui/select';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Plus, Trash2, Edit, Users, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

interface Client {
  _id: string; 
  name: string; 
  company: string; 
  email?: string;
  phone?: string;
  status: string;
  projectStatus: string; 
  avatar?: string; 
  createdAt: string;
}

const PROJECT_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'on-hold', label: 'On Hold' },
];

const STATUS_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export default function ClientsPage() {
  const [items, setItems] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<Client | null>(null);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', status: 'new', projectStatus: 'pending' });

  const fetchItems = useCallback(async () => {
    try {
      const params = new URLSearchParams({ page: page.toString(), limit: '20' });
      if (search) params.set('search', search);
      if (statusFilter) params.set('status', statusFilter);
      
      const res = await fetch(`/api/clients?${params}`);
      const data = await res.json();
      if (data.success) {
        setItems(data.data);
        setTotalPages(data.pagination.totalPages);
      }
    } catch { toast.error('Failed to load clients'); }
    finally { setLoading(false); }
  }, [page, search, statusFilter]);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ page: page.toString(), limit: '20' });
        if (search) params.set('search', search);
        if (statusFilter) params.set('status', statusFilter);
        
        const res = await fetch(`/api/clients?${params}`);
        const data = await res.json();
        if (isMounted && data.success) {
          setItems(data.data);
          setTotalPages(data.pagination.totalPages);
        }
      } catch {
        if (isMounted) toast.error('Failed to load clients');
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, [page, search, statusFilter]);

  const handleSubmit = async () => {
    try {
      const url = editItem ? `/api/clients/${editItem._id}` : '/api/clients';
      const method = editItem ? 'PATCH' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if ((await res.json()).success) { 
        toast.success(editItem ? 'Client updated' : 'Client created'); 
        setModalOpen(false); 
        setEditItem(null); 
        resetForm(); 
        fetchItems(); 
      }
    } catch { toast.error('Failed to save client'); }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/clients/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
      if ((await res.json()).success) { toast.success('Status updated'); fetchItems(); }
    } catch { toast.error('Failed to update status'); }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/clients/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) { toast.success('Deleted successfully'); fetchItems(); }
    } catch { toast.error('Failed to delete'); }
  };

  const resetForm = () => setForm({ name: '', company: '', email: '', phone: '', status: 'new', projectStatus: 'pending' });

  const openEdit = (item: Client) => {
    setEditItem(item);
    setForm({ 
      name: item.name, 
      company: item.company, 
      email: item.email || '', 
      phone: item.phone || '',
      status: item.status || 'new',
      projectStatus: item.projectStatus || 'pending'
    });
    setModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold">Clients</h1>
          <p className="text-sm text-[var(--text-secondary)]">Manage your clients and leads</p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />} onClick={() => { resetForm(); setEditItem(null); setModalOpen(true); }}>Add Client</Button>
      </div>

      {/* Filters */}
      <Card variant="default">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="Search by name, email, or phone..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
          </div>
          <div className="flex gap-2">
            {['', 'new', 'active', 'inactive'].map((s) => (
              <button 
                key={s} 
                onClick={() => { setStatusFilter(s); setPage(1); }} 
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${statusFilter === s ? 'bg-primary text-white' : 'bg-white/5 text-[var(--text-secondary)] hover:bg-white/10'}`}
              >
                {s ? s.charAt(0).toUpperCase() + s.slice(1) : 'All'}
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
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Client</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase hidden md:table-cell">Contact Info</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase hidden md:table-cell">Project</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[var(--border)]">
                    {Array.from({ length: 5 }).map((_, j) => (<td key={j} className="py-4 px-4"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>))}
                  </tr>
                ))
              ) : items.length === 0 ? (
                <tr><td colSpan={5} className="py-12 text-center text-[var(--text-muted)]">No clients found.</td></tr>
              ) : (
                items.map((item) => (
                  <tr key={item._id} className="border-b border-[var(--border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hidden sm:flex">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-[var(--text-secondary)]">{item.company}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                       <p className="text-sm text-[var(--text)]">{item.email || 'N/A'}</p>
                       <p className="text-xs text-[var(--text-secondary)]">{item.phone || 'N/A'}</p>
                    </td>
                    <td className="py-3 px-4">
                      <select value={item.status || 'active'} onChange={(e) => updateStatus(item._id, e.target.value)} className="text-xs rounded-lg px-2 py-1 bg-transparent border border-[var(--border)] cursor-pointer">
                        <option value="new">New</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <span className={`text-xs px-2 py-1 rounded-full ${item.projectStatus === 'completed' ? 'bg-success/20 text-success' : item.projectStatus === 'in-progress' ? 'bg-primary/20 text-primary' : 'bg-white/10 text-[var(--text-secondary)]'}`}>
                        {item.projectStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {item.email && <a href={`mailto:${item.email}`} className="p-1.5 rounded-lg hover:bg-white/5"><Mail className="w-4 h-4" /></a>}
                        <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => confirmDelete(item._id)} className="p-1.5 rounded-lg hover:bg-danger/10 text-danger cursor-pointer"><Trash2 className="w-4 h-4" /></button>
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

      {/* Add/Edit Modal */}
      <Modal isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditItem(null); }} title={editItem ? 'Edit Client' : 'Add Client'} size="md">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Client Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input label="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Input label="Phone Number (Optional)" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select label="Client Status" options={STATUS_OPTIONS} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
            <Select label="Project Status" options={PROJECT_STATUS_OPTIONS} value={form.projectStatus} onChange={(e) => setForm({ ...form, projectStatus: e.target.value })} />
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
            <Button variant="primary" onClick={handleSubmit}>{editItem ? 'Update Client' : 'Create Client'}</Button>
            <Button variant="ghost" onClick={() => { setModalOpen(false); setEditItem(null); }}>Cancel</Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => { setConfirmOpen(false); setItemToDelete(null); }}
        onConfirm={executeDelete}
        title="Delete Client"
        message="Are you sure you want to delete this client? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
