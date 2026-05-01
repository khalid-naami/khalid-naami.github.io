const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'static', 'img', 'zoro-final.webp');

async function fixLogo() {
  if (fs.existsSync(imgPath)) {
    try {
      console.log('Resizing logo to a perfect 64x64 square...');
      const buffer = await sharp(imgPath)
        .resize(64, 64, { fit: 'cover' })
        .webp({ quality: 90 })
        .toBuffer();
      
      fs.writeFileSync(imgPath, buffer);
      console.log('Successfully made the logo perfectly square (1:1).');
    } catch (err) {
      console.error(err);
    }
  }
}

fixLogo();
