import { test, expect, } from '@playwright/test';
test('Choose localization', async ({ page }) => {

    test.setTimeout(120000);

await page.goto('https://smmpanelka.com/app/login');
await page.waitForTimeout(1000);
await page.getByRole('banner').locator('div').filter({ hasText: 'Light mode USD ($) Create order 0' }).getByRole('button').first().click();
await page.waitForTimeout(1000);
await page.getByText('Русский').click();
await page.waitForTimeout(1000);
    expect(page.waitForURL('https://smmpanelka.com/app/ru/login'))
  });
