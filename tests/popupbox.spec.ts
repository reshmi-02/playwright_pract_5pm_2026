import {test,expect} from '@playwright/test';


test('popup box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        expect(dialog.type()).toBe('alert');
        console.log(dialog.message());
        dialog.accept();
    })

   await page.locator('button#alertBtn').click();

  

   await page.waitForTimeout(2000);

})



test('confirm box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        expect(dialog.type()).toBe('confirm');
        console.log(dialog.message());
        dialog.accept();
    })

   await page.locator('button#confirmBtn').click();

   await page.waitForTimeout(2000);

})


test.only('prompt alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    page.on('dialog',(dialog)=>{
        console.log(dialog.type());
        expect(dialog.type()).toBe('prompt');
        console.log(dialog.message());

        
        dialog.accept('Reshmi');
    })

   await page.locator('button#promptBtn').click();

   await page.waitForTimeout(2000);

})