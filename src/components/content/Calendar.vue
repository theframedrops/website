<template>
	<div class="schedule">
		<div class="day" v-for="day in days" :key="day.date">
			<h2>{{dayjs(day.date).format("MMM. Do")}}</h2>

			<ul>
				<li v-for="event in day.events" :key="event.id">
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
dayjs.extend(dayjsFormatPlugin);

const events: Event[] = [
    {
        id: 'terraria',
        color: "brown",
        start: ('2021 09 25 4:00 AM'),
        end: ('2021 09 25 6:00 PM'),
        name: "Multiplayer Terraria",
        timed: true,
        backgroundImage: "/assets/terraria.jpg",
        description: `
The objective of this Terraria stream is to get from 0 to as far as possible during its duration on the mastermode difficulty
We'll probably get murdered a whole lot, and chaos will probably be plentiful, but we'll persevere!
<a href="https://twitch.tv/garablacktail">@garablacktail on Twitch</a> is hosting this event and is open to all
<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord channel/server</a>
        `.trim()
    },
    {
        id: 'minecraft-achievement-hunt',
        color: "green",
        start: ('2021 09 25 10:00 AM'),
        end: ('2021 09 25 12:30 PM'),
        name: "Minecraft Achievement Hunt",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
The objective of achievement hunt is what it sounds like: each 3-4 person team will race to get the most achievements possible. The first team to score an achievement receives an additional point.
<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting & this is open to all
<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    },
    {
        id: 'code-golf',
        color: "blue",
        start: ('2021 09 25 1:00 PM'),
        end: ('2021 09 25 2:30 PM'),
        name: "Code Golf",
        timed: true,
        backgroundImage: "/assets/code.jpg",
        description: `
Code Golfing is the concept of solving a coding problem in any language in as few of characters as possible.
We'll be competing on the same problems and trying to see who can get the lowest score!
<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is hosting and is open to all
<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    },
    {
        id: 'minecraft-uhc',
        color: "green",
        start: ('2021 09 25 3:00 PM'),
        end: ('2021 09 25 5:00 PM'),
        name: "Minecraft Ultra Hardcore (UHC)",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Ultra Hardcore (UHC) is a custom game mode where players do not regenerate health or respawn. Players must use potions, suspicious stews, golden apples, or enchanted golden apples to regenerate health.
We may also enable modifiers that make the game even more lively or play in teams, depending on streamer interest.
<a href="https://twitch.tv/NekoOverflow">@NekoOverflow on Twitch</a> hosts this event & it is open to all
        `.trim()
    },
    {
        id: 'jackbox',
        color: "red",
        start: ('2021 09 25 5:30 PM'),
        end: ('2021 09 25 8:00 PM'),
        name: "Jackbox Games",
        timed: true,
        backgroundImage: "/assets/jackbox.jpg",
        description: `
Jackbox games are a series of various party minigames that encourage making jokes and community participation.
There are a total of 7 Jackbox games currently, each with multiple subgames. We have a wide range of games to choose from!
<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> hosts this event & it is open to all
        `.trim()
    },
    {
        id: 'darksouls3',
        color: "yellow",
        start: ('2021 09 25 8:30 PM'),
        end: ('2021 09 26 12:00 AM'),
        name: "Dark Souls 3",
        timed: true,
        backgroundImage: "/assets/ds3.jpg",
        description: `
<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is going to be playing Dark Souls 3 with one of his friends.
They've already gotten to Pontiff so watch as they struggle to get past him!
        `.trim()
    },
    {
        id: 'variety',
        color: "brown",
        start: ('2021 09 26 12:00 AM'),
        end: ('2021 09 26 3:00 AM'),
        name: "Variety Gaming",
        timed: true,
        backgroundImage: "/assets/variety_gaming.png",
        description: `
<a href="https://twitch.tv/akillezii">@AkillezII on Twitch</a> is going to streaming a variety of gaming content on their channel!
        `.trim()
    },
    {
        id: 'powerstone',
        color: "orange",
        start: ('2021 09 26 3:00 AM'),
        end: ('2021 09 26 3:30 AM'),
        name: "Power Stone",
        timed: true,
        backgroundImage: "/assets/power_stone.jpg",
        description: `
<a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> is going to be playing some Power Stone, a 3d brawler for the Dreamcast!
Go check them out!
        `.trim()
    },
    {
        id: 'tetris',
        color: "red",
        start: ('2021 09 26 3:30 AM'),
        end: ('2021 09 26 4:00 AM'),
        name: "Tetris",
        timed: true,
        backgroundImage: "/assets/tetris.png",
        description: `
<a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> is going to be playing some Tetris. Undecided right now if going to do Puyo or 99 - so join them to decide!
        `.trim()
    },
    {
        id: 'mariokart8',
        color: "blue",
        start: ('2021 09 26 4:00 AM'),
        end: ('2021 09 26 4:30 AM'),
        name: "Mario Kart 8",
        timed: true,
        backgroundImage: "/assets/mariokart8.jpg",
        description: `
<a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> is going to be playing some Mario Kart 8 Deluxe.
He's probably going to play multiplayer - so go against him... If you dare >:) 
        `.trim()
    },
    {
        id: 'pcbuildsimulator',
        color: "brown",
        start: ('2021 09 26 4:30 AM'),
        end: ('2021 09 26 5:00 AM'),
        name: "PC Build Simulator",
        timed: true,
        backgroundImage: "/assets/buildsimulator.jpg",
        description: `
<a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> is going to be playing some PC Build Simulator.
He's a hardware engineer, so it's bound to be a fun and informative time!
        `.trim()
    },
    {
        id: 'mc-redstone-processor',
        color: "green",
        start: ('2021 09 26 5:00 AM'),
        end: ('2021 09 26 7:00 AM'),
        name: "Building Processor in MC Redstone",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
<a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> is going to build a processor in Minecraft using Redstone!
Want to learn redstone? Have questions about hardware engineering? Join and find out!
        `.trim()
    },
    {
        id: 'lifeslide',
        color: "orange",
        start: ('2021 09 26 8:00 AM'),
        end: ('2021 09 26 10:00 AM'),
        name: "Lifeslide Competition",
        timed: true,
        backgroundImage: "/assets/lifeslide.jpg",
        description: `
Lifeslide is an atmospheric paper plane flight simulator with arcade gameplay.
We'll be competing in Lifeslide's "challenge mode" to see who can fly the riskiest in order to gain the most points!
We're <a href="https://twitch.tv/dreamteckstudio">joined by the developers of Lifeslide streaming on Twitch</a> and in VC competing with us!
Anyone is welcome to join our competition
        `.trim()
    },
    {
        id: 'minecraft-cave-poker',
        color: "green",
        start: ('2021 09 26 10:00 AM'),
        end: ('2021 09 26 12:30 PM'),
        name: "Minecraft Cave Poker",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Cave Poker is a Minecraft poker game, without specific cards, where players can mine for resources and then bet on who has collected the most. It's also been described as similar to "liar's dice."
<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> hosts & event is open to all
        `.trim()
    },
    {
        id: 'minecraft-mine-a-chunk',
        color: "green",
        start: ('2021 09 26 1:00 PM'),
        end: ('2021 09 26 4:30 PM'),
        name: "Minecraft Mine-a-Chunk",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Mine-a-Chunk is a group speedrun challenge event where we try to mine out a 16x16 "chunk" of blocks within Minecraft
<a href="https://twitch.tv/AkillezII">@AkillezII on Twitch</a> hosts this event & it is open to all
        `.trim()
    }
];

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
}

.schedule ul {
	list-style: none;
	margin: 0 .5rem;

	height: calc(24 * 6 * .5rem);
	position: relative;
}

.day h2 {
	all: unset;
	display: block;
	font-size: 1.2rem;
	text-align: center;
	border-bottom: 1px solid var(--theme-text-lighter);
}
</style>
