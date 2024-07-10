import { test, expect } from '@playwright/test';

test('Create order using Expert mode', async ({ page }) => {
    
    test.setTimeout(0);

    await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=&quantity=1000&networkId=12&serviceTypeId=84&serviceId=134713&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=expert');
    await page.waitForURL('');
    
const expertSelectors = page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.pa-0.col.col-12 > div.px-3 > div > div > div > div > div > div > div > div > div > div.col-md-6.order-sm-1.order-md-2.col-12');
        await expect (expertSelectors).toContainText('Select the name format for orders');
        await expect (expertSelectors).toContainText('Select the purchase mode');
        await expect (expertSelectors).toContainText('Select the format for selecting countries for orders');
    await page.locator('#input-118').fill('111111');
    await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.pa-0.col.col-12 > div.px-3 > div > div > div > div > div > div > div > div > div > div.col-md-6.order-sm-2.order-md-1.col-12 > button')
                .click();
    await page.waitForTimeout(4000);
    await page.locator('#input-155').fill('Web');
    await page.locator('#list-155').first().click();
    await page.locator('#input-160').fill('Test123');
    await page.locator('#input-163').fill('1233');
    await page.locator('#input-166').fill('https://ristebar.ru/');
    await page.locator('#app > div.v-application--wrap > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.pa-0.col.col-12 > div.px-3 > div > div > div > div > div > div > div > div:nth-child(4) > button')
            .click(); 
    console.log('Order was created successfully')
})
