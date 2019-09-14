import {element} from "protractor";
import locators = require('./home_page_locators');

export class home_page_actions{
    public async enterSearchText(searchtext: string){
        await element(locators.LOC_SearchBox).sendKeys(searchtext);
        console.log("Entered Text in Search Box");
    }

}