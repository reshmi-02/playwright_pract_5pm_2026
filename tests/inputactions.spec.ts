import {test,expect, Locator} from '@playwright/test'


test('input actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   let input :Locator=   page.getByPlaceholder('Enter Name');

   //tobevisible 
  await  expect(input).toBeVisible();

  //tobeenabled 
  await expect(input).toBeEnabled();

  //toBeDisabled() 
  
  //toHaveAttribute();

  await expect(input).toHaveAttribute('maxlength','15')

  //getattribute 

   let data  : string | null = await input.getAttribute('id');
   expect(data).toBe('name');

   //fill 
   await input.fill('kavi');

   //inputValue();

   let value :string =await input.inputValue()
   expect(value).toBe('kavi');

  let title :Locator =  page.getByText('Data Entry Form');

   let text :string |null= await title.textContent()
   expect(text).toBe('Data Entry Form')

  await expect(title).toHaveText('Data Entry Form')

  await expect(title).toContainText('Entry')


 await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

 await expect(page).toHaveTitle('Automation Testing Practice')

 console.log(await page.title());

  console.log( page.url());
  

})