const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'static', 'img');

const images = [
  { name: 'greeks_anatomy.webp', out: 'tmp_greeks_anatomy.webp' },
  { name: 'khalid_mastermind.webp', out: 'tmp_khalid_mastermind.webp' }
];

async function optimize() {
  for (const img of images) {
    const inputPath = path.join(imgDir, img.name);
    const outputPath = path.join(imgDir, img.out);
    
    if (fs.existsSync(inputPath)) {
      try {
        console.log(`Cropping ${img.name} to 330x450...`);
        await sharp(inputPath)
          .resize(330, 450, { fit: 'cover' })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Successfully cropped to ${img.out}`);
      } catch (err) {
        console.error(`Error:`, err);
      }
    } else {
        console.log(`Missing file: ${inputPath}`);
    }
  }
}

optimize();
