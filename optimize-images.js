const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  { name: 'zoro-final.webp', width: 64 },
  { name: 'khalid_mastermind.webp', width: 400 },
  { name: 'greeks_anatomy.webp', width: 400 },
  { name: 'SUrface-Gamma.webp', width: 600 },
  { name: 'zoro ronono.webp', width: 128 },
  { name: 'khalid_profile.webp', width: 440 },
  { name: 'Expuser-Heatmap.webp', width: 600 },
  { name: 'implied-probabilities-analysis.webp', width: 600 }
];

const imgDir = path.join(__dirname, 'static', 'img');

async function optimize() {
  for (const img of imagesToOptimize) {
    const inputPath = path.join(imgDir, img.name);
    const outputPath = path.join(imgDir, `opt_${img.name}`);

    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${img.name}...`);
      try {
        await sharp(inputPath)
          .resize(img.width)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Successfully created optimized version: opt_${img.name}`);
      } catch (err) {
        console.error(`Error optimizing ${img.name}:`, err);
      }
    } else {
      console.warn(`File not found: ${inputPath}`);
    }
  }
}

optimize();
