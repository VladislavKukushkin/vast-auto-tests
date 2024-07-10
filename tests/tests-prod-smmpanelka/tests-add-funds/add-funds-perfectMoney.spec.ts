import { test, expect } from '@playwright/test';

test('Add funds via Perfect Money', async ({ page }) => {
  // await page.goto('https://smmpanelka.com/app/login');
  // await page.locator('#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div.layout.align-center.justify-center > div > div.v-card__text > div.layout.cols.align-center.justify-space-between > div.layout.shrink.cols.align-center.justify-center > button > span > div > div.v-responsive__content').click();
  // await page.locator('#identifierId').fill('smmpanelkatestuser@gmail.com');
  // await page.locator('#identifierNext > div > button > span').click();
  // await page.locator('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').fill('testuser1337');
  // await page.locator('#passwordNext > div > button > span').click();
  //   await page.waitForTimeout(10000);

  test.setTimeout(0);

  await page.goto('https://smmpanelka.com/app/login');
    await page.getByLabel('E-mail').fill('TestUser@test.com');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').fill('TestUser');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password').press('Enter');
    await page.waitForTimeout(2000);

  await page.goto('https://smmpanelka.com/app/add-funds'); 
    await page.waitForTimeout(3000);
    await page.goto('https://smmpanelka.com/app/add-funds'); 
    await page.waitForTimeout(3000);
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div[4]/div/div').click(); 
  await page.locator('xpath=/html/body/div[1]/div/div/div/div/div[9]/main/div/div[2]/div/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/div/div[1]/div/input').fill('7');
  await page.getByRole('button', { name: 'Proceed to the Billing' }).click();
   await page.waitForTimeout(3000);
   await expect(page).toHaveTitle('Perfect Money - Way to develop your money.');
});
