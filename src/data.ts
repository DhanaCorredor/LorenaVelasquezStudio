// Site constants and catalog data

export const SITE_URL = 'https://lorena-velasquez-studio.vercel.app';
export const BOOKING_URL = 'https://confirmafy.com/lorena-velasquez';
export const INSTAGRAM_URL = 'https://www.instagram.com/lorev.studio';
export const TIKTOK_URL = 'https://www.tiktok.com/@lorev.studio';
export const WHATSAPP_NUMBER = '+34 722 19 65 99';
export const WHATSAPP_BASE = 'https://wa.me/34722196599';
export const WHATSAPP_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola Lorena! Me gustaría reservar una cita 💅')}`;
export const LOCATION = 'Calle Pico de los Artilleros 146, Moratalaz · Madrid';
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Calle+Pico+de+los+Artilleros+146+Moratalaz+Madrid';
export const LOCATION_SHORT = 'Moratalaz, Madrid';
export const HOURS = 'Lun – Sáb · 10:00 – 20:00';

export type Service = {
  title: string;
  description: string;
  price: string;
  duration: string;
  badge?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  intro: string;
  items: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'manicura',
    label: 'Manicura',
    intro: 'Cuidado completo de tus manos, desde lo express hasta el tratamiento deluxe. Salud de la uña natural en cada técnica.',
    items: [
      {
        title: 'Manicura Exprés Semi',
        description: 'Retirada, limado, cutículas y semipermanente en un color. Hidratación final.',
        price: '17,90 €',
        duration: '45 min',
        badge: 'Top ventas',
      },
      {
        title: 'Manicura Deluxe Semipermanente',
        description: 'Cuidado completo de cutículas + esmaltado. Dos uñas decoradas gratis.',
        price: '24,99 €',
        duration: '1 h 15 min',
      },
      {
        title: 'Dipping para Uñas Débiles',
        description: 'Refuerzo con porcelana en polvo para máxima dureza. Decoración gratis.',
        price: '30,00 €',
        duration: '1 h',
      },
      {
        title: 'Manicura Completa Tradicional',
        description: 'Limado, tratamiento de cutículas y esmaltado clásico de alta calidad.',
        price: '20,00 €',
        duration: '30 min',
      },
      {
        title: 'Manicura Hombre',
        description: 'Limado, pulido de cutículas, exfoliación e hidratación. Acabado natural.',
        price: '18,00 €',
        duration: '30 min',
      },
      {
        title: 'Manicura Exprés Tradicional',
        description: 'Limado, cutículas y esmaltado clásico en tiempo récord.',
        price: '15,00 €',
        duration: '30 min',
      },
      {
        title: 'Retirada Esmalte Permanente + Hidratación',
        description: 'Eliminación segura sin dañar la uña + endurecedor y aceite nutritivo.',
        price: '10,00 €',
        duration: '15 min',
      },
    ],
  },
  {
    id: 'pedicura',
    label: 'Pedicura',
    intro: 'Cuidado integral de pies. Higiene profunda, hidratación, eliminación de durezas y masaje relajante.',
    items: [
      {
        title: 'Pedicura Spa Completa',
        description: 'Remojo hidratante, eliminación de durezas, masaje y esmaltado.',
        price: '38,00 €',
        duration: '1 h',
        badge: 'Más reservado',
      },
      {
        title: 'Pedicura Spa Completa sin Esmalte',
        description: 'El spa completo terminado con pulido natural, sin color.',
        price: '33,00 €',
        duration: '1 h',
      },
      {
        title: 'Pedicura Exprés Semipermanente',
        description: 'Igualado, hidratación de cutículas y esmalte semipermanente.',
        price: '25,00 €',
        duration: '45 min',
      },
      {
        title: 'Pedicura Exprés Tradicional',
        description: 'Limado, cutículas y esmalte clásico. Mantenimiento rápido.',
        price: '20,00 €',
        duration: '30 min',
      },
      {
        title: 'Retirada Esmalte Semipermanente Pies',
        description: 'Eliminación segura del semipermanente + hidratación final.',
        price: '10,00 €',
        duration: '15 min',
      },
    ],
  },
  {
    id: 'extensiones',
    label: 'Acrílicas',
    intro: 'Técnicas de nivel internacional (participación en Nailympion Spain). Estructura impecable, durabilidad y diseño totalmente a medida.',
    items: [
      {
        title: 'Uñas Acrílicas Baby Boomer',
        description: 'Difuminado perfecto, técnica de competencia internacional.',
        price: '59,90 €',
        duration: '1 h 15 min',
        badge: 'Premium',
      },
      {
        title: 'Reconstrucción de Uñas Mordidas',
        description: 'Reconstrucción acrílica para uñas mordidas. Recupera el aspecto natural.',
        price: '55,00 €',
        duration: '1 h 15 min',
      },
      {
        title: 'Aplicación de Uñas Acrílicas / Gel',
        description: 'Extensiones esculpidas en gel o acrílico. Alta resistencia.',
        price: '44,90 €',
        duration: '1 h 45 min',
      },
      {
        title: 'Relleno de Uñas Mordidas',
        description: 'Revisión, reparación de piezas y esmaltado semipermanente.',
        price: '45,00 €',
        duration: '1 h 15 min',
      },
      {
        title: 'Relleno de Uñas Acrílicas',
        description: 'Mantenimiento del crecimiento + nivelación y esmaltado.',
        price: '40,00 €',
        duration: '1 h 30 min',
      },
      {
        title: 'Aplicación de Uñas Soft Gel',
        description: 'Tips de gel flexible. Acabado ligero, natural y rápido.',
        price: '35,00 €',
        duration: '1 h 30 min',
      },
      {
        title: 'Relleno de Uñas Soft Gel',
        description: 'Mantenimiento del soft gel + limpieza y esmaltado.',
        price: '30,00 €',
        duration: '1 h 30 min',
      },
      {
        title: 'Retirada de Acrílico',
        description: 'Eliminación segura del acrílico + endurecedor.',
        price: '15,00 €',
        duration: '30 min',
      },
    ],
  },
  {
    id: 'extras',
    label: 'Extras',
    intro: 'Pequeños detalles que marcan la diferencia. Diseños a mano y reparaciones puntuales.',
    items: [
      {
        title: 'Decoración de Uñas (Nail Art)',
        description: 'Francesa, diseños clásicos, 3D y nail art hecho a mano.',
        price: 'Desde 5,00 €',
        duration: '30 min',
      },
      {
        title: 'Reparar Uña Rota Acrílico',
        description: 'Reparación individual con acrílico técnico.',
        price: '5,00 €',
        duration: '15 min',
      },
    ],
  },
];

