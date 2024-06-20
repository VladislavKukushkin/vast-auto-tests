import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    await page.goto('https://smmpanelka.com/app/login');
    await page.getByLabel('E-mail').fill('TestUser@test.com');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').fill('TestUser');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').press('Enter');
    await page.waitForTimeout(2000);
    
    await page.goto('https://smmpanelka.com/app/profile');
    await expect (page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.col-md-8.col-12.order-0 > div:nth-child(2) > div.v-card__text')).toContainText('TestUser');
    console.log('Authorization successefully completed');
})