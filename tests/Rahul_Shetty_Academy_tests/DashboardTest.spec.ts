import { test, expect } from "playwright/test";
// import { LoginPage } from "../pages/Rahul_Shetty_Academy/LoginPage";
import { LoginPage } from "../../pages/Rahul_Shetty_Academy/LoginPage";
import { DashboardPage } from "../../pages/Rahul_Shetty_Academy/DashboardPage";
import loginData from "../../testData/CommonData.json"
import { CartPage } from "../../pages/Rahul_Shetty_Academy/CartPage";
import testData from "../../testData/CommonData.json"

let lp: LoginPage
let db: DashboardPage
let cp: CartPage


test.describe("Authorization Success", () => {

    test.beforeEach(async ({ page }) => {
        lp = new LoginPage(page)
        db = new DashboardPage(page)
        cp = new CartPage(page)
        await lp.launchURL(loginData.BASE_URL)
        await lp.loginToApplication(loginData.USERNAME, loginData.PASSWORD)
    })

    test("Verify the products", async () => {
        await db.products.first().waitFor({ state: 'visible' })// important step to make the product 
        const countOfProducts = await db.products.count()
        console.log("The count of product: ", countOfProducts)
        await expect(countOfProducts).toBeGreaterThan(0)

    })

    test("Verify  product is added to cart", async () => {

        await db.products.first().waitFor({ state: 'visible' })
        await db.selectProductAndAddToCart("ZARA COAT 3")
        await db.navigateCartPage()

    })

    test("verify the product detail visibility on dashboard page", async ({ page }) => {

        //await page.waitForTimeout(4000)
        await db.products.first().waitFor({ state: 'visible', timeout: 4000 })
        await db.products.first().isVisible()
        const total_product_count = await db.products.count()
        console.log(total_product_count)
        //const last_prod = await db.product_name
        const names = await db.product_name.allTextContents()
        const prices = await db.product_price.allTextContents()
        console.log(names)
        console.log(prices)


        expect(names).toContainEqual(expect.stringContaining('iphone')); // this mentions that the texts are geytting loaded
        expect(prices).toContainEqual(expect.stringContaining('$')); // this verifies its a price value
        //expect(await db.product_price.allTextContents()).toContainEqual("$") // not work

        const image_count = await db.product_image.count()
        await expect(image_count).toEqual(total_product_count)
        await expect(db.product_name).toHaveCount(total_product_count)
        await expect(db.product_price).toHaveCount(total_product_count)
    })


    test("Verify the Success Message for Add to cart", async ({ page }) => {
        await db.products.first().waitFor({ state: 'visible' })
        const message = await db.selectProductAndAddToCart("ADIDAS ORIGINAL")
        //const message = await db.selectProductAndAddToCart("ZARA COAT 3")
        //const message = await db.selectProductAndAddToCart("iphone 13 pro")
        await expect(db.added_to_cart_Pop_Up).toBeVisible()
        await expect(db.successMessage).toHaveText("Product Added To Cart")

    })

    test("Verify if multiple products are getting added to cart", async ({ page }) => {

        await db.products.first().waitFor({ state: 'visible', timeout: 3000 })
        let product_list = ['ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro']
        const list_count = product_list.length
        console.log(list_count)
        for (let i = 0; i < product_list.length; i++) {
            console.log(product_list[i])

            await db.selectProductAndAddToCart(product_list[i])
            // await page.waitForTimeout(3000)
            //await expect(db.added_to_cart_Pop_Up).toHaveText("Product Added To Cart")
            //await expect(db.added_to_cart_Pop_Up).toBeVisible()
        }
        await db.Cart_link.click()
        const products_in_cart = await cp.cartProductName.count()

        console.log(products_in_cart)
        expect(list_count).toEqual(products_in_cart)

    })

    test("Verify the product search Functionality", async ({ page }) => {

        const name = "iphone"
        //const name = "ADIDAS"
        //const name = "ZARA"
        await db.searchProduct(name)
        const product_list: string[] = await db.getProductName(name)

        if (product_list) {
            product_list.forEach(element => {
                expect(element.toLowerCase).toContain(name.toLowerCase)

            })
        }
    })


    test("Verify if product is getting removed from cart", async({ page}) => {
        let product_list = ['ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro']
       let  count_of_products_in_cart:number =0
        // product_list.forEach(element => { // For each does not work with async/await  
        //     console.log("----" + element)
        //     page.waitForTimeout(5000)
        //     db.selectProductAndAddToCart(element)
        // })

         for( const element of product_list) {
            console.log("----" + element)
            await page.waitForTimeout(5000)
            await db.selectProductAndAddToCart(element)
        }

        await db.Cart_link.click()
        console.log(product_list[1])
        if(await cp.isCartProductAvailable()) {
            
            const cart_count = await cp.cartProducts.count()
            count_of_products_in_cart = +cart_count
            console.log(typeof(count_of_products_in_cart))
            console.log(count_of_products_in_cart)
        }
        //await page.waitForTimeout(50000)
        
        cp.deleteProduct(product_list[1])
        //expect(await cp.cartProducts.count()).toBeLessThan(count_of_products_in_cart)


        

    })

})// describe ends here 

test("Verify Unauthorized access", async ({ page }) => {

    await page.goto(testData.DASHBOARD_LINK)
    const current_url = await page.url()
    expect(current_url).toEqual(testData.BASE_URL)


})