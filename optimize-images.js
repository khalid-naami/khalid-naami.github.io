const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'khalid_mastermind.webp', width: 300, quality: 75 },
  { name: 'greeks_anatomy.webp', width: 300, quality: 75 },
  { name: 'khalid_profile.webp', width: 300, quality: 75 },
  { name: 'zoro ronono.webp', width: 64, quality: 80 },
  { name: 'zoro-final.webp', width: 64, quality: 80 }
];

const imgDir = path.join(__dirname, 'static', 'img');

async function optimize() {
  for (const img of images) {
    const inputPath = path.join(imgDir, img.name);
    const outputPath = path.join(imgDir, `new_${img.name}`);
    
    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Optimizing ${img.name}...`);
        await sharp(inputPath)
          .resize(img.width)
          .webp({ quality: img.quality })
          .toFile(outputPath);
        console.log(`Generated new_${img.name}`);
      } catch (err) {
        console.error(`Error optimizing ${img.name}:`, err);
      }
    }
  }
}

optimize();
