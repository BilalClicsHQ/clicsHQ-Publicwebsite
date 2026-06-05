// Local screenshot helper for pixel-perfect work.
// Usage:
//   node scripts/shot.mjs <url> <out> [width=1440] [mode]
// mode:
//   (empty)                 -> viewport screenshot
//   full                    -> full-page screenshot
//   <cssSelector>           -> screenshot that element
//   has <tag> "<text>"      -> screenshot locator(tag,{hasText:text}).first()
import { chromium } from 'playwright'

const [, , url0, out0, width0, mode0, tagOrText, text0] = process.argv
const url = url0 || 'http://localhost:3000/product/kanban'
const out = out0 || '.shots/shot.png'
const width = parseInt(width0 || '1440', 10)
const mode = mode0 || ''

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForTimeout(300)

if (mode === 'has') {
  const loc = page.locator(tagOrText, { hasText: text0 }).first()
  await loc.scrollIntoViewIfNeeded()
  await page.waitForTimeout(150)
  await loc.screenshot({ path: out })
} else if (mode && mode !== 'full') {
  const el = await page.$(mode)
  if (!el) throw new Error(`selector not found: ${mode}`)
  await el.screenshot({ path: out })
} else {
  await page.screenshot({ path: out, fullPage: mode === 'full' })
}
await browser.close()
console.log('saved', out)
