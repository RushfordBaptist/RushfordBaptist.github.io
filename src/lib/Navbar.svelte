<script>
	import ChurchLogo from './ChurchLogo.svelte';
	import MenuIcon from './MenuIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import PopoverMenu from './PopoverMenu.svelte';

	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { menuItems } from './content/navigation.js';

	let innerWidth = 0;
	$: large = innerWidth > 900;

	let submenuRightOffset = 0;
	let submenuTopOffset = 100;
	let submenuOpen = false;

	let popoverOpen = false;
	let ready = false;
	onMount(() => { ready = true; });

	beforeNavigate(() => {
		popoverOpen = false;
		submenuOpen = false;
	});

	let hamburgerButton;
	let aboutButton;

	function handleWindowClick(e) {
		if (popoverOpen) {
			const mobileMenu = document.getElementById('mypopover');
			if (mobileMenu && !mobileMenu.contains(e.target) && !hamburgerButton.contains(e.target)) {
				popoverOpen = false;
			}
		}
		if (submenuOpen) {
			const aboutMenu = document.getElementById('AboutSubmenu');
			if (aboutMenu && !aboutMenu.contains(e.target) && !aboutButton.contains(e.target)) {
				submenuOpen = false;
			}
		}
	}
</script>

<svelte:window bind:innerWidth on:click={handleWindowClick} />

<div class="navbar">
	<div class="navbarContentContainer">
		<a href="/">
			<ChurchLogo />
		</a>
		{#if large}
			<nav class="nav">
				{#each menuItems as { name, url, submenu }}
					{#if submenu}
						<button
							class="navButton"
							data-testid="about-button"
							bind:this={aboutButton}
							on:click|stopPropagation={(e) => {
								submenuRightOffset = innerWidth - e.target.offsetLeft - e.target.clientWidth - 16;
								submenuTopOffset = e.target.offsetTop + e.target.clientHeight + 10;
								submenuOpen = !submenuOpen;
							}}>{name}</button
						>
						<PopoverMenu
							menuItems={submenu}
							id="{name}Submenu"
							rightOffset={submenuRightOffset}
							topOffset={submenuTopOffset}
							menuOpen={submenuOpen}
						/>
					{:else}
						<a class="menu-button" href={url}>{name}</a>
					{/if}
				{/each}
			</nav>
		{:else}
			<div class="nav">
				<button
					class="iconButton"
					data-testid="hamburger-button"
					disabled={!ready}
					bind:this={hamburgerButton}
					on:click|stopPropagation={(e) => {
						popoverOpen = !popoverOpen;
						submenuRightOffset = innerWidth - e.target.offsetLeft - e.target.clientWidth - 16;
					}}
				>
					{#if popoverOpen}
						<CloseIcon />
					{:else}
						<MenuIcon />
					{/if}
				</button>
				<PopoverMenu id="mypopover" {menuItems} rightOffset={submenuRightOffset} menuOpen={popoverOpen} />
			</div>
		{/if}
	</div>
</div>

<style>
	.iconButton {
		background-color: transparent;
		border: 0;
		color: white;
		height: 40px;
		width: 40px;
		cursor: pointer;
		padding: 0;
		opacity: 1;
	}
	.navButton {
		background-color: transparent;
		border: 0;
		color: white;
		padding: 8px 11px;
		min-width: 64px;
		box-sizing: border-box;
		transition:
			background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		font-weight: 500;
		line-height: 1.75;
		border-radius: 4px;
		letter-spacing: 0.02857em;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		font-size: 0.9375rem;
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	}
	.navButton:hover {
		background-color: slategray;
	}
	.navbar {
		color: white;
		height: 150px;
		display: flex;
		flex-direction: column;
		padding: 0 5%;
	}
	.navbarContentContainer {
		display: flex;
		justify-content: space-between;
	}
	.nav {
		align-content: center;
		justify-content: flex-end;
	}
</style>
