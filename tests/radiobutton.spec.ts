import {test,expect, Locator} from '@playwright/test'

test('radio button',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let gender : Locator = page.getByLabel('Female');

    expect(await gender.isChecked()).toBe(false);
    expect(await gender.isChecked()).toBeFalsy()

    await gender.check();

    expect(await gender.isChecked()).toBe(true);
    expect(await gender.isChecked()).toBeTruthy()

})