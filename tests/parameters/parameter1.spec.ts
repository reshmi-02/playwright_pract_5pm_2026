import {expect, test} from '@playwright/test'

let datas :string[] = ['laptop','computer','gift card']

for(let item of datas){


    test(`Search item : ${item}`,async({page})=>{
         await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('#small-searchterms').click();
     await page.locator('#small-searchterms').fill(item);
     await page.getByRole('button', { name: 'Search' }).click();
    let element = page.locator('h2.product-title a').nth(0)
    await expect(element).toContainText(item,{ignoreCase:true})

    })

}




