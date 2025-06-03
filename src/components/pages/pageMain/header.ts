import {Component} from '@Core/component';
import {Language} from "@Components/pages/pageMain/header/language";
import {ButtonLogin} from "@Components/pages/pageMain/header/buttonLogin";
import {DropDown} from "@Components/pages/pageMain/header/dropDown";

export class Header extends Component {
    private LOCATORS = {
        wrapperLanguage: this.locator.locator("//div[@class='sitetoolbar__lang-switcher']"),
        wrapperButtonLogin: this.locator.locator("//div[@class='sitetoolbar__login-wrap']"),
        registrationName: this.locator.locator("//button[@class='sitetoolbar__user']"),
        wrapperDropDown: this.locator.locator("//div[@class='sitetoolbar__user-wrap']//div[@class='sitetoolbar__dropdown-body']"),
    };

    public Language = new Language(this.LOCATORS.wrapperLanguage, this.page);
    public ButtonLogin = new ButtonLogin(this.LOCATORS.wrapperButtonLogin, this.page);
    public DropDown = new DropDown(this.LOCATORS.wrapperDropDown, this.page);

    public async clickOnLanguage(): Promise<void> {
        await this.LOCATORS.wrapperLanguage.waitFor();

        await this.LOCATORS.wrapperLanguage.click();
    }

    public async getLanguageOnHeader(): Promise<string> {
        return await this.LOCATORS.wrapperLanguage.innerText();
    }

    public async getRegistrationName(): Promise<string | null> {

        await this.LOCATORS.registrationName.waitFor();

        return await this.LOCATORS.registrationName.textContent()
    }

    public async clickRegistrationName(): Promise<void> {
        await this.LOCATORS.registrationName.waitFor();

        await this.LOCATORS.registrationName.click();

    }
}