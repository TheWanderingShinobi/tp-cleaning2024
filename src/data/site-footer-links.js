// @ts-check

/**
 * @typedef {Object} NavLink
 * @property {string} name
 * @property {string} url
 * @property {string} [icon]
 * @property {boolean} [isExternal]
 */

/** @type {NavLink[]} */
export const socialLinks = [
	{
		name: 'Facebook',
		icon: 'fa-facebook-f',
		url: 'https://www.facebook.com/theprofessionalswindows',
		isExternal: true
	},
	{
		name: 'Twitter',
		icon: 'fa-twitter',
		url: 'https://twitter.com/TOWindowandEave',
		isExternal: true
	},
	{
		name: 'Instagram',
		icon: 'fa-instagram',
		url: 'https://www.instagram.com/theprofessionalswindows/',
		isExternal: true
	},
	{
		name: 'YouTube',
		icon: 'fa-youtube',
		url: 'https://www.youtube.com/channel/UCNetkzM6u3Xeh97Udv5gz0g',
		isExternal: true
	},
	{
		name: 'LinkedIn',
		icon: 'fa-linkedin-in',
		url: 'https://www.linkedin.com/in/the-professionals-window-and-eaves-cleaning-ltd-62163b246/',
		isExternal: true
	},
	{
		name: 'TikTok',
		icon: 'fa-tiktok',
		url: 'https://www.tiktok.com/@theproswindowcleaningltd',
		isExternal: true
	}
]

/** @type {NavLink[]} */
export const usefulLinks = [
	{ name: 'Eavestrough Cleaning', url: '/eavestrough-cleaning' },
	{ name: 'Window Cleaning', url: '/window-cleaning' },
	{ name: 'Power Washing', url: '/power-washing' },
	{
		name: 'Roofing',
		url: 'https://innovative-roofing.com/',
		isExternal: true
	}
]

/** @type {NavLink[][]} */
export const serviceAreas = [
	[
		{ name: 'Toronto', url: '/toronto-window-cleaning' },
		{ name: 'North York', url: '/north-york-window-cleaning' },
		{ name: 'Scarborough', url: '/eavestrough-cleaning-scarborough' },
		{ name: 'Etobicoke', url: '/etobicoke-eavestrough-cleaning' }
	],
	[
		{ name: 'Markham', url: '/window-cleaning-markham' },
		{ name: 'Richmond Hill', url: '/eavestrough-cleaning-richmond-hill' },
		{ name: 'Vaughan', url: '/window-cleaning-vaughan' },
		{ name: 'Mississauga', url: '/mississauga-window-cleaning' }
	],
	[
		{ name: 'Pickering', url: '/eavestrough-cleaning-pickering' },
		{ name: 'Ajax', url: '/eavestrough-cleaning-ajax' },
		{ name: 'Thornhill', url: '/window-cleaning-thornhill' },
		{ name: 'Brampton', url: '/brampton-window-cleaning' }
	]
]
