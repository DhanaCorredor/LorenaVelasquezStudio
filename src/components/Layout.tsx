import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Instagram, Calendar, Menu, X, MapPin, Clock, Phone } from 'lucide-react';
import { BOOKING_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL, WHATSAPP_NUMBER, HOURS, LOCATION, MAPS_URL } from '../data';
import { SignatureHeart } from './SignatureHeart';
import { WhatsAppIcon } from './WhatsAppIcon';
import { TikTokIcon } from './TikTokIcon';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Pages with dark (wine) heroes can have a transparent nav at the top.
  // Pages with light heroes need the nav solid from the start.
  const darkHeroPaths = ['/', '/cursos'];
  const hasLightHero = !darkHeroPaths.includes(location.pathname);
  const navSolid = isScrolled || mobileOpen || hasLightHero;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/servicios', label: 'Servicios' },
    { to: '/cursos', label: 'Cursos' },
  ];

  return (
    <div className="min-h-screen bg-white-pure">
      {/* Skip link — keyboard users jump straight to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-white-pure focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest focus:font-bold"
      >
        Saltar al contenido
      </a>

      {/* Floating WhatsApp button — mobile + desktop */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 md:bottom-6 md:left-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1faa50] text-white shadow-editorial hover:scale-110 transition-all duration-300 flex items-center justify-center"
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-pink-dark rounded-full animate-pulse"></span>
      </a>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-pink-dark text-white-pure px-5 py-4 shadow-editorial hover:bg-wine hover:scale-105 transition-all duration-300 items-center gap-2.5"
        aria-label="Reservar cita online"
      >
        <Calendar className="w-4 h-4" />
        <span className="font-bold tracking-widest uppercase text-xs">Reservar</span>
      </a>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          navSolid ? 'bg-white-pure/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Nails by Lorena Velásquez"
              className={`h-10 w-auto transition-all duration-500 ${
                navSolid ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.end}
                className={({ isActive }) => {
                  if (isActive) return 'text-xs uppercase tracking-widest font-bold transition-colors text-pink-dark';
                  return `text-xs uppercase tracking-widest font-bold transition-colors ${
                    navSolid ? 'text-ink hover:text-pink-dark' : 'text-white-pure hover:text-pink-light'
                  }`;
                }}
              >
                {it.label}
              </NavLink>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-none font-bold tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase text-xs hover:scale-[1.03] active:scale-95 ${
                navSolid
                  ? 'bg-ink text-white-pure hover:bg-pink-dark hover:shadow-glow shadow-soft'
                  : 'bg-white-pure text-wine-dark hover:bg-pink-light shadow-soft'
              }`}
            >
              Reservar
            </a>
          </div>

          <button
            className={`md:hidden transition-colors ${navSolid ? 'text-ink' : 'text-white-pure'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden bg-white-pure border-t border-line shadow-soft">
            <div className="container-x py-3">
              {navItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  end={it.end}
                  className={({ isActive }) =>
                    `block py-3.5 text-sm uppercase tracking-widest font-bold border-b border-line last:border-b-0 ${
                      isActive ? 'text-pink-dark' : 'text-ink hover:text-pink-dark'
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold uppercase tracking-widest text-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-ink text-white-pure font-bold uppercase tracking-widest text-xs"
                >
                  <Calendar className="w-4 h-4" /> Reservar
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="main">{children}</main>

      {/* Footer — compact */}
      <footer className="bg-ink text-white-pure/70 pt-8 pb-8 border-t border-ink-soft">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-6">
            <div className="md:col-span-2">
              <div className="font-display italic text-xl text-white-pure mb-1">
                Nails <SignatureHeart className="inline w-4 h-4 text-pink-dark" />
              </div>
              <p className="text-[0.6rem] uppercase tracking-editorial text-white-pure/50 mb-3">By Lorena Velásquez</p>
              <p className="text-white-pure/60 text-xs leading-relaxed mb-3 max-w-sm">
                Cuidado integral de manos y pies en Moratalaz, Madrid.
              </p>
              <div className="flex items-center gap-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white-pure/20 hover:border-pink-dark hover:text-pink-dark flex items-center justify-center transition-all" aria-label="Instagram">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white-pure/20 hover:border-pink-dark hover:text-pink-dark flex items-center justify-center transition-all" aria-label="TikTok">
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <h4 className="text-[0.6rem] uppercase tracking-editorial text-pink-dark mb-2 font-bold">Navegación</h4>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/" className="hover:text-pink-dark transition-colors">Inicio</Link></li>
                <li><Link to="/servicios" className="hover:text-pink-dark transition-colors">Servicios</Link></li>
                <li><Link to="/cursos" className="hover:text-pink-dark transition-colors">Cursos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[0.6rem] uppercase tracking-editorial text-pink-dark mb-2 font-bold">Encuéntrame</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-1.5 hover:text-pink-dark transition-colors"><MapPin className="w-3 h-3 text-pink-dark mt-0.5 flex-shrink-0" /><span>{LOCATION} · <span className="underline">Cómo llegar</span></span></a></li>
                <li className="flex items-center gap-1.5"><Clock className="w-3 h-3 text-pink-dark flex-shrink-0" /> {HOURS}</li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1.5"><Phone className="w-3 h-3 text-pink-dark flex-shrink-0" /> {WHATSAPP_NUMBER}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-white-pure/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.65rem] uppercase tracking-widest text-white-pure/30">
            <p>© 2026 Lorena Velásquez Studio</p>
            <p>Hecho con <SignatureHeart className="inline w-3 h-3 text-pink-dark" /> en Madrid</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
