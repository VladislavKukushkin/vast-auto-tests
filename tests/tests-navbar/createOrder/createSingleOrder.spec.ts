import { test, expect } from '@playwright/test';

test('Redirect to creating new order using Single mode', async ({ page }) => {
  
  test.setTimeout(0);
  
  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(1) > div.drop-down.new-order.header__new-order.header__options--item > button').click();
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(1) > div.drop-down.new-order.header__new-order.header__options--item.opened > div > button:nth-child(1) > a').click();
  await page.waitForURL('https://smmpanelka.com/app/orders/create?type=single&url=&quantity=100&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60');
  await expect(page).toHaveURL('https://smmpanelka.com/app/orders/create?type=single&url=&quantity=100&networkId=1&serviceTypeId=4&serviceId=142418&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60');
  
  console.log ('Successful redirect to Single form order')
});
