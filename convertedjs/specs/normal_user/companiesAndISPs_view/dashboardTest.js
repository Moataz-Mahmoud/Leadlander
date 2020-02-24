"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("../../../page_objects/LoginPage");
var Dashboard_1 = require("../../../page_objects/Dashboard");
var protractor_1 = require("protractor");
var VisitsPage_1 = require("../../../page_objects/VisitsPage");
describe('Dashboard test cases', function () { return __awaiter(void 0, void 0, void 0, function () {
    var loginPage, dashboard, visitsPage;
    return __generator(this, function (_a) {
        beforeEach(function () {
            protractor_1.browser.get('http://localhost:57893/');
            loginPage = new LoginPage_1.LoginPage();
            dashboard = new Dashboard_1.Dashboard();
            visitsPage = new VisitsPage_1.VisitsPage();
        });
        it('Display visits from "today"', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastVisitorName, lastVisitorDate, lastVisitorTime, lastVisitorMail, lastVisitorTimeInMostRecentPeople, totalVisits, visitedMultiplePages, convertedVisits, mostRecentSearchTerm, mostRecentSearchTime, visitsPerDay, numberOfHits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //login to the production environment
                        loginPage.setUsername(protractor_1.browser.params.login.normal.username);
                        loginPage.setPassword(protractor_1.browser.params.login.normal.password);
                        loginPage.clickSignOnButton();
                        //wait until the dashboard loads completely
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                            //open the companies & ISPs view
                        ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()
                            //check the most recent visitors section
                        ];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorName()];
                    case 3:
                        lastVisitorName = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorDate()];
                    case 4:
                        lastVisitorDate = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTime()];
                    case 5:
                        lastVisitorTime = _a.sent();
                        expect(lastVisitorName).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.lastVisitorName);
                        expect(lastVisitorDate).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.lastVisitorDate);
                        expect(lastVisitorTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.lastVisitorTime);
                        return [4 /*yield*/, dashboard.getRecentVisitorMail()];
                    case 6:
                        lastVisitorMail = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTimeInMostRecentPeople()];
                    case 7:
                        lastVisitorTimeInMostRecentPeople = _a.sent();
                        expect(lastVisitorMail).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.lastVisitorMail);
                        expect(lastVisitorTimeInMostRecentPeople).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.lastVisitorTimeInMostRecentPeople);
                        return [4 /*yield*/, dashboard.getTotalVisits()];
                    case 8:
                        totalVisits = _a.sent();
                        expect(totalVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.totalVisits);
                        return [4 /*yield*/, dashboard.getVisitedMultiplePages()];
                    case 9:
                        visitedMultiplePages = _a.sent();
                        expect(visitedMultiplePages).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.visitedMultiplePages);
                        return [4 /*yield*/, dashboard.getConvertedVisitors()];
                    case 10:
                        convertedVisits = _a.sent();
                        expect(convertedVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.convertedVisits);
                        return [4 /*yield*/, dashboard.getMostRecentSearchTerm()];
                    case 11:
                        mostRecentSearchTerm = _a.sent();
                        return [4 /*yield*/, dashboard.getMostRecentSearchTime()];
                    case 12:
                        mostRecentSearchTime = _a.sent();
                        expect(mostRecentSearchTerm).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.mostRecentSearchTerm);
                        expect(mostRecentSearchTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.mostRecentSearchTime);
                        return [4 /*yield*/, dashboard.getVisitsPerDay()];
                    case 13:
                        visitsPerDay = _a.sent();
                        expect(visitsPerDay).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.today.visitsPerDay);
                        return [4 /*yield*/, dashboard.getMostActiveVisitors()];
                    case 14:
                        numberOfHits = _a.sent();
                        expect(numberOfHits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.numberOfHits);
                        return [2 /*return*/];
                }
            });
        }); }, 120000);
        it('Display visits from "yesterday"', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastVisitorName, lastVisitorDate, lastVisitorTime, lastVisitorMail, lastVisitorTimeInMostRecentPeople, totalVisits, visitedMultiplePages, convertedVisits, mostRecentSearchTerm, mostRecentSearchTime, numberOfHits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()
                            //show visits from ISPs.yesterday
                        ];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        //show visits from ISPs.yesterday
                        return [4 /*yield*/, dashboard.showVisitsFromYesterday()
                            //check the most recent visitors section
                        ];
                    case 3:
                        //show visits from ISPs.yesterday
                        _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorName()];
                    case 4:
                        lastVisitorName = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorDate()];
                    case 5:
                        lastVisitorDate = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTime()];
                    case 6:
                        lastVisitorTime = _a.sent();
                        expect(lastVisitorName).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.lastVisitorName);
                        expect(lastVisitorDate).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.lastVisitorDate);
                        expect(lastVisitorTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.lastVisitorTime);
                        return [4 /*yield*/, dashboard.getRecentVisitorMail()];
                    case 7:
                        lastVisitorMail = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTimeInMostRecentPeople()];
                    case 8:
                        lastVisitorTimeInMostRecentPeople = _a.sent();
                        expect(lastVisitorMail).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.lastVisitorMail);
                        expect(lastVisitorTimeInMostRecentPeople).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.lastVisitorTimeInMostRecentPeople);
                        return [4 /*yield*/, dashboard.getTotalVisits()];
                    case 9:
                        totalVisits = _a.sent();
                        expect(totalVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.totalVisits);
                        return [4 /*yield*/, dashboard.getVisitedMultiplePages()];
                    case 10:
                        visitedMultiplePages = _a.sent();
                        expect(visitedMultiplePages).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.visitedMultiplePages);
                        return [4 /*yield*/, dashboard.getConvertedVisitors()];
                    case 11:
                        convertedVisits = _a.sent();
                        expect(convertedVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.convertedVisits);
                        return [4 /*yield*/, dashboard.getMostRecentSearchTerm()];
                    case 12:
                        mostRecentSearchTerm = _a.sent();
                        return [4 /*yield*/, dashboard.getMostRecentSearchTime()];
                    case 13:
                        mostRecentSearchTime = _a.sent();
                        expect(mostRecentSearchTerm).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.mostRecentSearchTerm);
                        expect(mostRecentSearchTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.mostRecentSearchTime);
                        return [4 /*yield*/, dashboard.getMostActiveVisitors()];
                    case 14:
                        numberOfHits = _a.sent();
                        expect(numberOfHits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.yesterday.numberOfHits);
                        return [2 /*return*/];
                }
            });
        }); }, 120000);
        it('Display visits from "Last 7 Days"', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastVisitorName, lastVisitorDate, lastVisitorTime, lastVisitorMail, lastVisitorTimeInMostRecentPeople, totalVisits, visitedMultiplePages, convertedVisits, mostRecentSearchTerm, mostRecentSearchTime, temp, numberOfHits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()
                            //Show visits from the last 7 days
                        ];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        //Show visits from the last 7 days
                        return [4 /*yield*/, dashboard.showVisitsFromLast7Days()
                            //check the most recent visitors section
                        ];
                    case 3:
                        //Show visits from the last 7 days
                        _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorName()];
                    case 4:
                        lastVisitorName = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorDate()];
                    case 5:
                        lastVisitorDate = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTime()];
                    case 6:
                        lastVisitorTime = _a.sent();
                        expect(lastVisitorName).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.lastVisitorName);
                        expect(lastVisitorDate).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.lastVisitorDate);
                        expect(lastVisitorTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.lastVisitorTime);
                        return [4 /*yield*/, dashboard.getRecentVisitorMail()];
                    case 7:
                        lastVisitorMail = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTimeInMostRecentPeople()];
                    case 8:
                        lastVisitorTimeInMostRecentPeople = _a.sent();
                        expect(lastVisitorMail).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.lastVisitorMail);
                        expect(lastVisitorTimeInMostRecentPeople).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.lastVisitorTimeInMostRecentPeople);
                        return [4 /*yield*/, dashboard.getTotalVisits()];
                    case 9:
                        totalVisits = _a.sent();
                        expect(totalVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.totalVisits);
                        return [4 /*yield*/, dashboard.getVisitedMultiplePages()];
                    case 10:
                        visitedMultiplePages = _a.sent();
                        expect(visitedMultiplePages).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.visitedMultiplePages);
                        return [4 /*yield*/, dashboard.getConvertedVisitors()];
                    case 11:
                        convertedVisits = _a.sent();
                        expect(convertedVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.convertedVisits);
                        return [4 /*yield*/, dashboard.getMostRecentSearchTerm()];
                    case 12:
                        mostRecentSearchTerm = _a.sent();
                        return [4 /*yield*/, dashboard.getMostRecentSearchTime()];
                    case 13:
                        mostRecentSearchTime = _a.sent();
                        expect(mostRecentSearchTerm).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.mostRecentSearchTerm);
                        expect(mostRecentSearchTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.mostRecentSearchTime);
                        return [4 /*yield*/, dashboard.getCustomVisitsPerDay()];
                    case 14:
                        temp = _a.sent();
                        expect(temp.length).toEqual(8);
                        return [4 /*yield*/, dashboard.getMostActiveVisitorLast7Days()];
                    case 15:
                        numberOfHits = _a.sent();
                        expect(numberOfHits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.last7Days.numberOfHits);
                        return [2 /*return*/];
                }
            });
        }); }, 120000);
        it('Display visits from "Last 30 Days"', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastVisitorName, lastVisitorDate, lastVisitorTime, lastVisitorMail, lastVisitorTimeInMostRecentPeople, totalVisits, visitedMultiplePages, convertedVisits, mostRecentSearchTerm, mostRecentSearchTime, temp, numberOfHits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()
                            //Show visits from the last 30 days
                        ];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        //Show visits from the last 30 days
                        return [4 /*yield*/, dashboard.showVisitsFromLast30Days()
                            //check the most recent visitors section
                        ];
                    case 3:
                        //Show visits from the last 30 days
                        _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorName()];
                    case 4:
                        lastVisitorName = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorDate()];
                    case 5:
                        lastVisitorDate = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTime()];
                    case 6:
                        lastVisitorTime = _a.sent();
                        expect(lastVisitorName).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.lastVisitorName);
                        expect(lastVisitorDate).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.lastVisitorDate);
                        expect(lastVisitorTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.lastVisitorTime);
                        return [4 /*yield*/, dashboard.getRecentVisitorMail()];
                    case 7:
                        lastVisitorMail = _a.sent();
                        return [4 /*yield*/, dashboard.getRecentVisitorTimeInMostRecentPeople()];
                    case 8:
                        lastVisitorTimeInMostRecentPeople = _a.sent();
                        expect(lastVisitorMail).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.lastVisitorMail);
                        expect(lastVisitorTimeInMostRecentPeople).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.lastVisitorTimeInMostRecentPeople);
                        return [4 /*yield*/, dashboard.getTotalVisits()];
                    case 9:
                        totalVisits = _a.sent();
                        expect(totalVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.totalVisits);
                        return [4 /*yield*/, dashboard.getVisitedMultiplePages()];
                    case 10:
                        visitedMultiplePages = _a.sent();
                        expect(visitedMultiplePages).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.visitedMultiplePages);
                        return [4 /*yield*/, dashboard.getConvertedVisitors()];
                    case 11:
                        convertedVisits = _a.sent();
                        expect(convertedVisits).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.convertedVisits);
                        return [4 /*yield*/, dashboard.getMostRecentSearchTerm()];
                    case 12:
                        mostRecentSearchTerm = _a.sent();
                        return [4 /*yield*/, dashboard.getMostRecentSearchTime()];
                    case 13:
                        mostRecentSearchTime = _a.sent();
                        expect(mostRecentSearchTerm).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.mostRecentSearchTerm);
                        expect(mostRecentSearchTime).toBe(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.mostRecentSearchTime);
                        return [4 /*yield*/, dashboard.getCustomVisitsPerDay()];
                    case 14:
                        temp = _a.sent();
                        expect(temp.length).toEqual(30);
                        return [4 /*yield*/, dashboard.getMostActiveVisitorLast30Days()];
                    case 15:
                        numberOfHits = _a.sent();
                        expect(numberOfHits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.last30Days.numberOfHits);
                        return [2 /*return*/];
                }
            });
        }); }, 120000);
        it('See all visitors', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.clickSeeAllVisitors()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 4:
                        _a.sent();
                        expect(visitsPage.getAllResultsDisplayed()).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.totalVisits);
                        return [2 /*return*/];
                }
            });
        }); });
        it('See all recent people', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.clickSeeAllRecentPeople()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 4:
                        _a.sent();
                        expect(visitsPage.getAllResultsDisplayed()).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.allRecentPeople);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Check the most recent people with "CONVERTED" tag', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        dashboard.getConvertedUsers().getText().then(function (convertedUser) {
                            expect(convertedUser).toBe('CONVERTED');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('Check that every visitor row is clickable in "Most Recent Visitors" section', function () { return __awaiter(void 0, void 0, void 0, function () {
            var totalVisits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.clickOnMostRecentVisitor()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 4:
                        _a.sent();
                        totalVisits = visitsPage.getTotalVisits().getText();
                        expect(totalVisits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.totalVisits);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Check that every visitors row is clickable in "Most Recent People" section', function () { return __awaiter(void 0, void 0, void 0, function () {
            var totalVisits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.clickOnTopOfMostRecentPeople()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(visitsPage.getTotalVisits()), 60000)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 5:
                        _a.sent();
                        totalVisits = visitsPage.getTotalVisits().getText();
                        expect(totalVisits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.allRecentPeople);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Make sure that "this period", "viewed multiple pages", and "converted by form" are clickable', function () { return __awaiter(void 0, void 0, void 0, function () {
            var totalVisits, viewedMultiplePages, convertedUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        return [4 /*yield*/, dashboard.clickOnTotalVisits()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 4:
                        _a.sent();
                        totalVisits = visitsPage.getTotalVisits().getText();
                        expect(totalVisits).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.totalVisits);
                        protractor_1.browser.navigate().back();
                        return [4 /*yield*/, dashboard.clickOnViewedMultiplePages()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 6:
                        _a.sent();
                        viewedMultiplePages = visitsPage.getTotalVisits().getText();
                        expect(viewedMultiplePages).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.totalVisits);
                        protractor_1.browser.navigate().back();
                        return [4 /*yield*/, dashboard.clickOnConvertedUsers()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:57893/visits');
                            })];
                    case 8:
                        _a.sent();
                        convertedUsers = visitsPage.getTotalVisits().getText();
                        expect(convertedUsers).toContain(protractor_1.browser.params.dashboard.companiesAndISPs.today.allRecentPeople);
                        return [2 /*return*/];
                }
            });
        }); });
        it('checking that clicking the burger box expanding the left-hand panel', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the companies & ISPs view
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the companies & ISPs view
                        return [4 /*yield*/, dashboard.selectCompaniesAndISPsView()
                            //Expect the class of side menu to be closed at first
                        ];
                    case 2:
                        //open the companies & ISPs view
                        _a.sent();
                        //Expect the class of side menu to be closed at first
                        protractor_1.element(protractor_1.By.css('.closed.main-navigation')).isPresent().then(function (present) {
                            expect(present).toBe(true);
                        });
                        //then click the burger box
                        return [4 /*yield*/, dashboard.clickBurgerbox()
                            //now expect the side menu to class to be changed from closed to open
                        ];
                    case 3:
                        //then click the burger box
                        _a.sent();
                        //now expect the side menu to class to be changed from closed to open
                        protractor_1.element(protractor_1.By.css('.closed.main-navigation')).isPresent().then(function (present) {
                            expect(present).toBe(false);
                        });
                        protractor_1.element(protractor_1.By.css('.opened.main-navigation')).isPresent().then(function (present) {
                            expect(present).toBe(true);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
