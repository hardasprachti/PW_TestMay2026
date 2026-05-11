import { Locator,Page } from "playwright";


export class LoginPage{

    page:Page
    usernameTxt: Locator
    passwordTxt: Locator
    submitBtn: Locator
    newRegister: Locator
    forgotPswd: Locator
    invalidCredErrorMsg : Locator
    RequiredEmailMsg : Locator
 RequiredPasswordMsg : Locator
    
  constructor(page:Page){

    this.page = page
    this.usernameTxt = this.page.locator("#userEmail")
    this.passwordTxt = this.page.locator("#userPassword")
    this.submitBtn = this.page.locator("#login").first()
    this.newRegister = this.page.getByRole('link', {name:'Register'})
    this.forgotPswd = this.page.locator(".forgot-password-link")
    this.invalidCredErrorMsg = this.page.locator(".toast-container")
    this.RequiredEmailMsg = this.page.getByText("*Email is required")
    this.RequiredPasswordMsg = this.page.getByText("*Password is required")
 
 
  }

  

  async loginToApplication(username:string,password:string){
    await this.usernameTxt.fill(username)
    await this.passwordTxt.fill(password)
    await this.submitBtn.click()

  }

  async launchURL(url:string){
    await this.page.goto(url)
  }
  async navigateRegistration()
  {
    await this.newRegister.click()
  }

  async forgotPassword(){
    await this.forgotPswd.click()
  }



}