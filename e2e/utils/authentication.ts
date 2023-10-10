import { Authentication } from './../../src/types/authentication.type';
import { expect } from "@playwright/test"
import { URLS } from './../const/urls'
import { goTo } from './utils'
import { Page } from "playwright-core";

export const feedAuthenticationForm = async(page: Page, user: Authentication): Promise<void> => {
  const { username, password } = user
  const userNameInput = await page.getByLabel('Pseudo')
  const passwordInput = await page.getByLabel('Mot de passe', { exact: true })

    // fill the form with username and password
    await userNameInput.click()
    await userNameInput.fill(username)
    await passwordInput.click()
    await passwordInput.fill(password)
}

export const signup = async(page: Page, user: Authentication): Promise<void> => {
  await goTo(page, URLS.SIGNUP)
  await feedAuthenticationForm(page, user)

  // test if we arrive on home page
  const signupButton = await page.getByTestId('button-input-signup')
  await signupButton.click()
  await expect(page.getByTestId('button-input-signin')).toBeVisible()
}

export const signin = async(page: Page, user: Authentication): Promise<void> => {
  await goTo(page, URLS.SIGNIN)
  await feedAuthenticationForm(page, user)

  // test if we arrive on home page
  const appBarUsername = await page.getByTestId('app-bar-username')
  const signinButton = await page.getByTestId('button-input-signin')
  await signinButton.click()
  await expect(appBarUsername).toHaveText(user.username)
}