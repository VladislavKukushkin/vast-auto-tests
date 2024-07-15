import { test, expect } from '@playwright/test';

function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const paymentServiceName = getRandomString(4);
console.log("Created service name = ", paymentServiceName);



test('Creating new service', async ({ page }) => {
  
  test.setTimeout(180000);

  await page.goto('https://vast-service-admin-client1.smm.rocks/login');
  await page.waitForTimeout(1000);
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForTimeout(1000);
 
  await page.locator('#app > div.v-application--wrap > main > div > div > div > div > div.v-window.service-and-pricing__tabs-items.v-item-group.theme--light.v-tabs-items > div > div > div > div > div > div:nth-child(2) > div.v-card__title > a > span').click();
  await page.waitForTimeout(3000);
  await page.locator('[data-locator="input-service-type"]').fill('Youtube views');
  await page.waitForTimeout(2000);
  await page.getByText('Youtube views').first().click();
  await page.waitForTimeout(1000);
  await page.locator('[data-locator="input-promotable-checker-group"]').click();
  await page.waitForTimeout(1000);
  await page.getByText('Default youtube views checkers').click();
  await page.locator('#input-min-quantity').fill('100');
  await page.locator('[data-locator="input-max-quantity"]').fill('1000');
  await page.locator('[data-locator="input-quantity-step"]').fill('50');
  await page.locator('[data-locator="input-order-quantity-ratio"]').fill('1.0');
  await page.locator('[data-locator="input-resale-multiplier"]').fill('1.0');
  await page.locator('[data-locator="input-min-api-price"]').fill('250');
  await page.locator('[data-locator="input-default-price"]').fill('500');
  await page.locator('[data-locator="input-pricing-per"]').fill('1000');
  await page.locator('[data-locator="input-default-quantity"]').fill('100');
  await page.locator('[data-locator="input-budget-multiplier"]').fill('0');
  await page.locator('[data-locator="input-auto-refill-min-drop-percent"]').fill('0.1');
  await page.locator('[data-locator="input-auto-refill-max-drop-percent"]').fill('0.7');
  await page.locator('[data-locator="input-auto-refill-once-fill-percent"]').fill('0.5');
  await page.locator('[data-locator="input-auto-refill-max-total-refilled-percent"]').fill('1.0');
  await page.locator('[data-locator="input-name-locale"]').fill(paymentServiceName);
  await page.locator('[data-locator="input-meta-title-locale"]').fill(paymentServiceName)
  await page.locator('[data-locator="input-meta-description-locale"]').fill(paymentServiceName);
  await page.waitForTimeout(4000);
  await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__text > div:nth-child(15) > div:nth-child(2) > div:nth-child(11) > div.d-flex.align-center.col-sm-8.col-12 > div > div > div > div > div.v-input--selection-controls__ripple')
  .click();
  await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__text > div:nth-child(15) > div:nth-child(2) > div:nth-child(13) > div.d-flex.align-center.col-sm-8.col-12 > div > div > div > div > div.v-input--selection-controls__ripple')
  .click();
  await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__text > div:nth-child(15) > div:nth-child(2) > div:nth-child(15) > div.d-flex.align-center.col-sm-8.col-12 > div > div > div > div > div.v-input--selection-controls__ripple')
  .click();
  await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__title > button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary')
  .click();
  await page.waitForTimeout(100000)

  await page.goto('https://vast-service-client1.smm.rocks/login');
  await page.getByLabel('E-mail').fill('admin@admin.com');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').fill('admin@admin.com');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').press('Enter');
  await page.waitForTimeout(2000);
  
  await page.goto('https://vast-service-client1.smm.rocks/?networkId=1');
  await page.waitForTimeout(2000);
  await page.locator('#rootElement > div.pb-4.light__them > div > div:nth-child(3) > a').click();
  await page.waitForTimeout(4000);
  await page.goto('https://vast-service-client1.smm.rocks/buy-youtube-views');
  await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div > div.v-card__text.pa-md-8.pt-md-6 > div.layout.pa-3.justify-end.pb-8.pb-md-4 > nav > ul > li:nth-child(8) > button')
    .click();
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div > div.v-card__text.pa-md-8.pt-md-6 > div.layout.pa-3.justify-end.pb-8.pb-md-4 > nav > ul')
    .last().click();
  await page.waitForTimeout(5000)
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div > div.v-card__text.pa-md-8.pt-md-6 > div.layout.pa-3.justify-end.pb-8.pb-md-4 > nav > ul')
    .first().click();
  await page.waitForTimeout(10000);
  await expect(page.getByText(paymentServiceName)).toBeVisible();
  await page.getByText(paymentServiceName).click();
  await expect(page.getByText(paymentServiceName)).toBeVisible();
  await page.waitForTimeout(1000)

  console.log('Service was created successfully on Admin site and shown on LK')

});