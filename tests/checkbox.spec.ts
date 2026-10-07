import {test,expect, Locator} from '@playwright/test'

test('select single option' ,async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let checkbox :Locator =  page.getByLabel('Sunday');

    await expect(checkbox).not.toBeChecked();

    await checkbox.check();

    await expect(checkbox).toBeChecked();

})



test.only('select all the checkbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // let checkboxes :Locator= page.locator("input[id*='day']"); //7


//     let days :string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday',
//         'Friday','Saturday'
//     ]    

//    let checkboxes:Locator[] =  days.map((e)=>{

//        return page.getByLabel(e);

//     })

    let checkboxes :Locator[]=await page.locator("input[id*='day']").all()


    //check all the boxes
    expect(checkboxes.length).toBe(7);

    for(let checkbox of checkboxes){

         await expect(checkbox).not.toBeChecked();

          await checkbox.check();

         await expect(checkbox).toBeChecked();

    }


    //uncheck all the boxes 
    // for(let checkbox of checkboxes){

    //     await checkbox.uncheck();
        
    //    await expect(checkbox).not.toBeChecked();

    // }


    //uncheck last 3 elements 

    for(let checkbox of checkboxes.slice(-3)){

         await checkbox.uncheck();
        
        await expect(checkbox).not.toBeChecked();

    }


    // for(let checkbox of checkboxes){

    //    let data :string|null =await checkbox.getAttribute('id');

    //    if(data=='tuesday'){
    //    await checkbox.check();

    //     expect(checkbox).toBeChecked();
    //    }

    // }


    //toggle 
    for(let checkbox of checkboxes){

        if(await checkbox.isChecked()){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else{
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

    }


    await page.waitForTimeout(3000);
})


