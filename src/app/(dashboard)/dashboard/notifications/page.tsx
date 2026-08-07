'use client';

import { useEffect, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/ui/confirm-modal';
import { Bell, Check, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface Notification {
  _id: string; title: string; message: string; read: boolean;
  type: string; createdAt: string;
}

export default function NotificationsPage() {
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/notifications?limit=50');
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch { toast.error('Failed to load notifications'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const markAsRead = async (id: string) => {
    try {
      const res = await fetch(`/api/notifications/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ read: true }) });
      if ((await res.json()).success) { fetchItems(); }
    } catch { toast.error('Failed to update'); }
  };

  const markAllAsRead = async () => {
    try {
      const res = await fetch(`/api/notifications/mark-all-read`, { method: 'POST' });
      if ((await res.json()).success) { toast.success('All marked as read'); fetchItems(); }
    } catch { toast.error('Failed to update all'); }
  };

  const confirmDelete = (id: string) => {
    setItemToDelete(id);
    setConfirmOpen(true);
  };

  const executeDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/notifications/${itemToDelete}`, { method: 'DELETE' });
      if ((await res.json()).success) { toast.success('Deleted'); fetchItems(); }
    } catch { toast.error('Failed to delete'); }
    finally { setConfirmOpen(false); setItemToDelete(null); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Notifications</h1>
          <p className="text-sm text-[var(--text-secondary)]">Stay updated with system alerts</p>
        </div>
        <Button variant="outline" size="sm" onClick={markAllAsRead} icon={<Check className="w-4 h-4" />}>Mark All as Read</Button>
      </div>

      <div className="space-y-4">
        {loading ? Array.from({ length: 4 }).map((_, i) => (<div key={i} className="h-24 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />)) :
          items.length === 0 ? (
            <p className="text-[var(--text-muted)] text-sm py-8 text-center">No notifications found.</p>
          ) : items.map((item) => (
            <Card key={item._id} variant="default" className={`flex gap-4 ${!item.read ? 'bg-primary/5 border-primary/20' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${!item.read ? 'bg-primary/20 text-primary' : 'bg-white/5 text-[var(--text-muted)]'}`}>
                <Bell className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h3 className={`font-medium ${!item.read ? 'text-[var(--text)]' : 'text-[var(--text-secondary)]'}`}>{item.title}</h3>
                  <span className="text-xs text-[var(--text-muted)]">{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-1">{item.message}</p>
                <div className="flex gap-2 mt-3">
                  {!item.read && <Button variant="ghost" size="sm" onClick={() => markAsRead(item._id)} icon={<Check className="w-3 h-3" />}>Mark Read</Button>}
                  <Button variant="ghost" size="sm" onClick={() => confirmDelete(item._id)} className="text-danger" icon={<Trash2 className="w-3 h-3" />}>Delete</Button>
                </div>
              </div>
            </Card>
          ))
        }
      </div>

      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => { setConfirmOpen(false); setItemToDelete(null); }}
        onConfirm={executeDelete}
        title="Delete Notification"
        message="Are you sure you want to delete this notification? This action cannot be undone."
        confirmText="Delete"
      />
    </div>
  );
}
