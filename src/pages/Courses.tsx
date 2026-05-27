import { useState } from 'react';
import { GraduationCap, Sparkles, Award, Mail, ArrowRight } from 'lucide-react';
import { COURSE_TRACKS, WHATSAPP_BASE } from '../data';
import { SignatureHeart } from '../components/SignatureHeart';
import { PageSeo } from '../components/PageSeo';

export default function Courses() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState(COURSE_TRACKS[0].label);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    const message = `Hola Lorena! Quiero apuntarme a la lista de espera del curso.\n\nNombre: ${name}\nEmail: ${email}\nTrack: ${track}`;
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    setName('');
    setEmail('');
    setTimeout(() => setSent(false), 6000);
  };

  const why = [
    { icon: GraduationCap, title: 'Plan personalizado', body: 'Adaptado a tu nivel actual, tus objetivos y el ritmo que necesitas. No es un curso enlatado.' },
    { icon: Award, title: 'Certificación oficial', body: 'Al completar el programa recibirás diploma de Técnico Manicurista Profesional.' },
    { icon: Sparkles, title: 'Mentoría continua', body: 'Acompañamiento durante y después del curso. Resolvemos juntas tus primeros clientes reales.' },
  ];

  return (
    <>
      <PageSeo
        title="Cursos de Manicura · Academia"
        description="Cursos personalizados de manicura en Madrid: desde cero, perfeccionamiento técnico y mentoría 1:1. Próximamente — únete a la lista de espera."
      />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-wine text-white-pure relative overflow-hidden">
        <div className="hidden lg:block absolute top-32 right-0 font-display italic text-[14rem] leading-none text-white-pure/5 select-none pointer-events-none">
          Cursos
        </div>
        <div className="absolute -bottom-20 -right-10 text-pink-dark/15 pointer-events-none">
          <SignatureHeart className="w-[28rem] h-[28rem]" />
        </div>

        <div className="container-x relative">
          <span className="eyebrow text-pink-light">Academia · Próximamente</span>
          <h1 className="h-display text-5xl md:text-7xl lg:text-8xl mt-6 mb-8 text-white-pure text-balance max-w-3xl">
            Aprende conmigo,
            <br />
            <span className="italic text-pink-light">a tu medida</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-light max-w-2xl leading-relaxed mb-10">
            Estoy preparando un programa de formación 100% personalizado. Apúntate a la lista de espera y serás la primera en conocer las plazas, fechas y condiciones.
          </p>

          <a href="#lista-espera" className="btn-heart">
            <Mail className="w-4 h-4" /> Apuntarme a la lista de espera
          </a>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-12 md:py-20 bg-white-pure">
        <div className="container-x">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow">Tracks disponibles</span>
            <h2 className="h-display text-4xl md:text-6xl mt-6 mb-6 text-balance">
              Tres caminos, <span className="italic text-pink-dark">tu plan</span>.
            </h2>
            <p className="text-graphite text-lg leading-relaxed">
              Elige el punto de partida que mejor describe dónde estás. Juntas diseñaremos el plan que te lleva donde quieres llegar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-line">
            {COURSE_TRACKS.map((tr, i) => (
              <div key={i} className={`p-8 md:p-12 transition-all duration-500 group ${i === 1 ? 'bg-ink text-white-pure' : 'bg-white-pure text-ink hover:bg-pink-light'}`}>
                <div className="flex items-baseline justify-between mb-6">
                  <span className={`text-[0.65rem] uppercase tracking-editorial font-semibold ${i === 1 ? 'text-pink-light' : 'text-pink-dark'}`}>{tr.label}</span>
                  <span className={`font-display italic ${i === 1 ? 'text-pink-light' : 'text-pink-dark'}`}>N° 0{i + 1}</span>
                </div>
                <h3 className={`font-display text-3xl md:text-4xl mb-4 ${i === 1 ? 'text-white-pure' : 'text-ink'}`}>{tr.headline}</h3>
                <p className={`leading-relaxed mb-8 ${i === 1 ? 'text-white-pure/80' : 'text-graphite'}`}>{tr.copy}</p>

                <div className={`pt-6 border-t flex items-center gap-2 text-[0.65rem] uppercase tracking-editorial font-semibold ${i === 1 ? 'border-white-pure/15 text-pink-light' : 'border-line text-pink-dark'}`}>
                  <SignatureHeart className="w-3 h-3" /> Disponible en lista de espera
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-12 md:py-20 bg-blush-bg">
        <div className="container-x">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow">Por qué formarte conmigo</span>
            <h2 className="h-display text-4xl md:text-5xl mt-6 mb-6 text-balance">
              No te enseño una técnica. <span className="italic text-pink-dark">Te enseño un oficio.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-line">
            {why.map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="bg-white-pure p-8 md:p-10 hover:bg-pink-light transition-all duration-500">
                  <Icon className="w-8 h-8 text-pink-dark mb-6" />
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-4">{w.title}</h3>
                  <p className="text-graphite leading-relaxed">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Waitlist Form — white on mobile, pink on desktop */}
      <section id="lista-espera" className="py-12 md:py-20 bg-white-pure md:bg-gradient-pink relative overflow-hidden border-t border-line md:border-none">
        <div className="hidden md:block absolute -top-10 -right-10 text-pink-dark/15 pointer-events-none">
          <SignatureHeart className="w-80 h-80" />
        </div>

        <div className="container-x relative max-w-2xl">
          <div className="text-center mb-12">
            <span className="eyebrow">Lista de espera</span>
            <h2 className="h-display text-4xl md:text-6xl mt-6 mb-6 text-balance">
              Quiero <span className="italic text-pink-dark">aprender contigo</span>
            </h2>
            <p className="text-graphite leading-relaxed">
              Déjame tus datos y te avisaré en cuanto abra las plazas. Sin compromiso. Sin spam.
            </p>
          </div>

          {sent ? (
            <div className="bg-white-pure border border-line p-10 text-center">
              <SignatureHeart className="w-12 h-12 text-pink-dark mx-auto mb-4" />
              <p className="font-display text-2xl text-ink mb-2">¡Solo falta un paso!</p>
              <p className="text-graphite">
                Acabamos de abrir WhatsApp con tu mensaje listo para enviar. Si no se abrió,{' '}
                <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer" className="underline text-pink-dark">
                  escríbeme por aquí
                </a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white-pure border border-line p-8 md:p-10 space-y-5">
              <div>
                <label className="block text-[0.65rem] uppercase tracking-editorial font-semibold text-ink mb-2">Tu nombre</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Cómo te llamas"
                  className="w-full px-4 py-3 bg-white-pure border border-ink/15 focus:border-ink focus:outline-none text-ink text-sm"
                />
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-editorial font-semibold text-ink mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-white-pure border border-ink/15 focus:border-ink focus:outline-none text-ink text-sm"
                />
              </div>

              <div>
                <label className="block text-[0.65rem] uppercase tracking-editorial font-semibold text-ink mb-2">¿Qué track te interesa?</label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {COURSE_TRACKS.map((tr) => (
                    <button
                      key={tr.label}
                      type="button"
                      onClick={() => setTrack(tr.label)}
                      className={`px-3 py-2.5 text-xs uppercase tracking-widest border transition-all ${
                        track === tr.label ? 'bg-ink text-white-pure border-ink' : 'bg-white-pure text-ink border-ink/15 hover:border-ink'
                      }`}
                    >
                      {tr.label}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Apuntarme a la lista <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

    </>
  );
}