// Featured services shown as compact preview on home
export const HOME_PREVIEW_SLUGS = [
  'Manicura Exprés Semi',
  'Manicura Deluxe Semipermanente',
  'Pedicura Spa Completa',
  'Uñas Acrílicas Baby Boomer',
  'Aplicación de Uñas Soft Gel',
];

export const TESTIMONIALS = [
  {
    name: 'María G.',
    service: 'Cliente desde 2023',
    rating: 5,
    text: 'Es mi hora favorita del mes. Salgo del estudio con las manos perfectas y la cabeza descansada. Lorena entiende lo que es cuidar de verdad.',
  },
  {
    name: 'Andrea L.',
    service: 'Extensiones',
    rating: 5,
    text: 'Llevaba años con uñas frágiles. Lorena me hizo unas extensiones perfectas, naturales, resistentes. Mi autoestima cambió. Suena exagerado, pero es real.',
  },
  {
    name: 'Patricia M.',
    service: 'Semipermanente',
    rating: 5,
    text: 'El estudio es un refugio. Limpísimo, tranquilo, bonito. Lorena escucha, aconseja y mima. El resultado siempre, siempre, impecable.',
  },
  {
    name: 'Carolina R.',
    service: 'Alumna formación',
    rating: 5,
    text: 'Hice su curso desde cero y hoy vivo de esto. Lorena enseña con la misma dulzura y rigor con la que trabaja. Le debo mi profesión.',
  },
  {
    name: 'Lucía F.',
    service: 'Manicura combinada',
    rating: 5,
    text: 'Después de Lorena no hay vuelta atrás. Sus manos cuidan tus manos. Es lo más cerca que he estado de un spa en una manicura.',
  },
];

export const FAQS = [
  {
    q: '¿Cuánto dura el esmaltado semipermanente?',
    a: 'Entre 3 y 4 semanas sin saltos ni levantamientos. La técnica rusa con base rubber permite una durabilidad superior.',
  },
  {
    q: '¿Daña mis uñas la manicura semipermanente?',
    a: 'En absoluto si se hace bien. Mi protocolo respeta totalmente la lámina natural: no limo la uña al retirar, uso productos de alta gama y aplico tratamiento hidratante en cada cita.',
  },
  {
    q: '¿Cómo reservo mi cita?',
    a: 'Desde el botón "Reservar" eliges servicio, día y hora en mi calendario online. Recibirás confirmación inmediata por email.',
  },
  {
    q: '¿Política de cancelación?',
    a: 'Puedes cambiar o cancelar tu cita hasta 24h antes sin coste. Cancelaciones de última hora o ausencias requieren el 50% del servicio para próximas reservas.',
  },
  {
    q: '¿Dónde está el estudio?',
    a: 'Calle Pico de los Artilleros 146, barrio de Moratalaz, Madrid. Bien comunicado con metro y bus.',
  },
  {
    q: '¿Aceptáis pago con tarjeta?',
    a: 'Sí, aceptamos efectivo, tarjeta y Bizum. El pago se realiza al finalizar el servicio.',
  },
];

export const COURSE_TRACKS = [
  {
    label: 'Desde Cero',
    headline: 'Empieza de cero',
    copy: 'Para quien quiere dar el salto y aprender desde la primera lima hasta el primer cliente.',
  },
  {
    label: 'Perfeccionamiento',
    headline: 'Sube de nivel',
    copy: 'Para manicuristas que ya trabajan y quieren dominar la técnica rusa y subir tarifas.',
  },
  {
    label: 'Mentoría 1:1',
    headline: 'A tu medida',
    copy: 'Plan formativo personalizado, basado en tus objetivos, tu ritmo y tu nivel actual.',
  },
];
