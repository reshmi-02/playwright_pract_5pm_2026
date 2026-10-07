import {test} from '@playwright/test';

test('cookies handling',async({browser})=>{
       let context=await browser.newContext()
     let page = await context.newPage();

     //add cookies 

     context.addCookies([{
        name:'mycookie',
        value:'priya',
        url:'https://testautomationpractice.blogspot.com/'
     }])


     await page.goto('https://testautomationpractice.blogspot.com/');

    let allcookies = await context.cookies()
     console.log(allcookies);

     console.log(allcookies[0]);

     //delete

     await context.clearCookies();

     allcookies=await context.cookies();
     console.log(allcookies);
     
     
     
})