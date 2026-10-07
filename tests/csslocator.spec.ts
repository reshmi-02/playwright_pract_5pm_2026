import {test,expect, Locator} from  '@playwright/test'


test('by id',async({page})=>{

    await page.goto('https://www.google.com/');

   let search :Locator=  page.locator('textarea#ti6dpd');


   await search.fill('playwright');

   await page.waitForTimeout(3000);


})

test('by classname',async({page})=>{

    await page.goto('https://www.google.com/');

   let search :Locator= page.locator('textarea.gLFyf');

   await  search.fill('playwright');

})


test('by  other attributes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input[placeholder='Enter Name']");

   await username.fill('swetha');

})


test('by  multiple attributes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input[placeholder='Enter Name'][id='name']");

   await username.fill('swetha');

})


test('by  contains attributes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input[placeholder*='Name']");

   await username.fill('swetha');

})


test('by  starts with attributes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input[placeholder*='Name']");

   await username.fill('swetha');

})



test('by  ends  with attributes',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input[id$='me']");

   await username.fill('swetha');

})


test('by  or locator',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let username :Locator= page.locator("input#name,input[placeholder='Enter Name']");

   await username.fill('swetha');

})


test.only('child selector ',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

  let child :Locator=   page.locator('div.wikipedia-searchtable>span:nth-child(2)');

  await expect(child).toBeVisible();


  let child2 :Locator = page.locator('div.wikipedia-searchtable>span'); //2 child 
//   1-0 ,2-1 

   await expect(child2.nth(1)).toBeVisible();
   await expect(child2.first()).toBeVisible();
   await expect(child2.last()).toBeVisible();


})


