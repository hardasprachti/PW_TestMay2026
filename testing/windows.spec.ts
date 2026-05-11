import {test,expect} from '@playwright/test'

test("Multiple tabs or windows handling" , async({page}) => {

await page.goto("https://demo.automationtesting.in/Windows.html")

const page1 = page.waitForEvent("popup")
await page.locator("#tabbed button").click()
//Waiitng for the final result of waitforEvent('popup')
const newPage = await page1

await newPage.getByText("Downloads", {exact:true}).click()
await expect(newPage.locator("h2#bindings")).toContainText("Webdriver language Bindings")


//come back to orignal event 
await page.getByText("Home", {exact: true}).click()
await expect(page.getByPlaceholder("Email Id"))

//page.reload()
//page.goBack()
//page.goForward()
//page.bringToFront() -- it will get the orignal tab to get in front and get the focus



})