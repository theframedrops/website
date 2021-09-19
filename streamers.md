# Participating Streamers

We have a few streamers who are either involved in organizing this event, or have otherwise indicated that they'll be joining
us for the events.

We're hoping to have a wide range of streamers who do different content. We have some speedrunners (of various games), some casual game streamers, programming streamers, and more.

<div id="streamers">
	<v-streamers-list></v-streamers-list>
</div>

<script>
async function doAsync() {
	const channels = await fetch(`https://tfd-twitch-is-live.horrific.dev/channels/${window.Streamers.join('/')}`).then(res => res.json());
	return Object.entries(channels)
		.map(([id, info]) => ({ id, url: `https://twitch.tv/${id}`, ...info }))
		.sort((a, b) => a.displayName.localeCompare(b.displayName))
		.sort((a, b) => (b.isLive ? 1 : 0) - (a.isLive ? 1 : 0));
}

Vue.component('v-streamers-list', {
	template: `
		<div>
			<div class="streamer" v-for="streamer in streamers" :key="streamer.displayName" v-on:click="window.location.href = streamer.url;">
				<img :src="streamer.profilePictureUrl"/>
				<div>
					<span class="streamer-name">{{ streamer.displayName }}</span>
					<a :href="streamer.url">{{ streamer.url }}</a>
				</div>
				<span class="streamer-live" v-if="streamer.isLive">LIVE</span>
			</div>
		</div>
    `,
    data() {
		return { streamers: [] }
	},
	mounted() {
		doAsync().then(arr => {
			this.streamers = arr;
			console.log(arr);
		});
	}
});

new Vue({
	el: "#streamers"
});
</script>

<style>
.streamer {
	display: flex;
	align-items: center;
	padding: 16px 0;
	cursor: pointer;
}
.streamer > img {
	width: 80px;
	height: 80px;
	padding: 4px;
	box-shadow: 0 0 0 3px var(--accent);
	border-radius: 50%;
	margin-right: 24px;
}

.streamer .streamer-name {
	display: block;
	font-weight: 700;
	font-size: 1.2em;
}

.streamer > div {
	flex-grow: 1;
}

.streamer-live {
	padding: 4px 6px;
	border-radius: 6px;
	font-weight: 700;
	color: #FFFFFF;
	background-color: #D50000;
}
</style>

## Call to Stream (Join Us)

Are you a streamer? We'd love to have you as part of the stream!

You'll be able to help us figure out the schedule, list of events, and more! Even if you simply want to help with donations
but do individual content, you're more than welcome to be included as a member of the crew!

[Join our Discord](https://discord.theframedrops.com) and let us know you'd like to join! We'll add you to the list and help
you get setup.
