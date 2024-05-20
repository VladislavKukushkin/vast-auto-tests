import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vast-service-admin-client1.smm.rocks/providers');
  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await page.getByLabel('E-mail').click();
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.getByLabel('E-mail').press('ControlOrMeta+a');
  await page.getByLabel('E-mail').press('ControlOrMeta+c');
  await page.getByLabel('E-mail').press('Tab');
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Services Home / Services')).toBeVisible();
});