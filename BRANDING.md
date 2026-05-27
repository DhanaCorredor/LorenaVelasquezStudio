# Lorena Velásquez Studio · Manual de marca

Sistema visual y de comunicación del estudio. Este documento es la fuente de verdad para nuevas piezas (web, social, impresos, papelería). Los tokens viven en `tailwind.config.js` y `src/index.css` — si cambias uno, cámbialo allí también.

---

## 1. Identidad

**Nombre completo:** Lorena Velásquez Studio
**Marca corta:** Nails by Lorena Velásquez
**Handle social:** @lorev.studio
**Ubicación:** Calle Pico de los Artilleros 146, Moratalaz · Madrid

**Posicionamiento:** estudio premium de manicura y pedicura con técnica profesional, atención personalizada y formación. Una clienta cada vez, sin prisas, ambiente cuidado.

**Atributos de marca:** editorial · cuidado · femenino · sereno · profesional.

---

## 2. Logotipo

Archivo principal: `public/logo.png` (servido a 600 px máximo).

**Usos sobre fondo claro:** se aplica el logo tal cual.
**Usos sobre fondo oscuro (hero wine):** se invierte mediante `brightness-0 invert` (ver `Layout.tsx:74`). El logo nunca cambia de color: solo blanco o negro.

**Espacio de respeto:** mínimo el alto de la "L" alrededor del logotipo.
**Tamaño mínimo en pantalla:** 32 px de alto. Bajo eso se pierde legibilidad.

**Marca alternativa:** `SignatureHeart` (corazón estilizado, ver `src/components/SignatureHeart.tsx`). Se usa como floritura editorial, separador y firma — siempre en `pink-dark` o `pink-light` según el fondo. Nunca como sustituto del logotipo principal.

---

## 3. Paleta de colores

Paleta editorial: blanco y negro como dominantes, rosa como acento sofisticado, vino como acento profundo.

### Neutros

| Token            | Hex      | Uso                                                     |
| ---------------- | -------- | ------------------------------------------------------- |
| `white-pure`     | #FFFFFF  | Fondo dominante, texto sobre oscuros                    |
| `offwhite`       | #FBE9E7  | Variante cálida muy sutil                               |
| `paper`          | #FDF1EF  | Bloques editoriales suaves                              |
| `blush-bg`       | #FBE9E7  | Fondos de sección alternos (catálogo, why)              |
| `line`           | #E8E8E8  | Bordes finos, separadores                               |
| `stone-light`    | #9B9B9B  | Texto auxiliar mínimo, contraste medio                  |
| `stone`          | #6B6B6B  | Texto secundario, metadatos                             |
| `graphite`       | #2A2A2A  | Texto de cuerpo                                         |
| `ink-soft`       | #1A1A1A  | Negro suavizado para bloques                            |
| `ink`            | #0A0A0A  | Negro principal: titulares, footer, botón primario      |

### Rosa (acento)

| Token        | Hex      | Uso                                                              |
| ------------ | -------- | ---------------------------------------------------------------- |
| `pink-light` | #F4DDDD  | Hover suaves, fondos delicados, gradientes                       |
| `pink`       | #E8C5C5  | Acento medio, gradientes                                         |
| `pink-dark`  | #C99B9F  | **Acento principal de marca.** CTAs secundarias, iconos, eyebrows |
| `pink-deep`  | #A87580  | Hover de `pink-dark`, énfasis profundo                           |

### Wine (vino)

| Token        | Hex      | Uso                                                  |
| ------------ | -------- | ---------------------------------------------------- |
| `wine-light` | #7A2640  | Hover de wine                                        |
| `wine`       | #5C1A30  | **Color secundario de marca.** Hero, secciones inmersivas |
| `wine-dark`  | #3F1020  | Texto sobre claros wine, profundidad                 |

### Gradientes

```
gradient-pink: linear-gradient(135deg, #F4DDDD 0%, #E8C5C5 100%)
```
Único gradiente del sistema. Se usa en CTAs finales y secciones cierre.

### Reglas de uso

- **Texto sobre wine:** siempre `white-pure` o `pink-light`. Nunca rosas medios.
- **Texto sobre rosa claro:** `ink` o `wine-dark`.
- **CTA primaria sobre fondo claro:** `bg-ink` con hover a `bg-pink-dark`.
- **CTA sobre fondo wine:** `bg-white-pure` con hover a `bg-pink-light`.
- **Acento (eyebrow, iconos pequeños, separadores):** siempre `pink-dark`.
- **No usar:** rojo, azul, verde, amarillo. La paleta no tiene espacio para más colores.

---

## 4. Tipografía

Cuatro familias coordinadas. Cargadas desde Google Fonts.

### Familias

| Token      | Familia                  | Rol                                                       |
| ---------- | ------------------------ | --------------------------------------------------------- |
| `display`  | Cormorant Garamond       | Titulares principales, números, énfasis editorial         |
| `serif`    | Playfair Display         | Variante secundaria de serif (citas, casos puntuales)     |
| `script`   | Allura                   | Firma decorativa, uso muy puntual                         |
| `sans`     | Inter                    | Cuerpo, UI, navegación, etiquetas, eyebrows               |

