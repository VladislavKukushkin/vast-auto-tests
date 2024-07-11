import { test, expect, } from '@playwright/test';

test('Switch light theme of page to dark theme', async ({ page }) => {

    test.setTimeout(120000);

    await page.goto('https://smmpanelka.com/app/login');
        await page.waitForTimeout(5000);
    
    await expect(page.locator('#app > div > div.fill-height.position-relative > div > header')).toHaveCSS(
        'background-color',
        "rgb(255, 255, 255)"
    );

    await expect(page.getByRole('banner').locator('i')).toBeVisible();
    await page.getByRole('banner').locator('i').click();
    
    await expect(page.locator('#app > div > div.fill-height.position-relative > div > header')).toHaveCSS(
        'background-color',
        'rgb(19, 19, 19)'
    );
  });
