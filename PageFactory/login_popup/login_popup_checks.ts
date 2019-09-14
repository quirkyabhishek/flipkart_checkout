import locators = require('./login_popup_locators')
import {element} from "protractor";

export class login_popup_checks{
    async getLoginHeaderName(): Promise<string>{
        return await element(locators.LOC_LoginHeader).getText();
    }
}