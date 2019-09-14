import {element, by, browser} from "protractor";
import locators = require('./product_page_locators');

export class product_page_checks{
    public async getProductName():Promise<string>{
        return await element(locators.LOC_ProductName).getText()
    }
    public async getLoginPageHeader():Promise<string>{
        return await element(locators.LOC_LoginPageHeader).getText()
    }

}