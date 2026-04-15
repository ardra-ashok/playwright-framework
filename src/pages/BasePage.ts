import { Page } from '@playwright/test';
import { CONFIG } from '../core/config/config';

export class BasePage {
  constructor(protected page: Page) { }
  
  async navigate(path: string) {
    const url = `${ CONFIG.baseUrl[CONFIG.env] }${ path }`;
    console.log(url)
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async click(locator: string) {
    await this.page.click(locator);
  }

  async fill(locator: string, value: string) {
    await this.page.fill(locator, value);
  }

  async wait(ms: number) {
    await this.page.waitForTimeout(ms);
  }
}