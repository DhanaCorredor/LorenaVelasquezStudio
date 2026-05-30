// Post-build: emit a static HTML file per route with route-specific <title>,
// description, canonical and Open Graph tags.
//
// Why: this is a client-rendered SPA. Google executes JS and sees the tags that
// PageSeo sets at runtime, but social crawlers (WhatsApp, Facebook, X, Telegram)
// do NOT run JS — they read the raw HTML. Without this, every shared link shows
// the home page's preview. Each generated file still loads the same JS bundle,
// so React Router renders the right page on the client.
//
// Vercel serves these static files before applying the SPA rewrite in
// vercel.json, so /servicios -> dist/servicios.html, /cursos -> dist/cursos.html,
// and any unknown path falls through the rewrite to index.html (404 component).

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE_URL = 'https://lorena-velasquez-studio.vercel.app';
const BRAND = 'Lorena Velásquez Studio';

/** Routes to prerender. `/` is index.html itself, so it's not listed here. */
const ROUTES = [
  {
    file: 'servicios.html',
    path: '/servicios',
    title: 'Servicios · Catálogo de Manicura y Pedicura',
    description:
      'Catálogo completo de manicura, pedicura y uñas acrílicas en Moratalaz, Madrid. Precios desde 17,90€. Reserva tu cita online.',
  },
  {
    file: 'cursos.html',
    path: '/cursos',
    title: 'Cursos de Manicura · Academia',
    description:
      'Cursos personalizados de manicura en Madrid: desde cero, perfeccionamiento técnico y mentoría 1:1. Próximamente — únete a la lista de espera.',
  },
];

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

for (const route of ROUTES) {
  const fullTitle = `${route.title} · ${BRAND}`;
  const url = `${SITE_URL}${route.path}`;
  const title = escapeHtml(fullTitle);
  const desc = escapeHtml(route.description);

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${desc}$2`
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${title}$2`
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${desc}$2`
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${url}$2`
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${title}$2`
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[\s\S]*?("\s*\/?>)/,
      `$1${desc}$2`
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[\s\S]*?("\s*\/?>)/,
      `$1${url}$2`
    );

  writeFileSync(join(DIST, route.file), html);
  console.log(`prerendered ${route.file}  ->  ${url}`);
}
