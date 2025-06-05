import {Component} from '@Core/component';
import {Country} from "@Components/pages/pageProfile/profile/country";

export class Profile extends Component {
    private LOCATORS = {
        _self: this.locator,
        wrapperTitle: this.locator.locator("//h2[contains(@class, 'profile-aboutme__title') and contains(text(), 'Публичный профиль')]"),
        wrapperDescription: this.locator.locator("//div[contains(@class, 'profile-aboutme__greyed-text')]"),
        wrapperCountry: this.locator.locator("//form[contains(@data-field, 'country')]"),
        wrapperCity: this.locator.locator("//form[contains(@data-field, 'town')]"),
        wrapperEmail: this.locator.locator("//form[contains(@data-field, 'publicEmail')]"),
        wrapperIntereses: this.locator.locator("//form[contains(@data-field, 'interests')]"),
        wrapperAboutMe: this.locator.locator("//form[contains(@data-field, 'aboutMe')]"),
        wrapperBornDate: this.locator.locator("//form[contains(@data-field, 'birthday')]"),
    };

    public Country = new Country(this.LOCATORS.wrapperCountry, this.page);

    public async getTitle(): Promise<string> {
        await this.LOCATORS.wrapperTitle.waitFor();

        return await this.LOCATORS.wrapperTitle.innerText();
    };

    public async isVisibleTitle(): Promise<boolean> {
        await this.LOCATORS.wrapperTitle.waitFor();

        return await this.LOCATORS.wrapperTitle.isVisible();
    };

    public async isVisibleDescription(): Promise<boolean> {
        await this.LOCATORS.wrapperDescription.waitFor();

        return await this.LOCATORS.wrapperDescription.isVisible();
    };

    public async isVisibleCountry(): Promise<boolean> {
        await this.LOCATORS.wrapperCountry.waitFor();

        return await this.LOCATORS.wrapperCountry.isVisible();
    };

    public async isVisibleCity(): Promise<boolean> {
        await this.LOCATORS.wrapperCity.waitFor();

        return await this.LOCATORS.wrapperCity.isVisible();
    };

    public async isVisibleEmail(): Promise<boolean> {
        await this.LOCATORS.wrapperEmail.waitFor();

        return await this.LOCATORS.wrapperEmail.isVisible();
    };

    public async isVisibleIntereses(): Promise<boolean> {
        await this.LOCATORS.wrapperIntereses.waitFor();

        return await this.LOCATORS.wrapperIntereses.isVisible();
    };

    public async isVisibleAboutMe(): Promise<boolean> {
        await this.LOCATORS.wrapperAboutMe.waitFor();

        return await this.LOCATORS.wrapperAboutMe.isVisible();
    };

    public async isVisibleBornDate(): Promise<boolean> {
        await this.LOCATORS.wrapperBornDate.waitFor();

        return await this.LOCATORS.wrapperBornDate.isVisible();
    };
}