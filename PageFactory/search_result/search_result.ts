import {search_result_actions} from "./search_result_actions";
import {wait_util} from "../../wait_util";
import locators = require('./search_result_locators');
import {search_result_checks} from "./search_result_checks";

export class search_result{
    action;
    check;

    constructor(){
        this.action = new search_result_actions()
        this.check = new search_result_checks()
    }
    public async waitForProductToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_FirstProduct, timeout);
    }
    public async waitForSearchTextToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_SearchTestLabel, timeout);
    }
    public async waitForProductFilterToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_BrandCheckbox, timeout);
    }
    public async waitForPriceFilterToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_PriceDropdown, timeout);
    }
    public async waitForSelectedFiltersToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_FilterText, timeout);
    }
    public async applyFilter(){
        await this.waitForPriceFilterToDisplay(3000)
        await this.action.clickDropdown()
        await this.action.selectDropdownbyNum(2)
    }
    public async selectUserBrand(){
        await this.waitForProductFilterToDisplay(3000)
        await this.action.selectBrand()
    }
    public async selectProduct(){
        await this.waitForProductToDisplay(3000)
        await this.action.selectFirstProduct()
    }
    public async verifyAppliedFilters(){
        await this.waitForSelectedFiltersToDisplay(3000)
        const filters = await this.check.getAppliedFilters()
        expect(filters).toEqual([ 'REEBOK', 'Min-₹1500' ],"Applied Filters Didn't Match")
    }
    public async verifySearchText(){
        await this.waitForSearchTextToDisplay(3000)
        const searchText = await this.check.getSearchTextName()
        expect(searchText).toEqual("shoes","Searched item didn't match")
    }

}