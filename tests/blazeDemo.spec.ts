
import {test} from '@playwright/test';

import {LoginPagePom} from './pom/LoginPom';
import { HomePagePom } from './pom/HomepagePom';

test('blazedemo login',async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    //setup 
    let loginpom = new LoginPagePom(page);
    let homepom = new HomePagePom(page);


    //approach1 - get
    // await (await homepom.getLoginLink()).click();
    // await (await loginpom.getUsername()).fill('reshmi123');
    // await (await loginpom.getPassword()).fill('reshmihashini');
    // await (await loginpom.getLoginButton()).click();


    //approach2 
    // await homepom.clickLoginLink();
    // await loginpom.setUsername('reshmi123');
    // await loginpom.setPassword('reshmihashini')
    // await loginpom.clickLoginButton();

    //approach3 
    await homepom.clickLoginLink();
    await loginpom.performLogin('reshmi123','reshmihashini');
    
})