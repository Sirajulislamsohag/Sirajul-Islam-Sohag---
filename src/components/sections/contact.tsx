'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { SITE_CONFIG, SERVICE_OPTIONS, BUDGET_OPTIONS, SOCIAL_LINKS } from '@/lib/constants';
import { SOCIAL_ICON_MAP } from '@/components/ui/social-icons';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget'),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
      reset();
      toast.success('Message sent successfully!');
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <TextReveal as="p" variant="fade-up" className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </TextReveal>
          <TextReveal as="h2" variant="char-reveal" className="section-heading mb-4">
            Let's Grow Your Business
          </TextReveal>
          <TextReveal as="p" variant="fade-up" delay={0.2} className="section-subheading">
            Ready to scale? Send me a message and let's discuss your marketing goals.
          </TextReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Phone</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Location</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card variant="glass" className="hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Book a Meeting</h4>
                    <a
                      href={SITE_CONFIG.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Schedule on Calendly →
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.4}>
              <div className="flex gap-3">
                {Object.entries(SOCIAL_LINKS).map(([name, url]) => {
                  const Icon = SOCIAL_ICON_MAP[name];
                  return (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
                      title={name.charAt(0).toUpperCase() + name.slice(1)}
                    >
                      {Icon ? <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" /> : name[0].toUpperCase()}
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <Card variant="glass" className="p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-success mb-4" />
                    <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
                    <p className="text-[var(--text-secondary)]">I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        id="name"
                        label="Full Name"
                        placeholder="John Doe"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="john@company.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input
                        id="phone"
                        label="Phone (Optional)"
                        placeholder="+1 234 567 890"
                        {...register('phone')}
                      />
                      <Input
                        id="company"
                        label="Company (Optional)"
                        placeholder="Your Company"
                        {...register('company')}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Select
                        id="service"
                        label="Service Needed"
                        placeholder="Select a service"
                        options={SERVICE_OPTIONS.map((s) => ({ value: s, label: s }))}
                        error={errors.service?.message}
                        {...register('service')}
                      />
                      <Select
                        id="budget"
                        label="Budget Range"
                        placeholder="Select budget"
                        options={BUDGET_OPTIONS.map((b) => ({ value: b, label: b }))}
                        error={errors.budget?.message}
                        {...register('budget')}
                      />
                    </div>
                    <Textarea
                      id="message"
                      label="Your Message (Optional)"
                      placeholder="Tell me about your project and goals..."
                      error={errors.message?.message}
                      {...register('message')}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      icon={<Send className="w-5 h-5" />}
                      className="w-full"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
