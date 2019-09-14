import {element,by,browser} from "protractor";
import locators = require('./search_result_locators');

export class search_result_actions {
    public async selectBrand() {
        await element(locators.LOC_BrandCheckbox).click();
        console.log("After Selecting Brand");
    }
    public async clickDropdown(){
        await element(locators.LOC_PriceDropdown).click();
        console.log("Clicked on Price Dropdown")
    }
    public selectDropdownbyNum(optionNum) {
        if (optionNum) {
            element(locators.LOC_PriceDropdown).all(by.tagName('option')).then(function(options) {
                options[optionNum].click();
            });
        }
    }
    public async selectFirstProduct(){
        await element(locators.LOC_FirstProduct).click();
        console.log("Selected First Product")
    }
}