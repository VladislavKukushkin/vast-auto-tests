import { test, expect, } from '@playwright/test';
import { log } from 'console';

test('test', async ({ page }) => {
await page.goto(`https://smmpanelka.com/app/services/137505-rutube-followers-10kd-0-1h-30-days-refill`);
await page.waitForTimeout(1000);
        
const usd = await page.textContent(`#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.about__wrapper > div.preview-card > div.price-card.price > div.price-card__money > span`);
await expect(usd).toContain(`$ 2.60`);
log(usd);
        
await page.getByRole(`button`, { name: `USD ($)` }).first().click();
await page.waitForTimeout(1000);
await page.getByText(`RUB (₽)`).click();
        
const rub = await page.textContent(`#app > div > div.fill-height.position-relative > main > div > div.py-3.background.full-height > div > div > div.about__wrapper > div.preview-card > div.price-card.price > div.price-card__money > span`);
await expect(rub).toContain(`₽ 260.00`);
log(rub);
  });
