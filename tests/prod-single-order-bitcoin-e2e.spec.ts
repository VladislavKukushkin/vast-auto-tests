import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth-prod-smmpanelka.json',
  actionTimeout: 0,
})

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF0pOnKmv0tw&quantity=1000&networkId=1&serviceTypeId=1&serviceId=157044&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({ timeout: 0 });
  await page.getByRole('button', { name: 'RUB' }).click({ timeout: 0 });
  await page.getByText('Bitcoin').click({ timeout: 0 });
  await page.getByRole('button', { name: 'BUY FOR $' }).click({ timeout: 0 });
  await page.goto('https://gateway.gear.mycelium.com/pay/32e888bf0353b3f732098d96173dd0091ac5a1de29ba69106a7b3a275add774f?');
  await expect(page.getByText('Tap or scan to pay').first()).toBeVisible();
});