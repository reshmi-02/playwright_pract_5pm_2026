import { Locator, Page } from "@playwright/test";

export class HomePagePom{ 

    //create a private and readonly variable 
    private readonly page :Page;
    private readonly loginLink :Locator;
    private readonly regLink:Locator;

    //constructor 
    constructor(page:Page){

        this.page=page;
        this.loginLink=page.locator('a#login2')
        this.regLink=page.locator('a#signin2')
    }


    //methods and actions 

    async getLoginLink():Promise<Locator>{
        return  this.loginLink;
    }


    async getRegLink():Promise<Locator>{
        return this.regLink;
    }


    async clickLoginLink():Promise<void>{
       await this.loginLink.click();
    }


    async clickRegLink():Promise<void>{
        await this.regLink.click();
    }
}