
import {test,expect} from '@playwright/test'

test("Verify the RS Home Page", async({page}) => {

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
const pageHeader = page.locator('h1.title').first()
await expect(pageHeader).toContainText("Rahul Shetty Academy")

})

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