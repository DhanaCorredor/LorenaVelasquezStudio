// Compress and optimize images in /public for web delivery.
// Usage: npm run compress
//
// - Resizes large images down to a reasonable max width.
// - Outputs an optimized PNG plus a WebP fallback (smaller, modern browsers).
// - Backs up originals to .image-originals/ (outside /public so they don't ship).

import sharp from 'sharp';
import { mkdir, readdir, copyFile, stat, rm, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const PUBLIC = path.resolve('public');
const BACKUP = path.resolve('.image-originals');
const MAX_WIDTH = 1400; // covers retina at hero size; nothing on the site needs more
const PNG_QUALITY = 85;
const WEBP_QUALITY = 82;

// Instagram gallery: drop photos named work-1.jpg … work-6.jpg into
// public/gallery/originals/ and this script square-crops them to two WebP
// sizes (800 + 400 for srcset). Slots without a real photo get an on-brand
// placeholder so the section always renders.
const GALLERY_DIR = path.join(PUBLIC, 'gallery');
const GALLERY_ORIGINALS = path.join(GALLERY_DIR, 'originals');
const GALLERY_IDS = ['work-1', 'work-2', 'work-3', 'work-4', 'work-5', 'work-6'];
const GALLERY_SIZES = [{ suffix: '', width: 800 }, { suffix: '@400', width: 400 }];
const PLACEHOLDER_TONES = ['#FBE9E7', '#F4DDDD', '#E8C5C5', '#C99B9F', '#7A2640', '#5C1A30'];

const TARGETS = [
  // file → optional { maxWidth, makeWebp }
  { file: 'lorena-pink-suit.png', maxWidth: 1200, makeWebp: true },
  { file: 'lorena-walking.png', maxWidth: 800, makeWebp: true },
  { file: 'logo.png', maxWidth: 600, makeWebp: false },
  { file: 'favicon.png', maxWidth: 512, makeWebp: false },
];

const kb = (bytes) => (bytes / 1024).toFixed(1);

async function ensureBackup(file) {
  const src = path.join(PUBLIC, file);
  const dst = path.join(BACKUP, file);
  if (!existsSync(BACKUP)) await mkdir(BACKUP, { recursive: true });
  if (!existsSync(dst)) {
    await copyFile(src, dst);
    console.log(`  ↳ backup saved: .image-originals/${file}`);
  }
}

async function compressOne({ file, maxWidth = MAX_WIDTH, makeWebp = true }) {
  const src = path.join(PUBLIC, file);
  if (!existsSync(src)) {
    console.warn(`× ${file} not found, skipping`);
    return;
  }
  const before = (await stat(src)).size;
  await ensureBackup(file);

  // Read from backup so we don't compress already-optimized output
  const srcBuf = await sharp(path.join(BACKUP, file))
    .resize({ width: maxWidth, withoutEnlargement: true })
    .toBuffer();

  // Re-encode optimized PNG
  const tmp = src + '.tmp';
  const meta = await sharp(srcBuf).metadata();
  const hasAlpha = meta.hasAlpha;

  await sharp(srcBuf)
    .png({
      quality: PNG_QUALITY,
      compressionLevel: 9,
      palette: !hasAlpha, // palette mode breaks soft transparency
      effort: 10,
    })
    .toFile(tmp);
  await rm(src);
  await rename(tmp, src);

  const after = (await stat(src)).size;
  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${file}: ${kb(before)} KB → ${kb(after)} KB (-${saved}%)`);

  if (makeWebp) {
    const webp = src.replace(/\.png$/i, '.webp');
    await sharp(srcBuf).webp({ quality: WEBP_QUALITY }).toFile(webp);
    const webpSize = (await stat(webp)).size;
    console.log(`  ↳ webp: ${kb(webpSize)} KB`);
  }
}

// Build a 1200x630 OG/social card from the hero portrait on a wine-colored canvas.
async function buildOgImage() {
  const heroBackup = path.join(BACKUP, 'lorena-pink-suit.png');
  if (!existsSync(heroBackup)) {
    console.warn('× og.jpg: source backup not found, skipping');
    return;
  }
  const out = path.join(PUBLIC, 'og.jpg');
  const portrait = await sharp(heroBackup)
    .resize({ height: 630, withoutEnlargement: false })
    .toBuffer();
  const { width: portraitWidth } = await sharp(portrait).metadata();
  // Position the portrait on the right side, leave room for the brand on the left.
  const left = Math.max(1200 - portraitWidth - 40, 600);
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#5C1A30' },
  })
    .composite([{ input: portrait, top: 0, left }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  const size = (await stat(out)).size;
  console.log(`✓ og.jpg generated (1200x630): ${kb(size)} KB`);
}

function placeholderSvg(size, tone, fg, n) {
  const isDark = ['#7A2640', '#5C1A30'].includes(tone);
  const ink = isDark ? '#FBE9E7' : fg;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="${size}" height="${size}" fill="${tone}"/>
    <rect x="${size * 0.06}" y="${size * 0.06}" width="${size * 0.88}" height="${size * 0.88}"
      fill="none" stroke="${ink}" stroke-opacity="0.35" stroke-width="${size * 0.004}"/>
    <text x="50%" y="44%" text-anchor="middle" font-family="Georgia, serif" font-style="italic"
      font-size="${size * 0.12}" fill="${ink}">Tu trabajo</text>
    <text x="50%" y="58%" text-anchor="middle" font-family="Arial, sans-serif"
      font-size="${size * 0.045}" letter-spacing="${size * 0.01}" fill="${ink}" fill-opacity="0.75">@LOREV.STUDIO</text>
    <text x="50%" y="86%" text-anchor="middle" font-family="Georgia, serif"
      font-size="${size * 0.08}" fill="${ink}" fill-opacity="0.3">0${n}</text>
  </svg>`;
}

async function findOriginal(id) {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    const p = path.join(GALLERY_ORIGINALS, `${id}.${ext}`);
    if (existsSync(p)) return p;
  }
  return null;
}

