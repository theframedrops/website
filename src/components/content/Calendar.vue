<template>
	<div class="schedule">
		<div class="day" v-for="day in days" :key="day.date">
			<h2>{{dayjs(day.date).format("MMM. Do")}}</h2>

			<ul>
				<li v-for="event in day.events" :key="event.name">
					<CalendarEvent :event="event" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Event } from './base';
import CalendarEvent from './CalendarEvent.vue';

import dayjs from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);

// Event times are listed in UTC
const events: Event[] = [
	{
		start: '2022 11 04 8:00 PM',
		end: '2022 11 04 9:00 PM',
		name: "Minecraft Minigolf",
		timed: true,
		backgroundImage: "/assets/minecraft.jpg",
		description: `
Minecraft Minigolf features an 18-hole minigolf course built on fennifith's survival server. We'll play through the course and track scores - and possibly explore some other minigames in the area!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 04 9:00 PM',
		end: '2022 11 04 10:30 PM',
		name: "Minecraft Advancement Hunt",
		timed: true,
		backgroundImage: "/assets/minecraft.jpg",
		description: `
Minecraft Advancement Hunt is a team competition to score the most custom advancements as possible before the other team! The list of advancements will be released shortly before the event.
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 8:00 PM',
		end: '2022 11 05 9:30 PM',
		name: "Minecraft Mega Bedwars",
		timed: true,
		backgroundImage: "/assets/minecraft.jpg",
		description: `
Mega Bedwars is a team bedwars competition set in a custom dimension - based on the outer end island terrain!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 9:30 PM',
		end: '2022 11 05 10:30 PM',
		name: "Minecraft Endless Parkour",
		timed: true,
		backgroundImage: "/assets/mc-endless-parkour.png",
		description: `
Endless Parkour is an infinite, endless parkour map featuring unique biomes, structures, and redstone features. The objective is to complete as much parkour as possible without falling off, losing health, or getting smacked by a zombie!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 10:30 PM',
		end: '2022 11 06 12:00 AM',
		name: "Tetris Effect: Connected",
		timed: true,
		backgroundImage: "/assets/tetris_effect.jpg",
		description: `
Tetris Effect: Connected is the latest Tetris game with dazzling graphics, challenging game modes, and more.
<br>Join <a href="https://twitch.tv/techygrrrl">@techygrrrl on Twitch</a> to see her incredible capabilities in the game.
		`.trim()
	},
	{
		start: '2022 11 06 9:00 PM',
		end: '2022 11 06 10:30 PM',
		name: "Minecraft Chaotic Caving",
		timed: true,
		backgroundImage: "/assets/mc-chaotic-caving.png",
		description: `
Chaotic Caving is a timed spelunking adventure where teams compete to cave for special ores, find unique boss fights, loot boxes, and custom equipment scattered about the world!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 10:00 AM',
		end: '2022 11 05 11:30 AM',
		name: "Computer Science Sketchful",
		timed: true,
		backgroundImage: "/assets/code.jpg",
		description: `
<a href="https://sketchful.io">Sketchful</a> is a multiplayer pictionary game that we'll be playing with a set of generated Computer Science and Data Structures topics!
<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 11:30 AM',
		end: '2022 11 05 1:00 PM',
		name: "CodinGame Escape Rooms",
		timed: true,
		backgroundImage: "/assets/code.jpg",
		description: `
<a href="https://escape.codingame.com/">Coding Escape</a> is a set of multiplayer escape room puzzles that combines combines programming, creativity and non-coding exercises.
<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	}
].map(({ start, end, ...rest }) => ({
	// convert start/end times from UTC to local timezone
	start: dayjs(start).utc(true).local().format("YYYY MM DD h:mm A"),
	end: dayjs(end).utc(true).local().format("YYYY MM DD h:mm A"),
	...rest,
}));

type CalendarDay = {
	date: string;
	events: Event[];
};

const days = events.reduce((days, event) => {
	const pushEvent = (e: Event, relative?: string) => {
		const eventDate = dayjs(e.start).format("YYYY-MM-DD");

		// find/create a day for the event
		let day = days.find((d) => d.date === eventDate);
		if (!day) {
			day = {
				date: eventDate,
				events: [],
			};
			days.push(day);
		}

		const indent = day.events.filter(e2 => {
			const timeBeforeStart = dayjs(e2.start).diff(event.start, "minutes");
			const timeUntilEnd = dayjs(event.start).diff(e2.end, "minutes");

			if (timeBeforeStart <= -60 && timeUntilEnd < 0) {
				return true;
			}
			return false;
		}).length;

		// push the event into the day list
		day.events.push({
			...event,
			startRelative: relative,
			indent,
		});
	};

	const eventDateStart = dayjs(event.start).format("YYYY-MM-DD");
	const eventDateEnd = dayjs(event.end).format("YYYY-MM-DD");

	if (eventDateStart !== eventDateEnd && dayjs(event.end).hour() > 0) {
		pushEvent({ ...event, end: eventDateStart + " 23:59 PM"}, eventDateStart);
		pushEvent({ ...event, start: eventDateEnd + " 00:00 AM"}, eventDateEnd);
	} else {
		pushEvent(event, eventDateStart);
	}

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

	height: calc(24 * 6 * .5rem);
	position: relative;
}

.schedule ul::after {
	content: ' ';
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: .1;
	z-index: -1;

	background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='3rem' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='23' x1='0' y2='23' x2='24' stroke='currentColor' stroke-width='1'/%3E%3C/svg%3E");
	background-repeat: repeat;
	background-size: cover contain;
}

.schedule li {
	margin: 0;
}

.day {
	min-width: 14rem;
}

.day h2 {
	all: unset;
	display: block;
	font-size: 1.2rem;
	text-align: center;
	border-bottom: 3px solid var(--theme-text-lighter);
}
</style>
