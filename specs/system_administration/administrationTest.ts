import { LoginPage } from '../../page_objects/LoginPage'
import { Dashboard } from '../../page_objects/Dashboard'
import { browser, ExpectedConditions, element, By, protractor } from 'protractor'
import { VisitsPage } from '../../page_objects/VisitsPage'
import { AdministrationPage } from '../../page_objects/AdministrationPage'
import { async } from 'q'

describe('Administration:', async () => {
    let loginPage: LoginPage
    let dashboard: Dashboard
    let visitsPage: VisitsPage
    let administrationPage: AdministrationPage

    beforeEach(() => {
        browser.get(browser.params.baseURL)
        loginPage = new LoginPage()
        dashboard = new Dashboard()
        visitsPage = new VisitsPage()
        administrationPage = new AdministrationPage()
    })

    it('Add new user', async() => {
         //login to the production environment
         loginPage.setUsername(browser.params.login.admin.username)
         loginPage.setPassword(browser.params.login.admin.password)
         loginPage.clickSignOnButton()
 
         //wait until the dashboard loads completely
         await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

         //open the administration page
         await dashboard.openAdminSection()

         await administrationPage.clickAddUser()
         await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual(browser.params.baseURL + 'system-admin/add-user')
        })

        //add the new user
        administrationPage.setDisplayName()
        administrationPage.setUserName()
        administrationPage.setEmail()
        administrationPage.submit()

        expect(await administrationPage.getSuccessMessage()).toBe('User Added')
    })
 
    it('Delete new user', async ()=> {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()

        //start deleting a user
        let lastUserEmail = administrationPage.getlastUserEmail()
        await administrationPage.deleteUser()
        //sleep the browser until the table of users reloads itself
        browser.sleep(5000)
        expect(administrationPage.getlastUserEmail()).not.toBe(lastUserEmail)
    })

    it('Edit the last added user', async() => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()
        
        //start editing the user ... 
        await administrationPage.editUser()
        browser.navigate().back()
        expect(await administrationPage.getLastUserName()).toContain('Edited User')
    })
    
    it('Get tracking code', async() => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()
        
        //start getting 
        administrationPage.getTrackingCode()
    })

    it('Generate form-tracking code', async() => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()
        
        //start getting 
        administrationPage.generateFormTrackingCode()
    })

    it('Add new lead', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()

        //start adding new lead score
        await administrationPage.openLeadScoresPage()

        await administrationPage.clickAddLead()
        await browser.getCurrentUrl().then((currentURL) => {
            expect(currentURL).toEqual(browser.params.baseURL + 'system-admin/add-custom-lead')
        })

        //add new lead
        administrationPage.setPageURL(browser.params.administration.pageURL)
        administrationPage.submit()
        
        expect(await administrationPage.getSuccessMessage()).toBe('New lead added')
    })

    it('Edit the last added lead', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()

        //start editing the user ... 
        await administrationPage.openLeadScoresPage()
        await administrationPage.editLead()
        expect(await administrationPage.getLastAddedLead()).toContain('Edited Lead')
    })

    it('Delete new lead', async ()=> {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)
        
        //open the administration page
        await dashboard.openAdminSection()

        //start deleting a lead
        await administrationPage.openLeadScoresPage()
        let lastAddedLead = administrationPage.getLastAddedLead()
        await administrationPage.deleteLead()
        //sleep the browser until the table of users reloads itself
        browser.sleep(5000)
        expect(administrationPage.getLastAddedLead()).not.toBe(lastAddedLead)
   })

    it('Delete ignored company', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()

        //start adding new lead score
        await administrationPage.openIgnoredCompaniesPage()

        //start deleting an ignored company
        let lastIgnoredCompany = administrationPage.getLastIgnoredCompany()
        await administrationPage.deleteIgnoredCompany()
        //sleep the browser until the table of users reloads itself
        browser.sleep(5000)
        expect(administrationPage.getLastAddedLead()).not.toBe(lastIgnoredCompany)
    })

    it('Delete ignored page', async () => {
        //wait until the dashboard loads completely
        await browser.wait(ExpectedConditions.presenceOf(dashboard.getDayPicker()), 60000)

        //open the administration page
        await dashboard.openAdminSection()

        //start adding new lead score
        await administrationPage.openIgnoredPages()

        //start deleting an ignored company
        let lastIgnoredPage = administrationPage.getLastIgnoredPage()
        await administrationPage.deleteIgnoredPage()
        //sleep the browser until the table of users reloads itself
        browser.sleep(5000)
        expect(administrationPage.getLastAddedLead()).not.toBe(lastIgnoredPage)
    })
})