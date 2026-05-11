import { Locator, Page } from "playwright"


export class CartPage{

    page:Page
    cartPageHeader:Locator
    cartProductName:Locator
    cartPrice:Locator
    buyNowButton:Locator
    checkoutbutton:Locator

    constructor(page:Page){
this.page = page
this.cartPrice = this.page.locator(".cartSection p").nth(2)
this.cartProductName = this.page.locator(".cartSection h3")
this.buyNowButton = this.page.getByRole("button",{name:"Buy Now"})
this.cartPageHeader = this.page.getByText("My Cart")
this.checkoutbutton = this.page.getByRole("button", {name:"Checkout"})

    }

}