import { element, By } from "protractor";

export class VisitsPage {
    private fromMenu = element(By.name('filter'))
    private totalVisits = element.all(By.css('.float-left')).get(0)

    private allResultsDisplayed = element.all(By.css('.float-left')).get(0)

    async selectFromMenu(option: string) {
        await this.fromMenu.click()
        element(By.cssContainingText('option', option)).click();
    }

    getAllResultsDisplayed() {
        return this.allResultsDisplayed.getText()
    }

    getTotalVisits() {
        return this.totalVisits
    }

}