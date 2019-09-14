var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: { args: ['--window-size=1980,1080'] }
    },
    specs: ["./scripts/Scenarios/TestCase.js"],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports'
        }));
    }
};
//# sourceMappingURL=config.js.map