### Jerarquía

| Nivel               | Familia    | Tamaño (mobile → desktop) | Peso       | Notas                                  |
| ------------------- | ---------- | ------------------------- | ---------- | -------------------------------------- |
| H1 hero             | display    | 2.75rem → 5.75rem         | 600        | `leading-[1.02]`, `text-balance`       |
| H2 sección          | display    | 1.875rem → 3.75rem        | 600        | Itálica reservada para palabra clave   |
| H3 tarjeta          | display    | 1.125rem → 1.65rem        | 700        | Card titles                            |
| Cuerpo grande       | sans       | 1rem → 1.25rem            | 500        | Introducciones, leads                  |
| Cuerpo              | sans       | 0.875rem → 1rem           | 450        | Párrafos generales                     |
| Caption / metadato  | sans       | 0.75rem                   | 700        | Stone, mayúsculas si aplica            |
| Eyebrow             | sans       | 0.78rem                   | 700        | `uppercase`, tracking `editorial` (0.35em), color `pink-dark` |

### Énfasis editorial

- **Itálicas** del display: se usan para una sola palabra clave por titular, en `text-pink-dark` (sobre claro) o `text-pink-light` (sobre wine). Ej: "Tu espacio para *embellecer* tus uñas."
- **Strong:** peso 700, color `ink` (sobre claro) o `white-pure` (sobre oscuro).
- **Allura (script):** uso muy puntual para firmas o detalles ornamentales. Nunca en cuerpo.

### Letterspacing

| Token              | Valor   | Uso                                |
| ------------------ | ------- | ---------------------------------- |
| `widest` (Tailwind)| 0.1em   | Botones, navegación                |
| `widest-plus`      | 0.25em  | Etiquetas técnicas                 |
| `editorial`        | 0.35em  | Eyebrows, secciones, breadcrumbs   |

### OpenType features

Body activa `kern`, `liga`, `ss01` (ver `index.css:14`). No deshabilitar — son parte del acabado tipográfico de Inter.

---

## 5. Iconografía

