import test, { PlaywrightTestConfig, defineConfig, devices, expect } from '@playwright/test';
import { describe } from 'node:test';
//import { testPlanFilter } from "allure-playwright/dist/testplan";
import { qase } from 'playwright-qase-reporter';

describe('Test suite', () => {
  test('Simple test', () => {
    qase.id(1);
    qase.title('Example of simple test')
    expect(true).toBe(true);
  });

  test('Test with annotated fields', () => {
    qase.id(2);
    qase.fields({ 'severity': 'high', 'priority': 'medium' })
    expect(true).toBe(true);
  });

  test(qase(2, 'This syntax is still supported'), () => {
    expect(true).toBe(true);
  });
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  //grep: testPlanFilter(),
  use: {
    trace: 'on-first-retry',
    storageState: "./auth-lk.json",
    screenshot: "on",
    video:"on",
    actionTimeout: 0,
    },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      storageState: "./auth-lk.json", 
      
    },

    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      storageState: "./auth-lk.json",
     }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
      storageState: "./auth-lk.json",
      },
    },
  ],

  
});
const config: PlaywrightTestConfig = {
  reporter: [
    ['list'],
    ['playwright-qase-reporter',
        {
            apiToken: '65f07f630ba4928f3b9dfec902b155b7587609b2141a7b9f5376bb1c7b87eef7',
            projectCode: 'DEMO',
            basePath: 'https://api.qase.io/v1',
            uploadAttachments: true,
            runComplete: true,
            logging: true,
            rootSuiteTitle: 'Playwright tests',
            environmentId: '1'
        }],
      ],};
      module.exports = config;