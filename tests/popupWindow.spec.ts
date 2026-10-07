import {expect, test} from '@playwright/test'

test('popup window',async({browser})=>{

    let context =await  browser.newContext()
    let page1 = await context.newPage();

    await page1.goto('https://testautomationpractice.blogspot.com/')

    // await page1.waitForEvent('popup');
    // await page1.locator('button#PopUp').click();


   await Promise.all([page1.waitForEvent('popup'),page1.locator('button#PopUp').click()])

    // console.log(await page1.title());
    // console.log(await page2.title());

    let pages = context.pages();
    await page1.waitForTimeout(3000);

    console.log(pages.length);
    console.log(pages[0].url());
    console.log(pages[1].url());
    // console.log( pages[2].url());
    


    await page1.waitForTimeout(3000);
    
    
})


test.only('authentication popup',async({browser})=>{

//    let context=await browser.newContext()
//  let page = await context.newPage();

//  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')

//  let element = page.locator("//p[contains(text(),'Congratulations!')]")

// await expect(element).toBeVisible();


   let context = await browser.newContext({httpCredentials:{username:"admin",password:"admin"}})

   let page = await context.newPage();

   await page.goto('https://the-internet.herokuapp.com/basic_auth')
//    await page.waitForTimeout(3000);
    let element = page.locator("//p[contains(text(),'Congratulations!')]")
   await expect(element).toBeVisible();
})