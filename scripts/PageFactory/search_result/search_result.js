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
const search_result_actions_1 = require("./search_result_actions");
const wait_util_1 = require("../../wait_util");
const locators = require("./search_result_locators");
const search_result_checks_1 = require("./search_result_checks");
class search_result {
    constructor() {
        this.action = new search_result_actions_1.search_result_actions();
        this.check = new search_result_checks_1.search_result_checks();
    }
    waitForProductToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_FirstProduct, timeout);
        });
    }
    waitForSearchTextToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_SearchTestLabel, timeout);
        });
    }
    waitForProductFilterToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_BrandCheckbox, timeout);
        });
    }
    waitForPriceFilterToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_PriceDropdown, timeout);
        });
    }
    waitForSelectedFiltersToDisplay(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wait_util_1.wait_util.waitForElementVisible(locators.LOC_FilterText, timeout);
        });
    }
    applyFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPriceFilterToDisplay(3000);
            yield this.action.clickDropdown();
            yield this.action.selectDropdownbyNum(2);
        });
    }
    selectUserBrand() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForProductFilterToDisplay(3000);
            yield this.action.selectBrand();
        });
    }
    selectProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForProductToDisplay(3000);
            yield this.action.selectFirstProduct();
        });
    }
    verifyAppliedFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForSelectedFiltersToDisplay(3000);
            const filters = yield this.check.getAppliedFilters();
            expect(filters).toEqual(['REEBOK', 'Min-₹1500'], "Applied Filters Didn't Match");
        });
    }
    verifySearchText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForSearchTextToDisplay(3000);
            const searchText = yield this.check.getSearchTextName();
            expect(searchText).toEqual("shoes", "Searched item didn't match");
        });
    }
}
exports.search_result = search_result;
//# sourceMappingURL=search_result.js.map