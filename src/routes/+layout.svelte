<script>
	import '../global.css';
	import Footer from '../lib/Footer.svelte';
	import Navbar from '../lib/Navbar.svelte';
</script>

<Navbar />
<div class="content"><slot /></div>
<Footer />

<style>
	.content {
		margin-top: -150px;
	}
</style>
