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
const locators = require("./product_page_locators");
class product_page_actions {
    selectSize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_SizeSelector).click();
            console.log("Selected Size");
        });
    }
    clickBuy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(locators.LOC_BuyNowButton).click();
            console.log("Clicked Buy Now Button");
        });
    }
}
exports.product_page_actions = product_page_actions;
//# sourceMappingURL=product_page_actions.js.map