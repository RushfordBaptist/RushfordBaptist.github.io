import { text } from '@sveltejs/kit';

export const whoWeAre = {
	intro: {
		height: 400,
		imageUrl: 'https://i.imgur.com/PixBxtkh.jpg',
		imgTxt: 'Some of the elements on the church stage',
		title: 'Who We Are'
	},
	stories: [
		{
			title: '## Rushford Baptist Church',
			content:
				"Glorifying God by striving to love people, learn God's word, and live by Jesus' example."
		},
		{
			title: '## Our Pastor',
			content: `We are currently between pastors. Enquiries about the position can be directed to [elders@rushfordbaptist.org](mailto:elders@rushfordbaptist.org?subject=Pastoral%20search%20enquiry).`,
			imageUrl: `https://i.imgur.com/qwsfwvv.jpg`,
			imageAlignment: 'left',
			textAlignment: 'left'
		}
	]
};
