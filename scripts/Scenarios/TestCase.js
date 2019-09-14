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
const login_popup_1 = require("../pageFactory/login_popup/login_popup");
const home_page_1 = require("../PageFactory/home_page/home_page");
const search_result_1 = require("../PageFactory/search_result/search_result");
const product_page_1 = require("../PageFactory/product_page/product_page");
describe("Add To Cart", () => __awaiter(this, void 0, void 0, function* () {
    it("Open Application", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://www.flipkart.com/");
    }));
    it("Verify if Login Popup is displayed and Click on Close Icon on Popup", () => __awaiter(this, void 0, void 0, function* () {
        const close = new login_popup_1.login_popup();
        yield close.validateLoginHeader();
        yield close.clickCloseIcononPopup();
    }));
    it("Enter Shoes Text in Search Box", () => __awaiter(this, void 0, void 0, function* () {
        const enter = new home_page_1.home_page();
        yield enter.verifySearchBoxPlace();
        yield enter.enterSearchTextonHMPG();
        yield enter.clickSubmitonSearch();
    }));
    /*    it("Press Enter Key", async()=>{
            await browser.actions().sendKeys(protractor.Key.RETURN).perform();
        })*/
    it("Verify the searched item", () => __awaiter(this, void 0, void 0, function* () {
        const search = new search_result_1.search_result();
        yield search.verifySearchText();
    }));
    it("Apply Price Filter", () => __awaiter(this, void 0, void 0, function* () {
        const filter = new search_result_1.search_result();
        yield filter.applyFilter();
    }));
    it("Select Brand", () => __awaiter(this, void 0, void 0, function* () {
        const filter = new search_result_1.search_result();
        yield filter.selectUserBrand();
    }));
    it("Verify Filters", () => __awaiter(this, void 0, void 0, function* () {
        const filter = new search_result_1.search_result();
        yield filter.verifyAppliedFilters();
    }));
    it("Select First Product", () => __awaiter(this, void 0, void 0, function* () {
        const filter = new search_result_1.search_result();
        yield filter.selectProduct();
    }));
    it("Switch to New Tab", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
            protractor_1.browser.switchTo().window(handles[1]);
        });
    }));
    it("Verify Product Brand", () => __awaiter(this, void 0, void 0, function* () {
        const product = new product_page_1.product_page();
        yield product.verifyProductBrand();
    }));
    it("Select Size", () => __awaiter(this, void 0, void 0, function* () {
        const product = new product_page_1.product_page();
        yield product.selectShoeSize();
    }));
    it("Click Buy Now Button", () => __awaiter(this, void 0, void 0, function* () {
        const product = new product_page_1.product_page();
        yield product.clickBuyNow();
    }));
    it("Verify Login Page", () => __awaiter(this, void 0, void 0, function* () {
        const product = new product_page_1.product_page();
        yield product.verifyLoginHeader();
    }));
}));
//# sourceMappingURL=TestCase.js.map