import { Page } from "playwright-core";

export const goTo = async(page: Page, url: string) =>{
  await page.goto(url)
}