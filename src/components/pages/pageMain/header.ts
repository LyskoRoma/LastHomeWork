import { Component } from '@Core/component';
import { Language} from "@Components/pages/pageMain/header/language";

export class Header extends Component {
    private LOCATORS = {
        wrapperLanguage: this.locator.locator("//div[@class='sitetoolbar__lang-switcher']"),
    };

    public Language = new Language(this.LOCATORS.wrapperLanguage, this.page);

    public async clickOnLanguage(): Promise<void> {
        await this.LOCATORS.wrapperLanguage.waitFor();

        await this.LOCATORS.wrapperLanguage.click();
    }

    public async getLanguageOnHeader(): Promise<string> {
        return await this.LOCATORS.wrapperLanguage.innerText();
    }

}