
import { test as base, Page } from "@playwright/test"
import loginData from '../testData/CommonData.json'

//Importing all the classes using bulk import 
import { LoginPage } from "../pages/Rahul_Shetty_Academy/LoginPage"
import { DashboardPage } from "../pages/Rahul_Shetty_Academy/DashboardPage"
import { CartPage } from "../pages/Rahul_Shetty_Academy/CartPage"
import { Paymentpage } from "../pages/Rahul_Shetty_Academy/PaymentPage"
export { expect } from '@playwright/test'

// Define type for every page object
type MyPagesFixture = {

    loggedInPage: Page
    login: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
    paymentPage:Paymentpage
};

//Extend base test to instantiate all the classes cleanly
// export const test = base.extend<MyPagesFixture>({

//     loginPage: async ({page}, use) => {await use(new LoginPage(page)); },
//     dashboardPage: async ({page}, use) => {await use(new DashboardPage(page)); },
//     cartPage: async ({page}, use) => {await use(new CartPage(page)); } 
// });


let login: LoginPage
let dashboardPage:DashboardPage
export const test = base.extend<MyPagesFixture>({

    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page}, use) => {
        await use(new DashboardPage(page))
    },

    cartPage: async ({page}, use ) => {
        await use(new CartPage(page))
    },

    paymentPage: async ({page}, use) => {
        await use(new Paymentpage(page))

    } ,  
    
    loggedInPage: async ({ page }, use) => {
        login = new LoginPage(page);
        dashboardPage = new DashboardPage(page)
        await page.goto(loginData.BASE_URL)
        await login.loginToApplication(loginData.USERNAME,loginData.PASSWORD)
        await dashboardPage.products.first().waitFor({ state: "visible" });
        await use(page);

       // await login.logOut()

    }
})


