import { defineConfig, devices,  } from '@playwright/test';
import { testPlanFilter } from "allure-playwright/dist/testplan";

export default defineConfig ({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
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
        actionTimeout: 0,
      }, 
    },
       {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        actionTimeout: 0,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        actionTimeout: 0,
      },
    },
  ],
});