import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/ru');
  await page.goto('https://smmpanelka.com/login/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByRole('button', { name: 'Войти' }).click();
});