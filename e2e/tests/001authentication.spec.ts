import { test, expect } from "@playwright/test"
import { USERPROFILS } from "../const/users"
import { URLS } from "../const/urls"
import { ERRORMESSAGES } from './../const/errorMessages';
import { goTo } from "../utils/utils"
import { signin, signup, feedAuthenticationForm  } from "../utils/authentication"

test.describe("Tests related to authentication", () => {
  test("Test signup", async({page}) => {
    await goTo(page, URLS.SIGNIN)
    // test switch button signin to signup
    const switchButton = await page.getByTestId('button-input-switch')
    await switchButton.click()
    const url = page.url()
    await expect(url).toBe(URLS.SIGNUP)
    // test bad creadentials error for signup
    const signupButton = await page.getByTestId('button-input-signup')
    await signupButton.click()
    const errorMessages = await page.getByTestId('error-message')
    await expect(errorMessages.nth(0)).toHaveText(ERRORMESSAGES.pseudoMin)
    await expect(errorMessages.nth(1)).toHaveText(ERRORMESSAGES.checkPassword)
    await expect(errorMessages.nth(2)).toHaveText(ERRORMESSAGES.passwordMin)

    await feedAuthenticationForm(page, { username :'azertyyyyyyyyyyyyyyyyyyyyyyyyyy', password: 'azertyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy' })
    await signupButton.click()
    await expect(errorMessages.nth(0)).toHaveText(ERRORMESSAGES.pseudoMax)
    await expect(errorMessages.nth(1)).toHaveText(ERRORMESSAGES.checkPassword)
    await expect(errorMessages.nth(2)).toHaveText(ERRORMESSAGES.passwordMax)
    // test signin with good credentials
    await signup(page, USERPROFILS.USER1)
  })
  test("Test signin", async({page}) => {
    await goTo(page, URLS.SIGNIN)
    const url = page.url()
    await expect(url).toBe(URLS.SIGNIN)
    // test bad creadentials error for signin
    const errorMessage = await page.getByTestId('error-message')
    const signinButton = await page.getByTestId('button-input-signin')
    await signinButton.click()
    await expect(errorMessage).toHaveText(ERRORMESSAGES.badCredentials)
    // test signin with good credentials
    await signin(page, USERPROFILS.USER1)
  })
})