import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    await page.goto('https://smmpanelka.com/app/login');
    await page.getByLabel('E-mail').fill('TestUser@test.com');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').fill('TestUser');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').press('Enter');
    await page.waitForTimeout(2000);
    await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > div > header > div.header__options > div:nth-child(2) > button.btn.header__profile.header__options--item.header__profile--logged')
        .click();
    await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > div > div > div.profile__wrapper > div > ul > div:nth-child(3) > button')
        .click();
    await page.locator('#app > div > div.fill-height.position-relative > div > div > div.profile__wrapper > div > ul > div.drop-down.nav__item.drop-down.opened > div > div:nth-child(4) > button > a')
        .click()
    await page.waitForTimeout(1000);
    await expect (page).toHaveURL('https://smmpanelka.com/app/statistics');
    console.log('Statistics menu is available')
    
});
