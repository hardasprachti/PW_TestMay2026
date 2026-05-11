import { Locator, Page } from "playwright";

export class paymentpage{

    page:Page
    countryDD:Locator
    placeOrderbutton : Locator
    errorMsgForBlankCountry: Locator


    constructor(page:Page){

        this.page = page
        this.countryDD = this.page.getByPlaceholder("Select Country")
        this.placeOrderbutton = this.page.locator(".action__submit")
        this.errorMsgForBlankCountry = this.page.locator(".toast-title")

    }

async selectCountry(country:string){

await this.countryDD.fill(country)
//await this.countryDD.pressSequentially(country)
const ddlist = await this.page.locator("button.ta-item")
const countryCount = await ddlist.count()
for(let i=0;i<countryCount;i++){

    const value = await ddlist.nth(i).textContent()
    if(value ===country){
        await ddlist.nth(i).click()
        break;
    }

}

}
async placeTheOrder(){
    
}