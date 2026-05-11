
import {test,expect} from '@playwright/test';

 const itemName = "ADIDAS ORIGINAL"
 const country = 'Indonesia'

test("E2E Test", async ({page }) => {

   
    //Launch page
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const pageHeader = page.locator('h1.title').first()
    await expect(pageHeader).toContainText("Rahul Shetty Academy")
    //Enter email
    await page.getByPlaceholder("email@example.com").clear()
    await page.getByPlaceholder("email@example.com").fill("prachtitest09@gmail.com")
    //enter pssword
    await page.getByPlaceholder("enter your passsword").clear()
    await page.getByPlaceholder("enter your passsword").fill("Test@123")
    //Submit form
    await page.locator("input#login").click()
    //validate 
    await expect(page.locator("div#toast-container")).toContainText("Login Successfully")
    await expect(page.getByRole("button", {name:"Sign Out"})).toBeVisible()
    console.log("Login validated")
    //check products
    const products = await page.locator("div.card-body")
    await products.last().isVisible()
    const  productCount = await products.count()
    
    console.log(productCount)
    // await products.filter({hasText:`${itemName}`}).locator("button").last().click()

    for(let i=0; i<productCount; i++){
      // const currentItem = await products.nth(i).locator("h5").innerText()
      const  currentItem = await products.nth(i).locator("h5").textContent()
      console.log(currentItem);
       if(currentItem === itemName){
        await products.nth(i).locator("button").last().click()
        break;
       }
    }

    await expect(page.locator(".toast-message")).toHaveText("Product Added To Cart")

    //Add to cart
    await page.locator("[routerlink= '/dashboard/cart']").click()

    //validate the selected product
    await expect(page.locator("div.cartSection h3")).toHaveText(itemName)
    //click on checkout
    await page.getByText("Checkout").click()

    
    //select country
    await page.getByPlaceholder("Select Country").clear()
    //await page.getByPlaceholder("Select Country").fill("in")
    const searchCountry = country.slice(0,3)
    await page.getByPlaceholder("Select Country").pressSequentially(searchCountry)

    const countryDD = await page.locator("section.list-group button span")
    await countryDD.nth(0).waitFor()
     const cntryCount = await countryDD.count()

    //await countryDD.filter({hasText:`${country}`}).click() // when no duplicates are there in options
    
    for(let i =0; i<cntryCount;i++){
        //const ddLocator = await  countryDD.nth(i)
        //const ddValue = await ddLocator.textContent()
        const ddValue = await countryDD.nth(i).textContent()
        console.log(ddValue)
       if(ddValue && ddValue.trim() === country){
        await countryDD.nth(i).click()
        break
       }
    }
    //await expect(page.getByPlaceholder("Select Country")).not.toBeEmpty()
    const selectedCountry = await page.getByPlaceholder("Select Country").textContent()
    console.log(selectedCountry)

    //place the order
    await page.locator(".action__submit").click()

    //Verify the product Order
    await expect(page.locator("div.title").nth(0)).toHaveText(itemName)

   const orderText =  await page.locator("label.ng-star-inserted").textContent()
    const orderID = orderText.replaceAll("|", "").trim()

    console.log(orderID)
    //await page.locator("[routerlink= '/dashboard/cart']").click()
    await page.locator("button[routerlink= '/dashboard/myorders']").click()

    //wait for the orders to get displayed
    await page.locator(".table tbody").isVisible()

    const rows = await page.locator(".table tbody tr")
    const rowCount = await rows.count()

    for(let i=0;i<rowCount;i++){
        const tableOrder =await rows.nth(i).locator("th").textContent()
        if(tableOrder === orderID){
            await rows.nth(i).locator("td button").first().click()
            break
        }
        const selectedCountry = await page.locator(".email-container div.address p").nth(1)
        expect(selectedCountry).toContainText(country)
    }




    

})

