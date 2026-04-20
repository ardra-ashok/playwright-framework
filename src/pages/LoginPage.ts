import { type Locator, Page } from '@playwright/test';
import { CONSTANTS } from '../utils/constants';
import { BasePage } from './BasePage';
import { RouteManager } from '../utils/RouteManager';

class LoginPage extends BasePage { 
    readonly signInBtn: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;

    constructor(page: Page) {
        super(page); 
        this.signInBtn = page.locator('.btnSubmit')
        this.userNameField = page.locator('#email')
        this.passwordField = page.locator('#password')
    }

    async validLogin(username: string, password: string) {
    
    await this.userNameField.waitFor({ state: 'visible' });
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await Promise.all([
        this.page.waitForURL(RouteManager.dashboardRegex()),
        this.signInBtn.click()
    ]);
}

    async goto() {
        await this.navigate(RouteManager.loginUrl()); 
        await this.page.waitForLoadState('domcontentloaded');
    }
}

export default LoginPage;