import {element} from "protractor";
import locators = require('./home_page_locators');

export class home_page_checks{
    async getSearchBoxLabel():Promise<string>{
        return await element(locators.LOC_SearchBox).getAttribute('placeholder')
    }
}