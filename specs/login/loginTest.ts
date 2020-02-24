import { LoginPage } from '../../page_objects/LoginPage'
import { Dashboard } from '../../page_objects/Dashboard'
import { browser, ExpectedConditions, element, By } from 'protractor'

describe('Login page test cases', () => {
    let loginPage: LoginPage
    let dashboard: Dashboard

    beforeEach(() => {
        browser.get('http://localhost:57893/')
        loginPage = new LoginPage()
        dashboard = new Dashboard()
    })

    it('Login successfully', async () => {
        loginPage.setUsername(browser.params.login.username)
        loginPage.setPassword(browser.params.login.password)
        loginPage.clickSignOnButton()
        await browser.wait(ExpectedConditions.presenceOf(element(By.css('.user-name'))))
        expect(element(By.css('.user-name')).getAttribute('innerText')).toContain('Moataz Mahmoud')
        dashboard.clickLogout()
    })

    it('Login with empty password', () => {
        loginPage.setUsername(browser.params.login.username)
        loginPage.clickSignOnButton()
        expect(loginPage.getErrorMessage().getAttribute('innerText')).toContain('password')
    })

    it('Login with wrong username', () => {
        loginPage.setUsername('fake username')
        loginPage.setPassword(browser.params.login.password)
        loginPage.clickSignOnButton()
        expect(loginPage.getErrorMessage().getAttribute('innerText')).toContain('username')
    })

    it('Login with wrong password', () => {
        loginPage.setUsername(browser.params.login.username)
        loginPage.setPassword('fake password')
        loginPage.clickSignOnButton()
        expect(loginPage.getErrorMessage().getAttribute('innerText')).toContain('password')
    })

    it('Forgot password', async () => {
        loginPage.clickForgotPassword()
        loginPage.setForgotPasswordMailInupt(browser.params.login.username)
        await loginPage.clickSendResetEmail()
        expect(browser.getCurrentUrl()).toContain('login')
    })
})