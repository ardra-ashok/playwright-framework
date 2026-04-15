import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

Given('User opens login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate('auth/login');
});

When('User logs in', async function (this: CustomWorld) {
  await loginPage.login('admin@practicesoftwaretesting.com', 'welcome01');
});

Then('User should land on dashboard', async function () {

});