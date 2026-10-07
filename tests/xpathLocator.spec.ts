import {test,expect, Locator} from '@playwright/test';


test('by attribute',async({page})=>{

    await page.goto('https://www.google.com/')

    let search :Locator = page.locator("//textarea[@title='Search']");

   await expect(search).toBeVisible();

   await search.fill('playwright')
})


test('by text method',async({page})=>{

    await page.goto('https://www.google.com/');

  await  page.locator("//a[text()='Gmail']").click();

})