<script>
	import '../global.css';
	import Navbar from '../lib/Navbar.svelte';
</script>

<Navbar />
<div class="content"><slot /></div>

<style>
	.content {
		margin-top: -150px;
	}
</style>
