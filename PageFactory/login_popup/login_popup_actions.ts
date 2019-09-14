import {element} from "protractor";
import locators = require('./login_popup_locators');

export class login_popup_actions{
    public async clickCloseIcon(){
        await element(locators.LOC_ClosePopupButton).click();
        console.log("After Clicking Close Button");
    }

}