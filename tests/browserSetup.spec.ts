
import {expect, test} from '@playwright/test';

test('verification of google page',async({page})=>{

   await  page.goto('https://www.google.com/');
  
   await expect(page).toHaveTitle('Google');

   await expect(page).toHaveURL('https://www.google.com/')
    
})


test('verification of facebook page',async({page})=>{

   await  page.goto('https://www.facebook.com/')

  await  expect.soft(page).toHaveTitle('Facebook');

  await expect.soft(page).toHaveURL('https://www.facebook.com/');

})