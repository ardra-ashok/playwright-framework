import { test as base } from '@playwright/test';
import POManager from '../pages/POManager';
import LoginPage from '../pages/LoginPage';


export const test = base.extend<{ 
  loginPage: LoginPage, 
  poManager: POManager 
}>({

  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    });
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
    await page.close();
  },


  poManager: async ({ page }, use) => {
    const poManager = new POManager(page);
    await use(poManager);
  },
  

  loginPage: async ({ poManager }, use) => {
    await use(poManager.getLoginPage());
  },
});