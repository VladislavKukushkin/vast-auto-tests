
import { test, expect, devices, defineConfig } from '@playwright/test';

test('Search on Main page', async ({ page }) => {
  
  test.setTimeout(120000);

await page.goto('https://smmpanelka.com/app/login');
await page.locator('#searchEverything').fill('VK');
await page.waitForTimeout(2000)

const searchResult = await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__search > div > div.search-everything__results > div').getByText('VK')
searchResult.first().click()
await page.waitForTimeout(2000)

const redirectByClick = page.locator('#rootElement > div.pb-4.light__them > div > div.mb-8.mb-md-10 > div > div > a > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
const isTextPresent = await redirectByClick.locator('text=VK').count() > 0;

if (isTextPresent) {
    console.log('Text contains the expected substring.');
  } else {
    console.log('Text does not contain the expected substring.');
  }
  await expect(isTextPresent).toBe(true);
  });
