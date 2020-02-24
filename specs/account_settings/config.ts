import { Config, browser } from "protractor"

export let config: Config = {
    framework: "jasmine",

    capabilities: {
        browserName: "chrome",
        unexpectedAlertBehaviour: 'accept',
        chromeOptions: {
            args: ["--start-maximized"]
        }
    },

    specs: ['settings.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter')
     jasmine.getEnv().addReporter(new AllureReporter({
       resultsDir: 'test-results'
         })
       );
    },

    params: {
        baseURL: 'http://localhost:52990/',
        login: {
            admin: {
                username: 'mmahmoud@uplandsoftware.com',
                password: 'Test123*'
            }
        }
    }
}