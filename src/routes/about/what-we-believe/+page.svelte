<script>
	import { whatWeBelieve } from '$lib/content/whatWeBelieve.js';
	import PageIntro from '$lib/PageIntro.svelte';
	import MarkedStory from '$lib/MarkedStory.svelte';

	const { imageUrl, title, height } = whatWeBelieve.intro;
</script>

<PageIntro {imageUrl} {title} {height} />

<div class="medium-container">
	{#each whatWeBelieve.stories as story}
		<MarkedStory {story} />
		<hr />
	{/each}
</div>
