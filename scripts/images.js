import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const srcDir = 'images-src';
const outDir = 'src/assets/images';
const widths = [400, 800, 1200];

fs.mkdirSync(outDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  const name = path.parse(file).name;
  for (const w of widths) {
    const img = sharp(path.join(srcDir, file)).resize({ width: w, withoutEnlargement: true });
    await img.clone().avif({ quality: 50 }).toFile(`${outDir}/${name}-${w}.avif`);
    await img.clone().webp({ quality: 75 }).toFile(`${outDir}/${name}-${w}.webp`);
    await img.clone().jpeg({ quality: 80 }).toFile(`${outDir}/${name}-${w}.jpg`);
  }
  console.log(`done: ${name}`);
}
