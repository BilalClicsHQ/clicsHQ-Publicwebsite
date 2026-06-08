// Crop a full-res Figma PNG into a readable band.
// Usage:
//   node scripts/figma-crop.mjs <pngPath> <out> <yFrac0> <yFrac1> [outWidth=1400]
// yFrac0/yFrac1 are fractions (0..1) of the FULL image height.
import sharp from 'sharp'

const [, , src, out, y0s, y1s, wOut0] = process.argv
const y0 = parseFloat(y0s)
const y1 = parseFloat(y1s)
const wOut = parseInt(wOut0 || '1400', 10)

const meta = await sharp(src).metadata()
const W = meta.width
const H = meta.height
const top = Math.max(0, Math.round(H * y0))
const bottom = Math.min(H, Math.round(H * y1))
const h = bottom - top

await sharp(src)
  .extract({ left: 0, top, width: W, height: h })
  .resize({ width: Math.min(wOut, W) })
  .png({ compressionLevel: 9 })
  .toFile(out)

console.log(`saved ${out}  (src ${W}x${H}, band y=${top}..${bottom}, h=${h}px)`)
