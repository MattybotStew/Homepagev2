import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

// Configuration
const config = {
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
  minSizeToOptimize: 100 * 1024, // 100KB - only optimize images larger than this
};

async function optimizeImage(filePath) {
  const ext = path.extname(filePath);
  const stats = fs.statSync(filePath);
  
  // Skip small files
  if (stats.size < config.minSizeToOptimize) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} (${(stats.size/1024).toFixed(1)}KB - already small)`);
    return null;
  }
  
  const webpPath = filePath.replace(ext, '.webp');
  const originalSize = stats.size;
  
  try {
    let pipeline = sharp(filePath);
    
    // Get image metadata
    const metadata = await pipeline.metadata();
    
    // Resize if too large
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP
    await pipeline
      .webp({ quality: config.quality })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    const originalKB = (originalSize / 1024).toFixed(1);
    const webpKB = (webpSize / 1024).toFixed(1);
    
    console.log(`✅ ${path.basename(filePath)}: ${originalKB}KB → ${webpKB}KB (saved ${savings}%)`);
    
    return { original: filePath, webp: webpPath, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    return null;
  }
}

async function findLargeImages() {
  const patterns = [
    `${assetsDir}/**/*.png`,
    `${assetsDir}/**/*.jpg`,
    `${assetsDir}/**/*.jpeg`
  ];
  
  const images = [];
  for (const pattern of patterns) {
    const files = await glob(pattern);
    images.push(...files);
  }
  
  // Filter by size
  const largeImages = images.filter(file => {
    const stats = fs.statSync(file);
    return stats.size > config.minSizeToOptimize;
  });
  
  console.log(`\n📸 Found ${images.length} total images, ${largeImages.length} need optimization\n`);
  return largeImages;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  const images = await findLargeImages();
  
  if (images.length === 0) {
    console.log('✨ No large images found! Everything is already optimized.');
    return;
  }
  
  let totalSaved = 0;
  let totalOriginal = 0;
  
  for (const image of images) {
    const result = await optimizeImage(image);
    if (result) {
      totalSaved += (fs.statSync(image).size - fs.statSync(result.webp).size);
      totalOriginal += fs.statSync(image).size;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   New total size: ${((totalOriginal - totalSaved) / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Compression rate: ${(totalSaved / totalOriginal * 100).toFixed(1)}%`);
  
  console.log('\n⚠️  Important: Update your components to use .webp versions!');
  console.log('   Example: import image from "./image.png" → import image from "./image.webp"');
}

// Install glob if not present
try {
  await import('glob');
  main().catch(console.error);
} catch (e) {
  console.log('📦 Installing glob package...');
  console.log('Run: npm install --save-dev glob');
  console.log('Then run: node scripts/optimize-images.js');
}
