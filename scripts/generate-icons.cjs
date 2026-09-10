// 生成 PWA 图标（纯 Node 实现的最小 PNG 编码器，无第三方依赖）
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function inTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(hasNeg && hasPos);
}

function drawIcon(size, maskable) {
  const rgba = Buffer.alloc(size * size * 4);
  const scale = maskable ? 0.78 : 1;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const u = (x + 0.5) / size;
      const v = (y + 0.5) / size;
      let r = lerp(59, 196, v);
      let g = lerp(31, 122, v);
      let b = lerp(14, 58, v);

      const cu = (u - 0.5) / scale + 0.5;
      const cv = (v - 0.5) / scale + 0.5;

      if (cu >= 0 && cu <= 1 && cv >= 0 && cv <= 1) {
        const dx = cu - 0.5;
        const dy = cv - 0.33;
        if (Math.sqrt(dx * dx + dy * dy) < 0.135) {
          r = 232; g = 196; b = 154;
        }
        if (inTriangle(cu, cv, 0.62, 0.42, 0.24, 1.05, 1.05, 1.05)) {
          r = 90; g = 52; b = 25;
        }
        if (inTriangle(cu, cv, 0.36, 0.66, 0.02, 1.05, 0.74, 1.05)) {
          r = 45; g = 26; b = 12;
        }
        if (inTriangle(cu, cv, 0.36, 0.66, 0.28, 0.79, 0.44, 0.79)) {
          r = 245; g = 238; b = 228;
        }
        if (inTriangle(cu, cv, 0.62, 0.42, 0.55, 0.55, 0.69, 0.55)) {
          r = 245; g = 238; b = 228;
        }
      }

      const i = (y * size + x) * 4;
      rgba[i] = r | 0;
      rgba[i + 1] = g | 0;
      rgba[i + 2] = b | 0;
      rgba[i + 3] = 255;
    }
  }
  return encodePNG(size, size, rgba);
}

const outDir = path.join(__dirname, '../public/icons');
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  { file: 'icon-192.png', size: 192, maskable: false },
  { file: 'icon-512.png', size: 512, maskable: false },
  { file: 'icon-maskable-512.png', size: 512, maskable: true },
];

targets.forEach(({ file, size, maskable }) => {
  fs.writeFileSync(path.join(outDir, file), drawIcon(size, maskable));
});

console.log(`Generated ${targets.length} PWA icons in public/icons.`);
