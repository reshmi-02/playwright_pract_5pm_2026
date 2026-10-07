import {expect, test} from '@playwright/test'



// test.only('only',async()=>{
//     console.log('test only');
    
// })


test.skip('skip',async()=>{
    console.log('test skip');
    
})


test.fixme('fixme',async()=>{
    console.log('test fixme');
    
})


test.fail('fail',async()=>{
    console.log('test fail');
    expect(1).toBe(2);
})

test('slow',async()=>{

    test.slow();

    console.log('test slow');
    

})