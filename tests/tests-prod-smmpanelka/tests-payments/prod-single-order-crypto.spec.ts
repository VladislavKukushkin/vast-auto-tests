import { test, expect } from '@playwright/test';

test('Pay for order via Crypto', async ({ page }) => {

  test.setTimeout(0);

  await page.goto('https://smmpanelka.com/app/login');
  await page.getByLabel('E-mail').fill('TestUser@test.com');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').fill('TestUser');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').press('Enter');
  await page.waitForTimeout(2000);

  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF0pOnKmv0tw&quantity=1000&networkId=1&serviceTypeId=1&serviceId=157044&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({ timeout: 0 });
  await page.getByRole('button', { name: 'RUB' }).click({ timeout: 0 });
  await page.getByText('Криптовалюта').click({ timeout: 0});
  await page.getByRole('button', { name: 'BUY FOR $' }).click({ timeout: 0 });
  await page.goto('https://commerce.coinbase.com/checkout/2f9e6c49-c66b-4ba1-843a-fb591ac13db7');
  await expect(page.getByRole('heading', { name: 'Invoice # SMM Panelka-' })).toBeVisible();
});