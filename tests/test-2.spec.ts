import { test, expect } from '@playwright/test';

//test.use({
  //storageState: 'user.json'
//})
// Testovii commentarius
test('test', async ({ page }) => {
  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.getByLabel('append icon').click();
  await page.getByLabel('append icon').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://vast-service-admin-client1.smm.rocks/services');
  await page.getByText('Services Home / Services').click();
  await expect(page.locator('div').filter({ hasText: /^Show archived$/ }).first()).toBeVisible();
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('div').filter({ hasText: /^Show archived$/ }).first().click();
  await page.getByText('Show archived').click();
  await expect(page.getByText('1', { exact: true })).toBeVisible();
});