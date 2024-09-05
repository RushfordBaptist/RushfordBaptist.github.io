<script>
	export let imageUrl;
	export let pretitle = '';
	export let title;
	export let height = 200;
</script>

<div
	class="intro"
	style="background-image: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url({imageUrl}); height: {height}px;"
>
	<h4>{pretitle}</h4>
	<h2>{title}</h2>
	<slot name="action"></slot>
</div>

<style>
	.intro {
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		text-align: center;
	}
</style>
