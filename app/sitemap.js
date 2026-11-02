// Served by Next.js at https://gotravelsrilanka.com/sitemap.xml
const BASE_URL = 'https://gotravelsrilanka.com';

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/Places', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/Blogpage', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/News', priority: 0.8, changeFrequency: 'daily' },
    { path: '/Download', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/ContactUs', priority: 0.5, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
