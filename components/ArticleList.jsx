import Image from 'next/image';
import Link from 'next/link';

export default function ArticleList({ posts }) {
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="bg-white rounded-lg shadow-md overflow-hidden flex h-full flex-col lg:flex-row md:flex-row"
        >
          <Link href={`/blog/${post.slug}`} className="shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              height={400}
              width={400}
              className="object-cover w-full md:w-[400px] h-[300px] md:h-[400px]"
            />
          </Link>
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-indigo-400">{post.date}</p>
            <p className="text-gray-700 mt-4">{post.paragraphs[0]}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
