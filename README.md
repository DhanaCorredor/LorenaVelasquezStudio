# Lorena Velásquez Studio

Sitio web del estudio de manicura premium y academia de Lorena Velásquez (Moratalaz, Madrid). Cliente real, en producción.

**Live:** https://lorena-velasquez-studio.vercel.app

## Stack

- **Vite 5** + **React 18** + **TypeScript 5** (modo `strict`, `noUnusedLocals`, `noUnusedParameters`).
- **Tailwind CSS 3** con paleta editorial propia (wine, pink, ink) y tipografía Cormorant Garamond / Inter.
- **React Router 7** para navegación cliente.
- **lucide-react** para iconografía.
- **Sharp** para pipeline de optimización de imágenes (script propio).
- Deploy en **Vercel** con rewrites SPA (`vercel.json`).

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
- Backups de originales en `.image-originals/` (fuera de `public/` para no inflar el bundle).
- Bundle producción: **~73 KB JS gzip + ~6 KB CSS gzip**.

## Accesibilidad

- **Skip link** "Saltar al contenido" para usuarios de teclado (`#main`).
- `aria-label` en botones de solo icono (WhatsApp flotante, menú móvil, redes sociales).
- `aria-expanded` + `aria-controls` en el toggle del menú móvil y en el acordeón del FAQ.
- Formulario de cursos con `<label htmlFor>` asociado a cada input, `autoComplete` y `<fieldset>/<legend>` + `aria-pressed` en el selector de track.
- `aria-hidden` en SVGs decorativos.
- Enlaces externos con `target="_blank" rel="noopener noreferrer"`.
- Contraste AA en todos los textos (los grises claros sobre vino se sustituyeron por `pink-light`).

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist para producción
npm run preview    # sirve el build localmente
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run compress   # re-optimiza /public + regenera og.jpg
```

## Estructura

```
src/
├─ pages/         Home, Services, Courses, NotFound (lazy-friendly)
├─ components/    Layout (nav + footer), FAQ, PageSeo, iconos
├─ data.ts        Catálogo, FAQs, tracks, constantes (URLs, contacto)
├─ index.css      Tailwind + design tokens custom
└─ App.tsx        Router + Layout
public/
├─ og.jpg                 Imagen social 1200×630 (generada)
├─ robots.txt
├─ sitemap.xml
└─ *.png / *.webp         Assets servidos
scripts/
├─ compress-images.mjs    Pipeline Sharp
└─ prerender-routes.mjs   Genera HTML estático por ruta (meta/OG) tras el build
```

## Enlaces

- Reservas: https://confirmafy.com/lorena-velasquez
- Instagram: https://www.instagram.com/lorev.studio
- TikTok: https://www.tiktok.com/@lorev.studio
