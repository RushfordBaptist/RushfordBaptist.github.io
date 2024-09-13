export const footer = {
	title: `Rushford Baptist Church`,
	address: {
		line0: `PO Box 26`,
		line1: `9016 Main St`,
		line2: `Rushford, NY 14777`
	},
	get primaryPhone() {
		return this.contacts[1].phone;
	},
	get primaryEmail() {
		return this.contacts[1].email;
	},
	get directionsLink() {
		return `https://www.google.com/maps/dir/?api=1&destination=${this.title.replaceAll(' ', '+')}+Rushford+NY`;
	},
	contacts: [
		{
			title: `Elder Chair`,
			name: `Scott Elwell`,
			phone: `585-689-2190`,
			email: `elders@rushfordbaptist.org`
		},
		{
			title: `Church Secretary`,
			name: `Kaleena Bell`,
			phone: `585-981-8107`,
			email: `secretary@rushfordbaptist.org`
		}
	]
};
