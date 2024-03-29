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
const locators = require("./home_page_locators");
class home_page_actions {
    enterSearchText(searchtext) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_SearchBox).sendKeys(searchtext);
            console.log("Entered Text in Search Box");
        });
    }
    clickSubmitButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_SubmitButton).click();
        });
    }
}
exports.home_page_actions = home_page_actions;
//# sourceMappingURL=home_page_actions.js.map