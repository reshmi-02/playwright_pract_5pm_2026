import {test,expect, Locator,Page} from '@playwright/test'


test('datepicker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let  input : Locator = page.locator('input#datepicker');
    // await input.fill('05/22/2027')

    await input.click();

    let date = "29",month="November",year='2022';


   
    let next = page.locator("//span[text()='Next']");
    let prev = page.locator("//span[text()='Prev']");


    while(true){
         let mon =await page.locator('span.ui-datepicker-month').innerText(); //se
         let yr =await page.locator('span.ui-datepicker-year').innerText(); //26
        if(mon==month && yr==year){
            break;
        }
        else{
          
            let months = [
                'January','February','March','April','May','June','July',
                'August','September','October','November','December'
            ]

            let expecteddate = new Date();
            expecteddate.setMonth(months.indexOf(month));
            let expectedmonth= expecteddate.getMonth();

            let currentdate = new Date();
            let currentMonth = currentdate.getMonth();
            let currentYear = currentdate.getFullYear();
            
    // month>current month && year >=2026 - next 
    //month<current month && year>2026 - next 

   //month < curren month && year<=2026 - prev 
            if( (expectedmonth>=currentMonth && Number(year)>=currentYear) || (expectedmonth<currentMonth && Number(year)>currentYear) )
            {
                await next.click();
            }
            else{
                await prev.click();
            }

        }
    }


    let dates =await page.locator('table.ui-datepicker-calendar a').all()

    for(let e of dates){

        if(await e.innerText()==date){
           await e.click();
        }

    }


    await page.waitForTimeout(3000);

})



test.only(' date picker using function',async({page})=>{
   await datePicker('September','2028','23',page);
})


async function datePicker(month : string , year : string , date :string , page:Page){

     await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.waitForLoadState("load");

    let  input : Locator = page.locator('input#datepicker');
    // await input.fill('05/22/2027')

    await input.click();

    let next = page.locator("//span[text()='Next']");
    let prev = page.locator("//span[text()='Prev']");


    while(true){
         let mon =await page.locator('span.ui-datepicker-month').innerText(); //se
         let yr =await page.locator('span.ui-datepicker-year').innerText(); //26
        if(mon==month && yr==year){
            break;
        }
        else{
          
            let months = [
                'January','February','March','April','May','June','July',
                'August','September','October','November','December'
            ]

            let expecteddate = new Date();
            expecteddate.setMonth(months.indexOf(month));
            let expectedmonth= expecteddate.getMonth();

            let currentdate = new Date();
            let currentMonth = currentdate.getMonth();
            let currentYear = currentdate.getFullYear();
            console.log(currentYear);
            
    // month>current month && year >=2026 - next 
    //month<current month && year>2026 - next 

   //month < curren month && year<=2026 - prev 
            if( (expectedmonth>=currentMonth && Number(year)>=currentYear) || (expectedmonth<currentMonth && Number(year)>currentYear) )
            {
                await next.click();
            }
            else{
                await prev.click();
            }

        }
    }


    let dates =await page.locator('table.ui-datepicker-calendar a').all()

    for(let e of dates){

        if(await e.innerText()==date){
           await e.click();
        }

    }


    await page.waitForTimeout(3000);

}