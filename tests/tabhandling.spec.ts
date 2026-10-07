import { chromium, test } from '@playwright/test';

test('tabs handling', async () => {

    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page1 = await context.newPage();
    await page1.goto('https://testautomationpractice.blogspot.com/');

    //    await context.waitForEvent('page');
    //    await page1.locator('button[onclick="myFunction()"]').click();

    let [page2]=  await  Promise.all([context.waitForEvent('page'),page1.locator('button[onclick="myFunction()"]').click()])
    

    // console.log(await page1.title());
    // console.log(await page2.title());
    
    

    let pages = context.pages();  //[1page,2page]
    console.log(pages.length);
    console.log(await pages[0].title());
    console.log(await pages[1].title());

    await page1.waitForTimeout(3000);
})