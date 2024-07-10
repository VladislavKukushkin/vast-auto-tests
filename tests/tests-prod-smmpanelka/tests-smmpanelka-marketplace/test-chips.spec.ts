import { test, expect } from '@playwright/test';

test('Choose chips of services on marketplace', async ({ page }) => {
  
  test.setTimeout(0);
  
  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toHaveText('Youtube');
  
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(2)').click();
  await expect(page.locator('#rootElement').getByText('Telegram', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Telegram', { exact: true })).toHaveText('Telegram');
  
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(3)').click();
  await expect(page.locator('#rootElement').getByText('Dzen', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Dzen', { exact: true })).toHaveText('Dzen');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(4)').click();  
  await expect(page.locator('#rootElement').getByText('VK', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('VK', { exact: true })).toHaveText('VK');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(5)').click();  
  await expect(page.locator('#rootElement').getByText('Twitch', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Twitch', { exact: true })).toHaveText('Twitch');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(6)').click();  
  await expect(page.locator('#rootElement').getByText('Likee', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Likee', { exact: true })).toHaveText('Likee');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(7)').click();  
  await expect(page.locator('#rootElement').getByText('Tiktok', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Tiktok', { exact: true })).toHaveText('Tiktok');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(8)').click();  
  await expect(page.locator('#rootElement').getByText('Rutube', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Rutube', { exact: true })).toHaveText('Rutube');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(9)').click();  
  await expect(page.locator('#rootElement').getByText('Discord', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Discord', { exact: true })).toHaveText('Discord');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(10)').click();  
  await expect(page.locator('#rootElement').getByText('Twitter', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Twitter', { exact: true })).toHaveText('Twitter');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(11)').click();  
  await expect(page.locator('#rootElement').getByText('VC.ru', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('VC.ru', { exact: true })).toHaveText('VC.ru');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(12)').click();  
  await expect(page.locator('#rootElement').getByText('OK', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('OK', { exact: true })).toHaveText('OK');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(13)').click();  
  await expect(page.locator('#rootElement').getByText('Website', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Website', { exact: true })).toHaveText('Website');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(14)').click();  
  await expect(page.locator('#rootElement').getByText('Instagram', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Instagram', { exact: true })).toHaveText('Instagram');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(15)').click(); 
  await expect(page.locator('#rootElement').getByText('Avito', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Avito', { exact: true })).toHaveText('Avito');
  
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(16)').click(); 
  await expect(page.locator('#rootElement').getByText('Kick', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Kick', { exact: true })).toHaveText('Kick');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(17)').click();  
  await expect(page.locator('#rootElement').getByText('Сoinmarketcap', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Сoinmarketcap', { exact: true })).toHaveText('Сoinmarketcap');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(18)').click();  
  await expect(page.locator('#rootElement').getByText('WhatsApp', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('WhatsApp', { exact: true })).toHaveText('WhatsApp');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(19)').click();  
  await expect(page.locator('#rootElement').getByText('Yappy', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Yappy', { exact: true })).toHaveText('Yappy');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(20)').click();  
  await expect(page.locator('#rootElement').getByText('Ozon', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Ozon', { exact: true })).toHaveText('Ozon');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(21)').click();  
  await expect(page.locator('#rootElement').getByText('Yandex Market', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Yandex Market', { exact: true })).toHaveText('Yandex Market');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(22)').click();  
  await expect(page.locator('#rootElement').getByText('Wildberries', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Wildberries', { exact: true })).toHaveText('Wildberries');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(23)').click();  
  await expect(page.locator('#rootElement').getByText('SoundCloud', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('SoundCloud', { exact: true })).toHaveText('SoundCloud');

  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.filters-header.mb-4.filters-header-mode-navbar > div.v-sheet.theme--light.filters.theme--light > div.networks > div.networks__list-wrapper > div > div:nth-child(24)').click();  
  await expect(page.locator('#rootElement').getByText('Trustpilot', { exact: true })).toBeVisible();
  await expect(page.locator('#rootElement').getByText('Trustpilot', { exact: true })).toHaveText('Trustpilot');
    
  console.log('All chips work correctly')
})