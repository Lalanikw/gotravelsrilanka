// Served by Next.js at https://gotravelsrilanka.com/robots.txt
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://gotravelsrilanka.com/sitemap.xml',
  };
}
