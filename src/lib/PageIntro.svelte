<script>
	export let imageUrl;
	export let pretitle = '';
	export let title;
	export let height = 200;

	$: innerWidth = 0;

	const imageParamsIndex = imageUrl.lastIndexOf('upload') + 6;
	const imageExtensionIndex = imageUrl.lastIndexOf('.');

	function getImageWidth(innerWidth) {
		if (innerWidth < 500) {
			return '500';
		}
		if (innerWidth < 1000) {
			return '1000';
		}
		if (innerWidth < 1500) {
			return '1500';
		}
		if (innerWidth < 2000) {
			return '2000';
		}
		if (innerWidth < 2500) {
			return '2500';
		}
		return 'iw';
	}

	$: imageWidth = getImageWidth(innerWidth);

	$: modifiedImageUrl =
		imageUrl.slice(0, imageParamsIndex) +
		`/q_auto,w_${imageWidth}` +
		imageUrl.slice(imageParamsIndex, imageExtensionIndex) +
		'.webp';
</script>

<svelte:window bind:innerWidth />

<div
	class="intro"
	style="background-image: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url({modifiedImageUrl}); height: {height}px;"
>
	<h4>{pretitle}</h4>
	<h2>{title}</h2>
	<slot name="action"></slot>
</div>

<style>
	.intro {
		background-color: #1a1446;
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
