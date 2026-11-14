import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/db';
import { BlogModel } from '@/models/blog';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShareButton } from '@/components/ui/share-button';
import { Clock, Calendar, User, ArrowLeft } from 'lucide-react';
import { RichParagraph, extractFaq } from '@/components/blog/rich-text';
import { getStaticPost, blogCover } from '@/content/blog';
import { absoluteUrl, jsonLdScript } from '@/lib/seo';

interface BlogSection {
  title?: string;
  paragraphs: string[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt: string;
  sections: BlogSection[];
  thumbnail?: string;
  tags: string[];
  author: string;
  readTime: number;
  createdAt: string;
  updatedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
}


async function getBlogPost(slug: string): Promise<BlogPost> {
  const fromCode = getStaticPost(slug);
  if (fromCode) {
    return {
      _id: `static-${fromCode.slug}`,
      title: fromCode.title,
      slug: fromCode.slug,
      category: fromCode.category,
      excerpt: fromCode.excerpt,
      sections: fromCode.sections,
      thumbnail: fromCode.thumbnail || blogCover(fromCode.slug),
      tags: fromCode.tags,
      author: fromCode.author,
      readTime: fromCode.readTime,
      createdAt: fromCode.publishedAt,
      updatedAt: fromCode.updatedAt || fromCode.publishedAt,
      seo: fromCode.seo,
    };
  }

  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      const blog = await BlogModel.findOne({ slug, status: 'published' }).lean();
      if (blog) {
        return {
          _id: blog._id.toString(),
          title: blog.title,
          slug: blog.slug,
          category: blog.category,
          excerpt: blog.excerpt || '',
          sections: blog.sections || [],
          thumbnail: blog.thumbnail,
          tags: blog.tags || [],
          author: blog.author || 'Sirajul Islam Sohag',
          readTime: blog.readTime || 5,
          createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : new Date().toISOString(),
          seo: blog.seo,
        };
      }
    }
  } catch (error) {
    console.warn('Database blog lookup error, returning 404:', error);
  }

  // No post with this slug: return a real 404 instead of a placeholder page.
  notFound();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sirajulislamsohag.com').replace(/\/+$/, '');
  const url = `${siteUrl}/blog/${post.slug}`;
  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const rawImage = post.seo?.ogImage || post.thumbnail || blogCover(post.slug);
  const image = rawImage.startsWith('/') ? `${siteUrl}${rawImage}` : rawImage;

  return {
    title: { absolute: title },
    description,
    keywords: post.seo?.keywords?.length ? post.seo.keywords : post.tags,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.createdAt ? new Date(post.createdAt).toISOString() : undefined,
      authors: [post.author || 'Sirajul Islam Sohag'],
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const faq = extractFaq(post.sections || []);
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      image: [absoluteUrl(post.thumbnail && !post.thumbnail.startsWith('http') ? post.thumbnail : blogCover(post.slug))],
      datePublished: post.createdAt,
      dateModified: post.updatedAt || post.createdAt,
      mainEntityOfPage: url,
      url,
      keywords: post.seo?.keywords?.length ? post.seo.keywords.join(', ') : post.tags?.join(', '),
      articleSection: post.category,
      author: { '@type': 'Person', name: post.author, url: absoluteUrl('/about') },
      publisher: { '@type': 'Person', name: 'Sirajul Islam Sohag', url: absoluteUrl('/') },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    ...(faq.length
      ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      <article className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border)]">
            <Link href="/blog">
              <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
                Back to Articles
              </Button>
            </Link>

            <div className="flex items-center gap-6 text-xs md:text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {post.createdAt?.split('T')[0]}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime} min read
              </span>
              <ShareButton title={post.title} />
            </div>
          </div>

          {/* Tags & Category */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.category && (
              <Badge variant="primary" className="text-xs uppercase font-bold tracking-wider">
                {post.category.replace(/-/g, ' ')}
              </Badge>
            )}
            {post.tags?.filter((t) => t.toLowerCase() !== post.category?.toLowerCase()).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-tight text-[var(--text)] mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10">{post.excerpt}</p>
          )}

          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="w-full aspect-[1200/630] relative rounded-2xl overflow-hidden mb-12 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Body Content from Sections */}
          <div className="max-w-none text-[var(--text-secondary)] leading-relaxed space-y-12 text-base md:text-lg">
            {post.sections?.map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                {section.title && (
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text)]">
                    {section.title}
                  </h2>
                )}
                {section.paragraphs?.map((para, pIdx) => (
                  <RichParagraph key={pIdx} id={`s${sIdx}p${pIdx}`} text={para} />
                ))}
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col md:flex-row items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/siraj-profile.webp"
              alt="Sirajul Islam Sohag, Google Ads Expert"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-primary/40 shadow-md"
            />
            <div>
              <h4 className="text-lg font-heading font-bold text-[var(--text)] mb-1">
                Written by <Link href="/about" className="hover:text-primary transition-colors">{post.author}</Link>
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Google Ads Expert
              </p>
            </div>
          </div>
        </div>
      </article>

      <Contact />
      <Footer />
    </>
  );
}
