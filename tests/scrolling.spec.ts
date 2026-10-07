import {test} from '@playwright/test';


test('scrolling',async({page})=>{

    await page.goto('https://en.wikipedia.org/wiki/India');

    // await page.mouse.wheel(0,3000);
    let dance = page.locator('h3#Dance');
    await dance.scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000);    

})