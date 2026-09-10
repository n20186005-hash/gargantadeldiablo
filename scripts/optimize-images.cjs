/**
 * 图片压缩脚本（提高网页打开速度）
 * - 将超大原图等比缩放至最大宽度 1600px
 * - 以渐进式 mozjpeg 重新编码 JPEG（体积显著下降，肉眼几乎无差别）
 * - 额外生成 WebP 版本，供支持 WebP 的浏览器优先加载
 *
 * 幂等：已缩放到目标宽度的 JPEG 不再重复编码，避免画质逐次下降。
 * 用法：node scripts/optimize-images.cjs
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 78;

function human(bytes) {
  return (bytes / 1024).toFixed(0) + 'KB';
}

async function optimizeOne(file) {
  const src = path.join(GALLERY_DIR, file);
  const before = fs.statSync(src).size;
  // 先读入内存，避免 sharp 持有文件句柄导致 Windows 下无法覆写
  const input = fs.readFileSync(src);
  const meta = await sharp(input, { failOn: 'none' }).metadata();
  const needResize = Boolean(meta.width && meta.width > MAX_WIDTH);

  let jpegBytes = before;
  if (needResize) {
    let jpg = sharp(input, { failOn: 'none' }).rotate();
    jpg = jpg.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    const buf = await jpg.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();
    if (buf.length < before) {
      fs.writeFileSync(src, buf);
      jpegBytes = buf.length;
    }
  }

  // 生成 WebP（基于当前已优化的 JPEG）；若 WebP 已是最新则跳过，加快重复构建
  const webpPath = src.replace(/\.jpe?g$/i, '.webp');
  let webpFresh = false;
  try {
    webpFresh = fs.statSync(webpPath).mtimeMs >= fs.statSync(src).mtimeMs;
  } catch {
    webpFresh = false;
  }

  let webpBytes;
  if (webpFresh) {
    webpBytes = fs.statSync(webpPath).size;
    console.log(`${file}: ${human(before)} (jpg) / ${human(webpBytes)} (webp, 已是最新)`);
  } else {
    const current = fs.readFileSync(src);
    const currentMeta = await sharp(current, { failOn: 'none' }).metadata();
    let webp = sharp(current, { failOn: 'none' }).rotate();
    if (currentMeta.width && currentMeta.width > MAX_WIDTH) {
      webp = webp.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }
    await webp.webp({ quality: WEBP_QUALITY }).toFile(webpPath);
    webpBytes = fs.statSync(webpPath).size;
    console.log(`${file}: ${human(before)} -> ${human(jpegBytes)} (jpg) / ${human(webpBytes)} (webp)`);
  }

  return { before, jpegBytes, webpBytes };
}

async function run() {
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort();

  let before = 0;
  let afterJpg = 0;
  let afterWebp = 0;
  for (const f of files) {
    const r = await optimizeOne(f);
    before += r.before;
    afterJpg += r.jpegBytes;
    afterWebp += r.webpBytes;
  }

  console.log('----------------------------------------');
  console.log(`图片数量: ${files.length}`);
  console.log(`原始总大小 : ${(before / 1024 / 1024).toFixed(1)} MB`);
  console.log(`优化后 JPEG: ${(afterJpg / 1024 / 1024).toFixed(1)} MB`);
  console.log(`优化后 WebP: ${(afterWebp / 1024 / 1024).toFixed(1)} MB`);
}

run().catch((err) => {
  console.error('optimize-images failed:', err);
  process.exitCode = 1;
});
