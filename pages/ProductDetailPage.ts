import { Locator, Page } from "playwright";



export class ProductDetailpage{

    page:Page
    productHeader:Locator
    productPrice:Locator
    productImage:Locator


    constructor(page:Page){
        this.page = page
        this.productHeader = this.page.locator("h2").first()
        this.productPrice = this.page.locator("h3").nth(2)
        this.productImage = this.page.locator(".img-fluid")
    }


    async isProductImageVisible()
    {
        return Boolean(await this.productImage.isVisible())
    }

    async verifyProductTitle(product:string){

        const name = await this.productHeader.textContent()
        if(name === product){
            return true
        }
        else{
            return false
        }
    }

    async verifyProductPrice(product:string){

       const price =  await this.productPrice.textContent()
       return price
    }


}