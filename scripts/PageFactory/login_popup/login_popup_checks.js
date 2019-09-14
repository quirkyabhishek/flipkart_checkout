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
const locators = require("./login_popup_locators");
const protractor_1 = require("protractor");
class login_popup_checks {
    getLoginHeaderName() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(locators.LOC_LoginHeader).getText();
        });
    }
}
exports.login_popup_checks = login_popup_checks;
//# sourceMappingURL=login_popup_checks.js.map