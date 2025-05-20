import {test, expect} from '@playwright/test';
import {PageMain} from "@Pages/pageMain";


test('Проверка авторизации пользователя', async ({page}) => {
    await test.step('Перейти на главную страницу JS-learn', async () => {
        await page.goto('/');
    });

    await test.step('Степ 1: В хедере нажать на кнопку авторизации', async () => {
        const pageMain = new PageMain(page);
        const buttonLogin = pageMain.Header.ButtonLogin;
        const modalAuth = pageMain.ModalAuth;

        await buttonLogin.click();

        expect(await modalAuth.isVisible({isOpen: true}), 'Отображается модальное окно авторизации').toBe(true);
    });

    await test.step('Степ 2: проверить элементы модального окна', async () => {
        const pageMain = new PageMain(page);
        const modalAuth = pageMain.ModalAuth;


        expect(await modalAuth.isVisibleTitle(), 'Отображается заголовок "Вход"').toBe(true);
        expect(await modalAuth.isVisibleButtonRegistration(), 'Отображается кнопка "Регистрация"').toBe(true);
        expect(await modalAuth.isVisibleInputEmail(), 'Отображается поле "Email"').toBe(true);
        expect(await modalAuth.isVisibleInputPassword(), 'Отображается поле "Пароль"').toBe(true);
        expect(await modalAuth.isVisibleButtonForgotPassword(), 'Отображается кнопка "Забыли?"').toBe(true);
        expect(await modalAuth.isVisibleButtonSubmit(), 'Отображается кнопка "Войти"').toBe(true);
        expect(await modalAuth.isVisibleButtonClose(), 'Отображается кнопка крестик').toBe(true);
        expect(await modalAuth.isVisibleBlockLoginFrom(), 'Отображается блок "Вход через социальные сети"').toBe(true);


    });

    await test.step('Степ 3: нажать на крестик в модальном окне', async () => {
        const pageMain = new PageMain(page);
        const modalAuth = pageMain.ModalAuth;

        await modalAuth.clickButtonClose()
        await page.waitForTimeout(3000)


        expect(await modalAuth.isVisible({isOpen: false}), 'НЕ отображается модальное окно авторизации').toBe(false);

    });

    await test.step('Степ 4: В хедере нажать на кнопку авторизации', async () => {
        const pageMain = new PageMain(page);
        const buttonLogin = pageMain.Header.ButtonLogin;
        const modalAuth = pageMain.ModalAuth;

        await buttonLogin.click();

        expect(await modalAuth.isVisible({isOpen: true}), 'Отображается модальное окно авторизации').toBe(true);
    });

    await test.step('Степ 5: заполнить поля email / пароль и нажать на кнопку "Войти"', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const modalAuth = pageMain.ModalAuth;
        const name =  "Роман Лыско"

        await modalAuth.fillEmail();
        await modalAuth.fillPassword();
        await modalAuth.clickButtonSubmit()

        expect(await modalAuth.isVisible({isOpen: false}), 'НЕ отображается модальное окно авторизации').toBe(true);
        expect(await header.getRegistrationName(), 'В хедере отображается имя зарегестрированного пользователя "Роман Лыско"').toBe(name)
    });

});