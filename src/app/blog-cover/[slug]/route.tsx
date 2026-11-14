import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { STATIC_POSTS, getStaticPost } from '@/content/blog';

/** Branded 1200x630 cover image for each blog post: /blog-cover/<slug> */
export const dynamicParams = true;

export function generateStaticParams() {
  return STATIC_POSTS.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getStaticPost(slug);
  const title = post?.title || 'Google Ads Insights';
  const category = post?.category || 'Google Ads';
  const photo = await readFile(join(process.cwd(), 'public/Siraj.jpeg'));
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;
  const fontSize = title.length > 70 ? 54 : title.length > 50 ? 62 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #050816 0%, #0f1535 55%, #1e1b4b 100%)',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#0f1535',
              background: '#f59e0b',
              padding: '8px 20px',
              borderRadius: 999,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
            }}
          >
            {category}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize, fontWeight: 800, lineHeight: 1.12, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={photoSrc} alt="" width={84} height={84} style={{ borderRadius: 999, objectFit: 'cover', border: '4px solid #3b82f6' }} />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 22 }}>
            <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>Sirajul Islam Sohag</div>
            <div style={{ display: 'flex', fontSize: 22, color: '#93c5fd' }}>Certified Google Ads Specialist · sirajulislamsohag.com</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800' } },
  );
}
