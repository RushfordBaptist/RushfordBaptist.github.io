<script>
	import ChurchLogo from './ChurchLogo.svelte';

	export let menuItems = [
		{ name: 'Home', url: '/' },
		{ name: 'About', url: '/about' },
		{ name: 'Giving', url: 'https://tithe.ly/give?c=1324564' },
		{ name: 'Events', url: '/events' }
	];
	let innerWidth = 0;
	$: large = innerWidth > 900;
</script>

<svelte:window bind:innerWidth />

<div class="navbar">
	<a href="/">
		<ChurchLogo />
	</a>
	{#if large}
		<nav class="nav">
			{#each menuItems as { name, url }}
				<a href={url}>{name}</a>
			{/each}
		</nav>
	{:else}
		<button>Menu</button>
	{/if}
</div>

<style>
	.navbar {
		color: white;
		height: 150px;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding: 0 5%;
	}
	.nav {
		align-content: center;
		justify-content: flex-end;
	}
	a {
		color: white;
		padding: 8px 11px;
		min-width: 64px;
		box-sizing: border-box;
		transition:
			background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 500;
		line-height: 1.75;
		border-radius: 4px;
		letter-spacing: 0.02857em;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		font-size: 0.9375rem;
	}
	a:hover {
		background-color: slategray;
	}
</style>
