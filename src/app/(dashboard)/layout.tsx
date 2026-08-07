'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  LayoutDashboard, Users, Briefcase, FileText, Award,
  Mail, Bell, Settings, LogOut, Menu, X, ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider, useTheme } from '@/providers/theme-provider';
import { Sun, Moon } from 'lucide-react';

const SIDEBAR_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Contacts', href: '/dashboard/contacts', icon: Mail },
  { label: 'Clients', href: '/dashboard/clients', icon: Users },
  { label: 'Portfolio', href: '/dashboard/portfolio', icon: Briefcase },
  { label: 'Blog', href: '/dashboard/blog', icon: FileText },
  { label: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { label: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

function DashboardContent({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const lastNotificationDateRef = useRef<number | null>(null);

  const { data: realtimeData } = useQuery({
    queryKey: ['notifications-latest'],
    queryFn: async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      const res = await fetch('/api/notifications/latest', {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      return res.json();
    },
    refetchInterval: 10000, // Poll every 10 seconds
    enabled: !!user,
  });

  useEffect(() => {
    if (realtimeData?.success && realtimeData?.data?.latestNotification) {
      const latestDate = new Date(realtimeData.data.latestNotification.createdAt).getTime();
      
      // Only toast if we have a previous ref AND the new notification is strictly NEWER
      if (lastNotificationDateRef.current && latestDate > lastNotificationDateRef.current) {
        toast.success(realtimeData.data.latestNotification.title, {
          icon: '🔔',
          duration: 6000,
          style: {
            background: 'var(--bg-card)',
            color: 'var(--text)',
            border: '1px solid var(--border)'
          }
        });
      }
      
      // Always update the ref to the highest seen date
      if (!lastNotificationDateRef.current || latestDate > lastNotificationDateRef.current) {
        lastNotificationDateRef.current = latestDate;
      }
    }
  }, [realtimeData]);

  useEffect(() => {
    async function checkAuth() {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        const headers: Record<string, string> = {};
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch('/api/auth/verify', { headers });
        const data = await res.json();
        if (data.success) {
          setUser(data.data.user);
        } else {
          if (typeof window !== 'undefined') localStorage.removeItem('token');
          router.push('/login');
        }
      } catch {
        if (typeof window !== 'undefined') localStorage.removeItem('token');
        router.push('/login');
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    if (typeof window !== 'undefined') localStorage.removeItem('token');
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-center">
          <span className="text-2xl font-heading font-bold text-gradient">Sirajul</span>
          <div className="mt-4 w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] flex">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 z-50 h-screen w-64 bg-[var(--bg-card)] border-r border-[var(--border)] transition-transform duration-300 lg:sticky lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-5 border-b border-[var(--border)]">
            <Link href="/dashboard" className="text-xl font-heading font-bold text-gradient">Sirajul CMS</Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {SIDEBAR_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text)] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  {item.label}
                </div>
                
                {/* Notification Badge */}
                {item.label === 'Notifications' && realtimeData?.data?.unreadCount > 0 && (
                  <span className="bg-danger/10 text-danger text-[10px] font-bold px-2 py-0.5 rounded-full border border-danger/20 flex items-center justify-center min-w-[20px]">
                    {realtimeData.data.unreadCount > 99 ? '99+' : realtimeData.data.unreadCount}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{user?.name?.[0] || 'A'}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name || 'Admin'}</p>
                <p className="text-xs text-[var(--text-muted)] truncate">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 w-full rounded-lg text-sm text-danger hover:bg-danger/10 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/5 lg:hidden cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="/dashboard/notifications" className="p-2 rounded-lg hover:bg-white/5 relative">
              <Bell className="w-5 h-5" />
              {realtimeData?.data?.unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-danger ring-2 ring-[var(--bg)]"></span>
                </span>
              )}
            </Link>
            <Link href="/" target="_blank" className="text-sm text-primary hover:underline">View Site →</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <DashboardContent>{children}</DashboardContent>
      </ThemeProvider>
    </QueryProvider>
  );
}
