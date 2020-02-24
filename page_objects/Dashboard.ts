import { element, By, browser, protractor, WebElement, ElementArrayFinder } from "protractor"

export class Dashboard {
    private userMenu = element(By.css('.user-name'))
    private logoutButton = element(By.cssContainingText('.btn.grey-btn', 'Logout'))

    private burgerBox = element(By.css('.burger-box'))
    private dashboardButton = element(By.css('.icon-nav-db'))
    private visitsButton = element(By.css('.icon-nav-visits'))
    private pagesButton = element(By.css('.icon-nav-docs'))
    private reportsButton = element(By.css('.icon-reports'))
    private settingsButton = element(By.css('.icon-nav-settings'))
    private adminButton = element(By.css('.icon-nav-security'))
    private billingButton = element(By.css('.icomoon-financial'))

    private ISPsView = element.all((By.cssContainingText('option', 'ISPs'))).get(0)
    private companiesAndISPsView = element(By.cssContainingText('option', 'Companies & ISPs'))

    private dayPicker = element(By.id('dateApp'))
    private yesterdayPicker = element(By.cssContainingText('option', "Yesterday"))
    private last7DaysPicker = element(By.cssContainingText('option', 'Last 7 Days'))
    private last30DaysPicker = element(By.cssContainingText('option', 'Last 30 Days'))
    private customPicker = element(By.cssContainingText('option', 'Custom'))

