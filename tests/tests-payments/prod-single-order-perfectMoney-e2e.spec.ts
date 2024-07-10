import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF0pOnKmv0tw&quantity=1000&networkId=1&serviceTypeId=1&serviceId=157044&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({ timeout: 0 });
  await page.getByRole('button', { name: 'RUB' }).click({ timeout: 0 });
  await page.getByText('Perfect Money').click({ timeout: 0});
  await page.getByRole('button', { name: 'BUY FOR $' }).click({ timeout: 0 });
  await page.goto('https://perfectmoney.com/api/step1.asp');
  await expect(page.getByRole('heading', { name: 'Perfect Money' })).toBeVisible();
});