import { test, expect } from '@playwright/test';
import { PageMain } from "@Pages/pageMain";
import { expectations as exp } from './notes/expectations';

test('Проверка авторизации пользователя', async ({ page }) => {
    await test.step('Перейти на главную страницу JS-learn', async () => {
        await page.goto('/');
    });

    await test.step('Степ 1: В хедере нажать на кнопку авторизации', async () => {
        const pageMain = new PageMain(page);
        const buttonLogin = pageMain.Header.ButtonLogin;
        const modalAuth = pageMain.ModalAuth;

        await buttonLogin.click();
        expect(await modalAuth.isVisible({ isOpen: true }), exp.s1.e1).toBe(true);
    });

    await test.step('Степ 2: проверить элементы модального окна', async () => {
        const pageMain = new PageMain(page);
        const modalAuth = pageMain.ModalAuth;

        expect(await modalAuth.isVisibleTitle(), exp.s2.e1).toBe(true);
        expect(await modalAuth.isVisibleButtonRegistration(), exp.s2.e2).toBe(true);
        expect(await modalAuth.isVisibleInputEmail(), exp.s2.e3).toBe(true);
        expect(await modalAuth.isVisibleInputPassword(), exp.s2.e4).toBe(true);
        expect(await modalAuth.isVisibleButtonForgotPassword(), exp.s2.e5).toBe(true);
        expect(await modalAuth.isVisibleButtonSubmit(), exp.s2.e6).toBe(true);
        expect(await modalAuth.isVisibleButtonClose(), exp.s2.e7).toBe(true);
        expect(await modalAuth.isVisibleBlockLoginFrom(), exp.s2.e8).toBe(true);
    });

    await test.step('Степ 3: нажать на крестик в модальном окне', async () => {
        const pageMain = new PageMain(page);
        const modalAuth = pageMain.ModalAuth;

        await modalAuth.clickButtonClose();
        await page.waitForTimeout(3000);

        expect(await modalAuth.isVisible({ isOpen: false }), exp.s3.e1).toBe(false);
    });

    await test.step('Степ 4: В хедере нажать на кнопку авторизации', async () => {
        const pageMain = new PageMain(page);
        const buttonLogin = pageMain.Header.ButtonLogin;
        const modalAuth = pageMain.ModalAuth;

        await buttonLogin.click();
        expect(await modalAuth.isVisible({ isOpen: true }), exp.s4.e1).toBe(true);
    });

    await test.step('Степ 5: заполнить поля email / пароль и нажать на кнопку "Войти"', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const modalAuth = pageMain.ModalAuth;
        const name = "Роман Лыско";

        await modalAuth.fillEmail();
        await modalAuth.fillPassword();
        await modalAuth.clickButtonSubmit();

        expect(await modalAuth.isVisible({ isOpen: false }), exp.s5.e1).toBe(true);
        expect(await header.getRegistrationName(), exp.s5.e2).toBe(name);
    });
});