import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({timeout: 0});
  await page.getByRole('button', { name: 'BUY FOR $' },).click({timeout: 0});
  await expect(page.getByRole('textbox').first()).toBeVisible({timeout: 0});
});
