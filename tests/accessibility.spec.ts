import {test} from '@playwright/test';

import AxeBuilder from '@axe-core/playwright';

test('accessibility test',async({page},testInfo)=>{
    await page.goto('https://www.w3.org/');

    let scanresult = await new AxeBuilder({page}).analyze();

    testInfo.attach('Accessibility result ',{
        body:JSON.stringify(scanresult,null,2),
        contentType:'application/json'
    })

})



