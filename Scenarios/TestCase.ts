
import {browser, by, element, protractor} from "protractor";
import {login_popup} from "../pageFactory/login_popup/login_popup";
import {home_page} from "../PageFactory/home_page/home_page";
import {search_result} from "../PageFactory/search_result/search_result";
import {product_page} from "../PageFactory/product_page/product_page";

describe("Add To Cart", async () => {
    it("Open Application", async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://www.flipkart.com/");
    })
    it("Verify if Login Popup is displayed and Click on Close Icon on Popup", async()=>{
        const close = new login_popup()
        await close.validateLoginHeader()
        await close.clickCloseIcononPopup()
    })
    it("Enter Shoes Text in Search Box", async()=>{
        const enter = new home_page()
        await enter.verifySearchBoxPlace()
        await enter.enterSearchTextonHMPG()
        await enter.clickSubmitonSearch()
    })
/*    it("Press Enter Key", async()=>{
        await browser.actions().sendKeys(protractor.Key.RETURN).perform();
    })*/
    it("Verify the searched item", async()=>{
        const search = new search_result()
        await search.verifySearchText()
    })
    it("Apply Price Filter", async()=>{
        const filter = new search_result()
        await filter.applyFilter()
    })
    it("Select Brand", async()=>{
        const filter = new search_result()
        await filter.selectUserBrand()
    })
    it("Verify Filters", async()=>{
        const filter = new search_result()
        await filter.verifyAppliedFilters()
    })
    it("Select First Product", async()=>{
        const filter = new search_result()
        await filter.selectProduct()
    })
    it("Switch to New Tab", async()=>{
        await browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        })
    })
    it("Verify Product Brand", async()=>{
        const product = new product_page()
        await product.verifyProductBrand()
    })
    it("Select Size", async()=>{
        const product = new product_page()
        await product.selectShoeSize()
    })
    it("Click Buy Now Button", async()=>{
        const product = new product_page()
        await product.clickBuyNow()
    })
    it("Verify Login Page", async()=>{
        const product = new product_page()
        await product.verifyLoginHeader()
    })
})