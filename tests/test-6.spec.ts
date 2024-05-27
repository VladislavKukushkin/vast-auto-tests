import { test, expect } from '@playwright/test';
test.use({
  storageState: 'auth-prod-smmpanelka.json'
})
test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=&quantity=100&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=&quantity=100&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=&quantity=100&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=100&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByPlaceholder('https://www.youtube.com/watch').click();
  await page.getByPlaceholder('https://www.youtube.com/watch').click();
  await page.getByPlaceholder('https://www.youtube.com/watch').click({
    clickCount: 4
  });
  await page.getByPlaceholder('https://www.youtube.com/watch').fill('33');
  await page.getByText('Polo G - 33 (Official Video').click();
  await page.getByRole('button', { name: 'Buy in one click' }).click();
  await page.locator('#input-387').click();
  await page.locator('#input-387').fill('TestUser@test.com');
  await page.getByRole('button', { name: 'BUY FOR $' }).click();
  await expect(page.getByText('1 112,40 ₽ ≈ $11,64 (NaN')).toBeVisible();
  await expect(page.locator('.methodsGroup').first()).toBeVisible();
  await expect(page.getByText('Введите Email Он нужен для отправки чека об оплате Email')).toBeVisible();
  await expect(page.getByRole('textbox').first()).toBeVisible();
  await expect(page.locator('.rightSection > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('[data-test="CardNumber"]')).toBeVisible();
  await expect(page.locator('input[name="ValidTo"]')).toBeVisible();
  await expect(page.locator('input[name="CVC"]')).toBeVisible();
  await expect(page.locator('[data-test="submit"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Оплатить' }).nth(1)).toBeVisible();
  await expect(page.getByLabel('Yandex Pay')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Оплатить' }).nth(2)).toBeVisible();
  await expect(page.getByText('Или оплатите по частям Сейчас 278 ₽ 10 июнь 278 ₽ 24 июнь 278 ₽ 08 июль 278 ₽')).toBeVisible();
  await expect(page.getByRole('button').nth(4)).toBeVisible();
});