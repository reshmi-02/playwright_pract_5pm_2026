import {test,expect, Locator} from '@playwright/test'

test('pagination table',async({page})=>{

    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

    // let tablerows :Locator[] =await page.locator('table#example tbody tr').all();

    // for(let row of tablerows){

    //     console.log(await row.innerText());      
    // }



    while(true){

    let tablerows :Locator[] =await page.locator('table#example tbody tr').all();

     for(let row of tablerows){

        console.log(await row.innerText());   //tr
        
        row.locator('td').allInnerTexts(); //[td,td,td,td]
    }

    let nextbutton = page.locator('button[aria-label="Next"]');

    let disablebuton =await nextbutton.getAttribute('class')

    if(disablebuton?.includes('disabled')){
        break;
    }

    await nextbutton.click();

    await page.waitForTimeout(2000);

    }


})



test('entries selection', async({page})=>{

    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html')

    let dropdown = page.locator('select#dt-length-0');

   await dropdown.selectOption({label:'25'})

    let tablerows :Locator = page.locator('table#example tbody tr');

    expect(tablerows).toHaveCount(25);

})


test.only('pagination search box',async({page})=>{
    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html')

    let search = page.locator("input[type='search']");
    await search.fill('Serge Baldwin');

    let tablerows :Locator[] = await page.locator('table#example tbody tr').all();

    if(tablerows.length>0){
        let match = false;

        for(let row of tablerows){
            let data =await row.innerText();
            if(data.includes('Serge Baldwin')){
                match=true;
                break;
            }
        }

         expect(match).toBeTruthy();
    }
    else{
        console.log('no matching records found');
    }

})