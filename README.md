# Lorena Velásquez Studio

[![CI](https://github.com/DhanaCorredor/LorenaVelasquezStudio/actions/workflows/ci.yml/badge.svg)](https://github.com/DhanaCorredor/LorenaVelasquezStudio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-informational.svg)](./LICENSE)
[![Live on Vercel](https://img.shields.io/badge/live-vercel-black.svg)](https://lorena-velasquez-studio.vercel.app)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6.svg?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4.svg?logo=tailwindcss&logoColor=white)

Sitio web del estudio de manicura premium y academia de Lorena Velásquez (Moratalaz, Madrid). Cliente real, en producción.

**Live:** https://lorena-velasquez-studio.vercel.app

![Lorena Velásquez Studio — preview](./public/og.jpg)

---

## Stack

- **Vite 5** + **React 18** + **TypeScript 5** (modo `strict`, `noUnusedLocals`, `noUnusedParameters`).
- **Tailwind CSS 3** con paleta editorial propia (wine, pink, ink) y tipografía Cormorant Garamond / Inter.
- **React Router 7** para navegación cliente.
- **lucide-react** para iconografía.
- **Vitest** + **Testing Library** para tests de componentes y lógica.
- **Sharp** para pipeline de optimización de imágenes (script propio).
- **GitHub Actions** (lint · typecheck · test · build) y deploy en **Vercel** (`vercel.json`, `cleanUrls`).

## Decisiones de producto

- **Mobile-first con layouts dedicados.** El hero, el catálogo y el FAQ tienen variantes mobile/desktop separadas en lugar de un único responsive forzado — más trabajo, mejor jerarquía visual en cada breakpoint.
- **Reservas externalizadas.** Confirmafy gestiona el calendario; el sitio se enfoca en presentación y conversión, sin estado de servidor.
- **Lead capture por WhatsApp.** El formulario de lista de espera de cursos abre WhatsApp con el mensaje prellenado en lugar de mantener un backend o servicio de email. Cero mantenimiento, 100% de los leads llegan a un canal que la dueña ya revisa.
- **SEO local fuerte.** JSON-LD `BeautySalon` (horarios, geo, teléfono, catálogo, reseñas + `AggregateRating`) y `FAQPage` para rich snippets. `sitemap.xml` + `robots.txt`. OG image generada a 1200×630.
- **Prerender de meta por ruta.** Al ser una SPA client-rendered, los crawlers sociales (WhatsApp, Facebook, X) no ejecutan JS. `scripts/prerender-routes.mjs` emite `servicios.html` y `cursos.html` con su `<title>`, descripción, canonical y Open Graph propios. Vercel (`cleanUrls`) los sirve antes del rewrite SPA; el bundle hidrata la ruta correcta. Google + redes ven el meta correcto de cada página.

## Performance

- LCP image servido como `<picture>` con **WebP (~94 KB)** + PNG fallback, `fetchPriority="high"`, precargada con `<link rel="preload">`, sin lazy-load.
- Imágenes below-the-fold con `loading="lazy"` y `decoding="async"`.
- **Tipografía minimizada:** solo Cormorant Garamond + Inter (se eliminaron Allura y Playfair, que no se usaban). Carga por `<link>` en `<head>` en vez de `@import` en CSS para no bloquear el render del CSS.
- **Code-splitting por ruta** con `React.lazy` + `Suspense`: Home carga eager (landing/LCP); Servicios, Cursos y 404 se cargan bajo demanda.
- Pipeline de optimización en `scripts/compress-images.mjs`: resize, recompresión PNG, generación de WebP y de la OG image 1200×630 en una sola pasada.
- Bundle producción: **~73 KB JS gzip + ~6 KB CSS gzip**.

## Accesibilidad

- **Skip link** "Saltar al contenido" para usuarios de teclado (`#main`).
- `aria-label` en botones de solo icono (WhatsApp flotante, menú móvil, redes sociales).
- `aria-expanded` + `aria-controls` en el toggle del menú móvil y en el acordeón del FAQ.
- Formulario de cursos con `<label htmlFor>` asociado a cada input, `autoComplete` y `<fieldset>/<legend>` + `aria-pressed` en el selector de track.
- Anillo de foco visible (`:focus-visible`) y respeto de `prefers-reduced-motion`.
- Contraste AA en todos los textos (los grises claros sobre vino se sustituyeron por `pink-light`).

## Testing

Tests de componentes y datos con **Vitest** + **Testing Library** (entorno `jsdom`):

- `data.test.ts` — integridad del catálogo (los slugs del home resuelven a servicios reales, campos requeridos, ids únicos).
- `FAQ.test.tsx` — render del acordeón y comportamiento de apertura/cierre (`aria-expanded`).
- `PageSeo.test.tsx` — `document.title`, meta description y canonical por ruta.
- `Courses.test.tsx` — el formulario de lista de espera abre WhatsApp con el lead prellenado y muestra el estado de éxito.

```bash
npm test          # corre la suite una vez (CI)
npm run test:watch
```

## CI

`.github/workflows/ci.yml` corre en cada push/PR a `main` y `develop`: **lint → typecheck → test → build**. El badge de arriba refleja el estado.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist (+ prerender de rutas)
npm run preview    # sirve el build localmente
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm test           # vitest
npm run compress   # re-optimiza /public + regenera og.jpg
```

## Estructura

```
src/
├─ pages/         Home, Services, Courses, NotFound (lazy-loaded)
├─ components/    Layout (nav + footer), FAQ, PageSeo, iconos
├─ test/          setup de Vitest (jest-dom + cleanup)
├─ data.ts        Catálogo, FAQs, tracks, constantes (URLs, contacto)
├─ index.css      Tailwind + design tokens custom
├─ App.tsx        Router + Layout
└─ *.test.{ts,tsx}  Suites de Vitest junto al código que prueban
public/
├─ og.jpg                 Imagen social 1200×630 (generada)
├─ robots.txt
├─ sitemap.xml
└─ *.png / *.webp         Assets servidos
scripts/
├─ compress-images.mjs    Pipeline Sharp
└─ prerender-routes.mjs   Genera HTML estático por ruta (meta/OG) tras el build
.github/workflows/
└─ ci.yml                 Lint · Typecheck · Test · Build
```

## Enlaces

- Reservas: https://confirmafy.com/lorena-velasquez
- Instagram: https://www.instagram.com/lorev.studio
- TikTok: https://www.tiktok.com/@lorev.studio

## Licencia

Código bajo [MIT](./LICENSE). Los assets de marca (fotografía, textos, precios, nombre y logo de "Lorena Velásquez Studio") son © de su propietaria y no están cubiertos por la licencia.
