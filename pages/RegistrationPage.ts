import { Locator, Page } from "playwright"


export class RegistrationPage{

    page:Page
    pageHeader:Locator
    firstNameTxt:Locator
    lastNameTxt: Locator
    emailTxt:Locator
    mobileTxt:Locator
    selectOccupation:Locator
    maleRadio:Locator
    femaleRadio:Locator
    passwordTxt:Locator
    confirmPswdTxt:Locator
    adultCheckBox:Locator
    registerBtn:Locator

    constructor(page:Page){
        this.page = page
        this.pageHeader= this.page.locator('h1.login-title')
        this.firstNameTxt = this.page.locator('input#firstName')
        this.lastNameTxt = this.page.locator('input#lastName')
        this.emailTxt = this.page.getByPlaceholder("email@example.com")
        this.mobileTxt = this.page.locator("#userMobile")
        this.selectOccupation = this.page.locator(".custom-select")
        this.femaleRadio = this.page.getByRole("radio", {name:'Female'})
        this.maleRadio = this.page.getByRole("radio", {name:'Male'})
        this.passwordTxt = this.page.locator("#userPassword")
        this.confirmPswdTxt = this.page.locator("#confirmPassword")
        this.adultCheckBox = this.page.locator("input.ng-invalid").last()
        this.registerBtn  = this.page.locator("input.ng-invalid").last()
    }



    
    test("Verify Registration form filling", async({page}) =>{
    
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByRole('link', {name:'Register'}).click()
    await expect(page.locator('h1.login-title')).toContainText("Register")
    const firstNameLocator = page.locator('input#firstName')
    //await expect(firstNameLocator).toHaveValue("First Name")
    await firstNameLocator.fill("Prachi")
    
    const lastNameLocator = page.locator('input#lastName')
    //await expect(lastNameLocator).toHaveValue("Last Name")
    await lastNameLocator.fill("Test")
    
    const emailLocator = page.getByPlaceholder("email@example.com")
    //await expect(emailLocator).toHaveValue("email@example.com")
    await emailLocator.fill("prachtitest09@gmail.com")
    await page.locator("#userMobile").fill("9096169360")
    
    await page.locator(".custom-select").selectOption("Engineer")
    //await expect(emailLocator).toHaveValue("email@example.com")
    
    await page.getByRole("radio", {name:'Female'}).check()
    await expect(page.getByRole("radio", {name:'Female'})).toBeChecked()
    
    await page.locator("#userPassword").fill("Test@123")
    await page.locator("#confirmPassword").fill("Test@123")
    await page.locator("input.ng-invalid").last().check()
    //await page.getByRole("checkbox", {name:' I am 18 year or Older '}).check()
    await page.locator("#login").click()
    
    expect(page.locator("")).toContainText("Account created", {ignoreCase:true})
    
    
    
    
    })
}