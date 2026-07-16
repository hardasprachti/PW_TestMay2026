
import { test as base, Page } from "@playwright/test"
import loginData from '../testData/CommonData.json'

//Importing all the classes using bulk import 
import { LoginPage } from "../pages/Rahul_Shetty_Academy/LoginPage"
import { DashboardPage } from "../pages/Rahul_Shetty_Academy/DashboardPage"
import { CartPage } from "../pages/Rahul_Shetty_Academy/CartPage"
export { expect } from '@playwright/test'

// Define type for every page object
type MyPagesFixture = {

    loggedInPage: Page
    login: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
};

//Extend base test to instantiate all the classes cleanly
// export const test = base.extend<MyPagesFixture>({

//     loginPage: async ({page}, use) => {await use(new LoginPage(page)); },
//     dashboardPage: async ({page}, use) => {await use(new DashboardPage(page)); },
//     cartPage: async ({page}, use) => {await use(new CartPage(page)); } 
// });

let login: LoginPage
export const test = base.extend<MyPagesFixture>({
    loggedInPage: async ({ page }, use) => {
        login = new LoginPage(page);
        await page.goto(loginData.BASE_URL)
        await login.loginToApplication
        await use(page);

        await login.logOut()

    }
})


