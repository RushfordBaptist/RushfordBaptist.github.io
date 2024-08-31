export const home = {
	intro: {
		height: 600,
		imageUrl: 'https://i.imgur.com/CBNhtBo.jpg',
		imgTxt: 'Church Building',
		pretitle: 'Welcome to',
		title: 'Rushford Baptist Church',
		action: {
			text: 'Who Are We?',
			path: '/about/who-we-are'
		}
	},
	stories: [
		`# Worship with us!\nJoin us as we strive to love people, learn God's word, and live by Jesus' example.`
	],
	locationsAndTimes: {
		title: 'Locations & Meeting Times',
		locations: [
			{
				coords: {
					lat: 42.39250960936373,
					lng: -78.2520222247065
				},
				title: 'Rushford Baptist Church',
				imgUrl: 'https://i.imgur.com/gl8aZ2I.jpg',
				address1: '9016 Main St',
				address2: 'Rushford, NY 14777'
			},
			{
				coords: {
					lat: 42.38555958812909,
					lng: -78.25269138180688
				},
				title: 'Bible House',
				imgUrl: 'https://i.imgur.com/gl8aZ2I.jpg',
				address1: '9103 Hardys Corners Road',
				address2: 'Rushford, NY 14777'
			}
		],
		times: [
			{
				title: 'Sunday School',
				day: 'Sunday',
				time: '9:45am',
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
				time: '6:30pm',
				location: "Dave & Amy Brautigam's House"
			}
		]
	},
	directions:
		"We're located on the corner of Concrete Street and Main Street in Rushford, across from the Post Office and next to the library."
};
