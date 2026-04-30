const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'static', 'img');
const inputPath = path.join(imgDir, 'khalid_profile.jpg');
const outputPath = path.join(imgDir, 'khalid_profile.webp');

async function optimize() {
  if (fs.existsSync(inputPath)) {
    try {
      console.log(`Processing khalid_profile.jpg to 450px...`);
      const buffer = await sharp(inputPath)
        .resize(450)
        .webp({ quality: 75 })
        .toBuffer();
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`Successfully generated high-res responsive khalid_profile.webp at 450px`);
    } catch (err) {
      console.error(`Error optimizing:`, err);
    }
  } else {
    console.warn(`File not found: ${inputPath}`);
  }
}

optimize();
