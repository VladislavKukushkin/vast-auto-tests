import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.getByLabel('append icon').click();
  await page.getByLabel('append icon').click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveTitle(/Tube.biz/);
});