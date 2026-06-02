// One-off helper: downscale oversized Figma PNG exports so the LLM Read tool
// (which has a ~2000x2000 image processing cap) can ingest them. Resized copies
// go next to the originals with a "-small.png" suffix.
//
// Usage:  node scripts/resize-figma-pngs.mjs

import sharp from 'sharp'
import { readdir, stat, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..', 'figma', 'website')

const FOLDERS = ['Home+Pricing+Demo', 'Product', 'solution']

// Resize anything > ~1.5MB. Long-edge cap of 1800px keeps every image well under
// the 2000px LLM limit while staying readable.
const MAX_LONG_EDGE = 1800

async function processFolder(folder) {
  const dir = path.join(ROOT, folder)
  let entries
  try {
    entries = await readdir(dir)
  } catch (err) {
    console.log(`[skip] ${folder} — ${err.message}`)
    return { folder, processed: 0, skipped: 0, total: 0 }
  }

  const outDir = path.join(dir, '_small')
  await mkdir(outDir, { recursive: true })

  let processed = 0
  let skipped = 0
  const pngs = entries.filter((f) => f.toLowerCase().endsWith('.png'))

  for (const file of pngs) {
    if (file.endsWith('-small.png')) {
      skipped++
      continue
    }
    const inPath = path.join(dir, file)
    const outPath = path.join(outDir, file)

    try {
      const meta = await sharp(inPath).metadata()
      const longEdge = Math.max(meta.width || 0, meta.height || 0)
      if (longEdge <= MAX_LONG_EDGE) {
        // Still copy to _small so agents have a consistent path, but no resize needed.
        await sharp(inPath).toFile(outPath)
      } else {
        await sharp(inPath)
          .resize({ width: meta.width >= meta.height ? MAX_LONG_EDGE : null, height: meta.height > meta.width ? MAX_LONG_EDGE : null, withoutEnlargement: true })
          .png({ compressionLevel: 9 })
          .toFile(outPath)
      }
      const after = (await stat(outPath)).size
      const before = (await stat(inPath)).size
      console.log(`[ok]  ${folder}/${file}  ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB`)
      processed++
    } catch (err) {
      console.log(`[fail] ${folder}/${file} — ${err.message}`)
    }
  }

  return { folder, processed, skipped, total: pngs.length }
}

const results = []
for (const f of FOLDERS) {
  results.push(await processFolder(f))
}
console.log('\n=== Summary ===')
for (const r of results) {
  console.log(`${r.folder.padEnd(28)}  processed=${r.processed}  skipped=${r.skipped}  total=${r.total}`)
}
