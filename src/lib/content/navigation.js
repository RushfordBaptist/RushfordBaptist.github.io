export const menuItems = [
	{ name: 'Home', url: '/' },
	{
		name: 'About',
		submenu: [
			{ name: 'Who we are', url: '/about/who-we-are' },
			{ name: 'What we believe', url: 'about/what-we-believe' },
			{ name: 'Meeting times', url: 'about/meeting-times' },
			{ name: 'Contact us', url: 'about/contact' }
		]
	},
	{ name: 'Giving', url: 'https://tithe.ly/give?c=1324564' },
	{ name: 'Events', url: '/events' }
];
