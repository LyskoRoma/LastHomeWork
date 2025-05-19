import { Container } from '@Core/container';
import { Header } from '@Components/pages/pageMain/header';

export class PageMain extends Container {
    private LOCATORS = {
        wrapperHeader: this.page.locator('//div[@class="sitetoolbar"]'),
    };

    public Header = new Header(this.LOCATORS.wrapperHeader, this.page);
}