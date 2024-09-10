<script>
	import { marked } from 'marked';
	export let story;
	const { title, content, textAlignment, imageUrl, imageAlignment, imageAltText } = story;
</script>

<div class="markdown-container">
	{#if title}<div>{@html marked(title)}</div>{/if}
	<div class="markdown-content-container {textAlignment ? 'text-' + textAlignment : ''}">
		{#if imageUrl}
			<img
				src={imageUrl}
				alt={imageAltText}
				class={imageAlignment ? 'image-' + imageAlignment : 'image-left'}
			/>
		{/if}
		{@html marked(content)}
	</div>
</div>

<style>
	.markdown-container {
		padding: 1rem;
		text-align: center;
	}

	img {
		max-width: clamp(200px, 40cqw, 350px);
	}

	.text-left {
		text-align: left;
	}

	.image-left {
		float: left;
		margin-right: 1rem;
		margin-bottom: 1rem;
	}

	.markdown-content-container {
		display: inline-block;
	}
</style>