- **Set principal:** [`lucide-react`](https://lucide.dev). Iconos de líneas finas, coherentes en grosor. Tamaños habituales: `w-3 h-3` (inline), `w-4 h-4` (CTA), `w-5 h-5` (nav), `w-8 h-8` (destacado de sección).
- **Iconos custom (en `src/components/`):**
  - `SignatureHeart`: marca alternativa, decoración editorial.
  - `WhatsAppIcon`: el icono oficial de Lucide no se alinea con la identidad visual del botón flotante.
  - `TikTokIcon`: ídem.
- **Color:** los iconos heredan color del texto. En contexto de acento, `text-pink-dark`. En footer y hero oscuro, `text-pink-light`.
- **Decorativos:** siempre `aria-hidden`. Si llevan acción, `aria-label` obligatorio.

---

## 6. Botones y CTAs

Definidos como utilidades de Tailwind en `src/index.css:35-59`. **No componer botones a mano** — usar las clases:

| Clase                  | Uso                                                                            |
| ---------------------- | ------------------------------------------------------------------------------ |
| `btn-primary`          | Acción principal sobre fondo claro. Negro → rosa al hover.                     |
| `btn-secondary`        | Acción secundaria sobre fondo claro. Borde negro, fondo blanco.                |
| `btn-heart`            | Acción afectiva (lista de espera, cursos). Rosa oscuro.                        |
| `btn-on-wine`          | Acción principal sobre fondo wine. Blanco → rosa claro.                        |
| `btn-on-wine-outline`  | Acción secundaria sobre fondo wine. Borde blanco.                              |
| `btn-ghost`            | Enlace fantasma con subrayado animado.                                          |

**Estructura común:** `px-8 py-4`, uppercase, tracking-widest, font-bold, text-xs. Animación: hover sube ligeramente (`scale-[1.03]`) con sombra glow; active hunde (`scale-95`). Transición 300ms.

**Reservar:** un único botón primario por sección. Si hay dos CTAs visibles, usar primario + secundario, nunca dos primarios.

---

## 7. Sombras y profundidad

| Token       | Valor                                              | Uso                                  |
| ----------- | -------------------------------------------------- | ------------------------------------ |
| `soft`      | `0 8px 32px -8px rgba(10,10,10,0.08)`             | Botones primarios, tarjetas suaves   |
| `glow`      | `0 0 40px -8px rgba(201,155,159,0.4)`             | Hover de CTAs principales            |
| `editorial` | `0 24px 50px -20px rgba(10,10,10,0.18)`           | Tarjetas elevadas, badges flotantes  |

No usar sombras nativas de Tailwind (`shadow-md`, `shadow-xl`) — siempre los tres tokens del sistema.

---

## 8. Movimiento y animación

Cuatro animaciones registradas en `tailwind.config.js`:

| Token        | Curva               | Uso                                  |
| ------------ | ------------------- | ------------------------------------ |
| `fade-up`    | 0.8s ease-out       | Entrada de bloques al hacer scroll   |
| `fade-in`    | 1s ease-out         | Aparición simple                     |
| `marquee`    | 40s linear infinite | Cintas de testimonios (reservado)    |
| `heartbeat`  | 1.5s ease-in-out    | Pulso afectivo en el `SignatureHeart`|

**Transiciones de UI:** 300ms `ease`. Más rápido se siente nervioso, más lento se siente lento.
**Hover/active:** siempre acompañado de cambio de estado (color, escala, sombra). Nada de hovers que solo cambian opacidad — falta de jerarquía.
**Scroll:** `scroll-behavior: smooth` global. Las anclas usan `scroll-mt-32` para no quedar bajo la nav fija.

---

## 9. Espaciado, grids y maquetación

- **Contenedor:** `container-x` = `max-w-7xl mx-auto px-5 sm:px-6 lg:px-12`. Todo el contenido pasa por aquí.
- **Padding vertical de secciones:** `py-10 md:py-14` (compacto), `py-12 md:py-20` (estándar), `py-16 md:py-24` (cierre / hero secundario).
- **Gaps en grids:** `gap-2 md:gap-4` (tarjetas compactas), `gap-6 lg:gap-16` (split editorial).
- **Border en tarjetas:** `border border-line md:border-2` — más fino en mobile, presente en desktop.

### Composiciones editoriales recurrentes

- **Eyebrow + título + cuerpo:** `<span class="eyebrow">` arriba, h2 display debajo con itálica de acento, párrafo en cuerpo.
- **Números decorativos grandes:** `font-display italic text-[12rem]` en `line/40` o `white-pure/5` como elemento de fondo.
- **Línea editorial:** `.editorial-line::before` añade una línea rosa de 48 px antes del bloque.

---

## 10. Tono de voz

**Eje afectivo, no técnico.** El sitio habla de cuidado y experiencia, no de químicas ni de marketing.

### Sí

- Cercano, cálido, en segunda persona ("tu hora favorita del mes", "te escribiré pronto").
- Frases cortas, ritmo claro.
- Una palabra clave en cursiva por titular para subrayar la emoción.
- Detalles concretos: "Confirmación inmediata", "Cancelación 24h", precios visibles.
- Español de España, sin localismos extremos. No "vosotros" institucional — siempre "tú".

### No

- Lenguaje corporativo ("nuestra propuesta de valor", "experiencias diferenciales").
- Superlativos vacíos ("la mejor", "número uno") salvo donde haya respaldo (Nailympion Spain).
- Tecnicismos sin contexto (decir "base rubber" solo cuando importa la durabilidad).
- Emojis en copy de páginas. Sí en WhatsApp/mensajes a clientes.

### Ejemplos canónicos

> "Tu espacio para *embellecer* tus uñas."
> "Cuidado integral para *manos y pies*."
> "No es solo una manicura. Es tu hora favorita de la semana. Y empieza con un clic."
> "No te enseño una técnica. *Te enseño un oficio.*"

### Microcopy

- **Botón reservar:** "Reservar mi cita" (intencional, posesivo) o "Ver disponibilidad". Nunca "Click aquí".
- **Errores 404:** "Esta página se ha *esfumado*."
- **Confirmación form:** "¡Solo falta un paso!" en lugar de "Mensaje enviado".

---

## 11. Aplicaciones

### Open Graph / redes sociales

Imagen oficial: `public/og.jpg`, 1200×630, JPEG. Composición: retrato sobre canvas `wine #5C1A30`. Se regenera con `npm run compress`.

### Favicon y app icon

`public/favicon.png` (servido a 512 px). `theme-color` en `index.html`: `#5C1A30` (wine).

### Schema.org

Marcado JSON-LD `BeautySalon` en `index.html:35`. Si cambian horarios, dirección o catálogo, actualizar también ahí — no se autogenera desde `data.ts`.

### Datos de contacto canónicos

Centralizados en `src/data.ts`:

```
WhatsApp:   +34 722 19 65 99
Reservas:   https://confirmafy.com/lorena-velasquez
Instagram:  https://www.instagram.com/lorev.studio
TikTok:     https://www.tiktok.com/@lorev.studio
Horario:    Lun – Sáb · 10:00 – 20:00
Dirección:  Calle Pico de los Artilleros 146, Moratalaz · Madrid
```

Cualquier pieza nueva debe leer de aquí, no hardcodear.

---

## 12. Don'ts (errores frecuentes a evitar)

- Mezclar más de tres familias tipográficas en una misma vista.
- Usar `pink-light` para texto sobre fondo blanco — no contrasta.
- Aplicar sombras nativas de Tailwind (`shadow-lg`) en vez de los tokens del sistema.
- CTAs con verbo genérico ("Enviar", "OK", "Click").
- Hovers que solo bajan la opacidad.
- Titulares sin cursiva de acento (rompe la firma visual editorial).
- Bordes redondeados en botones (`rounded-md`). El sistema es de esquinas vivas — `rounded-none` siempre, salvo iconos circulares (WhatsApp flotante).
