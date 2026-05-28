const sharp = require('sharp');
const path = require('path');

async function optimizeHero() {
  const inputPath = path.join(process.cwd(), 'src/assets/hero-bg.webp');
  const outputPath = inputPath;
  
  await sharp(inputPath)
    .resize(1600, null, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: 70 })
    .toFile(outputPath + '.temp');
    
  require('fs').renameSync(outputPath + '.temp', outputPath);
  console.log('✅ Hero image optimized');
}

optimizeHero();
