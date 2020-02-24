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
var AdministrationPage = /** @class */ (function () {
    function AdministrationPage() {
        this.addUserButton = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/div/users-management/div[1]/span/button'));
        this.displayName = protractor_1.element(protractor_1.By.name('displayName'));
        this.userName = protractor_1.element(protractor_1.By.name('email'));
        this.email = protractor_1.element(protractor_1.By.name('reportEmail'));
        this.submitButton = protractor_1.element(protractor_1.By.cssContainingText('.btn.green-btn', 'Submit'));
        this.successMessage = protractor_1.element(protractor_1.By.css('.callout.success')).all(protractor_1.By.css('.row')).first();
        this.lastUserEmail = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/div/users-management/div[2]/div/div/users-table/table/tbody/tr[1]/td[4]'));
        this.lastUserName = protractor_1.element(protractor_1.By.xpath('//*[@id="users-wrap"]/users-table/table/tbody/tr[1]/td[2]'));
        this.deleteIcon = protractor_1.element.all(protractor_1.By.css('.icon-trash')).get(0);
        this.editIcon = protractor_1.element.all(protractor_1.By.css('.icon-edit')).get(0);
        this.getTrackingCodeButton = protractor_1.element.all(protractor_1.By.css('.t-btn')).get(1);
        this.copyToClipboardButton = protractor_1.element(protractor_1.By.cssContainingText('.t-btn', 'Copy to Clipboard'));
        this.formTrackingCode = protractor_1.element.all(protractor_1.By.css('.t-btn')).get(1);
        this.leadScoresTab = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[2]/a'));
        this.ignoredCompaniesTab = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[3]/a'));
        this.ignoredPagesTab = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[4]/a'));
        this.domainsTab = protractor_1.element(protractor_1.By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[5]/a'));
        this.addLeadButton = protractor_1.element(protractor_1.By.cssContainingText('.btn.t-btn', 'Add Lead'));
        this.pageURL = protractor_1.element(protractor_1.By.name('page'));
        this.saveButton = protractor_1.element(protractor_1.By.cssContainingText('.btn.green-btn', 'Save'));
        this.lastAddedLead = protractor_1.element(protractor_1.By.xpath('//*[@id="leadscores-wrap"]/lead-scores-table/table/tbody/tr[1]/td[4]'));
        this.lastIgnoredCompany = protractor_1.element(protractor_1.By.xpath('//*[@id="ignored-companies-wrap"]/ignored-companies-table/table/tbody/tr[1]/td[2]'));
        this.lastIgnoredPage = protractor_1.element(protractor_1.By.xpath('//*[@id="ignored-pages-wrap"]/ignored-pages-table/table/tbody/tr/td[2]'));
    }
    AdministrationPage.prototype.clickAddUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addUserButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.setDisplayName = function () {
        this.displayName.sendKeys('test user');
    };
    AdministrationPage.prototype.setUserName = function () {
        this.userName.sendKeys(protractor_1.browser.params.administration.username);
    };
    AdministrationPage.prototype.setEmail = function () {
        this.email.sendKeys(protractor_1.browser.params.administration.username);
    };
    AdministrationPage.prototype.submit = function () {
        this.submitButton.click();
    };
    AdministrationPage.prototype.getSuccessMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.successMessage.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministrationPage.prototype.getlastUserEmail = function () {
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.lastUserEmail), 10000);
        return this.lastUserEmail.getText();
    };
    AdministrationPage.prototype.getLastUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lastUserName.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministrationPage.prototype.deleteUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.deleteIcon), 10000);
                        return [4 /*yield*/, this.deleteIcon.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.switchTo().alert().then(function (alert) {
                            alert.accept();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.editUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.editIcon), 10000);
                        return [4 /*yield*/, this.editIcon.click()];
                    case 1:
                        _a.sent();
                        this.displayName.clear();
                        this.displayName.sendKeys('Edited User');
                        return [4 /*yield*/, this.submitButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getSuccessMessage()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.getTrackingCode = function () {
        this.getTrackingCodeButton.click();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.copyToClipboardButton), 10000);
    };
    AdministrationPage.prototype.generateFormTrackingCode = function () {
        this.formTrackingCode.click();
        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.copyToClipboardButton), 10000);
    };
    AdministrationPage.prototype.openLeadScoresPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.leadScoresTab.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.addLeadButton));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.clickAddLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addLeadButton.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.setPageURL = function (URL) {
        this.pageURL.sendKeys(URL);
    };
    AdministrationPage.prototype.editLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.editIcon), 10000);
                        return [4 /*yield*/, this.editIcon.click()];
                    case 1:
                        _a.sent();
                        this.pageURL.clear();
                        this.pageURL.sendKeys('Edited Lead');
                        return [4 /*yield*/, this.saveButton.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getSuccessMessage()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.getLastAddedLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lastAddedLead.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministrationPage.prototype.deleteLead = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.deleteIcon), 10000);
                        return [4 /*yield*/, this.deleteIcon.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.switchTo().alert().then(function (alert) {
                            alert.accept();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.openIgnoredCompaniesPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ignoredCompaniesTab.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.deleteIcon));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.getLastIgnoredCompany = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lastIgnoredCompany.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministrationPage.prototype.deleteIgnoredCompany = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteIcon.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.switchTo().alert().then(function (alert) {
                            alert.accept();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.openIgnoredPages = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ignoredPagesTab.click()];
                    case 1:
                        _a.sent();
                        protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(this.deleteIcon));
                        return [2 /*return*/];
                }
            });
        });
    };
    AdministrationPage.prototype.getLastIgnoredPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lastIgnoredPage.getText()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdministrationPage.prototype.deleteIgnoredPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteIcon.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AdministrationPage;
}());
exports.AdministrationPage = AdministrationPage;
