import { useState, useEffect } from 'react';
import { Instagram, MapPin, Clock, Star, Heart, Sparkles, GraduationCap, Calendar, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Manicura Combinada',
      subtitle: 'Técnica Rusa',
      description: 'Limpieza profunda de cutículas y nivelación impecable.',
      price: '25€ - 30€',


    },
    {
      title: 'Esmaltado Semipermanente',
      subtitle: 'Con Refuerzo',
      description: 'Base de goma/rubber para mayor durabilidad y protección.',
      price: '30€ - 35€',
    },
    {
      title: 'Extensiones',
      subtitle: 'Gel, Acrigel o Soft Gel',
      description: 'Estructura perfecta con materiales de alta gama.',
      price: '55€ - 65€',
    },
    {
      title: 'Nail Art',
      subtitle: 'Diseños Minimalistas',
      description: 'Creaciones únicas con líneas finas y efectos elegantes.',
      price: 'Consultar',
    },
    {
      title: 'Retirada + Cuidado',
      subtitle: 'Tratamiento Hidratante',
      description: 'Eliminación profesional con tratamiento hidratante.',
      price: '15€',
    },
  ];

  const courses = [
    {
      title: 'Formación desde Cero',
      type: 'PRESENCIAL & ONLINE',
      description: 'Programa completo para principiantes. Anatomía de la uña, técnicas de preparación, esmaltado profesional y seguridad certificada.',
      features: ['Anatomía y salud', 'Técnicas de preparación', 'Esmaltado profesional', 'Certificación oficial'],
      icon: Sparkles,
    },
    {
      title: 'Perfeccionamiento Técnico',
      type: 'AVANZADO',
      description: 'Especialización para profesionales. Manicura combinada, uso de torno, nivelación impecable y optimización de tiempos.',
      features: ['Manicura combinada', 'Uso de torno profesional', 'Nivelación perfecta', 'Optimización de tiempos'],
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-light overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-light/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/By_LORENA_VELASQUEZ_-_1_(3).png" alt="Logo" className="h-11 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#studio" className="text-sm font-medium text-text-dark hover:text-accent transition-colors">
              Studio
            </a>
            <a href="#servicios" className="text-sm font-medium text-text-dark hover:text-accent transition-colors">
              Servicios
            </a>
            <a href="#academia" className="text-sm font-medium text-text-dark hover:text-accent transition-colors">
              Academia
            </a>
            <a
              href="https://linktr.ee/lorev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Reservar
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-light-gray">
            <div className="px-6 py-4 space-y-4">
              <a href="#studio" className="block text-sm font-medium text-text-dark">Studio</a>
              <a href="#servicios" className="block text-sm font-medium text-text-dark">Servicios</a>
              <a href="#academia" className="block text-sm font-medium text-text-dark">Academia</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle pt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-32 -left-40 w-80 h-80 bg-accent rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <div className="mb-8 inline-flex md:block">
                <img
                  src="/By_LORENA_VELASQUEZ_-_1_(3).png"
                  alt="Logo"
                  className="h-28 w-auto mx-auto md:mx-0"
                />
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                Manicura
                <span className="block text-accent">Premium</span>
              </h1>

              <p className="text-lg text-text-light mb-10 max-w-lg leading-relaxed">
                Estudio de autor en Madrid especializado en excelencia técnica, salud de la uña natural y diseño minimalista sofisticado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://linktr.ee/lorev.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Agendar Cita <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#academia" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Cursos
                </a>
              </div>

              <div className="flex items-center gap-8">
                <a
                  href="https://www.instagram.com/lorev.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-light hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">@lorev.studio</span>
                </a>
                <div className="flex items-center gap-2 text-text-light">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-sm">5.0 Premium</span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/By_LORENA_VELASQUEZ_-_1_(2) copy.png"
                  alt="Lorena Velázquez"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="studio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
              <div className="rounded-3xl overflow-hidden bg-light relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img
                  src="/By_LORENA_VELASQUEZ_-_1 copy.png"
                  alt="Lorena Velázquez - Técnico Manicurista Profesional"
                  className="w-full h-auto object-contain py-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Professional Badge - Hover Effect */}
              <div className="absolute inset-0 flex items-end justify-start p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 rounded-3xl">
                <div className="bg-gradient-to-r from-primary to-primary/90 backdrop-blur-md rounded-2xl p-6 max-w-xs">
                  <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Técnico Manicurista</p>
                  <h3 className="text-white text-2xl font-serif font-bold mb-2">Lorena Velázquez</h3>
                  <p className="text-white/90 text-sm leading-relaxed">Especialista en técnica rusa, extensiones y diseño minimalista premium</p>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-4xl font-serif font-bold text-white">10+</p>
                  <p className="text-white text-sm font-medium">Años</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="text-accent font-medium text-sm tracking-widest uppercase">Sobre Lorena</span>
              <h2 className="text-4xl font-serif font-bold text-primary mt-4 mb-6">
                Pasión por el arte de las uñas
              </h2>
              <p className="text-text-light text-lg leading-relaxed mb-6">
                Con formación en marketing y comunicación, Lorena fusionó su mentalidad estratégica con su verdadera pasión. Hoy es Técnico Manicurista Profesional e Instructora Certificada.
              </p>
              <p className="text-text-light text-lg leading-relaxed mb-10">
                Su filosofía se basa en excelencia técnica, salud de la uña natural y diseño premium minimalista. Cada servicio es una experiencia de mimo y cuidado exclusivo.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Madrid, España</p>
                    <p className="text-text-light text-sm">Ubicación principal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Lun - Sáb: 10:00 - 20:00</p>
                    <p className="text-text-light text-sm">Horario de atención</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Servicios</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-6">
              Experiencias de Cuidado Premium
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Cada tratamiento es meticulosamente diseñado con materiales de alta gama y técnicas avanzadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-accent group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <p className="text-accent font-medium text-sm mt-1">{service.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-text-light mb-8">{service.description}</p>
                <div className="flex items-center justify-between pt-8 border-t border-light-gray">
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                  <a
                    href="https://linktr.ee/lorev.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-medium text-sm hover:gap-2 flex items-center gap-1 transition-all"
                  >
                    Reservar <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://linktr.ee/lorev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Ver Disponibilidad <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Galería</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4">
              Trabajos Minimalistas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: '/image_(4) copy.png', alt: 'Nail Art Minimalista' },
              { src: '/unnamed_(4)_(1) copy.jpg', alt: 'Extensiones Elegantes' },
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg h-96">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academia" className="py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Formación</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-6">
              Conviértete en Profesional
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Academia especializada para principiantes y profesionales que buscan perfeccionamiento técnico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-10 shadow-lg border border-light-gray hover:border-accent transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-accent font-medium text-xs tracking-widest uppercase">{course.type}</span>
                      <h3 className="text-2xl font-bold text-primary mt-3">{course.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-text-light mb-8 leading-relaxed">{course.description}</p>

                  <ul className="space-y-3 mb-10">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-dark">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://linktr.ee/lorev.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center inline-flex items-center gap-2"
                  >
                    Solicitar Plaza <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Course Formats */}
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-light-gray">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Modalidades de Aprendizaje</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-bold text-primary mb-2">Presencial</h4>
                <p className="text-text-light">Formación intensiva en el estudio con práctica real, feedback inmediato y dossier certificado.</p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-xl font-bold text-primary mb-2">Online</h4>
                <p className="text-text-light">Acceso de por vida con videos HD, plataforma optimizada y soporte continuo personalizado.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Tu transformación comienza aquí
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reserva tu cita en el estudio o únete a nuestra academia. Lorena te acompañará en cada paso hacia la excelencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linktr.ee/lorev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Linktree Oficial <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://www.instagram.com/lorev.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@lorev.studio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-light-gray py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src="/By_LORENA_VELASQUEZ_-_1_(3).png" alt="Logo" className="h-12 w-auto mb-6" />
              <p className="text-text-light text-sm leading-relaxed mb-6">
                Estudio de autor y academia especializada en manicura premium. Excelencia técnica, salud de la uña natural y diseño sofisticado.
              </p>
              <a
                href="https://www.instagram.com/lorev.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all"
              >
                <Instagram className="w-5 h-5" />
                @lorev.studio
              </a>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Navegación</h4>
              <ul className="space-y-3">
                <li><a href="#studio" className="text-text-light hover:text-accent transition-colors text-sm">Sobre Mí</a></li>
                <li><a href="#servicios" className="text-text-light hover:text-accent transition-colors text-sm">Servicios</a></li>
                <li><a href="#academia" className="text-text-light hover:text-accent transition-colors text-sm">Academia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm text-text-light">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  Madrid, España
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  Lun - Sáb: 10:00 - 20:00
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-light-gray text-center text-text-light text-sm">
            <p>© 2026 Lorena Velázquez Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
