import { test, expect } from '@playwright/test';

test('Button "Back" inside cart', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__cart.header__options--item').click();      
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.v-overlay.v-overlay--active.theme--light.shopping-cart-overlay.justify-end.align-start.shopping-cart-desktop-screen.new-tool-bar > div.v-overlay__content > div > div > div:nth-child(1) > div > div.col-sm-6.col-6.d-flex.justify-end.pr-0 > button').click();
  await expect(page.locator('#app > div > div.fill-height.position-relative > main > div > div.v-overlay.v-overlay--active.theme--light.shopping-cart-overlay.justify-end.align-start.shopping-cart-desktop-screen.new-tool-bar > div.v-overlay__content > div')).toBeHidden();
 
  console.log ('Button "Back" works correctly')
});
