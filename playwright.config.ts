import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src',

  timeout: 60 * 1000,
  expect: {
    timeout: 10000,
  },

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: false,

  reporter: [
    ['line'],
    ['allure-playwright'],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    viewport: { width: 1280, height: 720 },

    actionTimeout: 15000,
    navigationTimeout: 30000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});