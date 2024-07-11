import { test, expect } from '@playwright/test';

test('Open cart', async ({ page }) => {
  
  test.setTimeout(120000);

  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__cart.header__options--item').click();
 
  await expect (page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
  await expect (page.getByRole('main').getByRole('button', { name: 'Create order' })).toBeVisible();
  await expect (page.getByRole('button', { name: 'Sign in' }).nth(1)).toBeVisible();
  console.log ('Cart is openned, Buttons are shown')
});
