<template>
	<div class="streamer" v-for="streamer in streamers" :key="streamer.displayName" v-bind:live="streamer.isLive" v-on:click="window.location.href = streamer.url">
		<img v-if="!!streamer.profilePictureUrl" :src="streamer.profilePictureUrl"/>
		<div>
			<span class="streamer-name">{{ streamer.displayName }}</span>
			<a :href="'https://' + streamer.url">{{ streamer.url }}</a>
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
	"fennifith",
	"garablacktail",
	"godpandus",
	"heckinchloe",
	"ljtechdotca",
	"nekooverflow",
	"njcoffeejunkie",
	"pixelpirate_",
	"qarnax_",
	"reikaze",
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

// TODO: api fetch from twitch-is-live
</script>

<style>
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
	bottom: 8px;
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
