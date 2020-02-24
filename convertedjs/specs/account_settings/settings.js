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
var SettingsPage_1 = require("../../page_objects/SettingsPage");
var loginPage;
var dashboard;
var settings;
beforeAll(function () {
    loginPage = new LoginPage_1.LoginPage();
    dashboard = new Dashboard_1.Dashboard();
    settings = new SettingsPage_1.SettingsPage();
    protractor_1.browser.get(protractor_1.browser.params.baseURL);
    //login to the production environment
    loginPage.setUsername(protractor_1.browser.params.login.admin.username);
    loginPage.setPassword(protractor_1.browser.params.login.admin.password);
    loginPage.clickSignOnButton();
});
describe('Email Alerts & Reports tab: ', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        return [4 /*yield*/, dashboard.openSettingPage()];
                    case 2:
                        //open the administration page
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('enable daily emails for the most active visitors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.enableDailyEmails()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Subscription Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('enable weekly emails for the most active visitors', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.enableWeeklyEmails()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Subscription Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('select specific number of page views for daily email reports', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.changeNumberOfDailyMostActiveVisitors("75")];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Value Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('select specific number of page views for weekly email reports', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.changeNumberOfWeeklyMostActiveVisitors("200")];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Value Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('enable instant email alerts', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.enableInstantEmailAlerts()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Subscription Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('change the number of pages viewed for instant email alerts', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.changeNumberOfInstantPagesViewed("11")];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Value Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('enable form email alerts', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.enableFormEmailAlerts()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Subscription Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        it('enable watchlist email alerts', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.enableWatchlistEmailAlerts()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Subscription Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('Lead Scoring tab: ', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: //wait until the dashboard loads completely
                    return [4 /*yield*/, protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
                        //open the administration page
                    ];
                    case 1:
                        _a.sent();
                        //open the administration page
                        return [4 /*yield*/, dashboard.openSettingPage()
                            //open lead scoring tab
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //open lead scoring tab
                        return [4 /*yield*/, settings.openLeadScoringTab()];
                    case 3:
                        //open lead scoring tab
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('add new lead score', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.addLead()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('New lead added');
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:52990/account-settings/lead-scores');
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('edit an existing lead score', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.editLead()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Lead updated');
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl().then(function (currentURL) {
                                expect(currentURL).toEqual('http://localhost:52990/account-settings/lead-scores');
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('delete a lead score', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.deleteLead()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Lead deleted');
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('Filters tab: ', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        return [4 /*yield*/, dashboard.openSettingPage()
                            //open lead scoring tab
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //open lead scoring tab
                        return [4 /*yield*/, settings.openFiltersTab()];
                    case 3:
                        //open lead scoring tab
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('check filters changing', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.checkFilters()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Filter Changed');
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
describe('Preferences tab: ', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        return [4 /*yield*/, dashboard.openSettingPage()
                            //open lead scoring tab
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //open lead scoring tab
                        return [4 /*yield*/, settings.openPreferencesTab()];
                    case 3:
                        //open lead scoring tab
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('check filters changing', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.changePreferences()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('User Updated');
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
fdescribe('Password tab: ', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                        return [4 /*yield*/, dashboard.openSettingPage()
                            //open lead scoring tab
                        ];
                    case 2:
                        //open the administration page
                        _a.sent();
                        //open lead scoring tab
                        return [4 /*yield*/, settings.openPasswordTab()];
                    case 3:
                        //open lead scoring tab
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('check filters changing', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, settings.changePassword()];
                    case 1:
                        _b.sent();
                        _a = expect;
                        return [4 /*yield*/, settings.getSuccessMessage()];
                    case 2:
                        _a.apply(void 0, [_b.sent()]).toEqual('Password updated');
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
