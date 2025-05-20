import { Container } from '@Core/container';
import { Header } from '@Components/pages/pageMain/header';
import { ModalAuth} from "@Components/pages/pageMain/modalAuth";

export class PageMain extends Container {
    private LOCATORS = {
        wrapperHeader: this.page.locator('//div[@class="sitetoolbar"]'),
        wrapperModalAuth: this.page.locator("//div[@class='modal__dialog']")
    };

    public Header = new Header(this.LOCATORS.wrapperHeader, this.page);
    public ModalAuth = new ModalAuth(this.LOCATORS.wrapperModalAuth, this.page);
}