import { Locator, Page } from "playwright"


export class CartPage {

    page: Page
    cartPageHeader: Locator
    cartProductName: Locator
    cartPrice: Locator
    buyNowButton: Locator
    checkoutbutton: Locator
    cartProducts: Locator

    constructor(page: Page) {
        this.page = page
        this.cartProducts = this.page.locator(".cart ul")
        this.cartPrice = this.page.locator(".cartSection p").nth(2)
        this.cartProductName = this.page.locator(".cartSection h3")
        this.buyNowButton = this.page.getByRole("button", { name: "Buy Now" })
        this.cartPageHeader = this.page.getByText("My Cart")
        this.checkoutbutton = this.page.getByRole("button", { name: "Checkout" })

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
    async deleteProduct(product: String) {
        const countOfProducts = await this.cartProducts.count()
        for (let i = 0; i <= countOfProducts; i++) {
            const pname = await this.cartProducts.locator(".cartSection h3").nth(i).textContent()
            if (product == pname) {
                await  this.cartProducts.locator(".cartSection").nth(i).locator("button").nth(2).click()
            }
        }

    }


}