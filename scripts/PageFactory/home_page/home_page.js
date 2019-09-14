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
const home_page_actions_1 = require("./home_page_actions");
const home_page_checks_1 = require("./home_page_checks");
class home_page {
    constructor() {
        this.action = new home_page_actions_1.home_page_actions();
        this.check = new home_page_checks_1.home_page_checks();
    }
    enterSearchTextonHMPG() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.enterSearchText("Shoes");
        });
    }
    verifySearchBoxPlace() {
        return __awaiter(this, void 0, void 0, function* () {
            const placeholder = yield this.check.getSearchBoxLabel();
            expect(placeholder).toEqual("Search for products, brands and more", "Search Box Missing");
        });
    }
}
exports.home_page = home_page;
//# sourceMappingURL=home_page.js.map