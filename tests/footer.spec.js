import { test, expect } from '@playwright/test';

const PAGES = ['/', '/about/who-we-are', '/about/what-we-believe', '/about/constitution', '/events'];

for (const route of PAGES) {
	test.describe(`Footer on ${route}`, () => {
		test('footer is visible', async ({ page }) => {
			await page.goto(route);
			await expect(page.locator('.footer')).toBeVisible();
		});

		test('shows church name', async ({ page }) => {
			await page.goto(route);
			await expect(page.locator('.footer').getByText(/rushford baptist/i)).toBeVisible();
		});

		test('phone link has correct href', async ({ page }) => {
			await page.goto(route);
			// primaryPhone is contacts[1].phone = "585-981-8107", dashes stripped in href
			const phoneLink = page.locator('.footer a[href^="tel:"]').first();
			await expect(phoneLink).toHaveAttribute('href', 'tel:5859818107');
		});

		test('email link has correct href', async ({ page }) => {
			await page.goto(route);
			const emailLink = page.locator('.footer a[href^="mailto:"]').first();
			await expect(emailLink).toHaveAttribute('href', 'mailto:secretary@rushfordbaptist.org');
		});

		test('directions link points to Google Maps', async ({ page }) => {
			await page.goto(route);
			// directionsLink uses google.com/maps/dir
			const mapLink = page.locator('.footer a[href*="google.com/maps"]');
			await expect(mapLink).toBeVisible();
			await expect(mapLink).toHaveAttribute('target', '_blank');
		});

		test('directions link includes church name in destination', async ({ page }) => {
			await page.goto(route);
			const mapLink = page.locator('.footer a[href*="google.com/maps"]');
			const href = await mapLink.getAttribute('href');
			// directionsLink is built from title: "Rushford Baptist Church"
			expect(href).toMatch(/rushford/i);
		});
	});
}
