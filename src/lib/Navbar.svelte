<script>
	import ChurchLogo from './ChurchLogo.svelte';
	import MenuIcon from './MenuIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import PopoverMenu from './PopoverMenu.svelte';

	import { menuItems } from './content/navigation.js';

	let innerWidth = 0;
	$: large = innerWidth > 900;

	let submenuRightOffset = 0;
	let submenuTopOffset = 100;

	let popoverOpen = false;
</script>

<svelte:window bind:innerWidth />

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
							popovertarget="{name}Submenu"
							on:click={(e) => {
								submenuRightOffset = innerWidth - e.target.offsetLeft - e.target.clientWidth - 16;
								submenuTopOffset = e.target.offsetTop + e.target.clientHeight + 10;
							}}>{name}</button
						>
						<PopoverMenu
							menuItems={submenu}
							id="{name}Submenu"
							rightOffset={submenuRightOffset}
							topOffset={submenuTopOffset}
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
					popovertarget="mypopover"
					on:click={(e) => {
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
				<PopoverMenu id="mypopover" {menuItems} rightOffset={submenuRightOffset} bind:popoverOpen/>
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
