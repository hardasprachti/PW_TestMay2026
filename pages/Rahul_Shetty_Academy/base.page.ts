import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export abstract class BasePage {

    constructor(protected page: Page) { }

    protected async safeClick(locator: Locator, options?: { timeout?: number }) {
        await locator.waitFor({ state: 'visible', timeout: options?.timeout ?? 1000 });
        await locator.scrollIntoViewIfNeeded()
        await locator.click()

    }

    async waitForNetworkIdle() {
        await this.page.waitForLoadState('networkidle')

    }

    async assertToastMessage(expected: string) {
        const toast = this.page.getByRole('alert')
        await expect(toast).toHaveText(expected, { timeout: 8000 })
    }

}