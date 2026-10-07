import {test} from '@playwright/test';

test('keyboard actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');

    let input = page.locator("input#name");

    await input.focus();

    await input.fill('playwright');

    // await page.keyboard.insertText()

    // await page.keyboard.type()

    //ctrl+a

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control')

    //ctrl+c
    
    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control')

    //tab
    await page.keyboard.press('Tab');


    //ctrl+v
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control')


    await page.waitForTimeout(3000);
    

})