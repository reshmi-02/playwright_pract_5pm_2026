import { test, expect } from '@playwright/test';


test('frame handling', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //    await  page.locator("input[type='text']").fill('playwright')

    //approach 1 

    //   let singleframe =  page.frame({url:'https://demo.automationtesting.in/SingleFrame.html'})

    //   await singleframe?.locator("input[type='text']").fill('playwright');

    //approach2 
    // let singleframe = page.frame({ name: 'SingleFrame' })
    // await singleframe?.locator("input[type='text']").fill('playwright');


    //approach3 
//     let singleframe = page.frameLocator('iframe#singleframe');
//     await singleframe?.locator("input[type='text']").fill('playwright');


//     await  page.locator('a[href="#Multiple"]').click();


//     let nestedframe1 = page.frameLocator('iframe[src="MultipleFrames.html"]');
//     var nestedframe2;
//     if(nestedframe1){
//         nestedframe2 =  nestedframe1.frameLocator('iframe[src="SingleFrame.html"]')
//         await nestedframe2.locator('input[type="text"]').fill('playwright')
//     }

//    console.log(await nestedframe1.getByText('Nested iFrames').innerText());
   
//     await page.waitForTimeout(3000);

  let frame3 =   page.frameLocator('frame[src="frame_3.html"]');

  let nestedframe = frame3.frameLocator('iframe[src="https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true"]');

  let options = await  nestedframe.locator('div.AB7Lab').all()

  await options[0].click();

  await page.waitForTimeout(3000);
})