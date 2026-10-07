import {test,expect, Locator} from '@playwright/test'

test('static table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

   let tablebody :Locator = page.locator("table[name='BookTable'] tbody");

   let tablerows :Locator =  tablebody.locator('tr')
   
   expect(await tablerows.count()).toBe(7);

   //number of headers 

   let tableheader:Locator = tablerows.locator('th');
   console.log(await tableheader.count());
   
   //get all row data 

   let allRowLocator =await tablerows.all()  //[tr,tr,tr,tr]
    console.log(allRowLocator);
    
    console.log(await allRowLocator[0].locator('th').allInnerTexts() );
    
    for(let row of allRowLocator.slice(1)){
        console.log( await row.locator('td').allInnerTexts() );
    }


   console.log(await tablerows.nth(2).locator('td').allInnerTexts());
   

   //print the book name where author name mukesh


   for(let row of allRowLocator.slice(1)){
    //bookname , author , subject , price
       let bookname : string = await  row.locator('td').nth(0).innerText(); //Learn Java 
       let authorname :string= await row.locator('td').nth(1).innerText(); //Mukesh

       if(authorname=='Mukesh'){
            console.log(`${bookname} is wriiten by ${authorname}`);       
       }

   }


   //total price of all books 

   let totalprice :number = 0;

   for(let row of allRowLocator.slice(1)){

       let tabletd :Locator = row.locator('td'); //[td,td,td,td]

       totalprice = totalprice+parseInt(await tabletd.nth(3).innerText());
   }

   console.log(`total price : ${totalprice}`);
   

})