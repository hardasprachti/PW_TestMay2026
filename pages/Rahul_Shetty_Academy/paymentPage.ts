import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class Paymentpage extends BasePage {

    
    countryDropDown: Locator
    countryDD: Locator
    placeOrderbutton: Locator
    errorMsgForBlankCountry: Locator
    paymentpageTitle: Locator
    countryOptions: Locator
    emailInput: Locator


    constructor(page: Page) {

        super(page)
        this.countryDD = this.page.getByPlaceholder("Select Country")
        this.placeOrderbutton = this.page.locator(".action__submit")
        this.errorMsgForBlankCountry = this.page.locator(".toast-title")
        this.paymentpageTitle = this.page.getByText(" Payment Method ")
        this.countryDropDown = this.page.locator("div.user__name input").last()
        this.emailInput = this.page.locator("div.user__name input").first()
        this.countryOptions = this.page.locator("section.ta-results button")
    }



    async selectCountry(country: string) {

        await this.countryDD.fill(country)
        //await this.countryDD.pressSequentially(country)
        const ddlist = await this.page.locator("button.ta-item")
        const countryCount = await ddlist.count()
        for (let i = 0; i < countryCount; i++) {

            const value = await ddlist.nth(i).textContent()
            if (value === country) {
                await ddlist.nth(i).click()
                break;
            }

        }
    }

    async selectCountryDropDown(countryName: string) {


        await this.countryDropDown.clear()
        await this.countryDropDown.pressSequentially(countryName.substring(0, 4))
        await this.countryOptions.first().waitFor({state:'visible'})
        //await this.countryOptions.filter({hasText:`${countryName}`}).click()

        const country:string[]= await this.countryOptions.allTextContents()
        console.log(country.length)
        for(let i=0; i< country.length; i++){
            console.log(country[i].trim())
            console.log(await this.countryOptions.nth(i).textContent())
            console.log("===================")
            console.log(country[i].trim() === countryName)
            if(country[i].trim().toLowerCase() === countryName.toLowerCase()){
                await this.safeClick(this.countryOptions.nth(i))
                break
            }
        }
        //throw new Error(`Country ${countryName} was not found in the dropdown.`);

    }

    async placeOrder() {
        await this.placeOrderbutton.isEnabled()
        await this.placeOrderbutton.click()
    }




}