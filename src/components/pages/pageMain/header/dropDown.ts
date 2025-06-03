import {Component} from '@Core/component';

export class DropDown extends Component {
    private LOCATORS = {
        _self: this.locator,
        buttonPublicProfile: this.locator.locator("//a[contains(text(), 'Публичный профиль')]"),
        buttonAccount: this.locator.locator("//a[contains(text(), 'Аккаунт')]"),
        buttonExit: this.locator.locator("//a[contains(text(), 'Выйти')]"),
    };

    public async isVisibleDropDown(): Promise<boolean> {
        await this.LOCATORS._self.waitFor();

        return await this.LOCATORS._self.isVisible();
    };

    public async isVisibleButtonPublicProfile(): Promise<boolean> {
        await this.LOCATORS.buttonPublicProfile.waitFor();

        return await this.LOCATORS.buttonPublicProfile.isVisible();
    };

    public async isVisibleButtonAccount(): Promise<boolean> {
        await this.LOCATORS.buttonAccount.waitFor();

        return await this.LOCATORS.buttonAccount.isVisible();
    };

    public async isVisibleButtonExit(): Promise<boolean> {
        await this.LOCATORS.buttonExit.waitFor();

        return await this.LOCATORS.buttonExit.isVisible();
    }

    public async clickButtonPublicProfile(): Promise<void> {
        await this.LOCATORS.buttonPublicProfile.waitFor();

        await this.LOCATORS.buttonPublicProfile.click();
    }
}