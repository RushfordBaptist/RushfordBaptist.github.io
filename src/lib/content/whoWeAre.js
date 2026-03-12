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
			content: `Pastor Jake has the privilege of serving as the Senior Pastor of Rushford Baptist Church. He is passionate about preaching the Bible and equipping the church to reach a lost and dying world. Nothing excites him more than seeing people grow in their faith and live out the gospel in their community.

Jake holds a Bachelor of Science in Apologetics and Biblical Studies from Liberty University and is currently pursuing a Master of Divinity at Duke University. He has served in pastoral ministry for nearly thirty years and believes the local church is one of God's greatest gifts to the world. Jake loves helping people find belonging, purpose, and spiritual growth in Christ.

Jake and his wife, Julie, have three incredible children: Faith, Sam, and Nate. When he's not preparing sermons or meeting with church members, you'll likely find him embracing his adventurous side outdoors. He enjoys hiking, canyoneering, camping, and exploring God's creation.`,
			imageUrl: `https://res.cloudinary.com/dkilh4qil/image/upload/v1773278535/Pastor_Jake_1_tfj4ua.jpg`,
			imageAlignment: 'left',
			textAlignment: 'left'
		},
		{
			content: '[Click here for the Church Constitution](/about/constitution)'
		}
	]
};
