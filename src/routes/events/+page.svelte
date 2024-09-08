<script>
	import GoogleCalendar from '../../lib/GoogleCalendar.svelte';
	import { events } from '$lib/content/events.js';
	import PageIntro from '$lib/PageIntro.svelte';

	const { imageUrl, title, height } = events.intro;
</script>

<PageIntro {imageUrl} {title} {height} />
<GoogleCalendar />
