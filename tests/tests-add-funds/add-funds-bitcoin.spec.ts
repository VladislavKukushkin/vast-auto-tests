import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/login');
  await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.layout.align-center.justify-center > div > div.v-card__text > div.layout.cols.align-center.justify-space-between > div.layout.shrink.cols.align-center.justify-center > button > span > div > div.v-responsive__content').click();
  await page.locator('#identifierId').fill('vladislav.kukushkin@onlinesup.com');
  await page.locator('#identifierNext > div > button > span').click();
  await page.locator('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').fill('Hsdkj-shohM6');
  await page.locator('#passwordNext > div > button > span').click();
    await page.waitForTimeout(10000);
  await page.goto('https://smmpanelka.com/app/add-funds'); 
    await page.waitForTimeout(3000);
    await page.goto('https://smmpanelka.com/app/add-funds'); 
    await page.waitForTimeout(3000);
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[3]/div/div').click(); 
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/input').fill('7');
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[4]/button/span').click();
   await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Mycelium Gear' });
});