async function buildGallery() {
  if (!existsSync(GALLERY_DIR)) await mkdir(GALLERY_DIR, { recursive: true });
  console.log(`\nBuilding gallery (${GALLERY_IDS.length} slots)…`);
  for (let i = 0; i < GALLERY_IDS.length; i++) {
    const id = GALLERY_IDS[i];
    const original = await findOriginal(id);
    for (const { suffix, width } of GALLERY_SIZES) {
      const out = path.join(GALLERY_DIR, `${id}${suffix}.webp`);
      if (original) {
        await sharp(original)
          .resize({ width, height: width, fit: 'cover', position: 'attention' })
          .webp({ quality: WEBP_QUALITY })
          .toFile(out);
      } else {
        const tone = PLACEHOLDER_TONES[i % PLACEHOLDER_TONES.length];
        const svg = Buffer.from(placeholderSvg(width, tone, '#7A2640', i + 1));
        await sharp(svg).webp({ quality: WEBP_QUALITY }).toFile(out);
      }
    }
    console.log(`✓ gallery/${id} (${original ? 'photo' : 'placeholder'})`);
  }
}

console.log(`Compressing ${TARGETS.length} files…\n`);
for (const target of TARGETS) {
  try {
    await compressOne(target);
  } catch (err) {
    console.error(`✗ ${target.file}: ${err.message}`);
  }
}

try {
  await buildOgImage();
} catch (err) {
  console.error(`✗ og.jpg: ${err.message}`);
}

try {
  await buildGallery();
} catch (err) {
  console.error(`✗ gallery: ${err.message}`);
}

console.log('\nDone.');

const dir = await readdir(PUBLIC);
const sizes = await Promise.all(
  dir.filter((f) => !f.startsWith('_')).map(async (f) => {
    const s = await stat(path.join(PUBLIC, f));
    return s.isFile() ? { name: f, kb: kb(s.size) } : null;
  })
);
console.log('\nFinal /public sizes:');
sizes.filter(Boolean).forEach(({ name, kb }) => console.log(`  ${name.padEnd(28)} ${kb} KB`));
