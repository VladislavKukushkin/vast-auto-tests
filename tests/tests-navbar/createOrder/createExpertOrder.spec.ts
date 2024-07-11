import { test, expect } from '@playwright/test';

test('Redirect to creating new order using Expert mode', async ({ page }) => {
  
  test.setTimeout(120000);
  
  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(1) > div.drop-down.new-order.header__new-order.header__options--item > button').click();
  await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(1) > div.drop-down.new-order.header__new-order.header__options--item.opened > div > button:nth-child(4) > a').click();
  await page.waitForURL('https://smmpanelka.com/app/orders/create?type=expert');
  await expect(page).toHaveURL('https://smmpanelka.com/app/orders/create?type=expert');
  
  console.log ('Successful redirect to Expert form order')
});
