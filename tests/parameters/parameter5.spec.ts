import {expect, test} from '@playwright/test';

import * as XLSX from 'xlsx';

let path = "testdata/logindata.xlsx";

let workbook = XLSX.readFile(path);

 let sheetNames = workbook.SheetNames

let sheetName = sheetNames[0];

let sheet =  workbook.Sheets[sheetName]

let datas : any = XLSX.utils.sheet_to_json(sheet) //[{},{},{}]

for(let {email,pass,validity} of datas){

    test(`login test for ${email} `,async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('a.ico-login').click();

    console.log(email,pass,validity);

    let user= page.locator('input#Email');

    await user.click();
    await user.fill(email);

    let password = page.locator('input#Password');
    await password.click();
    await password.fill(pass);

    await page.locator('input[value="Log in"]').click();

    if(validity=='valid'){
        await expect(page.locator("a.ico-logout")).toBeVisible()
    }
    else{
        expect(page.url()).toContain('login');
    }

    })

}
