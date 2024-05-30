import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth-prod-smmpanelka.json'
})

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/');  
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({timeout: 50000});
  await page.getByRole('button', { name: 'BUY $' }).click({timeout: 50000});
  await expect(page.getByText('1 112,40 ₽ ≈ $11,64 (NaN')).toBeVisible({timeout: 50000});
  await expect(page.getByRole('textbox').first()).toBeVisible({timeout: 50000});
});