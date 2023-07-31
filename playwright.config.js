// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// export const storageStatePath = 'D:/RichPaymentSolutions/tests/LoginAuth.json';

module.exports = defineConfig({
  // globalSetup: 'D:/RichPaymentSolutions/tests/login.setup.js',
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000,

  expect: {
    timeout: 10000,
  },

  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    //Capture Screenshot on failure
    screenshot: "only-on-failure",

    //Maximum time each action such as 'click()' can takeDefault to 0 (no limit)
    actionTimeout: 30000,

    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.
    browserName: 'chromium',
    // storageStatePath: 'D:/RichPaymentSolutions/tests/LoginAuth.json'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: 'login.setup.js',
    },

    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        // storageState: storageStatePath,
      },
      dependencies: ['setup'],
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
