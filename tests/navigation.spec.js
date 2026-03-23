import { test, expect } from '@playwright/test';

test.describe('/about internal routing', () => {
	test('navigating to /about serves who-we-are content', async ({ page }) => {
		// SvelteKit's reroute hook maps /about → /about/who-we-are internally
		// without changing the browser URL. Verify the correct content is served.
		await page.goto('/about');
		await expect(page.getByText(/glorifying god/i)).toBeVisible();
	});
});
