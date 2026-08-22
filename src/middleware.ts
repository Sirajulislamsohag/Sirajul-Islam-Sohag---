import { NextRequest, NextResponse } from 'next/server';

function base64UrlToArrayBuffer(base64Url: string): ArrayBuffer {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4;
  const padded = pad ? base64 + '='.repeat(4 - pad) : base64;
  const binary = atob(padded);
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return buffer;
}

async function verifyJwtInEdge(token: string, secret: string): Promise<boolean> {
  if (!token || !secret) return false;
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    const [headerB64, payloadB64, signatureB64] = parts;

    // Check expiration timestamp
    const payloadJson = atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/'));
    const payload = JSON.parse(payloadJson);
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return false;
    }

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const signature = base64UrlToArrayBuffer(signatureB64);
    const data = encoder.encode(`${headerB64}.${payloadB64}`);

    return await crypto.subtle.verify('HMAC', key, signature, data);
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;
  const jwtSecret = process.env.JWT_SECRET || '';

  // Protect Admin Dashboard Routes
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }

    const isValid = await verifyJwtInEdge(token, jwtSecret);
    if (!isValid) {
      const loginUrl = new URL('/login', req.url);
      const redirectResponse = NextResponse.redirect(loginUrl);
      redirectResponse.cookies.delete('token');
      return redirectResponse;
    }
  }

  // Redirect Validly Authenticated Users Away From Login Page
  if (pathname === '/login' && token) {
    const isValid = await verifyJwtInEdge(token, jwtSecret);
    if (isValid) {
      const dashboardUrl = new URL('/dashboard', req.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  const response = NextResponse.next();

  // Enterprise Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://tagmanager.google.com https://assets.calendly.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com; img-src 'self' blob: data: https://res.cloudinary.com https://fiverr-res.cloudinary.com https://images.unsplash.com https://ui-avatars.com https://cdn.simpleicons.org https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://calendly.com https://assets.calendly.com https://www.googletagmanager.com; connect-src 'self' https://calendly.com https://assets.calendly.com https://cdn.simpleicons.org https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; media-src 'self' https://res.cloudinary.com; object-src 'none'; base-uri 'self'; form-action 'self';"
  );

  return response;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/api/:path*'],
};
