import { test, expect } from '@playwright/test';
test.use({
  storageState: 'auth-admin.json'
})
test('test', async ({ page }) => {
  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await expect(page.getByText('Services Home / Services')).toBeVisible({timeout: 10000});
});