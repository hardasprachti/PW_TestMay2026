
//import {test,expect} from '@playwright/test'
import { Page } from '@playwright/test'
import { LoginPage } from '../../pages/Rahul_Shetty_Academy/login.page'
import { CartPage } from '../../pages/Rahul_Shetty_Academy/CartPage'
import { test, expect } from '../../utils/myfixtures'
import data from '../../testData/CommonData.json'
import { DashboardPage } from '../../pages/Rahul_Shetty_Academy/DashboardPage'
import { PaymentPage } from "../../pages/Rahul_Shetty_Academy/PaymentPage"




let cp: CartPage
let dp: DashboardPage

//Using custom fixture loggedInpage to get assured we are not repeating the login code multiple times.
test("Verify Empty cart Mesage", async ({ loggedInPage, dashboardPage, cartPage }) => {
    //cp = new CartPage(loggedInPage)
    //dp = new DashboardPage(loggedInPage)
    await dashboardPage.Cart_link.click()
    await expect(await cartPage.emptyCart_message).toHaveText("No Products in Your Cart !")
})

test("Verify add to cart and place Order module", async ({page, loggedInPage, dashboardPage, cartPage, paymentPage,orderPage }) => {
    await dashboardPage.selectProductAndAddToCart("ZARA COAT 3")
    let country = "New zealand"
    await dashboardPage.Cart_link.click()
    if (await cartPage.isCartProductAvailable()) {
        await cartPage.checkoutbutton.click()
    }
    await expect(paymentPage.paymentpageTitle).toContainText("Payment Method")
    const selectedvalue = await paymentPage.selectCountryDropDown(country)
    console.log(paymentPage.countryDropDown.textContent())
    await expect(paymentPage.countryDropDown).not.toBeEmpty()
    await expect((await paymentPage.emailInput.inputValue()).toString()).toContain(data.USERNAME)
    
})


test("Verify if product is getting removed from cart", async({ page,dashboardPage,cartPage}) => {
        let product_list = ['ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro']
       let  count_of_products_in_cart:number =0
        // product_list.forEach(element => { // For each does not work with async/await  
        //     console.log("----" + element)
        //     page.waitForTimeout(5000)
        //     db.selectProductAndAddToCart(element)
        // })

         for( const element of product_list) {
            console.log("----" + element)
            //await page.waitForTimeout(5000)
            test.setTimeout(120000)
            await dashboardPage.selectProductAndAddToCart(element)
        }

        await dashboardPage.Cart_link.click()
        console.log(product_list[1])
        if(await cartPage.isCartProductAvailable()) {
            
            const cart_count = await cartPage.cartProducts.count()
            count_of_products_in_cart = +cart_count
            console.log(typeof(count_of_products_in_cart))
            console.log(count_of_products_in_cart)
        }
        //await page.waitForTimeout(50000)
        
        cartPage.deleteProduct(product_list[1])
        //expect(await cp.cartProducts.count()).toBeLessThan(count_of_products_in_cart)


        

    })
