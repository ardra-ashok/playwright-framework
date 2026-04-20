import { Given, When, Then } from '@cucumber/cucumber';

Given('User opens login page', { timeout: 60000 }, async function () {
    await this.loginPage.goto();
});

When('User logs in with {string} and {string}', async function (username, password) {
    await this.loginPage.validLogin(username, password);
});