    private recentVisitorName = element(By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[2]/td[1]'))
    private recentVisitDate = element(By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[1]/td[2]/span[1]'))
    //this variable will be reset for the most recent people's section
    private recentVisitTime = element(By.xpath('//*[@id="most-resent-visits"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'))
    private recentVisitorMail = element(By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[1]/a[1]/span'))
    private recentVisitTimeInMostRecentPeople = element(By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'))
    private topOfMostRecentPeople = element(By.xpath('//*[@id="most-resent-people"]/div[2]/table/tbody/tr[1]/td[1]/a[1]/span'))

    private numberOfVisitsThisPeriod = element(By.xpath('//*[@id="visitors-statistics"]/div[2]/div[1]/div'))
    private numberOfViewedMultiplePages = element(By.xpath('//*[@id="visitors-statistics"]/div[2]/div[2]/div'))
    private numberOfconvertedFromForm = element(By.xpath('//*[@id="visitors-statistics"]/div[2]/div[3]/div'))

    private mostRecentSearchTerm = element(By.xpath('//*[@id="most-resent-search-terms"]/div[2]/table/tbody/tr[1]/td[1]'))
    private mostRecentSearchTime = element(By.xpath('//*[@id="most-resent-search-terms"]/div[2]/table/tbody/tr[1]/td[2]/span[2]'))

    private visitsPerDay = element.all(By.css('.highcharts-text-outline')).get(1)
    private customVisitsPerDay = element(By.css('.highcharts-series.highcharts-series-1.highcharts-bar-series.highcharts-color-1.highcharts-tracker'))

    private mostActiveVisitor = element.all(By.css('.highcharts-point.highcharts-color-0')).get(5)
    private numberOfHits = element.all(By.xpath('//*[contains(@id,"highcharts-")]')).get(6)

    private seeAllVisitorsButton = element(By.xpath('//*[@id="most-resent-visits"]/div[3]/a'))
    private seeAllRecentPeopleButton = element(By.xpath('//*[@id="most-resent-people"]/div[3]/a'))

    private visitorRow = element.all(By.tagName('tr')).get(1)
    private visitorMail = (this.visitorRow.all(By.tagName('td')).get(0)).all(By.tagName('a')).get(0)
    private convertedTag = element(By.css('.status.text-uppercase'))

    async getRecentVisitorName() {
        return this.recentVisitorName.getText()
    }

    async getRecentVisitorDate() {
        return this.recentVisitDate.getText()
    }

    async getRecentVisitorTime() {
        return this.recentVisitTime.getText()
    }

    async getRecentVisitorMail() {
        return this.recentVisitorMail.getText()
    }

    async getRecentVisitorTimeInMostRecentPeople() {
        return this.recentVisitTimeInMostRecentPeople.getText()
    }

    async getTotalVisits() {
        return this.numberOfVisitsThisPeriod.getText()
    }

    async getVisitedMultiplePages() {
        return this.numberOfViewedMultiplePages.getText()
    }

    async getConvertedVisitors() {
        return this.numberOfconvertedFromForm.getText()
    }

    async getMostRecentSearchTerm() {
        return this.mostRecentSearchTerm.getText()
    }

    async getMostRecentSearchTime() {
        return this.mostRecentSearchTime.getText()
    }

    async getVisitsPerDay() {
        return this.visitsPerDay.getText()
    }

    async getMostActiveVisitors() {
        browser.wait(protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor))
        await browser.actions().mouseMove(this.mostActiveVisitor).perform()
        browser.wait(protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000)

        return this.numberOfHits.getText()
    }

    async getCustomVisitsPerDay() {
        return this.customVisitsPerDay.all(By.css('.highcharts-point.highcharts-color-1'))
    }

    async getMostActiveVisitorLast7Days() {
        browser.wait(protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor))
        this.mostActiveVisitor = element.all(By.css('.highcharts-point.highcharts-color-0')).get(12)
        await browser.actions().mouseMove(this.mostActiveVisitor).perform()
        browser.wait(protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000)

        return this.numberOfHits.getText()
    }

    async getMostActiveVisitorLast30Days() {
        browser.wait(protractor.ExpectedConditions.presenceOf(this.mostActiveVisitor))
        this.mostActiveVisitor = element.all(By.css('.highcharts-point.highcharts-color-0')).get(34)
        await browser.actions().mouseMove(this.mostActiveVisitor).perform()
        browser.wait(protractor.ExpectedConditions.presenceOf(this.numberOfHits), 15000)

        return this.numberOfHits.getText()
    }

    async clickSeeAllVisitors() {
        await this.seeAllVisitorsButton.click()
    }

    async clickSeeAllRecentPeople() {
        await this.seeAllRecentPeopleButton.click()
    }

    getVisitorMail() {
        return this.visitorMail.getText()
    }

    getConvertedUsers() {
        return this.convertedTag
    }

    async clickOnMostRecentVisitor() {
        await this.recentVisitorName.click()
    }

    async clickOnTopOfMostRecentPeople() {
        await this.topOfMostRecentPeople.click()
    }

    async clickOnTotalVisits() {
        await this.numberOfVisitsThisPeriod.click()
    }

    async clickOnViewedMultiplePages() {
        await this.numberOfViewedMultiplePages.click()
    }

    async clickOnConvertedUsers() {
        await this.numberOfconvertedFromForm.click()
    }

    async clickLogout() {
        await this.userMenu.click()
        await this.logoutButton.click()
    }

    async openDashboard() {
        await this.dashboardButton.click()
    }

    async openVisitsPage() {
        await this.visitsButton.click()
    }

    async openPages() {
        await this.pagesButton.click()
    }

    async openReportsPage() {
        await this.reportsButton.click()
    }

    async openSettingPage() {
        await this.settingsButton.click();
    }

    async openAdminSection() {
        await this.adminButton.click()
    }

    async openBillingPage() {
        await this.billingButton.click()
    }

    getDayPicker() {
        return this.dayPicker
    }

    async showVisitsFromYesterday() {
        await this.dayPicker.click()
        await this.yesterdayPicker.click()
    }

    async showVisitsFromLast7Days() {
        await this.dayPicker.click()
        await this.last7DaysPicker.click()
    }

    async showVisitsFromLast30Days() {
        await this.dayPicker.click()
        await this.last30DaysPicker.click()
    }

    async showVisitsFromCustomView() {
        await this.customPicker.click()
    }

    async clickBurgerbox() {
        await this.burgerBox.click()
    }

    async selectISPsView() {
        await this.ISPsView.click()
    }

    async selectCompaniesAndISPsView() {
        await this.companiesAndISPsView.click()
    }
}