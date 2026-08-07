'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Users, Briefcase, FileText, Bell, TrendingUp, Eye, Clock } from 'lucide-react';
import Link from 'next/link';

interface DashboardStats {
  totalContacts: number;
  totalClients: number;
  totalPortfolio: number;
  totalBlogs: number;
  unreadNotifications: number;
  recentContacts: Array<{ _id: string; name: string; email: string; service: string; status: string; createdAt: string }>;
}

const STAT_CARDS = [
  { key: 'totalContacts', label: 'Total Contacts', icon: Mail, color: '#4F46E5', href: '/dashboard/contacts' },
  { key: 'totalClients', label: 'Total Clients', icon: Users, color: '#22C55E', href: '/dashboard/clients' },
  { key: 'totalPortfolio', label: 'Portfolio Items', icon: Briefcase, color: '#F59E0B', href: '/dashboard/portfolio' },
  { key: 'totalBlogs', label: 'Blog Posts', icon: FileText, color: '#06B6D4', href: '/dashboard/blog' },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/dashboard/stats');
        const data = await res.json();
        if (data.success) setStats(data.data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-heading font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold">Dashboard</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">Welcome back! Here's your overview.</p>
        </div>
        {stats && stats.unreadNotifications > 0 && (
          <Link href="/dashboard/notifications" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
            <Bell className="w-4 h-4" />
            {stats.unreadNotifications} new notifications
          </Link>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAT_CARDS.map((card) => (
          <Link key={card.key} href={card.href}>
            <Card variant="default" className="group cursor-pointer hover:border-[var(--border-hover)] transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">{card.label}</p>
                  <p className="text-3xl font-number font-bold">{stats ? stats[card.key as keyof DashboardStats] as number : 0}</p>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                  <card.icon className="w-6 h-6" style={{ color: card.color }} />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Contacts */}
      <Card variant="default">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-heading font-semibold">Recent Contacts</h2>
          <Link href="/dashboard/contacts" className="text-sm text-primary hover:underline">View All →</Link>
        </div>
        {stats?.recentContacts && stats.recentContacts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Name</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Email</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Service</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentContacts.map((contact) => (
                  <tr key={contact._id} className="border-b border-[var(--border)] last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 text-sm font-medium">{contact.name}</td>
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{contact.email}</td>
                    <td className="py-3 px-4 text-sm text-[var(--text-secondary)]">{contact.service}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        contact.status === 'new' ? 'bg-primary/10 text-primary' :
                        contact.status === 'read' ? 'bg-warning/10 text-warning' :
                        contact.status === 'replied' ? 'bg-success/10 text-success' :
                        'bg-white/5 text-[var(--text-muted)]'
                      }`}>
                        {contact.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-[var(--text-muted)] font-number">{new Date(contact.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-[var(--text-muted)] text-sm py-8 text-center">No contacts yet.</p>
        )}
      </Card>
    </div>
  );
}
