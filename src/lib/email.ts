import nodemailer from 'nodemailer';
import { ContactMessage } from '@/types';

function escapeHtml(str: unknown): string {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendOwnerNotification(contact: Partial<ContactMessage>) {
  const transporter = createTransport();
  const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER;

  const safeName = escapeHtml(contact.name || 'Anonymous');
  const safeEmail = escapeHtml(contact.email || '');
  const safePhone = escapeHtml(contact.phone || 'N/A');
  const safeCompany = escapeHtml(contact.company || 'N/A');
  const safeService = escapeHtml(contact.service || 'General Inquiry');
  const safeBudget = escapeHtml(contact.budget || 'Flexible');
  const safeMessage = escapeHtml(contact.message || 'No message provided');

  await transporter.sendMail({
    from: `"Sirajul Portfolio" <${process.env.SMTP_USER}>`,
    to: ownerEmail,
    subject: `New Contact: ${safeName} - ${safeService}`,
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #050816; color: #F9FAFB; padding: 40px; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="background: linear-gradient(135deg, #4F46E5, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px;">New Contact Inquiry</h1>
        </div>
        <div style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #4F46E5;">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Phone</td><td style="padding: 8px 0;">${safePhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Company</td><td style="padding: 8px 0;">${safeCompany}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Service</td><td style="padding: 8px 0; color: #4F46E5; font-weight: 600;">${safeService}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 14px;">Budget</td><td style="padding: 8px 0;">${safeBudget}</td></tr>
          </table>
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #64748B; font-size: 14px; margin-bottom: 8px;">Message</p>
            <p style="line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
        <div style="margin-top: 24px; text-align: center; color: #64748B; font-size: 12px;">
          <p>Submitted at ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
  });
}

export async function sendCustomerConfirmation(email: string, name: string) {
  const transporter = createTransport();
  const safeName = escapeHtml(name || 'there');
  const safeEmail = escapeHtml(email);

  await transporter.sendMail({
    from: `"Sirajul Islam Sohag - Digital Marketing" <${process.env.SMTP_USER}>`,
    to: safeEmail,
    subject: 'Thank You for Reaching Out! - Sirajul',
    html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #050816; color: #F9FAFB; padding: 40px; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="background: linear-gradient(135deg, #4F46E5, #8B5CF6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px;">Sirajul</h1>
        </div>
        <h2 style="font-size: 22px; margin-bottom: 16px;">Hi ${safeName}! 👋</h2>
        <p style="color: #CBD5E1; line-height: 1.8; margin-bottom: 16px;">
          Thank you for reaching out! I've received your message and will review it carefully. I typically respond within 24 hours.
        </p>
        <p style="color: #CBD5E1; line-height: 1.8; margin-bottom: 24px;">In the meantime, here's what you can do:</p>
        <div style="background: rgba(79,70,229,0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(79,70,229,0.2); margin-bottom: 24px;">
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="padding: 8px 0; color: #CBD5E1;">✅ Book a free strategy call on <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'}" style="color: #4F46E5;">Calendly</a></li>
            <li style="padding: 8px 0; color: #CBD5E1;">✅ Check out my <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://sirajmarketing.com'}/portfolio" style="color: #4F46E5;">case studies</a></li>
            <li style="padding: 8px 0; color: #CBD5E1;">✅ Follow me on <a href="https://linkedin.com/in/sirajul-islam-sohag-04996428a/" style="color: #4F46E5;">LinkedIn</a></li>
          </ul>
        </div>
        <p style="color: #CBD5E1; line-height: 1.8;">Looking forward to helping you grow!</p>
        <p style="color: #F9FAFB; font-weight: 600; margin-top: 16px;">Best regards,<br/>Sirajul Islam Sohag</p>
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: #64748B; font-size: 12px;">
          <p>© ${new Date().getFullYear()} Sirajul - Digital Marketing Consultant</p>
        </div>
      </div>
    `,
  });
}
