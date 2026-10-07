import {test,expect, Locator} from '@playwright/test'


test('bootstrap dropdown',async({page})=>{
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html#')

    await page.locator('button#menu1').click();

    let options :Locator[]=await page.locator("ul[role='menu'] a").all();

    for(let option of options){

        if(await option.innerText()=='HTML'){
            console.log(await option.innerText());
            await option.click();   
        }

    }

})