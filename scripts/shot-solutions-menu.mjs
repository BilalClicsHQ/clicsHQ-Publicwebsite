import { chromium } from 'playwright'
const b = await chromium.launch()
const p = await b.newPage({ viewport:{width:1440,height:700}, deviceScaleFactor:2 })
await p.goto('http://localhost:3000/', { waitUntil:'networkidle' })
await p.evaluate(() => document.fonts.ready)
// open Solutions dropdown
await p.getByRole('button', { name: 'Solutions' }).hover()
await p.waitForTimeout(400)
await p.screenshot({ path: '.shots/solutions-menu.png', clip:{x:0,y:0,width:1440,height:520} })
await b.close(); console.log('saved')
