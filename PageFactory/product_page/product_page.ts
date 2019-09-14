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
    public async waitForProductNameToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_ProductName, timeout);
    }
    public async waitForBuyButtonToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_BuyNowButton, timeout);
    }
    public async waitForLoginPageToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_LoginPageHeader, timeout);
    }
    public async selectShoeSize(){
        await this.waitForSizesToDisplay(3000)
        await this.action.selectSize()
    }
    public async clickBuyNow(){
        await this.waitForBuyButtonToDisplay(3000)
        await this.action.clickBuy()
    }
    public async verifyProductBrand(){
        await this.waitForProductNameToDisplay(3000)
        const filters = await this.check.getProductName()
        expect(filters).toContain("REEBOK","Selected Product is not the same")
        console.log("Brand Matched")
    }
    public async verifyLoginHeader(){
        await this.waitForLoginPageToDisplay(3000)
        const headName = await this.check.getLoginPageHeader()
        expect(headName).toContain("LOGIN OR SIGNUP","Login page not displayed")
        console.log("Login Page Header Matched")
    }
}