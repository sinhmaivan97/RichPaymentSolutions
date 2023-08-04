import { test, chromium } from '@playwright/test';

async function globalSetup() {
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://landing.stage.devrpay.com/login');

    await page.locator("//div[@data-test-id='input-username']//following-sibling::div//input").fill("Tester");
    await page.locator("//div[@data-test-id='input-password']//following-sibling::div//input").fill("a123456789");
    await page.locator("//button[contains(text(),'Login')]").click();

    await page.waitForURL('https://business-settings.stage.devrpay.com/checkout');
    await page.context().storageState({
        path: "./LoginAuth.json"
    });
    await browser.close();
}

module.exports = globalSetup;