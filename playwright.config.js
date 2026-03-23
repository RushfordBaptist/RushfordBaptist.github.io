import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: 'html',
	use: {
		baseURL: 'http://localhost:5173',
		trace: 'on-first-retry'
	},
	projects: [
		{
			name: 'chrome',
			use: { ...devices['Desktop Chrome'] },
			testIgnore: ['**/navigation.mobile.spec.js']
		},
		{
			name: 'mobile-chrome',
			use: { ...devices['Pixel 5'] },
			testIgnore: ['**/navigation.desktop.spec.js']
		},
		{
			name: 'mobile-safari',
			use: { ...devices['iPhone 12'] },
			testIgnore: ['**/navigation.desktop.spec.js']
		}
	],
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: true
	}
});
