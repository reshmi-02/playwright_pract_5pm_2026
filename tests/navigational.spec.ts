import {test,expect, Locator} from '@playwright/test'


test('navigational',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/');

    await page.waitForLoadState('load');

    let checkbox:Locator = page.getByText('Checkboxes');
 
    await checkbox.click();

    await page.waitForURL('**/checkboxes')


    await page.reload();

    await page.goBack();

    await page.goForward();

    await page.close();

})