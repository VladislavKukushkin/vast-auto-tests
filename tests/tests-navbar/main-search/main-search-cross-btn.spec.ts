import { test, expect } from '@playwright/test';

test('To clear search field on Main page', async ({ page }) => {

  test.setTimeout(0);

await page.goto('https://smmpanelka.com/app/login');
await page.locator('#searchEverything').fill('VK');
await page.waitForTimeout(2000)
await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__search > div > div.magnify-or-cross > button').click();
await page.waitForTimeout(1000)
const emptySearch =  expect (page.locator('#searchEverything')).toBeEmpty();
await page.waitForTimeout(2000)

if (await emptySearch === void('')) {
    console.log('search is empty');
  } else {
    console.log('search is not empty');
  }
  expect(emptySearch).toBeNaN;
  });
