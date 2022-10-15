export const SITE = {
	title: 'The Frame Drops',
	description: 'A collaborative charity livestream with your favorite streamers.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://theframedrops.com/share-banner.png',
		alt: 'An open-to-all charity livestream'
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/theframedrops/website`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const DISCORD_URL = `https://discord.theframedrops.com`;

export const DONATE_URL = `https://donate.theframedrops.com`;

export const OVERLAY_URLS = {
	GOAL_BAR: 'https://overlays.tiltify.com/zIM4K3ClcR4AZ31RlX8JX7Iw4gGq-sSp',
	EVENTS: 'https://overlays.tiltify.com/jVlYxQg9VnH4T-JMLAixvbZD3ET_kdm_',
	QR_CODE: 'https://overlays.tiltify.com/hG-rNs4Q95pDjqRsb34bGkXU7Aw1SIy9',
	COMPACT: 'https://overlays.tiltify.com/jRFYEmVubY_kUrr8nXvIrTLgAphmP810',
	TOTAL: 'https://overlays.tiltify.com/_p4t7ooy5hF0EgOK0APsjbg3UTuyJowS',
};

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: 'General', header: true },
		{ text: 'Introduction', link: '' },
		{ text: 'Schedule / Events', link: 'en/schedule' },
		{ text: 'Streamers', link: 'en/streamers' },
		{ text: 'Code of Conduct', link: 'en/code-of-conduct' },

		{ text: 'Streamer Setup', header: true },
		{ text: 'Introduction', link: 'en/streamer-setup' },
		{ text: 'Overlays', link: 'en/streamer-setup/overlays', children: [
			{ text: 'Add to Scene', link: 'en/streamer-setup/overlays/add-to-scene' },
			{ text: 'Separate Merged Components', link: 'en/streamer-setup/overlays/separate-merged-components' },
			{ text: 'Overlay Colors', link: 'en/streamer-setup/overlays/colors' },
			{ text: 'Presets', header: true },
			{ text: 'Total Package Overlay', link: 'en/streamer-setup/overlays/presets/total' },
			{ text: 'Compact Overlay Bar', link: 'en/streamer-setup/overlays/presets/compact' },
			{ text: 'Goal Indicators', link: 'en/streamer-setup/overlays/presets/goals' },
			{ text: 'Event Displays', link: 'en/streamer-setup/overlays/presets/events' },
			{ text: 'QR Code', link: 'en/streamer-setup/overlays/presets/qr-code' },
		] },
		{ text: 'Tiltify', link: 'en/streamer-setup/tiltify', children: [
			{ text: 'Event Schedule', link: 'en/streamer-setup/tiltify/schedule' },
			{ text: 'Campaign Milestones', link: 'en/streamer-setup/tiltify/milestones' },
			{ text: 'Campaign Polls', link: 'en/streamer-setup/tiltify/polls' },
			{ text: 'Donor Rewards', link: 'en/streamer-setup/tiltify/rewards' },
			{ text: 'Event Targets', link: 'en/streamer-setup/tiltify/targets' },
		] },
	],
};
