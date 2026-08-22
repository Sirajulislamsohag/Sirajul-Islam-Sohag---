'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Welcome back!');
        router.push('/dashboard');
      } else {
        toast.error(data.error || 'Invalid credentials');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[var(--bg)]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-gradient mb-2">Sirajul CMS</h1>
          <p className="text-[var(--text-secondary)]">Sign in to your dashboard</p>
        </div>
        <Card variant="glass" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input id="email" label="Email" type="email" placeholder="admin@siraj.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input id="password" label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={loading} icon={<Lock className="w-4 h-4" />}>Sign In</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
