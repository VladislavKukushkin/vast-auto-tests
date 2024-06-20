import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/login?redirect=/add-funds&query={}');
  await page.goto('https://smmpanelka.com/app/login?redirect=%2Fadd-funds&query=%7B%7D');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/div/div/div[1]/div[2]/div/div[11]/button').click();
  await expect(page.getByText('VC.ru', {exact: true})).toBeVisible(); 
  });