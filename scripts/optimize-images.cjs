const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'src/assets/donate-donor-individual.webp',
  'src/assets/donate-donor-young-professionals.webp',
  'src/assets/donate-donor-foundations.webp',
  'src/assets/donate-donor-corporate.webp',
  'src/assets/educators-img-0.webp'
];

async function optimize() {
  console.log('🔧 Starting image optimization...\n');
  
  for (const img of images) {
    const inputPath = path.join(process.cwd(), img);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${img} - file not found`);
      continue;
    }
    
    const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
    const outputPath = img;
    
    await sharp(inputPath)
      .resize(1200, null, { 
        withoutEnlargement: true, 
        fit: 'inside' 
      })
      .webp({ quality: 75 })
      .toFile(outputPath + '.temp');
      
    fs.renameSync(outputPath + '.temp', outputPath);
    const newSize = fs.statSync(outputPath).size / (1024 * 1024);
    
    console.log(`✅ ${path.basename(img)}: ${originalSize.toFixed(2)}MB → ${newSize.toFixed(2)}MB (${((1 - newSize/originalSize) * 100).toFixed(0)}% reduction)`);
  }
  
  console.log('\n🎉 All images optimized!');
}

optimize().catch(console.error);
