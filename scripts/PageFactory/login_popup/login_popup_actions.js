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
const protractor_1 = require("protractor");
const locators = require("./login_popup_locators");
class login_popup_actions {
    clickCloseIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_ClosePopupButton).click();
            console.log("After Clicking Close Button");
        });
    }
}
exports.login_popup_actions = login_popup_actions;
//# sourceMappingURL=login_popup_actions.js.map