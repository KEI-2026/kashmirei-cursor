import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './src/assets/Images/Galaxy-of-superstars-2026';

fs.readdirSync(dir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpeg', '.jpg', '.png'].includes(ext)) {
        const outName = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
        const inPath = path.join(dir, file);
        const outPath = path.join(dir, outName);
        
        sharp(inPath)
            .resize({ width: 152, height: 152 }) // 2x the 76px size for retina
            .webp({ quality: 80 })
            .toFile(outPath)
            .then(() => {
                console.log(`Compressed ${file} to ${outName}`);
                if (file !== outName) {
                    fs.unlinkSync(inPath); // remove original
                }
            })
            .catch(err => console.error(`Error compressing ${file}:`, err));
    }
});
