import { test, expect } from '@playwright/test';

test.describe('Mobile hamburger menu', () => {
	test('hamburger button is visible on mobile', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('[data-testid="hamburger-button"]')).toBeVisible();
	});

	test('menu is hidden before opening', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('#mypopover')).toBeHidden();
	});

	test('clicking hamburger opens the menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="hamburger-button"]').click();
		await expect(page.locator('#mypopover')).toBeVisible();
		await expect(page.locator('#mypopover a[href="/events"]')).toBeVisible();
	});

	test('mobile menu shows all navigation links', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="hamburger-button"]').click();
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
		await page.locator('[data-testid="hamburger-button"]').click();
		await expect(page.locator('#mypopover')).toBeVisible();
		await page.locator('#mypopover a[href="/events"]').click();

		await expect(page).toHaveURL('/events');
		// After navigation the menu should be closed
		await expect(page.locator('#mypopover')).toBeHidden();
	});

	test('Who We Are link navigates correctly from mobile menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="hamburger-button"]').click();
		const link = page.locator('#mypopover a[href="/about/who-we-are"]');
		await expect(link).toBeVisible();
		await link.click();
		await expect(page).toHaveURL('/about/who-we-are');
	});

	test('What We Believe link navigates correctly from mobile menu', async ({ page }) => {
		await page.goto('/');
		await page.locator('[data-testid="hamburger-button"]').click();
		const link = page.locator('#mypopover a[href="/about/what-we-believe"]');
		await expect(link).toBeVisible();
		await link.click();
		await expect(page).toHaveURL('/about/what-we-believe');
	});
});
