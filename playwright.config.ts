import type { PlaywrightTestConfig } from '@playwright/test';

const playwrightConfig: PlaywrightTestConfig = {
    testDir: './tests',
    outputDir: 'test-results/',
    fullyParallel: false,
    reporter: [['html'], ['list']], // Можно добавить другие репортеры при необходимости
    timeout: 120000,
    expect: {
        timeout: 10000,
    },
    use: {
        baseURL: 'https://learn.javascript.ru/',
        browserName: 'chromium',
        trace: 'retain-on-failure', // Сохранять трейс на первый повтор, если тест упал
    },
};

export default playwrightConfig;