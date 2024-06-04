import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test.use({
  storageState: 'auth-prod-smmpanelka.json',
  actionTimeout: 0,
})

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toBeVisible({ timeout: 0 });
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toHaveText('Youtube', ({ timeout: 0 }));
  
  await expect(page.getByRole('link', { name: 'Youtube Subscribers 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Subscribers 󱦰' })).toHaveText('Youtube Subscribers', ({ timeout: 0 }));

  await expect(page.getByRole('link', { name: 'ID 142418 Youtube Subscribers' })).toBeVisible({ timeout: 0 });
      const youtubeSubscribersFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(2) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSubscribersFirst).toContain('Youtube Subscribers');

  await expect(page.getByRole('link', { name: 'ID 142569 Genuine YouTube' })).toBeVisible({ timeout: 0 });
      const youtubeSubscribersSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(2) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSubscribersSecond).toContain('YouTube Subscribers');

  await expect(page.getByRole('link', { name: 'Youtube Views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134492 YouTube Fast Views' })).toBeVisible({ timeout: 0 });
      const youtubeViewsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(3) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeViewsFirst).toContain('YouTube Fast Views');

  await expect(page.getByRole('link', { name: 'Youtube Packages 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134382 📦15х5 Package [15K' })).toBeVisible({ timeout: 0 });
      const youtubePackagesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(4) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubePackagesFirst).toContain('Package ');

  await expect(page.getByRole('link', { name: 'ID 134385 📦10х5 Package [10K' })).toBeVisible({ timeout: 0 });
      const youtubePackagesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(4) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubePackagesSecond).toContain('Package ');

  await expect(page.getByRole('link', { name: 'Youtube Likes 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134378 Youtube Likes [High' })).toBeVisible({ timeout: 0 });
      const youtubeLikesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(5) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLikesFirst).toContain('Youtube Likes ');

  await expect(page.getByRole('link', { name: 'ID 139915 Youtube likes [Fast' })).toBeVisible({ timeout: 0 });
      const youtubeLikesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(5) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeLikesSecond).toContain('Youtube likes ');

  await expect(page.getByRole('link', { name: 'Youtube Live Stream views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134411 🎥YouTube Live' })).toBeVisible({ timeout: 0 });
      const youtubeLiveFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(6) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLiveFirst).toContain('YouTube Live ');
  
  await expect(page.getByRole('link', { name: 'ID 134412 🎥YouTube Live' })).toBeVisible({ timeout: 0 });
      const youtubeLiveSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(6) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLiveSecond).toContain('YouTube Live ');

  await expect(page.getByRole('link', { name: 'Youtube Video SEO Optimization 󱦰' })).toBeVisible({ timeout: 0 });

  await expect(page.getByRole('link', { name: 'ID 134424 YouTube Video SEO (' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134425 YouTube Video SEO (' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134426 YouTube Video SEO (' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Watch Time 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 157126 YouTube WatchTime' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Shares 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134486 YouTube Shares [' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134488 YouTube Shares [' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 141990 ♛ YouTube Social' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Comments 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134407 YouTube comments [' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134428 YouTube Custom' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 142328 Youtube - Comments' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Views AdWords 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 139916 YouTube AdWords' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 139917 YouTube AdWords' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 139918 YouTube AdWords' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Comment Likes 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134490 Youtube Comment' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134505 Youtube Comment' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Live Stream Chat Comments 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134406 YouTube Live Stream' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Virtual Assistants 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134394 Social Media' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134396 Graphic Design' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube CTR Views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134405 CTR on Youtube' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Community Likes 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 157361 Youtube Community' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Channel/Video' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134419 YouTube Channel' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134420 YouTube Video' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134421 YouTube Video' })).toBeVisible({ timeout: 0 });
});