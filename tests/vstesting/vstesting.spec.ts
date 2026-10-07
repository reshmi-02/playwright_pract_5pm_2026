import {expect, test} from '@playwright/test'

test('vs testing',async({page})=>{

    await page.goto('https://www.google.com/');

    // expect(await page.screenshot()).toMatchSnapshot('homepage.png');

   await expect(page).toHaveScreenshot('homepage.png')

   let element = '';

//    expect(element.screenshot()).

})