import { Instagram } from 'lucide-react';
import { INSTAGRAM_URL, GALLERY } from '../data';

/**
 * "Mis trabajos" — curated Instagram-style gallery.
 * Mobile: horizontal swipe carousel with scroll-snap.
 * Desktop: 3-column grid.
 * Each tile links out to Instagram; images are served as srcset (400/800).
 */
export function Gallery() {
  return (
    <section className="py-12 md:py-20 bg-blush-bg border-t border-pink-dark/20">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 md:mb-10">
          <div>
            <span className="eyebrow">Mis trabajos</span>
            <h2 className="h-display text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
              Hechos a <span className="italic text-pink-dark">mano</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start sm:self-end"
          >
            <Instagram className="w-4 h-4" /> Ver más en @lorev.studio
          </a>
        </div>

        {/* Mobile: swipe carousel · Desktop: grid */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible">
          {GALLERY.map((item) => (
            <a
              key={item.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0 w-[72%] sm:w-auto snap-center aspect-square overflow-hidden bg-white-pure border border-line"
              aria-label={`${item.alt} — ver en Instagram`}
            >
              <img
                src={`/gallery/${item.id}.webp`}
                srcSet={`/gallery/${item.id}@400.webp 400w, /gallery/${item.id}.webp 800w`}
                sizes="(min-width: 640px) 33vw, 72vw"
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300">
                <Instagram className="w-7 h-7 text-white-pure opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </a>
          ))}
        </div>

        <p className="sm:hidden text-center text-[0.65rem] uppercase tracking-widest text-stone mt-3">
          Desliza para ver más →
        </p>
      </div>
    </section>
  );
}
