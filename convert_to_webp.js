const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'static', 'img');

const filesToConvert = [
    'lifeline_sequence_diagram_light.png',
    'lifeline_sequence_diagram_dark.png',
    'chat_terminal_mobile_light.png',
    'chat_terminal_mobile_dark.png'
];

async function run() {
    for (const file of filesToConvert) {
        const inputPath = path.join(imgDir, file);
        const webpName = file.replace('.png', '.webp');
        const outputPath = path.join(imgDir, webpName);
        
        if (fs.existsSync(inputPath)) {
            try {
                console.log(`Converting ${file} to webp...`);
                await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
                console.log(`Created ${webpName}`);
                
                // Delete original png
                fs.unlinkSync(inputPath);
                console.log(`Deleted ${file}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        } else {
            console.log(`File not found, skipping: ${file}`);
        }
    }
}

run();
