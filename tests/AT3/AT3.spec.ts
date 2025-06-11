import {test, expect} from '@playwright/test';
import {PageMain} from "@Pages/pageMain";
import {expectation as exp} from "../AT3/notes/expectation";
import {PageProfile} from "@Pages/pageProfile";

test('Проверка ЛК пользователя', async ({page}) => {
    await test.step('Перейти на главную страницу JS-learn', async () => {
        await page.goto('/');

        const pageMain = new PageMain(page);
        const buttonLogin = pageMain.Header.ButtonLogin;
        const modalAuth = pageMain.ModalAuth;

        await buttonLogin.click();
        await modalAuth.fillEmail();
        await modalAuth.fillPassword();
        await modalAuth.clickButtonSubmit();
    });

    await test.step('Степ 1: В хедере нажать на имя профиля', async () => {
        const pageMain = new PageMain(page);
        const header = pageMain.Header;
        const dropDown = pageMain.Header.DropDown;

        await header.clickRegistrationName();

        expect(await dropDown.isVisibleDropDown(), exp.s1.e1).toBe(true);
        expect(await dropDown.isVisibleButtonPublicProfile(), exp.s1.e2).toBe(true);
        expect(await dropDown.isVisibleButtonAccount(), exp.s1.e3).toBe(true);
        expect(await dropDown.isVisibleButtonExit(), exp.s1.e4).toBe(true);
    });

    await test.step('Степ 2: В дропдауне нажать на пункт "Публичный профиль"', async () => {
        const pageMain = new PageMain(page);
        const dropDown = pageMain.Header.DropDown;

        await dropDown.clickButtonPublicProfile();

        const pageProfile = new PageProfile(page);
        expect(await pageProfile.Profile.getTitle(), exp.s2.e1).toBe('Публичный профиль');
    });

    await test.step('Степ 3: Проверить элементы сайдбара', async () => {
        const pageProfile = new PageProfile(page);
        const sideBar = pageProfile.SideBar;

        expect(await sideBar.isVisiblePhoto(), exp.s3.e1).toBe(true);
        expect(await sideBar.isVisibleName(), exp.s3.e2).toBe(true);
        expect(await sideBar.isVisibleCreatedInfo(), exp.s3.e3).toBe(true);
        expect(await sideBar.isVisibleNavTabs(), exp.s3.e4).toBe(true);
    });

    await test.step('Степ 4: Проверить элементы страницы профиля', async () => {
        const pageProfile = new PageProfile(page);
        const profile = pageProfile.Profile;

        expect(await profile.isVisibleTitle(), exp.s4.e1).toBe(true);
        expect(await profile.isVisibleDescription(), exp.s4.e2).toBe(true);
        expect(await profile.isVisibleCountry(), exp.s4.e3).toBe(true);
        expect(await profile.isVisibleCity(), exp.s4.e4).toBe(true);
        expect(await profile.isVisibleEmail(), exp.s4.e5).toBe(true);
        expect(await profile.isVisibleIntereses(), exp.s4.e6).toBe(true);
        expect(await profile.isVisibleAboutMe(), exp.s4.e7).toBe(true);
        expect(await profile.isVisibleBornDate(), exp.s4.e8).toBe(true);
    });

    await test.step('Степ 5: Проверить элементы блока страны', async () => {
        const pageProfile = new PageProfile(page);
        const country = pageProfile.Profile.Country

        expect(await country.isVisibleTitle(), exp.s5.e1).toBe(true);
        expect(await country.isVisibleButtonAddCountry(), exp.s5.e2).toBe(true);
    });

    await test.step('Степ 6: Проверить добавление страны', async () => {
        const pageProfile = new PageProfile(page);
        const country = pageProfile.Profile.Country;
        const fillCountry = 'Россия';

        await country.clickButtonAddCountry();
        await page.waitForTimeout(10000);
        await country.fillInput(fillCountry);
        await country.clickSuggest();
        await country.clickSubmit();

        const isVisible = await country.isVisibleAddedCountry();
        const addedCountryText = await country.getTitleAddedCountry();

        expect(isVisible && addedCountryText === fillCountry, exp.s6.e1).toBe(true);

    });

    await test.step("Степ 7: удалить страну, добавленную на 6 шаге", async () => {
        const pageProfile = new PageProfile(page);
        const country = pageProfile.Profile.Country;

        await country.clickAddedCountry();
        await country.clearInput();
        await country.clickSubmit();

        expect(await country.isVisibleButtonAddCountry(), exp.s7.e1).toBe(true);
    });

});