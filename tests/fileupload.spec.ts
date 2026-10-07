import {expect, test} from '@playwright/test'

test('single file upload',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   await  page.locator('input#singleFileInput').setInputFiles('tests\\files\\selenium.txt')

   await page.locator("//button[text()='Upload Single File']").click();

   let text =await page.locator('p#singleFileStatus').innerText();

   expect(text).toContain('selenium')

   await page.waitForTimeout(2000);

})



test('multi file upload',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   await  page.locator('input#multipleFilesInput').setInputFiles(['tests\\files\\selenium.txt','tests\\files\\testng.txt'])

   await page.locator("//button[text()='Upload Multiple Files']").click();

   let text =await page.locator('p#multipleFilesStatus').innerText();

   expect(text).toContain('selenium')
   expect(text).toContain('testng')

   await page.waitForTimeout(2000);

})