<script>
	export let menuItems;
	export let id;
	export let rightOffset = 0;
	export let topOffset = 100;
	export let popoverOpen;

	function closePopover() {
		document.getElementById(id).hidePopover();
		popoverOpen = false;
	}
</script>

<div {id} popover class="popoverMenu" style="right: max({rightOffset}px, 5vw); top: {topOffset}px;">
	<nav class="popoverNav">
		{#each menuItems as { name, submenu, url }}
			{#if !submenu}
				<a class="menu-button buttonLink" href={url} on:click={closePopover}>{name}</a>
			{:else}
				<div class="menu-button non-link">{name}</div>
				{#each submenu as { name, url }}
					<a class="menu-button buttonLink margin-left-s" href={url} on:click={closePopover}>
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
		inset: unset;
		margin: 0;
		background-color: white;
		border: 0;
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
