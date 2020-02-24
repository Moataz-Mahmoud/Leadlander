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

    it('Display visits from "ISPs.today"', async () => {
        //login to the production environment
        loginPage.setUsername(browser.params.login.normal.username)
        loginPage.setPassword(browser.params.login.normal.password)
        loginPage.clickSignOnButton()

        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.ISPs.today.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.ISPs.today.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.ISPs.today.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.ISPs.today.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.ISPs.today.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.ISPs.today.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.ISPs.today.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.ISPs.today.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.ISPs.today.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.ISPs.today.mostRecentSearchTime)

        //check the visits per day section
        let visitsPerDay = await dashboard.getVisitsPerDay()
        expect(visitsPerDay).toBe(browser.params.dashboard.ISPs.today.visitsPerDay)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitors()
        expect(numberOfHits).toContain(browser.params.dashboard.ISPs.today.numberOfHits)
    }, 120000)

    it('Display visits from "ISPs.yesterday"', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        //show visits from ISPs.yesterday
        await dashboard.showVisitsFromYesterday()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.ISPs.yesterday.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.ISPs.yesterday.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.ISPs.yesterday.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.ISPs.yesterday.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.ISPs.yesterday.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.ISPs.yesterday.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.ISPs.yesterday.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.ISPs.yesterday.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.ISPs.yesterday.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.ISPs.yesterday.mostRecentSearchTime)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitors()
        expect(numberOfHits).toContain(browser.params.dashboard.ISPs.yesterday.numberOfHits)
    }, 120000)

    it('Display visits from "Last 7 Days"', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        //Show visits from the last 7 days
        await dashboard.showVisitsFromLast7Days()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.ISPs.last7Days.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.ISPs.last7Days.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.ISPs.last7Days.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.ISPs.last7Days.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.ISPs.last7Days.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.ISPs.last7Days.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.ISPs.last7Days.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.ISPs.last7Days.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.ISPs.last7Days.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.ISPs.last7Days.mostRecentSearchTime)

        //check the visits per day section
        let temp = await dashboard.getCustomVisitsPerDay()
        expect(temp.length).toEqual(8)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitorLast7Days()
        expect(numberOfHits).toContain(browser.params.dashboard.ISPs.last7Days.numberOfHits)
    }, 120000)

    it('Display visits from "Last 30 Days"', async () => {

        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        //Show visits from the last 30 days
        await dashboard.showVisitsFromLast30Days()

        //check the most recent visitors section
        let lastVisitorName = await dashboard.getRecentVisitorName()
        let lastVisitorDate = await dashboard.getRecentVisitorDate()
        let lastVisitorTime = await dashboard.getRecentVisitorTime()
        expect(lastVisitorName).toBe(browser.params.dashboard.ISPs.last30Days.lastVisitorName)
        expect(lastVisitorDate).toBe(browser.params.dashboard.ISPs.last30Days.lastVisitorDate)
        expect(lastVisitorTime).toBe(browser.params.dashboard.ISPs.last30Days.lastVisitorTime)

        //check the most recent people section
        let lastVisitorMail = await dashboard.getRecentVisitorMail()
        let lastVisitorTimeInMostRecentPeople = await dashboard.getRecentVisitorTimeInMostRecentPeople()
        expect(lastVisitorMail).toBe(browser.params.dashboard.ISPs.last30Days.lastVisitorMail)
        expect(lastVisitorTimeInMostRecentPeople).toBe(browser.params.dashboard.ISPs.last30Days.lastVisitorTimeInMostRecentPeople)

        //check the total visits
        let totalVisits = await dashboard.getTotalVisits()
        expect(totalVisits).toBe(browser.params.dashboard.ISPs.last30Days.totalVisits)
        //check the number of visitors who visited multiple pages
        let visitedMultiplePages = await dashboard.getVisitedMultiplePages()
        expect(visitedMultiplePages).toBe(browser.params.dashboard.ISPs.last30Days.visitedMultiplePages)
        //check the number of converted visitors
        let convertedVisits = await dashboard.getConvertedVisitors()
        expect(convertedVisits).toBe(browser.params.dashboard.ISPs.last30Days.convertedVisits)

        //check the most recent search terms
        let mostRecentSearchTerm = await dashboard.getMostRecentSearchTerm()
        let mostRecentSearchTime = await dashboard.getMostRecentSearchTime()
        expect(mostRecentSearchTerm).toBe(browser.params.dashboard.ISPs.last30Days.mostRecentSearchTerm)
        expect(mostRecentSearchTime).toBe(browser.params.dashboard.ISPs.last30Days.mostRecentSearchTime)

        //check the visits per day section
        let temp = await dashboard.getCustomVisitsPerDay()
        expect(temp.length).toEqual(30)

        //check the most active visitors section
        let numberOfHits = await dashboard.getMostActiveVisitorLast30Days()
        expect(numberOfHits).toContain(browser.params.dashboard.ISPs.last30Days.numberOfHits)
    }, 120000)

    it('See all visitors', async () => {
        //login to the production environment
        loginPage.setUsername(browser.params.login.admin.username)
        loginPage.setPassword(browser.params.login.admin.password)
        loginPage.clickSignOnButton()

        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        await dashboard.clickSeeAllVisitors()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        expect(visitsPage.getAllResultsDisplayed()).toContain(browser.params.dashboard.ISPs.today.totalVisits)
    })

    it('See all recent people', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        await dashboard.clickSeeAllRecentPeople()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        expect(visitsPage.getAllResultsDisplayed()).toContain(browser.params.dashboard.ISPs.today.allRecentPeople)

    })

    it('Check the most recent people with "CONVERTED" tag', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        dashboard.getConvertedUsers().getText().then((convertedUser) => {
            expect(convertedUser).toBe('CONVERTED')
        })
    })

    it('Check that every visitor row is clickable in "Most Recent Visitors" section', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        await dashboard.clickOnMostRecentVisitor()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.ISPs.today.totalVisits)
    })

    it('Check that every visitors row is clickable in "Most Recent People" section', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        await dashboard.clickOnTopOfMostRecentPeople()
        await browser.wait(ExpectedConditions.presenceOf(visitsPage.getTotalVisits()), 60000)

        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })

        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.ISPs.today.allRecentPeople)
    })

    it('Make sure that "this period", "viewed multiple pages", and "converted by form" are clickable', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

        await dashboard.clickOnTotalVisits()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let totalVisits = visitsPage.getTotalVisits().getText()
        expect(totalVisits).toContain(browser.params.dashboard.ISPs.today.totalVisits)

        browser.navigate().back()

        await dashboard.clickOnViewedMultiplePages()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let viewedMultiplePages = visitsPage.getTotalVisits().getText()
        expect(viewedMultiplePages).toContain(browser.params.dashboard.ISPs.today.totalVisits)

        browser.navigate().back()

        await dashboard.clickOnConvertedUsers()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual('http://localhost:57893/visits')
        })
        let convertedUsers = visitsPage.getTotalVisits().getText()
        expect(convertedUsers).toContain(browser.params.dashboard.ISPs.today.allRecentPeople)
    })

    it('checking that clicking the burger box expanding the left-hand panel', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the ISPs view
        await dashboard.selectISPsView()

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