import { text } from '@sveltejs/kit';

export const whoWeAre = {
	intro: {
		height: 400,
		imageUrl: 'https://res.cloudinary.com/dkilh4qil/image/upload/stage_y1lknp.jpg',
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
			content: `We are currently between pastors. Enquiries about the position can be directed to [elders@rushfordbaptist.org](mailto:elders@rushfordbaptist.org?subject=Pastoral%20search%20enquiry).
			
In the interim, while we seek a new pastor, we have been blessed to have the members of the Elder Board as well as a variety of guest speakers step into the pulpit. God has been faithful and we trust in his continued provision.`,
			imageUrl: `https://res.cloudinary.com/dkilh4qil/image/upload/q_70/question_man_agum7j.webp`,
			imageAlignment: 'left',
			textAlignment: 'left'
		},
		{
			content: '[Click here for the Church Constitution](/about/constitution)'
		}
	]
};
