import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test', async ({ page }) => {
    
await page.goto('http://localhost:8081/login');
await page.getByLabel('E-mail').fill('admin@admin.com');
await page.getByLabel('Password').fill('admin@admin.com');
await page.getByRole('button', { name: 'Sign in' }).click();
await page.waitForTimeout(10000);
    
await page.goto('http://localhost:8081/services/create');
await page.locator('#app > div.v-application--wrap > main > div > div > div > div > div.v-window.service-and-pricing__tabs-items.v-item-group.theme--light.v-tabs-items > div > div > div > div > div > div:nth-child(2) > div.v-card__title > a').click();
await page.waitForURL('');
await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__text > div.row.py-3.px-1 > div:nth-child(2) > div:nth-child(1) > div > div.v-input__slot > div > div.v-input--selection-controls__ripple').click();
await page.locator('#app > div > main > div > div > div.mx-auto.v-card.v-sheet.theme--light > div.v-card__text > div.row.py-3.px-1 > div:nth-child(4) > div:nth-child(2) > div > div.v-input__slot > div > div.v-input--selection-controls__ripple').click();
await page.locator('#input-948').fill('youtube views');
await page.locator('#list-item-1124-0 > div > div').click();


});
