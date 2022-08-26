<template>
	<div
		class="event-container"
		:style="{
			height: `calc(${(hourEnd - hourStart) / 10} * .5rem)`,
			top: `calc(${hourStart/10} * .5rem)`,
			left: `calc(${props.event.indent} * 1rem)`,
			right: `calc(-${props.event.indent} * 1rem)`,
		}"
	>
		<div class="event">
			<h3>{{props.event.name}}</h3>
			<p>
				{{eventStart}} &mdash; {{eventEnd}}
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Event } from './base';

import dayjs from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
dayjs.extend(dayjsFormatPlugin);

const props = defineProps<{
	event: Event;
}>();

const relative = dayjs(props.event.startRelative || props.event.start);
const hourStart = Math.max(dayjs(props.event.start).diff(relative, "minute"), 0);
const hourEnd = Math.min(dayjs(props.event.end).diff(relative, "minute"), 24*60);

const eventStart = dayjs(props.event.start).format("h:mm A");
const eventEnd = dayjs(props.event.end).format("h:mm A");
</script>

<style>
.event-container {
	position: absolute;
	left: 0;
	right: 0;
	padding: 0.5rem;
}

.event {
	width: 100%;
	height: 100%;
	min-height: 2rem;
	padding: .2rem 1rem;

	border: 1px solid var(--theme-text-accent);
	box-shadow: 0 3px .6rem hsla(var(--color-accent), 0.3);
	background-color: hsl(var(--color-base-accent), 97%);
	overflow: hidden;

	cursor: pointer;
	transition: background-color .2s, box-shadow .2s;
}

.event h3 {
	all: unset;
	display: block;
	color: var(--theme-text);
	font-size: .8rem;
	font-weight: 600;

	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.event p {
	color: var(--theme-text-secondary);
	font-size: .6rem;
}

.event:hover, .event:focus {
	background-color: var(--theme-bg);
	box-shadow: 0 3px 1rem hsla(var(--color-accent), 0.5);
}
</style>
