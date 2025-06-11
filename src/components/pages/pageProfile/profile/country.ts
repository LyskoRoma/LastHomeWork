import {Component} from '@Core/component';
import {credentials} from "@Constants/credentials";

export class Country extends Component {
    private LOCATORS = {
        _self: this.locator,
        title: this.locator.locator("//label[@class='profile-field__title']"),
        buttonAddCountry: this.locator.locator("//a[@class='profile-field__link']"),
        inputAfterAddClick: this.locator.locator("//input[contains(@class, 'text-input__control')]"),
        buttonSubmit: this.locator.locator("//button[@type='submit']"),
        buttonCancel: this.locator.locator("//a[@class='profile-field__cancel']"),
        suggestCountry: this.locator.locator("//ul[@role='listbox']"),
        addedCountry: this.locator.locator("//div[@class='profile-field__container']"),
    };

    public async clickButtonAddCountry(): Promise<void> {
        await this.LOCATORS.buttonAddCountry.waitFor();

        await this.LOCATORS.buttonAddCountry.click();
    };

    async fillInput(value: string) {
        await this.LOCATORS.inputAfterAddClick.waitFor();

        await this.LOCATORS.inputAfterAddClick.fill(value);
    };

    public async clickSuggest(): Promise<void> {
        await this.LOCATORS.suggestCountry.waitFor();

        await this.LOCATORS.suggestCountry.click();
    };

    public async clickSubmit(): Promise<void> {
        await this.LOCATORS.buttonSubmit.waitFor();

        await this.LOCATORS.buttonSubmit.click();
    };

    public async isVisibleTitle(): Promise<boolean> {
        await this.LOCATORS.title.waitFor();

        return await this.LOCATORS.title.isVisible();
    };

    public async isVisibleButtonAddCountry(): Promise<boolean> {
        await this.LOCATORS.buttonAddCountry.waitFor();

        return await this.LOCATORS.buttonAddCountry.isVisible();
    };

    public async isVisibleAddedCountry(): Promise<boolean> {
        await this.LOCATORS.addedCountry.waitFor();

        return await this.LOCATORS.addedCountry.isVisible();
    };

    public async getTitleAddedCountry(): Promise<string> {
        await this.LOCATORS.addedCountry.waitFor();

        return await this.LOCATORS.addedCountry.innerText();
    }

    public async clickAddedCountry(): Promise<void> {
        await this.LOCATORS.addedCountry.waitFor();

        await this.LOCATORS.addedCountry.click();
    }

    public async clearInput(): Promise<void> {
        await this.LOCATORS.inputAfterAddClick.waitFor();
        await this.LOCATORS.inputAfterAddClick.fill('');
    };



}