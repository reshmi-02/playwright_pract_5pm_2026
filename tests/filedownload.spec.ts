import {expect, test} from '@playwright/test'

import fs from 'fs';

test('txt file download',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')

   await page.locator('textarea#inputText').fill('welcome');

   await page.locator('button#generateTxt').click()

//    await page.waitForEvent('download')
//    await page.locator('a#txtDownloadLink').click();

   let [download] = await Promise.all([page.waitForEvent('download'),page.locator('a#txtDownloadLink').click()])

   let date = new Date();
   let path = `tests\\download\\welcome${date.getMilliseconds()}.txt`;

   await download.saveAs(path);

   //file exist 
   let result = fs.existsSync(path)

   expect(result).toBeTruthy();

   //delete file 

   if(result){
    fs.unlinkSync(path);
   }

})
