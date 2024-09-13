<script>
	export let location;
	const { title, address1, address2, directionsLink } = location;
</script>

<div class="card-1">
	<h5>{title}</h5>
	<p class="margin-bottom-0">{address1}</p>
	<p class="margin-bottom-1rem">{address2}</p>
	<a class="buttonLink" href={directionsLink} target="_blank" rel="noopener noreferrer">
		Get Directions
	</a>
</div>

<style>
	.margin-bottom-0 {
		margin-bottom: 0;
	}

	.margin-bottom-1rem {
		margin-bottom: 1rem;
	}
</style>
