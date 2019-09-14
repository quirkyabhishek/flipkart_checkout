import {login_popup_actions} from "./login_popup_actions";
import {login_popup_checks} from "./login_popup_checks";

export class login_popup{
    action;
    check;
    constructor(){
        this.action = new login_popup_actions();
        this.check = new login_popup_checks();
    }
    public async clickCloseIcononPopup(){
        await this.action.clickCloseIcon();
    }
    public async validateLoginHeader(){
        const head = await this.check.getLoginHeaderName()
        expect(head).toEqual("Login", "Login Header not displayed")
        console.log("Login Header Verified")
    }
}