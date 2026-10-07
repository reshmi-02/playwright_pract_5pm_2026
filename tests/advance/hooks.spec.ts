import {test,Page, expect} from '@playwright/test';

test.describe.configure({
    mode:"parallel"
})


let page :Page;

test.beforeAll('beforeall hook',async({browser})=>{
    console.log('beforeall hook');

})



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

test.afterAll('afterall',async()=>{
    console.log('afterAll hook');
    
})

test('title verification',async()=>{
    console.log('test01');
    expect(await page.title()).toContain('Demo');
})

test('url verification',async()=>{
    console.log('test02');
    expect( page.url()).toContain('demo')
})
test('test3',async()=>{
    console.log('test03');
    
})

test('test4',async()=>{
    console.log('test04');
    
})