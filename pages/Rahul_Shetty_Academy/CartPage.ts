import { Locator, Page } from "playwright"


export class CartPage {

    page: Page
    cartPageHeader: Locator
    cartProductName: Locator
    cartPrice: Locator
    buyNowButton: Locator
    checkoutbutton: Locator
    cartProducts: Locator
    emptyCart_message:Locator

    constructor(page: Page) {
        this.page = page
        this.cartProducts = this.page.locator(".cart ul")
        this.cartPrice = this.page.locator(".cartSection p").nth(2)
        this.cartProductName = this.page.locator(".cartSection h3")
        this.buyNowButton = this.page.getByRole("button", { name: "Buy Now" })
        this.cartPageHeader = this.page.getByText("My Cart")
        this.checkoutbutton = this.page.getByRole("button", { name: "Checkout" })
        this.emptyCart_message = this.page.locator("h1").nth(2)

    }


    async isCartProductAvailable() {

        const availableStatus = await this.cartProducts.first().isVisible({ timeout: 2000 })
        return availableStatus

    }

    async verifyProductdetails(productName: String) {

        const pname = await this.cartProductName.textContent()
        if (pname?.toLowerCase() == productName.toLowerCase()) {

        }
    }
    async deleteProduct(productName: String) {
        const countOfProducts = await this.cartProducts.count()
        for (let i = 0; i < countOfProducts; i++) {
            const pname = await this.cartProducts.locator(".cartSection h3").nth(i).textContent()
            if (productName.trim() == pname) {
                const current_product = await this.cartProducts.nth(i) //make sure to focus on current product
               const price=  await current_product.locator(".prodTotal").textContent()
               console.log("Price of the product" + price)
                await  current_product.locator(".btn-danger").click()
                break //after deleting break the loop to not get an error
            }
        }

    }

    async getEmptyCartMessage(){
        const message = await this.emptyCart_message.textContent()
        return message
    }

}