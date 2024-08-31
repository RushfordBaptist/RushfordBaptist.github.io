<script>
	import { marked } from 'marked';
	export let markdownString = '';
</script>

<div class="markdownContainer">
	{@html marked(markdownString)}
</div>

<style>
	.markdownContainer {
		padding: 32px;
	}

	.markdownContainer :global(h1) {
		text-align: center;
		font-size: 3.75rem;
		font-weight: 300;
		line-height: 1.2;
		letter-spacing: -0.00833em;
		margin-top: 0;
		margin-bottom: 0.35em;
	}

	.markdownContainer :global(p) {
		text-align: center;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		letter-spacing: 0.00938em;
	}
</style>
