import { test, expect } from '@playwright/test';
import { log } from 'console';

test.setTimeout(0);

test('test', async ({ page }) => {
  await page.goto('https://smmpanelka.com/app/?networkId=1');
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toBeVisible({ timeout: 0 });
  await expect(page.locator('#rootElement').getByText('Youtube', { exact: true })).toHaveText('Youtube', ({ timeout: 0 }));
  
  await expect(page.getByRole('link', { name: 'Youtube Subscribers 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'Youtube Subscribers 󱦰' })).toHaveText('Youtube Subscribers', ({ timeout: 0 }));

  await expect(page.getByRole('link', { name: 'ID 142418 Youtube Subscribers' })).toBeVisible({ timeout: 0 });
      const youtubeSubscribersFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(2) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSubscribersFirst).toContain('Youtube Subscribers');
log(youtubeSubscribersFirst)

  await expect(page.getByRole('link', { name: 'ID 142569 Genuine YouTube' })).toBeVisible({ timeout: 0 });
      const youtubeSubscribersSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(2) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSubscribersSecond).toContain('YouTube Subscribers');
log(youtubeSubscribersSecond)

  await expect(page.getByRole('link', { name: 'Youtube Views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134492 YouTube Fast Views' })).toBeVisible({ timeout: 0 });
      const youtubeViewsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(3) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeViewsFirst).toContain('YouTube Fast Views');
log(youtubeViewsFirst)

  await expect(page.getByRole('link', { name: 'Youtube Packages 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134382 📦15х5 Package [15K' })).toBeVisible({ timeout: 0 });
      const youtubePackagesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(4) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubePackagesFirst).toContain('Package ');
log(youtubePackagesFirst)

  await expect(page.getByRole('link', { name: 'ID 134385 📦10х5 Package [10K' })).toBeVisible({ timeout: 0 });
      const youtubePackagesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(4) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubePackagesSecond).toContain('Package ');
log(youtubePackagesSecond)

  await expect(page.getByRole('link', { name: 'Youtube Likes 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134378 Youtube Likes [High' })).toBeVisible({ timeout: 0 });
      const youtubeLikesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(5) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLikesFirst).toContain('Youtube Likes ');
log(youtubeLikesFirst)

  await expect(page.getByRole('link', { name: 'ID 139915 Youtube likes [Fast' })).toBeVisible({ timeout: 0 });
      const youtubeLikesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(5) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeLikesSecond).toContain('Youtube likes ');
log(youtubeLikesSecond)

  await expect(page.getByRole('link', { name: 'Youtube Live Stream views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134411 🎥YouTube Live' })).toBeVisible({ timeout: 0 });
      const youtubeLiveFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(6) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLiveFirst).toContain('YouTube Live ');
  log(youtubeLiveFirst)

  await expect(page.getByRole('link', { name: 'ID 134412 🎥YouTube Live' })).toBeVisible({ timeout: 0 });
      const youtubeLiveSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(6) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeLiveSecond).toContain('YouTube Live ');
log(youtubeLiveSecond)

  await expect(page.getByRole('link', { name: 'Youtube Video SEO Optimization 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134424 YouTube Video SEO (' })).toBeVisible({ timeout: 0 });
        const youtubeVideoSeoFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(7) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeVideoSeoFirst).toContain('YouTube Video SEO ');
log(youtubeVideoSeoFirst)

  await expect(page.getByRole('link', { name: 'ID 134425 YouTube Video SEO (' })).toBeVisible({ timeout: 0 });
        const youtubeVideoSeoSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(7) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeVideoSeoSecond).toContain('YouTube Video SEO ');
log(youtubeVideoSeoSecond)
  
await expect(page.getByRole('link', { name: 'Youtube Watch Time 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 157126 YouTube WatchTime' })).toBeVisible({ timeout: 0 });
        const youtubeWatchTime = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(8) > div > div > a > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeWatchTime).toContain('YouTube WatchTime ');
log(youtubeWatchTime)

  await expect(page.getByRole('link', { name: 'Youtube Shares 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134486 YouTube Shares [' })).toBeVisible({ timeout: 0 });
        const youtubeSharesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(9) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSharesFirst).toContain('YouTube Shares ');
  log(youtubeSharesFirst)
  await expect(page.getByRole('link', { name: 'ID 134488 YouTube Shares [' })).toBeVisible({ timeout: 0 });
        const youtubeSharesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(9) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeSharesSecond).toContain('YouTube Shares ');
  log(youtubeSharesSecond)

  await expect(page.getByRole('link', { name: 'Youtube Comments 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134407 YouTube comments [' })).toBeVisible({ timeout: 0 });
        const youtubeCommentsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(10) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeCommentsFirst).toContain('YouTube comments ');
