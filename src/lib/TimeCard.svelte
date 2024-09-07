<script>
	export let event;
	const { title, day, time, location } = event;
</script>

<div class="card-2">
	<h4 class="margin-bottom-0">{title}</h4>
	<hr class="margin-x-0 margin-bottom-s" />
	<h5>{day}: {time}</h5>
	<p>{location}</p>
</div>
