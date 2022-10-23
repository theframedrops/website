<template>
	<li
		class="event-container"
		:style="{
			height: `calc(${(props.event.height)} * .5rem)`,
			top: `calc(${props.event.top} * .5rem)`,
			left: `${props.event.leftPercentage}%`,
			width: `${props.event.widthPercentage}%`,
			zIndex: props.event.zIndex || `auto`,
		}"
	>
	<button
		@click="handleOpen"
		class="event-container-button"
	>
		<div class="event">
			<h3 class="event-name">{{props.event.name}}</h3>
			<p>
				{{eventStart}} &mdash; {{eventEnd}}
			</p>
		</div>
	</button>

	<CalendarModal
		:modalOpen="modalOpen"
		:event="props.event"
		@close="handleClose"
	/>
	</li>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Event, slugify } from './base';
import CalendarModal from './CalendarModal.vue';

import dayjs from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
import dayjsTimezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

const props = defineProps<{
	event: Event;
}>();

const eventStart = dayjs(props.event.start).format("h:mm A");
const eventEnd = dayjs(props.event.end).format("h:mm A z");

let modalOpen = ref(false);

onMounted(() => {
	if (typeof globalThis.window !== undefined && globalThis.window?.location.search === '?event=' + slugify(props.event.name))
		modalOpen.value = true;
});

function handleOpen() {
	modalOpen.value = true;
	window.history.replaceState(null, null, '?event=' + slugify(props.event.name));
}

function handleClose() {
	modalOpen.value = false;
	window.history.replaceState({}, document.title, window.location.pathname);
}
</script>

<style>
.event-container {
	position: absolute;
	left: 0;
	right: 0;
	padding: 0.2rem 0.3rem;
}

.event-container:hover, .event-container:focus {
	z-index: 1000 !important;
}

.event-container-button {
	background: unset;
	border: unset;
	height: 100%;
	width: 100%;
	padding: unset;
	border-radius: unset;
	gap: unset;
	font-size: unset;
	align-items: unset;
	display: unset;
	color: unset;
	appearance: none;
	text-align: unset;
	font-family: unset;
}

.event {
	width: 100%;
	height: 100%;
	min-height: 2rem;
	padding: .2rem .6rem;

	border: 1px solid var(--theme-text-accent);
	box-shadow: 0 3px .6rem hsla(var(--color-accent), 0.3);
	background-color: var(--theme-bg-highlight);
	overflow: hidden;

	cursor: pointer;
	transition: background-color .2s, box-shadow .2s;
	display: flex;
	flex-direction: column;
}

.event h3 {
	all: unset;
	display: block;
	color: var(--theme-text);
	font-size: .8rem;
	font-weight: 600;

	white-space: break-spaces;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-basis: fit-content;
	flex-shrink: 1;
}

.event p {
	color: var(--theme-text-secondary);
	font-size: .6rem;
	flex-shrink: 0;
}

.event:hover h3 {
	text-decoration: underline;
}

.event:hover, .event:focus {
	background-color: var(--theme-bg);
	box-shadow: 0 3px 1rem hsla(var(--color-accent), 0.5);
}
</style>
