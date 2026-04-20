import { Page } from '@playwright/test';
import { CONSTANTS } from '../utils/constants';

export class BasePage {
    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getTitle() {
        return await this.page.title();
    }

}