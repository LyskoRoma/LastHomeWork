import {Component} from '@Core/component';

export class SideBar extends Component {
    private LOCATORS = {
        _self: this.locator,
        photo: this.locator.locator("//div[@class='profile-brief__photo']"),
        name: this.locator.locator("//h1[@class='profile-brief__title']"),
        createdInfo: this.locator.locator("//div[@class='profile-brief__created']"),
        navTabs: this.locator.locator("//nav[@class='profile-tabs']"),
    };

    public async isVisiblePhoto(): Promise<boolean> {
        await this.LOCATORS.photo.waitFor();

        return await this.LOCATORS.photo.isVisible();
    };

    public async isVisibleName(): Promise<boolean> {
        await this.LOCATORS.name.waitFor();

        return await this.LOCATORS.name.isVisible();
    };

    public async isVisibleCreatedInfo(): Promise<boolean> {
        await this.LOCATORS.createdInfo.waitFor();

        return await this.LOCATORS.createdInfo.isVisible();
    };

    public async isVisibleNavTabs(): Promise<boolean> {
        await this.LOCATORS.navTabs.waitFor();

        return await this.LOCATORS.navTabs.isVisible();
    };

}