import { test, expect } from '@playwright/test';

test.describe('Desktop navigation', () => {
	test('navbar shows all top-level items', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('nav').getByRole('link', { name: 'Home' })).toBeVisible();
		await expect(page.locator('nav').getByRole('button', { name: /about/i })).toBeVisible();
		await expect(page.locator('nav').getByRole('link', { name: 'Giving' })).toBeVisible();
		await expect(page.locator('nav').getByRole('link', { name: 'Events' })).toBeVisible();
	});

	test('hamburger button is not present on desktop', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('[data-testid="hamburger-button"]')).toBeHidden();
	});

	test('Home link navigates to home page', async ({ page }) => {
		await page.goto('/events');
		await page.locator('nav').getByRole('link', { name: 'Home' }).click();
		await expect(page).toHaveURL('/');
	});

	test('About button opens submenu with sub-links', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="about-button"]').click();
		await expect(page.getByRole('link', { name: /who we are/i }).first()).toBeVisible();
		await expect(page.getByRole('link', { name: /what we believe/i }).first()).toBeVisible();
	});

	test('About > Who We Are navigates correctly', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="about-button"]').click();
		await page.getByRole('link', { name: /who we are/i }).first().click();
		await expect(page).toHaveURL('/about/who-we-are');
	});

	test('About > What We Believe navigates correctly', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="about-button"]').click();
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
