<script>
	export let imageUrl;
	export let title;
</script>

<div class="header" style="background-image: url({imageUrl});">
	<h1>{title}</h1>
</div>

<style>
	.header {
		background-size: cover;
		background-position: center;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
</style>
