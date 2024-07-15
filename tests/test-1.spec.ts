import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/login');
    await page.getByLabel('E-mail').fill('admin@admin.com');
    await page.getByLabel('Password').fill('admin@admin.com');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(1000);
  await page.goto('http://localhost:8080/payment-methods');
  await page.locator('button').filter({ hasText: 'add' }).click();
  await page.getByText('browse').click();
  
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByText('Upload file').click();
  const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join('test-png-img.png'));



  
  
  
  
  // await page.locator('html').setInputFiles('test-images/test-png-img.png');
  // await 
  
  
  await page.waitForTimeout(1000000)
});