import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    storageState: "./auth-lk.json",
    screenshot: "on",
    video: "on",
    actionTimeout: 0,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        debug: true,
        testops: {
          api: {
            token: '65f07f630ba4928f3b9dfec902b155b7587609b2141a7b9f5376bb1c7b87eef7',
          },
          project: 'DEMO',
          uploadAttachments: true,
          logging: true,
          run: {
            complete: true,
          },
        },
      },
    ],
  ],
};

export default config;
