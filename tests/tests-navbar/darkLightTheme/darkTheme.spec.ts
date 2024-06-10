import { test, expect, defineConfig } from '@playwright/test';
test.use({colorScheme: 'dark'})
test('test', async ({ page }) => {
    await page.goto('https://smmpanelka.com/app/login');
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('TestUser@test.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('TestUser');
    await page.getByLabel('Password').press('Enter');
    await page.waitForTimeout(10000);

        await page.locator('#app > div > div.fill-height.position-relative > div > header');


    await page.goto('https://smmpanelka.com/app/login?redirect=/add-funds&query={}');
    await page.goto('https://smmpanelka.com/app/login?redirect=%2Fadd-funds&query=%7B%7D');
    await page.waitForTimeout(5000);
  });
