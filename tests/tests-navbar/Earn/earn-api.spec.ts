import { test, expect } from '@playwright/test';

test('API page is visible', async ({ page }) => {
  
  test.setTimeout(120000);
  
  await page.goto('https://smmpanelka.com/app/login');
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('TestUser@test.com');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('TestUser');
    await page.getByLabel('Password').press('Enter');
    await page.waitForTimeout(10000);

    await page.goto('https://smmpanelka.com/app/login?redirect=/add-funds&query={}');
    await page.goto('https://smmpanelka.com/app/login?redirect=%2Fadd-funds&query=%7B%7D');
    await page.waitForTimeout(5000);
    await page.getByText('Earn').click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'API' }).click();
    await expect(page).toHaveURL('https://smmpanelka.com/app/api');
  });