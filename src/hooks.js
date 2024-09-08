export function reroute({ url }) {
	if (url.pathname === '/about') {
		return '/about/who-we-are';
	}
}
