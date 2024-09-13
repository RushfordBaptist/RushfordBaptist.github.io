<script>
	import { footer } from '$lib/content/footer.js';
	import MailIcon from './MailIcon.svelte';
	import PhoneIcon from './PhoneIcon.svelte';
	import MapIcon from './MapIcon.svelte';

	const { title, address, directionsLink, primaryPhone, primaryEmail, contacts } = footer;
</script>

<div class="footer padding-y-xl">
	<div class="icon-row">
		<div class="stack">
			<a href={`tel:${primaryPhone.replaceAll('-', '')}`}>
				<PhoneIcon />
			</a>
			<span class="overline">call</span>
		</div>
		<div class="stack">
			<a href={`mailto:${primaryEmail}`}>
				<MailIcon />
			</a>
			<span class="overline">email</span>
		</div>
		<div class="stack">
			<a href={directionsLink}>
				<MapIcon />
			</a>
			<span class="overline">map</span>
		</div>
	</div>
</div>

<style>
	.footer {
		background-color: black;
		color: white;
	}

	.icon-row {
		width: clamp(0px, 75%, 800px);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		text-align: center;

		& > *:not(:last-child) {
			border-right: 1px solid white;
		}

		& svg {
			width: 35px;
			fill: white;
		}
	}
</style>
