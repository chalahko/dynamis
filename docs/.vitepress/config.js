export default {
	title: 'Dynamis Combat',
	description: 'An MMO focused combat RP system',
	themeConfig: {
		logo: '/dc-icon.png',
		nav: [
			{ text: 'Quick Reference', link: '/docs/quick-player' },
			{ text: 'Full Documentation', link: '/docs/intro' },
		],
		sidebar: {
			'/docs/': [
				{
					text: 'Quick Reference',
					items: [
						{ text: 'For Players', link: '/docs/quick-player' },
						{ text: 'For Game Masters', link: '/docs/quick-gm' },
					]
				},
				{
					text: 'Documentation',
					items: [
						{ text: 'Health', link: '/docs/' },
						{ text: 'Threat Rolls', link: '/docs/' },
						{ text: 'Actions', link: '/docs/' },
						{ text: 'Stances', link: '/docs/' },
						{ text: 'Phases', link: '/docs/' },
						{ text: 'Examples', link: '/docs/' },

					]
				}
			],

			'/resources/': [

			]
		},
		editLink: {
			pattern: ':path',
			text: 'Error? Report it here.'
		},
	},
	cleanUrls: 'without-subfolders',
	lastUpdated: false,
	head: [
		['link', { rel: 'icon', href: '/dc-icon.png' }]
	],
	titleTemplate: 'Dynamis',
	base: '/dynamis/'
}