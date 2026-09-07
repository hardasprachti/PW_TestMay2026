
import {test,expect} from '@playwright/test'

test("Verify file download and content verificarion", async({page}) =>{

    await page.goto("https://demo.automationtesting.in/FileDownload.html")

    const [download] = await Promise.all()
    await page.getByLabel("Enter Data:").fill("Hello, this is a test file and  iwant to learn playwright with typescript. I am getting the concept and working on it. I will soon get a wonderful high paying job in it.")
    await page.getByRole("button", {name:'Generate File'}).click()
    await expect(page.getByRole('link',{name:'link-to-download'})).toBeVisible()
    await page.getByRole('link',{name:'link-to-download'}).click()


})