import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://gateway.gear.mycelium.com/pay/32e888bf0353b3f732098d96173dd0091ac5a1de29ba69106a7b3a275add774f?');
  await expect(page.getByText('Tap or scan to pay').first()).toBeVisible();
});