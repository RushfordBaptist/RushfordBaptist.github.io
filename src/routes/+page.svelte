<script>
	import PageIntro from '$lib/PageIntro.svelte';
	import MarkedStory from '../lib/MarkedStory.svelte';
	import { home } from '$lib/content/home.js';
	import LocationCard from '../lib/LocationCard.svelte';
	import TimeCard from '../lib/TimeCard.svelte';

	const {
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

<div class="locations-and-times">
	<h1>Locations & Times</h1>
	<div class="locations">
		{#each locations as location}
			<LocationCard {location} />
		{/each}
	</div>
	<div class="times">
		{#each times as time}
			<TimeCard {time} />
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
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
