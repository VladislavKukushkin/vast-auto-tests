import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await page.goto('https://smmpanelka.com/app/login');
await page.getByRole('button', { name: 'Services' }).click();
await page.locator('#searchNetwork').fill('VK');
await page.waitForTimeout(2000)
await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/div/div/div[1]/div[1]/label/div/button').click();
await page.waitForTimeout(1000)
const emptySearch =  expect (page.locator('#searchNetwork')).toBeEmpty();
await page.waitForTimeout(2000)

if (await emptySearch === void('')) {
    console.log('search is empty');
  } else {
    console.log('search is not empty');
  }
  expect(emptySearch).toBeNaN;
  });
