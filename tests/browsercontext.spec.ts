import {chromium, test} from '@playwright/test'

test('browser context',async()=>{

    //browser 
    let browser = await chromium.launch()

    //profile
    let context = await browser.newContext()

    //page1
    let page1 = await context.newPage();

    let page2 = await context.newPage();

    await page1.goto('https://www.facebook.com/')

    await page2.goto('https://www.google.com/')

   await  page2.waitForTimeout(3000);
})