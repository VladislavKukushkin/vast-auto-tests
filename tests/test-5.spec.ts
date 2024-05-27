import { test, expect } from '@playwright/test';

  test('single-order-e2e', async ({ page }) => {
    await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeUe2cdhsL68&quantity=5&networkId=1&serviceTypeId=4&serviceId=142569&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
    await page.getByText('Ютуб').click();
    await page.getByRole('button', { name: 'Подписчики' }).click();
    await page.getByText('Просмотры', { exact: true }).click();
    await page.getByPlaceholder('https://www.youtube.com/watch').click();
    await page.getByPlaceholder('https://www.youtube.com/watch').fill('33');
    await page.getByText('Polo G - 33 (Official Video)').click();
    await page.getByRole('button', { name: 'Купить в один клик' }).click();
    await page.getByRole('button', { name: 'RUB' }).click();
    await page.getByRole('button', { name: 'КУПИТЬ ЗА $' }).click();
    await expect(page.getByText('Заказ успешно создан')).toBeVisible({timeout: 5000});
    await page.getByRole('button', { name: 'Мой профиль' }).click();
    await page.getByRole('button', { name: 'Заказы' }).click();
    await page.getByRole('link', { name: 'История заказов' }).click();
    await expect(page.locator('.v-card__text').first()).toBeVisible();
  });