import { Locator, Page, expect } from "@playwright/test";

export class Paymentpage {

    page: Page
    countryDropDown: Locator
    countryDD: Locator
    placeOrderbutton: Locator
    errorMsgForBlankCountry: Locator
    paymentpageTitle: Locator
    countryDDResults: Locator
    emailInput: Locator


    constructor(page: Page) {

        this.page = page
        this.countryDD = this.page.getByPlaceholder("Select Country")
        this.placeOrderbutton = this.page.locator(".action__submit")
        this.errorMsgForBlankCountry = this.page.locator(".toast-title")
        this.paymentpageTitle = this.page.getByText(" Payment Method ")
        this.countryDropDown = this.page.locator("div.user__name input").last()
        this.emailInput = this.page.locator("div.user__name input").first()
        this.countryDDResults = this.page.locator("section.ta-results button")
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
            await this.countryDDResults.first().isVisible()
           // await this.countryDDResults.filter({ hasText: '${countryName}' }).click()
             const count =  await this.countryDDResults.count()
             for (let i= 0; i< count; i++){
             const optionText = (await this.countryDDResults.nth(i).textContent())?.trim()
              if(optionText === countryName)
              {
                  console.log(optionText)
                  //console.log( await this.countryDDResults.nth(i).textContent())
                  await this.countryDDResults.nth(i).click()
                  return;
              }
             
        }
        //const value = await this.countryDropDown.inputValue()
        //console.log("Value selected is -------" + value)
       // return value
        //throw new Error(`Country '${countryName}' was not found in the dropdown.`);

    }

    async placeOrder() {
        await this.placeOrderbutton.isEnabled()
        await this.placeOrderbutton.click()
    }




}