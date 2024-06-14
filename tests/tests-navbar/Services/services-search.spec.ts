import { test, expect } from '@playwright/test';
import {log } from 'console';
import exp from 'constants';

test('test', async ({ page }) => {
  
const allServicesList = page.locator('#app > div > div.fill-height.position-relative > div > div > div.services__bar > div.networks');
const vk = 'VK' ;

await page.goto('https://smmpanelka.com/app/login');
await page.getByRole('button', { name: 'Services' }).click();
await page.locator('#searchNetwork').fill('Likee');
const searchResult = await expect(allServicesList).toContainText('VK');
searchResult == true ? log('search vk - true') : log('search vk net nixya')
  });
