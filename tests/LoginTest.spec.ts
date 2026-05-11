import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {DashboardPage} from '../pages/DashboardPage';
import loginData  from '../testData/CommonData.json';
 

let lp : LoginPage
let db : DashboardPage


 test("Verify header", async({page}) => {
    
    await page.goto(loginData.BASE_URL)
    const pageHeader = page.locator('h1.title').first()
    await expect(pageHeader).toContainText("Rahul Shetty Academy")
    
 })



test("Verify valid login and refresh", async({page}) => {
    //await page.goto(loginData.BASE_URL)
    lp = new LoginPage(page)
    await lp.launchURL(loginData.BASE_URL)
    await lp.loginToApplication(loginData.USERNAME, loginData.PASSWORD)
    db = new DashboardPage(page)
    await expect(db.orders_link).toBeVisible()
    await page.reload()
    await expect(db.Cart_link).toBeVisible()
})


test("Verify invalid login", async({page}) => {
    //await page.goto(loginData.BASE_URL)
    lp = new LoginPage(page)
    await lp.launchURL(loginData.BASE_URL)
    await lp.loginToApplication(loginData.INVALID_USERNAME, loginData.PASSWORD)
    await expect(lp.invalidCredErrorMsg).toHaveText("Incorrect email or password.")
 
})



test("Verify logout scenario", async({page}) => {
    //await page.goto(loginData.BASE_URL)
    lp = new LoginPage(page)
    await lp.launchURL(loginData.BASE_URL)
    await lp.loginToApplication(loginData.USERNAME, loginData.PASSWORD)
    db = new DashboardPage(page)
    await expect(db.Logout_button).toBeVisible()
    await db.logOut()
    await expect(lp.usernameTxt).toBeVisible()
    
})

test("verify Blank data", async({page})=>{
    
    lp = new LoginPage(page)
    await lp.launchURL(loginData.BASE_URL)
    await lp.loginToApplication("", loginData.PASSWORD)
    await lp.RequiredEmailMsg.waitFor({state:"visible"})
    await expect(lp.RequiredEmailMsg).toHaveText("*Email is required")
    await lp.loginToApplication(loginData.USERNAME,"")
    await lp.RequiredPasswordMsg.waitFor({state:"visible"})
    await expect(lp.RequiredPasswordMsg).toHaveText("*Password is required")
    

})