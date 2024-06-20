import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/login?redirect=/add-funds&query={}');
  await page.goto('https://smmpanelka.com/app/login?redirect=%2Fadd-funds&query=%7B%7D');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'img Likee' }).click();
  await expect(page.getByText('Likee', {exact: true})).toBeVisible(); 
  });