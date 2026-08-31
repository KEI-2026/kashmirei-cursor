import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'src', 'assets', 'Images');

// Function to recursively find all image files
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      const ext = path.extname(name).toLowerCase();
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
        files.push(name);
      }
    }
  }
  return files;
}

async function optimizeImages() {
  console.log('Starting image optimization...');
  const files = getFiles(directoryPath);
  console.log(`Found ${files.length} images to process.`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of files) {
    const originalSize = fs.statSync(file).size;
    totalOriginalSize += originalSize;

    if (originalSize < 300 * 1024) {
      console.log(`Skipping ${path.basename(file)} (Already under 300KB)`);
      totalNewSize += originalSize;
      continue;
    }

    try {
      const tempFile = `${file}.tmp`;
      const ext = path.extname(file).toLowerCase();
      
      let pipeline = sharp(file).resize(1920, 1920, { fit: 'inside', withoutEnlargement: true });
      
      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
      } else {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true });
      }

      await pipeline.toFile(tempFile);
      
      fs.renameSync(tempFile, file);
      
      const newSize = fs.statSync(file).size;
      totalNewSize += newSize;
      
      console.log(`Optimized ${path.basename(file)}: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
      totalNewSize += originalSize;
    }
  }

  console.log('\n--- Optimization Complete ---');
  console.log(`Original Total Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`New Total Size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Space Saved: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
