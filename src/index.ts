import { chromium } from 'playwright-extra'
import stealth from 'playwright-extra-plugin-stealth'

// Add stealth plugin and use defaults (all tricks to hide playwright usage)
chromium.use(stealth())

async function main() {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://example.com')
  console.log(await page.title())
  await browser.close()
}

main()