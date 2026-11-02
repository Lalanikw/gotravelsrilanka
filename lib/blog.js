import { articles } from './Myblogs';

export const SITE_URL = 'https://gotravelsrilanka.com';

// Turns a title into a URL-friendly slug, e.g. "Whale Watching at Mirissa" -> "whale-watching-at-mirissa".
// Add a `slug: '...'` field to an article in Myblogs.js to pin its URL if you later edit the title.
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

function clean(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

export function getAllPosts() {
  const seen = new Set();
  return articles.map((a) => {
    let slug = a.slug || slugify(a.title);
    while (seen.has(slug)) slug = `${slug}-${a.id}`;
    seen.add(slug);
    const paragraphs = [a.content, a.content1, a.content2].map(clean).filter(Boolean);
    const first = paragraphs[0] || '';
    const description = first.length > 160 ? `${first.slice(0, 157).replace(/\s+\S*$/, '')}…` : first;
    const parsed = new Date(a.date);
    return {
      ...a,
      slug,
      paragraphs,
      description,
      dateISO: isNaN(parsed) ? null : parsed.toISOString(),
    };
  });
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug);
}
