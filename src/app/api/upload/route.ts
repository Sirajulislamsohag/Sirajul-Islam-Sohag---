import { NextRequest, NextResponse } from 'next/server';
import { authenticateRequest } from '@/lib/auth';
import { uploadToCloudinary } from '@/lib/cloudinary';

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'application/pdf',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(req: NextRequest) {
  try {
    const auth = authenticateRequest(req);
    if (!auth) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file || typeof file !== 'object' || !file.name) {
      return NextResponse.json({ success: false, error: 'No valid file provided' }, { status: 400 });
    }

    // 1. Validate MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: `Invalid file type (${file.type}). Allowed: JPG, PNG, WebP, GIF, SVG, PDF` },
        { status: 400 }
      );
    }

    // 2. Enforce file size limit (10MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: `File size exceeds the 10MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB)` },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 3. Sanitize folder name
    const rawFolder = (formData.get('folder') as string) || 'siraj-portfolio';
    const folder = rawFolder.replace(/[^a-zA-Z0-9-_]/g, '') || 'siraj-portfolio';

    const result = await uploadToCloudinary(buffer, folder);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
