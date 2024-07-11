import { test, expect } from '@playwright/test';

test('Sign in from cart', async ({ page }) => {
  
  test.setTimeout(120000);

  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__cart.header__options--item').click();      
  await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.v-overlay.v-overlay--active.theme--light.shopping-cart-overlay.justify-end.align-start.shopping-cart-desktop-screen.new-tool-bar > div.v-overlay__content > div > div > div:nth-child(3) > div > div:nth-child(4) > button').click();
  await page.waitForURL('https://smmpanelka.com/app/login');
  await expect (page).toHaveURL('https://smmpanelka.com/app/login');
         
  console.log ('Button "Sign in" redirected correctly')
});
