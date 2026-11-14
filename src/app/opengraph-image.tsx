import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Sirajul Islam Sohag - Certified Google Ads Consultant';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/Siraj.jpeg'));
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #050816 0%, #0f1535 60%, #1e1b4b 100%)',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: 48 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#93c5fd',
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Certified Google Ads Expert
          </div>
          <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
            Sirajul Islam Sohag
          </div>
          <div style={{ display: 'flex', fontSize: 32, color: '#cbd5e1', lineHeight: 1.35 }}>
            More qualified leads and sales from Google Ads
          </div>
          <div style={{ display: 'flex', fontSize: 24, color: '#64748b', marginTop: 40 }}>
            sirajulislamsohag.com
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={340}
          style={{ borderRadius: 9999, objectFit: 'cover', border: '6px solid #3b82f6' }}
        />
      </div>
    ),
    { ...size }
  );
}
