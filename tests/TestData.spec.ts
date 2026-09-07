
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/Rahul_Shetty_Academy/login.page'
import { DashboardPage } from '../pages/Rahul_Shetty_Academy/DashboardPage'
import data from '../testData/CommonData.json'
import { CartPage } from '../pages/Rahul_Shetty_Academy/CartPage'

test("Verify login", async({page}) => {

let login = new LoginPage(page)
let dashboard = new DashboardPage(page)
let cart = new CartPage(page)

await page.goto(data.BASE_URL)
await login.loginToApplication(data.USERNAME, data.PASSWORD)
await page.waitForSelector("text=Sign Out", { state: 'visible' })
await dashboard.Cart_link.click()
await dashboard.logOut()

})