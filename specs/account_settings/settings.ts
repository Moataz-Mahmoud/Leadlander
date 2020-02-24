import { LoginPage } from '../../page_objects/LoginPage'
import { Dashboard } from '../../page_objects/Dashboard'
import { browser, ExpectedConditions, element, By, protractor } from 'protractor'
import { SettingsPage } from '../../page_objects/SettingsPage'
import { async } from 'q'

let loginPage: LoginPage
let dashboard: Dashboard
let settings: SettingsPage

beforeAll(() => {
    loginPage = new LoginPage()
    dashboard = new Dashboard()
    settings = new SettingsPage()

    browser.get(browser.params.baseURL)

    //login to the production environment
    loginPage.setUsername(browser.params.login.admin.username)
    loginPage.setPassword(browser.params.login.admin.password)
    loginPage.clickSignOnButton()
})

describe('Email Alerts & Reports tab: ', async () => {
    beforeEach(async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openSettingPage()
    })

    it('enable daily emails for the most active visitors', async () => {
        await settings.enableDailyEmails()
        expect(await settings.getSuccessMessage()).toEqual('Subscription Changed')
    })

    it('enable weekly emails for the most active visitors', async () => {
        await settings.enableWeeklyEmails()
        expect(await settings.getSuccessMessage()).toEqual('Subscription Changed')
    })

    it('select specific number of page views for daily email reports', async () => {
        await settings.changeNumberOfDailyMostActiveVisitors("75")
        expect(await settings.getSuccessMessage()).toEqual('Value Changed')
    })

    it('select specific number of page views for weekly email reports', async () => {
        await settings.changeNumberOfWeeklyMostActiveVisitors("200")
        expect(await settings.getSuccessMessage()).toEqual('Value Changed')
    })

    it('enable instant email alerts', async () => {
        await settings.enableInstantEmailAlerts()
        expect(await settings.getSuccessMessage()).toEqual('Subscription Changed')
    })

    it('change the number of pages viewed for instant email alerts', async () => {
        await settings.changeNumberOfInstantPagesViewed("11")
        expect(await settings.getSuccessMessage()).toEqual('Value Changed')
    })

    it('enable form email alerts', async () => {
        await settings.enableFormEmailAlerts()
        expect(await settings.getSuccessMessage()).toEqual('Subscription Changed')
    })

    it('enable watchlist email alerts', async () => {
        await settings.enableWatchlistEmailAlerts()
        expect(await settings.getSuccessMessage()).toEqual('Subscription Changed')
    })
})

describe('Lead Scoring tab: ', async () => {
    beforeEach(async () => {//wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openSettingPage()

        //open lead scoring tab
        await settings.openLeadScoringTab()
    })

    it('add new lead score', async () => {
        await settings.addLead()
        expect(await settings.getSuccessMessage()).toEqual('New lead added')
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:52990/account-settings/lead-scores')
        })
    })

    it('edit an existing lead score', async () => {
        await settings.editLead()
        expect(await settings.getSuccessMessage()).toEqual('Lead updated')
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:52990/account-settings/lead-scores')
        })
    })

    it('delete a lead score', async () => {
        await settings.deleteLead()
        expect(await settings.getSuccessMessage()).toEqual('Lead deleted')
    })
})

describe('Filters tab: ', async () => {
    beforeEach(async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openSettingPage()

        //open lead scoring tab
        await settings.openFiltersTab()
    })

    it('check filters changing', async () => {
        await settings.checkFilters()
        expect(await settings.getSuccessMessage()).toEqual('Filter Changed')
    })
})

describe('Preferences tab: ', async () => {
    beforeEach(async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openSettingPage()

        //open lead scoring tab
        await settings.openPreferencesTab()
    })

    it('check filters changing', async () => {
        await settings.changePreferences()
        expect(await settings.getSuccessMessage()).toEqual('User Updated')
    })
})

fdescribe('Password tab: ', async () => {
    beforeEach(async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openSettingPage()

        //open lead scoring tab
        await settings.openPasswordTab()
    })

    it('check filters changing', async () => {
        await settings.changePassword()
        expect(await settings.getSuccessMessage()).toEqual('Password updated')
    })
})


