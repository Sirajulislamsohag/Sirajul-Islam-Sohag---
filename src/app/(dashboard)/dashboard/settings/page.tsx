'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    siteName: '',
    siteDescription: '',
    contactEmail: '',
    facebookUrl: '',
    linkedinUrl: '',
    twitterUrl: '',
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/settings');
        const data = await res.json();
        if (data.success && data.data) {
          setForm(data.data);
        }
      } catch {
        toast.error('Failed to load settings');
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if ((await res.json()).success) {
        toast.success('Settings saved successfully');
      }
    } catch {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="animate-pulse h-96 bg-[var(--bg-card)] rounded-2xl" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold">Settings</h1>
        <p className="text-sm text-[var(--text-secondary)]">Manage your site settings and preferences</p>
      </div>

      <Card variant="default">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-heading font-semibold border-b border-[var(--border)] pb-2">General Info</h2>
            <Input label="Site Name" value={form.siteName} onChange={(e) => setForm({ ...form, siteName: e.target.value })} />
            <Textarea label="Site Description" value={form.siteDescription} onChange={(e) => setForm({ ...form, siteDescription: e.target.value })} />
            <Input label="Contact Email" type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} />
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-heading font-semibold border-b border-[var(--border)] pb-2">Social Links</h2>
            <Input label="Facebook URL" value={form.facebookUrl} onChange={(e) => setForm({ ...form, facebookUrl: e.target.value })} />
            <Input label="LinkedIn URL" value={form.linkedinUrl} onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })} />
            <Input label="Twitter URL" value={form.twitterUrl} onChange={(e) => setForm({ ...form, twitterUrl: e.target.value })} />
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary" isLoading={saving} icon={<Save className="w-4 h-4" />}>Save Settings</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
