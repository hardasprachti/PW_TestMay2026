import { Locator, Page } from "playwright";
import { BasePage } from "./base.page";


export class LoginPage extends BasePage {

  
  usernameTxt: Locator
  passwordTxt: Locator
  submitBtn: Locator
  newRegister: Locator
  forgotPswd: Locator
  invalidCredErrorMsg: Locator
  RequiredEmailMsg: Locator
  RequiredPasswordMsg: Locator
  signOut: Locator
  signOutButtonUnhiddden:Locator

  constructor(page: Page) {

    super(page)
    this.usernameTxt = this.page.locator("#userEmail")
    this.passwordTxt = this.page.locator("#userPassword")
    this.submitBtn = this.page.locator("#login").first()
    this.newRegister = this.page.getByRole('link', { name: 'Register' })
    this.forgotPswd = this.page.locator(".forgot-password-link")
    this.invalidCredErrorMsg = this.page.locator(".toast-container")
    this.RequiredEmailMsg = this.page.getByText("*Email is required")
    this.RequiredPasswordMsg = this.page.getByText("*Password is required")
    //this.signOut = this.page.getByText(" Sign Out ")
    //this.signOutButtonUnhiddden = this.page.getByRole('button', { name: 'Sign Out' })


  }



  async loginToApplication(username: string, password: string) {
    await this.usernameTxt.fill(username)
    await this.passwordTxt.fill(password)
    await this.safeClick(this.submitBtn)

  }

  async launchURL(url: string) {
    await this.page.goto(url)
  }
  async navigateRegistration() {
    await this.newRegister.click()
  }

  async forgotPassword() {
    await this.forgotPswd.click()
  }

  /*async logOut() {
    await this.signOut.isVisible()
    await this.signOut.highlight()
    console.log("Sign out checking.,.....")
    //await this.signOut.click()
    //await this.page.getByRole('button', { name: 'Sign Out' }).click()
    await this.signOutButtonUnhiddden.isVisible()
    await this.signOutButtonUnhiddden.highlight()
    await this.signOutButtonUnhiddden.click()
    
  } */

}