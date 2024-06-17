import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
const allServicesList = page.locator('#app > div > div.fill-height.position-relative > div > div > div.services__bar > div.networks');
const vk = 'VK' ;

await page.goto('https://smmpanelka.com/app/login');
await page.getByRole('button', { name: 'Services' }).click();
await page.locator('#searchNetwork').fill('VK');
await page.waitForTimeout(2000)

  const isVKPresent = await allServicesList.locator(`text=${vk}`).count() > 0;

  if (isVKPresent) {
    console.log('search vk - true');
  } else {
    console.log('search vk net nixya');
  }
  expect(isVKPresent).toBe(true);
  });
