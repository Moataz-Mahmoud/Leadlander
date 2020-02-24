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
var SettingsPage = /** @class */ (function () {
    function SettingsPage() {
        this.dailyEmailCheckbox = protractor_1.element(protractor_1.by.name('daily-email'));
        this.mostDailyActiveVisitors = protractor_1.element.all(protractor_1.by.xpath('//div[@id="email-reports"]//select')).get(0);
        this.mostWeeklyActiveVisitors = protractor_1.element.all(protractor_1.by.xpath('//div[@id="email-reports"]//select')).get(1);
        this.weeklyEmailCheckbox = protractor_1.element(protractor_1.by.name('weekly-email'));
        this.instantEmailCheckbox = protractor_1.element(protractor_1.by.name('instant-email'));
        this.numberOfPagesForInstantAlert = protractor_1.element(protractor_1.by.xpath('//div[@id="email-alerts"]//select'));
        this.formEmailCheckbox = protractor_1.element(protractor_1.by.name('form-email'));
        this.uploadListButton = protractor_1.element(protractor_1.by.cssContainingText('btn green-btn', 'Upload List'));
        this.watchlistEmailAlertsCheckbox = protractor_1.element(protractor_1.by.name('watlist-comp-email'));
        this.leadScoringTab = protractor_1.element.all(protractor_1.by.xpath('//div[@class="secondary-header"]//a')).get(1);
        this.addLeadButton = protractor_1.element(protractor_1.by.xpath('//lead-scoring//button'));
        this.leadPageURLTextBox = protractor_1.element(protractor_1.by.name('page'));
        this.submitLeadButton = protractor_1.element(protractor_1.by.xpath('//button[@type="submit"]'));
        this.editLeadButton = protractor_1.element.all(protractor_1.by.xpath('//tr/td/i[@class="icon-edit"]')).get(0);
        this.deleteLeadButton = protractor_1.element.all(protractor_1.by.xpath('//tr/td/i[@class="icon-trash"]')).get(0);
        this.filtersTab = protractor_1.element.all(protractor_1.by.xpath('//div[@class="secondary-header"]//a')).get(2);
        this.visitorsFromEverywhereCheckbox = protractor_1.element.all(protractor_1.by.name('territory-filter-group')).get(0);
        this.visitorsFromCustomeLocation = protractor_1.element.all(protractor_1.by.name('territory-filter-group')).get(1);
        this.PreferencesTab = protractor_1.element.all(protractor_1.by.xpath('//div[@class="secondary-header"]//a')).get(3);
        this.saveChangesButton = protractor_1.element(protractor_1.by.css('.action-btn.btn'));
        this.passwordTab = protractor_1.element.all(protractor_1.by.xpath('//div[@class="secondary-header"]//a')).get(4);
        this.currentPasswordTextbox = protractor_1.element(protractor_1.by.name('existing-password'));
        this.newPasswordTextbox = protractor_1.element(protractor_1.by.name('password'));
        this.confirmPasswordTextbox = protractor_1.element(protractor_1.by.name('verifyPassword'));
        this.savePassowrdButton = protractor_1.element(protractor_1.by.css('.action-btn.btn'));
        this.successMessage = protractor_1.element.all(protractor_1.by.xpath('//div[@class="main-content "]//alert-block//div')).get(0);
    }
    SettingsPage.prototype.getSuccessMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.successMessage.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SettingsPage.prototype.enableDailyEmails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dailyEmailCheckbox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changeNumberOfDailyMostActiveVisitors = function (numberOfVisitors) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mostDailyActiveVisitors.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element.all(protractor_1.by.cssContainingText('option', numberOfVisitors)).get(0).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changeNumberOfWeeklyMostActiveVisitors = function (numberOfVisitors) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mostWeeklyActiveVisitors.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element.all(protractor_1.by.cssContainingText('option', numberOfVisitors)).get(1).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.enableWeeklyEmails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weeklyEmailCheckbox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.enableInstantEmailAlerts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instantEmailCheckbox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changeNumberOfInstantPagesViewed = function (numberOfPages) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.numberOfPagesForInstantAlert.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('option', numberOfPages)).click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.enableFormEmailAlerts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formEmailCheckbox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.enableWatchlistEmailAlerts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.watchlistEmailAlertsCheckbox.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.openLeadScoringTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leadScoringTab.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.addLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addLeadButton.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.leadPageURLTextBox.sendKeys('testing URL ... ')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.submitLeadButton.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.getLeadPageURL = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.leadPageURLTextBox.getText()];
            });
        });
    };
    SettingsPage.prototype.editLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editLeadButton.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.leadPageURLTextBox.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.leadPageURLTextBox.sendKeys('edited lead ...')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.submitLeadButton.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.deleteLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteLeadButton.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.sleep(1000);
                        protractor_1.browser.switchTo().alert().then(function (alert) {
                            alert.accept();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.openFiltersTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filtersTab.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.checkFilters = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.visitorsFromCustomeLocation.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.visitorsFromEverywhereCheckbox.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.openPreferencesTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PreferencesTab.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changePreferences = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveChangesButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.openPasswordTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.passwordTab.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.changePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentPasswordTextbox.sendKeys(protractor_1.browser.params.login.admin.password);
                        this.newPasswordTextbox.sendKeys(protractor_1.browser.params.login.admin.password);
                        this.confirmPasswordTextbox.sendKeys(protractor_1.browser.params.login.admin.password);
                        return [4 /*yield*/, this.saveChangesButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SettingsPage;
}());
exports.SettingsPage = SettingsPage;
