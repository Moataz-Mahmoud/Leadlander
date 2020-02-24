import { element, By, browser, ExpectedConditions } from "protractor";

export class LoginPage {
    usernameInput = element(By.id('name'))
    passwordInput = element(By.id('password'))
    signOnButton = element(By.cssContainingText('.btn', 'Sign On'))
    loginErrorMessage = element(By.xpath('/html/body/leadlander/div/ll-login/div/div/div[1]/form/div[3]'))
    forgotPassowrdButton = element(By.cssContainingText('.link-btn', 'Forgot Password'))
    forgotPasswordMailInput = element(By.id('userEmail'))
    sendResetMailButton = element(By.cssContainingText('.btn', 'Send Reset Email'))

    public setUsername(username: string) {
        this.usernameInput.sendKeys(username)
    }

    public setPassword(password: string) {
        this.passwordInput.sendKeys(password)
    }

    public clickSignOnButton() {
        this.signOnButton.click()
    }

    public getErrorMessage() {
        return this.loginErrorMessage
    }

    public clickForgotPassword() {
        this.forgotPassowrdButton.click()
    }

    public setForgotPasswordMailInupt(mail: string) {
        this.forgotPasswordMailInput.sendKeys(mail)
    }

    public async clickSendResetEmail() {
        await this.sendResetMailButton.click()
    }
}