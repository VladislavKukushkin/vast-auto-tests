import { test, expect } from '@playwright/test';

test('Authorization via Google account', async ({ page }) => {
  
  test.setTimeout(0);

  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.layout.align-center.justify-center > div > div.v-card__text > div.layout.cols.align-center.justify-space-between > div.layout.shrink.cols.align-center.justify-center > button > span > div > div.v-responsive__content').click();
  await page.waitForTimeout(1000);
  await page.locator('#identifierId').fill('smmpanelkatestuser@gmail.com');
  await page.waitForTimeout(1000);
  await page.locator('#identifierNext > div > button > span').click();
  await page.locator('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').fill('SmmpanelkaTestUser1337');
  await page.waitForTimeout(1000);
  await page.locator('#passwordNext > div > button > span').click();
  await page.waitForTimeout(2000);
  
  await page.goto('https://smmpanelka.com/app/profile');
  await expect (page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.col-md-8.col-12.order-0 > div:nth-child(2) > div.v-card__text')).toContainText('TestUser');
  console.log('Authorization successefully completed');
})