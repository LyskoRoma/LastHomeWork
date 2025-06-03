import { Container } from '@Core/container';
import { SideBar } from '@Components/pages/pageProfile/sideBar';
import { Profile} from "@Components/pages/pageProfile/profile";

export class PageProfile extends Container {
    private LOCATORS = {
        wrapperSideBar: this.page.locator('//div[@class="sidebar__inner"]'),
        wrapperProfile: this.page.locator("//div[@class='profile']")
    };

    public SideBar = new SideBar(this.LOCATORS.wrapperSideBar, this.page);
    public Profile = new Profile(this.LOCATORS.wrapperProfile, this.page);

}

