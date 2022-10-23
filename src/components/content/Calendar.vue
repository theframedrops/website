<template>
  <div class="schedule">
    <div class="day" v-for="day in days" :key="day.date">
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
import CalendarEvent from "./CalendarEvent.vue";

import dayjs, { Dayjs } from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
import dayjsTimezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

// Event times are listed in UTC
const events: Omit<Event, 'height' | 'width' | 'top' | 'relative' | 'left'>[] = [
  {
    start: "2022 11 04 8:00 PM",
    end: "2022 11 04 9:00 PM",
    name: "Minecraft Minigolf",
    timed: true,
    backgroundImage: "/assets/mc-minigolf.png",
    description: `
Minecraft Minigolf features an 18-hole minigolf course built on fennifith's survival server. We'll play through the course and track scores - and possibly explore some other minigames in the area!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 04 9:00 PM",
    end: "2022 11 04 10:30 PM",
    name: "Minecraft Advancement Hunt",
    timed: true,
    backgroundImage: "/assets/minecraft.jpg",
    description: `
Minecraft Advancement Hunt is a team competition to score the most custom advancements as possible before the other team! The list of advancements will be released shortly before the event.
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 6:00 PM",
    end: "2022 11 05 8:00 PM",
    name: "Trifox First Playthrough w/ Dev Commentary",
    timed: true,
    backgroundImage: "/assets/trifox.jpg",
    description: `
Trifox is a twin-stick action-adventure game inspired by classic platformers that came out on October 14th 2022.
<br><a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is a huge fan of platformers, and will be playing the game for the first time with developer commentary!
		`.trim(),
  },
  {
    start: "2022 11 05 8:00 PM",
    end: "2022 11 05 9:30 PM",
    name: "Minecraft Mega Bedwars",
    timed: true,
    backgroundImage: "/assets/mc-bedwars.png",
    description: `
Mega Bedwars is a team bedwars competition set in a custom dimension - based on the outer end island terrain!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 9:30 PM",
    end: "2022 11 05 10:30 PM",
    name: "Minecraft Endless Parkour",
    timed: true,
    backgroundImage: "/assets/mc-endless-parkour.png",
    description: `
Endless Parkour is an infinite, endless parkour map featuring unique biomes, structures, and redstone features. The objective is to complete as much parkour as possible without falling off, losing health, or getting smacked by a zombie!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 10:00 PM",
    end: "2022 11 06 1:00 AM",
    name: "Trifox Speedrunning Attempts",
    timed: true,
    backgroundImage: "/assets/trifox.jpg",
    description: `
Trifox is a A twin-stick action-adventure game inspired by classic platformers that came out on October 14th 2022 - it's a new game, but that won't deter <a href="https://twitch.tv/selcouthmind">@selcouthmind on Twitch</a> from speedrunning it.
		`.trim(),
  },
  {
    start: "2022 11 05 10:30 PM",
    end: "2022 11 06 12:00 AM",
    name: "Tetris Effect: Connected",
    timed: true,
    backgroundImage: "/assets/tetris_effect.jpg",
    description: `
Tetris Effect: Connected is the latest Tetris game with dazzling graphics, challenging game modes, and more.
<br>Join <a href="https://twitch.tv/techygrrrl">@techygrrrl on Twitch</a> to see her incredible capabilities in the game.
		`.trim(),
  },
  {
    start: "2022 11 04 6:30 PM",
    end: "2022 11 04 8:00 PM",
    name: "Minecraft Chaotic Caving",
    timed: true,
    backgroundImage: "/assets/mc-chaotic-caving.png",
    description: `
Chaotic Caving is a timed spelunking adventure where teams compete to cave for special ores, find unique boss fights, loot boxes, and custom equipment scattered about the world!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 06 9:00 PM",
    end: "2022 11 06 10:30 PM",
    name: "Minecraft Chaotic Caving #2",
    timed: true,
    backgroundImage: "/assets/mc-chaotic-caving.png",
    description: `
Chaotic Caving is a timed spelunking adventure where teams compete to cave for special ores, find unique boss fights, loot boxes, and custom equipment scattered about the world!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 06 6:00 PM",
    end: "2022 11 06 9:00 PM",
    name: "Xonotic DM/CA/CTF",
    timed: true,
    backgroundImage: "/assets/xonotic.png",
    description: `
<a href="https://xonotic.org">Xonotic</a> is an arena-style first person shooter that combines interesting and unique features with well-balanced physics and gameplay.
We'll be running a few rounds of DM, Clan Arena, and Capture the Flag modes!
<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 10:00 AM",
    end: "2022 11 05 11:30 AM",
    name: "Computer Science Sketchful",
    timed: true,
    backgroundImage: "/assets/code.jpg",
    description: `
<a href="https://sketchful.io">Sketchful</a> is a multiplayer pictionary game that we'll be playing with a set of generated Computer Science and Data Structures topics!
<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 11:30 AM",
    end: "2022 11 05 1:00 PM",
    name: "CodinGame Escape Rooms",
    timed: true,
    backgroundImage: "/assets/code.jpg",
    description: `
<a href="https://escape.codingame.com/">Coding Escape</a> is a set of multiplayer escape room puzzles that combines combines programming, creativity and non-coding exercises.
<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim(),
  },
  {
    start: "2022 11 05 3:00 AM",
    end: "2022 11 05 8:00 AM",
    name: "Programming with OdatNurd #1",
    timed: true,
    backgroundImage: "/assets/code.jpg",
    description: `
<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
        `.trim(),
  },
  {
    start: "2022 11 05 8:00 AM",
    end: "2022 11 05 10:00 AM",
    name: "Lifeslide Speedrun w/ Dev Commentary",
    timed: true,
    backgroundImage: "/assets/lifeslide.jpg",
    description: `
Lifeslide is an atmospheric paper plane flight simulator with arcade gameplay.

<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> will be attempting to do speedrun attempts throughout the two-hour block.

We'll be <a href="https://dreamteck.io">joined by the developers of Lifeslide</a> who will be in VC hanging out and chatting with us!
		`.trim(),
  },
  {
    start: "2022 11 06 3:00 AM",
    end: "2022 11 06 7:00 AM",
    name: "Programming with OdatNurd #2",
    timed: true,
    backgroundImage: "/assets/code.jpg",
    description: `
<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
        `.trim(),
  },
  {
    start: "2022 11 07 3:00 AM",
    end: "2022 11 07 7:00 AM",
    name: "Programming with OdatNurd #3",
    timed: true,
    backgroundImage: "/assets/code.jpg",
    description: `
<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
        `.trim(),
  },
  {
    start: "2022 11 06 10:00 AM",
    end: "2022 11 06 4:00 PM",
    name: "Gaming with CleaverEchsD",
    timed: true,
    backgroundImage: "/assets/variety_gaming.png",
    description: `
<a href="https://twitch.tv/cleaverechsd">@cleaverechsd on Twitch</a> will be playing various video games for charity!
        `.trim(),
  },
  {
    start: "2022 11 06 4:00 PM",
    end: "2022 11 06 6:00 PM",
    name: "Gaming with GlitchButSmol",
    timed: true,
    backgroundImage: "/assets/variety_gaming.png",
    description: `
<a href="https://twitch.tv/glitchbutsmol">@GlitchButSmol on Twitch</a> will be playing various video games for charity!
        `.trim()
    }
].map(({ start, end, ...rest }) => ({
	// convert start/end times from UTC to local timezone
	start: dayjs(start).utc(true).local().format("YYYY MM DD h:mm A"),
	end: dayjs(end).utc(true).local().format("YYYY MM DD h:mm A"),
	...rest,
	// Fixes tab ordering
})).sort((dayA, dayB) => {
	const dayAStart = dayjs(dayA.start).utc(true);
	const dayBStart = dayjs(dayB.start).utc(true);
	return dayAStart.isAfter(dayBStart) ? 1 : -1;
});

type CalendarDay = {
  date: string;
  events: Event[];
};

const days = events.reduce((days, event) => {
  const pushEvent = (start: Dayjs, end: Dayjs) => {
    const eventDate = start.format("YYYY-MM-DD");

    // find/create a day for the event
    let day = days.find((d) => d.date === eventDate);
    if (!day) {
      day = {
        date: eventDate,
        events: [],
      };
      days.push(day);
    }

    // look for any previous intersecting events & find their overlappingCount
    const overlappingDays = day.events.filter((e) => {
      if (dayjs(e.start).isBefore(start)) {
        return dayjs(e.end).isAfter(start);
      } else {
        return dayjs(e.start).isBefore(end);
      }
    });

    const relative = dayjs(eventDate || event.start);
    const hourStart = Math.max(dayjs(event.start).diff(relative, "minute"), 0);
    const hourEnd = Math.min(
      dayjs(event.end).diff(relative, "minute"),
      24 * 60
    );

	const height = (hourEnd - hourStart) / 10;
	const top = hourStart / 10;

	const finalEvent = {
      ...event,
      height,
      top,
	  left: '0',
	  width: '100%',
      startRelative: eventDate,
      overlappingDays,
      relative,
    };

	for (let overlappingDay of overlappingDays) {
		overlappingDay.overlappingDays.push(finalEvent);
	}

    // push the event into the day list
    day.events.push(finalEvent);
  };

  const eventDateStart = dayjs(event.start).format("YYYY-MM-DD");
  const eventDateEnd = dayjs(event.end).format("YYYY-MM-DD");

  if (eventDateStart !== eventDateEnd && dayjs(event.end).hour() > 0) {
    pushEvent(dayjs(event.start), dayjs(event.start).endOf("day"));
    pushEvent(dayjs(event.end).startOf("day"), dayjs(event.end));
  } else {
    pushEvent(dayjs(event.start), dayjs(event.end));
  }

  return days;
}, [] as CalendarDay[])
.map(day => {
	day.events = day.events.map(event => {
	
		const width = `${100 / (event.overlappingDays.length + 1)}%`;

		const eventStartX = event.top;
		const eventEndX = event.top + event.height;

		let left = null;
		for (let overlapDay of event.overlappingDays) {

			const overlapStartX = overlapDay.top;
			const overlapEndX = overlapDay.top + overlapDay.height;

			// These overlap
			if (eventStartX >= overlapStartX && eventStartX <= overlapEndX) {
				if (left === null) {
					left = `calc(${width} * 2)`;
				} else {
					left = `calc(${left} + ${width})`
				}
			}
		}
		
		if (left) {
			event.left = left;
		}
		
		event.width = width;

		return event;
	})
	return day;
});
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
