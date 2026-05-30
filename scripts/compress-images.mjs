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
