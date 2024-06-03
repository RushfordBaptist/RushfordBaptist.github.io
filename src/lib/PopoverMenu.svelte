<script>
	export let menuItems;
	export let id;
	export let rightOffset = 0;
</script>

<div {id} popover class="popoverMenu" style="right: max({rightOffset}px, 5vw);">
	<nav class="popoverNav">
		{#each menuItems as { name, url }}
			<a class="buttonLink" href={url}>{name}</a>
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
		top: 100px;
		margin: 0;
		background-color: white;
		border: 0;
	}
	.popoverMenu .buttonLink {
		color: black;
	}
</style>
