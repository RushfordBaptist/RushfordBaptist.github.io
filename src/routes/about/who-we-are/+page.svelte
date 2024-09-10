<script>
	import { whoWeAre } from '$lib/content/whoWeAre.js';
	import PageIntro from '$lib/PageIntro.svelte';
	import MarkedStory from '$lib/MarkedStory.svelte';

	const { imageUrl, title, height } = whoWeAre.intro;
</script>

<PageIntro {imageUrl} {title} {height} />

<div class="container">
	{#each whoWeAre.stories as story}
		<MarkedStory {story} />
		<hr />
	{/each}
</div>
