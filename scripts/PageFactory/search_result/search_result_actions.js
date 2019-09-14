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
const locators = require("./search_result_locators");
class search_result_actions {
    clickDropdown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_PriceDropdown).click();
            console.log("Clicked on Price Dropdown");
        });
    }
    selectDropdownbyNum(optionNum) {
        if (optionNum) {
            protractor_1.element(locators.LOC_PriceDropdown).all(protractor_1.by.tagName('option')).then(function (options) {
                options[optionNum].click();
            });
        }
    }
    selectBrand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_BrandCheckbox).click();
            console.log("After Selecting Brand");
        });
    }
    selectFirstProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_FirstProduct).click();
            console.log("Selected First Product");
        });
    }
}
exports.search_result_actions = search_result_actions;
//# sourceMappingURL=search_result_actions.js.map