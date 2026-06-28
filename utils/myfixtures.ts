
import {test as base} from "@playwright/test"

//Importing all the classes using bulk import 
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage} from "../pages/DashboardPage"
import { CartPage } from "../pages/CartPage"


// Define type for every page object
type MyPagesFixture ={

    loginPage : LoginPage
    dashboardPage:DashboardPage
    cartPage : CartPage
};

//Extend base test to instantiate all the classes cleanly
export const test = base.extend<MyPagesFixture>({

    loginPage: async ({page}, use) => {await use(new LoginPage(page)); },
    dashboardPage: async ({page}, use) => {await use(new DashboardPage(page)); },
    cartPage: async ({page}, use) => {await use(new CartPage(page)); } 
});

export {expect} from '@playwright/test'

