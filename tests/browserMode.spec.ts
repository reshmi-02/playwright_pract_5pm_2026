import {chromium, test} from '@playwright/test'


test('browsermode',async()=>{

    // let browser = await chromium.launch({headless:true})
    let browser = await chromium.launch()


    let context = await browser.newContext({
        // viewport:{width:1400,height:700},
        // locale:'it-IT',
        // ignoreHTTPSErrors:true
    });

    let page = await context.newPage();

    await page.goto('https://expired.badssl.com/');



    await page.waitForTimeout(3000);

})