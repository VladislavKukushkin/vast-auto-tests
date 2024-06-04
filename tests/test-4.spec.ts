import { test, expect } from '@playwright/test';

test.use({
  actionTimeout: 0,
})

test('test', async ({ page }) => {
  await page.goto('https://vast-service-client1.smm.rocks/ru/orders/create?serviceSlug&url=&quantity=0&networkId=0&serviceTypeId&serviceId&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByText('Ютуб').click();
  await page.getByRole('button', { name: 'Подписчики' }).click();
  await page.getByText('Просмотры', { exact: true }).click();
  await page.getByPlaceholder('https://www.youtube.com/watch').click();
  await page.getByPlaceholder('https://www.youtube.com/watch').fill('');
  await page.getByPlaceholder('https://www.youtube.com/watch').press('CapsLock');
  await page.getByPlaceholder('https://www.youtube.com/watch').fill('mrbeast');
  await page.getByText('In 10 Minutes This Room Will').click();
  await page.getByRole('button', { name: 'Купить в один клик' }).click();
  await page.getByRole('button', { name: '+ New Credit Card (Pay and' }).click();
});