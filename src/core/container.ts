import type { Page } from '@playwright/test';

export class Container {
    public constructor(protected page: Page) {}

    public async open(url = '/'): Promise<void> {
        await this.page.goto(url);
    }
}