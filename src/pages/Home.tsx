import { Link } from 'react-router-dom';
import {
  Instagram, MapPin, Clock, Star, Calendar, ChevronRight,
  Check, ArrowRight, GraduationCap,
  Hand, Footprints, Sparkles,
} from 'lucide-react';
import {
  BOOKING_URL, INSTAGRAM_URL, TIKTOK_URL, HOURS, LOCATION,
  SERVICE_CATEGORIES, HOME_PREVIEW_SLUGS, TESTIMONIALS,
} from '../data';
import { SignatureHeart } from '../components/SignatureHeart';
import { TikTokIcon } from '../components/TikTokIcon';
import { FAQ } from '../components/FAQ';
import { PageSeo } from '../components/PageSeo';

export default function Home() {
  const homeServices = HOME_PREVIEW_SLUGS.map((slug) => {
    for (const cat of SERVICE_CATEGORIES) {
      const found = cat.items.find((it) => it.title === slug);
      if (found) return { ...found, category: cat.label };
    }
    return null;
  }).filter(Boolean) as Array<{ title: string; description: string; price: string; duration: string; badge?: string; category: string }>;

  return (
    <>
      <PageSeo
        title="Manicura y Pedicura Premium en Moratalaz"
        description="Estudio de manicura y pedicura premium en Moratalaz, Madrid. Cuidado integral con atención personalizada. Reserva tu cita online o por WhatsApp."
      />

      {/* Hero — burgundy section so the photo's bg fuses seamlessly */}
      <section
        id="top"
        className="relative lg:min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 pb-10 lg:pb-12 overflow-hidden bg-wine"
      >
        {/* Editorial decoration */}
        <div className="hidden lg:block absolute top-24 right-0 font-display italic text-[16rem] leading-none text-white-pure/5 select-none pointer-events-none">
          01
        </div>
        <div className="hidden md:block absolute -bottom-10 -left-10 text-pink-light/10 pointer-events-none">
          <SignatureHeart className="w-96 h-96" />
        </div>
        {/* Soft ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pink/15 pointer-events-none" style={{ filter: 'blur(80px)' }}></div>

        <div className="container-x relative z-10 w-full">
          {/* MOBILE layout — centered editorial stack */}
          <div className="sm:hidden text-center">
            {/* Brand + credentials — compact header */}
            <p className="text-[0.6rem] uppercase tracking-editorial font-bold text-pink-light mb-1.5">
              Lorena Velásquez Studio
            </p>
            <p className="font-display italic text-xs text-pink-light/85 leading-snug mb-4 max-w-[18rem] mx-auto">
              Técnico Manicurista Profesional e Instructora Certificada.
            </p>

            {/* Centered stack: title overlaps photo top */}
            <h1 className="relative z-10 font-display font-semibold leading-[0.95] text-white-pure text-[2.75rem] text-balance mb-[-1.5rem]">
              Tu espacio para <span className="italic text-pink-light">embellecer</span> tus uñas.
            </h1>
            <picture className="block w-72 mx-auto mb-2">
              <source srcSet="/lorena-pink-suit.webp" type="image/webp" />
              <img
                src="/lorena-pink-suit.png"
                alt="Lorena Velásquez"
                className="w-full h-auto"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
                fetchPriority="high"
                decoding="async"
              />
            </picture>

            {/* Primary CTA */}
            <Link to="/servicios" className="btn-on-wine w-full">
              Servicios <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Below-the-fold: context + stats + location */}
            <div className="mt-8 space-y-5">
              <p className="text-sm text-pink-light/90 leading-relaxed">
                Un espacio diseñado para el cuidado integral de manos y pies, donde <strong className="text-white-pure font-bold">cada detalle</strong> está pensado para ofrecer una experiencia única.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ['+10', 'Años de experiencia'],
                  ['+50', 'Clientas satisfechas'],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-2xl text-white-pure font-bold leading-none">{n}</p>
                    <p className="text-[0.6rem] uppercase tracking-widest text-pink-light/80 mt-1 font-bold">{l}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-1.5 text-pink-light/80 text-xs">
                <div className="flex items-start justify-center gap-2"><MapPin className="w-3.5 h-3.5 text-pink-light mt-0.5 flex-shrink-0" /> <span className="font-bold">{LOCATION}</span></div>
                <div className="flex items-center justify-center gap-2"><Clock className="w-3.5 h-3.5 text-pink-light flex-shrink-0" /> <span className="font-bold">{HOURS}</span></div>
              </div>
            </div>
          </div>

          {/* DESKTOP layout: full hero with everything */}
          <div className="hidden sm:grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Urgency cue */}
              <div className="inline-flex items-center gap-2 bg-pink-light/15 border border-pink-light/30 px-3 py-1.5 mb-5">
                <span className="w-2 h-2 bg-pink-light rounded-full animate-pulse"></span>
                <span className="text-[0.65rem] uppercase tracking-widest font-bold text-pink-light">Citas disponibles esta semana</span>
              </div>

              <h1 className="font-display font-semibold leading-[1.02] text-white-pure text-5xl md:text-6xl lg:text-[5.75rem] mb-6 text-balance">
                Tu espacio para
                <br />
                <span className="italic text-pink-light">embellecer</span> tus
                <br />
                uñas.
              </h1>

              {/* Location row */}
              <div className="flex items-center gap-2 mb-6 text-white-pure">
                <MapPin className="w-5 h-5 text-pink-light flex-shrink-0" />
                <span className="text-sm sm:text-base font-bold tracking-wide">Calle Pico de los Artilleros 146 · Moratalaz, Madrid</span>
              </div>

              {/* Service tagline */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-8">
                {[
                  { icon: Hand, label: 'Manicura' },
                  { icon: Footprints, label: 'Pedicura' },
                  { icon: Sparkles, label: 'Extensiones' },
                  { icon: GraduationCap, label: 'Cursos de manicura' },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 bg-white-pure/15 backdrop-blur-sm border border-white-pure/25 px-3 py-1.5">
                    <Icon className="w-3.5 h-3.5 text-pink-light" />
                    <span className="font-bold tracking-wide text-xs uppercase text-white-pure">{label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-on-wine">
                  Ver disponibilidad <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/servicios" className="btn-on-wine-outline">
                  Ver precios
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-pink-light text-pink-light" />))}</div>
                  <span className="text-xs uppercase tracking-widest text-white-pure font-bold">+50 clientas satisfechas</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-pure hover:text-pink-light transition-colors">
                    <Instagram className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-bold">@lorev.studio</span>
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-white-pure hover:text-pink-light transition-colors" aria-label="TikTok">
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <picture>
                  <source srcSet="/lorena-pink-suit.webp" type="image/webp" />
                  <img
                    src="/lorena-pink-suit.png"
                    alt="Lorena Velásquez, técnico manicurista profesional en Moratalaz, Madrid"
                    className="relative w-full h-auto"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                    }}
                    decoding="async"
                  />
                </picture>

                {/* Floating tag */}
                <div className="absolute bottom-4 right-0 hidden lg:flex items-center gap-2 bg-white-pure/95 backdrop-blur-sm border border-white-pure/20 px-4 py-3 shadow-editorial z-10">
                  <SignatureHeart className="w-4 h-4 text-pink-dark" />
                  <span className="font-display italic text-sm text-wine-dark">y cuidando de ti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio + About — unified, compact (mobile content lives inside hero) */}
      <section id="studio" className="hidden sm:block py-10 md:py-14 bg-white-pure relative overflow-hidden">
        <div className="hidden lg:block absolute -bottom-12 right-0 font-display italic text-[12rem] leading-none text-line/40 select-none pointer-events-none">02</div>

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Image — hidden on mobile (one photo at a time) */}
            <div className="hidden md:block lg:col-span-5">
              <picture>
                <source srcSet="/lorena-walking.webp" type="image/webp" />
                <img
                  src="/lorena-walking.png"
                  alt="Lorena Velásquez, instructora certificada de manicura"
                  className="w-full md:max-w-xs lg:max-w-none lg:w-full lg:h-[440px] lg:object-contain lg:object-bottom mx-auto h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Text */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Lorena Velásquez · Studio</span>
              <h2 className="h-display text-3xl sm:text-4xl md:text-5xl mt-3 mb-2 text-balance leading-[1.05]">
                Cuidado integral para <span className="italic text-pink-dark">manos y pies</span>.
              </h2>
              <p className="font-display italic text-base sm:text-lg text-pink-dark mb-4">
                Técnico Manicurista Profesional e Instructora Certificada.
              </p>

              <p className="text-sm sm:text-base text-graphite leading-relaxed">
                Un espacio diseñado para el cuidado integral de manos y pies, donde <strong className="text-ink font-semibold">cada detalle</strong> está pensado para ofrecer una experiencia única: atención personalizada, técnicas profesionales y un ambiente acogedor.
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  ['+10', 'Años de experiencia'],
                  ['+50', 'Clientas satisfechas'],
                ].map(([n, l]) => (
                  <div key={l} className="border-l-2 border-pink-dark pl-3">
                    <p className="font-display text-2xl sm:text-3xl text-ink font-bold">{n}</p>
                    <p className="text-[0.65rem] sm:text-xs uppercase tracking-widest text-stone mt-0.5 font-bold">{l}</p>
                  </div>
                ))}
              </div>

              {/* Location + hours */}
              <div className="mt-5 space-y-1.5 text-stone text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-pink-dark mt-0.5 flex-shrink-0" /> <span className="font-medium">{LOCATION}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-pink-dark flex-shrink-0" /> <span className="font-medium">{HOURS}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog preview — compact */}
      <section className="py-12 md:py-20 bg-blush-bg relative border-t border-pink-dark/20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-5">
            <div>
              <span className="eyebrow">Servicios</span>
              <h2 className="h-display text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
                Catálogo
              </h2>
            </div>
            <Link to="/servicios" className="btn-secondary self-start md:self-end">
              Ver catálogo completo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
            {homeServices.map((s, i) => (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className={`relative aspect-square p-2.5 sm:p-5 bg-white-pure border border-line sm:border-2 hover:border-pink-dark hover:bg-ink hover:text-white-pure hover:shadow-editorial hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex-col ${
                  i >= 3 ? 'hidden lg:flex' : 'flex'
                }`}
              >
                {s.badge && (
                  <span className="absolute -top-2 left-2 sm:left-3 text-[0.5rem] sm:text-[0.55rem] uppercase tracking-widest bg-pink-dark text-white-pure px-1.5 sm:px-2 py-0.5 sm:py-1 font-bold">
                    {s.badge}
                  </span>
                )}
                <p className="hidden sm:block text-[0.6rem] uppercase tracking-widest font-bold mb-2 text-pink-dark group-hover:text-pink-light transition-colors">
                  {s.category}
                </p>
                <h3 className="font-display font-bold text-sm sm:text-base text-ink group-hover:text-white-pure leading-tight transition-colors line-clamp-3">
                  {s.title}
                </h3>
                <div className="mt-auto pt-2 sm:pt-3 border-t border-line group-hover:border-white-pure/15 transition-colors">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <p className="font-display text-lg sm:text-2xl font-bold text-ink group-hover:text-pink-light leading-none transition-colors">
                      {s.price}
                    </p>
                    <span className="text-stone/60 group-hover:text-white-pure/40 text-sm sm:text-base leading-none transition-colors">—</span>
                    <p className="text-[0.7rem] sm:text-xs font-bold text-stone group-hover:text-white-pure/70 leading-none transition-colors">
                      {s.duration}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile-only CTA emphasizing the full catalog */}
          <div className="mt-4 sm:hidden">
            <Link to="/servicios" className="btn-primary w-full">
              Ver catálogo completo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — social proof (desktop only) */}
      <section className="hidden sm:block py-12 md:py-20 bg-white-pure border-t border-line relative overflow-hidden">
        <div className="hidden lg:block absolute -bottom-12 left-0 font-display italic text-[12rem] leading-none text-line/40 select-none pointer-events-none">03</div>

        <div className="container-x relative">
          <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            <span className="eyebrow">Lo que dicen mis clientas</span>
            <h2 className="h-display text-3xl sm:text-4xl md:text-5xl mt-3 text-balance">
              Manos que <span className="italic text-pink-dark">vuelven</span>.
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-pink-dark text-pink-dark" />))}</div>
              <span className="text-xs uppercase tracking-widest text-stone font-bold">5.0 · +50 clientas satisfechas</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 md:gap-5">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <figure
                key={i}
                className="bg-white-pure border border-line p-5 md:p-7 flex flex-col"
              >
                <div className="flex mb-3" aria-hidden="true">
                  {[...Array(t.rating)].map((_, s) => (<Star key={s} className="w-3.5 h-3.5 fill-pink-dark text-pink-dark" />))}
                </div>
                <blockquote className="text-graphite text-sm md:text-base leading-relaxed flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-line">
                  <p className="font-display font-bold text-ink leading-none">{t.name}</p>
                  <p className="text-[0.65rem] uppercase tracking-widest text-pink-dark mt-1.5 font-bold">{t.service}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Teaser — compact banner */}
      <section className="py-8 md:py-10 bg-wine text-white-pure relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 text-pink-dark/10 pointer-events-none">
          <SignatureHeart className="w-48 md:w-56 h-auto" />
        </div>

        <div className="container-x relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-10 text-center md:text-left">
            <div className="flex-1">
              <span className="eyebrow text-pink-light">Academia · Próximamente</span>
              <h2 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl mt-2 mb-2 text-white-pure leading-tight">
                ¿Quieres aprender <span className="italic text-pink-light">conmigo</span>?
              </h2>
              <p className="text-sm text-pink-light/85 max-w-xl">
                Estoy preparando un programa personalizado: desde cero, perfeccionamiento y mentoría 1:1. Únete a la lista de espera.
              </p>
            </div>
            <Link to="/cursos" className="btn-heart self-center md:self-auto whitespace-nowrap">
              <GraduationCap className="w-4 h-4" /> Lista de espera
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final closing — booking + lead magnet unified */}
      <section className="py-16 md:py-24 bg-gradient-pink relative overflow-hidden">
        <div className="hidden md:block absolute -top-10 -right-10 text-pink-dark/15 pointer-events-none">
          <SignatureHeart className="w-80 h-80" />
        </div>
        <div className="hidden lg:block absolute -bottom-20 left-0 font-display italic text-[14rem] leading-none text-pink-dark/10 select-none pointer-events-none">04</div>

        <div className="container-x relative max-w-3xl text-center">
          <span className="eyebrow">Tu cita te espera</span>
          <h2 className="h-display text-4xl sm:text-5xl md:text-6xl mt-4 mb-5 text-balance">
            Regálate <span className="italic text-pink-dark">la próxima hora</span>.
          </h2>
          <p className="text-graphite text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            No es solo una manicura. Es tu hora favorita de la semana. Y empieza con un clic.
          </p>

          {/* Primary action: Booking */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reservar mi cita <Calendar className="w-4 h-4" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary hidden sm:inline-flex">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary hidden sm:inline-flex">
              <TikTokIcon className="w-4 h-4" /> TikTok
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-stone text-[0.7rem] sm:text-xs uppercase tracking-widest font-bold">
            <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-pink-dark" /> Confirmación inmediata</div>
            <div className="flex items-center gap-1.5"><Check className="w-3 h-3 text-pink-dark" /> Cancelación 24h</div>
            <div className="hidden sm:flex items-center gap-1.5"><Check className="w-3 h-3 text-pink-dark" /> Pago en estudio</div>
          </div>
        </div>
      </section>
    </>
  );
}
