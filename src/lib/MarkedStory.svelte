<script>
	import { marked } from 'marked';
	export let markdownString = '';
</script>

<div class="centered-container">
	{@html marked(markdownString)}
</div>
