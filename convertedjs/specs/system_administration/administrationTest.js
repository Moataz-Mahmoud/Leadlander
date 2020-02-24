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
var LoginPage_1 = require("../../page_objects/LoginPage");
var Dashboard_1 = require("../../page_objects/Dashboard");
var protractor_1 = require("protractor");
var VisitsPage_1 = require("../../page_objects/VisitsPage");
var AdministrationPage_1 = require("../../page_objects/AdministrationPage");
describe('Administration:', function () { return __awaiter(void 0, void 0, void 0, function () {
    var loginPage, dashboard, visitsPage, administrationPage;
    return __generator(this, function (_a) {
        beforeEach(function () {
            protractor_1.browser.get(protractor_1.browser.params.baseURL);
            loginPage = new LoginPage_1.LoginPage();
            dashboard = new Dashboard_1.Dashboard();
            visitsPage = new VisitsPage_1.VisitsPage();
            administrationPage = new AdministrationPage_1.AdministrationPage();
        });
        it('Add new user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //login to the production environment
                        loginPage.setUsername(protractor_1.browser.params.login.admin.username);
                        loginPage.setPassword(protractor_1.browser.params.login.admin.password);
                        loginPage.clickSignOnButton();
                        //wait until the dashboard loads completely
                        return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                            //open the administration page
                        ];
                    case 1:
                        //wait until the dashboard loads completely
                        _b.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()];
                    case 2:
                        //open the administration page
                        _b.sent();
                        return [4 /*yield*/, administrationPage.clickAddUser()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual(protractor_1.browser.params.baseURL + 'system-admin/add-user');
                            })
                            //add the new user
                        ];
                    case 4:
                        _b.sent();
                        //add the new user
                        administrationPage.setDisplayName();
                        administrationPage.setUserName();
                        administrationPage.setEmail();
                        administrationPage.submit();
                        _a = expect;
                        return [4 /*yield*/, administrationPage.getSuccessMessage()];
                    case 5:
                        _a.apply(void 0, [_b.sent()]).toBe('User Added');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Delete new user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastUserEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start deleting a user
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        lastUserEmail = administrationPage.getlastUserEmail();
                        return [4 /*yield*/, administrationPage.deleteUser()
                            //sleep the browser until the table of users reloads itself
                        ];
                    case 3:
                        _a.sent();
                        //sleep the browser until the table of users reloads itself
                        protractor_1.browser.sleep(5000);
                        expect(administrationPage.getlastUserEmail()).not.toBe(lastUserEmail);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Edit the last added user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _b.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start editing the user ... 
                        ];
                    case 2:
                        //open the administration page
                        _b.sent();
                        //start editing the user ... 
                        return [4 /*yield*/, administrationPage.editUser()];
                    case 3:
                        //start editing the user ... 
                        _b.sent();
                        protractor_1.browser.navigate().back();
                        _a = expect;
                        return [4 /*yield*/, administrationPage.getLastUserName()];
                    case 4:
                        _a.apply(void 0, [_b.sent()]).toContain('Edited User');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Get tracking code', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start getting 
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //start getting 
                        administrationPage.getTrackingCode();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Generate form-tracking code', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start getting 
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //start getting 
                        administrationPage.generateFormTrackingCode();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Add new lead', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _b.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start adding new lead score
                        ];
                    case 2:
                        //open the administration page
                        _b.sent();
                        //start adding new lead score
                        return [4 /*yield*/, administrationPage.openLeadScoresPage()];
                    case 3:
                        //start adding new lead score
                        _b.sent();
                        return [4 /*yield*/, administrationPage.clickAddLead()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual(protractor_1.browser.params.baseURL + 'system-admin/add-custom-lead');
                            })
                            //add new lead
                        ];
                    case 5:
                        _b.sent();
                        //add new lead
                        administrationPage.setPageURL(protractor_1.browser.params.administration.pageURL);
                        administrationPage.submit();
                        _a = expect;
                        return [4 /*yield*/, administrationPage.getSuccessMessage()];
                    case 6:
                        _a.apply(void 0, [_b.sent()]).toBe('New lead added');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Edit the last added lead', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _b.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start editing the user ... 
                        ];
                    case 2:
                        //open the administration page
                        _b.sent();
                        //start editing the user ... 
                        return [4 /*yield*/, administrationPage.openLeadScoresPage()];
                    case 3:
                        //start editing the user ... 
                        _b.sent();
                        return [4 /*yield*/, administrationPage.editLead()];
                    case 4:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, administrationPage.getLastAddedLead()];
                    case 5:
                        _a.apply(void 0, [_b.sent()]).toContain('Edited Lead');
                        return [2 /*return*/];
                }
            });
        }); });
        it('Delete new lead', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastAddedLead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start deleting a lead
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //start deleting a lead
                        return [4 /*yield*/, administrationPage.openLeadScoresPage()];
                    case 3:
                        //start deleting a lead
                        _a.sent();
                        lastAddedLead = administrationPage.getLastAddedLead();
                        return [4 /*yield*/, administrationPage.deleteLead()
                            //sleep the browser until the table of users reloads itself
                        ];
                    case 4:
                        _a.sent();
                        //sleep the browser until the table of users reloads itself
                        protractor_1.browser.sleep(5000);
                        expect(administrationPage.getLastAddedLead()).not.toBe(lastAddedLead);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Delete ignored company', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastIgnoredCompany;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start adding new lead score
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //start adding new lead score
                        return [4 /*yield*/, administrationPage.openIgnoredCompaniesPage()
                            //start deleting an ignored company
                        ];
                    case 3:
                        //start adding new lead score
                        _a.sent();
                        lastIgnoredCompany = administrationPage.getLastIgnoredCompany();
                        return [4 /*yield*/, administrationPage.deleteIgnoredCompany()
                            //sleep the browser until the table of users reloads itself
                        ];
                    case 4:
                        _a.sent();
                        //sleep the browser until the table of users reloads itself
                        protractor_1.browser.sleep(5000);
                        expect(administrationPage.getLastAddedLead()).not.toBe(lastIgnoredCompany);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Delete ignored page', function () { return __awaiter(void 0, void 0, void 0, function () {
            var lastIgnoredPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        //wait until the dashboard loads completely
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openAdminSection()
                            //start adding new lead score
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //start adding new lead score
                        return [4 /*yield*/, administrationPage.openIgnoredPages()
                            //start deleting an ignored company
                        ];
                    case 3:
                        //start adding new lead score
                        _a.sent();
                        lastIgnoredPage = administrationPage.getLastIgnoredPage();
                        return [4 /*yield*/, administrationPage.deleteIgnoredPage()
                            //sleep the browser until the table of users reloads itself
                        ];
                    case 4:
                        _a.sent();
                        //sleep the browser until the table of users reloads itself
                        protractor_1.browser.sleep(5000);
                        expect(administrationPage.getLastAddedLead()).not.toBe(lastIgnoredPage);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
