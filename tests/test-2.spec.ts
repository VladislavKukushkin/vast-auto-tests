import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth-admin.json',
    actionTimeout: 0,
})
test('test', async ({ page }) => {
await page.goto('https://smmpanelka.com/app/?networkId=1');

const youtubeViewsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(3) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
await expect(youtubeViewsFirst).toContain('Youtube Subscribers');

});