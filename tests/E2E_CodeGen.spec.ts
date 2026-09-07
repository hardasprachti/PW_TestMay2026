import { test, expect } from '@playwright/test';

test('CodeGen test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('prachtitest09@gmail.com');
  await page.getByRole('textbox', { name: 'email@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).fill('Ind');
  await page.getByRole('button', { name: ' India' }).click();
  await page.getByText('Payment Method Credit').click();
  await page.getByText('Payment Method Credit').click();
  await page.getByText('Place Order').click();
  await expect(page.getByRole('button', { name: 'Click To Download Order' })).toBeVisible();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});