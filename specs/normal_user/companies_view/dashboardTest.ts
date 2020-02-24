import { LoginPage } from '../../../page_objects/LoginPage'
import { Dashboard } from '../../../page_objects/Dashboard'
import { browser, ExpectedConditions, element, By } from 'protractor'
import { VisitsPage } from '../../../page_objects/VisitsPage'

describe('Dashboard test cases', async () => {
    let loginPage: LoginPage
    let dashboard: Dashboard
    let visitsPage: VisitsPage

    beforeEach(() => {
        browser.get('http://localhost:57893/')
        loginPage = new LoginPage()
        dashboard = new Dashboard()
        visitsPage = new VisitsPage()
    })

    it('Display visits from "Today"', async () => {
        //login to the production environment
        loginPage.setUsername(browser.params.login.normal.username)
        loginPage.setPassword(browser.params.login.normal.password)
        loginPage.clickSignOnButton()

        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.companies.today.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.companies.today.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.companies.today.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.companies.today.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.companies.today.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.companies.today.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.companies.today.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.companies.today.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.companies.today.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.companies.today.mostRecentSearchTime)

        //check the visits per day section
        let visitsPerDay = await dashboard.getVisitsPerDay()
        expect(visitsPerDay).toBe(browser.params.dashboard.companies.today.visitsPerDay)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitors()
        expect(numberOfHits).toContain(browser.params.dashboard.companies.today.numberOfHits)
    }, 120000)

    it('Display visits from "Yesterday"', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //show visits from yesterday
        await dashboard.showVisitsFromYesterday()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.companies.yesterday.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.companies.yesterday.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.companies.yesterday.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.companies.yesterday.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.companies.yesterday.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.companies.yesterday.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.companies.yesterday.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.companies.yesterday.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.companies.yesterday.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.companies.yesterday.mostRecentSearchTime)

        //check the visits per day section
        let visitsPerDay = await dashboard.getVisitsPerDay()
        expect(visitsPerDay).toBe(browser.params.dashboard.companies.yesterday.visitsPerDay)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitors()
        expect(numberOfHits).toContain(browser.params.dashboard.companies.yesterday.numberOfHits)
    }, 120000)

    it('Display visits from "Last 7 Days"', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //Show visits from the last 7 days
        await dashboard.showVisitsFromLast7Days()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.companies.last7Days.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.companies.last7Days.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.companies.last7Days.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.companies.last7Days.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.companies.last7Days.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.companies.last7Days.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.companies.last7Days.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.companies.last7Days.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.companies.last7Days.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.companies.last7Days.mostRecentSearchTime)

        //check the visits per day section
        let temp = await dashboard.getCustomVisitsPerDay()
        expect(temp.length).toEqual(8)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitorLast7Days()
        expect(numberOfHits).toContain(browser.params.dashboard.companies.last7Days.numberOfHits)
    }, 120000)

    it('Display visits from "Last 30 Days"', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //Show visits from the last 7 days
        await dashboard.showVisitsFromLast30Days()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.companies.last30Days.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.companies.last30Days.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.companies.last30Days.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.companies.last30Days.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.companies.last30Days.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.companies.last30Days.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.companies.last30Days.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.companies.last30Days.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.companies.last30Days.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.companies.last30Days.mostRecentSearchTime)

        //check the visits per day section
        let temp = await dashboard.getCustomVisitsPerDay()
        expect(temp.length).toEqual(30)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitorLast30Days()
        expect(numberOfHits).toContain(browser.params.dashboard.companies.last30Days.numberOfHits)
    }, 120000)

    it('See all visitors', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        await dashboard.clickSeeAllVisitors()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        expect(visitsPage.getAllResultsDisplayed()).toContain(browser.params.dashboard.companies.today.totalVisits)
    })

    it('See all recent people', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        await dashboard.clickSeeAllRecentPeople()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        expect(visitsPage.getAllResultsDisplayed()).toContain(browser.params.dashboard.companies.today.allRecentPeople)

    })

    it('Check those most recent visitors with emails attached', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        expect(dashboard.getVisitorMail()).toBe(browser.params.dashboard.companies.visitorMail)
    })


    it('Check the most recent people with "CONVERTED" tag', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        dashboard.getConvertedUsers().getText().then((convertedUser) => {
            expect(convertedUser).toBe('CONVERTED')
        })
    })

    it('Check that every visitor row is clickable in "Most Recent Visitors" section', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        await dashboard.clickOnMostRecentVisitor()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.companies.today.totalVisits)
    })

    it('Check that every visitors row is clickable in "Most Recent People" section', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        await dashboard.clickOnTopOfMostRecentPeople()
        await browser.wait(ExpectedConditions.presenceOf(visitsPage.getTotalVisits()), 60000)

        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })

        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.companies.today.allRecentPeople)
    })

    it('Make sure that "this period", "viewed multiple pages", and "converted by form" are clickable', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        await dashboard.clickOnTotalVisits()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.companies.today.totalVisits)

        browser.navigate().back()

        await dashboard.clickOnViewedMultiplePages()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let viewedMultiplePages = visitsPage.getTotalVisits().getText()
        expect(viewedMultiplePages).toContain(browser.params.dashboard.companies.today.totalVisits)

        browser.navigate().back()

        await dashboard.clickOnConvertedUsers()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let convertedUsers = visitsPage.getTotalVisits().getText()
        expect(convertedUsers).toContain(browser.params.dashboard.companies.today.allRecentPeople)
    })

    it('checking that clicking the burger box expanding the left-hand panel', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //Expect the class of side menu to be closed at first
        element(By.css('.closed.main-navigation')).isPresent().then(function (present) {
            expect(present).toBe(true)
        })
        //then click the burger box
        await dashboard.clickBurgerbox()
        //now expect the side menu to class to be changed from closed to open
        element(By.css('.closed.main-navigation')).isPresent().then(function (present) {
            expect(present).toBe(false)
        })
        element(By.css('.opened.main-navigation')).isPresent().then(function (present) {
            expect(present).toBe(true)
        })
    })
})