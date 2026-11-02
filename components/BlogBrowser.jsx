'use client';

import { useState } from 'react';
import Link from 'next/link';
import ArticleList from './ArticleList';

const FEATURED_COUNT = 6;

export default function BlogBrowser({ posts, categories }) {
  const [active, setActive] = useState('all');

  const usedCategories = categories.filter((c) => posts.some((p) => p.category === c.key));
  const filtered = active === 'all' ? posts : posts.filter((p) => p.category === active);
  const featured = filtered.slice(0, FEATURED_COUNT);
  const older = filtered.slice(FEATURED_COUNT);

  const byYear = older.reduce((groups, post) => {
    const year = post.dateISO ? new Date(post.dateISO).getFullYear() : 'Earlier';
    (groups[year] = groups[year] || []).push(post);
    return groups;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  const chip = (key, label) => (
    <button
      key={key}
      type="button"
      onClick={() => setActive(key)}
      aria-pressed={active === key}
      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
        active === key ? 'bg-indigo-600 text-white' : 'bg-white/90 text-gray-800 hover:bg-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {chip('all', 'All')}
        {usedCategories.map((c) => chip(c.key, c.label))}
      </div>

      <ArticleList posts={featured} />

      {older.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Older articles</h2>
          {years.map((year) => (
            <div key={year} className="mb-5 last:mb-0">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-500 mb-2">{year}</h3>
              <ul className="divide-y divide-gray-100">
                {byYear[year].map((post) => (
                  <li key={post.slug} className="py-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-indigo-600 font-medium">
                      {post.title}
                    </Link>
                    <span className="text-sm text-gray-500 shrink-0 sm:ml-4">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
