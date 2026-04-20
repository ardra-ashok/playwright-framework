import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';
import POManager from '../pages/POManager';

let browser: Browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });

  this.page = await context.newPage();
  this.poManager = new POManager(this.page);
  Object.defineProperty(this, 'loginPage', {
    get: () => this.poManager.getLoginPage()
  });
});


After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.page.screenshot({ path: `./reports/${scenario.pickle.name}.png` });
  }
 await this.page?.close();
 await browser?.close();
});