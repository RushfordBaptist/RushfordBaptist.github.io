# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Build static site to /build
npm run preview    # Preview production build
npm run lint       # Check formatting and lint
npm run format     # Auto-fix formatting
```

There are no tests.

## Architecture

This is a **SvelteKit static site** (`adapter-static`, fully prerendered) for Rushford Baptist Church, deployed to GitHub Pages.

### Content vs. UI separation

All site content lives in `src/lib/content/` as plain JS files:
- `footer.js` — church contact info, address, phone/email for the secretary and elder chair. This is the source of truth for contact data shared across the site.
- `home.js` — homepage intro, stories, service times, and location info (imports from `footer.js`)
- `navigation.js` — navbar menu items and submenu structure
- `whoWeAre.js`, `whatWeBelieve.js`, `constitution.js`, `events.js` — page-specific content

**Content updates should only touch `src/lib/content/` files.** UI components in `src/lib/` consume this data.

### Routing

SvelteKit file-based routing under `src/routes/`:
- `/` → `+page.svelte`
- `/about/who-we-are`, `/about/what-we-believe`, `/about/constitution`
- `/events`

The shared layout (`+layout.svelte`) wraps all pages with `<Navbar>` and `<Footer>`.

### Notable details

- Images are hosted on Cloudinary (external URLs in content files)
- The `marked` library renders markdown strings via `MarkedStory.svelte`
- `footer.js` uses getter properties (`primaryPhone`, `primaryEmail`, `directionsLink`) that derive values from other fields in the same object
