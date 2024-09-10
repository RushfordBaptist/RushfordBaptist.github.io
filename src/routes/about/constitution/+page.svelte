<script>
	import { constitution } from '$lib/content/constitution.js';
	import PageIntro from '$lib/PageIntro.svelte';
	import { marked } from 'marked';

	const { imageUrl, title, height } = constitution.intro;
</script>

<PageIntro {imageUrl} {title} {height} />

<div class="medium-container">
	{#each constitution.articles as article}
		<details name="constitution">
			<summary>{@html marked(article.title)}</summary>
			<div class="content">{@html marked(article.content)}</div>
		</details>
	{/each}
</div>

<style>
	details {
		border: 1px solid #ccc;
	}

	summary {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
	}

	summary::after {
		content: '';
		width: 30px;
		height: 30px;
		background: url('/caret-down.svg') no-repeat;
		background-size: cover;
		transition: 0.2s;
	}

	details[open] > summary::after {
		transform: rotate(180deg);
	}

	summary::-webkit-details-marker {
		display: none;
	}
</style>
