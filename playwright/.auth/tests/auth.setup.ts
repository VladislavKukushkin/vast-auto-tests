 import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://vast-service-admin-client1.smm.rocks/services');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByRole('button', { name: 'Services' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
}); 