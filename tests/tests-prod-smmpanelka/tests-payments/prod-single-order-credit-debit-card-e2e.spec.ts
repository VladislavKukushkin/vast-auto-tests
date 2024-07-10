import { test, expect } from '@playwright/test';

test('Pay for order via Credit card', async ({ page }) => {
  
  test.setTimeout(0);
  
  await page.goto('https://smmpanelka.com/app/login');
  await page.getByLabel('E-mail').fill('TestUser@test.com');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').fill('TestUser');
  await page.waitForTimeout(1000);
  await page.getByLabel('Password').press('Enter');
  await page.waitForTimeout(2000);

  await page.goto('https://smmpanelka.com/app/orders/create?serviceSlug&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DF0pOnKmv0tw&quantity=1000&networkId=1&serviceTypeId=1&serviceId=157044&isDripFeed=false&dripFeedQuantityStep=1&numberOfRuns=2&dripFeedMode=flat&dripFeedMinutes=60&type=single');
  await page.getByRole('button', { name: 'Buy in one click' }).click({ timeout: 0 });
  await page.getByRole('button', { name: 'RUB' }).click({ timeout: 0 });
  await page.getByText('Credit / Debit card').click({ timeout: 0 });
  await page.getByRole('button', { name: 'BUY FOR $' }).click({ timeout: 0 });
  await page.goto('https://checkout.stripe.com/c/pay/cs_live_a1fVxpEGwOwgPLc1GFZYAsdjo4PxbWAjT8laWnymh8OY4GZEYFdsxpwOjt#fidkdWxOYHwnPyd1blppbHNgWjA0SE9ha31GMlBEQktNQDJ8c3B%2FQ2RrZ2JjYTZIamBObnw8bzRVZDdSSDFvVmFOMHZJd2dHU09XYktnaUozSGh8a3BrUHRTfTNVfF9xPXNuSkJBQWRJcGpWNTVzTndhNEBHbCcpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqdmhodWRrYGluZCtmamgneCUl');
  await expect(page.getByText('Balance Replenishment for')).toBeVisible({ timeout: 0 });
});