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
const product_page_actions_1 = require("./product_page_actions");
const product_page_checks_1 = require("./product_page_checks");
const wait_util_1 = require("../../wait_util");
const locators = require("./product_page_locators");
class product_page {
    constructor() {
        this.action = new product_page_actions_1.product_page_actions();
        this.check = new product_page_checks_1.product_page_checks();
    }
    waitForSizesToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_SizeSelector, timeout);
        });
    }
    waitForProductNameToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_ProductName, timeout);
        });
    }
    waitForBuyButtonToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_BuyNowButton, timeout);
        });
    }
    waitForLoginPageToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_LoginPageHeader, timeout);
        });
    }
    selectShoeSize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForSizesToDisplay(3000);
            yield this.action.selectSize();
        });
    }
    clickBuyNow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForBuyButtonToDisplay(3000);
            yield this.action.clickBuy();
        });
    }
    verifyProductBrand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForProductNameToDisplay(3000);
            const filters = yield this.check.getProductName();
            expect(filters).toContain("REEBOK", "Selected Product is not the same");
            console.log("Brand Matched");
        });
    }
    verifyLoginHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForLoginPageToDisplay(3000);
            const headName = yield this.check.getLoginPageHeader();
            expect(headName).toContain("LOGIN OR SIGNUP", "Login page not displayed");
            console.log("Login Page Header Matched");
        });
    }
}
exports.product_page = product_page;
//# sourceMappingURL=product_page.js.map