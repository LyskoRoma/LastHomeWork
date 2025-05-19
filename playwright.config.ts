import type { PlaywrightTestConfig } from '@playwright/test';

const playwrightConfig: PlaywrightTestConfig = {
    testDir: './tests',
    outputDir: 'test-results/',
    fullyParallel: false,
    reporter: [['html'], ['list']],
    timeout: 120000,
    expect: {
        timeout: 10000,
    },
    use: {
        baseURL: 'https://learn.javascript.ru/',
        browserName: 'chromium',
    },
};

export default playwrightConfig;