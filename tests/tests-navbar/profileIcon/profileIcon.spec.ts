import { test, expect } from '@playwright/test';

test('Button "Profile icon" redirecting on Log in page', async ({ page }) => {
  
  test.setTimeout(120000);
  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await page.locator('#app > div > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__profile.header__options--item').click();      
  await page.waitForURL('https://smmpanelka.com/app/login');
  await expect (page).toHaveURL('https://smmpanelka.com/app/login');
         
  console.log ('Button "Profile icon" redirecting on Log in page')
});
