import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is strictly required.');
  }
  return secret;
}

export function signToken(payload: { userId: string; email: string }): string {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: JWT_EXPIRES_IN as string & jwt.SignOptions['expiresIn'] });
}

export function verifyToken(token: string): { userId: string; email: string } | null {
  try {
    return jwt.verify(token, getJwtSecret()) as { userId: string; email: string };
  } catch {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hashed: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashed);
  } catch {
    return false;
  }
}

export function getTokenFromRequest(req: NextRequest): string | null {
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return req.cookies.get('token')?.value || null;
}

export function authenticateRequest(req: NextRequest): { userId: string; email: string } | null {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  return verifyToken(token);
}
