import {test,expect} from '@playwright/test'

test("Validate the fromCity", async ({page}) => {

await page.goto("https://www.goibibo.com")
//await page.locator("input#fromCity").fill("Pune")
await page.locator('span.icClose').click()
//await page.getByLabel('fromCity').fill("Pune")
await page.locator("input#fromCity").fill("Pune")
await page.getByRole("option", {name:'Pune,India'})
await page.waitForTimeout(2000)
// //div[@class='flt_fsw_inputBox dates inactiveWidget ']



})