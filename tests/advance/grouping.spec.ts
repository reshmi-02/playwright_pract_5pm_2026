import {test} from '@playwright/test'

test.describe('Loginmodule',async()=>{

test('login 1',{tag:'@smoke'}  ,async()=>{
    console.log('login1');
    
})


test('login2',{tag:'@sanity'},async()=>{
    console.log('login2');
    
})



})


test.describe('RegModule',async()=>{
    

test('reg1',{tag:['@sanity','@regression']} ,async()=>{
    console.log('reg1');
    
})



test('reg2',{tag:['@smoke','@sanity']},async()=>{
    console.log('reg2');
    
})
})


test('product 1',{tag:'@regression'} , async()=>{
    console.log('product1');
    
})



