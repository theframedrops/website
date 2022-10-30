<template>
	<Teleport to="main" v-if="props.modalOpen">
		<div class="modal-container" @click="(e) => e.target === e.currentTarget && $emit('close')">
			<div class="modal">
				<div class="modal-title">
					<div
						v-if="props.event.backgroundImage"
						class="modal-image"
						:style="{
							backgroundImage: `url('${props.event.backgroundImage}')`
						}"
					/>

					<h1>
						<span>{{props.event.name}}</span><br/>
						<small>{{eventStart}} &mdash; {{eventEnd}}</small>
					</h1>

					<button @click="$emit('close')">
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</button>
				</div>

				<div class="modal-body">
					<p v-html="props.event.description"></p>

					<div class="modal-buttons">
						<a :href="DISCORD_URL">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="comment-alt"
								class="svg-inline--fa fa-comment-alt fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								height="1em"
								width="1em"
							>
								<path
									fill="currentColor"
									d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
								/>
							</svg>

							Join us on Discord
						</a>
						<button @click="handleSave">
							Save Event
						</button>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
import { DISCORD_URL } from '@/config';
import { Event, slugify } from './base';

import { createEvent } from 'ics';
import { saveAs } from 'file-saver';

import dayjs from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
import dayjsTimezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

defineEmits<{
	(event: "close"): void;
}>();

const props = defineProps<{
	event: Event;
	modalOpen: boolean;
}>();

const eventStart = dayjs(props.event.start).format("h:mm A");
const eventEnd = dayjs(props.event.end).format("h:mm A (zzz)");

function handleSave() {
	const start = dayjs(props.event.start).utc();
	const end = dayjs(props.event.end).utc();
	const cal = createEvent({
		title: props.event.name,
		description: props.event.description,
		start: [start.year(), start.month() + 1, start.date(), start.hour(), start.minute()],
		startInputType: 'utc',
		end: [end.year(), end.month() + 1, end.date(), end.hour(), end.minute()],
		endInputType: 'utc',
	});

	if (cal.value) {
		saveAs(new Blob([cal.value]), `frame-drops-${slugify(props.event.name)}.ics`);
	}
}
</script>

<style>
.modal-container {
	z-index: 1001;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.5);
	animation: fadeIn .2s;
}

@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

.modal {
	background: var(--theme-bg);
	border-radius: 1rem;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(20vw + 30rem);
	max-width: 90vw;
	max-height: 80vh;
	overflow-y: auto;
}

.modal-title {
	position: relative;
	min-height: 5.5rem;
}

.modal-title .modal-image {
	width: 100%;
	vertical-align: bottom;
	aspect-ratio: 16 / 9;
	background-color: #000;
	background-size: cover;
	background-position: center;
}

.modal-title h1 {
	all: unset;
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	max-width: unset;
	padding: .5rem 2rem;

	font-size: 1rem;
	margin: 0;
}

.modal-title h1 span {
	font-size: 1.5rem;
	font-weight: 600;
}

.modal-title .modal-image + h1 {
	color: #FFF;
	background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, .8));
}

.modal-title button {
	position: absolute;
	top: 1rem;
	right: 1rem;
	cursor: pointer;

	transition: color .2s, box-shadow .2s;
}

.modal-title button:hover, .modal-title button:focus {
	color: var(--theme-text-accent);
}

.modal-title button:focus {
	box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);
}

.modal-body {
	margin: 2rem;
	margin-top: 1rem;
}

.modal-buttons {
	display: flex;
	align-items: center;
	margin-top: 1rem;
}

.modal-buttons a, .modal-buttons button {
	all: unset;

	display: inline-flex;
	align-items: center;
	margin-right: 1rem;
	padding: 0.2rem 1rem;
	text-decoration: none;
	border-radius: 1.2rem;
	cursor: pointer;

	font-size: 1rem;
	font-family: var(--font-body);
	font-weight: 600;

	background-color: var(--theme-accent);
	transition: box-shadow 0.2s, background-color 0.2s;
}

.modal-buttons a, .modal-buttons button,
.modal-buttons a::selection, .modal-buttons button::selection {
	color: #FFF;
}

:root.theme-dark .modal-buttons a,
:root.theme-dark .modal-buttons button,
:root.theme-dark .modal-buttons a::selection,
:root.theme-dark .modal-buttons button::selection {
	color: #000;
}

.modal-buttons a:hover, .modal-buttons a:focus,
.modal-buttons button:hover, .modal-buttons button:focus {
	text-decoration: underline;
}

.modal-buttons a:focus,
.modal-buttons button:focus {
	background-color: hsl(var(--color-base-accent), 35%);
	box-shadow: 0 0 0 0.2rem hsla(var(--color-accent), 0.5);
}

.modal-buttons a svg, .modal-buttons button svg {
	margin-right: .6em;
}

.link-big {
	font-weight: bold;
}
</style>
