import {Component} from '@Core/component';

export class ButtonLogin extends Component {
    private LOCATORS = {
        _self: this.locator,
    };

    public async click(): Promise<void> {
        await this.LOCATORS._self.waitFor();

        await this.LOCATORS._self.click();
    }


}
