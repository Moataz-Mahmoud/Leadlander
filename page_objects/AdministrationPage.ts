import {By, element, browser, protractor } from "protractor"

export class AdministrationPage {
    private addUserButton = element(By.xpath('/html/body/leadlander/div/system-admin/div/users-management/div[1]/span/button'))
    private displayName = element(By.name('displayName'))
    private userName = element(By.name('email'))
    private email = element(By.name('reportEmail'))
    private submitButton = element(By.cssContainingText('.btn.green-btn', 'Submit'))
    private successMessage = element(By.css('.callout.success')).all(By.css('.row')).first()
    private lastUserEmail = element(By.xpath('/html/body/leadlander/div/system-admin/div/users-management/div[2]/div/div/users-table/table/tbody/tr[1]/td[4]'))
    private lastUserName = element(By.xpath('//*[@id="users-wrap"]/users-table/table/tbody/tr[1]/td[2]'))
    private deleteIcon = element.all(By.css('.icon-trash')).get(0)
    private editIcon = element.all(By.css('.icon-edit')).get(0)

    private getTrackingCodeButton = element.all(By.css('.t-btn')).get(1)
    private copyToClipboardButton = element(By.cssContainingText('.t-btn', 'Copy to Clipboard'))

    private formTrackingCode = element.all(By.css('.t-btn')).get(1)

    private leadScoresTab = element(By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[2]/a'))
    private ignoredCompaniesTab = element(By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[3]/a')) 
    private ignoredPagesTab = element(By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[4]/a'))
    private domainsTab = element(By.xpath('/html/body/leadlander/div/system-admin/horizontal-nav/div/div/ul/li[5]/a'))
    private addLeadButton = element(By.cssContainingText('.btn.t-btn', 'Add Lead'))
    private pageURL = element(By.name('page'))
    private saveButton = element(By.cssContainingText('.btn.green-btn', 'Save'))
    private lastAddedLead = element(By.xpath('//*[@id="leadscores-wrap"]/lead-scores-table/table/tbody/tr[1]/td[4]'))
    private lastIgnoredCompany = element(By.xpath('//*[@id="ignored-companies-wrap"]/ignored-companies-table/table/tbody/tr[1]/td[2]'))
    private lastIgnoredPage = element(By.xpath('//*[@id="ignored-pages-wrap"]/ignored-pages-table/table/tbody/tr/td[2]'))

    async clickAddUser() {
        await this.addUserButton.click()
    }

    setDisplayName() {
        this.displayName.sendKeys('test user')
    }

    setUserName() {
        this.userName.sendKeys(browser.params.administration.username)
    }

    setEmail() {
        this.email.sendKeys(browser.params.administration.username)
    }

    submit() {
        this.submitButton.click()
    }

    async getSuccessMessage() {
        return await this.successMessage.getText()
    }

    getlastUserEmail() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.lastUserEmail), 10000)
        return this.lastUserEmail.getText()
    }

    async getLastUserName() {
        return await this.lastUserName.getText()
    }

    async deleteUser() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.deleteIcon), 10000)
        await this.deleteIcon.click()
        browser.switchTo().alert().then((alert) => {
            alert.accept()
        })
    }

    async editUser() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.editIcon), 10000)
        await this.editIcon.click()
        this.displayName.clear()
        this.displayName.sendKeys('Edited User')
        await this.submitButton.click()
        await this.getSuccessMessage()
    }

    getTrackingCode() {
        this.getTrackingCodeButton.click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.copyToClipboardButton), 10000)    
    }

    generateFormTrackingCode() {
        this.formTrackingCode.click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.copyToClipboardButton), 10000)
    }

    async openLeadScoresPage() {
        await this.leadScoresTab.click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.addLeadButton))
    }

    async clickAddLead() {
        await this.addLeadButton.click()
    }

    setPageURL(URL: string) {
        this.pageURL.sendKeys(URL)
    }

    async editLead() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.editIcon), 10000)
        await this.editIcon.click()
        this.pageURL.clear()
        this.pageURL.sendKeys('Edited Lead')
        await this.saveButton.click()
        await this.getSuccessMessage()
    }

    async getLastAddedLead() {
        return await this.lastAddedLead.getText()
    }

    async deleteLead() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.deleteIcon), 10000)
        await this.deleteIcon.click()
        browser.switchTo().alert().then((alert) => {
            alert.accept()
        })
    }

    async openIgnoredCompaniesPage() {
        await this.ignoredCompaniesTab.click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.deleteIcon))
    }

    async getLastIgnoredCompany(){
        return await this.lastIgnoredCompany.getText()
    }

    async deleteIgnoredCompany() { 
        await this.deleteIcon.click()
        browser.switchTo().alert().then((alert) => {
            alert.accept()
        })
    }

    async openIgnoredPages() {
        await this.ignoredPagesTab.click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.deleteIcon))
    }

    async getLastIgnoredPage() {
        return await this.lastIgnoredPage.getText()
    }

    async deleteIgnoredPage() {
        await this.deleteIcon.click()
    }
}

