<script>
	import PageIntro from '$lib/PageIntro.svelte';
	import MarkedStory from '../lib/MarkedStory.svelte';
	import { home } from '$lib/content/home.js';
	import LocationCard from '../lib/LocationCard.svelte';
	import TimeCard from '../lib/TimeCard.svelte';
	import GoogleCalendar from '../lib/GoogleCalendar.svelte';

	const {
		directions,
		intro: {
			imageUrl,
			pretitle,
			title,
			height,
			action: { text, path }
		},
		locationsAndTimes: { locations, times },
		stories
	} = home;
</script>

<PageIntro {imageUrl} {pretitle} {title} {height}>
	<a slot="action" href={path} class="outlineButton" role="button">{text}</a>
</PageIntro>

<div class="container">
	{#each stories as content}
		<MarkedStory markdownString={content} />
		<hr />
	{/each}
</div>

<div class="container centered-container">
	<h2>Locations & Times</h2>
	<div class="centered-row">
		{#each locations as location}
			<LocationCard {location} />
		{/each}
	</div>
	<div class="centered-row">
		{#each times as event}
			<TimeCard {event} />
		{/each}
	</div>
	<p class="margin-bottom-s">{directions}</p>
	<hr />
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	:global(body) {
		margin: 0;
	}
	.outlineButton {
		background-color: transparent;
		border: 3px solid white;
		border-radius: 0;
		color: white;
		padding: 7px 21px;
		font-size: 0.9375rem;
		min-width: 64px;
		text-decoration: none;
		transition:
			background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		font-weight: 500;
		line-height: 1.75;
		letter-spacing: 0.02859em;
		text-transform: uppercase;
		cursor: pointer;
		margin: 0;
	}
	.outlineButton:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
