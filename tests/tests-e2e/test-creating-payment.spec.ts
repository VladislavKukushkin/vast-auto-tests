import { test, expect } from '@playwright/test';

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  const paymentMethodName = getRandomString(4);
  console.log("Created payment name = ", paymentMethodName);

test('Create new payment', async ({ page }) => {
    
    test.setTimeout(120000);

    await page.goto('http://localhost:8080/login');
    await page.getByLabel('E-mail').fill('admin@admin.com');
    await page.getByLabel('Password').fill('admin@admin.com');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(1000);

    await page.goto('http://localhost:8080/payment-methods');
    await page.locator('[data-locator="create-button"]').click();
    await page.locator('[data-locator="select-payment-method"]').click(); 
    await page.waitForTimeout(1000)
    await page.getByText('Stripe checkout').last().click(); 
    await page.locator('[data-locator="method-selector"]').first().click(); // choose currency
    await page.getByText('USD').last().click();
    await page.locator('[data-locator="method-selector"]').last().click(); // choose method
    await page.getByText('alipay').last().click();
    await page.locator('[data-locator="input-name-en"]').fill(paymentMethodName);
    await page.locator('#app > div.v-application--wrap > main > div > div > div.right-drawer > div.right-drawer-content > div.v-card__text.pa-0 > div > div > div:nth-child(11) > div > div.ql-container.ql-snow > div.ql-editor.ql-blank')
        .fill(paymentMethodName);
    await page.getByText('browse').click();
    await page.locator('body').setInputFiles('../../test-images/test-png-img.png');
    
    
    
    
    
    await page.waitForTimeout(20000)
})
