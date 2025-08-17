import { footer } from './footer.js';

const { title, address, directionsLink } = footer;

export const home = {
	intro: {
		height: 600,
		imageUrl: 'https://res.cloudinary.com/dkilh4qil/image/upload/Church_front_mwr9f1.jpg',
		imgTxt: 'Church Building',
		pretitle: 'Welcome to',
		title: 'Rushford Baptist Church',
		action: {
			text: 'Who Are We?',
			path: '/about/who-we-are'
		}
	},
	stories: [
		{
			title: `## Worship with us!`,
			content: `Join us as we strive to love people, learn God's word, and live by Jesus' example.`
		}, 
		{
			title: `## Labor Day Sunday`, 
			content: `Different time. Different location. Same church. Same God.

Join us at __Legion Park__ in Rushford at __10:30am__ as we celebrate Christ with the broader community.`
		}, 
	],
	locationsAndTimes: {
		title: 'Locations & Meeting Times',
		locations: [
			{
				title,
				address1: address.line1,
				address2: address.line2,
				directionsLink
			},
			{
				title: 'Bible House',
				address1: '9103 Hardys Corners Road',
				address2: 'Rushford, NY 14777',
				get directionsLink() {
					return `https://www.google.com/maps/dir/?api=1&destination=${this.title.replaceAll(' ', '+')}+Rushford+NY`;
				}
			}
		],
		times: [
			{
				title: 'Sunday School',
				day: 'Sunday',
				time: '9:30am',
				location: 'Church Building'
			},
			{
				title: 'Worship Service',
				day: 'Sunday',
				time: '11:00am',
				location: 'Church Building'
			},
			{
				title: 'Bible Study & Prayer',
				day: 'Wednesday',
				time: '7:00pm',
				location: "Dave & Amy Brautigam's House"
			}
		]
	},
	directions:
		"We're located on the corner of Concrete Street and Main Street in Rushford, across from the Post Office and next to the library."
};
