import { devices } from '@playwright/test';
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
        baseURL: ''
    },
};

export default playwrightConfig;