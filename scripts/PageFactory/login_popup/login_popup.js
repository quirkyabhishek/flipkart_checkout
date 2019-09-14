"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_popup_actions_1 = require("./login_popup_actions");
const login_popup_checks_1 = require("./login_popup_checks");
class login_popup {
    constructor() {
        this.action = new login_popup_actions_1.login_popup_actions();
        this.check = new login_popup_checks_1.login_popup_checks();
    }
    clickCloseIcononPopup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickCloseIcon();
        });
    }
    validateLoginHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const head = yield this.check.getLoginHeaderName();
            expect(head).toEqual("Login", "Login Header not displayed");
            console.log("Login Header Verified");
        });
    }
}
exports.login_popup = login_popup;
//# sourceMappingURL=login_popup.js.map