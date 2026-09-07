
import  "@playwright/test"
import { test ,expect} from "@playwright/test"

test("Verify the filter", async({page})=>{

    await page.goto("https://practice.expandtesting.com/dynamic-table")
    const header = await page.locator(".table-responsive thead tr")
    await header.scrollIntoViewIfNeeded()
    const headerCelss = await header.locator("th")
    const header_count = await headerCelss.count()
    /*let column_number = -1
    for (let i=0;i<header_count;i++){
        if(await headerCelss.nth(i).textContent() === "CPU"){
            console.log(headerCelss.nth(i).textContent())
            column_number = i
            break
        }
    }*/
   const column_number = await header.locator("th").evaluateAll(
    (ths) => ths.findIndex(th => th.textContent?.trim() === "CPU")
  );
    expect(column_number).toBeGreaterThan(0)
    const row = page.locator(".table-responsive tbody tr").filter({hasText: 'Chrome'})
    await expect(row).toHaveCount(1)
    const memory = await row.locator("td").nth(column_number).textContent()
    console.log(memory)
    

})

test("Verify the CSS properties", async({page}) =>{
    await page.goto("https://practice.expandtesting.com/dynamic-table")
    const header = await page.locator(".h1").first()
    expect(header).toHaveCSS('min-height',"40px")
    expect(header).toHaveCSS('font-family', "Arial")
})