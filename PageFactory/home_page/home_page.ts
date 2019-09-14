import {home_page_actions} from "./home_page_actions";
import {home_page_checks} from "./home_page_checks";
import {element} from "protractor";

export class home_page {
    action;
    check;
    constructor(){
        this.action = new home_page_actions()
        this.check = new home_page_checks()
    }
    public async enterSearchTextonHMPG(){
        await this.action.enterSearchText("Shoes")
    }
    public async verifySearchBoxPlace(){
        const placeholder = await this.check.getSearchBoxLabel()
        expect(placeholder).toEqual("Search for products, brands and more","Search Box Missing")
    }
    public async clickSubmitonSearch(){
        await this.action.clickSubmitButton()
    }

}