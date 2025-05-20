import { Component } from '@Core/component';
import { credentials } from '@Constants/credentials';

export class ModalAuth extends Component {
    private LOCATORS = {
        _self: this.locator,
        buttonClose: this.locator.locator("//button[contains(@class, 'close-button')]"),
        buttonSubmit: this.locator.locator("//div[contains(@class, 'login-form__form-control') and contains(@class, 'login-form__submit')]"),
        inputEmail: this.locator.locator("//input[contains(@class, 'text-input__control') and contains(@id, 'auth-email')]"),
        inputPassword: this.locator.locator("//input[contains(@class, 'text-input__control') and contains(@id, 'auth-password')]"),
        title: this.locator.locator("//h4[@class='login-form__title']"),
        buttonRegistration: this.locator.locator("//button[contains(@class, 'login-form__button-link') and contains(@class, 'login-form__register')]"),
        buttonForgotPassword: this.locator.locator("//button[contains(@class, 'login-form__button-link') and contains(@class, 'login-form__forgot')]"),
        blockLoginForm: this.locator.locator("//div[contains(@class, 'login-form__line') and contains(@class, 'login-form__social-logins')]"),

    };

    async fillEmail() {
        await this.LOCATORS.inputEmail.fill(credentials.email);
    }

    async fillPassword() {
        await this.LOCATORS.inputPassword.fill(credentials.password);
    }

    public async isVisible({ isOpen }: { isOpen: boolean }): Promise<boolean> {
        if (isOpen) {
            await this.LOCATORS._self.waitFor();
        }
        return await this.LOCATORS._self.isVisible();
    }

    public async isVisibleButtonClose(): Promise<boolean> {
        await this.LOCATORS.buttonClose.waitFor();
        return await this.LOCATORS.buttonClose.isVisible();
    }

    public async isVisibleButtonSubmit(): Promise<boolean> {
        await this.LOCATORS.buttonSubmit.waitFor();
        return await this.LOCATORS.buttonSubmit.isVisible();
    }

    public async isVisibleInputEmail(): Promise<boolean> {
        await this.LOCATORS.inputEmail.waitFor();
        return await this.LOCATORS.inputEmail.isVisible();
    }

    public async isVisibleInputPassword(): Promise<boolean> {
        await this.LOCATORS.inputPassword.waitFor();
        return await this.LOCATORS.inputPassword.isVisible();
    }

    public async isVisibleTitle(): Promise<boolean> {
        await this.LOCATORS.title.waitFor();
        return await this.LOCATORS.title.isVisible();
    }

    public async isVisibleButtonRegistration(): Promise<boolean> {
        await this.LOCATORS.buttonRegistration.waitFor();
        return await this.LOCATORS.buttonRegistration.isVisible();
    }

    public async isVisibleButtonForgotPassword(): Promise<boolean> {
        await this.LOCATORS.buttonForgotPassword.waitFor();
        return await this.LOCATORS.buttonForgotPassword.isVisible();
    }

    public async isVisibleBlockLoginFrom(): Promise<boolean> {
        await this.LOCATORS.blockLoginForm.waitFor();
        return await this.LOCATORS.blockLoginForm.isVisible();
    }

    public async clickButtonClose(): Promise<void> {
        await this.LOCATORS.buttonClose.waitFor();
        await this.LOCATORS.buttonClose.click();
    }

    public async clickButtonSubmit(): Promise<void> {
        await this.LOCATORS.buttonSubmit.waitFor();
        await this.LOCATORS.buttonSubmit.click();
    }
}