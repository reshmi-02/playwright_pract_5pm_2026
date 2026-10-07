import { Locator, Page } from "@playwright/test";


export class LoginPagePom{

    private readonly page:Page;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;


    constructor(page:Page){

        this.page=page;
        this.username=page.locator('input#loginusername')
        this.password=page.locator('input#loginpassword')
        this.loginButton=page.locator('button[onclick="logIn()"]')

    }


    async getUsername():Promise<Locator>{
        return this.username
    }

    async getPassword():Promise<Locator>{
        return this.password
    }


    async getLoginButton():Promise<Locator>{
        return this.loginButton
    }


    async setUsername(user:string){
       await this.username.fill(user);
    }

    async setPassword(pass:string){
        await this.password.fill(pass);
    }


    async clickLoginButton(){
        await this.loginButton.click();
    }


    async performLogin(user:string,pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }


}