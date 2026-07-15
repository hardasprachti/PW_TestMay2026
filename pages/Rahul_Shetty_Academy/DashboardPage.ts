import { Locator, Page } from "playwright";

export class DashboardPage{

    
    page: Page
    home_link : Locator
    orders_link : Locator
    Cart_link: Locator
    Logout_button : Locator
    products: Locator
    product_image:Locator
    product_name: Locator
    product_price: Locator
    added_to_cart_Pop_Up: Locator
    successMessage: Locator

    constructor(page:Page){
        this.page = page
        this.home_link = this.page.locator("[routerlink='/dashboard/']")
        this.orders_link = this.page.locator("[routerlink='/dashboard/myorders']")
        this.Cart_link = this.page.locator("[routerlink='/dashboard/cart']")
        this.Logout_button = this.page.getByRole('button', {name:'Sign Out'})
        this.products = this.page.locator("div.container div.col-lg-4")
        this.product_image = this.page.locator("div.container div.col-lg-4 img")
        this.product_name = this.page.locator("div.container div.col-lg-4 h5")
        this.product_price = this.page.locator("div.container div.col-lg-4 div div.d-flex")
        this.added_to_cart_Pop_Up = this.page.locator("#toast-container")
        this.successMessage = this.page.locator(".toast-message")
    }

    async navigateOrdersPage(){

        await this.orders_link.click()
    }

    async navigateCartPage(){

        await this.Cart_link.click()
    }


    async logOut(){

        await this.Logout_button.click()
    }

    async selectProductAndAddToCart(productName:string){

        const productCount = await this.products.count();
        await this.products.first().waitFor({state:'visible'})
        for(let i=0;i<=productCount; i++){
            const productLocator = this.products.locator("div.card-body").nth(i)
            const name = await productLocator.locator("h5").textContent()
            if(name?.toLowerCase() == productName.toLowerCase()){
                //await  productLocator.locator("div").nth(2).locator("button").nth(2).click()
                const addToCartButton = this.page.locator(".card-body")
                                .filter({has:this.page.locator("b"), hasText: productName})
                                .getByRole('button', {name:'Add to Cart'})
                await addToCartButton.click()
                break;    
            }
         

        }
    }

    async selectProductAndViewDetails(productName:string){

        const productCount = await this.products.count();
        for(let i=1;i<=productCount; i++){
            const productLocator = await this.products.nth(i)
            const name = await productLocator.locator("h5").textContent()
            if(name == productName){
                await  productLocator.locator("div").nth(2).locator("button").nth(2).click()
                break;    
            }

        }
    }

    async getProductName(name:String){
        const productCount = await this.products.count();
        for(let i=1;i<=productCount; i++){
            const productLocator = await this.products.nth(i)
            const displayedName = await productLocator.locator("h5").textContent()
            if(displayedName == name){
                await  productLocator.textContent()
                 
            }

        }
    }





}