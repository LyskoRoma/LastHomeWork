import {test, expect} from '@playwright/test';
import {PageMain} from "@Pages/pageMain";


test('Проверка переключения языка', async ({page}) => {
    await test.step('Перейти на главную страницу JS-learn', async () => {
        await page.goto('/');
    });

    await test.step('Степ 1: В хедере нажать на кнопку смены языка', async () => {
        const pageMain = new PageMain(page)
        const header = pageMain.Header
        const language = pageMain.Header.Language

        await header.clickOnLanguage()

        expect(await language.dropDownnIsActive(), 'Отображается дропдаун для смены языка').toBe(true);
        expect(await language.languageListIsVisible(), 'Отображается список языков').toBe(true);
        expect(await language.languageTextIsVisible(), ' Отображается дескрипшн').toBe(true);
        expect(await language.currentLanguageIsVisible(), 'Выбранный язык подсвечивается красным').toBe(true);
    });

    await test.step('Степ 2: В хедере кликнуть на кнопку переключения языка', async () => {
        const pageMain = new PageMain(page)
        const header = pageMain.Header
        const language = pageMain.Header.Language

        await header.clickOnLanguage()

        expect(await language.dropDownnIsDeactive(), 'Дропдаун для смены языка не отображается').toBe(true);
    });

    await test.step('Степ 3: В хедере нажать на кнопку смены языка', async () => {
        const pageMain = new PageMain(page)
        const header = pageMain.Header
        const language = pageMain.Header.Language

        await header.clickOnLanguage()

        expect(await language.dropDownnIsActive(), 'Отображается дропдаун для смены языка').toBe(true);
    });

    await test.step('Степ 4: В дропдауне переключиться на итальянский язык', async () => {
        const pageMain = new PageMain(page)
        const header = pageMain.Header
        const language = pageMain.Header.Language

        await language.clickItalianLanguage()

        expect(await header.getLanguageOnHeader(), 'В хедере на кнопке переключения языка отображается аббревиатура "IT"').toBe('IT');
    });

    await test.step('Степ 5: В хедере кликнуть на кнопку переключения языка и переключиться снова на русский', async () => {
        const pageMain = new PageMain(page)
        const header = pageMain.Header
        const language = pageMain.Header.Language

        await header.clickOnLanguage()
        await language.clickRussianLanguage()

        expect(await header.getLanguageOnHeader(), 'В хедере на кнопке переключения языка отображается аббревиатура "RU"').toBe('RU');
    });
});