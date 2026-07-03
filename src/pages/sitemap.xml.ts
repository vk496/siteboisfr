import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { services } from '../data/services';

// Plan du site généré automatiquement à partir des pages connues.
export const GET: APIRoute = () => {
  const paths = [
    '/',
    ...services.map((s) => `/services/${s.slug}`),
    '/mentions-legales',
  ];

  const urls = paths
    .map((path) => {
      const loc = new URL(path, site.url).href;
      const priority = path === '/' ? '1.0' : path.startsWith('/services') ? '0.8' : '0.4';
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
