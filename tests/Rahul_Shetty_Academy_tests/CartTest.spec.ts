
//import {test,expect} from '@playwright/test'
import { Page } from '@playwright/test'
import { LoginPage } from '../../pages/Rahul_Shetty_Academy/LoginPage'
import { CartPage } from '../../pages/Rahul_Shetty_Academy/CartPage'
import { test, expect } from '../../utils/myfixtures'
import data from '../../testData/CommonData.json'
import { DashboardPage } from '../../pages/Rahul_Shetty_Academy/DashboardPage'
import { payment } from '../../pages/Rahul_Shetty_Academy/PaymentPage'





let cp: CartPage
let dp: DashboardPage

//Using custom fixture loggedInpage to get assured we are not repeating the login code multiple times.
test("Verify Empty cart Mesage", async ({ loggedInPage, dashboardPage, cartPage }) => {
    //cp = new CartPage(loggedInPage)
    //dp = new DashboardPage(loggedInPage)
    await dashboardPage.Cart_link.click()
    await expect(await cartPage.emptyCart_message).toHaveText("No Products in Your Cart !")
})

test("Verify add to cart and place Order module", async ({page, loggedInPage, dashboardPage, cartPage, paymentPage }) => {
    await dashboardPage.selectProductAndAddToCart("ZARA COAT 3")
    let country = "Singapore"
    await dashboardPage.Cart_link.click()
    if (await cartPage.isCartProductAvailable()) {
        await cartPage.checkoutbutton.click()
    }
    await expect(paymentPage.paymentpageTitle).toContainText("Payment Method")
    const selectedvalue = await paymentPage.selectCountryDropDown(country)
    await expect((await paymentPage.emailInput.inputValue()).toString()).toContain(data.USERNAME)
    //await expect(selectedvalue?.trim()).toContain(country.trim())
    await paymentPage.placeOrder()
    const currentURl = await page.url()
    await expect(currentURl).toContain("thanks")
    //await expect(page).toHaveURL("/thanks/")


})
