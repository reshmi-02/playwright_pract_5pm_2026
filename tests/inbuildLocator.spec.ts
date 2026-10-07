import {Locator, test,expect} from '@playwright/test';


test('get element by alt attribute',async({page})=>{

   await page.goto('https://www.nopcommerce.com/en')

   let logo :Locator = page.getByAltText('nopCommerce')  //img tag 

   await expect(logo).toBeVisible()

})


test('get by visible text',async({page})=>{

    await page.goto('https://www.nopcommerce.com/en?srsltid=AfmBOooqGwandjyPPIqUdavDKSPg3T2rpdszA6d22k9sQfN9d9oFnDHw');


   let head : Locator=  page.getByText('Free and open-source eCommerce platform');

   await expect(head).toBeVisible();

})

test('get element by role',async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

   let button  :Locator= page.getByRole('button',{name:'Primary Action'});

   await expect(button).toBeVisible();

   await button.click();

})


test('get element by label',async({page})=>{
   
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

  let email : Locator=  page.getByLabel('Email Address:');

  await expect(email).toBeVisible();

  await email.fill('priya@gmail.com');

  await page.waitForTimeout(3000);

})



test('get element by placeholder',async({page})=>{
   
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

  let fullname :Locator=  page.getByPlaceholder('Enter your full name');

  await expect(fullname).toBeVisible();

  await fullname.fill('priya');

  await page.waitForTimeout(3000);

})



test('get element by title',async({page})=>{
   
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

  let link : Locator=  page.getByTitle('Home page link');

  await expect(link).toBeVisible();

  await link.click();

})


test.only('get element by testid',async({page})=>{
   
   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

   let element :Locator = page.getByTestId('profile-name');  //h3

  await expect(element).toBeVisible();

  await expect(element).toHaveText('John Doe')
 

})