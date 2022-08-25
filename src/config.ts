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
export const GITHUB_EDIT_URL = `https://github.com/theframedrops/website/blob/main/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.theframedrops.com`;

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
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Schedule / Events', link: 'en/schedule' },
		{ text: 'Streamers', link: 'en/streamers' },
		{ text: 'Code of Conduct', link: 'en/code-of-conduct' },

		{ text: 'Streamer Setup', header: true },
		{ text: 'Introduction', link: 'en/streamer-setup/' },
		{ text: 'Overlays', link: 'en/streamer-setup/overlays/' },
		{ text: 'Tiltify', link: 'en/streamer-setup/tiltify/' },
	],
};
