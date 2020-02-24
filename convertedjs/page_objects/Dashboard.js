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
var protractor_1 = require("protractor");
var Dashboard = /** @class */ (function () {
    function Dashboard() {
        this.userMenu = protractor_1.element(protractor_1.By.css('.user-name'));
        this.logoutButton = protractor_1.element(protractor_1.By.cssContainingText('.btn.grey-btn', 'Logout'));
        this.burgerBox = protractor_1.element(protractor_1.By.css('.burger-box'));
        this.dashboardButton = protractor_1.element(protractor_1.By.css('.icon-nav-db'));
        this.visitsButton = protractor_1.element(protractor_1.By.css('.icon-nav-visits'));
        this.pagesButton = protractor_1.element(protractor_1.By.css('.icon-nav-docs'));
        this.reportsButton = protractor_1.element(protractor_1.By.css('.icon-reports'));
        this.settingsButton = protractor_1.element(protractor_1.By.css('.icon-nav-settings'));
        this.adminButton = protractor_1.element(protractor_1.By.css('.icon-nav-security'));
        this.billingButton = protractor_1.element(protractor_1.By.css('.icomoon-financial'));
        this.ISPsView = protractor_1.element.all((protractor_1.By.cssContainingText('option', 'ISPs'))).get(0);
        this.companiesAndISPsView = protractor_1.element(protractor_1.By.cssContainingText('option', 'Companies & ISPs'));
        this.dayPicker = protractor_1.element(protractor_1.By.id('dateApp'));
        this.yesterdayPicker = protractor_1.element(protractor_1.By.cssContainingText('option', "Yesterday"));
        this.last7DaysPicker = protractor_1.element(protractor_1.By.cssContainingText('option', 'Last 7 Days'));
        this.last30DaysPicker = protractor_1.element(protractor_1.By.cssContainingText('option', 'Last 30 Days'));
        this.customPicker = protractor_1.element(protractor_1.By.cssContainingText('option', 'Custom'));
        this.recentVisitorName = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[2]/td[1]'));
        this.recentVisitDate = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[1]/td[2]/span[1]'));
        //this variable will be reset for the most recent people's section
        this.recentVisitTime = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'));
        this.recentVisitorMail = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[1]/a[1]/span'));
        this.recentVisitTimeInMostRecentPeople = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'));
        this.topOfMostRecentPeople = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[1]/a[1]/span'));
        this.numberOfVisitsThisPeriod = protractor_1.element(protractor_1.By.xpath('//*[@id="visitors-statistics"]/div[2]/div[1]/div'));
        this.numberOfViewedMultiplePages = protractor_1.element(protractor_1.By.xpath('//*[@id="visitors-statistics"]/div[2]/div[2]/div'));
        this.numberOfconvertedFromForm = protractor_1.element(protractor_1.By.xpath('//*[@id="visitors-statistics"]/div[2]/div[3]/div'));
        this.mostRecentSearchTerm = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-search-terms"]/div[2]/table/tbody/tr[1]/td[1]'));
        this.mostRecentSearchTime = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-search-terms"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'));
        this.visitsPerDay = protractor_1.element.all(protractor_1.By.css('.highcharts-text-outline')).get(1);
        this.customVisitsPerDay = protractor_1.element(protractor_1.By.css('.highcharts-series.highcharts-series-1.highcharts-bar-series.highcharts-color-1.highcharts-tracker'));
        this.mostActiveVisitor = protractor_1.element.all(protractor_1.By.css('.highcharts-point.highcharts-color-0')).get(5);
        this.numberOfHits = protractor_1.element.all(protractor_1.By.xpath('//*[contains(@id,"highcharts-")]')).get(6);
        this.seeAllVisitorsButton = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-visits"]/div[3]/a'));
        this.seeAllRecentPeopleButton = protractor_1.element(protractor_1.By.xpath('//*[@id="most-resent-people"]/div[3]/a'));
        this.visitorRow = protractor_1.element.all(protractor_1.By.tagName('tr')).get(1);
        this.visitorMail = (this.visitorRow.all(protractor_1.By.tagName('td')).get(0)).all(protractor_1.By.tagName('a')).get(0);
        this.convertedTag = protractor_1.element(protractor_1.By.css('.status.text-uppercase'));
    }
    Dashboard.prototype.getRecentVisitorName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.recentVisitorName.getText()];
            });
        });
    };
    Dashboard.prototype.getRecentVisitorDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.recentVisitDate.getText()];
            });
        });
    };
    Dashboard.prototype.getRecentVisitorTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.recentVisitTime.getText()];
            });
        });
    };
    Dashboard.prototype.getRecentVisitorMail = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.recentVisitorMail.getText()];
            });
        });
    };
    Dashboard.prototype.getRecentVisitorTimeInMostRecentPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.recentVisitTimeInMostRecentPeople.getText()];
            });
        });
    };
    Dashboard.prototype.getTotalVisits = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.numberOfVisitsThisPeriod.getText()];
            });
        });
    };
    Dashboard.prototype.getVisitedMultiplePages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.numberOfViewedMultiplePages.getText()];
            });
        });
    };
    Dashboard.prototype.getConvertedVisitors = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.numberOfconvertedFromForm.getText()];
            });
        });
    };
    Dashboard.prototype.getMostRecentSearchTerm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mostRecentSearchTerm.getText()];
            });
        });
    };
    Dashboard.prototype.getMostRecentSearchTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mostRecentSearchTime.getText()];
            });
        });
    };
    Dashboard.prototype.getVisitsPerDay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.visitsPerDay.getText()];
            });
        });
    };
    Dashboard.prototype.getMostActiveVisitors = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor));
                        return [4 /*yield*/, protractor_1.browser.actions().mouseMove(this.mostActiveVisitor).perform()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000);
                        return [2 /*return*/, this.numberOfHits.getText()];
                }
            });
        });
    };
    Dashboard.prototype.getCustomVisitsPerDay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.customVisitsPerDay.all(protractor_1.By.css('.highcharts-point.highcharts-color-1'))];
            });
        });
    };
    Dashboard.prototype.getMostActiveVisitorLast7Days = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor));
                        this.mostActiveVisitor = protractor_1.element.all(protractor_1.By.css('.highcharts-point.highcharts-color-0')).get(12);
                        return [4 /*yield*/, protractor_1.browser.actions().mouseMove(this.mostActiveVisitor).perform()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000);
                        return [2 /*return*/, this.numberOfHits.getText()];
                }
            });
        });
    };
    Dashboard.prototype.getMostActiveVisitorLast30Days = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor));
                        this.mostActiveVisitor = protractor_1.element.all(protractor_1.By.css('.highcharts-point.highcharts-color-0')).get(34);
                        return [4 /*yield*/, protractor_1.browser.actions().mouseMove(this.mostActiveVisitor).perform()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000);
                        return [2 /*return*/, this.numberOfHits.getText()];
                }
            });
        });
    };
    Dashboard.prototype.clickSeeAllVisitors = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seeAllVisitorsButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickSeeAllRecentPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seeAllRecentPeopleButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.getVisitorMail = function () {
        return this.visitorMail.getText();
    };
    Dashboard.prototype.getConvertedUsers = function () {
        return this.convertedTag;
    };
    Dashboard.prototype.clickOnMostRecentVisitor = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.recentVisitorName.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickOnTopOfMostRecentPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.topOfMostRecentPeople.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickOnTotalVisits = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.numberOfVisitsThisPeriod.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickOnViewedMultiplePages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.numberOfViewedMultiplePages.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickOnConvertedUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.numberOfconvertedFromForm.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userMenu.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.logoutButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openDashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dashboardButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openVisitsPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.visitsButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openPages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pagesButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openReportsPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reportsButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openSettingPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.settingsButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openAdminSection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adminButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.openBillingPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.billingButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.getDayPicker = function () {
        return this.dayPicker;
    };
    Dashboard.prototype.showVisitsFromYesterday = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dayPicker.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.yesterdayPicker.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.showVisitsFromLast7Days = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dayPicker.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.last7DaysPicker.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.showVisitsFromLast30Days = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dayPicker.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.last30DaysPicker.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.showVisitsFromCustomView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customPicker.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.clickBurgerbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.burgerBox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.selectISPsView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ISPsView.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.selectCompaniesAndISPsView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.companiesAndISPsView.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Dashboard;
}());
exports.Dashboard = Dashboard;
