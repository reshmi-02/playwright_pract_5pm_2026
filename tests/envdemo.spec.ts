import {test} from '@playwright/test';

import {ENV} from './util/envUtil'


test('env test' , async({page})=>{
    await page.goto(ENV.baseurl);
})