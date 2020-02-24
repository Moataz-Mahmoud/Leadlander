import { by, element, browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class SettingsPage {
    private dailyEmailCheckbox = element(by.name('daily-email'))
    private mostDailyActiveVisitors = element.all(by.xpath('//div[@id="email-reports"]//select')).get(0)
    private mostWeeklyActiveVisitors = element.all(by.xpath('//div[@id="email-reports"]//select')).get(1)
    private weeklyEmailCheckbox = element(by.name('weekly-email'))
    private instantEmailCheckbox = element(by.name('instant-email'))
    private numberOfPagesForInstantAlert = element(by.xpath('//div[@id="email-alerts"]//select'))
    private formEmailCheckbox = element(by.name('form-email'))
    private uploadListButton = element(by.cssContainingText('btn green-btn', 'Upload List'))
    private watchlistEmailAlertsCheckbox = element(by.name('watlist-comp-email'))

    private leadScoringTab = element.all(by.xpath('//div[@class="secondary-header"]//a')).get(1)
    private addLeadButton = element(by.xpath('//lead-scoring//button'))
    private leadPageURLTextBox = element(by.name('page'))
    private submitLeadButton = element(by.xpath('//button[@type="submit"]'))
    private editLeadButton = element.all(by.xpath('//tr/td/i[@class="icon-edit"]')).get(0)
    private deleteLeadButton = element.all(by.xpath('//tr/td/i[@class="icon-trash"]')).get(0)
    
    private filtersTab = element.all(by.xpath('//div[@class="secondary-header"]//a')).get(2)
    private visitorsFromEverywhereCheckbox = element.all(by.name('territory-filter-group')).get(0)
    private visitorsFromCustomeLocation = element.all(by.name('territory-filter-group')).get(1)

    private PreferencesTab = element.all(by.xpath('//div[@class="secondary-header"]//a')).get(3)
    private saveChangesButton = element(by.css('.action-btn.btn'))

    private passwordTab = element.all(by.xpath('//div[@class="secondary-header"]//a')).get(4)
    private currentPasswordTextbox = element(by.name('existing-password'))
    private newPasswordTextbox = element(by.name('password'))
    private confirmPasswordTextbox = element(by.name('verifyPassword'))
    private savePassowrdButton = element(by.css('.action-btn.btn'))

    private successMessage = element.all(by.xpath('//div[@class="main-content "]//alert-block//div')).get(0)

    async getSuccessMessage() {
        return await this.successMessage.getText()
    }
    
    async enableDailyEmails() {
        await this.dailyEmailCheckbox.click()
    }

    async changeNumberOfDailyMostActiveVisitors(numberOfVisitors: string) {
        await this.mostDailyActiveVisitors.click()
        await element.all(by.cssContainingText('option', numberOfVisitors)).get(0).click()
    }

    async changeNumberOfWeeklyMostActiveVisitors(numberOfVisitors: string) {
        await this.mostWeeklyActiveVisitors.click()
        await element.all(by.cssContainingText('option', numberOfVisitors)).get(1).click()
    }

    async enableWeeklyEmails() {
        await this.weeklyEmailCheckbox.click()
    }

    async enableInstantEmailAlerts() {
        await this.instantEmailCheckbox.click()
    }

    async changeNumberOfInstantPagesViewed(numberOfPages: string) {
        await this.numberOfPagesForInstantAlert.click()
        await element(by.cssContainingText('option', numberOfPages)).click()
    }

    async enableFormEmailAlerts() {
        await this.formEmailCheckbox.click()
    }

    async enableWatchlistEmailAlerts() {
        await this.watchlistEmailAlertsCheckbox.click()
    }

    async openLeadScoringTab() {
        await this.leadScoringTab.click()
    }

    async addLead() {
        await this.addLeadButton.click()
        await this.leadPageURLTextBox.sendKeys('testing URL ... ')
        await this.submitLeadButton.click()
    }

    async getLeadPageURL() {
        return this.leadPageURLTextBox.getText()
    }

    async editLead() {
        await this.editLeadButton.click()
        await this.leadPageURLTextBox.clear()
        await this.leadPageURLTextBox.sendKeys('edited lead ...')
        await this.submitLeadButton.click()
    }

    async deleteLead() {
        await this.deleteLeadButton.click()
        browser.sleep(1000)
        browser.switchTo().alert().then((alert) => {
            alert.accept()
        })
    }

    async openFiltersTab() {
        await this.filtersTab.click()
    }

    async checkFilters() {
        await this.visitorsFromCustomeLocation.click()
        await this.visitorsFromEverywhereCheckbox.click()
    }

    async openPreferencesTab() {
        await this.PreferencesTab.click()
    }

    async changePreferences() {
        await this.saveChangesButton.click()
    }

    async openPasswordTab() {
        await this.passwordTab.click()
    }

    async changePassword() {
        this.currentPasswordTextbox.sendKeys(browser.params.login.admin.password)
        this.newPasswordTextbox.sendKeys(browser.params.login.admin.password)
        this.confirmPasswordTextbox.sendKeys(browser.params.login.admin.password)
        await this.saveChangesButton.click()
    }
}

