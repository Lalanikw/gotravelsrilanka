// Served by Next.js at https://gotravelsrilanka.com/sitemap.xml
import { getAllPosts, SITE_URL } from '../lib/blog';

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/Places', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/Blogpage', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/News', priority: 0.8, changeFrequency: 'daily' },
    { path: '/Download', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/ContactUs', priority: 0.5, changeFrequency: 'yearly' },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.dateISO ? new Date(p.dateISO) : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...posts];
}
