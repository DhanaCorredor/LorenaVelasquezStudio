import { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Clock, ArrowRight, MapPin, Hand, Footprints, Sparkles, Palette, Star } from 'lucide-react';
import { BOOKING_URL, LOCATION, HOURS, SERVICE_CATEGORIES } from '../data';
import { SignatureHeart } from '../components/SignatureHeart';
import { PageSeo } from '../components/PageSeo';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  manicura: Hand,
  pedicura: Footprints,
  extensiones: Sparkles,
  extras: Palette,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>(SERVICE_CATEGORIES[0].id);

  // Highlight category in sticky nav as user scrolls
  useEffect(() => {
    const sections = SERVICE_CATEGORIES.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageSeo
        title="Servicios · Catálogo de Manicura y Pedicura"
        description="Catálogo completo de manicura, pedicura y uñas acrílicas en Moratalaz, Madrid. Precios desde 17,90€. Reserva tu cita online."
      />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-white-pure relative overflow-hidden">
        <div className="hidden lg:block absolute top-32 right-0 font-display italic text-[14rem] leading-none text-line/50 select-none pointer-events-none">
          Servicios
        </div>

        <div className="container-x relative">
          <span className="eyebrow">Catálogo · Servicios</span>
          <h1 className="h-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-6 mb-6 text-balance max-w-3xl">
            Manos y pies, <span className="italic text-pink-dark">a tu cuidado</span>.
          </h1>
          <p className="text-base md:text-xl text-graphite max-w-2xl leading-relaxed mb-6">
            Manicura, pedicura y uñas acrílicas. Precios claros, duración estimada y reserva en un clic.
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-pink-dark text-pink-dark" />))}</div>
            <span className="text-xs uppercase tracking-widest text-stone font-bold">5.0 · +50 clientas satisfechas</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
              Ver disponibilidad <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#catalogo" className="btn-secondary w-full sm:w-auto">
              Ver catálogo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-stone text-sm">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-dark" /> {LOCATION}</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-pink-dark" /> {HOURS}</div>
          </div>
        </div>
      </section>

      {/* Category nav (sticky) — grid 4-col on mobile so all filters fit, scroll row on desktop */}
      <section id="catalogo" className="sticky top-[64px] md:top-[68px] z-30 bg-white-pure/95 backdrop-blur-md border-y border-line">
        <div className="container-x">
          <div className="grid grid-cols-4 gap-1 md:flex md:gap-1 md:overflow-x-auto md:no-scrollbar -mx-1 md:-mx-2 px-1 md:px-2 py-2 md:py-3">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat.id] ?? Sparkles;
              const isActive = activeCategory === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex md:flex-shrink-0 flex-col md:flex-row items-center justify-center gap-0.5 md:gap-1.5 whitespace-nowrap px-1.5 md:px-4 py-2 md:py-2.5 text-[0.6rem] md:text-xs uppercase tracking-widest font-bold transition-all rounded-full text-center ${
                    isActive
                      ? 'bg-ink text-white-pure'
                      : 'bg-transparent text-stone hover:text-ink hover:bg-pink-light'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="leading-none">{cat.label}</span>
                  <span className={`hidden md:inline text-[0.6rem] ${isActive ? 'text-pink-light' : 'text-stone'}`}>{cat.items.length}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      {SERVICE_CATEGORIES.map((category, catIdx) => {
        const Icon = categoryIcons[category.id] ?? Sparkles;
        return (
          <section
            key={category.id}
            id={category.id}
            className={`py-12 md:py-20 scroll-mt-32 ${catIdx % 2 === 0 ? 'bg-white-pure' : 'bg-blush-bg'}`}
          >
            <div className="container-x">
              <div className="mb-10 md:mb-14 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="eyebrow">0{catIdx + 1} · Categoría</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-pink-dark" />
                  <h2 className="h-display text-3xl sm:text-4xl md:text-6xl text-balance">
                    {category.label}
                  </h2>
                </div>
                <p className="text-graphite text-base md:text-lg leading-relaxed mt-4">{category.intro}</p>
              </div>

              {/* Service cards — compact */}
              <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
                {category.items.map((service, i) => (
                  <a
                    key={i}
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white-pure border border-line md:border-2 hover:border-pink-dark hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 p-4 md:p-6 flex flex-col"
                  >
                    {/* Badge */}
                    {service.badge && (
                      <span className="absolute -top-2 left-4 text-[0.55rem] md:text-[0.6rem] uppercase tracking-editorial bg-pink-dark text-white-pure px-2 py-0.5 md:py-1 font-bold">
                        {service.badge}
                      </span>
                    )}

                    {/* Number + Title */}
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-4">
                      <span className="text-pink-dark text-[0.65rem] md:text-xs font-bold tracking-widest pt-1 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display font-bold text-lg md:text-[1.65rem] text-ink leading-tight group-hover:text-pink-dark transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description — 1 line mobile, 2 lines desktop */}
                    <p className="text-graphite text-sm md:text-base leading-snug mb-3 md:mb-5 flex-1 line-clamp-1 md:line-clamp-2" style={{ fontWeight: 500 }}>
                      {service.description}
                    </p>

                    {/* Price + duration */}
                    <div className="flex items-end justify-between pt-3 md:pt-4 border-t border-line gap-3">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="font-display text-2xl md:text-4xl text-ink font-bold leading-none">
                          {service.price}
                        </p>
                        <span className="text-stone/60 text-lg md:text-2xl leading-none">—</span>
                        <p className="text-[0.65rem] md:text-xs uppercase tracking-widest text-stone font-bold leading-none flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" /> {service.duration}
                        </p>
                      </div>

                      {/* Reserve action */}
                      <span className="inline-flex items-center gap-1 md:gap-1.5 bg-ink text-white-pure text-[0.65rem] md:text-xs uppercase tracking-widest font-bold px-3 md:px-4 py-2 md:py-3 group-hover:bg-pink-dark group-hover:gap-3 group-hover:shadow-glow transition-all flex-shrink-0">
                        Reservar <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Trust strip */}
      <section className="py-12 md:py-16 bg-wine text-white-pure">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Atención personalizada', body: 'Una cliente cada vez. Sin prisas, sin distracciones. Tu hora dedicada a ti.' },
              { title: 'Salud de la uña natural', body: 'Sin limado agresivo. Materiales premium. Tu uña sale más fuerte de cada cita.' },
              { title: 'Higiene certificada', body: 'Esterilización en autoclave y protocolo de desinfección riguroso.' },
            ].map((b, i) => (
              <div key={i}>
                <SignatureHeart className="w-7 h-7 text-pink-dark mx-auto mb-4" />
                <h3 className="font-display text-xl md:text-2xl text-white-pure mb-2">{b.title}</h3>
                <p className="text-pink-light/90 text-sm leading-relaxed max-w-xs mx-auto">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — white on mobile, pink gradient on desktop */}
      <section className="py-16 md:py-24 bg-white-pure md:bg-gradient-pink border-t border-line md:border-none">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="eyebrow">Tu cita te espera</span>
          <h2 className="h-display text-3xl sm:text-4xl md:text-6xl mt-6 mb-6 text-balance">
            Elige tu servicio,
            <br />
            <span className="italic text-pink-dark">elige tu hora</span>.
          </h2>
          <p className="text-graphite text-base md:text-lg mb-8 leading-relaxed">
            Confirmación inmediata · Pago en estudio · Cancelación gratuita hasta 24h antes.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Reservar mi cita <Calendar className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
