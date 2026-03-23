<script>
	export let menuItems;
	export let id;
	export let rightOffset = 0;
	export let topOffset = 100;
	export let menuOpen = false;
</script>

<div {id} class="popoverMenu" style="right: max({rightOffset}px, 5vw); top: {topOffset}px; display: {menuOpen ? 'block' : 'none'};" on:click|stopPropagation={() => {}}>
	<nav class="popoverNav">
		{#each menuItems as { name, submenu, url }}
			{#if !submenu}
				<a class="menu-button buttonLink" href={url}>{name}</a>
			{:else}
				<div class="menu-button non-link">{name}</div>
				{#each submenu as { name, url }}
					<a class="menu-button buttonLink margin-left-s" href={url}>
						{name}
					</a>
				{/each}
			{/if}
		{/each}
	</nav>
</div>

<style>
	.popoverNav {
		display: flex;
		flex-direction: column;
	}
	.popoverMenu {
		position: absolute;
		margin: 0;
		background-color: white;
		border: 0;
		z-index: 1000;
	}
	.buttonLink {
		background-color: transparent;
		color: black;
	}
	.buttonLink:hover {
		background-color: slategray;
	}
	.non-link {
		cursor: default;
		background-color: transparent;
		color: black;
		&:hover {
			background-color: white;
		}
	}
</style>
