import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, SITE_URL } from '../../../lib/blog';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      images: [post.image],
      publishedTime: post.dateISO || undefined,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.dateISO || undefined,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'GoTravel Sri Lanka' },
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/green_water.JPG')" }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="px-4 md:px-8 py-8">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={700}
            priority
            className="w-full h-[260px] md:h-[420px] object-cover"
          />
          <div className="p-6 md:p-10">
            <Link href="/Blogpage" className="text-sm text-indigo-500 hover:underline">
              ← All articles
            </Link>
            <h1 className="mt-3 text-2xl md:text-3xl font-bold text-gray-800">{post.title}</h1>
            <p className="mt-1 text-sm text-indigo-400">{post.date}</p>
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 mt-4 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </article>

        {others.length > 0 && (
          <div className="max-w-3xl mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">More from the blog</h2>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/blog/${o.slug}`} className="text-indigo-600 hover:underline">
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
