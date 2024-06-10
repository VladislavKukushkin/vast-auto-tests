import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('TestUser@test.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('TestUser');
  await page.getByLabel('Password').press('Enter');
  await page.waitForTimeout(10000);

  await page.goto('https://smmpanelka.com/app/add-funds'); 
  await page.waitForTimeout(3000);
  await page.goto('https://smmpanelka.com/app/add-funds'); 
  await page.waitForTimeout(3000);
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[3]/div/div').click(); 
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/input').fill('7');
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[4]/button/span').click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Mycelium Gear' });
});