import { test, expect } from '@playwright/test';

// Desktop breakpoint is innerWidth > 900px.
// Playwright device viewports: Desktop Chrome = 1280px, Pixel 5 = 393px, iPhone 12 = 390px.
const MOBILE_WIDTH = 900;

test.describe('Desktop navigation', () => {
	test.skip(({ page }) => (page.viewportSize()?.width ?? 1280) <= MOBILE_WIDTH, 'Desktop only');

	test('navbar shows all top-level items', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('nav').getByRole('link', { name: 'Home' })).toBeVisible();
		await expect(page.locator('nav').getByRole('button', { name: /about/i })).toBeVisible();
		await expect(page.locator('nav').getByRole('link', { name: 'Giving' })).toBeVisible();
		await expect(page.locator('nav').getByRole('link', { name: 'Events' })).toBeVisible();
	});

	test('hamburger button is not present on desktop', async ({ page }) => {
		await page.goto('/');
		// The mobile hamburger specifically targets "mypopover"; desktop uses named submenus
		await expect(page.locator('button[popovertarget="mypopover"]')).toBeHidden();
	});

	test('Home link navigates to home page', async ({ page }) => {
		await page.goto('/events');
		await page.locator('nav').getByRole('link', { name: 'Home' }).click();
		await expect(page).toHaveURL('/');
	});

	test('About button opens submenu with sub-links', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="AboutSubmenu"]').click();
		await expect(page.getByRole('link', { name: /who we are/i }).first()).toBeVisible();
		await expect(page.getByRole('link', { name: /what we believe/i }).first()).toBeVisible();
	});

	test('About > Who We Are navigates correctly', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="AboutSubmenu"]').click();
		await page.getByRole('link', { name: /who we are/i }).first().click();
		await expect(page).toHaveURL('/about/who-we-are');
	});

	test('About > What We Believe navigates correctly', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="AboutSubmenu"]').click();
		await page.getByRole('link', { name: /what we believe/i }).first().click();
		await expect(page).toHaveURL('/about/what-we-believe');
	});

	test('Events link navigates correctly', async ({ page }) => {
		await page.goto('/');
		await page.locator('nav').getByRole('link', { name: 'Events' }).click();
		await expect(page).toHaveURL('/events');
	});

	test('Giving link has correct external href', async ({ page }) => {
		await page.goto('/');
		const givingLink = page.locator('nav').getByRole('link', { name: 'Giving' });
		await expect(givingLink).toHaveAttribute('href', 'https://tithe.ly/give?c=1324564');
	});

	test('church logo links to home page', async ({ page }) => {
		await page.goto('/about/who-we-are');
		// Logo is the first <a href="/"> in the navbar; use .first() since the mobile
		// popover (hidden) also contains a Home link with href="/"
		await page.locator('.navbar a[href="/"]').first().click();
		await expect(page).toHaveURL('/');
	});
});

test.describe('Mobile hamburger menu', () => {
	test.skip(({ page }) => (page.viewportSize()?.width ?? 1280) > MOBILE_WIDTH, 'Mobile only');

	test('hamburger button is visible on mobile', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('button[popovertarget="mypopover"]')).toBeVisible();
	});

	test('popover menu is hidden before opening', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('#mypopover')).toBeHidden();
	});

	test('clicking hamburger opens the menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="mypopover"]').click();
		// Check the popover container itself is visible, then check a link inside it
		await expect(page.locator('#mypopover')).toBeVisible();
		await expect(page.locator('#mypopover a[href="/events"]')).toBeVisible();
	});

	test('mobile menu shows all navigation links', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="mypopover"]').click();
		await expect(page.locator('#mypopover')).toBeVisible();

		await expect(page.locator('#mypopover a[href="/"]')).toBeVisible();
		// On mobile, About has no submenu button — submenu items appear directly
		await expect(page.locator('#mypopover a[href="/about/who-we-are"]')).toBeVisible();
		await expect(page.locator('#mypopover a[href="/about/what-we-believe"]')).toBeVisible();
		await expect(page.locator('#mypopover a[href="https://tithe.ly/give?c=1324564"]')).toBeVisible();
		await expect(page.locator('#mypopover a[href="/events"]')).toBeVisible();
	});

	test('clicking a menu link navigates and closes the menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="mypopover"]').click();
		await expect(page.locator('#mypopover')).toBeVisible();
		await page.locator('#mypopover a[href="/events"]').click();

		await expect(page).toHaveURL('/events');
		// After navigation the popover should be closed
		await expect(page.locator('#mypopover')).toBeHidden();
	});

	test('Who We Are link navigates correctly from mobile menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="mypopover"]').click();
		const link = page.locator('#mypopover a[href="/about/who-we-are"]');
		await expect(link).toBeVisible();
		await link.click();
		await expect(page).toHaveURL('/about/who-we-are');
	});

	test('What We Believe link navigates correctly from mobile menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('button[popovertarget="mypopover"]').click();
		const link = page.locator('#mypopover a[href="/about/what-we-believe"]');
		await expect(link).toBeVisible();
		await link.click();
		await expect(page).toHaveURL('/about/what-we-believe');
	});
});

test.describe('/about internal routing', () => {
	test('navigating to /about serves who-we-are content', async ({ page }) => {
		// SvelteKit's reroute hook maps /about → /about/who-we-are internally
		// without changing the browser URL. Verify the correct content is served.
		await page.goto('/about');
		await expect(page.getByText(/glorifying god/i)).toBeVisible();
	});
});
