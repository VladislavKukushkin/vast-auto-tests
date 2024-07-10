import { test, expect } from '@playwright/test';

test('Service Instagram is visible', async ({ page }) => {
  
  test.setTimeout(0);
  
  await page.goto('https://smmpanelka.com/app/login?redirect=/add-funds&query={}');
  await page.goto('https://smmpanelka.com/app/login?redirect=%2Fadd-funds&query=%7B%7D');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'img Instagram' }).click();
  await expect(page.getByText('Instagram', {exact: true})).toBeVisible(); 
  });