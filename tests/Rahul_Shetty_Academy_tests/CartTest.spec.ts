
//import {test,expect} from '@playwright/test'
import { Page } from '@playwright/test'
import { LoginPage } from '../../pages/Rahul_Shetty_Academy/LoginPage'
import { CartPage } from '../../pages/Rahul_Shetty_Academy/CartPage'
import {test,expect} from '../../utils/myfixtures'
import data from '../../testData/CommonData.json'





let cp:CartPage

 
  test("Verify Empty cart Mesage", async({loggedInPage}) =>{

        await loggedInPage.goto(data.CART_LINK)
        cp = new CartPage(loggedInPage)
        expect(await cp.emptyCart_message).toHaveText("No Products in Your Cart !")
    })