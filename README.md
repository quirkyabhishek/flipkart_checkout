# flipkart_cart
Automation script in protractor to checkout (till login details page) a product after applying couple of filters on Flipkart website.

Pre-requisites:
1. Install java
2. Install node.js

Project Specific:
1. Unzip the .zip folder in a location
2. Open CMD in the same folder: Enter following commands in CMD one after the other
	3. npm install
	4. npm install -g protractor
	5. webdriver-manager -update
	6. protractor config.ts
7. Test cases will start executing

*Test Results will be stored in test folder in the same location as an HTML file.
*To test in Firefox, open config.ts file and replace 'chrome' with 'firefox'.
*Scenarios can be run separately as well, 
<specs: ["./scripts/Scenarios/TestCase.js"]>, remove or add any case here in config.ts file.

---------------------------------------------------------------------------------------------------------

*Code Explanation*
Program has been written in Page Object model. 

Entire Application was divided between three pages: login_popup, home_page, search_result_page, and product_page.

Each page has 4 components:
1. pageLocator: This contains all the element's locators required for executing test case.
2. pageAction: This contains all the methods necessary for executing the test case. The methods here will be called in the pageFlow.
3. pageCheck: This contains all the methods required for getting the information from webpage.
4. pageTestFlow: This contains all the business logic of the application, defines what check and action to be called for getting the desired flow.

Then there is testCase file: This is the file where we have assertions, the actual test steps.

Then there's a config file which has configuration details like browser type, report generation, and test scenarios (specs) to be selected.

Also, a common waitUtil was written to process the wait time whenever any element wasn't to be found on the page.

---------------------------------------------------------------------------------------------------------

Author-Abhishek
