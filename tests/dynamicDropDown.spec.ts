import {test,expect, Locator} from '@playwright/test'


test('dynamic dropdown',async({page})=>{
    await page.goto('https://www.flipkart.com/');

  let search :Locator=  page.locator("(//input[@placeholder='Search for Products, Brands and More'])[1]");

  await search.fill('mobile');

  await page.locator("//span[@class='b3wTlE']").click();

  await search.click();

  await search.fill('mobile');

  let options :Locator= page.locator('form[action="/search"] a ');

  await expect(options).toHaveCount(8);

    await page.waitForTimeout(8000);

    


})