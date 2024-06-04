<script>
	import PageIntro from '$lib/PageIntro.svelte';
</script>

<PageIntro
	imageUrl="https://i.imgur.com/CBNhtBo.jpg"
	pretitle="Welcome to"
	title="Rushford Baptist Church"
	height="600"
>
	<a slot="action" href="/about/who-we-are" class="outlineButton" role="button">Who are we?</a>
</PageIntro>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
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
