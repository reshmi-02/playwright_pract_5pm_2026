import {test} from '@playwright/test'


test('mouse hover',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');

    let button = page.locator("//button[text()='Point Me']");

    let option =   page.locator('div.dropdown-content a').nth(1);

    await button.hover();

    await option.hover();

    await option.click();

})


test('right click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');

    let button = page.locator("//button[text()='Point Me']");

    await  button.click({button:'right'})

    await page.waitForTimeout(3000);
})



test('double click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');

   
    let button= page.locator("//button[text()='Copy Text']");

    await button.dblclick();

    await page.waitForTimeout(3000);
})



test.only('drag and drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');

   
   let drag = page.locator("div#draggable");

   let drop = page.locator('div#droppable');


   //approach1 

//    await drag.hover();

//    await page.mouse.down();

//    await drop.hover();

//    await page.mouse.up();



//approach2 

await drag.dragTo(drop);


    await page.waitForTimeout(3000);
})