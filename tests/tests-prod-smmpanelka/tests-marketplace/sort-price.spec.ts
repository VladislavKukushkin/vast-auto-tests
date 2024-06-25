import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://smmpanelka.com/app/?networkId=17');
    await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.filters__dropdowns > div.d-flex.align-center.flex-wrap > span:nth-child(8) > button > span')
    .click();
    await page.locator('#input-3856').fill('1');
    await page.locator('#input-3860').fill('2');
    await page.waitForTimeout(2000);
    await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.filters__dropdowns > div.d-flex.align-center.flex-wrap > span:nth-child(8) > button > span')
    .click();
    await expect (page.locator('.chips__list > .chip-badge')).toBeVisible();
    await expect (page.locator('.chips__list > .chip-badge')).toContainText('$1 - 2');
})
