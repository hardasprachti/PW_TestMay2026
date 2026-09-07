import { Locator, Page } from "playwright";

export class OrderPage{
    page:Page
    thanks_message:Locator

    constructor(page:Page){
        this.page = page
        this.thanks_message = this.page.locator("h1.hero-primary")
    }

    async getThanksMessage(){
        return await this.thanks_message.textContent()
    }

} 