<template>
	<div class="streamer-grid">
		<div class="streamer" v-for="streamer in streamers" :key="streamer.displayName" v-bind:live="streamer.isLive" v-on:click="handleClick(streamer)">
			<img no-zoom :src="streamer.profilePictureUrl || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D'"/>
			<div>
				<span class="streamer-name">{{ streamer.displayName }}</span>
				<a :href="'https://' + streamer.url">{{ streamer.url }}</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const streamers = ref([
	"bearikeen",
	"boobookashoo",
	"carmen_the_frog",
	"crutchcorn",
	"dolanproductionz",
	"fennifith",
	"garablacktail",
	"godpandus",
	"heckinchloe",
	"jutanium",
	"ljtechdotca",
	"nekooverflow",
	"njcoffeejunkie",
	"odatnurd",
	"pixelpirate_",
	"qarnax_",
	"reikaze",
	"selcouthmind",
	"techygrrrl",
	"thelonghairedfellow",
	"veund01",
	"vivisectorgaming",
	"0zenith0"
].map(s => ({
	displayName: s,
	url: `twitch.tv/${s}`,
	profilePictureUrl: '',
	isLive: false,
})));

// hopefully this is an effective "don't run during SSR" check
if (typeof globalThis.window !== 'undefined') (async () => {
	const usernames = streamers.value.map(s => s.displayName).join('/');
	const result = await fetch(`https://tfd-twitch-is-live.herokuapp.com/channels/${usernames}`).then(r => r.json());

	streamers.value = streamers.value.map(s => ({
		...s,
		...result[s.displayName],
	})).sort(
		// order live users at the top of the list
		(a, b) => b.isLive - a.isLive
	);
})();

function handleClick(streamer: typeof streamers.value[number]) {
	window.location.href = 'https://' + streamer.url;
}
</script>

<style>
@media (min-width: 1390px) {
	.streamer-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

.streamer {
	display: flex;
	position: relative;
	align-items: center;
	padding: .5rem 0;
	cursor: pointer;
	margin: 0 !important;
}

.streamer > img {
	width: 80px;
	height: 80px;
	padding: 4px;
	box-shadow: 0 0 0 3px var(--accent);
	border-radius: 50%;
	margin-right: 24px;
}

.streamer[live='true'] > img {
	box-shadow: 0 0 0 3px #FF0000;
}

.streamer[live='true']::after {
	position: absolute;
	bottom: -4px;
	left: 40px;
	transform: translateX(-50%);

	content: 'LIVE';
	padding: 4px 6px;
	border-radius: 6px;
	font-weight: 700;
	color: #FFFFFF;
	background-color: #D50000;
}

.streamer .streamer-name {
	display: block;
	font-weight: 700;
	font-size: 1.2em;
}

.streamer > div {
	flex-grow: 1;
}
</style>
