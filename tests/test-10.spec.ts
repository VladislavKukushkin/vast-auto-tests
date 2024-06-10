import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth-prod-smmpanelka.json',
  actionTimeout: 0,
})

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/add-funds');
  await page.locator('.layout > .layout').first().click();
  await page.getByLabel('Amount USD').click({ timeout: 0 });
  await page.getByLabel('Amount USD').fill('15');
  await page.getByRole('button', { name: 'Proceed to the Billing' }).click({ timeout: 0 });
  await expect(page.locator('.methodsGroup').first()).toBeVisible({ timeout: 0 });
});