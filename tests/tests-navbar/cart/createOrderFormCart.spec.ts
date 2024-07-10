import { test, expect } from '@playwright/test';

test('Creating new order from cart', async ({ page }) => {
  
  test.setTimeout(0);

  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__cart.header__options--item').click();
 
    const createOrder = page.getByRole('main').getByRole('button', { name: 'Create order' })
  await expect (createOrder).toBeVisible();
  await createOrder.click(); 
        page.waitForTimeout(5000);
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div[2]/div[2]/div/div/div[1]/div/div/div[1]/div/div[2]/div/div[1]/div/div/div[1]/input').fill('Mrbeast');
        page.waitForTimeout(5000);
  await page.locator('.result-search__box').first().click();
  await page.getByRole('button', { name: 'Add to cart and continue' }).click();
        page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Go to cart' }).click();
    const itemInCart = page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.v-overlay.v-overlay--active.theme--light.shopping-cart-overlay.justify-end.align-start.shopping-cart-desktop-screen.new-tool-bar > div.v-overlay__content > div > div > div:nth-child(2) > div > div > div.theme-light > div:nth-child(1) > div');
  await expect(itemInCart).toBeVisible();
  await expect(itemInCart).toContainText('Total cost');
  
  console.log ('Item was added to cart')
});
