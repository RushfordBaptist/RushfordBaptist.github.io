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
	<div class="stack centered gap-s">
		<div class="stack gap-2xs">
			{#each contacts as { title, name, phone, email }}
				<p>
					{title}: {name} | <a href={`tel:${phone.replaceAll('-', '')}`}>{phone}</a> |
					<a href={`mailto:${email}`}>{email}</a>
				</p>
			{/each}
		</div>
		<div>
			<p>{title}</p>
			{#each Object.values(address) as line}
				<p>{line}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.footer {
		background-color: black;
		color: white;
		& a {
			color: white;
		}
	}

	.icon-row {
		width: clamp(0px, 75%, 800px);
		margin: 0 auto var(--space-m);
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

	p {
		margin: 0;
	}
</style>
