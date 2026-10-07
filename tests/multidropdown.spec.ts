import {test,expect} from '@playwright/test'


test('multi drop down', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let multiDropDown = page.locator('select#colors');

    // await multiDropDown.selectOption(['Red','Green'])

    // await multiDropDown.selectOption(['blue','white'])

    // await multiDropDown.selectOption([{label:'Red'},{label:'Green'}])

    await multiDropDown.selectOption([{index:0},{index:2}])

    await page.waitForTimeout(2000);


    let options = page.locator('select#colors option');

    await expect(options).toHaveCount(7);


    let alloptions = (await  options.allTextContents()).map((e)=>{

        return  e.trim();

     })

     let sortedOptions = [...alloptions].sort();

    console.log(sortedOptions);
    

})