log(youtubeCommentsFirst)

  await expect(page.getByRole('link', { name: 'ID 142328 Youtube - Comments' })).toBeVisible({ timeout: 0 });
        const youtubeCommentsSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(10) > div > div > a:nth-child(3) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeCommentsSecond).toContain('Youtube - Comments ');
log(youtubeCommentsSecond)

  await expect(page.getByRole('link', { name: 'Youtube Views AdWords 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 139916 YouTube AdWords' })).toBeVisible({ timeout: 0 });
        const youtubeAdWordsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(11) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeAdWordsFirst).toContain('YouTube AdWords ');
log(youtubeAdWordsFirst)

  await expect(page.getByRole('link', { name: 'ID 139917 YouTube AdWords' })).toBeVisible({ timeout: 0 });
        const youtubeAdWordsSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(11) > div.mb-4.mt-4.mt-md-6.mb-md-6.mx-auto > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeAdWordsSecond).toContain('YouTube AdWords ');
log(youtubeAdWordsSecond)
 
//   await expect(page.getByRole('link', { name: 'Youtube Comment Likes 󱦰' })).toBeVisible({ timeout: 0 });
//   await expect(page.getByRole('link', { name: 'ID 134490 Youtube Comment' })).toBeVisible({ timeout: 0 });
//         const youtubeCommentLikesFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(12) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
//   await expect(youtubeCommentLikesFirst).toContain('Youtube Comment ');
// log(youtubeCommentLikesFirst)

//   await expect(page.getByRole('link', { name: 'ID 134505 Youtube Comment' })).toBeVisible({ timeout: 0 });
//         const youtubeCommentLikesSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(12) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
//   await expect(youtubeCommentLikesSecond).toContain('Youtube Comment ');
// log(youtubeCommentLikesSecond)

//   await expect(page.getByRole('link', { name: 'Youtube Live Stream Chat Comments 󱦰' })).toBeVisible({ timeout: 0 });  
//   await expect(page.getByRole('link', { name: 'ID 134406 YouTube Live Stream' })).toBeVisible({ timeout: 0 });
//         const youtubeLiveStreamChat = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(13) > div > div > a > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
//   await expect(youtubeLiveStreamChat).toContain('YouTube Live Stream Chat ');
// log(youtubeLiveStreamChat)

//   await expect(page.getByRole('link', { name: 'Youtube Virtual Assistants 󱦰' })).toBeVisible({ timeout: 0 });
//   await expect(page.getByRole('link', { name: 'ID 134394 Social Media' })).toBeVisible({ timeout: 0 });
//         const youtubeVirtualAssistantsFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(14) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
//   await expect(youtubeVirtualAssistantsFirst).toContain('Assistant');
//   log(youtubeVirtualAssistantsFirst)

//   await expect(page.getByRole('link', { name: 'ID 134396 Graphic Design' })).toBeVisible({ timeout: 0 });
//         const youtubeVirtualAssistantsSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(14) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
//   await expect(youtubeVirtualAssistantsSecond).toContain('Assistant');
//   log(youtubeVirtualAssistantsSecond)

  await expect(page.getByRole('link', { name: 'Youtube CTR Views 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134405 CTR on Youtube' })).toBeVisible({ timeout: 0 });
        const youtubeCtrViews = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(13) > div > div > a > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeCtrViews).toContain('CTR on Youtube');
log(youtubeCtrViews)

  await expect(page.getByRole('link', { name: 'Youtube Community Likes 󱦰' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 157361 Youtube Community' })).toBeVisible({ timeout: 0 });
        const youtubeCommunityLikes = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(15) > div > div > a > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span.black--text.service-card__title.text-center.text-uppercase.dark--text');
  await expect(youtubeCommunityLikes).toContain('Youtube Community');
log(youtubeCommunityLikes)

  await expect(page.getByRole('link', { name: 'Youtube Channel/Video' })).toBeVisible({ timeout: 0 });
  await expect(page.getByRole('link', { name: 'ID 134419 YouTube Channel' })).toBeVisible({ timeout: 0 });
        const youtubeChannelFirst = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(16) > div > div > a:nth-child(1) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeChannelFirst).toContain('YouTube Channel');
  log(youtubeChannelFirst)

  await expect(page.getByRole('link', { name: 'ID 134420 YouTube Video' })).toBeVisible({ timeout: 0 });
         const youtubeChannelSecond = await page.textContent('#rootElement > div.pb-4.light__them > div > div:nth-child(16) > div > div > a:nth-child(2) > div.service-card__body > div.service-card__content > div.d-flex.justify-center.mb-4 > span');
  await expect(youtubeChannelSecond).toContain('YouTube Video');
  log(youtubeChannelSecond)

});
