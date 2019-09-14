import locators = require('./search_result_locators');
import {element} from "protractor";

export class search_result_checks{
    public async getAppliedFilters():Promise<string>{
        return await element.all(locators.LOC_FilterText).getText();
    }
    public async getSearchTextName():Promise<string>{
        return await element(locators.LOC_SearchTestLabel).getText();
    }
}