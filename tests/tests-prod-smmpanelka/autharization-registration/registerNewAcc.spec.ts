import { test, expect } from '@playwright/test';

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function getRandomEmail() {
    const randomString = getRandomString(10);
    return `${randomString}@test.com`;
  }
  
  function getRandomPassword() {
    return getRandomString(12);
  }

  
test('Register new User', async ({ page }) => {

  test.setTimeout(120000);

    const username = getRandomString(8);
    const email = getRandomEmail();
    const password = getRandomPassword();

    await page.goto('https://smmpanelka.com/app/register');
    await page.getByLabel('Name*').fill(username);
    await page.waitForTimeout(1000);
    await page.getByLabel('E-mail').fill(email);
    await page.waitForTimeout(1000);
    await page.locator('#input-42').fill(password);
    await page.waitForTimeout(1000);
    await page.locator('#input-46').fill(password);
    await page.waitForTimeout(2000);
    await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/form/div[1]/div/div').click();
    await page.waitForTimeout(15000);
    
    await page.goto('https://smmpanelka.com/app/profile');
    await page.waitForURL('https://smmpanelka.com/app/profile')
    await expect (page.getByText(username)).toBeVisible();
    console.log('Registration successefully completed', username, email, password );
})