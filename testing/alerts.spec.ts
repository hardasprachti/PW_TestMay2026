
import {test,expect} from '@playwright/test'

test("handling alerts" , async ({page}) => {

    let prompt = "testing"
    await page.goto("https://demoqa.com/alerts")
    page.on("dialog", (dialog) => {

        console.log(dialog.message())
        //dialog.accept("Testing")
        dialog.dismiss()
    })
    await page.locator('#alertButton').click()

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel")
    
    await page.locator('#promptButton').click()
    await expect(page.locator("#promptResult")).toHaveText(`You selected ${prompt}`)
})