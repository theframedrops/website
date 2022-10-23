<template>
	<div class="schedule">
		<div class="day" v-for="day in days" :key="day.date.format()">
			<h2>{{ dayjs(day.date).format("MMM. Do") }}</h2>

			<ul>
				<template v-for="event in day.events" :key="event.name">
					<CalendarEvent :event="event" />
				</template>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Event } from "./base";
import calendar from "./calendar";
import CalendarEvent from "./CalendarEvent.vue";

import dayjs, { Dayjs } from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
import dayjsTimezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

const events = calendar.reduce((events, event) => {
	const pushEvent = (start: Dayjs, end: Dayjs) => {
		const eventDate = start.format("YYYY-MM-DD");

		const relative = dayjs(eventDate || event.start);
		const minuteStart = Math.max(
			dayjs(event.start).diff(relative, "minute"),
			0
		);
		const minuteEnd = Math.min(
			dayjs(event.end).diff(relative, "minute"),
			24 * 60
		);

		events.push({
			...event,
			date: dayjs(eventDate),

			top: minuteStart,
			height: minuteEnd - minuteStart,
		})
	};

	// split events into multiple segments if they span multiple days
	const eventDateStart = dayjs(event.start).format("YYYY-MM-DD");
	const eventDateEnd = dayjs(event.end).format("YYYY-MM-DD");

	if (eventDateStart !== eventDateEnd && dayjs(event.end).hour() > 0) {
		pushEvent(dayjs(event.start), dayjs(event.start).endOf("day"));
		pushEvent(dayjs(event.end).startOf("day"), dayjs(event.end));
	} else {
		pushEvent(dayjs(event.start), dayjs(event.end));
	}

	return events;
}, [] as Event[]);

function isEventOverlapping(a: Pick<Event, "date" | "top" | "height">, b: Pick<Event, "date" | "top" | "height">) {
	if (!a.date.isSame(b.date)) return false;

	if (a.top > b.top) {
		return a.top < (b.top + b.height);
	} else {
		return b.top < (a.top + a.height);
	}
}

// calculate left/width props for overlapping events
for (const event of events) {
	const overlappingEvents = events.filter(e => e != event && isEventOverlapping(event, e));

	event.widthPercentage = 100;
	event.leftPercentage = 0;
	for (const e of overlappingEvents) {
		if (e.leftPercentage && e.leftPercentage < event.leftPercentage + event.widthPercentage) {
			event.widthPercentage /= 1.5;
		} else if (e.top <= event.top) {
			event.leftPercentage = 100 - (100 - event.leftPercentage) / 1.5;
		}
	}

	event.widthPercentage = Math.min(
		event.widthPercentage,
		100 - event.leftPercentage
	);

	console.log(event.name, event.widthPercentage, event.leftPercentage);
}

type CalendarDay = {
	date: dayjs.Dayjs;
	events: Event[];
};

// sort events into day columns
const days = events.reduce((days, event) => {
	let day = days.find(d => d.date.isSame(event.date));
	if (!day) {
		day = {
			date: event.date,
			events: []
		};
		days.push(day);
	}

	day.events.push(event);

	return days;
}, [] as CalendarDay[]);
</script>

<style>
.schedule {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 1fr;
	overflow-x: auto;
	margin: 2rem 0;
}

.schedule ul {
	list-style: none;
	padding: 0;
	margin: 0;

	height: calc(24 * 6 * 0.5rem);
	position: relative;
}

.schedule ul::after {
	content: " ";
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0.1;
	z-index: -1;

	background: repeating-linear-gradient(transparent, transparent calc(3rem - 2px), currentColor calc(3rem - 2px), currentColor 3rem);
}

.schedule li {
	margin: 0;
}

.day {
	min-width: 15rem;
}

.day h2 {
	all: unset;
	display: block;
	font-size: 1.2rem;
	text-align: center;
	border-bottom: 3px solid var(--theme-text-lighter);
}
</style>
