import {Component} from '@Core/component';

export class Language extends Component {
    private LOCATORS = {
        languagesList: this.locator.locator("//div[@class='supported-langs__container']"),
        languageText: this.locator.locator("//div[@class='supported-langs__text']"),
        currentLanguage: this.locator.locator("//li[contains(@class, 'supported-langs__item') and contains(@class, 'supported-langs__item_current')]"),
        dropDownActive: this.locator.locator("//div[contains(@class, 'sitetoolbar__dropdown') and contains(@style, 'display: block')]"),
        dropDownDeactive: this.locator.locator("//div[contains(@class, 'sitetoolbar__dropdown') and contains(@style, 'display: none')]"),
        italianLanguage: this.locator.locator("//span[text()='IT']"),
        russianLanguage: this.locator.locator("//span[text()='RU']"),
    };

    public async languageListIsVisible(): Promise<boolean> {
        await this.LOCATORS.languagesList.waitFor();

        return await this.LOCATORS.languagesList.isVisible();
    }

    public async languageTextIsVisible(): Promise<boolean> {
        await this.LOCATORS.languagesList.waitFor();

        return await this.LOCATORS.languageText.isVisible();
    }

    public async currentLanguageIsVisible(): Promise<boolean> {
        await this.LOCATORS.currentLanguage.waitFor();

        return await this.LOCATORS.currentLanguage.isVisible();
    }

    public async getCurrentLanguageText(): Promise<string> {
        return await this.LOCATORS.currentLanguage.innerText();
    }

    public async dropDownnIsActive(): Promise<boolean> {
        const count = await this.LOCATORS.dropDownActive.count();
        return count > 0;
    }

    public async dropDownnIsDeactive(): Promise<boolean> {
        const count = await this.LOCATORS.dropDownDeactive.count();
        return count > 0;
    }

    public async clickItalianLanguage(): Promise<void> {
        await this.LOCATORS.italianLanguage.waitFor();

        await this.LOCATORS.italianLanguage.click();
    }

    public async clickRussianLanguage(): Promise<void> {
        await this.LOCATORS.russianLanguage.waitFor();

        await this.LOCATORS.russianLanguage.click();
    }


};