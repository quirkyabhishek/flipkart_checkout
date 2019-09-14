import {product_page_actions} from "./product_page_actions";
import {product_page_checks} from "./product_page_checks";
import {wait_util} from "../../wait_util";
import locators = require('./product_page_locators');

export class product_page{
    action;
    check;
    constructor(){
        this.action = new product_page_actions()
        this.check = new product_page_checks()
    }
    public async waitForSizesToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_SizeSelector, timeout);
    }
    public async selectShoeSize(){
        await this.waitForSizesToDisplay(3000)
        await this.action.selectSize()
    }
    public async clickBuyNow(){
        await this.action.clickBuy()
    }
    public async verifyProductBrand(){
        const filters = await this.check.getProductName()
        expect(filters).toContain("REEBOK","Applied Filters Didn't Match")
        console.log("Brand Matched")
    }
    public async verifyLoginHeader(){
        const headName = await this.check.getLoginPageHeader()
        expect(headName).toContain("LOGIN OR SIGNUP","Applied Filters Didn't Match")
        console.log("Login Page Header Matched")
    }
}