import {test,Page, expect} from '@playwright/test';

let page :Page;

test.beforeEach('beforeeach',async({browser})=>{
    // console.log('beforeEach hook');
    
    let context = await browser.newContext();

     page = await context.newPage();
    
    await page.goto('https://demowebshop.tricentis.com/')
})


test.afterEach('aftereeach',async()=>{
    console.log('afterEach hook');
    await page.close()
})


test('title verification',async()=>{
    console.log('test01');
    expect(await page.title()).toContain('emo');
})

test('url verification',async()=>{
    console.log('test02');
    expect( page.url()).toContain('demo')
})
