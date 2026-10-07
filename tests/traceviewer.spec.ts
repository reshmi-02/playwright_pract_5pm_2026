import {test,expect} from '@playwright/test'



test('traceviewer' ,async({page,context})=>{

    await context.tracing.start({
        screenshots:true
    })

     await page.goto('https://demowebshop.tricentis.com/');
      await page.locator('#small-searchterms').click();
      await page.locator('#small-searchterms').fill('laptop');
      await page.getByRole('button', { name: 'Search' }).click();
      await expect(page.locator('h2')).toContainText('14.1-inch Laptop');

      await context.tracing.stop({
        path:'trace.zip'
      })
})