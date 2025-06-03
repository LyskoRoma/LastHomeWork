import {Component} from '@Core/component';

export class Profile extends Component {
    private LOCATORS = {
        _self: this.locator,
        title: this.locator.locator("//h2[contains(@class, 'profile-aboutme__title') and contains(text(), 'Публичный профиль')]"),
        description: this.locator.locator("//div[contains(@class, 'profile-aboutme__greyed-text')]"),
        country: this.locator.locator("//form[contains(@data-field, 'country')]"),
        city: this.locator.locator("//form[contains(@data-field, 'town')]"),
        email: this.locator.locator("//form[contains(@data-field, 'publicEmail')]"),
        intereses: this.locator.locator("//form[contains(@data-field, 'interests')]"),
        aboutMe: this.locator.locator("//form[contains(@data-field, 'aboutMe')]"),
        bornDate: this.locator.locator("//form[contains(@data-field, 'birthday')]"),
    };

    public async getTitle(): Promise<string> {
        await this.LOCATORS.title.waitFor();

        return await this.LOCATORS.title.innerText();
    };

    public async isVisibleTitle(): Promise<boolean> {
        await this.LOCATORS.title.waitFor();

        return await this.LOCATORS.title.isVisible();
    };

    public async isVisibleDescription(): Promise<boolean> {
        await this.LOCATORS.description.waitFor();

        return await this.LOCATORS.description.isVisible();
    };

    public async isVisibleCountry(): Promise<boolean> {
        await this.LOCATORS.country.waitFor();

        return await this.LOCATORS.country.isVisible();
    };

    public async isVisibleCity(): Promise<boolean> {
        await this.LOCATORS.city.waitFor();

        return await this.LOCATORS.city.isVisible();
    };

    public async isVisibleEmail(): Promise<boolean> {
        await this.LOCATORS.email.waitFor();

        return await this.LOCATORS.email.isVisible();
    };

    public async isVisibleIntereses(): Promise<boolean> {
        await this.LOCATORS.intereses.waitFor();

        return await this.LOCATORS.intereses.isVisible();
    };

    public async isVisibleAboutMe(): Promise<boolean> {
        await this.LOCATORS.aboutMe.waitFor();

        return await this.LOCATORS.aboutMe.isVisible();
    };

    public async isVisibleBornDate(): Promise<boolean> {
        await this.LOCATORS.bornDate.waitFor();

        return await this.LOCATORS.bornDate.isVisible();
    };
}