import {test} from '@playwright/test';


test('screenshot demo',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    //page screen shot 
    let date = new Date();
    await page.screenshot({path:`tests/screenshots/pagescreenshot${date.getMilliseconds()}.png`})


    //full page screenshot 
        await page.screenshot({path:`tests/screenshots/fullpagescreenshot${date.getMilliseconds()}.png`,fullPage:true})

    //specific element screen shot 
    let image = page.locator("img[alt='Tricentis Demo Web Shop']");

   await image.screenshot({path:`tests/screenshots/specificElementScreenshot${date.getMilliseconds()}.png`})

    //specific part 
    let part = page.locator("div.header-menu");
   await part.screenshot({path:`tests/screenshots/specificPartScreenshot${date.getMilliseconds()}.png`})

})