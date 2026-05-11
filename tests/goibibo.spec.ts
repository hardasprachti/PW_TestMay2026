import {test,expect} from '@playwright/test'

test("Validate the fromCity", async ({page}) => {

await page.goto("https://www.goibibo.com/")
await page.locator("input#fromCity").fill("Pune")
await page.locator()
// //div[@class='flt_fsw_inputBox dates inactiveWidget ']



})