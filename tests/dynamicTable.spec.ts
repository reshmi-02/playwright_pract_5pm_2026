
import {test,expect, Locator} from '@playwright/test';


test('dynamic table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let tableRows : Locator [] = await page.locator('table#taskTable tbody tr').all();
    // [tr,tr,tr,tr]

    let cpuvalue : string|null =null ;
    
    for(let row of tableRows){  //2

       let tabletd:Locator=  row.locator('td'); //[td,td,td,td,td]

       let browsername :string =await tabletd.nth(0).innerText();


       if(browsername=='Chrome'){

          cpuvalue=await row.locator('td:has-text("%")').innerText()

       }
    }


    console.log(`cpu value : ${cpuvalue}`);

    let value =await page.locator('strong.chrome-cpu').innerText();
    
    let match = false;

    if(cpuvalue==value){
        match=true
    }
    else{
        match=false
    }

    expect(match).toBeTruthy();
})