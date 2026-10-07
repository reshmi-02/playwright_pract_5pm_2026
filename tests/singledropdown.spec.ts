import {test,expect, Locator} from '@playwright/test';

test('single dropdown',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        let singleDropDown :Locator=  page.locator('select#country');

       await expect(singleDropDown).toBeVisible();

       //select by visible text
    //    await singleDropDown.selectOption('United Kingdom')


    //select by value attribute 

    // await singleDropDown.selectOption({value:'germany'})


    //select by label 
    // await singleDropDown.selectOption({label:'Japan'})


    //select by index 
    await singleDropDown.selectOption({index:4})

    console.log(await singleDropDown.inputValue());
    
    expect( await singleDropDown.inputValue()).toBe('france')


    //get all options 
    // let options : Locator[] =await page.locator('select#country option').all()  //10 options 

    // for(let option of options){

    //         console.log( await option.innerText());
            
    // }

    // let length= await options.count()
    // expect(length).toBe(10);

    let options : Locator = page.locator('select#country option')  //10 options 

    let alloptionText:string[] =(await options.allInnerTexts()).map((e)=>{
      return  e.trim();
    })
    console.log(alloptionText);

    // console.log( alloptionText.map((e)=>{
    //     return e.trim()
    // }));
    
    

       await page.waitForTimeout(2000);
})