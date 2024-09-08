<script>
	import { whoWeAre } from '$lib/content/whoWeAre.js';
	import PageIntro from '$lib/PageIntro.svelte';

	const { imageUrl, title, height } = whoWeAre.intro;
</script>

<PageIntro {imageUrl} {title} {height} />
