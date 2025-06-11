import { test, expect } from '@playwright/test';
import { PageMain } from "@Pages/pageMain";
import { expectations as exp } from './notes/expectation';

test('Проверка переключения языка', async ({ page }) => {
    await test.step('Перейти на главную страницу JS-learn', async () => {
        await page.goto('/');
    });

    await test.step('Степ 1: В хедере нажать на кнопку смены языка', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const language = pageMain.Header.Language;

        await header.clickOnLanguage();

        expect(await language.dropDownnIsActive(), exp.s1.e1).toBe(true);
        expect(await language.languageListIsVisible(), exp.s1.e2).toBe(true);
        expect(await language.languageTextIsVisible(), exp.s1.e3).toBe(true);
        expect(await language.currentLanguageIsVisible(), exp.s1.e4).toBe(true);
    });

    await test.step('Степ 2: В хедере кликнуть на кнопку переключения языка', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const language = pageMain.Header.Language;

        await header.clickOnLanguage();

        expect(await language.dropDownnIsDeactive(), exp.s2.e1).toBe(true);
    });

    await test.step('Степ 3: В хедере нажать на кнопку смены языка', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const language = pageMain.Header.Language;

        await header.clickOnLanguage();

        expect(await language.dropDownnIsActive(), exp.s3.e1).toBe(true);
    });

    await test.step('Степ 4: В дропдауне переключиться на итальянский язык', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const language = pageMain.Header.Language;

        await language.clickItalianLanguage();

        expect(await header.getLanguageOnHeader(), exp.s4.e1).toBe('IT');
    });

    await test.step('Степ 5: В хедере кликнуть на кнопку переключения языка и переключиться снова на русский', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const language = pageMain.Header.Language;

        await header.clickOnLanguage();
        //await page.waitForTimeout(3000);
        await language.clickRussianLanguage();

        expect(await header.getLanguageOnHeader(), exp.s5.e1).toBe('RU');
    });
});