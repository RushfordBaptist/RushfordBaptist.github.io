<script>
	import { whatWeBelieve } from '$lib/content/whatWeBelieve.js';
	import PageIntro from '$lib/PageIntro.svelte';

	const { imageUrl, title, height } = whatWeBelieve.intro;
</script>

<PageIntro {imageUrl} {title} {height} />
