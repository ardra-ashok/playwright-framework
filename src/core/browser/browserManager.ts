import { chromium, firefox, webkit, Browser } from '@playwright/test';

export class BrowserManager {
  static async launch(browserName: string): Promise<Browser> {
    switch (browserName) {
      case 'firefox':
        return firefox.launch();
      case 'webkit':
        return webkit.launch();
      default:
        return chromium.launch();
    }
  }
}