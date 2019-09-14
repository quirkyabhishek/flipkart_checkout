import {element, by, browser} from "protractor";
import locators = require('./product_page_locators');

export class product_page_actions{
    public async selectSize(){
        await element(locators.LOC_SizeSelector).click()
        console.log("Selected Size")
    }
    public async clickBuy(){
        await element(locators.LOC_BuyNowButton).click()
        console.log("Clicked Buy Now Button")
    }
}