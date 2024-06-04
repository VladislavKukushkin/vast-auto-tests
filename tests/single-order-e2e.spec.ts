import { test, expect } from '@playwright/test';
  
test.use({
    actionTimeout: 0,
})

test('single-order-e2e', async ({ page }) => {
  await page.goto('https://vast-service-client1.smm.rocks/ru/orders/create?serviceSlug&url=&quantity=0&networkId=0&serviceTypeId&serviceId&isDripFeed=false&dripFeedQuantityStep=100&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByText('Ютуб').click();
  await page.getByRole('button', { name: 'Подписчики' }).click();
  await page.getByText('Просмотры', { exact: true }).click();
  await page.getByPlaceholder('https://www.youtube.com/watch').click();
  await page.getByPlaceholder('https://www.youtube.com/watch').fill('mrbeast');
  await page.getByText('In 10 Minutes This Room Will').click();
  await page.getByRole('button', { name: 'Купить в один клик' }).click();
  await page.getByRole('button', { name: 'Strupi teskit' }).click();
  await page.getByText('С баланса').click();
  await page.getByRole('button', { name: 'КУПИТЬ ЗА $' }).click();
  await expect(page.getByText('Заказ успешно создан')).toBeVisible({timeout: 5000});
  await page.getByRole('button', { name: 'Мой профиль' }).click();
  await page.getByRole('button', { name: 'Заказы' }).click();
  await page.getByRole('link', { name: 'История заказов' }).click();
  await expect(page.locator('.v-card__text').first()).toBeVisible();
});