import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { UserModel } from '@/models/user';
import { comparePassword, signToken } from '@/lib/auth';
import { loginSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Rate limit: Max 5 attempts per IP per 15 minutes
    if (!checkRateLimit(`login_${ip}`, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { success: false, error: 'Too many login attempts. Please try again in 15 minutes.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message || 'Invalid input';
      return NextResponse.json({ success: false, error: issue }, { status: 400 });
    }
    const cleanEmail = parsed.data.email.trim().toLowerCase();
    await connectDB();
    const user = await UserModel.findOne({ email: cleanEmail }).select('+password');
    if (!user) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    // Check account lockout
    if (user.lockUntil && user.lockUntil > new Date()) {
      const remainingMinutes = Math.ceil((user.lockUntil.getTime() - Date.now()) / (60 * 1000));
      return NextResponse.json(
        { success: false, error: `Account is temporarily locked. Please try again in ${remainingMinutes} minute(s).` },
        { status: 423 }
      );
    }

    const isValid = await comparePassword(parsed.data.password, user.password);
    if (!isValid) {
      user.failedLoginAttempts = (user.failedLoginAttempts || 0) + 1;
      if (user.failedLoginAttempts >= 10) {
        user.lockUntil = new Date(Date.now() + 30 * 60 * 1000);
      }
      await user.save();
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    // Reset failed login counter on success
    if (user.failedLoginAttempts || user.lockUntil) {
      user.failedLoginAttempts = 0;
      user.lockUntil = undefined;
      await user.save();
    }
    const token = signToken({ userId: user._id.toString(), email: user.email });
    const response = NextResponse.json({
      success: true,
      data: { user: { _id: user._id, email: user.email, name: user.name, role: user.role } },
    });
    const isHttps = req.nextUrl.protocol === 'https:';
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: isHttps,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
