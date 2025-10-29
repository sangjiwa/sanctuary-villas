const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 85;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();

    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;

    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    // Get file size before optimization
    const statsBefore = await fs.stat(inputPath);
    const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2);

    // Optimize JPEG
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: QUALITY,
        mozjpeg: true
      })
      .toFile(outputPath);

    // Get file size after optimization
    const statsAfter = await fs.stat(outputPath);
    const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}: ${sizeBefore}MB → ${sizeAfter}MB (${savings}% reduction)`);

    // Generate WebP version
    const webpPath = outputPath.replace('.jpg', '.webp');
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: QUALITY
      })
      .toFile(webpPath);

    const statsWebp = await fs.stat(webpPath);
    const sizeWebp = (statsWebp.size / 1024 / 1024).toFixed(2);
    console.log(`  ✓ WebP variant: ${sizeWebp}MB`);

  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function getAllImageFiles(dir) {
  const files = [];

  async function traverse(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await traverse(fullPath);
      } else if (entry.isFile() && /\.(jpg|jpeg)$/i.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  await traverse(dir);
  return files;
}

async function main() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const tempDir = path.join(__dirname, '..', 'public', 'images-optimized');

  console.log('🔍 Finding all images...');
  const imageFiles = await getAllImageFiles(imagesDir);
  console.log(`📸 Found ${imageFiles.length} images to optimize\n`);

  // Create temp directory for optimized images
  await fs.mkdir(tempDir, { recursive: true });

  let totalSizeBefore = 0;
  let totalSizeAfter = 0;

  // Get total size before
  for (const imagePath of imageFiles) {
    const stats = await fs.stat(imagePath);
    totalSizeBefore += stats.size;
  }

  console.log(`📊 Total size before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)}MB\n`);
  console.log('⚙️  Optimizing images...\n');

  // Process all images
  for (const imagePath of imageFiles) {
    const relativePath = path.relative(imagesDir, imagePath);
    const outputPath = path.join(tempDir, relativePath);
    const outputDir = path.dirname(outputPath);

    // Create subdirectories if needed
    await fs.mkdir(outputDir, { recursive: true });

    await optimizeImage(imagePath, outputPath);
  }

  // Calculate total size after
  const optimizedFiles = await getAllImageFiles(tempDir);
  for (const imagePath of optimizedFiles) {
    if (imagePath.endsWith('.jpg')) {
      const stats = await fs.stat(imagePath);
      totalSizeAfter += stats.size;
    }
  }

  const totalSavings = ((1 - totalSizeAfter / totalSizeBefore) * 100).toFixed(1);

  console.log('\n✅ Optimization complete!');
  console.log(`📊 Total size after: ${(totalSizeAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`💾 Total savings: ${totalSavings}%`);
  console.log(`\n⚠️  Optimized images saved to: ${tempDir}`);
  console.log('⚠️  Please review the optimized images before replacing the originals.');
  console.log('\nTo replace originals with optimized images, run:');
  console.log(`  rm -rf ${imagesDir}`);
  console.log(`  mv ${tempDir} ${imagesDir}`);
}

main().catch(console.error);
