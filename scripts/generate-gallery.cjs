const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const files = fs.readdirSync(galleryDir);

const images = files
  // 只收录原图（jpg/png）；压缩脚本生成的 .webp 作为 <source> 备用，不计入图集条目
  .filter(f => /\.(jpe?g|png)$/i.test(f))
  .filter(f => fs.existsSync(path.join(galleryDir, f)))
  .map(f => `/gallery/${f}`)
  .sort((a, b) => {
    const numA = parseInt(a.match(/(\d+)/)?.[1] || '0', 10);
    const numB = parseInt(b.match(/(\d+)/)?.[1] || '0', 10);
    return numA - numB;
  });

const outputFilePath = path.join(__dirname, '../src/gallery-data.json');
fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2));

console.log(`Generated gallery-data.json with ${images.length} images.`);
