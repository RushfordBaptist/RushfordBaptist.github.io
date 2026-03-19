import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
	test('loads successfully', async ({ page }) => {
		const response = await page.goto('/');
		expect(response.status()).toBe(200);
	});

	test('page loads without JS errors', async ({ page }) => {
		const errors = [];
		page.on('pageerror', (err) => errors.push(err));
		await page.goto('/');
		expect(errors).toHaveLength(0);
	});

	test('"Who Are We?" button navigates to /about/who-we-are', async ({ page }) => {
		await page.goto('/');
		// The button is an <a> with explicit role="button" — use getByRole('button')
		await page.getByRole('button', { name: /who are we/i }).click();
		await expect(page).toHaveURL('/about/who-we-are');
	});

	test('shows Sunday School service time', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText(/sunday school/i)).toBeVisible();
		await expect(page.getByText(/9:30/)).toBeVisible();
	});

	test('shows Worship Service time', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText(/worship service/i)).toBeVisible();
		await expect(page.getByText(/11:00/)).toBeVisible();
	});

	test('shows Bible Study time', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText(/bible study/i)).toBeVisible();
		await expect(page.getByText(/7:00/)).toBeVisible();
	});

	test('shows church address on home page', async ({ page }) => {
		await page.goto('/');
		// "9016 Main St" appears in LocationCard — use first() since it appears in multiple places
		await expect(page.getByText(/9016 main st/i).first()).toBeVisible();
	});

	test('Get Directions links point to Google Maps', async ({ page }) => {
		await page.goto('/');
		const directionsLinks = page.getByRole('link', { name: /get directions/i });
		const count = await directionsLinks.count();
		expect(count).toBeGreaterThan(0);

		for (let i = 0; i < count; i++) {
			const href = await directionsLinks.nth(i).getAttribute('href');
			expect(href).toContain('google.com/maps');
		}
	});
});

test.describe('Who We Are page', () => {
	test('loads successfully', async ({ page }) => {
		const response = await page.goto('/about/who-we-are');
		expect(response.status()).toBe(200);
	});

	test('shows pastor name', async ({ page }) => {
		await page.goto('/about/who-we-are');
		await expect(page.getByText(/jake|jacob/i).first()).toBeVisible();
	});

	test('shows church mission statement', async ({ page }) => {
		await page.goto('/about/who-we-are');
		await expect(page.getByText(/glorifying god/i)).toBeVisible();
	});

	test('link to Constitution page works', async ({ page }) => {
		await page.goto('/about/who-we-are');
		const constitutionLink = page.getByRole('link', { name: /constitution/i });
		await expect(constitutionLink).toBeVisible();
		await constitutionLink.click();
		await expect(page).toHaveURL('/about/constitution');
	});
});

test.describe('What We Believe page', () => {
	test('loads successfully', async ({ page }) => {
		const response = await page.goto('/about/what-we-believe');
		expect(response.status()).toBe(200);
	});

	test('shows Statement of Faith heading', async ({ page }) => {
		await page.goto('/about/what-we-believe');
		await expect(page.getByText(/statement of faith/i)).toBeVisible();
	});

	test('shows Church Covenant section', async ({ page }) => {
		await page.goto('/about/what-we-believe');
		await expect(page.getByText(/church covenant/i)).toBeVisible();
	});

	test('shows Bible/Scripture content', async ({ page }) => {
		await page.goto('/about/what-we-believe');
		await expect(page.getByText(/scripture|bible/i).first()).toBeVisible();
	});
});

test.describe('Constitution page', () => {
	test('loads successfully', async ({ page }) => {
		const response = await page.goto('/about/constitution');
		expect(response.status()).toBe(200);
	});

	test('shows expandable article sections', async ({ page }) => {
		await page.goto('/about/constitution');
		const details = page.locator('details');
		await expect(details.first()).toBeVisible();
		const count = await details.count();
		expect(count).toBeGreaterThan(0);
	});

	test('articles are collapsed by default', async ({ page }) => {
		await page.goto('/about/constitution');
		const details = page.locator('details').first();
		await expect(details).not.toHaveAttribute('open');
	});

	test('clicking a summary expands the article', async ({ page }) => {
		await page.goto('/about/constitution');
		const firstSummary = page.locator('details summary').first();
		// force: true ensures the click registers even if Playwright considers the element
		// partially obscured (e.g. by the navbar overlap on some browsers)
		await firstSummary.click({ force: true });
		await expect(page.locator('details').first()).toHaveAttribute('open');
	});

	test('clicking an expanded summary collapses it', async ({ page }) => {
		await page.goto('/about/constitution');
		const firstSummary = page.locator('details summary').first();
		await firstSummary.click({ force: true });
		await expect(page.locator('details').first()).toHaveAttribute('open');
		await firstSummary.click({ force: true });
		await expect(page.locator('details').first()).not.toHaveAttribute('open');
	});

	test('opening one article closes the previous (exclusive accordion)', async ({ page }) => {
		await page.goto('/about/constitution');
		const summaries = page.locator('details summary');
		const count = await summaries.count();

		if (count >= 2) {
			// The details elements use name="constitution" — HTML5 exclusive accordion:
			// opening one closes all others with the same name.
			await summaries.nth(0).click({ force: true });
			await expect(page.locator('details').nth(0)).toHaveAttribute('open');

			await summaries.nth(1).click({ force: true });
			await expect(page.locator('details').nth(1)).toHaveAttribute('open');
			await expect(page.locator('details').nth(0)).not.toHaveAttribute('open');
		}
	});

	test('shows Article 1 (Statement of Faith)', async ({ page }) => {
		await page.goto('/about/constitution');
		await expect(page.getByText(/article 1|statement of faith/i).first()).toBeVisible();
	});
});

test.describe('Events page', () => {
	test('loads successfully', async ({ page }) => {
		const response = await page.goto('/events');
		expect(response.status()).toBe(200);
	});

	test('shows calendar embed', async ({ page }) => {
		await page.goto('/events');
		const calendar = page.locator('iframe[src*="google.com/calendar"]');
		await expect(calendar).toBeVisible();
	});
});
