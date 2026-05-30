# Galería — fotos originales

Suelta aquí tus fotos de trabajos con estos nombres exactos:

```
work-1.jpg   work-2.jpg   work-3.jpg
work-4.jpg   work-5.jpg   work-6.jpg
```

(También valen `.jpeg` o `.png`.) Luego ejecuta:

```bash
npm run compress
```

El script recorta cada foto en cuadrado y genera dos WebP (`work-N.webp` 800px y `work-N@400.webp`) en `public/gallery/`, que es lo que muestra la sección "Mis trabajos" de la Home.

Mientras no haya foto para un slot, se muestra un placeholder de marca. Las fotos verticales o cuadradas quedan mejor que las horizontales.
